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
        <h1 class="why text-center">Why Choose Us<span style="color: #60B88D">&nbsp;?</span></h1>
      </div>
    <div id="cssportal-grid">
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
  //background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
  background: rgb(4,2,5);
  background: linear-gradient(135deg, rgba(4,2,5,1) 17%, rgba(255,233,117,1) 63%, rgba(249,225,114,1) 83%, rgba(191,147,85,1) 95%);
}
#cssportal-grid {

  padding-top: 5px;
  display: grid;

  grid-template-columns: repeat(3, 3fr);
  gap: 5px;
  width: 100%;
  height: 100%;
}
.why{
  width: 30%;
  font-size: 3rem;
  text-align: center;

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