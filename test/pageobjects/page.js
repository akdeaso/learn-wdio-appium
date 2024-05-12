import { driver } from "@wdio/globals";

export default class Page {
  async scrollDown() {
    await driver
      .action("pointer")
      .move({ x: 250, y: 850 })
      .down()
      .pause(100)
      .move({ x: 250, y: 500, duration: 200 })
      .up()
      .perform();
  }
}
