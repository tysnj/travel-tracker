import Trip from "../src/trip.js"

export default class Traveler {
  constructor({id, name, travelerType}, trips, destinations) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.trips = [];
    this.getTrips(trips, destinations);
  }

  getTrips(tripData, destData) {
    let travelerTrips = tripData.trips.filter(trip => trip.userID === this.id)
    .forEach(instance => {
      let trip = new Trip(instance, destData)
      this.trips.push(trip)
    })
    return travelerTrips
  }
}
