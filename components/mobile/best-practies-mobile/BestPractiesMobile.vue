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
      <h1 class="why text-center">Why Choose Us<span style="color: #60B88D">&nbsp;?</span></h1>
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


.why{
 width: 100%;
  font-size: 2.5rem;

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