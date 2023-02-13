<template>
  <div
    class="relative flex flex-col justify-between min-h-screen bg-white font-montserrat cursor-flecha"
  >
    <div class="h-auto md:flex">
      <NavigationComponent />
      <NuxtPage />
    </div>
    <FooterComponent />
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
