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
          <h1 class="services-title text-white p-8 text-7xl text-center">What are Stretch Ceilings?</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
        <div class="about-wrapper grid grid-cols-1 gap-8">
          <div class="about-article text-white flex flex-col p-8 m-8 pr-10 mr-10">
            <h1 class="title-article-about text-5xl text-center">Introducing Stretch Ceiling by Rollson</h1>
            <h2 class="pr-8 mr-8">
              Stretch ceilings are a type of suspended ceiling made from a flexible PVC or fabric material that is
              stretched across a framework. This system allows for a smooth, seamless finish that can be customized
              in terms of color, texture, and design. Stretch ceilings can be installed in various shapes and
              configurations, making them suitable for any room, from residential spaces to commercial environments.
            </h2>
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
            <h2 class="text-4xl text-center font-bold"> Versatility in Design:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p>
              Versatility:
              One of the key advantages of stretch ceilings is their versatility. They can be installed in various
              shapes, sizes, and designs, allowing for endless possibilities in terms of creativity and customization.
              Whether you want a sleek and minimalist look for your home office or a vibrant and eye-catching design
              for a restaurant, stretch ceilings can be tailored to meet your specific requirements.
            </p>
            <p>Stretch ceilings are incredibly versatile, allowing for creative freedom in design. They can be used to
              create unique shapes, such as curves and waves, that add visual interest to a space. Additionally,
              stretch ceilings can incorporate various lighting options, including integrated LED lights and light lines,
              which can enhance the ambiance and functionality of a room. This adaptability makes stretch ceilings
              suitable for various applications, including residential homes, offices, restaurants, and retail spaces.</p>
            <div class="bathroom-img w-100 h-auto pt-4">
              <img loading="lazy" src="@/assets/images/streich-sailing/ST_12.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold"> Aesthetic Appeal:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p>One of the most significant advantages of stretch ceilings is their aesthetic appeal. They provide a sleek,
              modern look that can enhance the overall design of a room. Available in a wide range of colors and finishes,
              including matte, glossy, and even printed designs, stretch ceilings can complement any interior style.
              Whether you prefer a minimalist approach or a bold statement, stretch ceilings can be tailored
              to meet your design vision.</p>
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
            <p>
              In addition to their aesthetic and practical advantages, stretch ceilings can also provide acoustic benefits.
              The materials used in stretch ceilings can help absorb sound, reducing noise levels in a room.
              This feature is particularly beneficial in commercial spaces, such as offices and restaurants,
              where noise control is essential for creating a comfortable environment.
            </p>
            <div class="bathroom-img w-100 h-auto pt-4">
              <img loading="lazy" src="@/assets/images/streich-sailing/ST_13.avif" alt="">
            </div>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold">Easy Installation and Maintenance:</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <p>
              Stretch ceilings are incredibly easy to maintain, making them a practical choice for busy spaces.
              They are resistant to moisture, mold, and mildew, making them suitable for areas with high humidity levels,
              such as kitchens and bathrooms. Cleaning is a breeze, as stretch ceilings can be wiped clean with a damp
              cloth, eliminating the need for extensive maintenance.
            </p>
            <p>
              The installation process for stretch ceilings is relatively quick and straightforward. Unlike traditional
              ceiling options, which may require extensive construction work, stretch ceilings can be installed with
              minimal disruption. The process typically involves mounting a track around the perimeter of
              the room and then stretching the material into place.

            </p>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
            <h2 class="text-4xl text-center font-bold pb-8">Moreover:</h2>
            <h2 class="text-2xl text-center font-bold"> Stretch ceilings are easy to maintain.
              They are resistant to moisture, mold, and mildew, making them an excellent choice for areas prone to
              humidity, such as kitchens and bathrooms. Cleaning is also simple, as most stretch ceiling
              materials can be wiped down with a damp cloth.</h2>
            <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
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
            <p class="text-2xl text-center pb-8">
              Stretch ceilings offer a multitude of benefits that make them the better choice for home offices,
              restaurants, and other commercial spaces. Their versatility, aesthetic appeal, acoustic benefits,
              easy maintenance, durability, and energy efficiency set them apart from traditional ceiling options.
              Whether you are looking to create a stylish and functional home office or a captivating ambiance for a
              restaurant, stretch ceilings provide the perfect solution. Embrace the modern and innovative design
              possibilities that stretch ceilings offer and transform your space into a visually stunning
              and comfortable environment.
            </p>
            <p class="text-2xl text-center pb-8">
              Stretch ceilings are a modern and innovative solution for enhancing interior spaces. With their aesthetic
              appeal, versatility, easy installation, and maintenance, they offer a unique way to transform any room.
              Whether you are looking to update your home or design a commercial space, stretch ceilings provide a
              stylish and functional option that meets the demands of contemporary design. Embrace the future of
              interior design with stretch ceilings and discover the endless possibilities they offer.
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
          <h1 class="services-title text-white p-8 text-7xl text-center">Stretch Ceiling</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
      </div>
      <div class="about-wrapper grid grid-cols-1 gap-8">
        <div class="about-article text-white flex flex-col p-8 m-8 pr-10 mr-10">
          <h1 class="title-article-about text-5xl text-center">Introducing Stretch Ceiling by Rollson</h1>
          <h2 class="pr-8 mr-8">
            Stretch ceilings are a type of suspended ceiling made from a flexible PVC or fabric material that is
            stretched across a framework. This system allows for a smooth, seamless finish that can be customized
            in terms of color, texture, and design. Stretch ceilings can be installed in various shapes and
            configurations, making them suitable for any room, from residential spaces to commercial environments.
          </h2>
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
          <h2 class="text-4xl text-center font-bold"> Versatility in Design:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Versatility:
            One of the key advantages of stretch ceilings is their versatility. They can be installed in various
            shapes, sizes, and designs, allowing for endless possibilities in terms of creativity and customization.
            Whether you want a sleek and minimalist look for your home office or a vibrant and eye-catching design
            for a restaurant, stretch ceilings can be tailored to meet your specific requirements.
          </p>
          <p>Stretch ceilings are incredibly versatile, allowing for creative freedom in design. They can be used to
            create unique shapes, such as curves and waves, that add visual interest to a space. Additionally,
            stretch ceilings can incorporate various lighting options, including integrated LED lights and light lines,
            which can enhance the ambiance and functionality of a room. This adaptability makes stretch ceilings
            suitable for various applications, including residential homes, offices, restaurants, and retail spaces.</p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/ST_12.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold"> Aesthetic Appeal:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>One of the most significant advantages of stretch ceilings is their aesthetic appeal. They provide a sleek,
            modern look that can enhance the overall design of a room. Available in a wide range of colors and finishes,
            including matte, glossy, and even printed designs, stretch ceilings can complement any interior style.
            Whether you prefer a minimalist approach or a bold statement, stretch ceilings can be tailored
            to meet your design vision.</p>
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
          <p>
            In addition to their aesthetic and practical advantages, stretch ceilings can also provide acoustic benefits.
            The materials used in stretch ceilings can help absorb sound, reducing noise levels in a room.
            This feature is particularly beneficial in commercial spaces, such as offices and restaurants,
            where noise control is essential for creating a comfortable environment.
          </p>
          <div class="bathroom-img w-100 h-auto pt-4">
            <img loading="lazy" src="@/assets/images/streich-sailing/ST_13.avif" alt="">
          </div>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold">Easy Installation and Maintenance:</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <p>
            Stretch ceilings are incredibly easy to maintain, making them a practical choice for busy spaces.
            They are resistant to moisture, mold, and mildew, making them suitable for areas with high humidity levels,
            such as kitchens and bathrooms. Cleaning is a breeze, as stretch ceilings can be wiped clean with a damp
            cloth, eliminating the need for extensive maintenance.
          </p>
          <p>
            The installation process for stretch ceilings is relatively quick and straightforward. Unlike traditional
            ceiling options, which may require extensive construction work, stretch ceilings can be installed with
            minimal disruption. The process typically involves mounting a track around the perimeter of
            the room and then stretching the material into place.

          </p>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h2 class="text-4xl text-center font-bold pb-8">Moreover:</h2>
          <h2 class="text-2xl text-center font-bold"> Stretch ceilings are easy to maintain.
            They are resistant to moisture, mold, and mildew, making them an excellent choice for areas prone to
            humidity, such as kitchens and bathrooms. Cleaning is also simple, as most stretch ceiling
            materials can be wiped down with a damp cloth.</h2>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
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
          <p class="text-2xl text-center pb-8">
            Stretch ceilings offer a multitude of benefits that make them the better choice for home offices,
            restaurants, and other commercial spaces. Their versatility, aesthetic appeal, acoustic benefits,
            easy maintenance, durability, and energy efficiency set them apart from traditional ceiling options.
            Whether you are looking to create a stylish and functional home office or a captivating ambiance for a
            restaurant, stretch ceilings provide the perfect solution. Embrace the modern and innovative design
            possibilities that stretch ceilings offer and transform your space into a visually stunning
            and comfortable environment.
          </p>
          <p class="text-2xl text-center pb-8">
            Stretch ceilings are a modern and innovative solution for enhancing interior spaces. With their aesthetic
            appeal, versatility, easy installation, and maintenance, they offer a unique way to transform any room.
            Whether you are looking to update your home or design a commercial space, stretch ceilings provide a
            stylish and functional option that meets the demands of contemporary design. Embrace the future of
            interior design with stretch ceilings and discover the endless possibilities they offer.
          </p>
          <hr class="w-1/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
        <div class="about-article text-white flex flex-col text-center justify-center p-8 m-8">
          <iframe allow="fullscreen" allowfullscreen height="720" src="https://streamable.com/e/yktw5c?loop=0" width="720" style="border:none;"></iframe>
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