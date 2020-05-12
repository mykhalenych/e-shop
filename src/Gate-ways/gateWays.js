const baseUrl = "https://5e64c3daa49c210016106bc4.mockapi.io/item";

export const fetchProductsList = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((productList) => {
      return productList;
    });
};
