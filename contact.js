// Open the form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// Close the form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function addEvents() {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", () => {
    submitFunction()
  } )
}

addEvents()
function submitFunction(e) {
  // e.preventDefault();
  // window.open("./submitConfirmation.html", "_self");
  console.log("submit ");
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let message = document.forms["myForm"]["message"].value;


  if (name == "") {
    alert("Please enter your name");
    return false;
  }

  if (email == "") {
    alert("Please enter your name");
    return false;
  }

  if (message == "") {
    alert("please write your message");
    return false;
  }

  alert("Thank you for your message.You will get replied shortly");
  return true;
}

