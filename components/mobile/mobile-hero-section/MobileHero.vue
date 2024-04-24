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
        <div class="hero-features ">
          <ul class="works-list">
            <li class="item-works">Professional Tile Installation</li>
            <li class="item-works">Stretch Ceiling</li>
            <li class="item-works">Bathroom and Kitchen renovations</li>
            <li class="item-works">Painting service & Wall texture</li>
            <li class="item-works">Door and Windows replacement</li>
          </ul>
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              PREMIUM TILES CEILINGS AND LIGHTING
            </text>
          </svg>
          <div class="button-container">
            <button class="testbutton"><a href="tel:+17252220550"> &#9742; (725) 222-0550</a></button>
          </div>
        </div>


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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  color: #ffe975;
}
.hero-title-img{
  width: 40%;
  height: auto;
  margin-bottom: 1rem;
}
#hero-slogan{
  font-family: Roboto;
  text-align: center;
  font-weight: bolder;
  font-size: 2rem;
  background: #FFE975;
  background: radial-gradient(circle farthest-corner at center center, #FFE975 0%, #231421 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  -webkit-text-stroke: 2px #000;
  text-stroke: 1px black;
  padding-bottom: 1rem;
}
.item-works{
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  background: #C1C9CB;
  background: radial-gradient(circle farthest-corner at center center, #C1C9CB 0%, #231421 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #000;
  text-stroke: .5px black;
}

svg {
  font-family: "Roboto", sans-serif;
  width: 100%; height: 100%;
}
svg text {
  animation: stroke 5s infinite alternate;
  stroke-width: 2;
  stroke: #2C2814;
  font-size: 1rem;
}
@keyframes stroke {
  0%   {
    fill: rgba(191,147,85,0); stroke: rgba(44,40,20,1);
    stroke-dashoffset: -25%; stroke-dasharray: 0 50%; stroke-width: 2;
  }
  70%  {fill: rgba(191,147,85,0); stroke: rgba(44,40,20,1); }
  80%  {fill: rgba(191,147,85,0); stroke: rgba(44,40,20,1); stroke-width: 3; }
  100% {
    fill: rgba(191,147,85,1); stroke: rgba(44,40,20,0);
    stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
  }
}
.button-container{
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}
.testbutton {
  font-family: helvetica;
  color: #3D381C !important;
  font-size: 14px;
  text-shadow: 1px 1px 0px #FFE975;
  box-shadow: 1px 2px 3px #FFE975;
  padding: 7px 25px;
  border-radius: 10px;
  border: 2px solid #0D1124;
  background: #FFE975;
  background: linear-gradient(to top, #FFE975, #BF9355);
}
.testbutton:hover {
  color: #14396A !important;
  background: #BF9355;
  background: linear-gradient(to top, #BF9355, #FFE975);
}

.hero-features{

}
</style>