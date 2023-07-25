export default defineEventHandler(async (event) => {
  const params = await readBody(event);
  console.log('event', params);
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const cocktailsUrl: string = `${apiBaseUrl}/items/cocktails/?filter[id][_eq]=${params.uuid}&fields=*.ingredients_id.id&fields=*.ingredients_id.title,cocktails.*`;
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
