<script setup lang="ts">

</script>

<template>
<div class="logo-container ">
  <nav>
    <div class="logo-container-main">
 <img class="logo" src="../../assets/images/logo_without.png"/>
  </div>
    <div class="logo-container-menu ">

        <h6 class="menu-item">Home</h6>
        <h6 class="menu-item">About</h6>
        <h6 class="menu-item">Gallery</h6>
        <h6 class="menu-item">Services</h6>
        <h6 class="menu-item">Contact</h6>



    </div>
    <div class="logo-container-main">
<!--   <button>Call me</button>-->
    </div>
  </nav>
</div>
</template>

<style scoped>
.logo-container{
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
nav{
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 10fr ;
  grid-gap: 2rem;
  align-self: center;
  justify-self: flex-start;

}
.logo-container-main{
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-container-menu{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #B8E1FC;
  background: radial-gradient(circle farthest-corner at center center, #B8E1FC 0%, #231421 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
.logo{
  padding-left: 1rem;
  padding-right: 1rem;
  height: 50px;
}
.menu-item{
  font-weight: bolder;
  padding-right: 2rem;
  text-shadow: 1px 1px 0px #ffe975;

}
.slogan{
  color: white;
  font-size: 1rem;
}
</style>