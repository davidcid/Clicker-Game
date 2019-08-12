const cookie = document.querySelector("#cookie");
const numCookiesDiv = document.querySelector("#num-cookies");
const cps = document.querySelector("#cps");
let numCookies = 0;
let cookiesPerSecond = 0;
const cursors = {
  cost: 5,
  number: 0,
  increment: 0.08
}

function clickCookie() {
  numCookies += 1;
  numCookiesDiv.innerHTML = numCookies.toFixed(1);
}

function addCursor() {
  if(numCookies >= cursors.cost) {
    numCookies -= cursors.cost;
    cookiesPerSecond += cursors.increment;
    cursors.number += 1
    cursors.cost = cursors.cost * (1 + cursors.increment)
    document.querySelector("#cursors-number").innerHTML = `Add cursor (${cursors.number})`;
    document.querySelector("#cursors-cost").innerHTML = `${cursors.cost.toFixed(1)}`;
    cps.innerHTML = `cookies per second: ${cookiesPerSecond.toFixed(2)}`
  } else {
    console.log("no tienes suficientes cookies!");
  }
}

function addCookies() {
  numCookies += cookiesPerSecond;
  numCookiesDiv.innerHTML = numCookies.toFixed(1);
}

setInterval(addCookies,1000);