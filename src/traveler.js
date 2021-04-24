import Trip from "../src/trip.js"

export default class Traveler {
  constructor({id, name, travelerType}, trips = []) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.trips = trips;
  }

  getTrips(data) {
    this.trips
  }
}
