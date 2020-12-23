import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Button from 'vant';
import { Tabbar, TabbarItem, Button, NavBar, Tab, Tabs, Calendar,Swipe ,SwipeItem,PullRefresh,Search,Icon,Empty } from 'vant';
import 'vant/lib/index.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
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

app.use(NavBar);
app.use(Tab);
app.use(Tabs);
app.use(Calendar);
//搜索框
app.use(Search);
//error空页面
app.use(Empty);
app.mount('#app');
