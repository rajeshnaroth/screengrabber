const { exec } = require("child_process")

const captureCommand = ({ format, filePrefix, fileKey }) =>
  `screencapture -t ${format} -x ./${filePrefix}-${fileKey}.${format}`

function capture({ format, filePrefix, fileKey }) {
  const command = captureCommand({ format, filePrefix, fileKey })
  console.log(command)
  exec(command)
}

const getGrabber = function({ filename, prefix, format }) {
  const filePrefix = `${filename}-`
  let fileKey = 1
  return {
    grabFunction: (fileKey) => {
      capture({ format, filePrefix, fileKey })
      fileKey++
    }
  }
}

module.exports = {
  getGrabber,
  captureCommand
}
