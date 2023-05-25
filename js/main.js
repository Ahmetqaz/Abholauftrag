// data
let array = [
  "Start/Stopp-Automatik",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Totwinkel-Assistent",
  "Schiebedach",
  "ABS",
  "Start/Stopp-Automatik",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Totwinkel-Assistent",
  "Schiebedach",
  "ABS",
  "Start/Stopp-Automatik",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Totwinkel-Assistent",
  "Schiebedach",
  "ABS",
  "Start/Stopp-Automatik",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Totwinkel-Assistent",
  "Schiebedach",
  "ABS",
  "Start/Stopp-Automatik",
  "Abstandswarner",
  "Blendfreies Fernlicht",
  "Totwinkel-Assistent",
  "Schiebedach",
  "ABS",
];
let checkBoxes = document.querySelector("#checkBoxes");
let rowCounter = 0;
let rowCounterListener = 1;
let inputCounter = 0;
let variant = "B";
// Data render
array.forEach((element) => {
  if (variant === "A") {
    let input = document.createElement("div");
    input.classList.add("input");
    input.innerHTML = `
      <input  id="${inputCounter}" name="${rowCounter}" type="radio">
      <div class="circle"></div>
      <label for="${inputCounter}">
      ${element}
        </label>
   `;
    inputCounter += 1;
    if (rowCounterListener == 6) {
      rowCounter += 1;
      rowCounterListener = 0;
    }
    rowCounterListener += 1;
    checkBoxes.innerHTML += input.outerHTML;
  } else {
    let input = document.createElement("div");
    input.classList.add("input--text");
    let textarea = document.createElement("textarea");
    textarea.innerHTML = array;
    input.innerHTML = textarea.outerHTML;
    checkBoxes.innerHTML = input.outerHTML;
  }
});
// Input ebale/disable
let inputState = false;
let contract = document.getElementById("contract");
let contractInput = contract.querySelectorAll("input");
let contractTexts = contract.querySelectorAll("textarea");
let inputControl = () => {
  contractInput.forEach((input) => {
    if (inputState) {
      input.setAttribute("disabled", "");
    } else {
      input.removeAttribute("disabled");
    }
  });
  contractTexts.forEach((contractText) => {
    if (inputState) {
      contractText.setAttribute("disabled", "");
    } else {
      contractText.removeAttribute("disabled");
    }
  });
};
inputControl();

// Pop------------------------------------
if (inputState == false) {
  let pops = document.querySelectorAll(".pop");
  let popUp = document.querySelector(".popUp");
  let popUpItems = document.querySelectorAll(".popUpItem");
  pops.forEach((pop) => {
    let popDisbale = pop.querySelector("input");
    popDisbale.setAttribute("disabled", "");
    pop.addEventListener("click", () => {
      let popId = pop.getAttribute("id");
      let popClose = popUp.querySelector(".popUp__inner-close");
      popUp.classList.add("active");
      popUpItems.forEach((popUpItem) => {
        let popUpItem__id = popUpItem.getAttribute("data-pop");
        if (popId == popUpItem__id) {
          popUpItem.classList.add("active");
        } else {
          popUpItem.classList.remove("active");
        }
      });
      popClose.addEventListener("click", () => {
        popUp.classList.remove("active");
      });
    });
  });
}
