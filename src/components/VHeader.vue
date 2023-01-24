<script setup lang="ts">
import VLogo from '@/icons/VLogo.vue';
import VButton from './VButton.vue';
import VNav from './VNav.vue';
import { useCartStore } from "../stores/cart";
const store = useCartStore();
const resetCart = () =>{
  store.resetItems
}
</script>

<template>
  <header>
    <div class="navbar container">
      <div class="logo">
        <VLogo/>
      </div>
      <VNav/>
      <div class="search">
        <input placeholder="Поиск по названию картины"/>
        <VButton @click="resetCart()">Найти</VButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
header{
  border-bottom: solid 1px #E1E1E1;
}

.search{
  margin-left: auto;
}

.search input{
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  border: 1px solid #E1E1E1;
  background: none;
  color: #9F9F9F;
  padding: 12px 40px 12px 20px;
}

.search input:focus {
  border-color: #B5B5B5;
  color: #343030;
}

.navbar{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
}
</style>
