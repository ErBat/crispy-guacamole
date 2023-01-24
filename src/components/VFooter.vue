<script setup lang="ts">
import VLogo from '@/icons/VLogo.vue';
import AddressIcon from '@/icons/AddressIcon.vue';
import PhoneIcon from '@/icons/PhoneIcon.vue';
import VNav from './VNav.vue';

</script>

<template>
  <footer>
    <div class="navbar container">
      <div class="logo">
        <VLogo/>
      </div>
      <VNav/>
      <div class="contacts">
        <div class="contacts__item">
          <PhoneIcon/>
          <a>+7 (495) 555-55-55</a>
        </div>
        <div class="contacts__item">
          <AddressIcon/>
          <a>г. Москва, ул. Расплетина, 24</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer{
  background: #ECEAEA;
}

.contacts{
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

.contacts__item:not(:last-child){
  margin-right: 20px;
}

.contacts__item *:first-child{
  margin-right: 5px;
}

.navbar{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
}
</style>
