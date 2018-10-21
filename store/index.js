export const state = () => ({
  online: true,
})

export const getters = {
  isOnline (state) {
    return state.online;
  },
}

export const mutations = {
  setIsOnline (state, value) {
    state.online = value;
  },
}
