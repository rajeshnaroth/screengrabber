function kickoff({ interval, period, captureFunction, isCancelled }) {
  let timeLeft = period
  let callCount = 1
  const intervalId = setInterval(() => {
    captureFunction(callCount)
    callCount++
    timeLeft -= interval
    if (isCancelled() || timeLeft <= 0) {
      clearInterval(intervalId)
    }
  }, interval * 1000)
}

const getAutomator = function({ interval, period }) {
  let cancelledFlag = false
  let isCancelled = () => cancelledFlag
  const start = (captureFunction) => kickoff({ interval, period, captureFunction, isCancelled })

  return {
    start,
    cancel: () => (cancelledFlag = true)
  }
}

module.exports = { getAutomator }
