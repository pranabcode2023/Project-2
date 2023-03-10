// Open the form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// Close the form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



function submitFunction() {
  let name = document.form["myForm"]["name"].value;
  let email = document.form["myForm"]["email"].value;
  let message = document.form["myForm"]["message"].value;

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