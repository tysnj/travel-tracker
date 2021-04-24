import Trip from "../src/trip.js"

export default class Traveler {
  constructor({id, name, travelerType}, trips, destinations) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.trips = [];
    this.getTrips(trips, destinations);
    this.totalSpentThisYear = 0;
    this.getTotalSpent()
  }

  getTrips(tripData, destData) {
    let travelerTrips = tripData.trips.filter(trip => trip.userID === this.id)
    .forEach(instance => {
      let trip = new Trip(instance, destData)
      this.trips.push(trip)
    })
    return travelerTrips
  }

  getTotalSpent() {
    return this.trips.reduce((total, trip) => {
      let costPerTrip = (trip.destination.estimatedLodgingCostPerDay * trip.duration)
      + (trip.destination.estimatedFlightCostPerPerson * trip.travelers);
      let agentFee = .1 * costPerTrip
      total += (costPerTrip + agentFee)
      return total
    }, 0)
    // + this.trips.length
  }
}
