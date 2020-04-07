console.log("working");

const inputNumber = document.querySelector("inputNum");
const selector = document.querySelector("currencySelector");
const showResult = document.querySelector("result");
const convert = document.querySelector("button");
const additionalInfo = document.querySelector("addInfo");

const BASE_URL =
  "https://prime.exchangerate-api.com/v5/ea19256df9d432e21c8cfc0e/latest/USD";

function addRates(response) {
  const conversionRates = response.data.conversion_rates
  const queryOptions = document.querySelectorAll('option')
  conversionRates.forEach(function () {
    queryOptions.appendChild()
  })
}

async function getRates() {
  const response = await axios.get(BASE_URL);
  addRates(response)
}
getRates()