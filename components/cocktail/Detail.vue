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
    <div v-for="information in cocktailInformation">
      <h2>{{ information.title }}</h2>
      <img loading="lazy" :src="`/detailImage/${information.image}`" />
      <h2>Ingredients:</h2>
      <ul v-for="ingredient in information.ingredients">
        <li>{{ ingredient.ingredients_id.title }}</li>
      </ul>
      <h2>Preparation:</h2>
      <p>{{ information.preparation }}</p>
      <h2>Description:</h2>
      <p>{{ information.description }}</p>
      <NuxtLink to="/">GO BACK</NuxtLink>
    </div>
  </div>
</template>
