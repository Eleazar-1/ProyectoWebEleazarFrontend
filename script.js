(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // --- Sistema de Traducciones (i18n) ---
  const i18nData = {
    es: {
      role: "Organizador",
      myTrips: "MIS VIAJES",
      newTrip: "Nuevo viaje",
      navMyTrip: "MI VIAJE",
      navHome: "Resumen",
      navItin: "Itinerario",
      navExp: "Gastos",
      navVotes: "Votaciones",
      navMap: "Mapa",
      navBook: "Reservas",
      navOther: "OTROS",
      tipTitle: "Consejo viajero",
      tipText: "Dejad un pequeño margen para gastos inesperados.",
      logout: "Cerrar sesión",
      eyebrow: "TU PRÓXIMA AVENTURA",
      invite: "Invitar amigos",
      emptyKicker: "TU ESPACIO DE VIAJES",
      emptyTitle: "Tu próxima aventura empieza aquí",
      emptyText: "Aún no tienes viajes creados. Diseña el primero y empieza a organizarlo con tu grupo.",
      emptyCta: "Crear mi primer viaje",
      pillDays: "4 DÍAS DE AVENTURA",
      progressLabel: "Preparación del viaje",
      statNextPlan: "Próximo plan",
      none: "Nada previsto",
      statPerPerson: "Gasto por persona",
      statOpenVotes: "Votaciones abiertas",
      statOpenVotesNone: "Sin votaciones",
      planKicker: "PLAN DEL VIAJE",
      upcomingDays: "Próximos días",
      seeAll: "Ver todo",
      itinEmpty: "Aún no hay actividades planificadas. Añade la primera desde Itinerario.",
      teamKicker: "EL EQUIPO",
      travelersTitle: "Los viajeros",
      peopleEmpty: "Todavía no se ha unido nadie. Invita a tu grupo.",
      addTraveler: "Añadir viajero",
      decideKicker: "DECIDID ENTRE TODOS",
      voteBtn: "Votar",
      orgEyebrow: "ORGANIZACIÓN",
      itinSub: "Todo lo que tenéis planeado, día por día.",
      addActivityBtn: "Añadir actividad",
      scheduleEmpty: "Todavía no hay actividades para este día.",
      moneyEyebrow: "DINERO",
      expSub: "Controlad el presupuesto sin discusiones.",
      addExpenseBtn: "Añadir gasto",
      budgetTotal: "Presupuesto total",
      perPerson: "Por persona",
      remaining: "Queda",
      movementsKicker: "MOVIMIENTOS",
      latestExpenses: "Últimos gastos",
      expenseEmpty: "Todavía no hay gastos registrados.",
      decEyebrow: "DECISIONES",
      votesSub: "Porque ponerse de acuerdo también forma parte del viaje.",
      newVoteBtn: "Nueva votación",
      votesEmpty: "No hay votaciones todavía. Crea la primera y decid en grupo.",
      geoEyebrow: "GEOGRAFÍA",
      mapSub: "Vuestra ruta, de un vistazo.",
      mapScale: "Ruta aproximada",
      resEyebrow: "TU TRIPLY",
      bookSub: "Todo lo confirmado para vuestro viaje, en un solo lugar.",
      statusConfirmed: "CONFIRMADA",
      statusPending: "PENDIENTE",
      bkStayDates: "Fechas",
      bkGuests: "Huéspedes",
      bkPrice: "Precio",
      bkCode: "Ver código de confirmación",
      bkFlightWhen: "Salida",
      bkPax: "Pasajeros",
      bkPickup: "Recogida",
      bkDropoff: "Devolución",
      bkWhen: "Cuándo",
      bkPeople: "Comensales",
      bkPerPerson: "pers",
      bkConfirm: "Confirmar asistencia",
      fTripName: "Nombre del viaje",
      fTripDates: "Fechas",
      fTripTravelers: "Número de viajeros",
      createTripBtn: "Crear viaje",
      okBtn: "¡Entendido!",
      editProfile: "Editar perfil",
      fProfileName: "Nombre de usuario",
      fAvatarType: "Icono o Estilo de Avatar",
      saveProfileBtn: "Guardar cambios"
    },
    en: {
      role: "Organizer",
      myTrips: "MY TRIPS",
      newTrip: "New trip",
      navMyTrip: "MY TRIP",
      navHome: "Overview",
      navItin: "Itinerary",
      navExp: "Expenses",
      navVotes: "Polls",
      navMap: "Map",
      navBook: "Bookings",
      navOther: "OTHER",
      tipTitle: "Traveler tip",
      tipText: "Keep a small margin for unexpected expenses.",
      logout: "Log out",
      eyebrow: "YOUR NEXT ADVENTURE",
      invite: "Invite friends",
      emptyKicker: "YOUR TRAVEL SPACE",
      emptyTitle: "Your next adventure starts here",
      emptyText: "No trips created yet. Design your first and start organizing with your group.",
      emptyCta: "Create my first trip",
      pillDays: "4 DAYS ADVENTURE",
      progressLabel: "Trip preparation",
      statNextPlan: "Next activity",
      none: "Nothing planned",
      statPerPerson: "Cost per person",
      statOpenVotes: "Active polls",
      statOpenVotesNone: "No polls",
      planKicker: "TRIP PLAN",
      upcomingDays: "Upcoming days",
      seeAll: "See all",
      itinEmpty: "No activities planned yet. Add the first one in Itinerary.",
      teamKicker: "THE TEAM",
      travelersTitle: "Travelers",
      peopleEmpty: "No one has joined yet. Invite your group.",
      addTraveler: "Add traveler",
      decideKicker: "DECIDE TOGETHER",
      voteBtn: "Vote",
      orgEyebrow: "ORGANIZATION",
      itinSub: "Everything planned day by day.",
      addActivityBtn: "Add activity",
      scheduleEmpty: "No activities for this day yet.",
      moneyEyebrow: "MONEY",
      expSub: "Manage budget without discussions.",
      addExpenseBtn: "Add expense",
      budgetTotal: "Total budget",
      perPerson: "Per person",
      remaining: "Remaining",
      movementsKicker: "TRANSACTIONS",
      latestExpenses: "Recent expenses",
      expenseEmpty: "No expenses recorded yet.",
      decEyebrow: "DECISIONS",
      votesSub: "Reaching agreements is part of the journey.",
      newVoteBtn: "New poll",
      votesEmpty: "No active polls. Create the first one!",
      geoEyebrow: "GEOGRAPHY",
      mapSub: "Your route at a glance.",
      mapScale: "Approximate route",
      resEyebrow: "YOUR TRIPLY",
      bookSub: "Everything confirmed in one single place.",
      statusConfirmed: "CONFIRMED",
      statusPending: "PENDING",
      bkStayDates: "Dates",
      bkGuests: "Guests",
      bkPrice: "Price",
      bkCode: "Show confirmation code",
      bkFlightWhen: "Departure",
      bkPax: "Passengers",
      bkPickup: "Pickup",
      bkDropoff: "Drop-off",
      bkWhen: "When",
      bkPeople: "Guests",
      bkPerPerson: "person",
      bkConfirm: "Confirm attendance",
      fTripName: "Trip name",
      fTripDates: "Dates",
      fTripTravelers: "Number of travelers",
      createTripBtn: "Create trip",
      okBtn: "Understood!",
      editProfile: "Edit profile",
      fProfileName: "Username",
      fAvatarType: "Icon or Avatar Style",
      saveProfileBtn: "Save changes"
    },
    fr: {
      role: "Organisateur",
      myTrips: "MES VOYAGES",
      newTrip: "Nouveau voyage",
      navMyTrip: "MON VOYAGE",
      navHome: "Aperçu",
      navItin: "Itinéraire",
      navExp: "Dépenses",
      navVotes: "Sondages",
      navMap: "Carte",
      navBook: "Réservations",
      navOther: "AUTRE",
      tipTitle: "Conseil voyageur",
      tipText: "Gardez une petite marge pour les imprévus.",
      logout: "Déconnexion",
      eyebrow: "VOTRE PROCHAINE AVENTURE",
      invite: "Inviter des amis",
      emptyKicker: "VOTRE ESPACE DE VOYAGE",
      emptyTitle: "Votre aventure commence ici",
      emptyText: "Aucun voyage créé pour le moment.",
      emptyCta: "Créer mon premier voyage",
      pillDays: "4 JOURS D'AVENTURE",
      progressLabel: "Préparation du voyage",
      statNextPlan: "Prochaine activité",
      none: "Rien de prévu",
      statPerPerson: "Coût par personne",
      statOpenVotes: "Sondages ouverts",
      statOpenVotesNone: "Aucun sondage",
      planKicker: "PLAN DU VOYAGE",
      upcomingDays: "Jours à venir",
      seeAll: "Voir tout",
      itinEmpty: "Aucune activité planifiée pour le moment.",
      teamKicker: "L'ÉQUIPE",
      travelersTitle: "Les voyageurs",
      peopleEmpty: "Personne n'a encore rejoint.",
      addTraveler: "Ajouter un voyageur",
      decideKicker: "DÉCIDER ENSEMBLE",
      voteBtn: "Voter",
      orgEyebrow: "ORGANISATION",
      itinSub: "Tout ce que vous avez prévu, jour par jour.",
      addActivityBtn: "Ajouter une activité",
      scheduleEmpty: "Pas encore d'activités pour ce jour.",
      moneyEyebrow: "ARGENT",
      expSub: "Gérez le budget sans discussion.",
      addExpenseBtn: "Ajouter une dépense",
      budgetTotal: "Budget total",
      perPerson: "Par personne",
      remaining: "Reste",
      movementsKicker: "MOUVEMENTS",
      latestExpenses: "Dernières dépenses",
      expenseEmpty: "Aucune dépense enregistrée.",
      decEyebrow: "DÉCISIONS",
      votesSub: "Trouver un accord fait aussi partie du voyage.",
      newVoteBtn: "Nouveau sondage",
      votesEmpty: "Pas encore de sondage.",
      geoEyebrow: "GÉOGRAPHIE",
      mapSub: "Votre itinéraire en un coup d'œil.",
      mapScale: "Itinéraire approximatif",
      resEyebrow: "VOTRE TRIPLY",
      bookSub: "Tout ce qui est confirmé au même endroit.",
      statusConfirmed: "CONFIRMÉ",
      statusPending: "EN ATTENTE",
      bkStayDates: "Dates",
      bkGuests: "Invités",
      bkPrice: "Prix",
      bkCode: "Voir le code",
      bkFlightWhen: "Départ",
      bkPax: "Passagers",
      bkPickup: "Prise en charge",
      bkDropoff: "Restitution",
      bkWhen: "Quand",
      bkPeople: "Couverts",
      bkPerPerson: "pers",
      bkConfirm: "Confirmer la présence",
      fTripName: "Nom du voyage",
      fTripDates: "Dates",
      fTripTravelers: "Nombre de voyageurs",
      createTripBtn: "Créer le voyage",
      okBtn: "Compris!",
      editProfile: "Modifier le profil",
      fProfileName: "Nom d'utilisateur",
      fAvatarType: "Icône ou style d'avatar",
      saveProfileBtn: "Enregistrer"
    },
    de: {
      role: "Organisator",
      myTrips: "MEINE REISEN",
      newTrip: "Neue Reise",
      navMyTrip: "MEINE REISE",
      navHome: "Übersicht",
      navItin: "Reiseplan",
      navExp: "Ausgaben",
      navVotes: "Umfragen",
      navMap: "Karte",
      navBook: "Buchungen",
      navOther: "SONSTIGES",
      tipTitle: "Reisetipp",
      tipText: "Lassen Sie ein wenig Spielraum für unerwartete Ausgaben.",
      logout: "Abmelden",
      eyebrow: "IHR NÄCHSTES ABENTEUER",
      invite: "Freunde einladen",
      emptyKicker: "IHR REISEBEREICH",
      emptyTitle: "Ihr nächstes Abenteuer beginnt hier",
      emptyText: "Noch keine Reisen erstellt.",
      emptyCta: "Erste Reise erstellen",
      pillDays: "4 TAGE ABENTEUER",
      progressLabel: "Reisevorbereitung",
      statNextPlan: "Nächste Aktivität",
      none: "Nichts geplant",
      statPerPerson: "Kosten pro Person",
      statOpenVotes: "Offene Umfragen",
      statOpenVotesNone: "Keine Umfragen",
      planKicker: "REISEPLAN",
      upcomingDays: "Kommende Tage",
      seeAll: "Alle anzeigen",
      itinEmpty: "Noch keine Aktivitäten geplant.",
      teamKicker: "DAS TEAM",
      travelersTitle: "Reisende",
      peopleEmpty: "Noch niemand beigetreten.",
      addTraveler: "Reisenden hinzufügen",
      decideKicker: "GEMEINSAM ENTSCHEIDEN",
      voteBtn: "Abstimmen",
      orgEyebrow: "ORGANISATION",
      itinSub: "Alles Tag für Tag geplant.",
      addActivityBtn: "Aktivität hinzufügen",
      scheduleEmpty: "Keine Aktivitäten für diesen Tag.",
      moneyEyebrow: "GELD",
      expSub: "Budget ohne Diskussionen verwalten.",
      addExpenseBtn: "Ausgabe hinzufügen",
      budgetTotal: "Gesamtbudget",
      perPerson: "Pro Person",
      remaining: "Verbleibend",
      movementsKicker: "BEWEGUNGEN",
      latestExpenses: "Letzte Ausgaben",
      expenseEmpty: "Keine Ausgaben erfasst.",
      decEyebrow: "ENTSCHEIDUNGEN",
      votesSub: "Einigung gehört zur Reise.",
      newVoteBtn: "Neue Umfrage",
      votesEmpty: "Noch keine Umfragen vorhanden.",
      geoEyebrow: "GEOGRAFIE",
      mapSub: "Ihre Route auf einen Blick.",
      mapScale: "Ungefähre Route",
      resEyebrow: "IHR TRIPLY",
      bookSub: "Alles Bestätigte an einem Ort.",
      statusConfirmed: "BESTÄTIGT",
      statusPending: "AUSSTEHEND",
      bkStayDates: "Daten",
      bkGuests: "Gäste",
      bkPrice: "Preis",
      bkCode: "Bestätigungscode anzeigen",
      bkFlightWhen: "Abreise",
      bkPax: "Passagiere",
      bkPickup: "Abholung",
      bkDropoff: "Rückgabe",
      bkWhen: "Wann",
      bkPeople: "Personen",
      bkPerPerson: "Pers",
      bkConfirm: "Teilnahme bestätigen",
      fTripName: "Name der Reise",
      fTripDates: "Daten",
      fTripTravelers: "Anzahl der Reisenden",
      createTripBtn: "Reise erstellen",
      okBtn: "Verstanden!",
      editProfile: "Profil bearbeiten",
      fProfileName: "Benutzername",
      fAvatarType: "Icon oder Avatar-Stil",
      saveProfileBtn: "Speichern"
    },
    pt: {
      role: "Organizador",
      myTrips: "MINHAS VIAGENS",
      newTrip: "Nova viagem",
      navMyTrip: "MINHA VIAGEM",
      navHome: "Resumo",
      navItin: "Itinerário",
      navExp: "Despesas",
      navVotes: "Votações",
      navMap: "Mapa",
      navBook: "Reservas",
      navOther: "OUTROS",
      tipTitle: "Dica de viagem",
      tipText: "Deixe uma pequena margem para despesas imprevistas.",
      logout: "Sair",
      eyebrow: "A SUA PRÓXIMA AVENTURA",
      invite: "Convidar amigos",
      emptyKicker: "O SEU ESPAÇO DE VIAGENS",
      emptyTitle: "A sua próxima aventura começa aqui",
      emptyText: "Ainda não tem viagens criadas.",
      emptyCta: "Criar a minha primeira viagem",
      pillDays: "4 DIAS DE AVENTURA",
      progressLabel: "Preparação da viagem",
      statNextPlan: "Próximo plano",
      none: "Nada previsto",
      statPerPerson: "Custo por pessoa",
      statOpenVotes: "Votações abertas",
      statOpenVotesNone: "Sem votações",
      planKicker: "PLANO DA VIAGEM",
      upcomingDays: "Próximos dias",
      seeAll: "Ver tudo",
      itinEmpty: "Ainda não há atividades planeadas.",
      teamKicker: "A EQUIPA",
      travelersTitle: "Os viajantes",
      peopleEmpty: "Ainda ninguém se juntou.",
      addTraveler: "Adicionar viajante",
      decideKicker: "DECIDAM ENTRE TODOS",
      voteBtn: "Votar",
      orgEyebrow: "ORGANIZAÇÃO",
      itinSub: "Tudo o que planeou, dia a dia.",
      addActivityBtn: "Adicionar atividade",
      scheduleEmpty: "Ainda não há atividades para este dia.",
      moneyEyebrow: "DINHEIRO",
      expSub: "Controle o orçamento sem discussões.",
      addExpenseBtn: "Adicionar despesa",
      budgetTotal: "Orçamento total",
      perPerson: "Por pessoa",
      remaining: "Resta",
      movementsKicker: "MOVIMENTOS",
      latestExpenses: "Últimas despesas",
      expenseEmpty: "Ainda não há despesas registadas.",
      decEyebrow: "DECISÕES",
      votesSub: "Chegar a acordo faz parte da viagem.",
      newVoteBtn: "Nova votação",
      votesEmpty: "Ainda não há votações.",
      geoEyebrow: "GEOGRAFIA",
      mapSub: "A sua rota num relance.",
      mapScale: "Rota aproximada",
      resEyebrow: "O SEU TRIPLY",
      bookSub: "Tudo o que está confirmado num único lugar.",
      statusConfirmed: "CONFIRMADA",
      statusPending: "PENDENTE",
      bkStayDates: "Datas",
      bkGuests: "Hóspedes",
      bkPrice: "Preço",
      bkCode: "Ver código de confirmação",
      bkFlightWhen: "Partida",
      bkPax: "Passageiros",
      bkPickup: "Levantamento",
      bkDropoff: "Devolução",
      bkWhen: "Quando",
      bkPeople: "Pessoas",
      bkPerPerson: "pess",
      bkConfirm: "Confirmar presença",
      fTripName: "Nome da viagem",
      fTripDates: "Datas",
      fTripTravelers: "Número de viajantes",
      createTripBtn: "Criar viagem",
      okBtn: "Entendido!",
      editProfile: "Editar perfil",
      fProfileName: "Nome de utilizador",
      fAvatarType: "Ícone ou Estilo de Avatar",
      saveProfileBtn: "Guardar alterações"
    },
    it: {
      role: "Organizzatore",
      myTrips: "I MIEI VIAGGI",
      newTrip: "Nuovo viaggio",
      navMyTrip: "IL MIO VIAGGIO",
      navHome: "Riepilogo",
      navItin: "Itinerario",
      navExp: "Spese",
      navVotes: "Votazioni",
      navMap: "Mappa",
      navBook: "Prenotazioni",
      navOther: "ALTRO",
      tipTitle: "Consiglio di viaggio",
      tipText: "Lascia un piccolo margine per spese impreviste.",
      logout: "Disconnettiti",
      eyebrow: "LA TUA PROSSIMA AVVENTURA",
      invite: "Invita amici",
      emptyKicker: "IL TUO SPAZIO VIAGGI",
      emptyTitle: "La tua prossima avventura inizia qui",
      emptyText: "Nessun viaggio ancora creato.",
      emptyCta: "Crea il mio primo viaggio",
      pillDays: "4 GIORNI DI AVVENTURA",
      progressLabel: "Preparazione del viaggio",
      statNextPlan: "Prossima attività",
      none: "Niente di previsto",
      statPerPerson: "Spesa per persona",
      statOpenVotes: "Votazioni aperte",
      statOpenVotesNone: "Nessuna votazione",
      planKicker: "PIANO DI VIAGGIO",
      upcomingDays: "Prossimi giorni",
      seeAll: "Vedi tutto",
      itinEmpty: "Nessuna attività programmata.",
      teamKicker: "IL TEAM",
      travelersTitle: "I viaggiatori",
      peopleEmpty: "Nessuno si è ancora unito.",
      addTraveler: "Aggiungi viaggiatore",
      decideKicker: "DECIDETE INSIEME",
      voteBtn: "Vota",
      orgEyebrow: "ORGANIZZAZIONE",
      itinSub: "Tutto quello che avete pianificato, giorno per giorno.",
      addActivityBtn: "Aggiungi attività",
      scheduleEmpty: "Nessuna attività per questo giorno.",
      moneyEyebrow: "DENARO",
      expSub: "Gestisci il budget senza discussioni.",
      addExpenseBtn: "Aggiungi spesa",
      budgetTotal: "Budget totale",
      perPerson: "Per persona",
      remaining: "Rimanente",
      movementsKicker: "MOVIMENTI",
      latestExpenses: "Ultime spese",
      expenseEmpty: "Nessuna spesa registrata.",
      decEyebrow: "DECISIONI",
      votesSub: "Metterai d'accordo fa parte del viaggio.",
      newVoteBtn: "Nuova votazione",
      votesEmpty: "Nessuna votazione attiva.",
      geoEyebrow: "GEOGRAFIA",
      mapSub: "Il vostro percorso a colpo d'occhio.",
      mapScale: "Percorso approssimativo",
      resEyebrow: "IL TUO TRIPLY",
      bookSub: "Tutto ciò che è confermato in un unico posto.",
      statusConfirmed: "CONFERMATA",
      statusPending: "IN ATTESA",
      bkStayDates: "Date",
      bkGuests: "Ospiti",
      bkPrice: "Prezzo",
      bkCode: "Vedi codice di conferma",
      bkFlightWhen: "Partenza",
      bkPax: "Passeggeri",
      bkPickup: "Ritiro",
      bkDropoff: "Riconsegna",
      bkWhen: "Quando",
      bkPeople: "Ospiti",
      bkPerPerson: "pers",
      bkConfirm: "Conferma presenza",
      fTripName: "Nome del viaggio",
      fTripDates: "Date",
      fTripTravelers: "Numero di viaggiatori",
      createTripBtn: "Crea viaggio",
      okBtn: "Ho capito!",
      editProfile: "Modifica profilo",
      fProfileName: "Nome utente",
      fAvatarType: "Icona o Stile Avatar",
      saveProfileBtn: "Salva modifiche"
    }
  };

  const flags = { es: "🇪🇸", en: "🇬🇧", fr: "🇫🇷", de: "🇩🇪", pt: "🇵🇹", it: "🇮🇹" };
  let currentLang = localStorage.getItem("triplyLang") || "es";

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("triplyLang", lang);
    const dict = i18nData[lang] || i18nData.es;

    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        // Fix: Si es un input cambia el placeholder, si no cambia el texto.
        if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
          el.placeholder = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    const langFlag = $("#langFlag");
    const langCode = $("#langCode");
    if (langFlag) langFlag.textContent = flags[lang];
    if (langCode) langCode.textContent = lang.toUpperCase();

    $$("#langMenu button").forEach(btn => {
      btn.classList.toggle("selected", btn.dataset.lang === lang);
    });
  }

  // Elementos DOM principales
  const navItems = $$(".nav-item[data-section]");
  const sections = $$(".page-section");
  const toast = $("#toast");
  const modal = $("#modal");
  const modalText = $("#modalText");
  const modalTitle = $("#modalTitle");
  const modalIcon = $("#modalIcon");
  const tripForm = $("#tripForm");
  const profileForm = $("#profileForm");
  const tripSelector = $("#tripSelector");
  
  let storedUser = JSON.parse(sessionStorage.getItem("triplyUser") || "null");
  let trips = JSON.parse(sessionStorage.getItem("triplyTrips") || "[]");

  if (!storedUser) {
    if (document.querySelector(".app-shell")) window.location.href = "login.html";
    return;
  }

  function updateProfileUI() {
    const userName = $("#userName");
    const userAvatar = $("#userAvatar");
    if (userName) userName.textContent = storedUser.name || "Viajero";
    if (userAvatar) {
      if (storedUser.avatar && storedUser.avatar !== "initials") {
        userAvatar.textContent = storedUser.avatar;
      } else {
        userAvatar.textContent = (storedUser.name || "V").split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
      }
    }
  }
  updateProfileUI();

  // Submenú de perfil
  const profileToggle = $("#profileToggle");
  const profileSubmenu = $("#profileSubmenu");
  if (profileToggle && profileSubmenu) {
    profileToggle.addEventListener("click", e => {
      e.stopPropagation();
      const isExpanded = profileToggle.getAttribute("aria-expanded") === "true";
      profileToggle.setAttribute("aria-expanded", !isExpanded);
      profileSubmenu.classList.toggle("open", !isExpanded);
    });
    document.addEventListener("click", () => {
      profileToggle.setAttribute("aria-expanded", "false");
      profileSubmenu.classList.remove("open");
    });
  }

  $("#openEditProfile")?.addEventListener("click", () => {
    if (!modal) return;
    if (tripForm) tripForm.hidden = true;
    if (profileForm) profileForm.hidden = false;
    
    if (modalTitle) modalTitle.textContent = i18nData[currentLang]?.editProfile || "Editar Perfil";
    if (modalIcon) modalIcon.textContent = "👤";
    if (modalText) modalText.textContent = "";

    const editProfileName = $("#editProfileName");
    if (editProfileName) editProfileName.value = storedUser.name || "";

    const ok = $("#modalOk");
    if (ok) ok.style.display = "none";

    let selectedAvatar = storedUser.avatar || "initials";
    $$(".avatar-opt").forEach(opt => {
      opt.classList.toggle("active", opt.dataset.avatar === selectedAvatar);
      opt.onclick = () => {
        $$(".avatar-opt").forEach(o => o.classList.remove("active"));
        opt.classList.add("active");
        selectedAvatar = opt.dataset.avatar;
      };
    });

    profileForm.onsubmit = e => {
      e.preventDefault();
      const newName = editProfileName.value.trim();
      if (!newName) return;
      storedUser.name = newName;
      storedUser.avatar = selectedAvatar;
      sessionStorage.setItem("triplyUser", JSON.stringify(storedUser));
      updateProfileUI();
      closeModal();
      showToast("Perfil actualizado");
    };
    modal.classList.add("open");
  });

  const saveTrips = () => sessionStorage.setItem("triplyTrips", JSON.stringify(trips));
  const currentTrip = () => trips.find(t => t.id === sessionStorage.getItem("triplySelectedTrip")) || trips[0] || null;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function showSection(id) {
    if (!trips.length && id !== "resumen") {
      showToast("Crea primero un viaje para desbloquear esta sección.");
      return;
    }
    sections.forEach(s => s.classList.toggle("active-section", s.id === id));
    navItems.forEach(n => n.classList.toggle("active", n.dataset.section === id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function refreshLockedNavigation() {
    const locked = trips.length === 0;
    document.body.classList.toggle("no-trip", locked);
    navItems.forEach(item => {
      const section = item.dataset.section;
      const shouldLock = locked && section !== "resumen";
      item.classList.toggle("is-locked", shouldLock);
      item.setAttribute("aria-disabled", String(shouldLock));
    });
    if (tripSelector) {
      tripSelector.innerHTML = "";
      if (!trips.length) {
        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.textContent = "Crea un viaje primero";
        placeholder.disabled = true;
        placeholder.selected = true;
        tripSelector.appendChild(placeholder);
        tripSelector.disabled = true;
      } else {
        tripSelector.disabled = false;
        trips.forEach(trip => {
          const option = document.createElement("option");
          option.value = trip.id;
          option.textContent = `${trip.emoji || "✈️"} ${trip.name}`;
          tripSelector.appendChild(option);
        });
        const selected = sessionStorage.getItem("triplySelectedTrip");
        tripSelector.value = trips.some(t => t.id === selected) ? selected : trips[0].id;
      }
    }
    const trip = currentTrip();
    if (trip) updateTrip(trip.id);
  }

  function updateTrip(id) {
    const trip = trips.find(item => item.id === id) || trips[0];
    if (!trip) {
      document.body.classList.add("no-trip");
      return;
    }
    sessionStorage.setItem("triplySelectedTrip", trip.id);
    const heading = $("#tripHeading");
    const name = $("#tripName");
    const details = $("#tripDetails");
    if (heading) heading.textContent = `¡Nos vamos a ${trip.name}! ${trip.emoji || "✈️"}`;
    if (name) name.textContent = trip.name;
    if (details) details.textContent = `${trip.dates || "Fechas por decidir"} · ${trip.travelers || 1} viajeros`;
    document.body.classList.remove("no-trip");
    if (tripSelector) tripSelector.value = trip.id;
  }

  navItems.forEach(item => item.addEventListener("click", () => showSection(item.dataset.section)));
  $$("[data-go]").forEach(btn => btn.addEventListener("click", () => showSection(btn.dataset.go)));
  if (tripSelector) tripSelector.addEventListener("change", () => {
    if (tripSelector.value) {
      updateTrip(tripSelector.value);
      showToast("Viaje cambiado");
    }
  });

  function closeModal() {
    if (modal) modal.classList.remove("open");
    if (profileForm) profileForm.hidden = true;
    if (tripForm) tripForm.hidden = true;
  }

  function openModal(message, title = "Función de demo") {
    if (!modal) return;
    if (tripForm) tripForm.hidden = true;
    if (profileForm) profileForm.hidden = true;
    
    const ok = $("#modalOk");
    if (ok) ok.style.display = "inline-block";
    if (modalTitle) modalTitle.textContent = title;
    if (modalIcon) modalIcon.textContent = "🚀";
    if (modalText) {
      modalText.textContent = message;
      modalText.hidden = false;
    }
    modal.classList.add("open");
  }

  function openTripForm() {
    if (!modal || !tripForm) return;
    if (profileForm) profileForm.hidden = true;
    if (modalTitle) modalTitle.textContent = trips.length ? "Crea otro viaje" : "Crea tu primer viaje";
    if (modalIcon) modalIcon.textContent = "🧭";
    if (modalText) modalText.textContent = "Añade los datos y empieza a organizar tu aventura.";
    tripForm.hidden = false;
    const ok = $("#modalOk");
    if (ok) ok.style.display = "none";
    modal.classList.add("open");
  }

  // Eventos Invitar y Añadir
  $("#inviteBtn")?.addEventListener("click", () => {
    const trip = currentTrip();
    if (!trip) return showToast("Crea primero un viaje.");
    openModal(`Comparte el código TRIP-${trip.id.slice(-5)} con tus amigos.`, "Invitar viajeros");
  });
  
  $("#inviteBtn2")?.addEventListener("click", () => {
    if (!currentTrip()) return showToast("Crea primero un viaje.");
    openModal("Usa el código de invitación para reunir a tu grupo.", "Invitar viajeros");
  });

  $("#closeModal")?.addEventListener("click", closeModal);
  $("#modalOk")?.addEventListener("click", closeModal);
  modal?.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  $("#newTripBtn")?.addEventListener("click", openTripForm);
  $("#emptyCreateTrip")?.addEventListener("click", openTripForm);

  $("#logoutBtn")?.addEventListener("click", () => {
    sessionStorage.removeItem("triplyUser");
    window.location.href = "login.html";
  });

  if (tripForm) tripForm.addEventListener("submit", event => {
    event.preventDefault();
    const nameInput = $("#tripInputName");
    const datesInput = $("#tripInputDates");
    const travelersInput = $("#tripInputTravelers");
    const name = nameInput?.value.trim();
    const dates = datesInput?.value.trim() || "Fechas por decidir";
    const travelers = Math.max(1, Number(travelersInput?.value) || 1);
    
    if (!name) return;
    const trip = { id: `${Date.now()}`, name, dates, travelers, emoji: "✈️" };
    trips.push(trip);
    saveTrips();
    sessionStorage.setItem("triplySelectedTrip", trip.id);
    refreshLockedNavigation();
    updateTrip(trip.id);
    tripForm.reset();
    closeModal();
    showToast("¡Viaje creado!");
    showSection("resumen");
  });

  // Selector de Idiomas (Arreglado para funcionar siempre al click)
  const langBtn = $("#langBtn");
  const langMenu = $("#langMenu");
  if (langBtn && langMenu) {
    langBtn.addEventListener("click", e => {
      e.stopPropagation();
      const open = langMenu.classList.toggle("open");
      langBtn.classList.toggle("open", open);
      langBtn.setAttribute("aria-expanded", String(open));
    });

    $$("#langMenu button").forEach(btn => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.lang);
        langMenu.classList.remove("open");
        langBtn.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", () => {
      langMenu.classList.remove("open");
      langBtn.classList.remove("open");
      langBtn.setAttribute("aria-expanded", "false");
    });
  }

  $(".brand")?.addEventListener("click", () => showSection("resumen"));

  applyLanguage(currentLang);
  refreshLockedNavigation();
})();