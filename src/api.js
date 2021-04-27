import domUpdates from '../src/dom.js'
const travelersAPI = 'http://localhost:3001/api/v1/travelers';
const tripsAPI = 'http://localhost:3001/api/v1/trips';
const destinationsAPI = 'http://localhost:3001/api/v1/destinations';

export const getData = () => {
  let travelerData = fetch(travelersAPI)
    .then(response => response.json())
    .then(travelerData => {
      return travelerData;
    })

  let tripsData = fetch(tripsAPI)
    .then(response => response.json())
    .then(tripsData => {
      return tripsData;
    })

  let destinationsData = fetch(destinationsAPI)
    .then(response => response.json())
    .then(destinationsData => {
      return destinationsData;
    })

  return Promise.all([travelerData, tripsData, destinationsData])
    .then(data => {
      // let allData = {};
      // allData.travelerData = data[0];
      // allData.tripsData = data[1];
      // allData.destinationsData = data[2];
      return data;
    })
    .catch(err => domUpdates.displayErr(err))
}

export const postData = (data) => {
  fetch(tripsAPI, {
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
