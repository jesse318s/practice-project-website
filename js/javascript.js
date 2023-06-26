"use strict";

// accordion
let acc = document.getElementsByClassName("accordion");

// accordion functionality
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    // Toggle between hiding and showing the active panel
    let panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// form validation
document.getElementById("myForm").addEventListener("submit", validateForm);

export default function validateForm(event) {
  // set name equal to name input value in form
  let name = document.forms["myForm"]["name"].value;

  // remove unnecessary whitespace from name input value
  name = name.trim();

  if (name === "") {
    // prevent form submission and page refresh
    event.preventDefault();

    // log failed name input validation
    console.log("Name must be filled out.");

    // alert user of failed name input validation
    alert("Name must be filled out.");

    return false;
  } else {
    return true;
  }
}
