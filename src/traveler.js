export default class Traveler {
  constructor(id, name, travelerType, trips = []) {
    this.id = id;
    this.name = name;
    this.travelerType = travelerType;
    this.trips = trips;
  }
}
