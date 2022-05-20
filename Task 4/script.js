/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((carsObject) => {
    createCarList(carsObject);
  });

function createCarList(carsObject) {
  let container = document.getElementById("output");
  carsObject.forEach((cars) => {
    let contentDiv = document.createElement("div");
    contentDiv.classList.add("myStyle");
    container.append(contentDiv);

    let brand = document.createElement("h3");
    brand.classList.add("brandName");
    brand.innerText = `Cars: ${cars.brand}`;
    contentDiv.appendChild(brand);

    let models = document.createElement("p");
    models.innerText = `Models: ${cars.models.join(", ")}`;
    contentDiv.appendChild(models);

    console.log(cars);
  });
}
