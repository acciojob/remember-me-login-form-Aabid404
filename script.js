//your JS code here. If required.
const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const form = document.getElementById("login-form");
    const existingBtn = document.getElementById("existing");

    // check if credentials exist in localStorage
    window.addEventListener("DOMContentLoaded", () => {
      const savedUser = localStorage.getItem("username");
      const savedPass = localStorage.getItem("password");

      if (savedUser && savedPass) {
        existingBtn.style.display = "block";
      }
    });

    // form submit handler
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        // save credentials
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        existingBtn.style.display = "block";
      } else {
        // remove credentials if any
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existingBtn.style.display = "none";
      }
    });

    // existing user login
    existingBtn.addEventListener("click", () => {
      const savedUser = localStorage.getItem("username");
      if (savedUser) {
        alert(`Logged in as ${savedUser}`);
      }
    }); 