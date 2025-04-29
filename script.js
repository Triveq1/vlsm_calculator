const users = new Map([
    ["user1", "pass123"],
    ["admin", "admin123"],
    ["test", "test123"]
  ]);
  
  const loginForm = document.getElementById("loginForm");
  const errorText = document.getElementById("error");
  const secretMessage = document.getElementById("secretMessage");
  
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    if (users.has(username) && users.get(username) === password) {
      errorText.textContent = "";
      loginForm.style.display = "none";
      secretMessage.classList.remove("hidden");
    } else {
      errorText.textContent = "Invalid username or password.";
    }
  });