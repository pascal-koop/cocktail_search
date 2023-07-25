<script setup>
const props = defineProps([
  'title',
  'description',
  'imgId',
  'uuid'
])

const imgUrl = computed(() => `/img/${props.imgId}`)
</script>

<style></style>

<template>
  <div
    class="container font-roboto w-80 rounded-xl drop-shadow-lg bg-fuchsia-50 py-1 my-8 mx-auto border border-stone-300"
  >
    <h1 class="p-3 text-zinc-900 text-base font-thin leading-normal tracking-tight">
    {{ title  }}
    </h1>
    <img class="object-cover" :src="imgUrl" alt="cocktail" />
    <div class="container">
      <p
        class="font-roboto text-sm font-thin leading-tight tracking-tight text-zinc-600 text-left m-3 break-words max-w-xs line-clamp-2"
      >
        {{ description  }}
      </p>
    </div>
    <div class="flex justify-end flex-row mx-3 mt-6 mb-3">
      <button
        @click="getCocktails()"
        class="bg-purple-800 rounded-[100px] px-6 py-2.5 shadow-lg text-white text-sm font-medium hover:bg-purple-600"
      >
        DETAILS
      </button>
    </div>
  </div>
</template>
