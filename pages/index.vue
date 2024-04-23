<script setup>
import HeaderMobile from "~/components/mobile/HeaderMobile.vue";
import MobileHero from "~/components/mobile/mobile-hero-section/MobileHero.vue";

const { isDesktop } = useDevice();
const { isMobile } = useDevice();
const { isTablet } = useDevice();
</script>

<template>
<div class="main">
  <div v-if="isDesktop" class="wrapper">
   <AppHeader/>
  <HeroSection/>

 </div>
  <div v-if="isMobile || isTablet" class="m-wrapper">
    <HeaderMobile/>
    <MobileHero/>
  </div>
</div>
</template>

<style>
.main{
  width: 100%;
  background-image: url(public/images/bg_main.png);
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.wrapper{
  width: 100%;

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.m-wrapper{
  width: 100%;
  background-image: url(public/images/bg_main.png);
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.works{
  color: #ffe975;
}


</style>