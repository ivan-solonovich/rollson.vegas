<script setup lang="ts">
import {BestpractiesBestPractiesItem} from "#components";
import BP_1 from "~/components/bestpracties/BP_1.vue";
import BP_3 from "~/components/bestpracties/BP_3.vue";
import BP_4 from "~/components/bestpracties/BP_4.vue";
import BP_2 from "~/components/bestpracties/BP_2.vue";
import BP_5 from "~/components/bestpracties/BP_5.vue";
</script>

<template>
  <div class="bp-wrapper text-center w-100 flex flex-col justify-center align-baseline">
    <div class="w-200 text-center flex justify-center">
      <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
      <h1 class="services-title text-white p-8 text-7xl text-center">Why Choose Us ?</h1>
      <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
    </div>
    <div class=" container flex flex-col flex-grow">
      <BestpractiesBestPractiesItem/>
      <BP_1/>
      <BP_2/>
      <BP_3/>
      <BP_4/>
      <BP_5/>
    </div>
  </div>
</template>

<style scoped>
.bp-wrapper{
  background-color: black;
}

.why{
  width: 100%;
  font-size: 2.5rem;
  font-family: Azonix;
  text-align: center;
  font-weight: bolder;

  color: white;
  -webkit-text-stroke: 2px #000;
  text-stroke: 3px black;
  box-shadow: 0px 3px 0px 0px #FFE975;

}
.que{
  color: #60B88D;
}
</style>