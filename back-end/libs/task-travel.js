var Task = require('./task');

class TaskTravel extends Task  {
  constructor(id, action, user, location, destination, fuel) {
    super(id, action)

    this._location = location;
    this._destination = destination;
    this._fuel = fuel;
    this._user = user;
  }

  isExpired() {
    return false;
  }

  computeProgressPercent() {
    return 0;
  }
}

module.exports = TaskTravel
