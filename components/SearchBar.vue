<script setup>
const props = defineProps({
  ingredients: {
    type: Array,
    required: true,
  },
});

const { ingredients } = props

let searchTerm = ref('');
let chosenIngredients = ref([]);
let chosenIngredientsIds = ref([]);
let cocktailInformation = ref([]);

const filteredIngredients = computed(() => {
  return ingredients.filter((ingredient) => {
    return ingredient.title
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase());
  });
});

const showIngredients = computed(() => {
  if (searchTerm.value.length === 0 || searchTerm.value === ' ') {
    return false;
  } else {
    return true;
  }
});

const takeIngredient = (event, ingredient) => {
  chosenIngredients.value.push(ingredient);
  chosenIngredientsIds.value.push(ingredient.id);
  searchTerm.value = '';
};

const deleteSpecificIngredient = (value) => {
  debugger
  let index = chosenIngredients.value.indexOf(value);
  chosenIngredients.value.splice(index, 1);
  let index2 = chosenIngredientsIds.value.indexOf(value.id);
  chosenIngredientsIds.value.splice(index2, 1);
};

const userChoseIngredients = computed(() => {
  return chosenIngredients.value.length > 0 ? true : false;
});

const scrollDown = () => {
  window.scrollTo({ top: 360, behavior: 'smooth' });
};

async function searchCocktails(...cocktailIds) {
  let cocktailUuids = cocktailIds;
  try {
    const { data } = await $fetch('/api/cocktails/overview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uuid: cocktailUuids,
      }),
    });

    cocktailInformation.value = data;
  } catch (error) {
    console.log('an error occured', error);
  }
}
</script>

<style></style>

<template>
  <div class="container flex justify-center flex-col mx-auto">
    <p
      class="text-gray-700 font-roboto-condensed text-xl italic mx-auto mt-9 mb-5 break-words max-w-xs"
    >
      Find out and write your ingredients into the search bar!
    </p>
    <div
      class="container flex gap-5 border-solid bg-zinc-200 rounded-[28px] shadow max-w mx-auto mt-2 py-3"
    >
      <SvgoMenu class="text-3xl ml-3 my-1 fill-gray-700" />
      <input
        class="text-zinc-700 bg-zinc-200 placeholder:tracking-wide placeholder:uppercase"
        type="text"
        id="search-bar"
        v-model="searchTerm"
        @keyup="scrollDown"
        placeholder="Ingredients..."
        autocomplete="off"
      />
      <SvgoSearch
        @click="searchCocktails(...chosenIngredientsIds)"
        class="text-3xl mr-3 my-1 fill-gray-700 transition ease-in duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer"
      />
    </div>
    <div
      v-if="showIngredients"
      class="bg-zinc-200 p-3 rounded-xl shadow border-zinc-300 my-4"
    >
      <ul class="container grid auto-cols-fr gap-2">
        <li
          class="text-white font-roboto-condensed font-medium text-lm py-1 px-2 rounded-[28px] shadow bg-purple-800 last:mr-0 my-2 cursor-pointer hover:bg-purple-600"
          @click="takeIngredient(e, ingredient)"
          v-for="ingredient in filteredIngredients"
          :key="ingredient.id"
        >
          {{ ingredient.title }}
        </li>
      </ul>
    </div>
    <div v-show="userChoseIngredients">
      <h1
        class="text-gray-700 font-roboto-condensed text-l my-3 text-center"
      >
        Chosen ingredients:
      </h1>
      <ul class="container grid grid-cols-2 items-center gap-2">
        <li
          class="col-span-1 text-white font-roboto-condensed font-medium text-lm py-1 px-2 mx-1 rounded-[28px] shadow bg-purple-800 last:mr-0 my-2 cursor-pointer after:content-['_X'] after:text-red-500 hover:bg-purple-600"
          v-for="ingredient in chosenIngredients"
          :key="ingredient"
          @click="deleteSpecificIngredient(ingredient)"
        >
          {{ ingredient.title }}
        </li>
      </ul>
    </div>
  </div>
  <div v-for="ingredient in cocktailInformation">
    <CocktailCard
      v-for="cocktail in ingredient.cocktails"
      :key="cocktail.id"
      :title="cocktail.cocktails_id.title"
      :img-id="cocktail.cocktails_id.image"
      :description="cocktail.cocktails_id.description"
      :uuid="cocktail.cocktails_id.id"
    />
  </div>
</template>
