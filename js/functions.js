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
document.getElementById('myForm').addEventListener('submit', validateForm);

function validateForm(event) {
  // set name equal to name input value in form
  let name = document.forms["myForm"]["name"].value;

  if (name === "") {
    // prevent form refresh by default
    event.preventDefault();

    console.log("Name must be filled out.")

    alert("Name must be filled out.");

    return false;
  } else {
    return true;
  }
}