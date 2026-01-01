const ADMIN_ID = "9313373707";
const ADMIN_PASS = "Prince@6772#";

document.getElementById("adminIcon").onclick = () => {
  document.getElementById("adminLogin").classList.toggle("hidden");
};

function adminLogin() {
  const id = document.getElementById("adminId").value;
  const pass = document.getElementById("adminPass").value;

  if (id === ADMIN_ID && pass === ADMIN_PASS) {
    document.getElementById("adminLogin").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    loadLogs();
  } else {
    alert("Wrong admin credentials");
  }
}

function loadLogs() {
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  const ul = document.getElementById("logList");
  ul.innerHTML = "";

  logs.forEach(l => {
    const li = document.createElement("li");
    li.textContent = `${l.user} → ${l.file}`;
    ul.appendChild(li);
  });
}

9
function adminUpload() {
  const fileInput = document.getElementById("adminFile");
  if (!fileInput.files.length) {
    alert("Select a file");
    return;
  }

  const file = fileInput.files[0];

  const list = document.getElementById("fileList");
  const li = document.createElement("li");
  li.innerHTML = `
    ${file.name}
    <button onclick="download('${file.name}')">Download</button>
  `;
  list.appendChild(li);

  alert("File added (Admin only)");
}

