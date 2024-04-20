<script setup lang="ts">

</script>

<template>
<div class="logo-container ">
  <nav>
    <div class="logo-container-main">
 <img class="logo" src="../../assets/images/logo_without.png"/>
  </div>
    <div class="logo-container-menu">

        <h6>Professional Tile Installation</h6>
        <h6> Stretch Ceiling</h6>
        <h6>Bathroom and Kitchen renovations</h6>
        <h6>Painting service & Wall texture</h6>
        <h6>Door and Windows replacement</h6>

    </div>
    <div class="logo-container-main">
<!--   <button>Call me</button>-->
    </div>
  </nav>
</div>
</template>

<style scoped>
.logo-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
nav{
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-gap: 2rem;
  align-self: center;
  justify-self: center;
}
.logo-container-main{
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container-menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffe975;
}
.logo{
  padding-left: 1rem;
  padding-right: 1rem;
  height: 50px;
}
.slogan{
  color: white;
  font-size: 1rem;
}
</style>