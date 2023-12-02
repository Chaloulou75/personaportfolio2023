<script setup>
import { ref, computed } from "vue";

const moove = ref(true);

const themeColor = ref("theme-inicio");

const colorTheme = computed(() => {
  if (themeColor.value == "theme-blue") {
    return "bg-bluejuli";
  } else if (themeColor.value == "theme-red") {
    return "bg-redjuli";
  } else if (themeColor.value == "theme-yellow") {
    return "bg-yellowjuli";
  } else {
    return "bg-white";
  }
});
</script>

<template>
  <div
    class="relative flex items-center justify-center flex-1 h-auto"
    :class="colorTheme"
  >
    <div
      class="absolute inset-y-0 right-0 z-30 mt-16 mr-12 lg:mt-6 cursor-mano lg:mr-32"
    >
      <div class="space-y-4 flex flex-col">
        <button
          type="button"
          @click="themeColor = 'theme-blue'"
          class="w-5 h-5 transition duration-200 transform border shadow-lg bg-bluejuli border-bluejuli hover:scale-110 hover:-rotate-45 cursor-mano"
        ></button>

        <button
          type="button"
          @click="themeColor = 'theme-yellow'"
          class="w-5 h-5 transition duration-200 transform border shadow-lg border-yellowjuli bg-yellowjuli hover:scale-110 hover:-rotate-45 cursor-mano"
        ></button>

        <button
          type="button"
          @click="themeColor = 'theme-red'"
          class="w-5 h-5 transition duration-200 transform border shadow-lg border-redjuli bg-redjuli hover:scale-110 hover:-rotate-45 cursor-mano"
        ></button>

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
      class="flex-1 min-h-fit flex w-full font-bold text-black text-4xl md:text-6xl"
    >
      <div
        class="absolute origin-center top-[10%] left-[10%] md:top-[10%] md:left-[10%] hover:animate-pause"
        :class="{ 'animate-mobileLetterD md:animate-letterD': moove }"
      >
        L
      </div>
      <div
        class="absolute origin-center rotate-90 top-[15%] left-[35%] md:top-[65%] md:left-[15%] hover:animate-pause"
        :class="{ 'animate-mobileLetterE md:animate-letterE': moove }"
      >
        E
      </div>
      <div
        class="absolute origin-center top-[40%] left-[10%] md:top-[20%] md:left-[25%] hover:animate-pause"
        :class="{ 'animate-mobileLetterN md:animate-letterN': moove }"
      >
        T'
      </div>
      <div
        class="absolute origin-center rotate-90 top-[45%] left-[25%] md:top-[55%] md:left-[35%] hover:animate-pause"
        :class="{ 'animate-mobileLetterI md:animate-letterI': moove }"
      >
        S
      </div>
      <!-- <div
        class="absolute origin-center top-[70%] left-[65%] md:top-[40%] md:left-[55%] hover:animate-pause"
        :class="{ 'animate-mobileLetterM md:animate-letterM': moove }"
      >
        T
      </div> -->
      <div
        class="absolute origin-center top-[22%] left-[55%] md:top-[30%] md:left-[45%] hover:animate-pause"
        :class="{ 'animate-mobileLetterC md:animate-letterC': moove }"
      >
        A
      </div>
      <div
        class="absolute -rotate-90 origin-center top-[30%] left-[65%] md:top-[80%] md:left-[35%] hover:animate-pause"
        :class="{ 'animate-mobileLetterO md:animate-letterO': moove }"
      >
        K
      </div>
      <div
        class="absolute origin-center top-[60%] left-[35%] md:top-[25%] md:left-[55%] hover:animate-pause"
        :class="{ 'animate-mobileLetterU md:animate-letterU': moove }"
      >
        L
      </div>
      <div
        class="absolute origin-center rotate-90 top-[40%] left-[55%] md:top-[70%] md:left-[55%] hover:animate-pause"
        :class="{ 'animate-mobileLetterS md:animate-letterS': moove }"
      >
        T
      </div>
      <!--<div
        class="absolute origin-center top-[15%] left-[45%] md:top-[75%] md:left-[45%] hover:animate-pause "
        :class="{ 'animate-mobileLetterU md:animate-letterU': moove }"
      >
        U
      </div>
      <div
        class="absolute rotate-90 origin-center top-[55%] left-[35%] md:top-[85%] md:left-[35%] hover:animate-pause text-slate-700"
        :class="{ 'animate-mobileLetterL md:animate-letterL': moove }"
      >
        L
      </div>
      <div
        class="absolute origin-center top-[60%] left-[25%] md:top-[90%] md:left-[25%] hover:animate-pause text-slate-700"
        :class="{ 'animate-mobileLetterT md:animate-letterT': moove }"
      >
        T
      </div>
      <div
        class="absolute origin-center top-[35%] left-[15%] md:top-[85%] md:left-[15%] hover:animate-pause text-slate-700"
        :class="{ 'animate-mobileLetterA md:animate-letterA': moove }"
      >
        A
      </div>
      <div
        class="absolute -rotate-90 origin-center top-[5%] left-[5%] md:top-[70%] md:left-[5%] hover:animate-pause text-slate-700"
        :class="{ 'animate-mobileLetterN md:animate-letterN': moove }"
      >
        N
      </div>
      <div
        class="absolute rotate-90 origin-center top-[50%] left-[5%] md:top-[50%] md:left-[15%] hover:animate-pause text-slate-700"
        :class="{ 'animate-mobileLetterT md:animate-letterT': moove }"
      >
        T
      </div> -->
    </div>
  </div>
</template>
