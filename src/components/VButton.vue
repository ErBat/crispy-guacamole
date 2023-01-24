<script setup lang="ts">
defineProps({
  disabled: Boolean,
  loading: Boolean,
  light: Boolean
})
</script>

<template>
  <button :class="{ disabled: disabled, light: light }" :disabled="disabled"> 
    <slot/>
    <div v-if="loading" class="lds-dual-ring"></div>
  </button>
</template>
<style scoped>
button{
  font-size: 14px;
  font-weight: 700;
  color: #F4F6F9;
  background-color: #403432;
  white-space: nowrap;
  width: 118px;
  height: 48px;
  text-align: center;
}

.light{
  background: #5B3A32;
}

button:hover{
  background-color: #776763;
}

.disabled{
  background-color: #C1B4B1;
  cursor: not-allowed;
}
button:hover.disabled{
  background-color: #C1B4B1;
}

.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>