function invertColors(isOnline) {
  if (isOnline === false) {
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--background-color', 'darkslategray');
    document.documentElement.style.setProperty('--dot-color', 'red');
  } else {
    document.documentElement.style.setProperty('--text-color', 'darkslategray');
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--dot-color', 'green');
  }
}

export default function ({ store }) {
  if (process.client) {
    store.commit('SET_IS_ONLINE', navigator.onLine);
    invertColors(store.getters.isOnline);
    window.addEventListener('online', () => {
      store.commit('SET_IS_ONLINE', navigator.onLine);
      invertColors(store.getters.isOnline);
    });
    window.addEventListener('offline', () => {
      store.commit('SET_IS_ONLINE', navigator.onLine);
      invertColors(store.getters.isOnline);
    });
  }
};