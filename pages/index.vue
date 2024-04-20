<script setup>
import HeaderMobile from "~/components/mobile/HeaderMobile.vue";

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
<!--    <HeroSection/>-->
    <div class="works">
      <h1>Mobile</h1>
      <h3>Professional Tile Installation</h3>
      <h3> Stretch Ceiling</h3>
      <h3>Bathroom and Kitchen renovations</h3>
      <h3>Painting service & Wall texture</h3>
      <h3>Door and Windows replacement</h3>
      <h3>PREMIUM TILES CEILINGS AND LITING</h3>
    </div>
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