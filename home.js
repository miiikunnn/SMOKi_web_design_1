// PROTECT PAGE
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

// LOGOUT
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
});
