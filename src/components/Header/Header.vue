<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <header>
        <div class="container block mx-auto max-w-[1440px]">
        <nav class="flex justify-between h-20 items-center px-3">
            <div class="flex md:flex md:flex-grow flex-row justify-end space-x-4 mr-10">
                <RouterLink to="/" class="py-4 px-2 text-teal-500 font-semibold hover:text-teal-300 transition duration-300">Home</RouterLink>
                <RouterLink to="/blog" class="py-4 px-2 text-teal-500 font-semibold hover:text-teal-300 transition duration-300">Blog</RouterLink>
                <RouterLink to="/Work" class="py-4 px-2 text-teal-500 font-semibold hover:text-teal-300 transition duration-300">Works</RouterLink>
                <RouterLink to="/contact" class="py-4 px-2 text-teal-500 font-semibold hover:text-teal-300 transition duration-300">Contact</RouterLink>
              </div>
          </nav>
        </div>
      </header>
</template>

<style lang="scss" scoped>

</style>