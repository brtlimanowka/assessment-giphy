export const httpClient = async (url) => {
  let responseObject = {
    ok: false,
    data: [],
  };
  await fetch(url)
    .then((response) => {
      if (response.ok) {
        responseObject.ok = true;
        // console.log(response)
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      responseObject.data = data;
    })
    .finally(() => {
      // console.log(responseObject);
      return responseObject;
    });
};
