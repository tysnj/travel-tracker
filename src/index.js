// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import domUpdates from './dom.js'
import App from '../src/app.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

import travelersData from "../src/data/travelers-sample.js"
import tripsData from "../src/data/trips-sample.js"
import destinationsData from "../src/data/destinations-sample.js"


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
const app = new App([travelersData, tripsData, destinationsData])
let un = "traveler9";
let pw = "travel2020";
const fakeLogin = (un, pw) => app.login(un, pw)
fakeLogin(un,pw)
console.log(app);
domUpdates.populateTrips(app.user.trips)
