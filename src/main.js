import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false

export const globalStateApp = new Vue({
  render: h => h(App),
  data: {
    info: [

    ],
    config: {
      headers: {
        'accept-language': 'it',
        'content-type': 'application/json',
        'x-musement-currency': 'EUR',
        'x-musement-version': '3.4.0'
      }
    }
  },
  mounted() {
    axios
      .get('https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0', { config: this.config })
      .then(response => (this.info = response))
  }

}).$mount('#app')
