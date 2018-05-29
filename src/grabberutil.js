const { exec } = require("child_process");
const R = require("ramda");

function parseArgs(trimmedArgV) {
  let defaults = {
    filename: "screenshot",
    interval: 10, // seconds
    period: 30 * 60, // 30 minutes in seconds
    format: "jpg"
  };

  trimmedArgV.forEach((val, i, arr) => {
    if (val === "-i") {
      defaults.interval = parseInt(arr[i + 1]);
    } else if (val === "-p") {
      defaults.period = parseInt(arr[i + 1]) * 60;
    } else if (val === "-f") {
      defaults.format = arr[i + 1];
    } else if (val === "-n") {
      defaults.filename = arr[i + 1];
    }
  });

  return defaults;
}

function capture(format, filePrefix) {
  const command = `screencapture -t ${format} -x ./${filePrefix}.${format}`;
  console.log(command);
  exec(command);
}

function kickoff(config) {
  let timeLeft = config.period;
  let fileNumber = 1;
  const intervalId = setInterval(() => {
    capture(config.format, `${config.filename}-${fileNumber}`);
    fileNumber++;
    timeLeft -= config.interval;
    if (timeLeft <= 0) {
      clearInterval(intervalId);
    }
  }, config.interval * 1000);
}

const prepareArgs = args => args.slice(2);
const start = R.pipe(prepareArgs, parseArgs, v => (console.log, v), kickoff);

start(process.argv);
