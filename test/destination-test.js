import { expect } from "chai";
import destinationsData from "../src/data/destinations-sample.js"
import Destination from "../src/destination.js"
// import Trip from "../src/trip.js"
let destination

describe("Destination", () => {
  beforeEach(() => {
    destination = new Destination(destinationsData.destinations[0])
  });

  it("should have an ID", () => expect(destination.id).to.eql(1));

  it("should have a destination", () => expect(destination.destination).to.eql("Lima, Peru"));

  it("should have an estimatedLodgingCostPerDay value", () => expect(destination.estimatedLodgingCostPerDay).to.eql(70));

  it("should have an estimatedFlightCostPerPerson value", () => expect(destination.estimatedFlightCostPerPerson).to.eql(400));

  it("should have an image", () => expect(destination.image).to.eql("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"));

  it("should have alt text", () => expect(destination.alt).to.eql("overview of city buildings with a clear sky"));

})
