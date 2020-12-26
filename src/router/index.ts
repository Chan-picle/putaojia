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
    component:()=> import("../views/Hello/huihua_list.vue")
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
    path:"/teacherdetail",
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
})

export default router
