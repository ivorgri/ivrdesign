export default function ({ store }) {
  if (process.client) {
    store.commit('setIsOnline', navigator.onLine);
    window.addEventListener('online', () => {
      store.commit('setIsOnline', navigator.onLine);
    });
    window.addEventListener('offline', () => {
      store.commit('setIsOnline', navigator.onLine);
    });
  }
};
