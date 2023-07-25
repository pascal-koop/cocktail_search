<script setup>
const route = useRoute();
let cocktailUuid = route.params.id;
let cocktailInformation = ref([]);
/*Registers a hook to be called right before the component is to be mounted. */
onBeforeMount(() => {
  searchCocktail(cocktailUuid);
});

async function searchCocktail(cocktailUuid) {
  try {
    const { data } = await $fetch('/api/cocktails/cocktail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uuid: cocktailUuid,
      }),
    });

    cocktailInformation.value = data;
    console.log('cocktailInformation', data);
  } catch (error) {
    console.log('an error occured', error);
  }
}
</script>

<style></style>

<template>
  <div>h1</div>
</template>
