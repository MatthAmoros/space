var TaskBuild = require('./task-build')
var TaskSearch = require('./task-search')
var TaskTravel = require('./task-travel')

var CronManager = require('./cron-manager.service')

class TaskFactory {
  constructor() {}

  schedule(id, action, descriptor) {
    let manager = new CronManager();
    var task;

    if(action == 'build') {
      task = new TaskBuild(id, action, descriptor.user, descriptor.location, descriptor.structure, descriptor.fuel); //id, action, user, location, structure, fuel
      task.expiryDate = descriptor.expiryDate;

    }
    else if (action == 'travel') {
      task = new TaskTravel(id, action, descriptor.user, descriptor.location, descriptor.destination, descriptor.fuel); //id, action, user, location, destination, fuel
      task.expiryDate = descriptor.expiryDate;
    }
    else if(action == 'search') {
      task = new TaskSearch(id, action, descriptor.user, descriptor.location, descriptor.structure, descriptor.fuel); //id, action, user, location, structure, fuel
      task.expiryDate = descriptor.expiryDate;
    }

    task.computeProgressRate();

    manager.addTask(task);
  }
}

module.exports = TaskFactory
