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
          <h1 class="services-title text-white p-8 text-7xl text-center">Stretch Ceiling</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
      </div>
      <div class="about-wrapper grid grid-cols-1 gap-8">
        <div class="about-article text-white flex flex-col p-8 m-8">
          <div style="position:relative; width:100%; height:0px; padding-bottom:100.000%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/yktw5c?loop=0" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
        </div>
        <div class="about-article text-white flex flex-col p-8 m-8">
          <h1 class="title-article-about text-3xl text-center">Introducing Stretch Ceiling by Rollson</h1>
          <p>
            A revolutionary new product in the US market. This innovative ceiling solution offers a sleek and modern
            design that transforms any space with ease. With Stretch Ceiling, you can create a seamless and flawless
            finish that adds elegance and sophistication to any room. Say goodbye to traditional ceilings and hello
            to the future of interior design with Rollson's Stretch Ceiling.
          </p>
          <p>
            In recent years, stretch ceilings have gained popularity as a modern and versatile solution for various
            spaces, including homes, offices, restaurants, and other commercial establishments. With their numerous
            benefits and aesthetic appeal, stretch ceilings have become the preferred choice for many interior
            designers and property owners.
          </p>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold"> Versatility:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Versatility:
            One of the key advantages of stretch ceilings is their versatility. They can be installed in various
            shapes, sizes, and designs, allowing for endless possibilities in terms of creativity and customization.
            Whether you want a sleek and minimalist look for your home office or a vibrant and eye-catching design
            for a restaurant, stretch ceilings can be tailored to meet your specific requirements.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/ST_12.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold"> Aesthetic Appeal:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Stretch ceilings offer a seamless and smooth finish that enhances the overall aesthetic appeal of any space.
            Unlike traditional ceilings, which often have visible joints and imperfections, stretch ceilings
            provide a flawless and elegant appearance. They can be installed with integrated lighting systems,
            creating a soft and ambient atmosphere that adds to the overall charm of the room.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/ST-15.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold"> Acoustic Benefits:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            In spaces where noise reduction is crucial, such as offices and restaurants, stretch ceilings offer
            excellent acoustic properties. They can absorb and reduce sound, creating a more comfortable and peaceful
            environment. This is particularly beneficial in open-plan offices or busy restaurants where minimizing
            noise distractions is essential for productivity and customer satisfaction.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/ST_13.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Easy Maintenance:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Stretch ceilings are incredibly easy to maintain, making them a practical choice for busy spaces.
            They are resistant to moisture, mold, and mildew, making them suitable for areas with high humidity levels,
            such as kitchens and bathrooms. Cleaning is a breeze, as stretch ceilings can be wiped clean with a damp
            cloth, eliminating the need for extensive maintenance.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/ST_14.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Durability and Longevity:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Stretch ceilings are made from high-quality materials that are designed to withstand the test of time.
            They are resistant to fading, cracking, and sagging, ensuring that they maintain their pristine appearance
            for years to come. This durability makes them a cost-effective choice, as they require minimal repairs or
            replacements over their lifespan.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/str-seil.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Energy Efficiency:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Stretch ceilings can contribute to energy efficiency in various ways. They can be installed with thermal
            insulation, helping to regulate the temperature of a space and reduce energy consumption. Additionally,
            the reflective properties of stretch ceilings can enhance natural light distribution, reducing the need
            for artificial lighting during the day and saving on electricity costs.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/itempiamos-lubos-sklandancios-linijos-1631x1080.jpg" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p class="text-2xl text-center">
            Stretch ceilings offer a multitude of benefits that make them the better choice for home offices,
            restaurants, and other commercial spaces. Their versatility, aesthetic appeal, acoustic benefits,
            easy maintenance, durability, and energy efficiency set them apart from traditional ceiling options.
            Whether you are looking to create a stylish and functional home office or a captivating ambiance for a
            restaurant, stretch ceilings provide the perfect solution. Embrace the modern and innovative design
            possibilities that stretch ceilings offer and transform your space into a visually stunning
            and comfortable environment.
          </p>
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

</style>