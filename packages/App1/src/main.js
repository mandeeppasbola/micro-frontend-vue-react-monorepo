import Vue from 'vue';// used for importing 3rd party of code
import App from './App.vue'; // vue file which contains logic it should be imported in main file

new Vue({
  render: h => h(App),
}).$mount('#app');
