<template>
  <div class="relative flex flex-col min-h-screen bg-white font-montserrat">
    <div class="md:flex">
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
