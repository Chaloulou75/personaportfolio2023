<script setup>
import { ref, computed } from "vue";
const category = ref("");
const categories = ref([
  {
    id: 1,
    name: "#Denim",
  },
  {
    id: 2,
    name: "#Media & Journalism",
  },
  {
    id: 3,
    name: "#Sustainability",
  },
  {
    id: 4,
    name: "#Talks & Conferences",
  },
  {
    id: 5,
    name: "#Trend Reports",
  },
]);
const works = ref([
  {
    name: "Bluecode",
    slug: "bluecode",
    year: "2021",
    category: ["#Denim"],
    background: "bg-dia-1 from-black to-gray-800",
    background2: "bg-gray-900",
    description:
      "BLUECODE is a Denim & Casualwear fabric collection launched in 2018 by Santista/Tavex in Argentina. We designed 12 products with different constructions, weights, indigo dying, fibres and compositions for menswear and womenswear collections, where I participated as Assistant Denim Manager. We worked on fabric development for several months, and I supported the manager (in collaboration with the I+D team) in the research for the fabric collection. I was in charge of the garments collection that we created to show the fabric potential and the trend direction of the season to our clients. I also participated in trend reporting, creating a report of more than 60 pages with plenty of information to send to our clients (B2B). I introduced the report and the new fabrics in the launch event. Pictures are from the campaign, the collection of fabrics and garments, and the launch event and client presentation.",
    images: [
      {
        id: 1,
        name: "uno",
        href: "/img/proyectos/diauno/1.jpg",
      },
      {
        id: 2,
        name: "dos",
        href: "/img/proyectos/diauno/2.jpg",
      },
      {
        id: 3,
        name: "tres",
        href: "/img/proyectos/diauno/3.jpg",
      },
      {
        id: 4,
        name: "cuatro",
        href: "/img/proyectos/diauno/4.jpg",
      },
      {
        id: 5,
        name: "cinco",
        href: "/img/proyectos/diauno/5.jpg",
      },
      {
        id: 6,
        name: "seis",
        href: "/img/proyectos/diauno/6.jpg",
      },
      {
        id: 7,
        name: "siete",
        href: "/img/proyectos/diauno/7.jpg",
      },
      {
        id: 8,
        name: "ocho",
        href: "/img/proyectos/diauno/8.jpg",
      },
      {
        id: 9,
        name: "nueve",
        href: "/img/proyectos/diauno/9.jpg",
      },
      {
        id: 10,
        name: "dies",
        href: "/img/proyectos/diauno/10.jpg",
      },
      {
        id: 11,
        name: "once",
        href: "/img/proyectos/diauno/11.jpg",
      },
    ],
  },
  {
    name: "Central Denim",
    slug: "central-denim",
    year: "2020",
    category: ["#Denim"],
    background: "bg-dia-2 from-red-600 to-redjuli",
    background2: "bg-gray-900",
    description:
      "Central Denim is a personalised course that offers training in the market and consumer trends, branding, optimization of the jeanswear production chain, training fashion and textile professionals to work in the industry. From specialising in fabrics, introducing indigo dyes, yarn, effects, constructions to the product, through the stages of manufacturing, washing and sustainable processes. Central denim is part of the consultancy firm Be Disobedient&#39;s training programme. I coordinate the UDEM edition where we trained teachers from the Mexican University UDEM in Denim and sustainability.",
  },
  {
    name: "3",
    slug: "3-denim",
    year: "2021",
    category: ["#Fashion Design", "#Sustainability"],
    background: "bg-dia-3 from-blue-500 to-bluejuli",
    background2: "bg-blue-900",
  },
  {
    name: "4",
    slug: "4-denim",
    year: "2019",
    category: ["#Textile Design", "#Trend Reports"],
    background: "bg-dia-4 from-yellow-500 to-yellowjuli",
    background2: "bg-yellowjuli",
  },
  {
    name: "5",
    slug: "5-denim",
    year: "2020",
    category: ["#Sustainability", "#Trend Reports"],
    background: "bg-dia-5 from-gray-900 to-black",
    background2: "bg-gray-800",
  },
  {
    name: "6",
    slug: "6-denim",
    year: "2018",
    category: ["#Textile Design", "#Sustainability"],
    background: "bg-dia-6 from-blue-500 to-bluejuli",
    background2: "bg-blue-800",
  },
]);

const filterWorksByCategory = computed(() => {
  if (category.value == "") {
    return works.value;
  } else {
    return works.value.filter((work) => work.category.includes(category.value));
  }
});
</script>

<template>
  <div class="flex flex-col flex-1 my-4">
    <div class="px-10 mx-auto">
      <h3 class="px-4 my-3 font-semibold">Categories</h3>
      <select
        class="space-y-1 px-4 py-2.5 focus:outline-none"
        v-model="category"
      >
        <option value="" class="focus:outline-none" selected>#All</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.name"
          class="focus:outline-none"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <div
      class="container relative grid flex-1 w-full min-h-full grid-cols-1 gap-2 p-10 mx-auto my-8 text-white auto-cols-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
    >
      <NuxtLink
        v-for="(work, index) in filterWorksByCategory"
        :key="index"
        :to="'/works/' + work.slug"
        class="relative transition duration-300 ease-in-out bg-center bg-cover dias-moove max-h-72 hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
        :class="work.background"
      >
        <div
          class="absolute inset-0 bg-opacity-25"
          :class="work.background2"
        ></div>
        <div class="relative flex flex-col items-start h-full font-ubuntu">
          <h2
            class="px-4 py-4 text-3xl font-bold leading-normal tracking-wider text-white"
          >
            <span class="text-lg">{{ work.name }}</span>
          </h2>
          <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            {{ work.year }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
