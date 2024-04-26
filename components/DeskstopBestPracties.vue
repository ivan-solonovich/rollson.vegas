<script setup lang="ts">

</script>

<template>
<div id="cssportal-grid">
  <BestpractiesBestPractiesItem/>
  <BestpractiesBestPractiesItem/>
  <BestpractiesBestPractiesItem/>
  <BestpractiesBestPractiesItem/>
  <BestpractiesBestPractiesItem/>
  <BestpractiesBestPractiesItem/>
</div>
</template>

<style scoped>
#cssportal-grid {
  background-color: #ccc;
  padding-top: 5px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  width: 100%;
  height: 100%;
}
</style>