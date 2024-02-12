<script setup>
import {RouterView} from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="page">
    <div class="Top">
      <Header/>
    </div>
    <div class="Content">
    <RouterView/>
  </div>
  </div>
</template>

<style lang="scss" scoped>

.page{
  height: 100vh;
  width: 100vw;
    .Top{
      height: 15%;
    }
    .Content{
      height: auto;
    }
}
</style>
