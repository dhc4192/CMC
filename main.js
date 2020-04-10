// * Variables
const selector = document.querySelector("#currencySelector");
const showResult = document.querySelector("#result");
const convert = document.querySelector("button");
const additionalInfo = document.querySelector("#addInfo");
const showTable = document.querySelector("#showList");
const hideTable = document.querySelector("#hideList");

// * API Link
const BASE_URL =
  "https://prime.exchangerate-api.com/v5/ea19256df9d432e21c8cfc0e/latest/USD";

// * Adds the API data
function addRates(response) {
  const conversionRates = response.data.conversion_rates;
  for (keys in conversionRates) {
    let option = document.createElement("option");
    option.text = keys;
    option.value = conversionRates[keys];
    selector.add(option, null);
  }
}

//* Async-Await
async function getRates() {
  const response = await axios.get(BASE_URL);
  addRates(response);
}
getRates();

// * Event listener function
// * Uses the API data and the user input to make the conversion
// * And displays to the results
convert.addEventListener("click", () => {
  const inputNumber = document.getElementById("inputNum").value;
  const internationalRates = selector.options[selector.selectedIndex].value;
  const conversion = inputNumber * internationalRates;
  showResult.value = conversion;
});

// * Function to make the table visible
showTable.addEventListener("click", () => {
  const currentTable = document.querySelector(".currentTable");
  if (currentTable.style.display == "none") {
    currentTable.style.display = "inline-block";
    hideList.style.display = "inline-block";
  } else {
    currentTable.style.display = "none";
    hideList.style.display = "none";
  }
});

// * Function to hide the table
hideTable.addEventListener("click", () => {
  const currentTable = document.querySelector(".currentTable");
  if (currentTable.style.display == "inline-block") {
    currentTable.style.display = "none";
    hideList.style.display = "none";
  } else {
    currentTable.style.display = "inline-block";
  }
});
