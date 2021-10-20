<template>
  <div class="newlyBuild">
    <h2 class="h2Title">vue3.x+ts+vite+vueRouter@4+elment-plus+sass</h2>
    <h4 class="h4Title">
      1.准备工具
    </h4>
    <div class="content">
      node自行安装，教程在某度上很多，这里就不过多叙述了。
    </div>
    <h4 class="h4Title">
      2.安装vite
    </h4>
    <div class="content">
      为什么选择vite呢？借用官网说的一句话“vite是下一代前端开发与构建工具”！我也相信vite是大势所趋。
      首先我们要安装<el-link type="success" href="https://cn.vitejs.dev">vite</el-link>，<br>
      1.使用npm安装<br>
      <pre>
        <code>
        $ npm init vite@latest
        </code>
      </pre>
      2.使用yarn安装<br>
      <pre>
        <code>
        $ yarn create vite
        </code>
      </pre>
    </div>
    <h4 class="h4Title">
      3.安装vue3
    </h4>
    <div class="content">
      在前端工厂化的趋势下，vue3的高性能，对ts的高契合度，以及组合式 API的加持，基本上掌握vue3算是必备技能之一了，<el-link type="success" href="https://v3.cn.vuejs.org">vue3</el-link>的安装步骤，<br>
      使用npm安装<br>
      <pre>
        <code>
        # 最新稳定版
        $ npm install vue@next
        </code>
      </pre>
    </div>
    <h4 class="h4Title">
      3.使用vite创建第一个vue3的项目
    </h4>
    <div class="content">
      <pre>
        <code>
        # npm 6.x
        npm init vite@latest my-vue-app --template vue

        # npm 7+, 需要额外的双横线：
        npm init vite@latest my-vue-app -- --template vue

        # yarn
        yarn create vite my-vue-app --template vue
        </code>
      </pre>
    </div>
    <h4 class="h4Title">
      4.安装依赖
    </h4>
    <div class="content">
      由于vite创建的项目是没有依赖的，所以依赖需要我们自行安装，
      <pre>
        <code>
        $ cd &lt;project-name>
        $ npm install
        或者
        $ cd &lt;project-name>
        $ yarn
        </code>
      </pre>
    </div>
    <h4 class="h4Title">
      5.安装sass
    </h4>
    <div class="content">
      在vue3里面安装sass容易了许多，
      <pre>
        <code>
        $ npm  install sass -D
        </code>
      </pre>
    </div>
    <h4 class="h4Title">
      6.安装elment-plus
    </h4>
    <div class="content">
      现在安装<el-lenk typeof="success" href="https://element-plus.gitee.io/zh-CN/">elment-plus</el-lenk>UI框架，(这里需要一个小小的注意：由于Vue 3不再支持 IE11，Element Plus 也不再支持 IE 浏览器。)
      <pre>
        <code>
        # NPM
        $ npm install element-plus --save
        或者
        # Yarn
        $ yarn add element-plus
        </code>
      </pre>
      现在我们要main.ts里面去注册使用，
      <pre>
        <code>
        import { createApp } from 'vue'
        import App from './App.vue'
        import ElementPlus from 'element-plus'
        import 'element-plus/dist/index.css'

        const app = createApp(App)

        app.use(ElementPlus)
        app.mount('#app')
        </code>
      </pre>
    </div>
    <h4 class="h4Title">
      7.安装vueRouter
    </h4>
    <div class="content">
      在vue3里面使用最新的router相比vue2没有太大的区别基本和vue2没什么变化
      <pre>
        <code>
        安装
        $ npm install vue-router@4
        </code>
      </pre>
      然后在我们的src目录下新建一个router文件夹，再新建一个index.ts文件
      <pre>
        <code>
        import { createRouter, createWebHashHistory } from 'vue-router'

        const router = createRouter({
          history: createWebHashHistory(),
          routes: [] //这里是配置的路由，和2版本一致的配法
        })

        export default router
        </code>
      </pre>
      现在就差在main.ts里引用我们的路由了
      <pre>
        <code>
        import { createApp } from 'vue'
        import App from './App.vue'
        import ElementPlus from 'element-plus'
        import 'element-plus/dist/index.css'
        import router from './router/index'

        const app = createApp(App)

        app.use(ElementPlus)
        app.use(router)
        app.mount('#app')
        </code>
      </pre>
    </div>
    <h4 class="h4Title">
      8.大功告成，我们看下最后的目录结构和最后的成品。
      <img src="../../assets/code.png" alt="" width="100%">
    </h4>

  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from 'vue'
const props = defineProps({textColor:String})
let { textColor } = toRefs(props)

</script>

<style lang="scss" scoped>
.newlyBuild{
  color:v-bind(textColor);
  overflow-y: auto;
  .h2Title{
    text-align: center;
    color: v-bind(textColor);
  }
  .h4Title{
    color: v-bind(textColor);
  }
  .content{
    text-indent: 2em;
    line-height: 1.4em;
    .el-link{
      display: inline;
      font-size: 1.3em;
    }
  }
}
pre{
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 1.25rem 1.5rem;
  background: black;
  overflow-x: auto;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  code{
    color: white;
  }
}
</style>