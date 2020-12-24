import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Button from 'vant';
import { Tabbar, TabbarItem, Button, NavBar, Tab, Tabs, Calendar,Swipe ,SwipeItem,PullRefresh,Field,Form,Search,Icon,Empty,Grid, GridItem, Toast,Sticky} from 'vant';
import 'vant/lib/index.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);

app.use(Icon);
//轻提示
app.use(Toast);

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
// Form 表单
app.use(Field);
app.use(Form);
//宫格
app.use(Grid);
app.use(GridItem);

app.use(NavBar);
app.use(Tab);
app.use(Tabs);
app.use(Calendar);
//搜索框
app.use(Search);
//error空页面
app.use(Empty);
//宫格
app.use(Grid);
app.use(GridItem);
//粘性定位
app.use(Sticky);




app.mount('#app');
