import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"/index",
    children:[
      {
        path:"/index",
        component:()=>import("../views/Index.vue"),
        // redirect:"/index/foreign",
        // children:[
        //   {
        //     path:"course",
        //     component:()=>import("../views/indexTab/Course.vue"),
        //   },
        //   {
        //     path:"foreign",
        //     component:()=>import("../views/indexTab/Foreign.vue"),
        //   },
        //   {
        //     path:"echo",
        //     component:()=>import("../views/indexTab/Echo.vue"),
        //   }
        // ]
      },
      {
        path:"/foreignlist",
        component:()=>import("../views/indexTo/ForeignList.vue")
      },
      {
        path:"/hello",
        component:()=>import("../views/Hello.vue")
      },
      {
        path:"/timetable",
        component:()=>import("../views/Timetable.vue"),
        redirect:"/timetable/calendar",
        meta: { requiresAuth: true },
        children:[
          {
            path:"calendar",
            component:()=>import("../views/timetable/Calendar.vue")
          },
          {
            path:"list",
            component:()=>import("../views/timetable/List.vue")
          }
        ]
      },
      {
        path:"/mine",
        component:()=>import("../views/Mine.vue"),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path:"/teacherlist",
    component:()=> import("../views/TeacherList.vue")
  },
  //我的页跳转路由
  {
    path:"/waijiao",
    component:()=> import("../views/mien/Waijiao.vue")
  },
  {
    path:"/dingdan",
    component:()=> import("../views/mien/Dingdan.vue")
  },
  {
    path:"/kecheng",
    component:()=> import("../views/mien/Kecheng.vue")
  },
  {
    path:"/huiben",
    component:()=> import("../views/mien/Huiben.vue")
  },
  {
    path:"/peiyin",
    component:()=> import("../views/mien/Peiyin.vue")
  },
  {
    path:"/baogao",
    component:()=> import("../views/mien/Baogao.vue")
  },
  {
    path:"/huifang",
    component:()=> import("../views/mien/Huifang.vue")
  },
  {
    path:"/kefu",
    component:()=> import("../views/mien/Kefu.vue")
  },
  {
    path:"/xiaoxi",
    component:()=> import("../views/mien/Xiaoxi.vue")
  },
  {
    path:"/shezhi",
    component:()=> import("../views/mien/Shezhi.vue")
  },
  {
    path:"/shengyv",
    component:()=> import("../views/mien/Shengyv.vue")
  },
  {
    path:"/juan",
    component:()=> import("../views/mien/Juan.vue")
  },
  // 登录注册路由
  {
    path:"/login",
    component:()=> import("../views/Login.vue")
  },
  //结算路由
  {
    path:"/closing/:id",
    component:()=> import("../views/Closing.vue"),
    props: true
  },

  

   // hello路由
   {
    path:"/selected",
    component:()=> import("../views/Hello/selected.vue")
  },
  {
    path:"/custom",
    component:()=> import("../views/Hello/custom.vue")
  },
  {
    path:"/huihua",
    component:()=> import("../views/Hello/huihua_list.vue"),
    meta: { requiresAuth: true }
  },
  {
    path:"/hello_details/:id",
    component:()=> import("../views/Hello/hello_details.vue")
  },


  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    //timeDetail详情页
    path:"/timedetail/:id",
    component: () => import('../views/TimeDetail.vue'),
    //传参
    props: true
  },
  {
    //teacherdetail详情页
    path:"/teacherdetail/:id",
    component: () => import('../views/TeacherDetail.vue'),
    //传参
    props: true
  },
  {
    path:"/:catchAll(.*)",
    component:()=> import("../views/Error.vue")
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {next();}
  else { // 判断该路由是否需要登录权限
  if (to.meta.requiresAuth && !sessionStorage.getItem("token")) { // 判断当前的token是否存在
    next({
      path: "/login",
      query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
    });
  }else{
    next();
  }
  }
})

export default router
