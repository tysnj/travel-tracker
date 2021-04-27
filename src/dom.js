const domUpdates = {

  populateTrips(data) {
    let tripsDisplay = document.getElementById("tripsDisplay")
    data.user.trips.forEach(trip => {
      tripsDisplay.insertAdjacentHTML("beforeend",
        `<div class="trip-container ${trip.status}" id="${trip.id}">
      <img class="trip-image" src="${trip.destination.image}" alt="${trip.destination.alt}" hidden>
      ${trip.destination.destination}<br>
      ${trip.startDate} - ${trip.endDate}<br>
      Duration: ${trip.duration} days<br>
      Estimated Cost: $${trip.estCost.toLocaleString()}<br>
      Status: ${trip.status}
      </div>
      `)
    })
  },

  showTotalSpent(data) {
    let userInfo = document.getElementById("userInfo")
    userInfo.innerHTML = `You've spent $${data.user.totalSpentThisYear.toLocaleString()} <br> in the last year`
  },

  displayName(data) {
    let userNameDisplay = document.getElementById("userNameDisplay")
    userNameDisplay.innerHTML = `<h2>${data.user.name}</h2>`
  },

  showTripImage(data, event) {
    let tripImageContainer = document.getElementById("tripImageContainer");
    let trip = data.user.trips.find(trip => trip.id === Number(event.target.id))
    let html = `<h1 class="destination-name">${trip.destination.destination}</h1>
    <img class="trip-image" src="${trip.destination.image}" alt="${trip.destination.alt}">`
    tripImageContainer.innerHTML = html
  },

  showDefaultImage(event) {
    let tripImageContainer = document.getElementById("tripImageContainer");
    let html = `<h1 class="destination-name">Let's Fly</h1>
    <img class="trip-image" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
    alt="looking out at the wing of a flying plane">`;
    tripImageContainer.innerHTML = html
  },

  changeView(data) {
    if (data.display === "login") {
      document.querySelector(".active").classList.remove("active");
      document.querySelector(".displayed").classList.remove("displayed");
      document.querySelector(`.${data.display}`).classList.add("active");
    } else {
      document.querySelector(".displayed").classList.remove("displayed");
      document.querySelector(`.${data.display}`).classList.add("displayed");
    }
  }

}


export default domUpdates;
