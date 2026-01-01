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

function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  if (!fileInput.files.length) return alert("Select file");

  const file = fileInput.files[0];
  const list = document.getElementById("fileList");

  const li = document.createElement("li");
  li.innerHTML = `
    ${file.name}
    <button onclick="download('${file.name}')">Download</button>
  `;
  list.appendChild(li);
}

function download(fileName) {
  let logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push({ user: currentUser, file: fileName });
  localStorage.setItem("logs", JSON.stringify(logs));
  alert("Download recorded (demo)");
}

