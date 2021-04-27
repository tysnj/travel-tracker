import Destination from "../src/destination.js"
import dayjs from 'dayjs'

export default class Trip {
  constructor({id, userID, destinationID, travelers, date, duration, status = "pending", suggestedActivities = []}, destinations) {
    this.id = id;
    this.userID = userID;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.startDate = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = suggestedActivities;
    this.endDate = this.getEndDate(date)
    this.destination = this.getDestination(destinations);
    this.estCost = 0;
    this.getEstCost();
  }

  getDestination(destData) {
    let findDest = destData.destinations.find(dest => dest.id === this.destinationID)
    let destination = new Destination(findDest)
    this.destination = destination
    return this.destination
  }

  getEstCost() {
    let lodgingCost = (this.destination.estimatedLodgingCostPerDay * this.duration) * this.travelers;
    let flightCost = (this.destination.estimatedFlightCostPerPerson * this.travelers);
    let costPerTrip = lodgingCost + flightCost;
    let agentFee = .1 * costPerTrip
    this.estCost = (costPerTrip + agentFee)
  }

  getEndDate(startDate) {
    let endDate = dayjs(startDate).add(this.duration, "day").format("YYYY/MM/DD")
    return endDate
  }
}
