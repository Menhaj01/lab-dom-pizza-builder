// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    // the forEach "exposes" each value of the nodeList (so oneMush is basicaly mushrooms[i])
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
  // wes ay arraylike because each value has an
  // const mushrooms = document.querySelectorAll(".mushroom"); // array like (indexes)
  //for (let i = 0; i < mushrooms.length; i++) {
  // if (state.mushrooms) {
  // mushrooms[i].style.visibility = "visible";
  //} else {
  //   mushrooms[i].style.visibility = "hidden";
  //  }
  // }
}
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((onePepp) => {
    if (state.greenPeppers) {
      onePepp.style.visibility = "visible";
    } else {
      onePepp.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = "hidden";
    } else {
      sauce.style.visibility = "visible";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust-gluten-free").forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = "hidden";
    } else {
      crust.style.visibility = "visible";
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  if (state.pepperonni) {
    document.querySelector(".btn.btn-pepperoni").classList.add("active");
  } else {
    document.querySelector(".btn.btn-pepperoni").classList.remove("active");
  }
  if (state.mushrooms) {
    document.querySelector(".btn.btn-mushrooms").classList.add("active");
  } else {
    document.querySelector(".btn.btn-mushrooms").classList.remove("active");
  }
  if (state.greenPeppers) {
    document.querySelector(".btn.btn-green-peppers").classList.add("active");
  } else {
    document.querySelector(".btn.btn-green-peppers").classList.remove("active");
  }
  if (state.whiteSauce) {
    document.querySelector(".btn.btn-sauce").classList.add("active");
  } else {
    document.querySelector(".btn.btn-sauce").classList.remove("active");
  }
  if (state.glutenFreeCrust) {
    document.querySelector(".btn.btn-crust").classList.add("active");
  } else {
    document.querySelector(".btn.btn-crust").classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10;
  let ul = document.querySelector(".panel.price ul");
  let str = "";
  if (state.pepperoni) {
    str = str + "<li>$1 pepperoni</li>";
    total += 1;
  }
  if (state.mushrooms) {
    str = str + "<li>1$ mushrooms</li>";
    total += 1;
  }
  if (state.greenPeppers) {
    str = str + "<li>$1 green peppers</li>";
    total += 1;
  }
  if (state.whiteSauce) {
    str = str + "<li>3$ white sauce</li>";
    total += 3;
  }

  if (state.glutenFreeCrust) {
    str = str + "<li>5$ gluten-free crust</li>";
    total += 5;
  }
  ul.innerHTML = str;
  document.querySelector(".panel.price strong").innerHTML = "$" + total;
  return total;
}

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
