<script >


export default {

  data() {
    return {
      data: [
        {
          image: "@/assets/images/slideShow/1.jpg",
          name: '1'
        },
        {
          image: "@/assets/images/slideShow/2.jpg",
          name: '2'
        },
        {
          image: "@/assets/images/slideShow/3.jpg",
          name: '3'
        },

      ],
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      return swiper;
    };
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,

    };
  },
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
<div class="hero-mobile-wrapper hero-section">
  <div class="hero-container">

  <div id="hero-container"  class="hero-section">
    <div class="hero-title-wrapper">
      <div class="hero-title">
        <img class="hero-title-img m-8 p-8" src="@/assets/images/logo_without.png" alt="">
        <h1 id="hero-slogan">BEST QUALITY IN DESIGN SOLUTIONS</h1>
        <div class="hero-features m-8 p-8">
          <ul class="list-hero">
            <li>Professional Tile Installation</li>
            <li> Stretch Ceiling</li>
            <li>Bathroom and Kitchen renovations</li>
            <li>Painting service & Wall texture</li>
            <li>Door and Windows replacement</li>
          </ul>
        </div>
        <h5>PREMIUM TILES CEILINGS AND LITING</h5>

      </div>

      <video id="hero-video"  autoplay playsinline loop muted class=" z-10   bg-opacity-30" poster="@/assets/video/Tiles_main.jpeg">
        <source src="@/assets/video/Tiles_main.mp4" type="video/mp4">Your browser does not support the video tag.
        <source src="@/assets/video/Tiles_main_compressed.webm" type="video/webm">Your browser does not support the video tag.
      </video>
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
#hero-video{
  margin: 0;
  padding: 0;
  position: absolute;
  box-sizing: border-box;
  min-width: 100%;
  z-index: 10;
}
#hero-container{
  width: 100%;
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
.hero-title-wrapper{
  width: 100%;
  display: flex;
  justify-content: center;
}
.hero-title{
  width: 70%;
  padding: 1.5rem;

  border-radius: 3rem;
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
  margin: 1rem;
}
#hero-slogan{
  font-family: Roboto;
  color: white;
  font-size: .9rem;
  -webkit-text-stroke: 1px black;
  text-stroke: 1px black;
}
.hero-photo{
  width: 70%;
  height: auto;
}
.slide-show{
  width: 100px;
  height: auto;
}
.hero-features{

}
</style>