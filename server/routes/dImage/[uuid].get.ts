export default defineEventHandler(async (event) => {
  const { apiBaseUrl, apiToken } = useRuntimeConfig();
  const { uuid } = event.context!.params!;
  const url: string = `${apiBaseUrl}/assets/${uuid}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });

    const contentType = response.headers.get("Content-Type");
    const contentLength = response.headers.get("Content-Length");

    setResponseHeaders(event, {
      "Cache-Control": "private, max-age=31536000",
      "Content-Type": contentType!,
      "Content-Length": contentLength!,
    });

    const arrayBuffer = await response.arrayBuffer();

    return Buffer.from(arrayBuffer);
  } catch (error) {
    console.log(error);
  }
});
