<script setup>
const route = useRoute();
// const props = defineProps({
//   work: Object,
// });
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
      <h1 class="my-4 font-semibold">{{ route.params.work }}</h1>
      <p class="mb-4">
        Descipción de trabajo, explicacion y areas en las que se desarrollo. Art
        directing, designing and developing an artist’s showcase website. In
        progress, currently desktop only. Incorporates Lottie, scroll, and mouse
        over interactions. Si es posible, poner el link del trabajo real.
      </p>
      <div class="flex flex-col justify-between md:flex-row">
        <div class="font-semibold">Programs</div>
        <div class="font-semibold">I took part in</div>
        <div class="font-semibold">Categorie</div>
      </div>
    </div>
    <div class="w-full space-y-12">
      <!-- <img
        v-for="(image, index) in images"
        :key="index"
        :alt="image.name"
        :src="image.href"
        class="mx-auto shadow-lg shadow-sky-800/60 sm:[95vw] md:[100vw] lg:[100vw]"
      /> -->
    </div>
  </div>
</template>
