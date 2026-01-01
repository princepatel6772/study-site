const ADMIN_ID = "admin";
const ADMIN_PASS = "1234";

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
