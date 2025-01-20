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
          <h1 class="services-title text-white p-8 text-7xl text-center">About Us</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
        <div class="about-wrapper grid grid-cols-2 gap-8">
          <div class="about-article text-white flex flex-col p-8 m-8">
            <h1 class="text-3xl title-article-about">Welcome to Rollson - Your Trusted Home Renovation Company in Las Vegas</h1>
            <h3 class="text-2xl pb-8">
              At Rollson, we believe that every space has the potential to inspire and transform. As a leading provider
              of stretch ceilings and innovative lighting solutions, we are dedicated to enhancing the beauty and
              functionality of your interiors. With years of experience in the industry, our team of experts is committed
              to delivering high-quality products and exceptional service tailored to meet your unique design needs.
            </h3>
            <p class="text-2xl pb-8">Why Choose Rollson?
              Expertise and Experience: Our team comprises skilled professionals with extensive knowledge in stretch ceiling
              installation and lighting design. We stay updated with the latest trends and technologies to ensure that
              we provide you with the best solutions for your space.</p>
            <p>
              <p>
                Rollson provide a professional standard of workmanship using our experienced team of tradesmen.
                Our prices are very competitive without compromising on quality.
              </p>
              <p>Our goal at the end of each project is to produce a quality product with complete customer satisfaction.
                We want you to be proud to show off the work in your house and be able to tell people what an exceptional experience you had working with us.  On each job we undertake, we work with our customers to determine their needs and how we can best meet them. We set a fair price for the work backed by workmanship and a service commitment that is rare among contracting companies today.
              </p>
              <p>
                We want to give our customers the best work for their investment.  Regardless of whether you are planning
                a major home remodel or a small repair, give us the opportunity to show you what quality workmanship and
                customer service really is.
              </p>
              <p>
              On larger jobs, we will usually provide a written estimate for the intended works. This will include, in most cases, the supply of relevant parts needed.
               </p>
              <p>We have had many personal recommendations from satisfied customers.</p>
            </p>
