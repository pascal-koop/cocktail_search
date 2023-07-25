<script setup>
const { data } = await $fetch('/api/ingredients');
</script>

<style></style>

<template>
  <div class="container flex items-center flex-col">
    <h1
      class="text-gray-700 text-4xl text-dark-petrol uppercase mx-auto mt-20"
    >
      ^Cocktails^
    </h1>
    <h2
      class="text-gray-700 font-roboto-condensed text-2xl font-semibold italic mx-auto my-9 break-words"
    >
      Which cocktails can you prepare?
    </h2>
    <div>
      <SearchBar :ingredients="data" />
    </div>
  </div>
</template>
