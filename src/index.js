import dayjs from 'dayjs';
import './css/base.scss';
import domUpdates from './dom.js';
import travelersData from "../src/data/travelers-sample.js";
import tripsData from "../src/data/trips-sample.js";
import destinationsData from "../src/data/destinations-sample.js";
import App from '../src/app.js';


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
const app = new App([travelersData, tripsData, destinationsData]);
const bookingPage = document.getElementById("bookingPage");
const dateInput = document.getElementById("dateInput");
const destInput = document.getElementById("destinationInput");
const durationInput = document.getElementById("durationInput");
const logOut = document.getElementById("loginPage");
const tripsDisplay = document.querySelectorAll(".trip-container");
const tripsPage = document.getElementById("tripsPage");
const travelersInput = document.getElementById("travelersInput");
const travelersPage = document.getElementById("travelersPage");


let un = "traveler9";
let pw = "travel2020";
const fakeLogin = (un, pw) => {
  app.login(un, pw)
  domUpdates.populateTrips(app.user)
  domUpdates.showTotalSpent(app.user)
  domUpdates.displayName(app.user)
};

fakeLogin(un, pw);

bookingPage.addEventListener("click", () => {
  app.display = "booking";
  domUpdates.changeView(app);
  domUpdates.changeEst(app);
  domUpdates.getDestinations(app.data[2].destinations);
  domUpdates.setMinDate(app.date);
});
dateInput.addEventListener('change', () => formCheck);
destInput.addEventListener("change", () => domUpdates.showDestinationImage(app.data[2].destinations, event, getValue()));
destInput.addEventListener('change', () => formCheck);
durationInput.addEventListener('change', () => formCheck);
logOut.addEventListener("click", () => {
  app.display = "login";
  domUpdates.changeView(app);
});
travelersInput.addEventListener('change', () => formCheck);
tripsDisplay.forEach(trip => trip.addEventListener("mouseout", () => domUpdates.showDefaultImage(event)));
tripsDisplay.forEach(trip => trip.addEventListener("mouseover", () => domUpdates.showTripImage(app.user, event)));
tripsPage.addEventListener("click", () => {
  app.display = "trips";
  domUpdates.changeView(app);
  domUpdates.changeEst(app);
});
travelersPage.addEventListener("click", () => {
  app.display = "travelers";
  domUpdates.changeView(app);
});


const getValue = () => document.getElementById("destinationInput").value;

const formCheck = () => {
  if (dateInput.value && durationInput.value && travelersInput.value && destInput.value) {
    domUpdates.prepTrip()
  }
};
