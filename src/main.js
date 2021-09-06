import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Store } from 'vuex'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/common.css'

const store = new Store()

createApp(App).use(store).use(router).mount('#app')
