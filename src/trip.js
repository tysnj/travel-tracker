import Destination from './destination'

export default class Trip extends Destination {
  constructor(id, userID, destinationID, travelers, date, duration, status, suggestedActivities) {
    super(id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image, alt);
    this.userID = userId;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = [];
  }
}
