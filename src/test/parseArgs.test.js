const { parseArgs, defaultConfig } = require("../parseArgs")

test("parsing in general is ok", () => {
  let config = parseArgs("node program -i 2")
  expect(config.interval).toEqual(2)
  config = parseArgs("node program   -i 3")
  expect(config.interval).toEqual(3)
})

test("parsing to config is ok", () => {
  let config = parseArgs("node program -i 2 -p 1 -f png -n hello")
  expect(config.interval).toEqual(2)
  expect(config.period).toEqual(60)
  expect(config.format).toEqual("png")
  expect(config.filename).toEqual("hello")
})
