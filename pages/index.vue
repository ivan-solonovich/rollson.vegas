<script setup>
import HeaderMobile from "~/components/mobile/HeaderMobile.vue";
import MobileHero from "~/components/mobile/mobile-hero-section/MobileHero.vue";
import BestPractiesMobile from "~/components/mobile/best-practies-mobile/BestPractiesMobile.vue";

const { isDesktop } = useDevice();
const { isMobile } = useDevice();
const { isTablet } = useDevice();
</script>

<template>
<div class="main">
  <div v-if="isDesktop" >
    <div class="wrapper">
    <AppHeader/>
    <HeroSection/>
    </div>
  <DeskstopBestPracties/>
 </div>
  <div v-if="isMobile || isTablet">
    <div  class="m-wrapper">
    <HeaderMobile/>
    <MobileHero/>
    </div>
<BestPractiesMobile/>
  </div>
</div>
</template>

<style>
.main{
  width: 100%;

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
  background: rgb(4,2,5);
  background: linear-gradient(135deg, rgba(4,2,5,1) 30%, rgba(255,233,117,1) 68%, rgba(249,225,114,1) 92%, rgba(191,147,85,1) 99%);
}
.m-wrapper{
  width: 100%;
  background: rgb(4,2,5);
  background: linear-gradient(135deg, rgba(4,2,5,1) 17%, rgba(255,233,117,1) 63%, rgba(249,225,114,1) 83%, rgba(191,147,85,1) 95%);
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.works{
  color: #ffe975;
}


</style>