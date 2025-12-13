// --- LANDING.JS ---

import {
  createProductCard,
  DUMMY_PRODUCTS,
  showModal, // from utils.js
} from "./utils.js";

function renderHomeContent() {
  return `
    <div class="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto text-center">
      <h2 class="text-5xl font-extrabold text-gray-900 mb-4">
        Dapatkan Rekomendasi Paket Terbaik!
      </h2>

      <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Kami menyediakan rekomendasi paket internet, telepon, dan combo terbaik dari berbagai provider terkemuka. 
        Dapatkan koneksi cepat, kuota besar, dan harga paling hemat, 
        disesuaikan dengan profil dan penggunaan Anda!
      </p>

      <button
        id="start-search-btn"
        class="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold py-3 px-8 rounded-xl shadow-xl transition duration-300 transform hover:scale-105"
      >
        Mulai Cari Sekarang
      </button>
    </div>

        <div class="max-w-4xl mx-auto mt-12">
      <div class="p-8 bg-indigo-50 rounded-xl shadow-inner">
        <h3 class="text-3xl font-bold text-indigo-800 mb-4">Mengapa Memilih TelcoRec?</h3>

        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 text-indigo-700">
          <li class="p-4 bg-white rounded-lg shadow-md flex items-start">
            <span class="text-2xl mr-3">⚡</span>
            <div>
              <p class="font-bold">Kecepatan Maksimal</p>
              <p class="text-sm text-gray-600">Nikmati streaming dan gaming tanpa lag.</p>
            </div>
          </li>

          <li class="p-4 bg-white rounded-lg shadow-md flex items-start">
            <span class="text-2xl mr-3">💰</span>
            <div>
              <p class="font-bold">Harga Terjangkau</p>
              <p class="text-sm text-gray-600">Bandingkan dan temukan paket termurah.</p>
            </div>
          </li>

          <li class="p-4 bg-white rounded-lg shadow-md flex items-start">
            <span class="text-2xl mr-3">🛡</span>
            <div>
              <p class="font-bold">Keamanan Terjamin</p>
              <p class="text-sm text-gray-600">Transaksi aman dan terpercaya.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

  `;
}

function renderProductContent() {
  return `
    <div id="product-overview" class="mb-10 text-center bg-gray-100 p-8 rounded-xl">
      <h3 class="text-4xl font-extrabold text-gray-800 mb-3">Produk Unggulan Kami</h3>
      <p class="text-lg text-gray-600 max-w-4xl mx-auto">
        Kami menyajikan pilihan paket terlengkap, terorganisir berdasarkan kebutuhan Anda, mulai dari kuota harian, bulanan, hingga paket khusus gaming dan combo. Pilih yang paling sesuai dengan gaya hidup digital Anda.
      </p>
    </div>

    <!-- PRODUK GRID 3 KOLOM -->
    <div id="product-list-container"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
      ${DUMMY_PRODUCTS.map((product) => createProductCard(product, false)).join("")}
    </div>
  `;
}

function renderAboutContent() {
  const teamMembers = [
    { name: "Anggota 1", role: "Project Manager" },
    { name: "Anggota 2", role: "Lead Developer" },
    { name: "Anggota 3", role: "UI/UX Designer" },
    { name: "Anggota 4", role: "Backend Engineer" },
    { name: "Anggota 5", role: "Marketing Specialist" },
  ];

  // Placeholder image (minimalist color block)
  const placeholderImage =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1Da3qAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJzSURBVHgB7d0rkcIgFAXg2b2F0c+k4r+T3TzZlY1R/YCQvN83Fp52kYJg1zYfB5gYxI3h187YhGDeG992xpGBeGt82hlHBuKt4Wl7HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK8rYg7Q8u17HBlC27H29lK4AAAAAElFTkSuQmCC";

  return `
    <div class="text-center py-8">
      <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Tentang Kami & Tim Pengembang</h2>
      <p class="text-lg text-gray-600 max-w-4xl mx-auto mb-10">
        TelcoRec adalah platform rekomendasi paket telekomunikasi yang dibangun dengan semangat inovasi dan kolaborasi tim.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      ${teamMembers
        .map(
          (member) => `
          <div class="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div class="w-28 h-28 mb-4 rounded-full overflow-hidden border-4 border-indigo-200">
              <img src="${placeholderImage}" alt="${member.name}" class="w-full h-full object-cover"/>
            </div>
            <h4 class="text-xl font-bold text-gray-900">${member.name}</h4>
            <p class="text-sm text-indigo-600 font-medium">${member.role}</p>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

function handleLandingPageNavigation(target) {
  const contentArea = document.getElementById("landing-content");
  let contentHTML = "";

  // Highlight active link in header
  document.querySelectorAll("#main-nav-links a").forEach((link) => {
    if (link.getAttribute("data-target") === target) {
      link.classList.add("text-indigo-600", "font-bold");
      link.classList.remove("text-gray-600", "font-medium");
    } else {
      link.classList.remove("text-indigo-600", "font-bold");
      link.classList.add("text-gray-600", "font-medium");
    }
  });

  switch (target) {
    case "home":
      contentHTML = renderHomeContent();
      break;
    case "product":
      contentHTML = renderProductContent();
      break;
    case "about":
      contentHTML = renderAboutContent();
      break;
    default:
      contentHTML = renderHomeContent();
      break;
  }
  contentArea.innerHTML = contentHTML;

  // Re-attach listener for start-search-btn after content is rendered
  if (target === "home" || target === "product") {
    const startSearchBtn = document.getElementById("start-search-btn");
    if (startSearchBtn) {
      startSearchBtn.addEventListener("click", () =>
        showModal("register")
      ); // showModal from utils.js
    }
  }
}

export {
  renderHomeContent,
  renderProductContent,
  renderAboutContent,
  handleLandingPageNavigation,
};