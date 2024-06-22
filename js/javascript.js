let acc = document.getElementsByClassName("accordion");

// Accordion functionality
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;

    this.classList.toggle("active");

    if (panel.style.display === "block") {
      panel.style.display = "none";

      return;
    }

    panel.style.display = "block";
  });
}

// Form validation
function validateForm(event) {
  let name = document.forms["myForm"]["name"].value;

  name = name.trim();

  if (name === "") {
    event.preventDefault();
    alert("Name must be filled out.");

    return false;
  }

  return true;
}

document.getElementById("myForm").addEventListener("submit", validateForm);
