document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;

  var nameRegex = /^[A-Za-z]+$/; // Regular expression for alphabetic characters only
  var emailRegex = /^\S+@\S+\.\S+$/; // Regular expression for valid email format

  if (!nameRegex.test(firstName)) {
    document.getElementById("firstName").classList.add("error");
    document.getElementById("firstName").focus();
    return false;
  }

  if (!nameRegex.test(lastName)) {
    document.getElementById("lastName").classList.add("error");
    document.getElementById("lastName").focus();
    return false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("email").classList.add("error");
    document.getElementById("email").focus();
    return false;
  }

  document.getElementById("welcomeMsg").innerHTML = "Welcome " + firstName + " " + lastName;
});
