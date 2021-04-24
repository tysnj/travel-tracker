import Trip from './trip

export default class Destination extends Trip {
  constructor(id, destination, estimatedLodgingCostPerDay,estimatedFlightCostPerPerson, image, alt) {
    super(id);
    this.destination = destination;
    this.estimatedLodgingCostPerDay = estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = estimatedFlightCostPerPerson;
    this.image = image;
    this.alt = alt;
  }
}
