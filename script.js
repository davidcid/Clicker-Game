const cookie = document.querySelector("#cookie");
const numCookiesDiv = document.querySelector("#num-cookies");
const cps = document.querySelector("#cps");

const cursorsCost = document.querySelector("#cursors-cost");
const cursorsNumber = document.querySelector("#num-cursors");

const grandmasCost = document.querySelector("#grandmas-cost");
const grandmasNumber = document.querySelector("#num-grandmas");

const farmsCost = document.querySelector("#farms-cost");
const farmsNumber = document.querySelector("#num-farms");

const minesCost = document.querySelector("#mines-cost");
const minesNumber = document.querySelector("#num-mines");

const factoriesCost = document.querySelector("#factories-cost");
const factoriesNumber = document.querySelector("#num-factories");

const banksCost = document.querySelector("#banks-cost");
const banksNumber = document.querySelector("#num-banks");

const templesCost = document.querySelector("#temples-cost");
const templesNumber = document.querySelector("#num-temples");



let numCookies = 0;
let cookiesPerSecond = 0;

const cursors = {
  cost: 5,
  costSelector: cursorsCost,
  number: 0,
  numberSelector: cursorsNumber,
  increment: 0.08,
}
const grandmas = {
  cost: 25,
  costSelector:  grandmasCost,
  number: 0,
  numberSelector: grandmasNumber,
  increment: 0.08
}
const farms = {
  cost: 100,
  costSelector: farmsCost,
  number: 0,
  numberSelector: farmsNumber,
  increment: 0.08
}
const mines = {
  cost: 500,
  costSelector: minesCost,
  number: 0,
  numberSelector: minesNumber,
  increment: 0.08
}
const factories = {
  cost: 1000,
  costSelector: factoriesCost,
  number: 0,
  numberSelector: factoriesNumber,
  increment: 0.08
}
const banks = {
  cost: 3000,
  costSelector: banksCost,
  number: 0,
  numberSelector: banksNumber,
  increment: 0.08
}

const temples = {
  cost: 8000,
  costSelector: templesCost,
  number: 0,
  numberSelector: templesNumber,
  increment: 0.08
}

function clickCookie() {
  numCookies += 1;
  numCookiesDiv.innerHTML = numCookies.toFixed(1) + ' cookies';
}

function addFeature(feature) {
  if (numCookies >= feature.cost) {
    numCookies -= feature.cost;
    cookiesPerSecond += feature.increment;
    feature.number += 1;
    feature.cost = feature.cost * (1 + feature.increment);
    feature.costSelector.innerHTML = `${feature.cost.toFixed(1)} cookies`;
    feature.numberSelector.innerHTML = `${feature.number}`;
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