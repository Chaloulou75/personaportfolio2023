<script setup>
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
const showEmail = ref(false);

const openEmail = () => {
  showEmail.value = true;
};
</script>

<template>
  <VitePwaManifest />
  <div
    class="relative flex flex-col justify-between min-h-screen bg-white font-montserrat cursor-flecha"
  >
    <div class="h-auto md:flex">
      <NavigationComponent @open-contact="openEmail" />
      <NuxtPage />
    </div>
    <FooterComponent />
    <TransitionRoot
      :show="showEmail"
      enter="transition-opacity duration-150"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-150"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div v-if="showEmail" class="absolute inset-0 z-50 bg-gold">
        <div
          class="h-full w-full flex items-center justify-center text-lg text-black"
        >
          <button
            type="button"
            @click="showEmail = false"
            class="absolute top-1 right-1"
          >
            <XMarkIcon class="h-10 w-10 text-black" />
          </button>
          <h2>hello@julietamercerat.com</h2>
        </div>
      </div>
    </TransitionRoot>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
