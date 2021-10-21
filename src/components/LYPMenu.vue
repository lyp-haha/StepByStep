<template>
  <div>
    <h2 class="title" @click="turnPage('/')">目录</h2>
    <span v-for="i in menuList" :key="i.path" class="item" @click="turnPage(i.path)">
      <img src="../assets/logo.3a645c5f.png" alt="">
      <span class="text">{{i.name}}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { defineProps,toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { menuList } from '../config';
const props = defineProps({textColor:String})
const {textColor} = toRefs(props)
const route = useRoute();
const router = useRouter()
let turnPage = (path:string)=>{
  router.push({path})
}

</script>

<style lang="scss" scoped>
.title{
  text-align: center;
  color: v-bind(textColor);
}
.item{
  color: v-bind(textColor);
  display: flex;
  align-items: center;
  width: 320px;
  border-bottom: 1px solid #2376b7;
  .text{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    user-select: none;
  }
  img{
    width: 40px;
  }
}
</style>