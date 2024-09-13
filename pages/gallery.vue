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
          <h1 class="services-title text-white p-8 text-7xl text-center">Gallery</h1>
          <hr class="w-3/4 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        </div>

        <div class="about-wrapper grid grid-cols-3 align-middle gap-8">
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/HL-1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_02.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_04.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_05.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_06.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_07.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/img_8582_2_1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_09.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/img_8585_2-1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/kottedzh1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/photo_2020-06-08_11-56-41_2.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9333-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9357-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9502-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
          <img loading="lazy" class="rounded " src="@/assets/images/gallery/jurn1388.avif" alt="">
        </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9564-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9570-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/v1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/m1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/m2.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/m3.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o2.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o3.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o4.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o5.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o6.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o7.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o8.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o9.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o11.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o12.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o13.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle p-8 m-8">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o14.avif" alt="">
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
          <h1 class="services-title text-white p-8 text-7xl text-center">Gallery</h1>
          <hr class="w-3/4 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">

        </div>

        <div class="about-wrapper grid grid-cols-1 align-middle gap-8">
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/HL-1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_02.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_04.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_05.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_06.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_07.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/img_8582_2_1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/1401gal_bezramn_09.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/img_8585_2-1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/kottedzh1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/photo_2020-06-08_11-56-41_2.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9333-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9357-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9502-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded " src="@/assets/images/gallery/jurn1388.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9564-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/volodinbz1a9570-hdr.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/v1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/m1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/m2.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/m3.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o1.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o2.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o3.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o4.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o5.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o6.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o7.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o8.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o9.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o11.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o12.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o13.avif" alt="">
          </div>
          <div class="w-100 h-auto flex flex-col justify-center align-middle ">
            <img loading="lazy" class="rounded" src="@/assets/images/gallery/o14.avif" alt="">
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

</style>