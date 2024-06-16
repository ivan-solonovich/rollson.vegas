<script setup lang="ts">

</script>

<template>
  <div class="f-wrapper">
  <hr class="w-7/8 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <div class="footer grid grid-cols-3 gap-8">
            <div class="f-column">
              <div class="f-item-wrapper">
                <h3 class="f-item">Home</h3>
                <h3 class="f-item">About</h3>
                <h3 class="f-item">Gallery</h3>
                <h3 class="f-item">Services</h3>
                <h3 class="f-item">Contact</h3>
                <h3 class="f-item">Blog</h3>
              </div>
            </div>
            <div class="f-company">
              <div class="f-column">
                <img class="f-img-logo" src="@/assets/images/logo_without.png" alt="">
              </div>
            </div>
            <div></div>
          </div>
  </div>
</template>

<style scoped>
.f-wrapper{
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  font-family: Azonix;
}

.f-column{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.f-item{
  color: white;
}
.f-company{

}
.f-img-logo{
  max-width: 120px;
}
</style>