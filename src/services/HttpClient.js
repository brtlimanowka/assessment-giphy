export const httpClient = async (url) => {
  let responseObject = {
    ok: false,
    data: [],
    error: null,
  };

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          responseObject.ok = true;
          responseObject.error = null;
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then(({ data }) => {
        responseObject.data = data;
      })
      .catch((error) => {
        responseObject = {
          ok: false,
          data: [],
          error: error.message,
        };
      })
      .finally(() => {
        resolve(responseObject);
      });
  });
};
