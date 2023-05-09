<script setup>
    import { navLinks } from '../constants/navlink';
</script>

<template>
  <section class="flex pb-24">
    <div class="mx-auto mt-10 w-[1200px]">
      <h1 class="text-4xl font-bold">Blog</h1>
      <div v-for="el in navLinks" :key="el.id" class="text-justify p-4 pt-14 border-b border-gray-500">
        <h1 class="font-bold text-2xl pt-5">{{el.title}}</h1>
        <p class="pt-4 font-bold">{{el.year}} <span class="text-gray-500"> {{el.text}}</span></p>
        <p class="pt-4 text-xl pb-5">{{el.text1}}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
