const navItems = document.querySelectorAll(".nav-item[data-section]");
const sections = document.querySelectorAll(".page-section");
const toast = document.getElementById("toast");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

function showSection(id){
  sections.forEach(s => s.classList.toggle("active-section", s.id === id));
  navItems.forEach(n => n.classList.toggle("active", n.dataset.section === id));
  window.scrollTo({top:0, behavior:"smooth"});
}
navItems.forEach(item => item.addEventListener("click", () => showSection(item.dataset.section)));

document.querySelectorAll("[data-go]").forEach(btn => btn.addEventListener("click", () => showSection(btn.dataset.go)));

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function openModal(message){
  modalText.textContent = message;
  modal.classList.add("open");
}
function closeModal(){ modal.classList.remove("open"); }

document.getElementById("inviteBtn").addEventListener("click", () => openModal("En la versión completa podrás generar un enlace de invitación y añadir amigos al viaje desde el backend."));
document.getElementById("inviteBtn2").addEventListener("click", () => openModal("Aquí se podrá buscar un usuario, enviarle una invitación y controlar quién forma parte del viaje."));
document.getElementById("addActivity").addEventListener("click", () => openModal("Formulario para añadir una actividad al itinerario. En la versión final se guardará mediante la API."));
document.getElementById("addExpense").addEventListener("click", () => openModal("Formulario para registrar quién ha pagado, cuánto y en qué concepto."));
document.getElementById("newVote").addEventListener("click", () => openModal("Podrás crear una pregunta, añadir opciones y establecer una fecha límite para votar."));
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalOk").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });

document.querySelectorAll(".vote-now").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "✓ Voto registrado";
    btn.style.background = "#e5f9ef";
    btn.style.color = "#29946c";
    showToast("¡Tu voto se ha registrado!");
  });
});

document.querySelectorAll(".day-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".day-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    showToast(`Mostrando planes del ${tab.textContent}`);
  });
});

document.querySelectorAll(".coming-soon").forEach(item => {
  item.addEventListener("click", () => showToast("🚀 Esta función llegará próximamente"));
});

document.querySelector(".brand").addEventListener("click", () => showSection("resumen"));
