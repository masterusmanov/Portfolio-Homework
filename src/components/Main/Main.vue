<script setup>
  import { navLinks } from '../../constants/navLinks';
</script>

<template>
  <main class=" pt-24">
    <div class="container mx-auto">
      <section
        class="grid grid-cols-1 md:grid-cols-2 place-items-center mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div class="mx-auto p-6 ml-20">
          <h1 class="text-3xl lg:text-4xl font-bold mb-4">Hi, I am John,</h1>
          <h1 class="text-3xl lg:text-4xl font-bold mb-4">
            Creative Technologist
          </h1>
          <br />
          <p class="leading-7 mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button
            class="bg-red-500 p-4 text-yellow-200 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Download Resume
          </button>
        </div>
        <div class="flex justify-center items-center mt-6">
          <img
            src="../../images/Ellipse1.png"
            alt="img"
            class="w-48 h-48 lg:w-64 lg:h-64"
          />
        </div>
      </section>
      
      <section class="bg-blue-100 mx-auto mt-10 md:mt-28">
        <div class="container flex flex-col md:flex-row justify-between gap-x-10 md:gap-x-64 p-4 md:p-10">
          <div class="mx-auto md:mx-0 w-full">
          <h1 class="text-3xl ml-36 font-bold text-justify">Recent posts</h1>
          </div>
          <div class="mx-auto w-full text-center" >
            <a href="#" class="right-0 text-right text-1xl py-4 px-2 text-gray-500 font-semibold hover:text-teal-300 transition duration-300">View all</a>
          </div>
        </div>
      
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-[500px] mb-6 md:mb-0">
            <h1 class="text-2xl text-justify font-bold p-4 md:p-10">Making a design system from scratch</h1>
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2 pl-7">12 Feb 2020 | Design, Patterm</h3>
              <p class="text-black-700 p-7 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-[500px]">
            <h1 class="text-2xl text-justify font-bold p-4 md:p-10">Making a design system from scratch</h1>
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2 pl-7">12 Feb 2020 | Design, Patterm</h3>
              <p class="text-black-700 p-7 text-justify">Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>
        </div>
      </section>
      
      
      <section class="mt-5 pb-32 ">
        <div class="flex mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 pb-10 pt-16 ">
          <h1 class="text-4xl ml-10 font-bold text-justify">Featured works</h1>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 pt-16"
          v-for="link in navLinks"
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

    </div>
  </main>
</template>

<style lang="scss" scoped></style>
