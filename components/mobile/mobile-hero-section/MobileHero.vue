<script >


export default {


}
</script>

<template>
<div class="hero-mobile-wrapper hero-section">
  <div class="hero-container">

  <div id="hero-container"  class="hero-section">
    <div class="hero-title-wrapper">
      <div class="hero-title">
        <img class="hero-title-img" src="@/assets/images/logo_without.png" alt="">
        <h1 id="hero-slogan">BEST QUALITY IN DESIGN SOLUTIONS</h1>
        <div class="hero-features m-8 p-8">
          <ul class="works-list">
            <li class="item-works">Professional Tile Installation</li>
            <li class="item-works">Stretch Ceiling</li>
            <li class="item-works">Bathroom and Kitchen renovations</li>
            <li class="item-works">Painting service & Wall texture</li>
            <li class="item-works">Door and Windows replacement</li>
          </ul>
        </div>
        <h5>PREMIUM TILES CEILINGS AND LITING</h5>

      </div>


    </div>
    </div>


  </div>
</div>

</template>

<style scoped>
.hero-section{
  width: 100%;
  position: relative;
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: Roboto;
}

#hero-container{
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero-title-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

}

.hero-title{
  width: 95%;


  border-radius: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  color: #ffe975;
}
.hero-title-img{
  width: 60%;
  height: auto;
  margin-bottom: 1rem;
}
#hero-slogan{
  font-family: Roboto;
  text-align: center;
  font-weight: bolder;
  font-size: 2rem;
  text-shadow: #FFE975 5px 5px 5px;
  background: #FFE975;
  background: radial-gradient(circle farthest-corner at center center, #FFE975 0%, #231421 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  -webkit-text-stroke: 1px #000;
  text-stroke: 1px #000;
}
.item-works{
  font-weight: bold;
  background: #C1C9CB;
  background: radial-gradient(circle farthest-corner at center center, #C1C9CB 0%, #231421 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #000;
  text-stroke: 1px black;
  text-shadow: white 1px 1px ;
}
.hero-features{

}
</style>