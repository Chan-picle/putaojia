import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Button from 'vant';
<<<<<<< HEAD
//下拉刷新用
// import { reactive } from 'vue';
import { Tabbar, TabbarItem,Button,Swipe, SwipeItem,PullRefresh,Icon, NavBar } from 'vant';
=======
import { Tabbar, TabbarItem, Button, NavBar, Tab, Tabs, Calendar,Swipe ,SwipeItem,PullRefresh} from 'vant';
>>>>>>> master
import 'vant/lib/index.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
<<<<<<< HEAD
app.use(Icon);
app.use(NavBar);
app.mount('#app');
=======
>>>>>>> master
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
