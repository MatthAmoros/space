var CronJob = require('cron').CronJob;

class CronManager {

  constructor() {
    this._cronJobs = [];
  }

  addTask(task) {
    if(task.isExpired() == false) {
      var cronManager = this;

      console.log('Scheduling task ' + task.id);

      //Every minute
      var job = new CronJob("* * * * * *", function(){
          cronManager.processTask(job, task);
      });
      job.start();

      this._cronJobs.push({cronJob: job, task: task});
    }
  }

  processTask(job, task) {
    console.log('Running task ' + task.id + ' [' + task.action + ']' + ' (' + task.progress + ')');
    if(task.isExpired()) {
      console.log('Task expired.');
      job.stop();
    }
    else {
      console.log('Working...');
      task.work();
      task.computeProgressPercent();
    }
  }
}

module.exports = CronManager
