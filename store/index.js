const cmsApiUrl = 'https://cms.ivrdesign.nl/cockpit-master/api';
const getSingletonUrl = `${cmsApiUrl}/singletons/get`;
const getCollectionUrl = `${cmsApiUrl}/collections/get`;

async function getSingleton(singleton, app) {
  return await app.$axios.$get(`${getSingletonUrl}/${singleton}?token=${process.env.CMS_API_TOKEN}`)
}

async function getCollection(collection, app) {
  return await app.$axios.$get(`${getCollectionUrl}/${collection}?token=${process.env.CMS_API_TOKEN}`)
}

export const state = () => ({
  online: true,
  contactDetails: {},
  pages: [],
  blogPosts: [],
  projects: [],
})

export const getters = {
  isOnline (state) {
    return state.online;
  },
  getContactDetails: state => {
    return state.contactDetails;
  },
  getNavItems: state => {
    return state.pages.filter((page) => page.addToMenu === true) || [];
  },
  getPageBySlug: (state) => (slug) => {
    return state.pages.find((page) => page.slug === slug) || {};
  },
  getBlogPosts: state => {
    return state.blogPosts.filter((blogPost) => blogPost.published === true) || [];
  },
  getBlogPostBySlug: (state) => (slug) => {
    return state.blogPosts.find((blogPost) => blogPost.slug_slug === slug) || {};
  },
  getBlogPostById: (state) => (id) => {
    return state.blogPosts.find((blogPost) => blogPost._id === id) || {};
  },
  getProjects: state => {
    return state.projects.filter((project) => project.published === true) || [];
  },
  getProjectBySlug: (state) => (slug) => {
    return state.blogPosts.find((project) => project.slug_slug === slug) || {};
  },
  getProjectById: (state) => (id) => {
    return state.blogPosts.find((project) => project._id === id) || {};
  },
}

export const mutations = {
  setIsOnline (state, value) {
    state.online = value;
  },
  SET_CONTACTDETAILS (state, contactDetails) {
    state.contactDetails = contactDetails;
  },
  SET_PAGES (state, pages) {
    state.pages = pages;
  },
  SET_BLOG_POSTS (state, blogPosts) {
    state.blogPosts = blogPosts;
  },
  SET_PROJECTS (state, projects) {
    state.projects = projects;
  },
}

export const actions = {
  async nuxtServerInit({ commit },{ app }) {
    let [ contactDetails, pages, blogPosts, projects ] = [{},{},{},{}];
    try {
      [ contactDetails, pages, blogPosts, projects ] = await Promise.all([
        getSingleton('contactDetails', app),
        getCollection('pages', app),
        getCollection('blogPosts', app),
        getCollection('projects', app)
      ]);
    } catch (error) {
      console.log(error);
    }
    commit('SET_CONTACTDETAILS', contactDetails);
    commit('SET_PAGES', pages.entries);
    commit('SET_BLOG_POSTS', blogPosts.entries);
    commit('SET_PROJECTS', projects.entries);
  }
}