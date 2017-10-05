"use babel";
import djkhaled from "./data/dj-khaled.json";

var pkgPath = atom.packages.resolvePackagePath("dj-khaled-personal-assistant");
const image = `<img class='animate' src='${pkgPath}/assets/djkhaled.png' width=60>`;

Blessings = () => {
  var themQuotes = djkhaled["quotes"];
  var randomNumber = getRandomNumber(0, themQuotes.length);

  function getRandomNumber(min, max) {
    randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  }
  return themQuotes[randomNumber];
};

module.exports = () => {
  atom.notifications.addSuccess(Blessings() + image);
};
