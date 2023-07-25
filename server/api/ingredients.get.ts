export default defineEventHandler(async event => {
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const ingredientsUrl: string = `${apiBaseUrl}/items/ingredients?fields=title,id`;
  try {
    const data = await fetch(ingredientsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
    });
    return data.json();
  } catch (error) {
    console.log(error)
  }
});
