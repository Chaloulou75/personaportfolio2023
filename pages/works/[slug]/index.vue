<script setup>
import { ref, computed } from "vue";
import { works } from "@/stores/WorkStore.js";
const route = useRoute();

const showWork = computed(() => {
  const slug = route.params.slug;
  const work = works.find((w) => w.slug == slug);
  return work;
});
</script>
<template>
  <div
    class="container relative flex flex-col items-center flex-1 w-full mx-auto my-8 md:p-10"
  >
    <div class="w-full h-40 mx-auto mb-6 md:h-96">
      <img
        :src="showWork.images[0].href"
        loading="lazy"
        class="object-cover w-full h-full mx-auto shadow-lg shadow-sky-800/60"
      />
    </div>
    <div class="w-full px-4 mb-6 md:px-0">
      <h1 class="my-4 font-semibold">{{ showWork.name }}</h1>
      <p class="mb-6 text-sm md:mb-10">
        {{ showWork.description }}
      </p>
      <div
        class="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0"
      >
        <div>
          <ul class="font-semibold list-disc list-inside">
            Programs

            <li
              v-for="(program, index) in showWork.programs"
              :key="index"
              class="text-sm font-normal"
            >
              {{ program }}
            </li>
          </ul>
        </div>
        <div>
          <ul class="font-semibold list-disc list-inside">
            I took part in

            <li
              v-for="(tookpart, index) in showWork.tookPartIn"
              :key="index"
              class="text-sm font-normal"
            >
              {{ tookpart }}
            </li>
          </ul>
        </div>
        <div>
          <ul class="font-semibold list-disc list-inside">
            Categorie

            <li
              v-for="(category, index) in showWork.categories"
              :key="index"
              class="text-sm font-normal"
            >
              {{ category }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full space-y-6">
      <img
        v-for="(image, index) in showWork.images"
        :key="index"
        :alt="image.name"
        :src="image.href"
        loading="lazy"
        class="w-full mx-auto shadow-lg shadow-sky-800/60"
      />
    </div>
  </div>
</template>
