/**
 * Created by Brooks Johnson on 3/12/2022.
 */

import {createElement} from "lwc";
import RockPaperScissors from "c/rockPaperScissors";

async function flushPromises() {
  return Promise.resolve();
}

describe("c-rock-paper-scissors test suite", () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  it("should render rock", async () => {
    const element = createElement("c-rock-paper-scissors", {
      is: RockPaperScissors,
    });
    document.body.appendChild(element);
    const buttons = element.shadowRoot.querySelectorAll("lightning-button");
    buttons[0].click();
    await flushPromises();
    const playerGuess = element.shadowRoot.querySelector(".player-guess");
    expect(playerGuess.textContent).toContain("rock");
  });
  it("should render paper", async () => {
    const element = createElement("c-rock-paper-scissors", {
      is: RockPaperScissors,
    });
    document.body.appendChild(element);
    const buttons = element.shadowRoot.querySelectorAll("lightning-button");
    buttons[1].click();
    await flushPromises();
    const playerGuess = element.shadowRoot.querySelector(".player-guess");
    expect(playerGuess.textContent).toContain("paper");
  });
  it("should render scissors", async () => {
    const element = createElement("c-rock-paper-scissors", {
      is: RockPaperScissors,
    });
    document.body.appendChild(element);
    const buttons = element.shadowRoot.querySelectorAll("lightning-button");
    buttons[2].click();
    await flushPromises();
    const playerGuess = element.shadowRoot.querySelector(".player-guess");
    expect(playerGuess.textContent).toContain("scissors");
  });
});
