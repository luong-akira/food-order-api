
const schedule = require('node-schedule');


// '* * * * * *' - runs every second
// '*/5 * * * * *' - runs every 5 seconds
// '10,20,30 * * * * *' - run at 10th, 20th and 30th second of every minute
// '0 * * * * *' - runs every minute
// '0 0 * * * *' - runs every hour (at 0 minutes and 0 seconds)


module.exports = () => {
  schedule.scheduleJob('* * * * * *', async () => {
    console.log('schedulejob')
    try {
      console.log('schedulesucess')
    } catch (err) {
      console.log('sechdulejob', "ERROR", err)
    }
  });
}