<!--            <p>-->
<!--            One of our unique offerings is our specialization in Venetian Plaster. As the singular provider of Venetian-->
<!--              Plaster in Las Vegas, we bring you a unique type of decorative plaster that adds elegance and sophistication-->
<!--              to any space. With a wide range of colors and textures to choose from, our Venetian Plaster is sure-->
<!--              to transform your walls into works of art.-->
<!--            </p>-->
<!--            <p>-->
<!--            In addition to Venetian Plaster, we also offer a diverse selection of modern flooring options. Whether-->
<!--              you're looking for  laminate, vinyl, or tile flooring, we have the perfect solution to suit your style-->
<!--              and budget. Our team of highly-skilled craftspeople will ensure that your flooring installation is done-->
<!--              with precision and attention to detail.-->
<!--            </p>-->
<!--            <p>-->
<!--            Rollson is also your go-to source for commercial restaurant and office tile solutions. We understand the-->
<!--              unique needs of businesses and offer customized tile options that are both functional and aesthetically pleasing.-->
<!--              From durable and slip-resistant tiles for high-traffic areas to stylish designs that enhance your brand image, we have it all.-->
<!--            </p>-->
<!--            <p>-->
<!--            When you choose Rollson, you can expect European quality guarantee and a customer-first experience.-->
<!--              We prioritize your satisfaction and strive to exceed your expectations at every step of the renovation process.-->
<!--              Our team of highly-skilled craftspeople is dedicated to delivering exceptional craftsmanship and attention-->
<!--              to detail in every project we undertake.-->
<!--            </p>-->
<!--            <p>-->
<!--            Whether you're looking to transform your bathroom, renovate your entire home, or upgrade your commercial space,-->
<!--              Rollson is here to bring your vision to life. Contact us today to schedule a consultation and let us help you-->
<!--              create the home or business of your dreams.-->
<!--            </p>-->
            <h2 class="text-center text-3xl p-20">Welcome to Rollson – where innovation meets elegance!</h2>
          </div>
          <div class="about-article text-white flex flex-col p-8 m-8">
            <div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/c9t6if?loop=0" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
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
          <h1 class="services-title text-white p-8 text-7xl text-center">About Us</h1>
          <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        </div>
      </div>
      <div class="about-wrapper grid grid-cols-1 gap-8">

        <div class="about-wrapper grid grid-cols-2 gap-8">
          <div class="about-article text-white flex flex-col p-8 m-8">
            <h1 class="text-3xl title-article-about">Welcome to Rollson - Your Trusted Home Renovation Company in Las Vegas</h1>
            <h3 class="text-2xl pb-8">
              At Rollson, we believe that every space has the potential to inspire and transform. As a leading provider
              of stretch ceilings and innovative lighting solutions, we are dedicated to enhancing the beauty and
              functionality of your interiors. With years of experience in the industry, our team of experts is committed
              to delivering high-quality products and exceptional service tailored to meet your unique design needs.
            </h3>
            <p class="text-2xl pb-8">Why Choose Rollson?
              Expertise and Experience: Our team comprises skilled professionals with extensive knowledge in stretch ceiling
              installation and lighting design. We stay updated with the latest trends and technologies to ensure that
              we provide you with the best solutions for your space.</p>
            <p>
              <p>
                Rollson provide a professional standard of workmanship using our experienced team of tradesmen.
                Our prices are very competitive without compromising on quality.
              </p>
              <p>Our goal at the end of each project is to produce a quality product with complete customer satisfaction.
                We want you to be proud to show off the work in your house and be able to tell people what an exceptional experience you had working with us.  On each job we undertake, we work with our customers to determine their needs and how we can best meet them. We set a fair price for the work backed by workmanship and a service commitment that is rare among contracting companies today.
              </p>
              <p>
                We want to give our customers the best work for their investment.  Regardless of whether you are planning
                a major home remodel or a small repair, give us the opportunity to show you what quality workmanship and
                customer service really is.
              </p>
              <p>
                On larger jobs, we will usually provide a written estimate for the intended works. This will include, in most cases, the supply of relevant parts needed.
              </p>
              <p>We have had many personal recommendations from satisfied customers.</p>
            </p>
            <!--            <p>-->
            <!--            One of our unique offerings is our specialization in Venetian Plaster. As the singular provider of Venetian-->
            <!--              Plaster in Las Vegas, we bring you a unique type of decorative plaster that adds elegance and sophistication-->
            <!--              to any space. With a wide range of colors and textures to choose from, our Venetian Plaster is sure-->
            <!--              to transform your walls into works of art.-->
            <!--            </p>-->
            <!--            <p>-->
            <!--            In addition to Venetian Plaster, we also offer a diverse selection of modern flooring options. Whether-->
            <!--              you're looking for  laminate, vinyl, or tile flooring, we have the perfect solution to suit your style-->
            <!--              and budget. Our team of highly-skilled craftspeople will ensure that your flooring installation is done-->
            <!--              with precision and attention to detail.-->
            <!--            </p>-->
            <!--            <p>-->
            <!--            Rollson is also your go-to source for commercial restaurant and office tile solutions. We understand the-->
            <!--              unique needs of businesses and offer customized tile options that are both functional and aesthetically pleasing.-->
            <!--              From durable and slip-resistant tiles for high-traffic areas to stylish designs that enhance your brand image, we have it all.-->
            <!--            </p>-->
            <!--            <p>-->
            <!--            When you choose Rollson, you can expect European quality guarantee and a customer-first experience.-->
            <!--              We prioritize your satisfaction and strive to exceed your expectations at every step of the renovation process.-->
            <!--              Our team of highly-skilled craftspeople is dedicated to delivering exceptional craftsmanship and attention-->
            <!--              to detail in every project we undertake.-->
            <!--            </p>-->
            <!--            <p>-->
            <!--            Whether you're looking to transform your bathroom, renovate your entire home, or upgrade your commercial space,-->
            <!--              Rollson is here to bring your vision to life. Contact us today to schedule a consultation and let us help you-->
            <!--              create the home or business of your dreams.-->
            <!--            </p>-->
            <h2 class="text-center text-3xl p-20">Welcome to Rollson – where innovation meets elegance!</h2>
          </div>
          <div class="about-article text-white flex flex-col p-8 m-8">
            <div style="position:relative; width:100%; height:0px; padding-bottom:56.250%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/c9t6if?loop=0" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>
          </div>
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
.title-article-about{
  font-family: Azonix;
  padding-bottom: 2rem;
}

</style>