import { expect } from "chai";
import destinationsData from "../src/data/destinations-sample.js"
import tripsData from "../src/data/trips-sample.js"
import Destination from "../src/destination.js"
import Trip from "../src/trip.js"
let trip, destination

describe("Trip", () => {
  beforeEach(() => {
    // destination = new Destination(destinationsData.destinations[0]);
    trip = new Trip(tripsData.trips[0], destinationsData);
  });

  it("should have an ID", () => expect(trip.id).to.eql(1));

  it("should have a userID", () => expect(trip.userID).to.eql(4));

  it("should have a destinationID", () => expect(trip.destinationID).to.eql(1));

  it("should have an number of travelers", () => expect(trip.travelers).to.eql(1));

  it("should have date", () => expect(trip.startDate).to.eql("2019/09/16"));

  it("should have a duration", () => expect(trip.duration).to.eql(8));

  it("should have a default status of pending", () => {
    let newTrip = new Trip(
      {
        "id": 20,
        "userID": 1,
        "destinationID": 1,
        "travelers": 1,
        "date": "2020/12/06",
        "duration": 2
      }, destinationsData)
    expect(newTrip.status).to.eql("pending");

  });

  it("should have a status of approved or pending", () => {
    let newTrip = new Trip(tripsData.trips[1], destinationsData);
    expect(trip.status).to.eql("approved");
  });

  it("should store an empty list of suggestedActivities by default", () => expect(trip.suggestedActivities).to.deep.eql([]));

  it("should store suggestedActivities", () => {
    let newTrip = new Trip(tripsData.trips[1], destinationsData);
    expect(newTrip.suggestedActivities).to.deep.eql(["para snorkling", "scuba flying", "lay down paddle boarding"]);
  });

  it("should store the end date", () => {
    expect(trip.endDate).to.eql("2019/09/24")
  });

  it("should keep an instance of its destination", () => expect(trip.destination).to.be.an.instanceOf(Destination));

  it("should store estimated cost of the trip", () => expect(trip.estCost).to.eql(1056))
})
