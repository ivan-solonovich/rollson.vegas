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
          <h1 class="services-title text-white p-8 text-7xl text-center">Bathroom Renovation</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
        <div class="about-wrapper grid grid-cols-2 gap-8">
          <div class="about-article text-white flex flex-col p-8 m-8">
            <h1 class="title-article-about">Transform Your Bathroom with Rollson</h1>
            <p class="article-services">
              The bathroom is one of the most important rooms in our homes. It's a space where we start and end our day,
              and it should be a place of relaxation and comfort. If you're looking to give your bathroom a fresh new look,
              Rollson is here to help. Rollson can transform your bathroom
              into a stylish and functional space.
            </p>
            <h2 class="subtitle-services"> Upgrade Your Shower Experience:</h2>
            <p class="article-services">
              One of the key elements of a bathroom is the shower. Rollson offers to install a range of shower systems that can
              enhance your shower experience. From rain showerheads to handheld sprayers, you can choose the perfect
              option that suits your needs. With Rollson, you can enjoy a luxurious and invigorating shower every day.
            </p>
            <h2 class="subtitle-services">Revamp Your Vanity:</h2>
            <p class="article-services">
              A vanity is an essential component of any bathroom, providing storage space and a focal point for the room.
              Rollson specializes in tray vanity installation, offering a range of stylish and functional options. Whether
              you prefer a wall-mounted vanity or a freestanding one, Rollson can help you choose the perfect design that
              fits your bathroom layout and storage needs. With Rollson's expertise, you can enhance the functionality
              and aesthetics of your bathroom with a beautifully installed tray vanity.
            </p>
            <h2 class="subtitle-services"> Professional tiling installation</h2>
            <p class="article-services">
              <span style="color: #ffe975">Tiles play a crucial role in the overall aesthetic of your bathroom.</span>
              Our Expert Team: Our skilled and experienced team of tile installers will ensure precise and flawless installation.
              From intricate mosaic patterns to sleek and modern designs, we have the expertise to bring your vision to life.
            </p>
          </div>

          <div class="about-article text-white flex flex-col p-8 m-8">
            <div style="position:relative; width:100%; height:0px; padding-bottom:100.000%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/udp9ch?loop=0" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
          </div>
          <div class="about-article text-white flex flex-col p-8 m-8">
          <div style="position:relative; width:100%; height:0px; padding-bottom:100.000%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/qksc8l?loop=0" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
          </div>
            <div class="about-article text-white flex flex-col p-8 m-8">

            <p class="article-services">Endless Design Possibilities: With a wide range of tile options available,
              you can choose from an array of colors, textures, and patterns to create a unique and personalized bathroom.
              Whether you prefer classic elegance or contemporary flair, we have the perfect tiles for you.</p>
            <h2 class="subtitle-services"> Waterproof and Durable: </h2>
            <p class="article-services">
              Our high-quality tiles are not only aesthetically pleasing but also built to withstand moisture and daily
              wear and tear. You can trust that your new bathroom tiles will stand the test of time and maintain their
              beauty for years to come.
            </p>
            <h2 class="subtitle-services"> Enhance Storage with Cabinets:</h2>
            <p class="article-services">
              Storage is often a challenge in bathrooms, especially in smaller spaces. Rollson understands this and
              provides innovative storage solutions. Their cabinets are designed to maximize space while maintaining a
              clean and organized look. With Rollson cabinets, you can keep your bathroom essentials neatly tucked away,
              creating a clutter-free environment.
            </p>
            <h2 class="subtitle-services"> Complete Your Bathroom Transformation with Other Works:</h2>
            <p class="article-services">
              In addition to tiles and tray vanity installation, Rollson offers a variety of other works to complete
              your bathroom transformation. This includes plumbing, electrical work, painting, and more. Rollson's team
              of skilled professionals ensures that every aspect of your bathroom renovation is handled with precision
              and care. Whether you need to update your plumbing fixtures, install new lighting, or give your walls a
              fresh coat of paint, Rollson has the expertise to bring your vision to life.
            </p>
            <h2 class="subtitle-services"> Complete Your Bathroom Transformation with Other Works:</h2>
            <p class="article-services">
              Rollson is committed to providing products and services that stand the test of time. With Rollson's
              attention to detail and commitment to quality, you can trust that your bathroom transformation
              will be a long-lasting investment.
            </p>

          </div>
        </div>

      </div>
      <div class="w-100 flex justify-center align-middle text-white">
      <h2 class="subtitle-services">Rollson is your trusted partner in transforming your bathroom into a space that
        is both stylish and functional. From their wide selection of tiles to tray vanity installation and other works,
        Rollson offers everything you need to create the bathroom of your dreams. With their expertise, attention
        to detail, and commitment to quality, Rollson ensures that your bathroom transformation is a seamless and
        enjoyable experience. Invest in Rollson  and enjoy a bathroom that reflects your personal style
        and enhances your daily routine.</h2>
      </div>
      <CallButton/>
      <Footer/>
    </div>
    <div v-if="isMobile || isTablet">
      <div  class="m-wrapper">
        <HeaderMobile/>
        <div class="w-100 h-100 flex flex-col justify-center align-middle">
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
          <h1 class="services-title text-white p-8 text-5xl text-center">Bathroom Renovation</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
        <div class="about-wrapper grid grid-cols-1 gap-8">
          <div class="about-article text-white flex flex-col p-8 m-8">
            <h1 class="title-article-about">Transform Your Bathroom with Rollson</h1>
            <p class="article-services">
              The bathroom is one of the most important rooms in our homes. It's a space where we start and end our day,
              and it should be a place of relaxation and comfort. If you're looking to give your bathroom a fresh new look,
              Rollson is here to help. Rollson can transform your bathroom
              into a stylish and functional space.
            </p>
            <h2 class="subtitle-services"> Upgrade Your Shower Experience:</h2>
            <p class="article-services">
              One of the key elements of a bathroom is the shower. Rollson offers to install a range of shower systems that can
              enhance your shower experience. From rain showerheads to handheld sprayers, you can choose the perfect
              option that suits your needs. With Rollson, you can enjoy a luxurious and invigorating shower every day.
            </p>
            <h2 class="subtitle-services">Revamp Your Vanity:</h2>
            <p class="article-services">
              A vanity is an essential component of any bathroom, providing storage space and a focal point for the room.
              Rollson specializes in tray vanity installation, offering a range of stylish and functional options. Whether
              you prefer a wall-mounted vanity or a freestanding one, Rollson can help you choose the perfect design that
              fits your bathroom layout and storage needs. With Rollson's expertise, you can enhance the functionality
              and aesthetics of your bathroom with a beautifully installed tray vanity.
            </p>
            <h2 class="subtitle-services"> Professional tiling installation</h2>
            <p class="article-services">
              <span style="color: #ffe975">Tiles play a crucial role in the overall aesthetic of your bathroom.</span>
              Our Expert Team: Our skilled and experienced team of tile installers will ensure precise and flawless installation.
              From intricate mosaic patterns to sleek and modern designs, we have the expertise to bring your vision to life.
            </p>
          </div>


          <div class="about-article text-white flex flex-col p-2 m-2">
            <div style="position:relative; width:100%; height:auto; padding-bottom:100.000%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/qksc8l?loop=0" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
          </div>
          <div class="about-article text-white flex flex-col p-8 m-8">

            <p class="article-services">Endless Design Possibilities: With a wide range of tile options available,
              you can choose from an array of colors, textures, and patterns to create a unique and personalized bathroom.
              Whether you prefer classic elegance or contemporary flair, we have the perfect tiles for you.</p>
            <h2 class="subtitle-services"> Waterproof and Durable: </h2>
            <p class="article-services">
              Our high-quality tiles are not only aesthetically pleasing but also built to withstand moisture and daily
              wear and tear. You can trust that your new bathroom tiles will stand the test of time and maintain their
              beauty for years to come.
            </p>
            <div class="about-article text-white flex flex-col p-2 m-2">
              <div style="position:relative; width:100%; height:auto; padding-bottom:100.000%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/udp9ch?loop=0" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
            </div>
            <h2 class="subtitle-services"> Enhance Storage with Cabinets:</h2>
            <p class="article-services">
              Storage is often a challenge in bathrooms, especially in smaller spaces. Rollson understands this and
              provides innovative storage solutions. Their cabinets are designed to maximize space while maintaining a
              clean and organized look. With Rollson cabinets, you can keep your bathroom essentials neatly tucked away,
              creating a clutter-free environment.
            </p>
            <h2 class="subtitle-services"> Complete Your Bathroom Transformation with Other Works:</h2>
            <p class="article-services">
              In addition to tiles and tray vanity installation, Rollson offers a variety of other works to complete
              your bathroom transformation. This includes plumbing, electrical work, painting, and more. Rollson's team
              of skilled professionals ensures that every aspect of your bathroom renovation is handled with precision
              and care. Whether you need to update your plumbing fixtures, install new lighting, or give your walls a
              fresh coat of paint, Rollson has the expertise to bring your vision to life.
            </p>
            <h2 class="subtitle-services"> Complete Your Bathroom Transformation with Other Works:</h2>
            <p class="article-services">
              Rollson is committed to providing products and services that stand the test of time. With Rollson's
              attention to detail and commitment to quality, you can trust that your bathroom transformation
              will be a long-lasting investment.
            </p>

          </div>
        </div>

      </div>
      <div class="w-100 flex justify-center align-middle text-white">
        <h2 class="subtitle-services">Rollson is your trusted partner in transforming your bathroom into a space that
          is both stylish and functional. From their wide selection of tiles to tray vanity installation and other works,
          Rollson offers everything you need to create the bathroom of your dreams. With their expertise, attention
          to detail, and commitment to quality, Rollson ensures that your bathroom transformation is a seamless and
          enjoyable experience. Invest in Rollson  and enjoy a bathroom that reflects your personal style
          and enhances your daily routine.</h2>
      </div>
      <FooterMobile/>
    </div>
  </div>
</template>

<style>
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
.title-article-about{
  font-family: Azonix;
  padding-bottom: 2rem;
}
.article-services{
  padding: 1rem;
}
.subtitle-services{
  font-family: Azonix;
  padding: 1rem;
}

</style>