<script setup>
import { navLinks1 } from "../constants/navLinks1";
</script>

<template>
  <section class="mt-5 pb-32 ">
    <div class="flex mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 pb-10 pt-16 ">
      <h1 class="text-4xl ml-10 font-bold text-justify">Work</h1>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 pt-16"
      v-for="link in navLinks1"
      :key="link.id"
    >
      <div class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          :src="link.img"
          alt="rasm"
          class="w-full h-48 object-cover object-center"
        />
      </div>
      <div class="px-6 py-4">
        <RouterLink to="/work_detail"
          ><h1 class="font-bold text-2xl mb-2 hover:text-blue-600">
            {{ link.title }}
          </h1></RouterLink
        >
        <p
          class="font-bold text-white bg-blue-600 inline-block rounded-xl py-2 px-4 mt-4"
        >
          {{ link.year }}
        </p>
        <span class="ml-4">{{ link.text }}</span>
        <p class="text-gray-700 text-base pt-2  w-[200%]">{{ link.text1 }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
