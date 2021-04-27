import dayjs from 'dayjs';
import './css/base.scss';
import domUpdates from './dom.js';
import travelersData from "../src/data/travelers-sample.js";
import tripsData from "../src/data/trips-sample.js";
import destinationsData from "../src/data/destinations-sample.js";
import App from '../src/app.js';
const app = new App([travelersData, tripsData, destinationsData]);

///////////////////////////////////
let un = "traveler9";
let pw = "travel2020";
const fakeLogin = (un, pw) => {
  app.login(un, pw)
  domUpdates.populateTrips(app.user.trips)
  domUpdates.showTotalSpent(app.user)
  domUpdates.displayName(app.user)
};

fakeLogin(un, pw);
///////////////////////////////////
// index tells api fetch all that data
// index passes the data on to instantiate an App object
// index passes app state to dom for display

//user logs in and index is first to know
//index takes un/pw and passes it to app.login
//app instantiates the user and passes data back to index
//index passes new app state to dom for display

// first instantiate the app with local data
// create a fake log in scenario
// so, pretend data was just fetched, now pass it to the app
const bookingPage = document.getElementById("bookingPage");
const bookButton = document.getElementById("bookButton");
const dateInput = document.getElementById("dateInput");
const destInput = document.getElementById("destinationInput");
const durationInput = document.getElementById("durationInput");
const logOut = document.getElementById("loginPage");
const tripsDisplay = document.querySelectorAll(".trip-container");
const tripsPage = document.getElementById("tripsPage");
const travelersInput = document.getElementById("travelersInput");
const travelersPage = document.getElementById("travelersPage");

tripsDisplay.forEach(trip => trip.addEventListener("mouseover", () => domUpdates.showTripImage(app.user, event)));
tripsDisplay.forEach(trip => trip.addEventListener("mouseout", () => domUpdates.showDefaultImage(event)));

bookingPage.addEventListener("click", () => {
  app.display = "booking";
  domUpdates.changeView(app.display);
  domUpdates.changeEst(app);
  domUpdates.clearForm();
  domUpdates.getDestinations(app.data[2].destinations);
  domUpdates.setMinDate(app.date);
});
bookButton.addEventListener("click", () => bookTrip(event))
dateInput.addEventListener('change', () => formCheck());
destInput.addEventListener("change", () => domUpdates.showDestinationImage(app.data[2].destinations, event, getValue()));
destInput.addEventListener('change', () => formCheck());
durationInput.addEventListener('change', () => formCheck());
logOut.addEventListener("click", () => {
  app.display = "login";
  domUpdates.changeView(app.display);
});
travelersInput.addEventListener('change', () => formCheck());
tripsPage.addEventListener("click", () => {
  app.display = "trips";
  domUpdates.changeView(app.display);
  domUpdates.changeEst(app);
});
travelersPage.addEventListener("click", () => {
  app.display = "travelers";
  domUpdates.changeView(app.display);
});

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
    duration: Number(durationInput.value)
  }
  app.user.bookNewTrip(tripData, app.data[2])
  app.display = "trips";
  domUpdates.populateTrips(app.user.trips)
  domUpdates.changeView(app.display);
}
