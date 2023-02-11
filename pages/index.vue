<script setup>
import { ref, computed } from "vue";

const appearLetters = ref(true);
const show = ref(false);
const theme = ref("theme-inicio");
const foto = ref("");

function lettersAnimStart() {
  setTimeout(() => {
    appearLetters.value = !appearLetters.value;
    show.value = !show.value;
  }, 2000);
}
function toggle() {
  show.value = !show.value;
}
function toggleThemeInicio() {
  theme.value = theme.value === "theme-inicio" ? "theme-blue" : "theme-inicio";
}
function toggleThemeBlue() {
  theme.value = theme.value === "theme-blue" ? "theme-inicio" : "theme-blue";
}
function toggleThemeRed() {
  theme.value = theme.value === "theme-reddy" ? "theme-yellowy" : "theme-reddy";
}
function toggleThemeYellow() {
  theme.value =
    theme.value === "theme-yellowy" ? "theme-blue" : "theme-yellowy";
}
</script>

<template>
  <template>
    <div
      class="relative flex flex-col min-h-screen overflow-y-hidden transition duration-1000 bg-background-primary"
      :class="theme"
    >
      <!-- los 3 botones -->
      <div
        class="absolute inset-y-0 right-0 z-30 mt-16 mr-13 lg:mt-6 cursor-mano lg:mr-32"
      >
        <div class="fixed space-y-4">
          <div
            class="w-5 h-5 transition duration-200 transform border shadow-lg bg-bluejuli border-bluejuli hover:scale-110 hover:-rotate-45 cursor-mano"
            @mouseover="toggleThemeBlue"
          ></div>

          <div
            class="w-5 h-5 transition duration-200 transform border shadow-lg border-yellowjuli bg-yellowjuli hover:scale-110 hover:-rotate-45 cursor-mano"
            @mouseover="toggleThemeYellow"
          ></div>

          <div
            class="w-5 h-5 transition duration-200 transform border shadow-lg border-redjuli bg-redjuli hover:scale-110 hover:-rotate-45 cursor-mano"
            @mouseover="toggleThemeRed"
          ></div>

          <div
            class="text-copy-primary focus:outline-none cursor-mano"
            @click="toggle"
          >
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
      <main class="relative w-full min-h-full">
        <template>
          <div class="flex items-center justify-center p-10 space-y-4 lg:p-32">
            <div
              class="relative w-full max-w-lg overflow-hidden rounded-lg h-128 lg:h-64 lg:w-1/2"
            ></div>
          </div>
        </template>

        <!-- las letras -->
        <transition name="letters" appear v-on:appear="lettersAnimStart">
          <div class="font-ubuntu">
            <div
              v-bind:class="{
                'anim_letter-p': show,
                'animate-appearLettersStart': appearLetters,
              }"
              class="absolute font-semibold leading-none text-black letter-p text-7xl lg:text-11xl"
            >
              P
            </div>

            <div
              @click="foto = 'Amarillo'"
              @mouseover="foto = 'Amarillo'"
              v-bind:class="{
                'anim_letter-e': show,
                'animate-appearLettersStart': appearLetters,
              }"
              class="absolute font-semibold leading-none text-black transform rotate-90 letter-e text-7xl lg:text-11xl cursor-mano"
            >
              E
            </div>

            <div
              v-bind:class="{
                'anim_letter-r': show,
                'animate-appearLettersStart': appearLetters,
              }"
              class="absolute font-semibold leading-none text-black letter-r text-7xl lg:text-11xl"
            >
              R
            </div>

            <div
              v-bind:class="{
                'anim_letter-s': show,
                'animate-appearLettersStart': appearLetters,
              }"
              class="absolute font-semibold leading-none text-black transform rotate-90 letter-s text-7xl lg:text-11xl"
            >
              S
            </div>

            <div
              @click="foto = 'Azul'"
              @mouseover="foto = 'Azul'"
              v-bind:class="{
                'anim_letter-o': show,
                'animate-appearLettersStart': appearLetters,
              }"
              class="absolute font-semibold leading-none text-black letter-o text-7xl lg:text-11xl cursor-mano"
            >
              O
            </div>

            <div
              v-bind:class="{
                'anim_letter-n': show,
                'animate-appearLettersStart': appearLetters,
              }"
              class="absolute font-semibold leading-none text-black letter-n text-7xl lg:text-11xl"
            >
              N
            </div>

            <div
              @click="foto = 'Rojo'"
              @mouseover="foto = 'Rojo'"
              v-bind:class="{
                'anim_letter-a': show,
                'animate-appearLettersStart': appearLetters,
              }"
              class="absolute font-semibold leading-none text-black letter-a text-7xl lg:text-11xl cursor-mano"
            >
              A
            </div>
          </div>
        </transition>
      </main>
    </div>
  </template>
</template>

