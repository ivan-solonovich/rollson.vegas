<script setup lang="ts">

</script>

<template>

  <dialog id="myModal" class="h-auto w-11/12 md:w-1/2 p-5 text-white  bg-black rounded-md ">

    <div class="flex flex-col w-full h-auto ">
      <!-- Header -->
      <div class="flex w-full h-auto justify-center items-center">
        <div class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">

        </div>
        <div onclick="document.getElementById('myModal').close();" class="flex w-1/12 h-auto justify-center cursor-pointer">
          Close
        </div>
        <!--Header End-->
      </div>
      <!-- Modal Content-->
      <div class="flex flex-col w-full h-auto py-10 px-2 justify-center  items-center bg-black rounded text-center text-white">
        <h3 class="menu-item text-3xl"><NuxtLink to="/">Home</NuxtLink></h3>
        <h3 class="menu-item text-3xl"><NuxtLink to="/about">About</NuxtLink></h3>
        <h3 class="menu-item text-3xl"><NuxtLink to="/bathrenovation">Bathroom Renovation</NuxtLink></h3>
        <h3 class="f-item">Services</h3>
        <h3 class="f-item">Contact</h3>
        <h3 class="f-item">Blog</h3>
      </div>
      <div class="flex flex-col w-full h-auto py-10 px-2 justify-center  items-center bg-black rounded text-center text-white">
        <img src="@/assets/images/footer/ROLLSON_bussines_card_1.avif" alt="">
      </div>
      <div class="flex flex-col w-full h-auto py-10 px-2 justify-center  items-center bg-black rounded text-center text-white">
        <div class="w-100 flex flex-col justify-center align-middle pb-0">
          <h3 style="color: #ffe975">Our official social-media </h3>
          <h4 style="color: #ffe975">Learn more about our work.</h4>
          <div class="w-100 flex justify-center justify-items-center align-middle">
            <a href="https://www.facebook.com/profile.php?id=61558010404090">
              <img class="" src="@/assets/images/social-media-icons/facebook.png" alt="">
            </a>
            <a href="https://www.instagram.com/rollson.vegas/">
              <img class="" src="@/assets/images/social-media-icons/instagramm.png" alt="">
            </a>
          </div>
        </div>
      </div>

      <CallButton/>
      <!-- End of Modal Content-->



    </div>
  </dialog>
</template>

<style scoped>

</style>