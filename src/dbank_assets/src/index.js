import { dbank } from "../../declarations/dbank";

window.addEventListener("load", async () => {
  update();
})

document.querySelector("form").addEventListener("submit", async event => {
  event.preventDefault();

  const submitButton = event.target.querySelector('#submit-btn');

  const amountInput = document.getElementById('input-amount').value;
  const amountOutput = document.getElementById('withdrawal-amount').value;

  submitButton.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.topUp(parseInt(amountInput));
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withDraw(parseInt(amountOutput));
  }

  update();

  submitButton.removeAttribute("disabled");
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
})


export const update = async () => {
  const currentAmount = await dbank.checkBalance();

  document.getElementById("value").innerText = currentAmount;
};