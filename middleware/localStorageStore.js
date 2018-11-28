export default function ({ store }) {
  if (process.client) {
    store.subscribe((mutation,state) => {
      localStorage.setItem('store', JSON.stringify(state));
    });
  }
};
