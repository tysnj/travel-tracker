const domUpdates = {

  populateTrips(user) {
    let tripsDisplay = document.getElementById("tripsDisplay")
    user.trips.forEach(trip => {
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

  showTotalSpent(user) {
    let userInfo = document.getElementById("userInfo")
    userInfo.innerHTML = `You've spent $${user.totalSpentThisYear.toLocaleString()} <br> in the last year`
  },

  displayName(user) {
    let userNameDisplay = document.getElementById("userNameDisplay")
    userNameDisplay.innerHTML = `<h2>${user.name}</h2>`
  },

  showTripImage(user, event) {
    console.log('hover')
    let tripImageContainer = document.getElementById("tripImageContainer");
    let trip = user.trips.find(trip => trip.id === Number(event.target.id))
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

  changeView(app) {
    if (app.display === "login") {
      document.querySelector(".active").classList.remove("active");
      document.querySelector(".displayed").classList.remove("displayed");
      document.querySelector(`.${app.display}`).classList.add("active");
    } else {
      document.querySelector(".displayed").classList.remove("displayed");
      document.querySelector(".selected").classList.remove("selected");
      document.querySelector(`.${app.display}`).classList.add("displayed");
      document.querySelector(`.${app.display}-link`).classList.add("selected");
    }
  },

  changeEst(app, num = 0) {
    if(app.display === "trips") {
      this.showTotalSpent(app.user)
    } else {
      let userInfo = document.getElementById("userInfo")
      userInfo.innerHTML = `Estimated trip cost: $${num}`
    }
  },

  getDestinations(data) {
    let destInput = document.getElementById("destinationInput")
    destInput.innerHTML = `<option value="None">Choose One!</option>`
    data.forEach(dest => {
      destInput.insertAdjacentHTML("beforeend",
        `<option class="dest-option" value="${dest.id}">${dest.destination}</option>`)
    })
  },

  showDestinationImage(destinations, event, destInput) {
    const destImage = document.getElementById("destImageContainer")
    let destination = destinations.find(dest => dest.id === Number(destInput))
    let html = `<img class="destination-image" src="${destination.image}" alt="${destination.alt}">`
    destImage.innerHTML = html
  },

  setMinDate(date) {
    const dateInput = document.getElementById("dateInput")
    let minDate = date.split("/").join("-")
    dateInput.setAttribute("min", minDate);
  },

  prepTrip(trip) {
    const bookButton = document.getElementById("bookButton");
    bookButton.disabled = false;
    let userInfo = document.getElementById("userInfo")
    userInfo.innerHTML = `Estimated trip cost: $${trip.estCost}`  }
}


export default domUpdates;
