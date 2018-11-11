import axios from 'axios';

const cmsApiUrl = 'https://cms.ivrdesign.nl/cockpit-master/api';
const getCollectionUrl = `${cmsApiUrl}/collections/get`;

async function getCollection(collection,cmsApiToken) {
  return await axios.get(`${getCollectionUrl}/${collection}?token=${cmsApiToken}`);
}

export default async function () {
  const cmsApiToken = this.options.env.CMS_API_TOKEN;
  let [ pages, blogPosts, projects ] = [{},{},{}];
  try {
    [ pages, blogPosts, projects ] = await Promise.all([
      getCollection('pages', cmsApiToken),
      getCollection('blogPosts', cmsApiToken),
      getCollection('projects', cmsApiToken)
    ]);
  } catch (error) {
    console.log(error);
  }
  const pageRoutes = pages.data.entries.map((page) => {
    return {
      route: `/${page.slug_slug}`,
      payload: page,
    }
  });
  const blogPostRoutes = blogPosts.data.entries.map((blogPost) => {
    return {
      route: `/blog/${blogPost.slug_slug}`,
      payload: blogPost,
    }
  });
  const projectRoutes = projects.data.entries.map((project) => {
    return {
      route: `/projects/${project.slug_slug}`,
      payload: project,
    }
  });
  this.options.generate.routes = pageRoutes.concat(blogPostRoutes, projectRoutes);
}