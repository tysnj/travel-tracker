import { expect } from "chai";
import destinationsData from "../src/data/destinations-sample.js"
import tripsData from "../src/data/trips-sample.js"
import travelersData from "../src/data/travelers-sample.js"
import Traveler from "../src/traveler.js"
import App from "../src/app.js"
import dayjs from 'dayjs'

let app, traveler, newApp

describe("App", () => {
  beforeEach(() => {
    app = new App([travelersData, tripsData, destinationsData])
    let un = "traveler50";
    let pw = "travel2020";
    app.login(un, pw);
    newApp = new App([travelersData, tripsData, destinationsData])
  });

  it("should know user is not logged in by default", () => {
    expect(newApp.stateOn).to.eql(false)
  });

  it("should change state upon login", () => {
    expect(app.stateOn).to.eql(true)
  });

  it("should know the user type after login", () => {
    expect(app.view).to.eql("traveler")
  });

  it("should store the various views in a list", () => {
    expect(app.pages).to.deep.eql(["login", "trips", "booking", "travelers"])
  });

  it("should know the login page is displayed by default", () => {
    expect(newApp.display).to.eql("login")
  });

  it("should track the page being displayed", () => {
    expect(app.display).to.eql("trips")
  });

  it("should know when credentials are invalid", () => {
    expect(newApp.login("un", "pw")).to.eql("Invalid Credentials")
  });

  it("should know when credentials are valid", () => {
    expect(app.user.id).to.eql(50)
  });

  it("should store a user object after login", () => {
    expect(app.user).to.be.an.instanceOf(Traveler);
  });

  it("should store the data", () => {
    expect(app.data).to.be.an("array");
    expect(app.data[0]).to.be.an("object");
  })

  it("should store the current date", () => {
    let date = dayjs().format("YYYY/MM/DD")
    expect(app.date).to.eql(date);
  })

})
