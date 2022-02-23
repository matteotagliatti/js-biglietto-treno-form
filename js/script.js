const generaButton = document.getElementById("genera");
const annullaButton = document.getElementById("annulla");

generaButton.addEventListener("click", function () {
  const nameSurname = document.getElementById("nome-cognome").value;
  const kmToGo = document.getElementById("km").value;
  const age = document.getElementById("eta").value;

  if (nameSurname === "" || kmToGo === "") {
    alert("Compila correttamente i campi Nome Cognome e Km da percorrere!");
    throw new Error("Campi da compilare");
  }

  let ticketCost = 0.27 * kmToGo;
  let message = "";
  let ticketType = "Biglietto standard";

  if (age === "minorenne") {
    ticketCost = ticketCost - ticketCost * 0.17;
    message = "applicato 17% di sconto minorenni";
    ticketType = "Biglietto scontato";
  } else if (age === "over") {
    ticketCost = ticketCost - ticketCost * 0.33;
    message = "applicato 33% di sconto over 65";
    ticketType = "Biglietto scontato";
  }

  ticketCost = ticketCost.toFixed(2);

  /* Random carriage */
  const carriage = Math.floor(Math.random() * 9 + 1);

  /* Random CP Code */
  const cpCode = Math.floor(Math.random() * 999 + 1);

  document.getElementById("nome-passeggero").innerText = nameSurname;
  document.getElementById("costo-biglietto").innerText = ticketCost;
  document.getElementById("messaggio").innerText = message;
  document.getElementById("carrozza").innerText = carriage;
  document.getElementById("codice-cp").innerText = "99" + cpCode;
  document.getElementById("biglietto").innerText = ticketType;

  document.getElementById("second-section").classList.remove("hidden");
  document.getElementById("second-section").classList.add("visible");
});

annullaButton.addEventListener("click", function () {
  document.getElementById("nome-cognome").value = "";
  document.getElementById("km").value = "";

  document.getElementById("second-section").classList.remove("visible");
  document.getElementById("second-section").classList.add("hidden");
});
