/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("output").style.visibility = "hidden";

const inputValue = document.getElementById("search");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("output").style.visibility = "visible";
  const kG = inputValue.value;
  const output = document.getElementById("output");

  const poundsLb = document.createElement("div");
  poundsLb.innerHTML = Math.floor(kG) * 2.2046 + ` pounds`;
  output.appendChild(poundsLb);

  const gramKg = document.createElement("div");
  gramKg.innerHTML = Math.floor(kG) / 0.001 + ` grams`;
  output.appendChild(gramKg);

  const uncijosOz = document.createElement("div");
  uncijosOz.innerHTML = Math.floor(kG) * 35.274 + ` ounces`;
  output.appendChild(uncijosOz);
});

