<script setup lang="ts">

</script>

<template>
  <nav>
  <div class="logo-container">
    <img class="logo" src="@/assets/images/logo_without.png" alt="Rollson_logo"/>
  </div>

  </nav>
</template>

<style scoped>
nav{

  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-gap: 2rem;
  align-self: center;
  justify-self: center;
}
.logo-container{
  width: 100%;
  height: 80px;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo{
  padding-left: 1rem;
  padding-right: 1rem;
  height: 30px;
}

</style>