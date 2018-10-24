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
})

export const getters = {
  isOnline (state) {
    return state.online;
  },
  getContactDetails: state => {
    return state.contactDetails;
  },
  getHomepage: state => {
    return state.pages.find((page) => page.template === 'Homepage');
  },
  getBlogpage: state => {
    return state.pages.find((page) => page.template === 'Blog');
  },
  getBlogPosts: state => {
    return state.blogPosts;
  }
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
  SET_BLOG_POSTS (state, blog_posts) {
    state.blog_posts = blog_posts;
  },
}

export const actions = {
  async nuxtServerInit({ commit },{ app }) {
    let [ contactDetails, pages, blogPosts ] = [{},{},{}];
    try {
      [ contactDetails, pages, blogPosts ] = await Promise.all([
        getSingleton('contactDetails', app),
        getCollection('pages', app),
        getCollection('blogPosts', app)
      ]);
    } catch (error) {
      console.log(error);
    }
    commit('SET_CONTACTDETAILS', contactDetails);
    commit('SET_PAGES', pages.entries);
    commit('SET_BLOG_POSTS', blogPosts.entries);
  }
}