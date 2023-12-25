export default defineEventHandler(async (event) => {
  const { ingredient_uuids } = await readBody(event);
  console.log('event', ingredient_uuids);
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const fields = '*,cocktails.cocktails_id.title, cocktails.cocktails_id.id,cocktails.cocktails_id.description,cocktails.cocktails_id.image';
  const cocktailsUrl: string = `${apiBaseUrl}/items/ingredients/?filter[id][_in]=${ingredient_uuids}&fields=${fields}`;
  try {
    const data = await fetch(cocktailsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
    });

    return data.json();
  } catch (error) {
    console.log('ff', error);
  }
});
