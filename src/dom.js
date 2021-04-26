const domUpdates = {
  userTripData:[],
  populateTrips(data) {
    domUpdates.userTripData = data
    let tripsDisplay = document.getElementById("tripsDisplay")
    data.forEach(trip => {
      tripsDisplay.insertAdjacentHTML("beforeend",
      `<div class="trip-container ${trip.status}" id="${trip.id}">
      <img class="trip-image" src="${trip.destination.image}" alt="${trip.destination.alt}" hidden>
      ${trip.destination.destination}<br>
      ${trip.startDate} - ${trip.endDate}<br>
      Duration: ${trip.duration} days<br>
      Estimated Cost: $${trip.estCost.toLocaleString()}<br>
      Status: ${trip.status}
      </div>
      `
      )
    })
  },

  showTripImage(event) {
    let tripImageContainer = document.getElementById("tripImageContainer");
    let trip = domUpdates.userTripData.find(trip => trip.id === Number(event.target.id))
    let data = `<h1 class="destination-name">${trip.destination.destination}</h1>
    <img class="trip-image" src="${trip.destination.image}" alt="${trip.destination.alt}">`
    tripImageContainer.innerHTML = data

  }



}

export default domUpdates;
