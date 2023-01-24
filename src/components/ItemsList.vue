<script setup lang="ts">
import {computed} from 'vue'
import VItem from './VItem.vue';
import { useCartStore } from "../stores/cart";
const store = useCartStore();

const items = computed(() => {
  return store.getItems;
});

</script>

<template>
  <div class="store-wrapper">
    <VItem
      v-for="item in items" 
      :key="item?.id"
      :data="item"
    />
  </div>
</template>

<style scoped>
.store-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}
</style>
