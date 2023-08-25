<script setup>
const props = defineProps(["cocktail"]);
</script>

<style></style>

<template>
  <div class="container mx-auto">
    <div class="md:container pt-3" v-for="information in cocktail">
      <h2
        class="container font-roboto font-normal leading-7 text-zinc-700 text-3xl pb-4 px-6 md:text-4xl"
      >
        {{ information.title }}
      </h2>
      <div class="mx-auto">
        <img
          class="md:max-w-2xl mx-auto px-6"
          loading="lazy"
          :src="`/dImage/${information.image}`"
        />
      </div>
      <h2
        class="mt-2 px-6 text-2xl font-sansfont-thin leading-7 text-black md:text-4xl md:mt-5"
      >
        Ingredients:
      </h2>
      <ul class="px-6 my-5 md:my-6">
        <li
          v-for="ingredient in information.ingredients"
          class="subpixel-antialiased list-disc mx-7 font-sans text-lg font-base text-zinc-700 leading-relaxed tracking-tight md:text-2xl"
        >
          {{ ingredient.ingredients_id.title }}
        </li>
      </ul>
      <h2
        class="subpixel-antialiased my-5 px-6 text-2xl font-sans font-thin leading-7 text-black md:text-4xl md:mt-5"
      >
        Preparation:
      </h2>
      <p class="px-8 text-zinc-700 text-lg font-normal md:text-2xl">
        {{ information.preparation }}
      </p>
      <h2 class="mt-5 px-6 text-2xl font-sans font-thin leading-7 text-black md:text-4xl">
        Description:
      </h2>
      <p class="px-8 my-5 text-zinc-700 text-lg font-normal md:text-2xl">
        {{ information.description }}
      </p>
    </div>
    <hr class="my-8 border-2" />
    <div class="mt-9 mb-8 md:mt-10">
      <NuxtLink
        class="mx-8 bg-purple-800 font-medium rounded-[100px] px-6 py-2.5 shadow-lg text-white text-sm md:text-2xl md:px-7 md:py-3.5 hover:bg-purple-600"
        to="/"
        >GO BACK</NuxtLink
      >
    </div>
  </div>
</template>
