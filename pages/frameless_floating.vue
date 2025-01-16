<script setup>
import HeaderMobile from "~/components/mobile/HeaderMobile.vue";
import Footer from "~/components/footer/Footer.vue";
import CallButton from "~/components/CallButton.vue";

const { isDesktop } = useDevice();
const { isMobile } = useDevice();
const { isTablet } = useDevice();
</script>

<template>
  <div class="main">
    <div v-if="isDesktop" >
      <div class="wrapper">
        <AppHeader/>
        <div class="w-100 h-100 flex flex-col justify-center align-middle">
          <hr class="w-3/4 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h1 class="services-title text-white p-8 text-7xl text-center">Frameless "Floating"</h1>
          <h1 class="services-title text-white p-8 text-7xl text-center">Stretch Ceiling</h1>
          <hr class="w-3/4 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        </div>

        <div class="about-wrapper grid grid-cols-3 align-middle gap-8">
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_1.webp" alt="">
          </div>
          <div class="w-100 h-100 flex flex-col justify-start align-middle ">
            <img loading="lazy"  class="rounded " src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_4.webp" alt="">
          </div>

          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_5.webp" alt="">
          </div>

          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_3.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/swimming_pool_3.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/swimming_pool_4.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_6.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_7.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_8.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_9.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/kitchen_2.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/kitchen_4.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/hall_1.webp" alt="">
          </div>
        </div>
      </div>
      <CallButton/>
      <Footer/>
    </div>
    <div v-if="isMobile || isTablet">
      <div  class="m-wrapper">
        <HeaderMobile/>
        <div class="w-100 h-100 flex flex-col justify-center align-middle">
          <hr class="w-3/4 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h1 class="services-title text-white p-8 text-7xl text-center">Frameless "Floating"</h1>
          <h1 class="services-title text-white p-8 text-7xl text-center">Stretch Ceiling</h1>
          <hr class="w-3/4 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        </div>

        <div class="about-wrapper grid grid-cols-1 align-middle gap-8">
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_1.webp" alt="">
          </div>
          <div class="w-100 h-100 flex flex-col justify-start align-middle ">
            <img loading="lazy"  class="rounded " src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_4.webp" alt="">
          </div>

          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_5.webp" alt="">
          </div>

          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_3.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/swimming_pool_3.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/swimming_pool_4.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_6.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_7.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_8.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/Frameless_Floating_SC_9.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/kitchen_2.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/kitchen_4.webp" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/Frameless_Floating/hall_1.webp" alt="">
          </div>
        </div>
      </div>
      <CallButton/>
      <FooterMobile/>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/main.css";
@import "@/assets/css/button-gold.css";
.main{
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #000000;

}
.wrapper{
  width: 100%;


  margin: 0;
  padding-bottom: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
//background: rgb(4,2,5);
//background: linear-gradient(135deg, rgba(4,2,5,1) 30%, rgba(255,233,117,1) 68%, rgba(249,225,114,1) 92%, rgba(191,147,85,1) 99%);
}
.m-wrapper{
  width: 100%;

  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.works{
  color: #ffe975;
}
.title-article-about{
  font-family: Azonix;
  padding-bottom: 2rem;
}
@media only screen and (max-width: 700px) {
  .about-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;

  }
}


</style>