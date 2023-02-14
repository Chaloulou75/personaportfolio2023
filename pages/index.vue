<script setup>
import { ref, reactive, computed } from "vue";

const moove = ref(true);

const theme = ref("theme-inicio");
// const themes = reactive([
//   {
//     name: "theme-inicio",
//     background: "bg-white",
//   },
//   {
//     name: "theme-blue",
//     background: "bg-bluejuli",
//   },
//   {
//     name: "theme-red",
//     background: "bg-redjuli",
//   },
//   {
//     name: "theme-yellow",
//     background: "bg-yellowjuli",
//   },
// ]);
</script>

<template>
  <div class="relative flex items-center justify-center flex-1 min-h-screen">
    <div
      class="absolute inset-y-0 right-0 z-30 mt-16 mr-12 lg:mt-6 cursor-mano lg:mr-32"
    >
      <div class="fixed space-y-4">
        <div
          class="w-5 h-5 transition duration-200 transform border shadow-lg bg-bluejuli border-bluejuli hover:scale-110 hover:-rotate-45 cursor-mano"
        ></div>

        <div
          class="w-5 h-5 transition duration-200 transform border shadow-lg border-yellowjuli bg-yellowjuli hover:scale-110 hover:-rotate-45 cursor-mano"
        ></div>

        <div
          class="w-5 h-5 transition duration-200 transform border shadow-lg border-redjuli bg-redjuli hover:scale-110 hover:-rotate-45 cursor-mano"
        ></div>

        <div class="focus:outline-none" @click="moove = !moove">
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
      class="relative flex w-full h-screen font-bold text-black bg-gray-200 text-8xl md:text-11xl md:h-1/2"
    >
      <div
        class="absolute origin-center top-[10%] left-[45%] md:top-[-12%] md:left-[45%] hover:animate-pause"
        :class="{ 'animate-letterP': moove }"
      >
        P
      </div>
      <div
        class="absolute origin-center rotate-90 top-[25%] left-[22%] md:top-[10%] md:left-[25%] hover:animate-pause"
        :class="{ 'animate-letterE': moove }"
      >
        E
      </div>
      <div
        class="absolute origin-center top-[37%] left-[4%] md:top-[35%] md:left-[5%] hover:animate-pause"
        :class="{ 'animate-letterR': moove }"
      >
        R
      </div>
      <div
        class="absolute origin-center rotate-90 top-[50%] left-[25%] md:top-[65%] md:left-[25%] hover:animate-pause"
        :class="{ 'animate-letterS': moove }"
      >
        S
      </div>
      <div
        class="absolute origin-center top-[63%] left-[45%] md:top-[80%] md:left-[45%] hover:animate-pause"
        :class="{ 'animate-letterO': moove }"
      >
        O
      </div>
      <div
        class="absolute origin-center top-[40%] left-[65%] md:top-[10%] md:left-[70%] hover:animate-pause"
        :class="{ 'animate-letterN': moove }"
      >
        N
      </div>
      <div
        class="absolute -rotate-90 origin-center top-[25%] left-[65%] md:top-[65%] md:left-[70%] hover:animate-pause"
        :class="{ 'animate-letterA': moove }"
      >
        A
      </div>
    </div>
  </div>
</template>
