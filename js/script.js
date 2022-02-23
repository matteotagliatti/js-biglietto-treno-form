const generaButton = document.getElementById("genera");

generaButton.addEventListener("click", function () {
  const nameSurname = document.getElementById("nome-cognome").value;
  const kmToGo = document.getElementById("km").value;
  const age = document.getElementById("eta").value;

  let ticketCost = 0.27 * kmToGo;
  let message = "";

  if (age === "minorenne") {
    ticketCost = ticketCost - ticketCost * 0.17;
    message = "applicato 17% di sconto minorenni";
  } else if (age === "over") {
    ticketCost = ticketCost - ticketCost * 0.33;
    message = "applicato 33% di sconto over 65";
  }

  ticketCost = ticketCost.toFixed(2);

  document.getElementById("nome-passeggero").innerText = nameSurname;
  document.getElementById("costo-biglietto").innerText = ticketCost;
  document.getElementById("messaggio").innerText = message;

  document.getElementById("second-section").classList.remove("hidden");
  document.getElementById("second-section").classList.add("visible");
});
