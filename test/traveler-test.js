import { expect } from "chai";
import destinationsData from "../src/data/destinations-sample.js"
import tripsData from "../src/data/trips-sample.js"
import travelersData from "../src/data/travelers-sample.js"
import Destination from "../src/destination.js"
import Trip from "../src/trip.js"
import Traveler from "../src/traveler.js"

let trip, destination, traveler

describe("Traveler", () => {
  beforeEach(() => {
    destination = new Destination(destinationsData.destinations[0]);
    trip = new Trip(tripsData.trips[0], destination);
    traveler = new Traveler(travelersData.travelers[0])
  });

  it("should have an ID", () => expect(traveler.id).to.eql(1));

  it("should have a name", () => expect(traveler.name).to.eql("Ham Leadbeater"));

  it("should have a travelerType", () => expect(traveler.travelerType).to.eql("relaxer"));

  it("should have an empty list of Trips by default", () => expect(traveler.trips).to.deep.eql([]));

  it("can store a list of trips", () => {
    expect(traveler.getTrips(tripsData)).to.deep.eql([]));
  }
})
