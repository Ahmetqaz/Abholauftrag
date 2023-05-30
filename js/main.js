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

let inputControl = (isEnabled = false) => {
  document.querySelectorAll("input").forEach((input) => {
    input.toggleAttribute("disabled", !isEnabled);
  });
  document.querySelectorAll("textarea").forEach((input) => {
    input.toggleAttribute("disabled", !isEnabled);
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
const addInput = (keyName, valueName, type) => {
  let inputsWrapper = document.querySelector(".contract-vehicle-body");
  let container = document.createElement("div");
  let keyNameLower = (keyName + "").toLowerCase();
  let valueNameLower = (valueName + "").toLowerCase();

  container.className = `container ${type % 2 !== 0 ? "_wide" : "_small"}`;
  container.innerHTML = `<h3 id="${keyNameLower}-key">${keyName}</h3>`;

  let input =
    type > 2
      ? document.createElement("textarea")
      : document.createElement("input");
  input.id = `${valueNameLower}-value`;
  input.value = valueName;

  container.appendChild(input);
  inputsWrapper.appendChild(container);
};
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

createCheckboxes(array);

const pageSections = [
  "pick-up-order",
  "pick-up-order-header",
  "pick-up-order-info",
  "pick-up-order-assessment",
  "pick-up-order-assessment-test-drive",
  "contract",
  "contract-header",
  "contract__body",
  "contract-purchase-price",
  "contract-vehicle-body",
  "contract-vehicle-list",
  "contractDetails",
  "contractDetails-header",
  "contractDetails__body",
  "contractDetails-signatures",
  "imageSection",
];
const pageTemplate = {
  all: {
    showAll: true,
    type: "A",
  },
  contract: {
    sections: [
      "contract",
      "contract-header",
      "contract__body",
      "contract-purchase-price",
      "contract-vehicle-body",
      "contract-vehicle-list",
      "contractDetails",
      "contractDetails-header",
      "contractDetails__body",
    ],
    type: "B",
  },
  contractSignatures: {
    sections: [
      "contract",
      "contract-header",
      "contract__body",
      "contract-purchase-price",
      "contract-vehicle-body",
      "contract-vehicle-list",
      "contractDetails",
      "contractDetails-header",
      "contractDetails__body",
      "contractDetails-signatures",
    ],
    type: "B",
  },
};

const toggleSections = ({
  showAll = false,
  sections: activeSections,
  type,
}) => {
  pageSections.forEach((section) => {
    if (showAll) document.getElementById(section).classList.remove("hidden");
    else
      document
        .getElementById(section)
        .classList.toggle("hidden", activeSections.indexOf(section) === -1);
  });
  createCheckboxes(array, type);
};

// setMwstState(true|false);
// setFieldData(filedArray);
// inputControl(true|false);
// addInputs('nachlackierung',['test1','test2','test3'])
// addInputs('unfallfrei',['test1','test2','test3'])
// addInputs('schäden',['test1','test2','test3'])
// toggleSections(pageTemplate.all);
// toggleSections(pageTemplate.contract);
// toggleSections(pageTemplate.contractSignatures);
// addInput("test", "test", 2);
// addInput("test", "test", 2);
// addInput("test", "test", 4);
// addInput("test", "test", 4 );
