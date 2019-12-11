import Vue from 'vue'
import App from './App.vue'
import NutUI from '@nutui/nutui';
// import '@nutui/nutui/dist/nutui.css';
import '@nutui/nutui/dist/nutui.scss';

NutUI.install(Vue);
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
