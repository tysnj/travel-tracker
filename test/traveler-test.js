import { expect } from "chai";
import destinationsData from "../src/data/destinations-sample.js"
import tripsData from "../src/data/trips-sample.js"
import travelersData from "../src/data/travelers-sample.js"
import Destination from "../src/destination.js"
import Trip from "../src/trip.js"
import Traveler from "../src/traveler.js"

let trip, traveler

describe("Traveler", () => {
  beforeEach(() => {
    // destination = new Destination(destinationsData.destinations[0]);
    // trip = new Trip(tripsData.trips[0], destinationsData);
    traveler = new Traveler(travelersData.travelers[0], tripsData, destinationsData)
  });

  it("should have an ID", () => expect(traveler.id).to.eql(1));

  it("should have a name", () => expect(traveler.name).to.eql("Ham Leadbeater"));

  it("should have a travelerType", () => expect(traveler.travelerType).to.eql("relaxer"));

  it("should store a list of trips", () => {
    expect(traveler.trips[1]).to.be.an.instanceOf(Trip)
  })

})
