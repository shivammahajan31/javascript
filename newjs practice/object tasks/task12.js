const skills = {
  HTML: true,
  CSS: true,
  JavaScript: true,
  React: false
};
const trueCount = Object.values(skills).filter(val => val === true).length;
console.log("Number of True Skills:", trueCount);