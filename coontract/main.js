// data
window.onload = function () {
  window.scrollTo(0, 0);
  calculatePrice();
};

var array = [];

const setArray = (inputData = "") => {
  try {
    if (typeof inputData !== "string") {
      throw new Error("Ungültiger Eingabetyp. Es wird ein String erwartet.");
    }

    // Wenn der String am Ende mit ", " oder "," endet
    if (inputData.endsWith(", ") || inputData.endsWith(",")) {
      inputData = inputData.trim().slice(0, -1);
    }

    array = inputData.split(/\s*,\s*/);
  } catch (error) {
    console.error(
      "Fehler beim Umwandeln des Strings in ein Array:",
      error.message
    );
  }
};


let checkBoxes = document.querySelector("#checkBoxes");

const createCheckboxes = (data, variant = "A") => {
  checkBoxes.innerHTML = "";
  const array = typeof data === "string" ? JSON.parse(data) : data;
  //console.log("array", array);
  //Array muss !=0 sein sonnst Probleme beim drucken
  if (variant === "A" && array.length !== 0) {
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
    textarea.id = "contract-vehicle-details-options-value";
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
const addInput = (keyName, type) => {
  let inputsWrapper = document.querySelector(".contract-vehicle-body");
  let container = document.createElement("div");
  let idNameIdentifierGroup = "contract-vehicle-";
  //let keyNameLower = (idNameIdentifierGroup + keyName + "").toLowerCase();
  let keyNameLower = idNameIdentifierGroup + keyName + "";
  //let valueNameLower = (valueName + "").toLowerCase();

  /*if(elementExists(keyNameLower + "-value")){
	console.log("Element already exist!");
 	return false;
 }*/

  container.className = `container ${type % 2 !== 0 ? "_wide" : "_small"}`;
  container.innerHTML = `<h3 id="${keyNameLower}-key">${keyName}</h3>`;

  let input =
    type > 2
      ? document.createElement("textarea")
      : document.createElement("input");
  input.id = `${keyNameLower}-valueTemp`;
  //input.value = valueName;

  container.appendChild(input);
  inputsWrapper.appendChild(container);
  return true;
};
const clearAll = () => {
  document.querySelectorAll(".js-new-item").forEach((item) => item.remove());
  document.querySelectorAll("input").forEach((item) => {
    item.value = "";
  });
  document.querySelectorAll("textarea").forEach((textarea) => {
    textarea.value = "";
    textarea.innerText = "";
  });
  document.querySelectorAll("checkbox").forEach((checkbox) => {
    checkbox.checked = false;
  });
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
    calculatePrice();
  } else mwst.classList.remove("active");
};

//createCheckboxes(array);

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
const resizeTextArea = (textarea) => {
  textarea.style.height = "auto !important";
  textarea.style.minHeight = "unset";
  if (textarea.scrollHeight > parseInt(getComputedStyle(textarea).height))
    textarea.style.height = `${textarea.scrollHeight + 8}px`;
};
const resetTexts = () => {
  document.querySelectorAll(".js-resize").forEach(resizeTextArea);
};
const resetPagination = () => {
  let pageCounter = 1;
  document.querySelectorAll(".pagination").forEach((item) => {
    const parent = item.parentElement;
    if (parent.classList.contains("hidden")) return;
    item.innerHTML = pageCounter;
    pageCounter++;
  });
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
  resetPagination();
};
resetTexts();
const toggleRailConnectionSection = (toggle = true) => {
  document.getElementById("imageSection").classList.toggle("hidden", toggle);
};

function getCleanedValue(id) {
    var value = document.getElementById(id).value;
    var cleanedValue = value.replace(/\D/g, '');
    return Number(cleanedValue);
}

const calculatePrice = () => {
  var price = getCleanedValue("contract-purchase-price-value");
  
  var taxFree = 0.0;
  var tax = 0.0;

  if (price !== 0) {
    taxFree = price / 1.19;
    tax = price - taxFree;
  }
  document.getElementById("contract-purchase-tax-value").innerText =
    tax.toFixed(2);
  document.getElementById("contract-purchase-taxfree-value").innerText =
    taxFree.toFixed(2);
};

window.onbeforeprint = () => {
  //console.log("onbeforeprint");

  document.querySelectorAll("textarea").forEach((textarea) => {
    const div = document.createElement("div");
    div.className = "textareaPlaceholder";
    const p = document.createElement("p");
    textarea.style.display = "none";
    p.innerText = textarea.value.trim();

    div.appendChild(p);
    textarea.insertAdjacentElement("afterend", div);
  });
};
window.onafterprint = () => {
  //console.log("onafterprint");
  document
    .querySelectorAll("textarea")
    .forEach((textarea) => (textarea.style = ""));
  document
    .querySelectorAll(".textareaPlaceholder")
    .forEach((textarea) => textarea.remove());
};

//Online-Assistent
const setSignatureDatePlace = () => {
  const getValue = (id) => document.getElementById(id).value;
  const formatLocationAndDate = (location, date) =>
    `Datum und Ort: ${date}, ${location}`;

  const sellerLocation = getValue("contract-seller-location-value");
  const buyerLocation = getValue("contract-buyer-location-value");

  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Da Monate von 0 bis 11 gezählt werden, fügen wir 1 hinzu.
  const year = now.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  document.getElementById(
    "contract-signatures-seller-date-and-place-value"
  ).innerText = formatLocationAndDate(sellerLocation, formattedDate);
  document.getElementById(
    "contract-signatures-buyer-date-and-place-value"
  ).innerText = formatLocationAndDate(buyerLocation, formattedDate);
};

const setCarRegistration = (value) => {
	const yesButton = document.getElementById('contract-vehicle-registered-yes-value');
	const noButton = document.getElementById('contract-vehicle-registered-no-value');

	if (value === 'yes' || value === 'Ja') {
		yesButton.checked = true;
		noButton.checked = false;
	} else if (value === 'no' || value === 'Nein') {
		yesButton.checked = false;
		noButton.checked = true;
	} else {
		// Default behaviour for 'unknown' or other values
		yesButton.checked = false;
		noButton.checked = false;
	}
};

const setPaymentMethod = (value) => {
	const transferButton = document.getElementById('contract-vehicle-payment-method-transfer-value');
	const cashButton = document.getElementById('contract-vehicle-payment-method-cash-value');

	if (value === 'transfer' || value === 'Überweisung' || value === 'Echtzeitüberweisung') {
		transferButton.checked = true;
		cashButton.checked = false;
	} else if (value === 'cash' || value === 'Bargeld') {
		transferButton.checked = false;
		cashButton.checked = true;
	} else {
		// Default behaviour for 'unknown' or other values
		transferButton.checked = false;
		cashButton.checked = false;
	}
};
