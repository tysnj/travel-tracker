const domUpdates = {

  populateTrips(data) {
    let tripsDisplay = document.getElementById("tripsDisplay")
    data.forEach(trip => {
      tripsDisplay.insertAdjacentHTML("afterbegin",
      `<div class="trip-container">
      <img class="trip-image" src="${trip.destination.image}" alt="${trip.destination.alt}" hidden>
      ${trip.destination.destination}<br>
      ${trip.startDate} - ${trip.endDate} (${trip.duration} days)<br>
      ${trip.status}
      </div>
      `
      )
    })
  },

  anotherFunc() {

  }



}

export default domUpdates;
