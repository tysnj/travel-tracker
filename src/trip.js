export default class Trip {
  constructor(id, userID, destinationID, travelers, date, duration, status, suggestedActivities) {
    this.id = id;
    this.userID = userId;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = status;
    this.suggestedActivities = [];
  }
}
