var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
function dwarfRollCall(dwarves) {
  var array = []
  for (var i = 0; i < dwarves.length / 2; i++) {
    array.push(`${i + 1}. ${dwarves[i]} `) }
    return array.join("") 
} 

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]
function summonCaptainPlanet(planeteerCalls){
  var array = []
  for (var i = 0; i < planeteerCalls.length; i++) {
    array.push(planeteerCalls[i].toUpperCase() + "!") }
  return array 
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {return true }
    else { return false } 
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar"
    || foods[i] === "gouda"
    || foods[i] === "camembert"
    || foods[i] === "swiss") 
     { return foods[i] } }
     return "no cheese!" } 
     
function wordsWithB (words) {
  var array = []
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("b")) {
    array.push(words[i]) } }
   return array
  } 
