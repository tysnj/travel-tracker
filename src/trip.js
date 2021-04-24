import Destination from "../src/destination.js"

export default class Trip {
  constructor({id, userID, destinationID, travelers, date, duration, status, suggestedActivities = []}, destinations) {
    this.id = id;
    this.userID = userID;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = suggestedActivities;
    this.destination;
    this.getDestination(destinations)
  }

  getDestination(destData) {
    let findDest = destData.destinations.find(dest => dest.id === this.destinationID)
    let destination = new Destination(findDest)
    this.destination = destination
    return this.destination
  }
}
