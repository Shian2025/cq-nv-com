// pass.js
const correctPassword = "admin123"; // 可修改
const btn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("errorMsg");
const passwordInput = document.getElementById("password");

btn.addEventListener("click", () => {
  if(passwordInput.value === correctPassword){
    window.location.href = "admin.html"; // 密碼正確 → 跳 admin.html
  } else {
    errorMsg.style.display = "block";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

passwordInput.addEventListener("keydown", e => {
  if(e.key === "Enter") btn.click();
});
