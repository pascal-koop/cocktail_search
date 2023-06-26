<script setup lang="ts">
 const { data } = await $fetch('/api/ingredients')
  console.log(data); 
 
  const ingredientsWithTitle: Array<string> = [];
  for (const ingredients of data) {
    ingredientsWithTitle.push(ingredients.title);
    
  }
  console.log(ingredientsWithTitle
    );
</script>

<style>
</style>

<template>
  <div>
   <h1 class="text-2xl">Ingredients</h1>
  <ul>
    <li v-for="ingredient in ingredientsWithTitle" :key="ingredient">
      {{ ingredient }}
    </li>
  </ul>
  </div>
</template>