import { expect } from "chai";
import destinationsData from "../src/data/destinations-sample.js"
import tripsData from "../src/data/trips-sample.js"
import travelersData from "../src/data/travelers-sample.js"
import Trip from "../src/trip.js"
import Traveler from "../src/traveler.js"

let traveler

describe("Traveler", () => {
  beforeEach(() => {
    traveler = new Traveler(travelersData.travelers[0], tripsData, destinationsData)
  });

  it("should have an ID", () => expect(traveler.id).to.eql(1));

  it("should have a name", () => expect(traveler.name).to.eql("Ham Leadbeater"));

  it("should have a travelerType", () => expect(traveler.travelerType).to.eql("relaxer"));

  it("should store a list of trips", () => expect(traveler.trips[1]).to.be.an.instanceOf(Trip));

  it("should store total spent on trips this year", () => expect(traveler.totalSpentThisYear).to.eql(6919));

  it("should be able to preview a new trip", () => {
    let tripInfo = {id: 20, userID: 1, destinationID: 1, travelers: 1, date: "2020/12/06", duration: 2}
    let trip = new Trip(tripInfo, destinationsData)
    expect(traveler.previewNewTrip(tripInfo, destinationsData)).to.eql(trip);
  });

  it("should be able to book a new trip", () => {
    let tripInfo = {id: 20, userID: 1, destinationID: 1, travelers: 1, date: "2020/12/06", duration: 2}
    traveler.bookNewTrip(tripInfo, destinationsData);
    expect(traveler.trips.length).to.eql(3);
  });

})
