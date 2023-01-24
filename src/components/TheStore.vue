<script setup lang="ts">
import ItemsList from './ItemsList.vue';

</script>

<template>
  <div class="container store">
    <h1 class="store__title">Картины эпохи Возрождения</h1>
    <ItemsList/>
  </div>
</template>

<style scoped>
.store{
 padding: 50px 0 500px 0;
}

.store__title{
  margin-bottom: 50px;
}
</style>
