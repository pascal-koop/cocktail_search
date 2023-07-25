export default defineEventHandler(async (event) => {
  const params = await readBody(event);
  console.log('event', params);
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const cocktailsUrl: string = `${apiBaseUrl}/items/ingredients/?filter[id][_in]=${params.uuid}&fields=*,cocktails.cocktails_id.title, cocktails.cocktails_id.id,cocktails.cocktails_id.description,cocktails.cocktails_id.image`;
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
