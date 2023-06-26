export default defineEventHandler(async event => {
  const { apiBaseURL, apiToken } = useRuntimeConfig();
  const url: string = `${apiBaseURL}/items/ingredients?fields=title,id`;
  try {
    const data = await fetch( url , {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
    });
    return data.json(); 
  } catch(error){
    console.log(error)
  }
  
});
