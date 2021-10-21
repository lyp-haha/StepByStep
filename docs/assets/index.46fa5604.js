import{f as F,u as _,t as E,r as c,o as d,j as C,m as u,s,w as o,p as h,l as m,x as e,g as v}from"./vendor.dcaaa5e2.js";import{_ as B}from"./index.c3c3a0ab.js";var A="./assets/code.54c3e8fa.png";const t=n=>(h("data-v-17928354"),n=n(),m(),n),D={class:"newlyBuild"},f=t(()=>u("h2",{class:"h2Title"},"vue3.x+ts+vite+vueRouter@4+elment-plus+sass",-1)),x=t(()=>u("h4",{class:"h4Title"}," 1.\u51C6\u5907\u5DE5\u5177 ",-1)),y=t(()=>u("div",{class:"content"}," node\u81EA\u884C\u5B89\u88C5\uFF0C\u6559\u7A0B\u5728\u67D0\u5EA6\u4E0A\u5F88\u591A\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u8FC7\u591A\u53D9\u8FF0\u4E86\u3002 ",-1)),T=t(()=>u("h4",{class:"h4Title"}," 2.\u5B89\u88C5vite ",-1)),$={class:"content"},b=e(" \u4E3A\u4EC0\u4E48\u9009\u62E9vite\u5462\uFF1F\u501F\u7528\u5B98\u7F51\u8BF4\u7684\u4E00\u53E5\u8BDD\u201Cvite\u662F\u4E0B\u4E00\u4EE3\u524D\u7AEF\u5F00\u53D1\u4E0E\u6784\u5EFA\u5DE5\u5177\u201D\uFF01\u6211\u4E5F\u76F8\u4FE1vite\u662F\u5927\u52BF\u6240\u8D8B\u3002 \u9996\u5148\u6211\u4EEC\u8981\u5B89\u88C5"),I=e("vite"),g=e("\uFF0C"),j=t(()=>u("br",null,null,-1)),P=e(" 1.\u4F7F\u7528npm\u5B89\u88C5"),k=t(()=>u("br",null,null,-1)),w=t(()=>u("pre",null,[e("        "),u("code",null,`
        $ npm init vite@latest
        `),e(`
      `)],-1)),N=e(" 2.\u4F7F\u7528yarn\u5B89\u88C5"),R=t(()=>u("br",null,null,-1)),V=t(()=>u("pre",null,[e("        "),u("code",null,`
        $ yarn create vite
        `),e(`
      `)],-1)),H=t(()=>u("h4",{class:"h4Title"}," 3.\u5B89\u88C5vue3 ",-1)),S={class:"content"},W=e(" \u5728\u524D\u7AEF\u5DE5\u5382\u5316\u7684\u8D8B\u52BF\u4E0B\uFF0Cvue3\u7684\u9AD8\u6027\u80FD\uFF0C\u5BF9ts\u7684\u9AD8\u5951\u5408\u5EA6\uFF0C\u4EE5\u53CA\u7EC4\u5408\u5F0F API\u7684\u52A0\u6301\uFF0C\u57FA\u672C\u4E0A\u638C\u63E1vue3\u7B97\u662F\u5FC5\u5907\u6280\u80FD\u4E4B\u4E00\u4E86\uFF0C"),z=e("vue3"),M=e("\u7684\u5B89\u88C5\u6B65\u9AA4\uFF0C"),U=t(()=>u("br",null,null,-1)),Y=e(" \u4F7F\u7528npm\u5B89\u88C5"),q=t(()=>u("br",null,null,-1)),G=t(()=>u("pre",null,[e("        "),u("code",null,`
        # \u6700\u65B0\u7A33\u5B9A\u7248
        $ npm install vue@next
        `),e(`
      `)],-1)),J=t(()=>u("h4",{class:"h4Title"}," 3.\u4F7F\u7528vite\u521B\u5EFA\u7B2C\u4E00\u4E2Avue3\u7684\u9879\u76EE ",-1)),K=t(()=>u("div",{class:"content"},[u("pre",null,[e("        "),u("code",null,`
        # npm 6.x
        npm init vite@latest my-vue-app --template vue

        # npm 7+, \u9700\u8981\u989D\u5916\u7684\u53CC\u6A2A\u7EBF\uFF1A
        npm init vite@latest my-vue-app -- --template vue

        # yarn
        yarn create vite my-vue-app --template vue
        `),e(`
      `)])],-1)),L=t(()=>u("h4",{class:"h4Title"}," 4.\u5B89\u88C5\u4F9D\u8D56 ",-1)),O=t(()=>u("div",{class:"content"},[e(" \u7531\u4E8Evite\u521B\u5EFA\u7684\u9879\u76EE\u662F\u6CA1\u6709\u4F9D\u8D56\u7684\uFF0C\u6240\u4EE5\u4F9D\u8D56\u9700\u8981\u6211\u4EEC\u81EA\u884C\u5B89\u88C5\uFF0C "),u("pre",null,[e("        "),u("code",null,`
        $ cd <project-name>
        $ npm install
        \u6216\u8005
        $ cd <project-name>
        $ yarn
        `),e(`
      `)])],-1)),Q=t(()=>u("h4",{class:"h4Title"}," 5.\u5B89\u88C5sass ",-1)),X=t(()=>u("div",{class:"content"},[e(" \u5728vue3\u91CC\u9762\u5B89\u88C5sass\u5BB9\u6613\u4E86\u8BB8\u591A\uFF0C "),u("pre",null,[e("        "),u("code",null,`
        $ npm  install sass -D
        `),e(`
      `)])],-1)),Z=t(()=>u("h4",{class:"h4Title"}," 6.\u5B89\u88C5elment-plus ",-1)),uu={class:"content"},eu=e(" \u73B0\u5728\u5B89\u88C5"),tu=e("elment-plus"),nu=e("UI\u6846\u67B6\uFF0C(\u8FD9\u91CC\u9700\u8981\u4E00\u4E2A\u5C0F\u5C0F\u7684\u6CE8\u610F\uFF1A\u7531\u4E8EVue 3\u4E0D\u518D\u652F\u6301 IE11\uFF0CElement Plus \u4E5F\u4E0D\u518D\u652F\u6301 IE \u6D4F\u89C8\u5668\u3002) "),su=t(()=>u("pre",null,[e("        "),u("code",null,`
        # NPM
        $ npm install element-plus --save
        \u6216\u8005
        # Yarn
        $ yarn add element-plus
        `),e(`
      `)],-1)),ou=e(" \u73B0\u5728\u6211\u4EEC\u8981main.ts\u91CC\u9762\u53BB\u6CE8\u518C\u4F7F\u7528\uFF0C "),lu=t(()=>u("pre",null,[e("        "),u("code",null,`
        import { createApp } from 'vue'
        import App from './App.vue'
        import ElementPlus from 'element-plus'
        import 'element-plus/dist/index.css'

        const app = createApp(App)

        app.use(ElementPlus)
        app.mount('#app')
        `),e(`
      `)],-1)),cu=t(()=>u("h4",{class:"h4Title"}," 7.\u5B89\u88C5vueRouter ",-1)),iu=t(()=>u("div",{class:"content"},[e(" \u5728vue3\u91CC\u9762\u4F7F\u7528\u6700\u65B0\u7684router\u76F8\u6BD4vue2\u6CA1\u6709\u592A\u5927\u7684\u533A\u522B\u57FA\u672C\u548Cvue2\u6CA1\u4EC0\u4E48\u53D8\u5316 "),u("pre",null,[e("        "),u("code",null,`
        \u5B89\u88C5
        $ npm install vue-router@4
        `),e(`
      `)]),e(" \u7136\u540E\u5728\u6211\u4EEC\u7684src\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2Arouter\u6587\u4EF6\u5939\uFF0C\u518D\u65B0\u5EFA\u4E00\u4E2Aindex.ts\u6587\u4EF6 "),u("pre",null,[e("        "),u("code",null,`
        import { createRouter, createWebHashHistory } from 'vue-router'

        const router = createRouter({
          history: createWebHashHistory(),
          routes: [] //\u8FD9\u91CC\u662F\u914D\u7F6E\u7684\u8DEF\u7531\uFF0C\u548C2\u7248\u672C\u4E00\u81F4\u7684\u914D\u6CD5
        })

        export default router
        `),e(`
      `)]),e(" \u73B0\u5728\u5C31\u5DEE\u5728main.ts\u91CC\u5F15\u7528\u6211\u4EEC\u7684\u8DEF\u7531\u4E86 "),u("pre",null,[e("        "),u("code",null,`
        import { createApp } from 'vue'
        import App from './App.vue'
        import ElementPlus from 'element-plus'
        import 'element-plus/dist/index.css'
        import router from './router/index'

        const app = createApp(App)

        app.use(ElementPlus)
        app.use(router)
        app.mount('#app')
        `),e(`
      `)])],-1)),pu=t(()=>u("h4",{class:"h4Title"},[e(" 8.\u5927\u529F\u544A\u6210\uFF0C\u6211\u4EEC\u770B\u4E0B\u6700\u540E\u7684\u76EE\u5F55\u7ED3\u6784\u548C\u6700\u540E\u7684\u6210\u54C1\u3002 "),u("img",{src:A,alt:"",width:"100%"})],-1)),au=F({props:{textColor:String},setup(n){const i=n;_(a=>({"4d02da07":v(p)}));let{textColor:p}=E(i);return(a,ru)=>{const l=c("el-link"),r=c("el-lenk");return d(),C("div",D,[f,x,y,T,u("div",$,[b,s(l,{type:"success",href:"https://cn.vitejs.dev"},{default:o(()=>[I]),_:1}),g,j,P,k,w,N,R,V]),H,u("div",S,[W,s(l,{type:"success",href:"https://v3.cn.vuejs.org"},{default:o(()=>[z]),_:1}),M,U,Y,q,G]),J,K,L,O,Q,X,Z,u("div",uu,[eu,s(r,{typeof:"success",href:"https://element-plus.gitee.io/zh-CN/"},{default:o(()=>[tu]),_:1}),nu,su,ou,lu]),cu,iu,pu])}}});var Eu=B(au,[["__scopeId","data-v-17928354"]]);export{Eu as default};
