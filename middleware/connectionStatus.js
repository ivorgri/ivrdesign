export default function ({ store }) {
  if (process.client) {
    store.commit('SET_IS_ONLINE', navigator.onLine);

    window.addEventListener('online', () => {
      store.commit('SET_IS_ONLINE', navigator.onLine);
    });
    window.addEventListener('offline', () => {
      store.commit('SET_IS_ONLINE', navigator.onLine);
    });
  }
};
