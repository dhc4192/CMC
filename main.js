// console.log("working");

// const selector = document.querySelector("#currencySelector");
// const showResult = document.querySelector("#result");
// const convert = document.querySelector("button");
// const additionalInfo = document.querySelector("#addInfo");

// const BASE_URL =
//   "https://prime.exchangerate-api.com/v5/ea19256df9d432e21c8cfc0e/latest/USD";

// function addRates(response) {
//   const conversionRates = response.data.conversion_rates;
//   for (keys in conversionRates) {
//     let option = document.createElement('option')
//     option.text = keys
//     option.value = conversionRates[keys]
//     selector.add(option, null)
//   }
// }

// async function getRates() {
//   const response = await axios.get(BASE_URL);
//   console.log(response)
//   addRates(response);
// }
// getRates();

// convert.addEventListener('click', () => {
//   const inputNumber = document.getElementById("inputNum").value
//   const internationalRates = selector.options[selector.selectedIndex].value
//   const conversion = inputNumber * internationalRates

//   showResult.value = conversion
// })


function showTable() {
  const currentTable = document.querySelector('.currentTable')
  if (currentTable.style.display == 'none') {
    currentTable.style.display = 'inline-block'
    hideList.style.display = 'inline-block'
  } else {
    currentTable.style.display = 'none'
  }
}

function hideTable() {
  const currentTable = document.querySelector('.currentTable')
  if (currentTable.style.display == 'inline-block') {
    currentTable.style.display = 'none'
    hideList.style.display = 'none'
  } else {
    currentTable.style.display = 'inline-block'
  }
}

