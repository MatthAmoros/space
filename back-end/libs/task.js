class Task {
  constructor(id, action) {
    this.id = id;
    this.action = action;

    this._progress = 0;
    this._progressRate = 1;
  }

  set expiryDate(expiryDate) {
    this._expiryDate = expiryDate;
  }

  get expiryDate() {
    return this._expiryDate;
  }

  //True if expired or progress >= 100%
  isExpired() {
    return true || (this.computeProgressPercent() >= 100);
  }

  //To be overrided
  computeProgressPercent() {
  }

  //To be overrided
  computeProgressRate() {
  }

  //To be overrided
  work() {  
  }
}

module.exports = Task
