<script setup>
const props = defineProps({
  cocktailInformation: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>

<template>
  <div>
    <div
      class="container pt-3"
      v-for="information in cocktailInformation"
    >
      <h2
        class="text-roboto font-normal leading-7 text-zinc-700 text-2xl pb-4 px-6"
      >
        {{ information.title }}
      </h2>
      <img
        class="mx-auto"
        loading="lazy"
        :src="`/detailImage/${information.image}`"
      />
      <h2
        class="mt-2 px-6 text-xl text-roboto font-thin leading-7 text-zinc-700"
      >
        Ingredients:
      </h2>
      <ul class="px-6" v-for="ingredient in information.ingredients">
        <li class="list-disc">
          {{ ingredient.ingredients_id.title }}
        </li>
      </ul>
      <h2 class="px-6">Preparation:</h2>
      <p>{{ information.preparation }}</p>
      <h2>Description:</h2>
      <p>{{ information.description }}</p>
      <NuxtLink to="/">GO BACK</NuxtLink>
    </div>
  </div>
</template>
