<script setup>
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const showEmail = ref(false);

const openEmail = () => {
  showEmail.value = true;
};
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <div
      class="relative flex flex-col justify-between min-h-screen bg-white font-montserrat cursor-flecha w-full"
      :class="{ 'h-screen overflow-hidden': showEmail }"
    >
      <div class="flex flex-col md:flex-row h-full flex-1">
        <NavigationComponent @open-contact="openEmail" />
        <NuxtPage @open-contact="openEmail" />
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
        <div
          v-if="showEmail"
          class="absolute inset-0 z-50 bg-gold min-h-screen h-screen overflow-hidden font-montserrat"
        >
          <div
            class="w-full flex items-center justify-center text-lg text-black h-full"
          >
            <button
              type="button"
              @click="showEmail = false"
              class="absolute top-1 right-1"
            >
              <XMarkIcon class="h-10 w-10 text-black" />
            </button>
            <div class="">
              <p>hello@julietamercerat.com</p>
              <p>+33 0668-230718</p>
              <ul class="mt-2">
                Follow:
                <li>
                  <a
                    href="https://www.instagram.com/julieta_mercerat/"
                    class="hover:text-gray-600 cursor-mano"
                    >instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/julieta-mercerat/"
                    target="_blank"
                    class="hover:text-gray-600 cursor-mano"
                    >Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TransitionRoot>
    </div>
  </NuxtLayout>
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
