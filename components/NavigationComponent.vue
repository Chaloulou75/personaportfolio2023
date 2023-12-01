<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { selectedCategory, categories } from "@/stores/WorkStore.js";

const emit = defineEmits(["open-contact"]);

const route = useRoute();
const isOpen = ref(false);
const target = ref(null);

onClickOutside(target, (event) => {
  isOpen.value = false;
});

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const openContactMe = () => {
  emit("open-contact");
};
</script>
<template>
  <div ref="target">
    <div
      class="flex items-center justify-between px-4 py-2 text-gray-900 md:hidden"
    >
      <!-- logo -->
      <NuxtLink to="/">
        <!-- <LogoPersona
          class="h-10 px-4 focus:outline-none cursor-mano"
          :class="isOpen ? 'hidden' : ''"
        /> -->
        <LogoJm
          class="h-10 px-4 focus:outline-none cursor-mano"
          :class="isOpen ? 'hidden' : ''"
        />
        <!-- <LogoJmLarge
          class="h-10 px-4 focus:outline-none cursor-mano"
          :class="isOpen ? 'hidden' : ''"
        /> -->
      </NuxtLink>

      <!-- mobile menu button -->
      <button
        class="p-4 focus:bg-gray-200 focus:outline-none cursor-mano"
        @click="toggle"
      >
        <svg
          v-if="!isOpen"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- sidebar -->
    <div
      class="absolute inset-y-0 left-0 z-30 px-2 py-6 space-y-6 text-gray-700 transition duration-200 ease-in-out bg-white w-44 md:w-56 sidebar bg-opacity-90 md:relative md:translate-x-0"
      :class="isOpen ? '' : '-translate-x-full'"
    >
      <!-- logo -->
      <NuxtLink to="/">
        <span class="sr-only">Home</span>
        <!-- <LogoPersona class="h-10 px-4 focus:outline-none cursor-mano" /> -->
        <LogoJm class="h-auto px-4 focus:outline-none cursor-mano" />
        <!-- <LogoJmLarge class="h-10 px-4 focus:outline-none cursor-mano" /> -->
      </NuxtLink>

      <nav>
        <NuxtLink
          to="/about"
          :class="[route.path === '/about' ? 'font-semibold' : '']"
          class="cursor-mano block rounded py-2.5 px-4 uppercase transition duration-200 ease-in-out transform hover:translate-x-2 focus:outline-none hover:font-semibold"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/services"
          :class="[route.path === '/services' ? 'font-semibold' : '']"
          class="cursor-mano block rounded py-2.5 px-4 uppercase transition duration-200 ease-in-out transform hover:translate-x-2 focus:outline-none hover:font-semibold"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/projects"
          :class="[route.path === '/projects' ? 'font-semibold' : '']"
          class="cursor-mano block rounded py-2.5 px-4 uppercase transition duration-200 ease-in-out transform hover:translate-x-2 focus:outline-none hover:font-semibold"
        >
          Projects
        </NuxtLink>
        <button
          type="button"
          @click="openContactMe"
          class="cursor-mano block rounded py-2.5 px-4 uppercase transition duration-200 ease-in-out transform hover:translate-x-2 focus:outline-none hover:font-semibold"
        >
          Contact
        </button>
      </nav>

      <div class="hidden pt-4 md:block" v-if="route.path === '/projects'">
        <h3 class="px-4 my-3 font-semibold">Categories</h3>
        <SelectCategoryComponent />
      </div>

      <!-- <div class="px-4 pt-10 mt-auto">
        <button
          type="button"
          @click="openContactMe"
          class="hover:text-gray-600 cursor-mano"
        >
          <svg
            class="w-6 h-6 xl:h-10 xl:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div> -->
    </div>
  </div>
</template>
