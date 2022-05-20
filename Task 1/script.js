/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const inputValue = document.getElementById("search");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const kG = inputValue.value;
  if (!Math.floor(kG)) {
    alert("Ane? Reikia įvesti skaičių");
  } else {
    const output = document.getElementById("output");
    clearOutput("output");
    output.classList.add("output");

    const poundsLb = document.createElement("div");
    poundsLb.innerHTML = Math.floor(kG) * 2.2046 + ` pounds`;
    output.appendChild(poundsLb);

    const gramKg = document.createElement("div");
    gramKg.innerHTML = Math.floor(kG) / 0.001 + ` grams`;
    output.appendChild(gramKg);

    const uncijosOz = document.createElement("div");
    uncijosOz.innerHTML = Math.floor(kG) * 35.274 + ` ounces`;
    output.appendChild(uncijosOz);

    // Googlinau, neradau, tai pats išmąsčiau! Didžiuojuosi savimi :)
    let varDiv = [poundsLb, gramKg, uncijosOz];
    varDiv.forEach((element) => element.classList.add("context-element"));

    function clearOutput(output) {
      document.getElementById("output").innerHTML = "";
    }
  }
});
