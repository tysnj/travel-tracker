import Destination from "../src/destination.js"

export default class Trip {
  constructor({id, userID, destinationID, travelers, date, duration, status, suggestedActivities = []}, destination) {
    this.id = id;
    this.userID = userID;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = suggestedActivities;
    this.destination = destination;
  }
}
