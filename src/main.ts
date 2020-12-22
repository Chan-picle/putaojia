import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Button from 'vant';
import { Tabbar, TabbarItem,Button } from 'vant';
import 'vant/lib/index.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app');