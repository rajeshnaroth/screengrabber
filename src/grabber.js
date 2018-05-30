const { exec } = require("child_process")

function capture({ format, filePrefix, fileKey }) {
  const command = `screencapture -t ${format} -x ./${filePrefix}-${fileKey}.${format}`
  console.log(command)
  // exec(command)
}

const getGrabber = function({ filename, prefix, format }) {
  const filePrefix = `${filename}-`
  return {
    grabFunction: (fileKey) => capture({ format, filePrefix, fileKey })
  }
}

module.exports = getGrabber
