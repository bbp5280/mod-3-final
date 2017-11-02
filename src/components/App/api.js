export const fetchGOTHouses = () => {
  return fetch('http://localhost:3001/api/v1/houses', {
    method:'get'
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => error);
};

export const swornMember = (url) => {
  return fetch('http://localhost:3001/api/v1/character', {
    method:'post',
    body: JSON.stringify({url: url}),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => response.json())
    .then(parsedResponse => parsedResponse)
    .catch(error => error.json())
    .then(parsedError => parsedError);
};
