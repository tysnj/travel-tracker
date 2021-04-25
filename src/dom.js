const domUpdates = {

  populateTrips(data) {
    let tripsDisplay = document.getElementById("tripsDisplay")
    data.forEach(trip => {
      tripsDisplay.insertAdjacentHTML("beforeend",
      `<div class="trip-container ${trip.status}">
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

  anotherFunc() {

  }



}

export default domUpdates;
