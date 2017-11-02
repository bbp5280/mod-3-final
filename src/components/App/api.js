export const fetchGOTHouses = () => {
  return fetch('http://localhost:3001/api/v1/houses', {
    method:'get'
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => console.log(error));
};
