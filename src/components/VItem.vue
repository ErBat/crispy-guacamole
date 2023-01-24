<script setup lang="ts">
import type Item from '../types/item'
import GalkaIcon from '@/icons/GalkaIcon.vue';
import { useCartStore } from "../stores/cart";
import VButton from './VButton.vue';
const store = useCartStore();
defineProps<{
  data: Item;
}>();
const toCart = (id: number) =>{
  store.addToCart(id)
}
const removeItem = (id: number) =>{
  store.removeItem(id)
}
</script>

<template>
  <div class="card" :class="{sold: data.status === `sold`}">
    <img :src="data.img"/>
    <div class="card__info">
      <h2>
        {{ data.title }}
        <br/>
        {{ data.author }}
      </h2>
      <div v-if="data.status != `sold`" class="card__bottom">
        <span class="card__price"><span class="card__old-price" v-if="data.oldPrice">{{ data.oldPrice }} <br/></span>{{ data.price }}</span>
        <VButton v-if="data.status === 'initial'" @click="toCart(data.id)">Купить</VButton>
        <VButton v-if="data.status === 'loading'" loading></VButton>
        <VButton v-if="data.status === 'success'" @click="removeItem(data.id)" light><GalkaIcon/> В корзине!</VButton>
      </div>
      <div v-else class="card__bottom">
        <strong>Продана на аукционе</strong>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
.card{
  border: 1px solid #E1E1E1;
  width: 320px;
}

.sold{
  opacity: 0.5;
}

.card img{
  width: 100%;
}

.card__info{
  padding: 20px;
}

.card__bottom{
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card__price{
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.card__old-price{
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 300;
  color: #A0A0A0;

}

.card__info h2{
  margin: 0;
}
</style>
