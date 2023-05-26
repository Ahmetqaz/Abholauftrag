// data
let testJSON =
  '[ "Start/Stopp-Automatik","Abstandswarner", "Blendfreies Fernlicht", "Totwinkel-Assistent","Schiebedach", "ABS","Start/Stopp-Automatik", "Abstandswarner","Blendfreies Fernlicht","Totwinkel-Assistent","Schiebedach","ABS", "Start/Stopp-Automatik","Abstandswarner", "Blendfreies Fernlicht", "Totwinkel-Assistent","Schiebedach","ABS","Start/Stopp-Automatik","Abstandswarner","Blendfreies Fernlicht","Totwinkel-Assistent","Schiebedach","ABS","Start/Stopp-Automatik","Abstandswarner","Blendfreies Fernlicht","Totwinkel-Assistent","Schiebedach","ABS"]';
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

const createCheckboxes = (data, variant = "A") => {
  checkBoxes.innerHTML = "";
  const array = typeof data === "string" ? JSON.parse(data) : data;
  console.log("array", array);
  if (variant === "A") {
    array.forEach((element, index) => {
      let input = document.createElement("div");
      input.classList.add("input");
      input.innerHTML = `
      <input  id="${index}" name="${parseInt(index / 6)}" type="radio">
      <div class="circle"></div>
      <label for="${index}">
      ${element}
        </label>
   `;
      checkBoxes.appendChild(input);
    });
  } else {
    let input = document.createElement("div");
    input.classList.add("input--text");
    let textarea = document.createElement("textarea");
    textarea.innerHTML = array.join(", ");
    input.innerHTML = textarea.outerHTML;
    checkBoxes.appendChild(input);
  }
};

// Input ebale/disable
let contract = document.getElementById("contract");
let contractInput = contract.querySelectorAll("input");
let contractTexts = contract.querySelectorAll("textarea");
let inputControl = (isEnabled = false) => {
  contractInput.forEach((input) => {
    if (!isEnabled) {
      input.setAttribute("disabled", "");
    } else {
      input.removeAttribute("disabled");
    }
  });
  contractTexts.forEach((contractText) => {
    if (!isEnabled) {
      contractText.setAttribute("disabled", "");
    } else {
      contractText.removeAttribute("disabled");
    }
  });
};
let inputState = false;
const addInputs = (field, array) => {
  const container = document.getElementById(field);
  let inputs = container.querySelector(".container-group");
  inputs.innerHTML = "";
  array.forEach((element) => {
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.value = element;
    newInput.id = element;
    inputs.appendChild(newInput);
  });
};

// // Pop------------------------------------
// if (inputState == false) {
//   let pops = document.querySelectorAll(".pop");
//   let popUp = document.querySelector(".popUp");
//   let popUpItems = document.querySelectorAll(".popUpItem");
//   pops.forEach((pop) => {
//     let popDisbale = pop.querySelector("input");
//     popDisbale.setAttribute("disabled", "");
//     pop.addEventListener("click", () => {
//       let popId = pop.getAttribute("id");
//       let popClose = popUp.querySelector(".popUp__inner-close");
//       popUp.classList.add("active");
//       popUpItems.forEach((popUpItem) => {
//         let popUpItem__id = popUpItem.getAttribute("data-pop");
//         if (popId == popUpItem__id) {
//           popUpItem.classList.add("active");
//         } else {
//           popUpItem.classList.remove("active");
//         }
//       });
//       popClose.addEventListener("click", () => {
//         popUp.classList.remove("active");
//       });
//     });
//   });
// }

// Set new filed Data
const filedArray = ["field1", "field2", "field3", "field4"];
const setFieldData = (filedArray, filedState = true) => {
  let filedData = document.querySelector(".contract-vehicle-body");
  if (filedState) {
    filedArray.forEach((element) => {
      let container = document.createElement("div");
      container.classList.add("container");
      container.innerHTML = `<h3 for="contract-vehicle-damages-options">${element}</h3><input>`;
      filedData.appendChild(container);
    });
  }
};

// Hide mwst
const setMwstState = (mwstState = true) => {
  let mwst = document.querySelector("#mwst");
  if (mwstState) {
    mwst.classList.add("active");
  } else mwst.classList.remove("active");
};

// setMwstState(true|false);
// setFieldData(filedArray);
// inputControl(true|false);
// addInputs('nachlackierung',['test1','test2','test3'])
// addInputs('unfallfrei',['test1','test2','test3'])
// addInputs('schäden',['test1','test2','test3'])
createCheckboxes(array);
