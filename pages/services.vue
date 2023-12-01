<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
const emit = defineEmits(["open-contact"]);
const openContactMe = () => {
  emit("open-contact");
};
</script>

<template>
  <div
    class="max-w-5xl flex flex-col min-h-screen text-bluejuli space-y-6 px-2 md:px-4 my-6"
  >
    <h1
      class="uppercase text-4xl md:text-6xl my-4 font-black text-center md:text-left"
    >
      services
    </h1>
    <p>
      Julieta Mercerat specialises in the sustainable development of textiles
      and garments, with a focus on denim and casual wear.
    </p>
    <Disclosure as="div" v-slot="{ open }">
      <DisclosureButton
        class="flex w-full justify-between rounded px-4 py-2 text-left text-base font-medium text-bluejuli bg-slate-50 hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 cursor-mano"
      >
        <span>INSPIRATION WITH TREND RESEARCH</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 text-black"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-bluejuli w-auto">
        Get inspiration for your collection development through trend research
        focused in the global market, combining written reports with visual
        elements like moodboards, colour palettes and new materials, as well as
        coverage at special fashion events and tradeshows in Europe.
      </DisclosurePanel>
    </Disclosure>
    <Disclosure
      as="div"
      class="mt-2 border-t-4 border-bluejuli pt-4"
      v-slot="{ open }"
    >
      <DisclosureButton
        class="flex w-full justify-between rounded bg-slate-50 px-4 py-2 text-left text-base font-medium text-bluejuli hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 cursor-mano"
      >
        <span>IMPROVE YOUR COMMUNICATION</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 text-purple-500"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-bluejuli">
        Communication and positioning consultancy: How to responsibly
        communicate new developments with a sustainable perspective.
      </DisclosurePanel>
    </Disclosure>
    <Disclosure
      as="div"
      class="mt-2 border-t-4 border-bluejuli pt-4"
      v-slot="{ open }"
    >
      <DisclosureButton
        class="flex w-full justify-between rounded bg-slate-50 px-4 py-2 text-left text-base font-medium text-bluejuli hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 cursor-mano"
      >
        <span>SOURCING FOR FABRICS AND MANUFACTURING</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 text-purple-500"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-bluejuli">
        Sourcing consultancy specialising in developing new suppliers for
        city-wear, casualwear, and jeanswear, catering to both young designers
        and established brands.
      </DisclosurePanel>
    </Disclosure>
    <Disclosure
      as="div"
      class="mt-2 border-t-4 border-bluejuli pt-4"
      v-slot="{ open }"
    >
      <DisclosureButton
        class="flex w-full justify-between rounded bg-slate-50 px-4 py-2 text-left text-base font-medium text-bluejuli hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 cursor-mano"
      >
        <span>ECO-RESPONSIBLE PRODUCT STRATEGIES</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 text-purple-500"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-bluejuli">
        Development of sustainable product strategies for brands seeking a
        transition to a more transparent, responsible, and environmentally
        committed production chain.
      </DisclosurePanel>
    </Disclosure>
    <Disclosure
      as="div"
      class="mt-2 border-t-4 border-bluejuli pt-4"
      v-slot="{ open }"
    >
      <DisclosureButton
        class="flex w-full justify-between rounded bg-slate-50 px-4 py-2 text-left text-base font-medium text-bluejuli hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 cursor-mano"
      >
        <span>JEANSWEAR PRODUCT CONSULTANCY</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 text-purple-500"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-bluejuli">
        Jeanswear product consultancy providing support in collection
        development, designing new typologies, and creating wash designs
      </DisclosurePanel>
    </Disclosure>
    <Disclosure
      as="div"
      class="mt-2 border-t-4 border-bluejuli pt-4"
      v-slot="{ open }"
    >
      <DisclosureButton
        class="flex w-full justify-between rounded bg-slate-50 px-4 py-2 text-left text-base font-medium text-bluejuli hover:bg-slate-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 cursor-mano"
      >
        <span>DENIM COURSES & TRAINING</span>
        <ChevronUpIcon
          :class="open ? 'rotate-180 transform' : ''"
          class="h-5 w-5 text-purple-500"
        />
      </DisclosureButton>
      <DisclosurePanel class="px-4 pb-2 pt-4 text-base text-bluejuli">
        Courses and training tailored for the denim industry, designed for sales
        teams, designers, professionals, students, and universities.
      </DisclosurePanel>
    </Disclosure>

    <button
      type="button"
      @click="openContactMe"
      class="text-4xl md:text-6xl my-4 font-black text-center md:text-left cursor-mano"
    >
      Let's talk
    </button>
  </div>
</template>
