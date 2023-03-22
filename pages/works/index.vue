<script setup>
import { ref, computed } from "vue";
import { selectedCategory, categories, works } from "@/stores/WorkStore.js";

const filterWorksByCategory = computed(() => {
  if (selectedCategory.value == "#All") {
    return works;
  } else {
    return works.filter((work) =>
      work.categories.includes(selectedCategory.value)
    );
  }
});
</script>

<template>
  <div class="flex flex-col flex-1 px-2 my-4">
    <div class="w-full px-2 mx-auto md:hidden">
      <h3 class="px-4 my-3 font-semibold text-center">Categories</h3>
      <SelectCategoryComponent />
    </div>
    <div
      class="container relative grid w-full grid-cols-1 gap-2 mx-auto my-8 text-white auto-cols-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-4"
    >
      <NuxtLink
        v-for="(work, index) in filterWorksByCategory"
        :key="index"
        :to="'/works/' + work.slug"
        class="relative transition duration-300 ease-in-out bg-center bg-cover cursor-mano max-h-72 hover:rotate-3 hover:bg-gradient-to-br lg:hover:rotate-6"
        :class="work.background"
      >
        <div
          class="absolute inset-0 bg-opacity-25"
          :class="work.background2"
        ></div>
        <div class="relative flex flex-col items-start h-36">
          <h2
            class="px-4 py-4 text-lg font-semibold leading-normal tracking-wider text-white"
          >
            <span class="text-lg">{{ work.name }}</span>
          </h2>
          <!-- <p
            class="px-4 py-1 text-lg leading-normal tracking-wider text-white lg:py-0"
          >
            {{ work.year }}
          </p> -->
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
