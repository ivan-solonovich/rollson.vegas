<script setup lang="ts">

</script>

<template>
  <hr class="w-7/8 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
  <div class="f-wrapper">

    <div class="footer flex flex-col align-middle">
      <div class="f-column pb-0">
        <h3 style="color: #ffe975">Our official social-media </h3>
        <h4 style="color: #ffe975">Learn more about our work.</h4>
        <div class="f-social-medi-button">
          <a href="https://www.facebook.com/profile.php?id=61558010404090">
            <img class="f-social-button" src="@/assets/images/social-media-icons/facebook.png" alt="">
          </a>
          <a href="https://www.instagram.com/rollson.vegas/">
            <img class="f-social-button" src="@/assets/images/social-media-icons/instagramm.png" alt="">
          </a>
        </div>
      </div>
      <div class="f-column pb-8">
      <img class="f-img-logo" src="@/assets/images/footer/ROLLSON_bussines_card_1.avif" alt="">
        <p style="color: white">ROLLSON INC</p>
        <p style="color: white">225 E CT OF SHOREWOOD #7</p>
        <p style="color: white">VERNON HILLS IL 60061</p>
    </div>

        <div class="f-company">
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

      </div>

    </div>
  </div>
  <hr class="w-7/8 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
  <div class="w-100 text-white flex justify-center">ROLLSON INC &copy. All right reserved.</div>
  <div class="w-100 text-white flex justify-center">Design and Development IT-Ivan.</div>
</template>

<style scoped>
.f-wrapper{
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  font-family: Azonix;
  padding: 1rem;
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
  padding: 1rem;
  width: 100%;
}
.f-social-medi-button{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-social-button{
  max-width: 100px;
  height: auto;
}
</style>