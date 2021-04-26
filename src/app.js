import Traveler from "../src/traveler.js"

export default class App {
  constructor(data = []) {
    this.stateOn = false;
    this.view; //"traveler" || "agency"
    this.pages = ["login", "trips", "booking", "travelers"];
    this.display = "login";
    this.user;
    this.data = data;
  }

  login(userName, password) {
    if(this.validateCredentials(userName, password)) {
      if (this.view === "traveler") {
        let user = this.findUser(userName);
        this.user = this.createUser(user);
      } else if (this.view === "agency") {
        this.user = this.createUser("agent");
      }
      this.stateOn = true;
      this.display = "trips";
      return this.display
    } else {
      return "Invalid Credentials"
    }
  }

  validateCredentials(userName, password) {
    if(userName.split("traveler")[0] === "" && password === "travel2020" &&
      this.data[0].travelers.some(traveler => traveler.id == userName.split("traveler")[1])) {
      return this.view = "traveler"
    } else if (userName === "agency" && password === "travel2020") {
      return this.view = "agency"
    } else {
      return false
    }
  }

  findUser(userName){
    let id = userName.split("traveler")[1];
    let user = this.data[0].travelers.find(traveler => id == traveler.id);
    return user
  }

  createUser(user) {
    if (user === "agent") {
      // return new Agent()
    } else {
      return new Traveler(user, this.data[1], this.data[2])
    }
  }

}
