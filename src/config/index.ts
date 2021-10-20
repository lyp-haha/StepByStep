export const menuList = [
  {
    name:'vue3+Ts+vite+router@4+elment-plus+sass',
    path:'/index/newlyBuild',
  }
]

export const routeLsit = [
  {
    path:'/index',
    name:'index',
    component:()=>import('../views/index.vue'),
    children:[
      {
        path:'',
        name:'home',
        component:()=>import('../views/home/home.vue')
      },
      {
        path:'newlyBuild',
        name:'newlyBuild',
        component:()=>import('../views/newlyBuild/index.vue')
      }
    ],
  },
  {
    path:'/',
    name:'',
    redirect:'/index'
  },
];