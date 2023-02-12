<script setup>
import { ref, computed } from "vue";
</script>

<template>
  <div class="relative flex items-center justify-center flex-1 min-h-screen">
    <div
      class="absolute inset-y-0 right-0 z-30 mt-16 mr-12 lg:mt-6 cursor-mano lg:mr-32"
    >
      <div class="fixed space-y-4">
        <div
          class="w-5 h-5 transition duration-200 transform border shadow-lg bg-bluejuli border-bluejuli hover:scale-110 hover:-rotate-45"
        ></div>

        <div
          class="w-5 h-5 transition duration-200 transform border shadow-lg border-yellowjuli bg-yellowjuli hover:scale-110 hover:-rotate-45"
        ></div>

        <div
          class="w-5 h-5 transition duration-200 transform border shadow-lg border-redjuli bg-redjuli hover:scale-110 hover:-rotate-45"
        ></div>

        <div class="focus:outline-none">
          <!-- py-3 mt-6 -ml-6 text-xs lg:text-base -->
          <svg
            class="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div
      class="relative flex w-full h-full text-4xl font-bold text-black md:text-11xl md:h-1/3"
    >
      <div class="absolute rotate-90 top-1/2 left-40">P</div>
      <div class="absolute -rotate-90 left-1/4 -top-10">E</div>
      <div class="absolute rotate-180 left-1/4 -bottom-10">R</div>
      <div class="absolute top-0 rotate-90 left-1/2">S</div>
      <div class="absolute bottom-0 left-1/2">O</div>
      <div class="absolute right-1/4 top-10">N</div>
      <div class="absolute rotate-90 right-1/4 bottom-5">A</div>
    </div>
  </div>
</template>
