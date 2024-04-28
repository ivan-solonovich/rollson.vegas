<script setup lang="ts">

</script>

<template>
  <div class="bpi-items bg-gradient-to-r  h-100 flex flex-col justify-center items-center">
    <div class="card-best-practies rounded-lg shadow-lg p-8">
      <h1 class="text-4xl font-bold text-white mb-4 best-practies-item-title">
        Free estimates
      </h1>
      <p class="feauters text-lg text-white mb-8">
        if you are looking for a team that offers customized solutions, free estimates, and budget-friendly options, look no further than our highly-skilled craftspeople.
      </p>

    </div>
  </div>
</template>

<style scoped>
.bpi-items{
  height: 200px;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}
.card-best-practies{

  padding-top: 5px;
//background: rgb(4,2,5);
//background: linear-gradient(135deg, rgba(4,2,5,1) 17%, rgba(255,233,117,1) 63%, rgba(249,225,114,1) 83%, rgba(191,147,85,1) 95%);
  box-shadow: -20px 20px 0 -17px #C1C9CB,
  20px -20px 0 -17px rgba(191,147,85,1),
  20px 20px 0 -20px rgba(255,233,117,1),
  0 0 0 2px rgba(249,225,114,1);
  margin: 2rem;
}
.feauters{
  font-weight: bolder;

//color: black;
//-webkit-text-stroke: 2px #ccc;
//text-stroke: 1px #ccc;
}
.best-practies-item-title{
  color: #60B88D;
  -webkit-text-stroke: 2px #000;
  text-stroke: 2px black;
}
</style>