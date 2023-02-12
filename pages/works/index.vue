<script setup>
import { ref, computed } from "vue";
import { works } from "@/stores/WorkStore.js";

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

const filterWorksByCategory = computed(() => {
  if (category.value == "") {
    return works;
  } else {
    return works.filter((work) => work.categories.includes(category.value));
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
      class="container relative grid w-full grid-cols-1 gap-2 mx-auto my-8 text-white auto-cols-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
    >
      <NuxtLink
        v-for="(work, index) in filterWorksByCategory"
        :key="index"
        :to="'/works/' + work.slug"
        class="relative transition duration-300 ease-in-out bg-center bg-cover max-h-72 hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
        :class="work.background"
      >
        <div
          class="absolute inset-0 bg-opacity-25"
          :class="work.background2"
        ></div>
        <div class="relative flex flex-col items-start h-full">
          <h2
            class="px-4 py-4 text-lg font-semibold leading-normal tracking-wider text-white"
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
