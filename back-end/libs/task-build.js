var Task = require('./task');

class TaskBuild extends Task  {
  constructor(id, action, user, location, structure, fuel) {
    super(id, action)

    this._location = location;
    this._structure = structure;
    this._fuel = fuel;
    this._user = user;
  }

  get progress() {
    return this._progress;
  }

  isExpired() {
    return this._progress >= 100;
  }

  computeProgressRate() {
    this._progressRate = this._fuel * 100;
    console.log("Task " + this.id + " progress rate " + this._progressRate);
  }

  computeProgressPercent() {
    this._progress = this._progress + this._progressRate;
    console.log("Task " + this.id + " progress " + this._progress);
  }
}

module.exports = TaskBuild
