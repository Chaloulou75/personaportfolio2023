<script setup>
import { computed } from "vue";
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
    class="container relative flex flex-col items-center justify-between flex-1 w-full mx-auto my-8 md:p-10"
  >
    <div class="w-full mx-auto mb-12">
      <img
        src="/img/proyectos/diauno/1.jpg"
        class="mx-auto shadow-lg shadow-sky-800/60 sm:[95vw] md:[100vw] lg:[100vw]"
      />
    </div>
    <div class="w-full px-4 mb-12 md:px-0">
      <h1 class="my-4 font-semibold">{{ showWork.name }}</h1>
      <p class="mb-4">
        {{ showWork.description }}
      </p>
      <div class="flex flex-col justify-between md:flex-row">
        <div>
          <ul class="font-semibold">
            Programs
          </ul>
          <li v-for="(program, index) in showWork.programs" :key="index">
            {{ program }}
          </li>
        </div>
        <div>
          <ul class="font-semibold">
            I took part in
          </ul>
          <li v-for="(tookpart, index) in showWork.tookPartIn" :key="index">
            {{ tookpart }}
          </li>
        </div>
        <div>
          <ul class="font-semibold">
            Categorie
          </ul>
          <li
            v-for="(category, index) in showWork.categories"
            :key="index"
            class="list-none"
          >
            {{ category }}
          </li>
        </div>
      </div>
    </div>
    <div class="w-full space-y-12">
      <img
        v-for="(image, index) in showWork.images"
        :key="index"
        :alt="image.name"
        :src="image.href"
        class="mx-auto shadow-lg shadow-sky-800/60 sm:[95vw] md:[100vw] lg:[100vw]"
      />
    </div>
  </div>
</template>
