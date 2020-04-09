// * Event listener
// * Simple multiplication math, displays to the result
const page2Button = document.querySelector(".multiply");
const page2Result = document.querySelector(".calculation");


page2Button.addEventListener("click", () => {
  const Page2Num1 = document.querySelector(".num1");
  const Page2Num2 = document.querySelector(".num2")
  page2Result.value = Page2Num1.value * Page2Num2.value;
});