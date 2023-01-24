<template>
  <nav class="nav">
    <div class="nav__item">Каталог</div>
    <div class="nav__item">Доставка</div>
    <div class="nav__item">Оплата</div>
    <div class="nav__item">Контакты</div>
    <div class="nav__item">О галерее</div>
  </nav>
</template>

<style scoped>
.nav{
  display: flex;
  flex-direction: row;
  padding: 0 50px;
}

.nav__item:not(:last-child){
  margin-right: 50px;
}
</style>
