<script setup lang="ts">

import BP_1 from "~/components/bestpracties/BP_1.vue";
import BP_3 from "~/components/bestpracties/BP_3.vue";
import BP_4 from "~/components/bestpracties/BP_4.vue";
import BP_2 from "~/components/bestpracties/BP_2.vue";
import BP_5 from "~/components/bestpracties/BP_5.vue";
</script>

<template>
  <div class="bp-wrapper text-center w-100 flex flex-col justify-center">
      <div class="w-100 flex justify-start">
        <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        <h1 class="services-title text-white p-8 text-7xl text-center">Why Choose Us ?</h1>
        <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
      </div>
    <div id="cssportal-grid">
      <BestpractiesBestPractiesItem/>
      <BP_1/>
      <BP_2/>
      <BP_3/>
      <BP_4/>
      <BP_5/>
    </div>
    <div class="button-container">
      <h2 class="pb-4">Contact us today to learn more about our services and to schedule your free estimate.</h2>
      <button class="testbutton"><a href="+17252220550">&#9742; (725) 222-0550</a></button>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/main.css";
@import "@/assets/css/button-gold.css";
.bp-wrapper{
  //background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
  //background: rgb(4,2,5);
  //background: linear-gradient(135deg, rgba(4,2,5,1) 17%, rgba(255,233,117,1) 63%, rgba(249,225,114,1) 83%, rgba(191,147,85,1) 95%);
  background-color: #000000;
}
#cssportal-grid {

  padding-top: 5px;
  display: grid;

  grid-template-columns: repeat(3, 3fr);
  gap: 5px;
  width: 100%;
  height: 100%;
  color: black;
}
.why{
  width: 30%;
  font-size: 3rem;
  text-align: center;
  font-family: Azonix;
  font-weight: bolder;

  color: white;
  -webkit-text-stroke: 2px #000;
  text-stroke: 3px black;
  box-shadow: 0px 3px 0px 0px #FFE975;

  margin: 4rem;
}
.que{
  color: #60B88D;
}
</style>