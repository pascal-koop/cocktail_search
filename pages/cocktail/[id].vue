<script setup>
const route = useRoute();
let cocktailUuid = route.params.id;
let cocktail = ref([]);
/*Registers a hook to be called right before the component is to be mounted. */
onBeforeMount(() => {
  searchCocktail(cocktailUuid);
});

async function searchCocktail(cocktailUuid) {
  try {
    const { data } = await $fetch("/api/cocktails/cocktail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid: cocktailUuid,
      }),
    });

    cocktail.value = data;
  } catch (error) {
    console.log("an error occured", error);
  }
}
</script>

<style></style>

<template>
  <!-- <div v-for="information in cocktailInformation">
    <h1>{{ information.title }}</h1>
  </div> -->
  <LazyCocktailDetail :cocktail="cocktail" />
</template>
