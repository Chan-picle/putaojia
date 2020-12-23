import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Button from 'vant';
//下拉刷新用
// import { reactive } from 'vue';
import { Tabbar, TabbarItem,Button,Swipe, SwipeItem,PullRefresh,NavBar, Tab, Tabs } from 'vant';
import 'vant/lib/index.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.mount('#app');
// 轮播
app.use(Swipe);
app.use(SwipeItem);
//下拉刷新
app.use(PullRefresh);
// 头部导航标题
app.use(NavBar);
//标签切换
app.use(Tab);
app.use(Tabs);

