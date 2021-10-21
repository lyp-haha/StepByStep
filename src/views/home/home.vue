<template>
  <div class="home">
    <div class="left">宝剑锋从磨砺出，</div>
    <div class="right">梅花香自苦寒来。</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home{
  height: 100vh;
  display: flex;
  position: relative;
  .left,
  .right{
    writing-mode: vertical-lr;
    font-size: 60px;
    font-family: cursive;
    height: fit-content;
    color: #f1939c;
  }
  .left{
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translateY(-70%);
  }
  .right{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }
}

</style>