import domUpdates from '../src/dom.js'
const travelersEndpoint = 'http://localhost:3001/api/v1/travelers';
const tripsEndpoint = 'http://localhost:3001/api/v1/trips';
const destinationsEndpoint = 'http://localhost:3001/api/v1/destinations';

const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}

export const getData = () => {
  let travelerData = fetch(travelersEndpoint)
    .then(response => checkForError(response))

  let tripsData = fetch(tripsEndpoint)
    .then(response => checkForError(response))

  let destinationsData = fetch(destinationsEndpoint)
    .then(response => checkForError(response))

  return Promise.all([travelerData, tripsData, destinationsData])
    .then(data => data)
    .catch(err => domUpdates.displayErr(err))
}

export const postData = (data) => {
  fetch(tripsEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log("post error", err));
}
