var Task = require('./task');

class TaskSearch extends Task  {
  constructor(id, action, user, location, structure, fuel) {
    super(id, action)

    this._location = location;
    this._structure = structure;
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

module.exports = TaskSearch
