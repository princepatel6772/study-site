alert("app.js loaded");

let currentUser = "";

function login() {
  const name = document.getElementById("username").value.trim();
  if (!name) return alert("Name required");

  currentUser = name;
  document.getElementById("userLabel").innerText = name;
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("mainBox").classList.remove("hidden");
}


function download(fileName) {
  let logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push({ user: currentUser, file: fileName });
  localStorage.setItem("logs", JSON.stringify(logs));
  alert("Download recorded (demo)");
}


