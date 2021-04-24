import { expect } from 'chai';
import destinationsData from '../src/data/destinations-sample.js'
import Destination from '../src/destination.js'
// import Trip from '../src/trip.js'


describe('Destination', () => {
  beforeEach(() => {
    console.log(destinationsData.destinations[0])
    let destination = new Destination({ ...destinationsData.destinations[0] })
  });

  it("should have an ID", () => {
    expect(destination.id).to.eql(1);
  })
})
