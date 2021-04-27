import dayjs from 'dayjs';
import './css/base.scss';
import domUpdates from './dom.js';
import { getData, postData } from '../src/api.js';
// import travelersData from "../src/data/travelers-sample.js";
// import tripsData from "../src/data/trips-sample.js";
// import destinationsData from "../src/data/destinations-sample.js";
import App from '../src/app.js';

let app; // = new App([travelersData, tripsData, destinationsData]);

const bookingPage = document.getElementById("bookingPage");
const bookButton = document.getElementById("bookButton");
const dateInput = document.getElementById("dateInput");
const destInput = document.getElementById("destinationInput");
const durationInput = document.getElementById("durationInput");
const loginButton = document.getElementById("loginButton");
const logOut = document.getElementById("loginPage");
const passwordInput = document.getElementById("passwordInput")
const tripsDisplay = document.getElementById("tripsDisplay");
const tripsPage = document.getElementById("tripsPage");
const travelersInput = document.getElementById("travelersInput");
const travelersPage = document.getElementById("travelersPage");
const userNameInput = document.getElementById("userNameInput");

tripsDisplay.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("trip-container")) {
    domUpdates.showTripImage(app.user.trips, event)
  }
})

tripsDisplay.addEventListener("mouseout", (event) => {
  if (event.target.classList.contains("trip-container")) {
    domUpdates.showDefaultImage(app.user.trips, event)
  }
})

bookingPage.addEventListener("click", () => {
  app.display = "booking";
  domUpdates.changeView(app.display);
  domUpdates.changeEst(app);
  domUpdates.clearForm();
  domUpdates.getDestinations(app.data[2].destinations);
  domUpdates.setMinDate(app.date);
});
bookButton.addEventListener("click", () => bookTrip(event))
dateInput.addEventListener("change", () => formCheck());
destInput.addEventListener("change", () => domUpdates.showDestinationImage(app.data[2].destinations, event, getValue()));
destInput.addEventListener("change", () => formCheck());
durationInput.addEventListener("change", () => formCheck());
logOut.addEventListener("click", () => {
  app.display = "login";
  domUpdates.changeView(app.display);
});
loginButton.addEventListener("click", () => {
  if (app.login(userNameInput.value, passwordInput.value) === "trips") {
    domUpdates.populateTrips(app.user.trips);
    domUpdates.showTotalSpent(app.user);
    domUpdates.displayName(app.user);
    domUpdates.changeView(app.display)
  } else {
    domUpdates.loginErr()
  }
});
passwordInput.addEventListener("keyup", () => loginCheck());
travelersInput.addEventListener("change", () => formCheck());
tripsPage.addEventListener("click", () => {
  app.display = "trips";
  domUpdates.changeView(app.display);
  domUpdates.changeEst(app);
});
travelersPage.addEventListener("click", () => {
  app.display = "travelers";
  domUpdates.changeView(app.display);
});
userNameInput.addEventListener("keyup", () => loginCheck());

window.onload = fetch();

function fetch() {
  getData()
    .then(allData => {
      app = new App(allData)
      startUp()
      accessibilityTest()
    })
}

function startUp() {
  domUpdates.changeView(app.display)
}
function loginCheck() {
  if (userNameInput.value && passwordInput.value)
  domUpdates.prepLogin();
}

const getValue = () => document.getElementById("destinationInput").value;

const formCheck = () => {
  if (dateInput.value && durationInput.value && travelersInput.value && destInput.value && destInput.value !== "None") {
    let tripData = {
      id: app.data[1].trips.length + 1,
      userID: app.user.id,
      destinationID: Number(destInput.value),
      travelers: Number(travelersInput.value),
      date: dateInput.value.split("-").join("/"),
      duration: Number(durationInput.value)
    }
    domUpdates.prepTrip(app.user.previewNewTrip(tripData, app.data[2]))
  }
};

const bookTrip = (event) => {
  event.preventDefault()
  let tripData = {
    id: app.data[1].trips.length + 1,
    userID: app.user.id,
    destinationID: Number(destInput.value),
    travelers: Number(travelersInput.value),
    date: dateInput.value.split("-").join("/"),
    duration: Number(durationInput.value),
    status: "pending",
    suggestedActivities: []
  }
  app.user.bookNewTrip(tripData, app.data[2])
  app.display = "trips";
  domUpdates.populateTrips(app.user.trips)
  domUpdates.changeView(app.display);
  domUpdates.showTotalSpent(app.user);
  postData(tripData);
  app.data[1].trips.push(tripData)
}

function accessibilityTest() {
    app.login("traveler19", "travel2020")
    domUpdates.populateTrips(app.user.trips);
    domUpdates.showTotalSpent(app.user);
    domUpdates.displayName(app.user);
    domUpdates.changeView(app.display)
}
