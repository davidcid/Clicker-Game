const cookie = document.querySelector("#cookie");
const numCookiesDiv = document.querySelector("#num-cookies");
const cps = document.querySelector("#cps");
const features = document.querySelectorAll("#features");
let numCookies = 0;
let cookiesPerSecond = 0;
const cursors = {
  cost: 5,
  number: 0,
  increment: 0.08
}
const grandmas = {
  cost: 25,
  number: 0,
  increment: 0.35
}
const farms = {
  cost: 100,
  number: 0,
  increment: 1
}

function clickCookie() {
  numCookies += 1;
  numCookiesDiv.innerHTML = numCookies.toFixed(1) + ' cookies';
}

// function addCursor() {
//   if(numCookies >= cursors.cost) {
//     numCookies -= cursors.cost;
//     cookiesPerSecond += cursors.increment;
//     cursors.number += 1;
//     cursors.cost = cursors.cost * (1 + cursors.increment)
//     document.querySelector("#cursors-number").innerHTML = `Add cursor (${cursors.number})`;
//     document.querySelector("#cursors-cost").innerHTML = `${cursors.cost.toFixed(1)}`;
//     cps.innerHTML = `cookies per second: ${cookiesPerSecond.toFixed(2)}`
//   } else {
//     console.log("no tienes suficientes cookies!");
//   }
// }

// function addGrandma() {
//   if (numCookies >= grandmas.cost) {
//     numCookies -= grandmas.cost;
//     cookiesPerSecond += grandmas.increment;
//     grandmas.number += 1;
//     grandmas.cost = grandmas.cost * (1 + grandmas.increment);
//     document.querySelector("#grandmas-number").innerHTML = `Add grandma (${grandmas.number})`;
//     document.querySelector("#grandmas-cost").innerHTML = `${grandmas.cost.toFixed(1)}`;
//     cps.innerHTML = `cookies per second: ${cookiesPerSecond.toFixed(2)}`
//   } else {
//     console.log("no tienes suficientes cookies!");
//   }
// }

function addFeature(feature) {
  if (numCookies >= feature.cost) {
    numCookies -= feature.cost;
    cookiesPerSecond += feature.increment;
    feature.number += 1;
    feature.cost = feature.cost * (1 + feature.increment);
    // feature.selector.number.innerHTML = `Add ${feature.name} (${feature.number})`;
  }
  else {
    console.log("no tienes suficientes cookies!");
  }
}

function addCookies() {
  numCookies += cookiesPerSecond;
  numCookiesDiv.innerHTML = numCookies.toFixed(1) + ' cookies';
  cps.innerHTML = `cookies per second: ${cookiesPerSecond.toFixed(2)}`;
}

setInterval(addCookies,1000);