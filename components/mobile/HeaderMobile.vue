<script setup lang="ts">

import MobileNavigation from "~/components/mobile/navMobile/MobileNavigation.vue";
import LogoMobileContainer from "~/components/mobile/navMobile/LogoMobileContainer.vue";
import MobileHero from "~/components/mobile/mobile-hero-section/MobileHero.vue";
</script>

<template>
  <div class="app-header-mobile">
    <LogoMobileContainer/>
    <MobileNavigation/>
  </div>
  <MobileHero/>
</template>

<style scoped>
.app-header-mobile{
  width: 100%;
  height: 80px;
  background-image: url(public/images/bg_main.png);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.75rem;

}
</style>