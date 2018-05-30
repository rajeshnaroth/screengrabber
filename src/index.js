const { parseArgs, defaultConfig } = require("./parseArgs")
const getAutomator = require("./automator")
const getGrabber = require("./grabber")

const config = parseArgs(process.argv)
const automator = getAutomator(config)
const grabber = getGrabber(config)

automator.start(grabber.grabFunction)
