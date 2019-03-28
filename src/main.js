import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';
import GmapCluster from 'vue2-google-maps/dist/components/cluster';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBJagTu45RHP0E1EBMERlO5cvrjCRpuXzw',
  },
});

Vue.component('GmapCluster', GmapCluster);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
