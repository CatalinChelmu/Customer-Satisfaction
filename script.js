// ==== Validare empty text ======

// ==== Validare telefon ======

// ==== Validare email ======
function validateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    return true;
  } else {
    alert("Intoduceti o adresa de email valida!");
    return false;
  }
}
// ==== Stocare local input======

document.getElementById("button").addEventListener("click", addToStorage);
document.getElementById("seeButton").addEventListener("click", viewStorage);
const clienti = JSON.parse(localStorage.getItem("tester1")) || {
  firstName: "none",
  lastName: "none",
  telefon: "none",
  data: "none",
  magazin: "none",
  mesaj: "none",
};
console.log(clienti);

function addToStorage() {
  let tempFirst = document.getElementById("firstName").value;
  let tempLast = document.getElementById("lastName").value;
  let tempTelefon = document.getElementById("telefon").value;
  let tempEmail = document.getElementById("email").value;
  let tempData = document.getElementById("data").value;
  let tempMagazin = document.getElementById("magazin").value;
  let tempMesaj = document.getElementById("areatext").value;
  let myObj = JSON.stringify({
    firstName: tempFirst,
    lastName: tempLast,
    telefon: tempTelefon,
    email: tempEmail,
    data: tempData,
    magazin: tempMagazin,
    mesaj: tempMesaj,
  });
  localStorage.setItem("tester1", myObj);
}

function viewStorage() {
  let tempHolder = JSON.parse(localStorage.getItem("tester1")) || clienti;
  console.log(tempHolder);
}
