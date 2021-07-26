const getApiData = () => {
  fetch("./assets/js/api/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
