import Trip from "../src/trip.js"
import dayjs from 'dayjs'

export default class Traveler {
  constructor({id, name, travelerType}, trips, destinations) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.trips = [];
    this.getTrips(trips, destinations);
    this.totalSpentThisYear = 0;
    this.getTotalSpentThisYear()
  }

  getTrips(tripData, destData) {
    let travelerTrips = tripData.trips.filter(trip => trip.userID === this.id)
    .sort((a, b) => dayjs(b.date) - dayjs(a.date))
    .forEach(instance => {
      let trip = new Trip(instance, destData)
      this.trips.push(trip)
    })
    return travelerTrips
  }

  getTotalSpentThisYear() {
    let oneYearAgo = dayjs().subtract(1, "year").format("YYYY/MM/DD")
    this.totalSpentThisYear = this.trips.reduce((total, trip) => {
      if (trip.startDate > oneYearAgo){
      total += trip.estCost
    }
      return total
    }, 0)
  }

  previewNewTrip(tripInfo, destinations) {
    let trip = new Trip(tripInfo, destinations);
    return trip
  }

  bookNewTrip(tripInfo, destinations) {
    this.trips.sort((a, b) => dayjs(b.date) - dayjs(a.date))
    .unshift(this.previewNewTrip(tripInfo, destinations));
  }
}
