<script >
import "swiper/css";

export default {


  created() {
    if(process.client){
      const video = document.getElementById('hero-video')
      const heroContainer = document.getElementById('hero-container')
      window.addEventListener("load", ()=>{

        video.videoOfWidth = window.innerWidth ;
        video.videOfHeght = (innerWidth*9)/16
        heroContainer.width = window.innerWidth;
        heroContainer.height = (innerWidth*9)/16
      });
      window.addEventListener("resize", ()=>{
        console.log(video.videoOfWidth)
        video.videoOfWidth = window.innerWidth ;
        video.videOfHeght = (innerWidth*9)/16;
        heroContainer.width = window.innerWidth;
        heroContainer.height = (innerWidth*9)/16;
      });
    }

  },
}

</script>

<template>
  <div class="hero-section ">

    <video id="hero-video"  autoplay playsinline loop muted class=" z-10   bg-opacity-30" poster="@/assets/video/Tiles_main.jpeg">
      <source src="@/assets/video/Tiles_main.mp4" type="video/mp4">Your browser does not support the video tag.
      <source src="@/assets/video/Tiles_main_compressed.webm" type="video/webm">Your browser does not support the video tag.
    </video>
    <div id="hero-container" class="hero-container m-10 p-10">
      <div class="hero-title-wrapper">
        <div class="hero-title">
          <img class="hero-title-img m-8 p-8" src="@/assets/images/logo_without.png" alt="">
          <h1 id="hero-slogan">BEST QUALITY IN DESIGN SOLUTIONS</h1>
          <div class="hero-features m-8 p-8">
            <ul>
                <li>Professional Tile Installation</li>
                <li> Stretch Ceiling</li>
                <li>Bathroom and Kitchen renovations</li>
                <li>Painting service & Wall texture</li>
                <li>Door and Windows replacement</li>
            </ul>
        </div>
          <h4>PREMIUM TILES CEILINGS AND LITING</h4>
        </div>
    </div>
      <div id="hero-container" class="hero-container m-10 p-10">
      <div class="hero-title-wrapper">
        <div class="carousel z-100">

          <img src="@/assets/images/slideShow/show.png" alt="">

        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<style scoped>

.hero-section{
  width: 100%;
  padding-top: 10px;
  position: relative;
  display: flex;
  justify-items: center;
  height: 100vh;
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
  z-index: 100;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-self: center;
  justify-self: center;
}
.hero-title-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;

}
.hero-title{
  width: 70%;
  background: rgba( 193,201,203, 0.4 );
  border-radius: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  color: #ffe975;
}
.hero-title-img{
  width: 50%;
  height: auto;
  margin: 1rem;
}
#hero-slogan{
  font-family: Roboto;
  color: white;
}
.hero-photo{
  width: 70%;
  height: auto;
}
.carousel{
  max-width: 200px;
}
.slide-show{
  width: 100%;
  height: auto;
}
.hero-features{

}
</style>