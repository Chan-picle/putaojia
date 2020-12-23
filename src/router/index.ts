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
        component:()=>import("../views/Timetable.vue")
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
    path:"/error",
    component:()=> import("../views/Error.vue")
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
