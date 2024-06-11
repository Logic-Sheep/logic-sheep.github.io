import "./style.css";

import { createApp } from "vue";

import App from "./App.vue";
import Root from "./components/Root.vue";
import { createMemoryHistory, createRouter } from 'vue-router'
import coming_soon from './components/coming_soon.vue'


const routes = [
  {path: '/', component: Root},
  {path: '/comingsoon', component: coming_soon}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
createApp(App).use(router).mount("#app");
