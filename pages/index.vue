<script setup>
import { ref } from "vue";
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
    name: "1",
    year: "2021",
    url: "/portfolio/day-one",
    category: ["#Fashion Design", "#Textile Design"],
    background: "bg-dia-1 from-black to-gray-800",
    background2: "bg-gray-900",
  },
  {
    name: "2",
    year: "2020",
    url: "/portfolio/day-two",
    category: ["#Trend Reports"],
    background: "bg-dia-2 from-red-600 to-redjuli",
    background2: "bg-gray-900",
  },
  {
    name: "3",
    year: "2021",
    url: "/portfolio/day-three",
    category: ["#Fashion Design", "#Sustainability"],
    background: "bg-dia-3 from-blue-500 to-bluejuli",
    background2: "bg-blue-900",
  },
  {
    name: "4",
    year: "2019",
    url: "/portfolio/day-four",
    category: ["#Textile Design", "#Trend Reports"],
    background: "bg-dia-4 from-yellow-500 to-yellowjuli",
    background2: "bg-yellowjuli",
  },
  {
    name: "5",
    year: "2020",
    url: "/portfolio/day-five",
    category: ["#Sustainability", "#Trend Reports"],
    background: "bg-dia-5 from-gray-900 to-black",
    background2: "bg-gray-800",
  },
  {
    name: "6",
    year: "2018",
    url: "/portfolio/day-six",
    category: ["#Textile Design", "#Sustainability"],
    background: "bg-dia-6 from-blue-500 to-bluejuli",
    background2: "bg-blue-800",
  },
]);
</script>

<template>
  <div class="flex flex-col flex-1 min-h-full my-4">
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
          value="category.name"
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
        v-for="(work, index) in works"
        :key="index"
        :to="work.url"
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
