const navItems = document.querySelectorAll(".nav-item[data-section]");
const sections = document.querySelectorAll(".page-section");
const toast = document.getElementById("toast");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalTitle = document.getElementById("modalTitle");
const modalIcon = document.getElementById("modalIcon");
const tripForm = document.getElementById("tripForm");
const tripSelector = document.getElementById("tripSelector");
const storedUser = JSON.parse(sessionStorage.getItem("triplyUser") || "null");
let trips = JSON.parse(sessionStorage.getItem("triplyTrips") || "[]");

if (!storedUser) window.location.href = "login.html";

if (storedUser) {
  document.getElementById("userName").textContent = storedUser.name;
  document.getElementById("userAvatar").textContent = storedUser.name.split(" ").map(word => word[0]).join("").slice(0, 2).toUpperCase();
}

function renderTrips() {
  tripSelector.innerHTML = "";
  trips.forEach(trip => {
    const option = document.createElement("option");
    option.value = trip.id;
    option.textContent = `${trip.emoji} ${trip.name}`;
    tripSelector.appendChild(option);
  });
  const selectedTrip = sessionStorage.getItem("triplySelectedTrip");
  if (trips.length) updateTrip(selectedTrip && trips.some(trip => trip.id === selectedTrip) ? selectedTrip : trips[0].id);
  document.body.classList.toggle("no-trip", trips.length === 0);
}

if (tripSelector) {
  renderTrips();
  tripSelector.addEventListener("change", () => {
    sessionStorage.setItem("triplySelectedTrip", tripSelector.value);
    updateTrip(tripSelector.value);
    showToast("Viaje cambiado");
  });
}

function updateTrip(id) {
  const trip = trips.find(item => item.id === id) || trips[0];
  if (!trip) return;
  document.getElementById("tripHeading").textContent = `¡Nos vamos a ${trip.name}! ${trip.emoji}`;
  document.getElementById("tripName").textContent = trip.name;
  document.getElementById("tripDetails").textContent = `${trip.dates} · ${trip.travelers} viajeros`;
  document.body.classList.remove("no-trip");
}

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
  tripForm.classList.remove("visible");
  document.getElementById("modalOk").style.display = "inline-block";
  modalTitle.textContent = "Función de demo";
  modalIcon.textContent = "🚀";
  modalText.textContent = message;
  modal.classList.add("open");
}
function closeModal(){ modal.classList.remove("open"); }

function openTripForm() {
  modalTitle.textContent = trips.length ? "Crea otro viaje" : "Crea tu primer viaje";
  modalIcon.textContent = "🧭";
  modalText.textContent = "Cada viaje tendrá su propio itinerario, gastos y votaciones.";
  tripForm.classList.add("visible");
  document.getElementById("modalOk").style.display = "none";
  modal.classList.add("open");
  document.getElementById("tripInputName").focus();
}

document.getElementById("inviteBtn").addEventListener("click", () => openModal("En la versión completa podrás generar un enlace de invitación y añadir amigos al viaje desde el backend."));
document.getElementById("inviteBtn2").addEventListener("click", () => openModal("Aquí se podrá buscar un usuario, enviarle una invitación y controlar quién forma parte del viaje."));
document.getElementById("addActivity").addEventListener("click", () => openModal("Formulario para añadir una actividad al itinerario. En la versión final se guardará mediante la API."));
document.getElementById("addExpense").addEventListener("click", () => openModal("Formulario para registrar quién ha pagado, cuánto y en qué concepto."));
document.getElementById("newVote").addEventListener("click", () => openModal("Podrás crear una pregunta, añadir opciones y establecer una fecha límite para votar."));
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("modalOk").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.getElementById("newTripBtn")?.addEventListener("click", openTripForm);
document.getElementById("emptyCreateTrip")?.addEventListener("click", openTripForm);
document.getElementById("logoutBtn")?.addEventListener("click", () => {
  sessionStorage.clear();
  window.location.href = "login.html";
});

tripForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("tripInputName").value.trim();
  const dates = document.getElementById("tripInputDates").value.trim();
  const travelers = Number(document.getElementById("tripInputTravelers").value);
  const trip = { id: `${Date.now()}`, name, dates, travelers, emoji: "✈️" };
  trips.push(trip);
  sessionStorage.setItem("triplyTrips", JSON.stringify(trips));
  sessionStorage.setItem("triplySelectedTrip", trip.id);
  renderTrips();
  tripSelector.value = trip.id;
  updateTrip(trip.id);
  tripForm.reset();
  closeModal();
  showToast("Viaje creado en esta sesión");
});

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
