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
        redirect:"/index/foreign",
        children:[
          {
            path:"course",
            component:()=>import("../views/indexTab/Course.vue"),
          },
          {
            path:"foreign",
            component:()=>import("../views/indexTab/Foreign.vue"),
          },
          {
            path:"echo",
            component:()=>import("../views/indexTab/Echo.vue"),
          }
        ]
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

   // hello尝试路由
   {
    path:"/selected",
    component:()=> import("../views/Hello/selected.vue")
  },
  {
    path:"/custom",
    component:()=> import("../views/Hello/custom.vue")
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
