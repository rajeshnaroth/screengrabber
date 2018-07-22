const { captureCommand } = require("../grabber")

test("grab command is ok", () => {
  expect(
    captureCommand({
      format: "png",
      filePrefix: "test-",
      fileKey: "1"
    })
  ).toEqual("screencapture -t png -x ./test--1.png")
})
