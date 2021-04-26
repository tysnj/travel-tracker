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


// const app = new App([travelersData, tripsData, destinationsData])
// let un = "traveler9";
// let pw = "travel2020";
// const fakeLogin = (un, pw) => app.login(un, pw)
// fakeLogin(un,pw)
// // console.log(app);

// const index = {
//   pages: [],
//   show: new Event("show"),
//   init: function(){
//     index.pages = document.querySelectorAll(".page");
//     index.pages.forEach((pg)=> {
//       pg.addEventListener("show", index.pageShown);
//     })
//     document.querySelectorAll(".nav-link").forEach((link) => {
//       link.addEventListener("click", index.nav);
//     })
//     history.replaceState({}, "Trips", "#trips")
//     window.addEventListener("hashchange", index.poppin)
//   },
//   nav: function(ev){
//     ev.preventDefault();
//     let currentPage = ev.target.getAttribute("data-target");
//     document.querySelector(".active").classList.remove("active");
//     document.getElementById(currentPage).classList.add("active");
//     history.pushState({}, currentPage, `${currentPage}`);
//     document.getElementById(currentPage).dispatchEvent(index.show);
//   },
//   pageShown: function(ev){
//     // REWRITE ALL OF THIS FUNCTION
//     console.log("Page", ev.target.id, "just shown")
//     let h1 = ev.target.querySelector("h1");
//     h1.classList.add('big')
//     setTimeout((h)=>{
//       h.classList.remove("big")
//     }, 1200, h1)
//   },
//   poppin: function(ev){
//     console.log(location.hash, "popstate event");
//     let hash = location.hash.replace("#", "");
//     document.querySelector(".active").classList.remove("active");
//     document.getElementById(currentPage).classList.add("active");
//     history.pushState({}, currentPage, `${currentPage}`);
//     document.getElementById(currentPage).dispatchEvent(index.show);
//   }
// }
//
// document.addEventListener('DOMContentLoaded', index.init)

// app.login()
