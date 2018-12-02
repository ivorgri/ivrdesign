import Vue from 'vue';

Vue.filter('formatDate', unix_timestamp => {
  if (unix_timestamp) {
    const date = new Date(unix_timestamp*1000);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    return `${day} - ${month} - ${year}`;
  }
  return '';
})