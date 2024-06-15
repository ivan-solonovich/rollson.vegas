<script >
import "swiper/css";

export default {


}

</script>

<template>
  <div class="hero-section  h-screen bg-black">

    <div id="hero-container" class="hero-container ">
      <div class="hero-title-wrapper pt-1/2">
        <div class="hero-title">
<!--          <img class="hero-title-img " src="@/assets/images/logo_without.png" alt="">-->
<!--          <h1 id="hero-slogan">BEST QUALITY IN DESIGN SOLUTIONS</h1>-->
<!--          <img class="w-1/4 h-auto pt-4" src="@/assets/images/tiles_Images/Internal_finishes.png" alt="">-->
<!--          <div class="hero-features m-2 p-2">-->
<!--            <ul class="works-list">-->
<!--                <li class="item-works">Professional Tile Installation</li>-->
<!--                <li class="item-works">Stretch Ceiling</li>-->
<!--                <li class="item-works">Bathroom and Kitchen renovations</li>-->
<!--                <li class="item-works">Painting service & Wall texture</li>-->
<!--                <li class="item-works">Door and Windows replacement</li>-->
<!--            </ul>-->

<!--        </div>-->
          <svg>
            <text x="50%" y="30%" dy=".35em" text-anchor="middle">
              European quality standard
            </text>
          </svg>
          <div class="button-container">
            <h3 class="pb-4">Contact us today to learn more about our services and to schedule your free estimate.</h3>
            <button class="testbutton"><a href="+17252220550">&#9742; (725) 222-0550</a></button>
          </div>
        </div>
    </div>

    </div>
    <video id="main-video"  autoplay playsinline loop muted class="absolute box-border z-10 w-auto w-screen min-h-full max-w-none bg-opacity-50" poster="@/assets/video/Rollson-home-renovation-company.avif">
      <source src="@/assets/video/RB.mp4" type="video/mp4">Your browser does not support the video tag.
      <source src="@/assets/video/RB.webm" type="video/webm">Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>

.hero-section{
  width: 100%;
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  font-family: Roboto;

}

.hero-container{
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;

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
   color: white;

}

.item-works{
  font-weight: bold;
  font-size: 2rem;

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
.button-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 1rem;
}
</style>