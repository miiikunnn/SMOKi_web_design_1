document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorText = document.getElementById("error");

  const username = usernameInput.value;
  const password = passwordInput.value;

  // clear previous error states
  usernameInput.classList.remove("error");
  passwordInput.classList.remove("error");
  errorText.textContent = "";

  // FAKE credentials (CASE-SENSITIVE)
  const correctUsername = "SMOKi";
  const correctPassword = "1234";

  let hasError = false;

  if (username !== correctUsername) {
    usernameInput.classList.add("error");
    hasError = true;
  }

  if (password !== correctPassword) {
    passwordInput.classList.add("error");
    hasError = true;
  }

  if (hasError) {
    errorText.textContent = "Incorrect username or password";
    return;
  }

  // success
  localStorage.setItem("loggedIn", "true");
  window.location.href = "home.html";
});
