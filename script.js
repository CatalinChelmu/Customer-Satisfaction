// ==== Validare empty text ======

// ==== Validare telefon ======
function validateTelefon() {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(document.getElementById("telefon").value);
}

// ==== Validare email ======
function validateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex:incepe cu(^\) si se termina cu ($/) ce contine orice cuvânt repetat sau nu (\w+), poate avea un punct sau un cratimă după cuvântul respectiv([\.-]?\w+)*, după care trebuie să aibă un @(\w+), poate avea un punct sau un cratimă după cuvântul respectiv([\.-]?\w+)*, după care trebuie să aibă un punct(\.\w{2,3})+$/;
  return mailformat.test(document.getElementById("email").value);
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
  if (!validateTelefon()) {
    document.getElementById("phone_error").classList.remove("hidden");
  } else {
    document.getElementById("phone_error").classList.add("hidden");
    alert("Telefon valid");
  }

  let tempEmail = document.getElementById("email").value;
  if (!validateEmail()) {
    document.getElementById("email_error").classList.remove("hidden");
  } else {
    document.getElementById("email_error").classList.add("hidden");
    alert("Email valid");
  }

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
  event.preventDefault();
}

function viewStorage() {
  let tempHolder = JSON.parse(localStorage.getItem("tester1")) || clienti;
  console.log(tempHolder);
}
