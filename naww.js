// Login form validation
const loginForm = document.getElementById("login_form");
const loginErrorMessage = document.getElementById("loginErrorMessage");
const hardcodedEmail = "test@example.com";
const hardcodedPassword = "Password123";

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  let errors = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) errors.push("Email cannot be empty.");
  else if (!emailRegex.test(email)) errors.push("Please enter a valid email.");
  else if (email !== hardcodedEmail) errors.push("Incorrect email.");

  if (!password) errors.push("Password cannot be empty.");
  else if (password !== hardcodedPassword) errors.push("Incorrect password.");

  if (errors.length > 0) {
    loginErrorMessage.textContent = errors.join(" ");
    loginErrorMessage.classList.remove("d-none");
  } else {
    loginErrorMessage.classList.add("d-none");
    alert("Login successful!");
    // Process login...
  }
});

// Registration form validation
const registerForm = document.getElementById("register_form");
const registerErrorMessage = document.getElementById("registerErrorMessage");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const dob = document.getElementById("dob").value.trim();
  const tele = document.getElementById("tele").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const zip = document.getElementById("zip").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm_password").value.trim();

  let errors = [];

  const nameRegex = /^[a-zA-Z\s]{8,15}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const zipRegex = /^[0-9]{6}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.*\d).{8,}$/;

  if (!fname || !nameRegex.test(fname)) errors.push("First name must be between 8-15 characters.");
  if (!lname || !nameRegex.test(lname)) errors.push("Last name must be between 8-15 characters.");
  if (!dob) errors.push("Date of birth cannot be empty.");
  if (!tele || !phoneRegex.test(tele)) errors.push("Telephone must be a valid 10-digit number.");
  if (!address) errors.push("Address cannot be empty.");
  if (!city) errors.push("City cannot be empty.");
  if (!zip || !zipRegex.test(zip)) errors.push("Zip code must be a valid 6-digit number.");
  if (!email || !emailRegex.test(email)) errors.push("Please enter a valid email.");
  if (!password || !passwordRegex.test(password)) errors.push("Password must contain at least 8 characters, including uppercase, lowercase, and numbers.");
  if (password !== confirmPassword) errors.push("Passwords do not match.");

  if (errors.length > 0) {
    registerErrorMessage.textContent = errors.join(" ");
    registerErrorMessage.classList.remove("d-none");
  } else {
    registerErrorMessage.classList.add("d-none");
    alert("Registration successful!");
    // Process registration...
  }
})