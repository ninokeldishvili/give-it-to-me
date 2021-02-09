import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '../src/font-awesome'
import axios from 'axios'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import router from './router'


axios.defaults.baseURL = 'https://6011797291905e0017be51c6.mockapi.io/api/v1/';
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).use(store).mount('#app')
