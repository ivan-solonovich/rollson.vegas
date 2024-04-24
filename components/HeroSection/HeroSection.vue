<script >
import "swiper/css";

export default {


}

</script>

<template>
  <div class="hero-section ">

<!--    <video id="hero-video"  autoplay playsinline loop muted class=" z-10   bg-opacity-30" poster="@/assets/video/Tiles_main.jpeg">-->
<!--      <source src="@/assets/video/Tiles_main.mp4" type="video/mp4">Your browser does not support the video tag.-->
<!--      <source src="@/assets/video/Tiles_main_compressed.webm" type="video/webm">Your browser does not support the video tag.-->
<!--    </video>-->
    <div id="hero-container" class="hero-container m-10 p-10">
      <div class="hero-title-wrapper">
        <div class="hero-title">
          <img class="hero-title-img m-8 p-8" src="@/assets/images/logo_without.png" alt="">
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
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              PREMIUM TILES CEILINGS AND LIGHTING
            </text>
          </svg>

        </div>
    </div>
      <div id="hero-container" class="hero-container m-10 p-10">

    </div>
    </div>

  </div>
</template>

<style scoped>

.hero-section{
  width: 100%;
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-bottom: 6px;
  box-sizing: border-box;
  overflow: hidden;
  font-family: Roboto;

}
#hero-video{
  margin: 0;
  padding: 0;
  position: absolute;
  box-sizing: border-box;
  min-width: 100%;
  z-index: 10;
}
.hero-container{
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.hero-title-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero-title{
  width: 100%;
  border-radius: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  color: #ffe975;
}
.hero-title-img{
  width: 20%;
  height: auto;
  margin: 1rem;
}
#hero-slogan{
  font-family: Roboto;
  font-weight: bolder;
  font-size: 3rem;
  background: #FFE975;
  background: radial-gradient(circle farthest-corner at center center, #FFE975 0%, #231421 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: white;
  -webkit-text-stroke: 2px #000;
  text-stroke: 2px black;
}
.works-list{

}
.item-works{
  font-weight: bold;
  font-size: 2rem;
  background: #C1C9CB;
  background: radial-gradient(circle farthest-corner at center center, #C1C9CB 0%, #231421 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #000;
  text-stroke: 1px black;
}
svg {
  font-family: "Roboto", sans-serif;
  width: 100%; height: 100%;
}
svg text {
  animation: stroke 5s infinite alternate;
  stroke-width: 2;
  stroke: #FFE975;
  font-size: 3rem;
}
@keyframes stroke {
  0%   {
    fill: rgba(191,147,85,0); stroke: rgba(255,233,117,1);
    stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
  }
  70%  {fill: rgba(191,147,85,0); stroke: rgba(255,233,117,1); }
  80%  {fill: rgba(191,147,85,0); stroke: rgba(255,233,117,1); stroke-width: 3; }
  100% {
    fill: rgba(191,147,85,1); stroke: rgba(255,233,117,0);
    stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
  }
}
.hero-features{

}
</style>