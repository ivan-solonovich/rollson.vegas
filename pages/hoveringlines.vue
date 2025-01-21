<script setup>
import HeaderMobile from "~/components/mobile/HeaderMobile.vue";
import MobileHero from "~/components/mobile/mobile-hero-section/MobileHero.vue";
import BestPractiesMobile from "~/components/mobile/best-practies-mobile/BestPractiesMobile.vue";
import ServicesMobileWrapper from "~/components/mobile/servises-mobile/services-mobile-wrapper.vue";
import Footer from "~/components/footer/Footer.vue";
import CallButton from "~/components/CallButton.vue";

const { isDesktop } = useDevice();
const { isMobile } = useDevice();
const { isTablet } = useDevice();
</script>

<template>
  <div class="main">
    <div v-if="isDesktop" >
      <div class="wrapper">
        <AppHeader/>
        <div class="w-100 h-100 flex flex-col justify-center align-middle">
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h1 class="services-title text-white p-8 text-7xl text-center uppercase">Light Lines</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
        <div class="about-wrapper grid grid-cols-1 gap-8">
          <div class="about-article text-white flex flex-col p-8 m-8">
            <h1 class="title-article-about text-5xl text-center"> Light Lines for stretch ceilings</h1>
            <div class="w-2/3 left-0">
            <p class="w-3/4">
              Stretch ceilings have become increasingly popular in interior design due to their versatility and aesthetic
              appeal. One of the most sought-after designs is the soaring lines pattern, which offers several advantages
              for homeowners.
            </p>
            <h4>
            Rollson Light Lines revolutionise the illumination of spaces by integrating with the entire range of Rollson’s stretch products to create a minimalist and unique aesthetic within the ceiling.
            </h4>
            <h4>
              Characterised by its ability to create clean and uniform lighting designs, the flexible and versatile nature of Rollson Light Lines allows you construct the exact look you want, from a palette of over 300 colours and finishes.
            </h4>
              <h3>Creative Lighting</h3>
              <h4>Adaptable to all shapes, Light Lines enable the invisible integration of LED lighting systems in both straight and rounded designs.</h4>

              <h4>These creative light profiles provide a fully optimised lighting system without the need for additional diffusers, saving energy and extending the life of the LEDs.
            </h4>


          </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold"> MAIN ADVANTAGES OF SOARING LIGHT LINES:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <div class="pb-4">
                <ol class="list-disc text-2xl">
                  <li class="pb-4">Reduced power consumption</li>
                  <li class="pb-4">Energy saving, very low voltage electrical system</li>
                  <li class="pb-4">Energy saving, very low voltage electrical system</li>
                  <li class="pb-4">Extended LED lifetime</li>
                  <li class="pb-4">Invisible integration</li>
                  <li class="pb-4">Significant choice of technical solutions</li>
                  <li class="pb-4">Over 300 colours and finishes to choose from</li>
                  <li class="pb-4">Small footprint with only a 20mm aperture</li>
                  <li class="pb-4">Adaptable to all shapes with both straight and rounded designs</li>
                  <li class="pb-4">Dimmable lighting with easy change LEDs</li>
                </ol>
            </div>
            <p class="w-2/3">Stretch ceilings are extremely versatile and be made to any shape or size to suit any ceiling or wall space.
            </p>
            <p class="w-2/3">We can also work with you to ensure the correct perimeter and background structures are in place to take
              the system and advise you on the optimal depth required to achieve uniform illumination without spotting or shadowing</p>
            <div class="bathroom-img w-100 h-auto flex justify-center align-middle pt-4">
              <img class="image-light" loading="lazy" src="@/assets/images/streich-sailing/HL-2.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold"> Increasing the Visual Space of the Room:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p class="w-2/3">
              One of the primary benefits of using soaring lines for stretch ceilings is the ability to visually expand
              the space in a room. The upward lines create an illusion of height, making the room appear larger and more
              spacious. This is particularly beneficial for smaller rooms or spaces with low ceilings,
              as it can make them feel more open and airy.
            </p>
            <div class="w-100  flex justify-center align-middle pt-4">
              <img class="image-light" loading="lazy" src="@/assets/images/streich-sailing/HL-3.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold">Various Color Solutions of Your Choice </h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p class="w-2/3">
              With soaring lines, you have the freedom to choose from a wide range of color options for your stretch ceiling.
              Whether you prefer bold and vibrant colors or subtle and neutral tones, there is a color
              solution to suit your taste and interior design theme. This allows you to customize the
              ceiling to match the overall aesthetic of the room.
            </p>
            <div class=" w-100 h-auto flex justify-center align-middle pt-4">
              <img class="image-light" loading="lazy" src="@/assets/images/streich-sailing/HL-9.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold">Possibility of Using Several Tones:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p class="w-2/3">
              Another advantage of soaring lines for stretch ceilings is the possibility of using multiple tones.
              This means you can create a unique and dynamic visual effect by combining different colors within the pattern.
              Whether you want a monochromatic look or a contrasting color scheme, the flexibility of using several
              tones adds depth and visual interest to the ceiling.
            </p>
            <div class="bathroom-img w-100 h-auto flex justify-center align-middle pt-4">
              <img class="image-light" loading="lazy" src="@/assets/images/streich-sailing/HL-5.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold">Using Various Shapes and Figures:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p class="w-2/3">
              Soaring lines offer endless possibilities when it comes to shapes and figures.
              Whether you prefer straight lines, curves, or geometric patterns, you can create a design that suits your
              style. The versatility of using various shapes and figures allows you to add a touch of creativity
              and uniqueness to your stretch ceiling.
            </p>
            <div class="bathroom-img w-100 h-auto flex justify-center align-middle pt-4">
              <img class="image-light" loading="lazy" src="@/assets/images/streich-sailing/HL-6.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold">Quick Installation:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p class="w-2/3">
              One of the practical advantages of soaring lines for stretch ceilings is the quick installation process.
              Professional installers can efficiently install the stretch ceiling with the soaring lines pattern,
              saving you time and minimizing disruption to your daily routine. This is especially beneficial for
              those who want to renovate or update their ceiling without extensive construction work.
            </p>
            <div class="bathroom-img w-100 h-auto flex justify-center align-middle pt-4">
              <img class="image-light" loading="lazy" src="@/assets/images/streich-sailing/HL-7.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold">Energy-Saving Lighting:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p class="w-2/3">
              By incorporating energy-saving lighting into the stretch ceiling, you can save electricity and
              reduce your energy costs. The LED strip lights used in conjunction with the soaring lines
              pattern can create a streamlined effect in the room. The correctly adjusted incidence of light
              enhances the overall ambiance and adds a modern touch to the space.
            </p>
            <div class="bathroom-img w-100 h-auto flex justify-center align-middle pt-4">
              <img class="image-light" loading="lazy" src="@/assets/images/streich-sailing/HL-8.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p class="text-2xl text-center">
              Soaring lines for stretch ceilings offer numerous advantages that enhance the visual appeal and functionality of a room.
              From increasing the visual space to providing various color solutions, the soaring lines pattern allows
              homeowners to create a unique and stylish ceiling design. With quick installation and the option to
              incorporate energy-saving lighting, it's no wonder that soaring lines are a popular choice for modern
              interior design. Consider incorporating this design element into your next home renovation project to
              elevate the aesthetics of your living space.
            </p>

            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          </div>

          <div class="about-article text-white flex flex-col text-center justify-center p-8 m-8">
            <iframe allow="fullscreen" allowfullscreen height="720" src="https://streamable.com/e/yktw5c?loop=0" width="720" style="border:none;"></iframe>
          </div>
        </div>
      </div>
      <CallButton/>
      <Footer/>
    </div>
    <div v-if="isMobile || isTablet">
      <div  class="m-wrapper">
        <HeaderMobile/>
        <div class="w-100 h-100 flex flex-col justify-center align-middle">
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h1 class="services-title text-white p-8 text-7xl text-center uppercase">Light Lines</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
      </div>
      <div class="about-wrapper grid grid-cols-1 gap-8">

        <div class="about-article text-white flex flex-col p-8">
          <h1 class="title-article-about text-5xl text-center"> Light Lines for stretch ceilings</h1>
          <div class="left-0">
            <p>
              Stretch ceilings have become increasingly popular in interior design due to their versatility and aesthetic
              appeal. One of the most sought-after designs is the soaring lines pattern, which offers several advantages
              for homeowners.
            </p>
            <h4>
              Rollson Light Lines revolutionise the illumination of spaces by integrating with the entire range of Rollson’s stretch products to create a minimalist and unique aesthetic within the ceiling.
            </h4>
            <h4>
              Characterised by its ability to create clean and uniform lighting designs, the flexible and versatile nature of Rollson Light Lines allows you construct the exact look you want, from a palette of over 300 colours and finishes.
            </h4>
            <h3>Creative Lighting</h3>
            <h4>Adaptable to all shapes, Light Lines enable the invisible integration of LED lighting systems in both straight and rounded designs.</h4>

            <h4>These creative light profiles provide a fully optimised lighting system without the need for additional diffusers, saving energy and extending the life of the LEDs.
            </h4>


          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold"> MAIN ADVANTAGES OF SOARING LIGHT LINES:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <div class="pb-4">
            <ol class="list-disc">
              <li>Reduced power consumption</li>
              <li>Energy saving, very low voltage electrical system</li>
              <li>Extended LED lifetime</li>
              <li>Invisible integration</li>
              <li>Significant choice of technical solutions</li>
              <li>Over 300 colours and finishes to choose from</li>
              <li>Small footprint with only a 20mm aperture</li>
              <li>Adaptable to all shapes with both straight and rounded designs</li>
              <li>Dimmable lighting with easy change LEDs</li>
            </ol>
          </div>
          <p>
            Stretch ceilings are extremely versatile and be made to any shape or size to suit any ceiling or wall space.
          </p>
          <p>We can also work with you to ensure the correct perimeter and background structures are in place to take
            the system and advise you on the optimal depth required to achieve uniform illumination without spotting or shadowing</p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-2.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold"> Increasing the Visual Space of the Room:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            One of the primary benefits of using soaring lines for stretch ceilings is the ability to visually expand
            the space in a room. The upward lines create an illusion of height, making the room appear larger and more
            spacious. This is particularly beneficial for smaller rooms or spaces with low ceilings,
            as it can make them feel more open and airy.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-3.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Various Color Solutions of Your Choice </h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            With soaring lines, you have the freedom to choose from a wide range of color options for your stretch ceiling.
            Whether you prefer bold and vibrant colors or subtle and neutral tones, there is a color
            solution to suit your taste and interior design theme. This allows you to customize the
            ceiling to match the overall aesthetic of the room.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-4.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Possibility of Using Several Tones:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Another advantage of soaring lines for stretch ceilings is the possibility of using multiple tones.
            This means you can create a unique and dynamic visual effect by combining different colors within the pattern.
            Whether you want a monochromatic look or a contrasting color scheme, the flexibility of using several
            tones adds depth and visual interest to the ceiling.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-5.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Using Various Shapes and Figures:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Soaring lines offer endless possibilities when it comes to shapes and figures.
            Whether you prefer straight lines, curves, or geometric patterns, you can create a design that suits your
            style. The versatility of using various shapes and figures allows you to add a touch of creativity
            and uniqueness to your stretch ceiling.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-6.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Quick Installation:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            One of the practical advantages of soaring lines for stretch ceilings is the quick installation process.
            Professional installers can efficiently install the stretch ceiling with the soaring lines pattern,
            saving you time and minimizing disruption to your daily routine. This is especially beneficial for
            those who want to renovate or update their ceiling without extensive construction work.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-7.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Energy-Saving Lighting:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            By incorporating energy-saving lighting into the stretch ceiling, you can save electricity and
            reduce your energy costs. The LED strip lights used in conjunction with the soaring lines
            pattern can create a streamlined effect in the room. The correctly adjusted incidence of light
            enhances the overall ambiance and adds a modern touch to the space.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-8.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p class="text-2xl text-center">
            Soaring lines for stretch ceilings offer numerous advantages that enhance the visual appeal and functionality of a room.
            From increasing the visual space to providing various color solutions, the soaring lines pattern allows
            homeowners to create a unique and stylish ceiling design. With quick installation and the option to
            incorporate energy-saving lighting, it's no wonder that soaring lines are a popular choice for modern
            interior design. Consider incorporating this design element into your next home renovation project to
            elevate the aesthetics of your living space.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/HL-9.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
      </div>
      <FooterMobile/>
    </div>
  </div>
</template>

<style>
@import "@/assets/css/main.css";
@import "@/assets/css/button-gold.css";
.main{
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #000000;

}
.wrapper{
  width: 100%;
  margin: 0;
  padding-bottom: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
//background: rgb(4,2,5);
//background: linear-gradient(135deg, rgba(4,2,5,1) 30%, rgba(255,233,117,1) 68%, rgba(249,225,114,1) 92%, rgba(191,147,85,1) 99%);
}
.m-wrapper{
  width: 100%;

  overflow: hidden;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.works{
  color: #ffe975;
}
.about-article{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-article-about{
  font-family: Azonix;
  padding-bottom: 2rem;
}
.image-light{
 width: 70%;
  height: auto;
}
</style>