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



let numCookies = 130000;
let cookiesPerSecond = 0;

const cursors = {
  cost: 15,
  costSelector: cursorsCost,
  number: 0,
  numberSelector: cursorsNumber,
  increment: 0.1,
  inflation: 0.15
}
const grandmas = {
  cost: 100,
  costSelector:  grandmasCost,
  number: 0,
  numberSelector: grandmasNumber,
  increment: 1,
  inflation: 0.15
}
const farms = {
  cost: 1100,
  costSelector: farmsCost,
  number: 0,
  numberSelector: farmsNumber,
  increment: 8,
  inflation: 0.15
}
const mines = {
  cost: 12000,
  costSelector: minesCost,
  number: 0,
  numberSelector: minesNumber,
  increment: 47,
  inflation: 0.15
}
const factories = {
  cost: 130000,
  costSelector: factoriesCost,
  number: 0,
  numberSelector: factoriesNumber,
  increment: 260,
  inflation: 0.15
}
const banks = {
  cost: 1400000,
  costSelector: banksCost,
  number: 0,
  numberSelector: banksNumber,
  increment: 2300,
  inflation: 0.15
}

const temples = {
  cost: 20000000,
  costSelector: templesCost,
  number: 0,
  numberSelector: templesNumber,
  increment: 25000,
  inflation: 0.15
}

function clickCookie() {
  numCookies += 1;
  numCookiesDiv.innerHTML = numCookies.toFixed(0) + ' cookies';
}

function addFeature(feature) {
  if (numCookies >= feature.cost) {
    numCookies -= feature.cost;
    cookiesPerSecond += feature.increment;
    feature.number += 1;
    feature.cost = feature.cost * (1 + feature.inflation);
    feature.costSelector.innerHTML = `🍪 ${feature.cost.toFixed(0)}`;
    feature.numberSelector.innerHTML = `${feature.number}`;
  }
  else {
    console.log("no tienes suficientes cookies!");
  }
}

function addCookies() {
  numCookies += cookiesPerSecond / 100;
  numCookiesDiv.innerHTML = numCookies.toFixed(0) + ' cookies';
  cps.innerHTML = `cookies per second: ${cookiesPerSecond.toFixed(1)}`;
}

setInterval(addCookies,10);