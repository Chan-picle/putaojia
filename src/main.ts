import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Button from 'vant';
import { Tabbar, TabbarItem, Button, NavBar, Tab, Tabs, Calendar,Swipe ,SwipeItem,PullRefresh} from 'vant';
import 'vant/lib/index.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
// 轮播
app.use(Swipe);
app.use(SwipeItem);
//下拉刷新
app.use(PullRefresh);

app.use(NavBar);
app.use(Tab);
app.use(Tabs);
app.use(Calendar);
app.mount('#app');
