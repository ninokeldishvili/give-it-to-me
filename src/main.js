import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '../src/font-awesome'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).mount('#app')
