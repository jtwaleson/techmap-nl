import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';
import GmapCluster from 'vue2-google-maps/dist/components/cluster';

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBJagTu45RHP0E1EBMERlO5cvrjCRpuXzw',
    //libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
});

Vue.component('GmapCluster', GmapCluster);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
