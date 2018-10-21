const cmsApiUrl = 'https://cms.ivrdesign.nl/cockpit-master/api';
const getSingletonUrl = `${cmsApiUrl}/singletons/get`;

async function getSingleton(singleton, app) {
  return await app.$axios.$get(`${getSingletonUrl}/${singleton}?token=${process.env.CMS_API_TOKEN}`)
}

export const state = () => ({
  online: true,
  contactDetails: {},
})

export const getters = {
  isOnline (state) {
    return state.online;
  },
  getContactDetails: state => {
    return state.contactDetails;
  },
}

export const mutations = {
  setIsOnline (state, value) {
    state.online = value;
  },
  SET_CONTACTDETAILS (state, contactDetails) {
    state.contactDetails = contactDetails;
  },
}

export const actions = {
  async nuxtServerInit({ commit },{ app }) {
    let [ contactDetails ] = [{}];
    try {
      [ contactDetails ] = await Promise.all([
        getSingleton('contactDetails', app),
      ]);
    } catch (error) {
      console.log(error);
    }

    commit('SET_CONTACTDETAILS', contactDetails);
  }
}