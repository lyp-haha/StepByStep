<template>
  <div class="outBox">
    <div class="index">
      <LYPMenu class="LYPMenu" :textColor="textColor"/>
      <router-view class="routerView" :textColor="textColor"></router-view>
      <div class="colorPink">
        <el-color-picker v-model="outBackground" show-alpha /><br>
        <span class="textColor">全局背景色</span><br>
        <el-color-picker v-model="menuBackground" show-alpha /><br>
        <span class="textColor">菜单背景色</span><br>
        <el-color-picker v-model="contentBackground" show-alpha /><br>
        <span class="textColor">内容背景色</span><br>
        <el-color-picker v-model="textColor" show-alpha /><br>
        <span class="textColor">文字颜色</span><br>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LYPMenu from '../components/LYPMenu.vue';
import { toRefs, ref } from 'vue';
let outBackground = ref('rgba(211, 224, 243, 1)')
let menuBackground = ref('rgba(212, 242, 231, 0.5)')
let contentBackground = ref('rgba(210, 240, 244, 0.5)')
let textColor = ref('rgba(61, 59, 79, 0.8)')

</script>

<style lang="scss" scoped>
.outBox{
  background: url('../assets/bg.texture.dd29a028\ .png');
  background-color: v-bind(outBackground);
  display: flex;
  justify-content: center;
}
.index{
  height: 100vh;
  display: flex;
  width: 1200px;
  .LYPMenu{
    flex: 0 320px;
    background: v-bind(menuBackground);
  }
  .routerView{
    flex: 1;
    background: v-bind(contentBackground);
  }
  .colorPink{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    text-align: center;
    .textColor{
      color: v-bind(textColor);
      font-size: 12px;
    }
  }
}

</style>