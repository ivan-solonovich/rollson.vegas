<script setup lang="ts">

import BP_1 from "~/components/bestpracties/BP_1.vue";
import BP_3 from "~/components/bestpracties/BP_3.vue";
import BP_4 from "~/components/bestpracties/BP_4.vue";
import BP_2 from "~/components/bestpracties/BP_2.vue";
import BP_5 from "~/components/bestpracties/BP_5.vue";
</script>

<template>
  <div class="bp-wrapper text-center w-100 flex flex-col justify-center pt-10 mt-10">
      <div class="w-100 flex justify-start">
        <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
        <h1 class="services-title text-white p-8 text-7xl text-center">Why Choose Us ?</h1>
        <hr class="w-2/3 h-2 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700">
      </div>
    <div id="cssportal-grid">
      <BestpractiesBestPractiesItem/>
      <BP_1/>
      <BP_2/>
      <BP_3/>
      <BP_4/>
      <BP_5/>
    </div>
    <div class="bpi-items bg-gradient-to-r  h-100 flex flex-col justify-center items-center">
      <div class="card-best-practies rounded-lg shadow-lg p-8">
        <h1 class="text-4xl font-extrabold text-white m-10 best-practies-item-title">
          Explore Our Services
        </h1>
        <div class="feauters text-lg text-white ">
            <ol class=" w-100 text-left list-disc">
              <li class="pb-8 ml-10 mr-10 text-2xl">Quality Products: At Rollson, we source only the highest quality materials for our stretch ceilings
                and lighting systems. Our products are designed to be durable, aesthetically pleasing, and
                environmentally friendly, ensuring that your investment stands the test of time.
              </li>
              <li class="pb-8 ml-10 mr-10 text-2xl">Customization: We understand that every project is unique. That’s why we offer a wide range of colors,
                textures, and designs for our stretch ceilings, as well as customizable lighting options. Whether you’re
                looking for a sleek modern look or a more traditional aesthetic, we can help you achieve your vision.
              </li>
              <li class="pb-8 ml-10 mr-10 text-2xl">Seamless Installation: Our installation process is efficient and minimally disruptive. We take pride
                in our attention to detail and ensure that every project is completed to the highest standards. Our team
                works closely with you to ensure that the final result exceeds your expectations.
              </li>
              <li class="pb-8 ml-10 mr-10 text-2xl">Customer Satisfaction: At Rollson, your satisfaction is our top priority. We are committed to
                providing exceptional customer service from the initial consultation to the final installation. Our goal
                is to create spaces that not only look beautiful but also enhance your quality of life.
              </li>
              <li class="pb-8 ml-10 mr-10 text-2xl">Lighting Solutions: Illuminate your interiors with our innovative lighting options. From integrated
                LED systems to decorative fixtures, we offer a range of solutions that enhance both aesthetics and
                functionality.
              </li>
              <li class="pb-8 ml-10 mr-10 text-2xl">Design Consultation: Not sure where to start? Our design experts are here to help. We offer
                personalized consultations to understand your needs and provide recommendations that align with your
                vision.
              </li>

            </ol>
        </div>

      </div>
    </div>
    <div class="button-container">
      <h2 class="pb-4">Contact us today to learn more about our services and to schedule your free estimate.</h2>
      <button class="testbutton"><a href="+17252220550">&#9742; (725) 222-0550</a></button>
    </div>

  </div>
</template>

<style scoped>
@import "@/assets/css/main.css";
@import "@/assets/css/button-gold.css";
@import url("@/assets/css/best-practice-card-item.css");
.bp-wrapper{
  //background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
  //background: rgb(4,2,5);
  //background: linear-gradient(135deg, rgba(4,2,5,1) 17%, rgba(255,233,117,1) 63%, rgba(249,225,114,1) 83%, rgba(191,147,85,1) 95%);
  background-color: #000000;
}
#cssportal-grid {

  padding-top: 5px;
  display: grid;

  grid-template-columns: repeat(3, 3fr);
  gap: 5px;
  width: 100%;
  height: 100%;
  color: black;
}
.why{
  width: 30%;
  font-size: 3rem;
  text-align: center;
  font-family: Azonix;
  font-weight: bolder;

  color: white;
  -webkit-text-stroke: 2px #000;
  text-stroke: 3px black;
  box-shadow: 0px 3px 0px 0px #FFE975;

  margin: 4rem;
}
.que{
  color: #60B88D;
}
</style>