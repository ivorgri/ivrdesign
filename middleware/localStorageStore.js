export default function ({ store }) {
  if (process.client) {
    if(localStorage.getItem('store')) {
      let savedStore = JSON.parse(localStorage.getItem('store'));
      store.commit('INITIALIZE_STORE', savedStore);
    }
    store.subscribe((mutation,state) => {
      localStorage.setItem('store', JSON.stringify(state));
    });
  }
};
