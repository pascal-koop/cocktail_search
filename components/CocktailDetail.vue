<script setup>
const props = defineProps(["cocktail"]);
</script>

<style></style>

<template>
  <div>
    <div class="container pt-3" v-for="information in cocktail">
      <h2 class="text-roboto font-normal leading-7 text-zinc-700 text-3xl pb-4 px-6">
        {{ information.title }}
      </h2>
      <img class="mx-auto" loading="lazy" :src="`/detailImage/${information.image}`" />
      <h2 class="mt-2 px-6 text-2xl text-roboto font-thin leading-7 text-black">
        Ingredients:
      </h2>
      <ul class="px-6 my-5">
        <li
          v-for="ingredient in information.ingredients"
          class="list-disc mx-7 text-roboto font-medium text-zinc-700 leading-relaxed tracking-tight"
        >
          {{ ingredient.ingredients_id.title }}
        </li>
      </ul>
      <h2 class="my-5 px-6 text-2xl text-roboto font-thin leading-7 text-black">
        Preparation:
      </h2>
      <p class="px-8 text-zinc-700 text-2sm font-normal">
        {{ information.preparation }}
      </p>
      <h2 class="mt-5 px-6 text-2xl text-roboto font-thin leading-7 text-black">
        Description:
      </h2>
      <p class="px-8 my-5 text-zinc-700 text-2sm font-normal">
        {{ information.description }}
      </p>
    </div>
    <hr class="mt-7" />
    <div class="mt-8 mb-6">
      <NuxtLink
        class="mx-8 bg-purple-800 rounded-[100px] px-6 py-2.5 shadow-lg text-white text-sm font-medium hover:bg-purple-600"
        to="/"
        >GO BACK</NuxtLink
      >
    </div>
  </div>
</template>
