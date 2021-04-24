import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

import VueMask from 'v-mask'
import money from 'v-money'
import Vue2Filters from 'vue2-filters'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

Vue.config.productionTip = false

Vue.use(VueMask)
Vue.use(Vue2Filters)
Vue.use(VueFilterDateFormat)
Vue.use(money, { precision: 2 })
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
