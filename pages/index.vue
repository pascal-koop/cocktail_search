<script setup lang="ts">
 const { data } = await $fetch('/api/ingredients')
  const ingredientsWithTitle: Array<string> = [];
  for (const ingredients of data) {
    ingredientsWithTitle.push(ingredients.title);

  }
</script>

<style>
</style>

<template>
  <div>
   <img class="w-1/2" src="/img/65559b5d-b1d9-40a0-a333-15c394314b0d" alt="Test image">
   <h1 class="text-2xl">Ingredients</h1>
  <ul>
    <li v-for="ingredient in ingredientsWithTitle" :key="ingredient">
      {{ ingredient }}
    </li>
  </ul>
  </div>
</template>
