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
        component:()=>import("../views/Index.vue")
      },
      {
        path:"/hello",
        component:()=>import("../views/Hello.vue")
      },
      {
        path:"/timetable",
        component:()=>import("../views/Timetable.vue"),
        redirect:"/timetable/calendar",
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
        component:()=>import("../views/Mine.vue")
      }
    ]
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
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path:"/:catchAll(.*)",
    component:()=> import("../views/Error.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
