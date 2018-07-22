const defaultConfig = {
  filename: "screenshot",
  interval: 10, // seconds
  period: 30 * 60, // 30 minutes in seconds
  format: "jpg"
}

function parseArgs(argv) {
  const trimmedArgV = argv.slice(2)
  let defaults = Object.create(defaultConfig)

  trimmedArgV.forEach((val, i, arr) => {
    if (val === "-i") {
      defaults.interval = parseInt(arr[i + 1])
    } else if (val === "-p") {
      defaults.period = parseInt(arr[i + 1]) * 60
    } else if (val === "-ps") {
      // in seconds
      defaults.period = parseInt(arr[i + 1])
    } else if (val === "-f") {
      defaults.format = arr[i + 1]
    } else if (val === "-n") {
      defaults.filename = arr[i + 1]
    }
  })

  return defaults
}

module.exports = {
  parseArgs,
  defaultConfig
}
