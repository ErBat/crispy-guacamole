<script setup lang="ts">
import { RouterView } from 'vue-router'
import VFooter from './components/VFooter.vue';
import VHeader from './components/VHeader.vue';
</script>

<template>
  <VHeader/>
  <main class="container">
    <RouterView />
  </main>
  <VFooter/>
  
</template>

<style scoped>
</style>
