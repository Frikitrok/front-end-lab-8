var euro = parseFloat(prompt("Euro"), 10);
var usd = parseFloat(prompt("USD"), 10);
var euroExchangeRate = 33.2324;
var usdExchangeRate = 27.1240;
var euroToUSD = (euroExchangeRate / usdExchangeRate).toFixed(3);

function checkInput(euro, usd) {
  if(isNaN(euro) || isNaN(usd) || euro <= 0 || usd <= 0){
    return false;
  }
  else {
    return true;
  }
}

function euroToUAH(euro) {
  return (euro * euroExchangeRate).toFixed(0);
}

function usdToUAH(usd) {
  return (usd * usdExchangeRate).toFixed(0);
}

(function showResult(euro, usd){
  if(checkInput(euro, usd)){
    console.log(euro + " euros are equal " + euroToUAH(euro) + " UAH, " + usd +
    " dollars are equal " + usdToUAH(usd) + " UAH, one euro is equal " + euroToUSD,
    "dollars");
  }
  else {
    console.log("Incorrect data");
  }
})(euro, usd);

