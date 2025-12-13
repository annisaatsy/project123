// --- UTILS.JS ---

// 1. DATA & STORAGE KEYS
const STORAGE_KEY = "telco_user_data";
const SESSION_KEY = "telco_user_session";
const HISTORY_KEY = "telco_history";

// Data Produk Diperbarui
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Paket Internet Ultra Cepat",
    category: "data",
    provider: "Tele-X",
    quota: "50 GB",
    speed: "50 Mbps",
    price: 120000,
    type: "Data",
  },
  {
    id: 2,
    name: "Combo Keluarga Hemat",
    category: "data",
    provider: "GlobalCom",
    quota: "30 GB + Unlimited Telp",
    speed: "10 Mbps",
    price: 150000,
    type: "Combo",
  },
  {
    id: 3,
    name: "Paket Nelpon Bebas Khawatir",
    category: "pulsa",
    provider: "PhoneLink",
    quota: "500 Menit All Operator",
    speed: "N/A",
    price: 65000,
    type: "Voice",
  },
  {
    id: 4,
    name: "Internet Harian Murah",
    category: "data",
    provider: "Tele-X",
    quota: "5 GB Harian",
    speed: "Unlimited FUP",
    price: 25000,
    type: "Data",
  },
  {
    id: 5,
    name: "Paket Streaming Gamer Pro",
    category: "game",
    provider: "GlobalCom",
    quota: "100 GB (50GB Game)",
    speed: "100 Mbps",
    price: 250000,
    type: "Data",
  },
  {
    id: 6,
    name: "Pulsa Darurat 5K",
    category: "pulsa",
    provider: "PhoneLink",
    quota: "5000 Pulsa",
    speed: "N/A",
    price: 6000,
    type: "Pulsa",
  },
];

// 2. STORAGE & SESSION FUNCTIONS
function saveUser(user) {
  let users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const existingIndex = users.findIndex((u) => u.email === user.email);

  if (existingIndex > -1) {
    users[existingIndex] = { ...users[existingIndex], ...user };
  } else {
    users.push(user);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

  const loggedInUser = getLoggedInUser();
  if (loggedInUser && loggedInUser.email === user.email) {
    setSession(users[existingIndex] || user);
  }
}

function findUser(email, password) {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return users.find((u) => u.email === email && u.password === password);
}

function getLoggedInUser() {
  const session = localStorage.getItem(SESSION_KEY);
  return session ? JSON.parse(session) : null;
}

function setSession(user) {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const fullUser = users.find((u) => u.email === user.email) || user;

  const sessionData = {
    name: fullUser.name,
    email: fullUser.email,
    photoUrl: fullUser.photoUrl || null,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function getHistory() {
  return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
}

function saveHistory(history) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

// 3. UI UTILITY FUNCTIONS
function formatRupiah(number) {
  return number.toLocaleString("id-ID");
}

function showMessage(message, type = "success") {
  const msgBox = document.getElementById("message-box");
  msgBox.textContent = message;
  msgBox.className = `fixed bottom-6 right-6 p-4 rounded-lg shadow-2xl z-max transition-opacity duration-300`;

  if (type === "success") {
    msgBox.classList.add("bg-green-500", "text-white");
  } else if (type === "error") {
    msgBox.classList.add("bg-red-500", "text-white");
  } else {
    msgBox.classList.add("bg-indigo-500", "text-white");
  }

  msgBox.style.opacity = "1";
  setTimeout(() => {
    msgBox.style.opacity = "0";
    setTimeout(() => {
      msgBox.className = ""; // Reset class
    }, 300);
  }, 3000);
}

function createProductCard(product, isDashboard = false) {
  const buttonClass = isDashboard
    ? "bg-green-600 hover:bg-green-700"
    : "bg-indigo-600 hover:bg-indigo-700";
  // The global functions must be exposed to window object for inline HTML onclick to work
  const onClickAction = isDashboard
    ? `window.handlePurchaseClick(${product.id})`
    : `window.showModal('register')`; 

  return `
    <div class="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-lg border-t-4 border-indigo-500">
      <div class="flex justify-between items-start mb-4">
        <span class="text-3xl">${
          product.category === "data"
            ? "🌐"
            : product.category === "game"
            ? "🎮"
            : "📞"
        }</span>
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">${
          product.provider
        }</span>
      </div>
      <h4 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h4>
      <p class="text-3xl font-extrabold text-indigo-600 mb-4">
        Rp ${formatRupiah(product.price)}
      </p>
      <ul class="text-sm text-gray-700 space-y-2 mb-6">
        <li class="flex items-center"><span class="mr-2 text-indigo-500">✅</span> Kuota: <span class="ml-auto font-medium">${
          product.quota
        }</span></li>
        <li class="flex items-center"><span class="mr-2 text-indigo-500">⚡</span> Kecepatan: <span class="ml-auto font-medium">${
          product.speed
        }</span></li>
        <li class="flex items-center"><span class="mr-2 text-indigo-500">🏷️</span> Jenis: <span class="ml-auto font-medium">${
          product.type
        }</span></li>
      </ul>
      <button
        class="w-full ${buttonClass} text-white font-bold py-2.5 rounded-lg transition duration-300 shadow-md transform hover:scale-[1.02]"
        onclick="${onClickAction}"
      >
        ${isDashboard ? "Beli Sekarang" : "Cari & Daftar"}
      </button>
    </div>
  `;
}

function showModal(formType) {
  const modal = document.getElementById("auth-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.style.opacity = "1";
    switchForm(formType);
  }
}

function hideModal() {
  const modal = document.getElementById("auth-modal");
  if (modal) {
    modal.style.opacity = "0";
    setTimeout(() => modal.classList.add("hidden"), 300);
    document.getElementById("login-error").classList.add("hidden");
    document.getElementById("register-error").classList.add("hidden");
  }
}

function switchForm(type) {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const modalTitle = document.getElementById("modal-title");

  if (type === "login") {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    modalTitle.textContent = "Login ke Akun Anda";
  } else {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    modalTitle.textContent = "Buat Akun Baru";
  }
}

export {
  STORAGE_KEY,
  DUMMY_PRODUCTS,
  formatRupiah,
  showMessage,
  createProductCard,
  saveUser,
  findUser,
  getLoggedInUser,
  setSession,
  clearSession,
  getHistory,
  saveHistory,
  showModal,
  hideModal,
  switchForm,
};