<style>
// position initiale letters
.letter-p {
  top: 3%;
  left: 45%;
  transform-origin: center;
  @media (min-width: 768px) {
    top: 2%;
    left: 50%;
    transform-origin: center;
  }
}
.letter-e {
  top: 15%;
  left: 22%;
  transform-origin: center;
  @media (min-width: 768px) {
    top: 15%;
    left: 34%;
    transform-origin: center;
  }
}
.letter-r {
  top: 35%;
  left: 5%;
  transform-origin: center;
  @media (min-width: 768px) {
    top: 35%;
    left: 17%;
    transform-origin: center;
  }
}
.letter-s {
  top: 55%;
  left: 22%;
  transform-origin: center;
  @media (min-width: 768px) {
    top: 52%;
    left: 34%;
    transform-origin: center;
  }
}
.letter-o {
  bottom: 10%;
  left: 45%;
  transform-origin: center;
  @media (min-width: 768px) {
    bottom: 2%;
    left: 50%;
    transform-origin: center;
  }
}
.letter-n {
  top: 30%;
  left: 65%;
  transform-origin: center;
  @media (min-width: 768px) {
    top: 15%;
    left: 70%;
    transform-origin: center;
  }
}
.letter-a {
  top: 50%;
  left: 65%;
  transform-origin: center;
  @media (min-width: 768px) {
    top: 45%;
    left: 70%;
    transform-origin: center;
  }
}
//transform on desktop
@keyframes letterP {
  0% {
  }
  40%,
  60% {
    transform: translate(-400%, 200%) rotate(360deg);
  }
  100% {
    transform: translate(150%, 15%) rotate(0deg);
  }
}
@keyframes letterE {
  0% {
  }
  40%,
  60% {
    transform: translate(-40%, 80%) rotate(-90deg);
  }
  100% {
    transform: translate(210%, -65%) rotate(90deg);
  }
}
@keyframes letterR {
  0% {
  }
  40%,
  60% {
    transform: translate(300%, -60%) rotate(360deg);
  }
  100% {
    transform: translate(40%, 28%) rotate(0deg);
  }
}
@keyframes letterS {
  0% {
  }
  40%,
  60% {
    transform: translate(300%, -30%) rotate(-90deg);
  }
  100% {
    transform: translate(60%, -40%) rotate(90deg);
  }
}
@keyframes letterO {
  0% {
  }
  40%,
  60% {
    transform: translate(170%, -125%) rotate(720deg);
  }
  100% {
    transform: translate(-140%, 0%) rotate(0deg);
  }
}
@keyframes letterN {
  0% {
  }
  40%,
  60% {
    transform: translate(-180%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-230%, 86%) rotate(0deg);
  }
}
@keyframes letterA {
  0% {
  }
  40%,
  60% {
    transform: translate(-350%, 50%) rotate(-360deg);
  }
  100% {
    transform: translate(80%, -1%) rotate(0deg);
  }
}
//transform on mobile
@media (max-width: 768px) {
  @keyframes letterP {
    0% {
      transform: translate(0) rotate(0);
    }
    40%,
    60% {
      transform: translate(80%, 200%) rotate(270deg);
    }
    100% {
      transform: translate(10%, 90%) rotate(0deg);
    }
  }
  @keyframes letterE {
    0% {
      transform: translate(0) rotate(90);
    }
    40%,
    60% {
      transform: translate(-60%, 170%) rotate(0deg);
    }
    100% {
      transform: translate(50%, -60%) rotate(90deg);
    }
  }
  @keyframes letterR {
    0% {
      transform: translate(0) rotate(0);
    }
    40%,
    60% {
      transform: translate(20%, -90%) rotate(270deg);
    }
    100% {
      transform: translate(0%, 27%) rotate(0deg);
    }
  }
  @keyframes letterS {
    0% {
      transform: translate(0) rotate(90);
    }
    40%,
    60% {
      transform: translate(170%, -280%) rotate(360deg);
    }
    100% {
      transform: translate(60%, 10%) rotate(90deg);
    }
  }
  @keyframes letterO {
    0% {
      transform: translate(0) rotate(0);
    }
    40%,
    60% {
      transform: translate(-60%, -200%) rotate(360deg);
    }
    100% {
      transform: translate(-77%, 20%) rotate(0deg);
    }
  }
  @keyframes letterN {
    0% {
      transform: translate(0) rotate(0);
    }
    40%,
    60% {
      transform: translate(20%, 180%) rotate(90deg);
    }
    100% {
      transform: translate(-75%, 55%) rotate(0deg);
    }
  }
  @keyframes letterA {
    0% {
      transform: translate(0) rotate(0);
    }
    40%,
    60% {
      transform: translate(-180%, 120%) rotate(180deg);
    }
    100% {
      transform: translate(60%, -63%) rotate(0deg);
    }
  }
}
.anim_letter-p {
  animation: 6.4s ease-in-out 1 forwards running letterP;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-e {
  animation: 5.6s ease-in-out 1 forwards running letterE;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-r {
  animation: 6.1s ease-in-out 1 forwards running letterR;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-s {
  animation: 5.3s ease-in-out 1 forwards running letterS;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-o {
  animation: 6s ease-in-out 1 forwards running letterO;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-n {
  animation: 5.9s ease-in-out 1 forwards running letterN;
  &:hover {
    animation-play-state: paused;
  }
}
.anim_letter-a {
  animation: 6.2s forwards 1 ease-in-out normal running letterA;
  &:hover {
    animation-play-state: paused;
  }
}
</style>
