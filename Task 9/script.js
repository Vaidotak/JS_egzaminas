/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    if (this.budget >= 100000000) {
      return console.log(
        "Serialo biudžetas didesnis už leistiną 100000000 USD",
        true
      );
    } else {
      return console.log(
        "Serialo biudžetas mažesnis už leistiną 100000000 USD",
        false
      );
    }
  }
}

const series = new Movie("Lost", "J.J. Abrams", 1400000000);
series.wasExpensive();
console.log("Filmo biudžetas: ", series.budget, "USD");

