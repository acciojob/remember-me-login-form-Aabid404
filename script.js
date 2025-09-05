//your JS code here. If required.
// Get references to elements
const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check if credentials exist in localStorage
window.onload = () => {
  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "block"; // Show existing user button
  }
};

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form reload

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) return; // Safety check

  // Show login alert
  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block";
  } else {
    // Remove stored credentials if unchecked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none";
  }
});

// Handle existing user login
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  }
});
