
// =============================================
// AMANDOLANAN - LOGIKA WEBSITE
// Pencarian, filter, favorit, peta, dan formulir
// =============================================

// Data contoh tempat di Malang Raya.
// Periksa kembali alamat, fasilitas, dan operasional
// sebelum mengunjungi tempat yang tercantum.

const initialPlaces = [
  {
    id: "p1",
    name: "Alun-Alun Kota Malang",
    category: "Taman",
    area: "Kota Malang",
    address: "Jl. Merdeka Selatan, Klojen",
    price: "Gratis",
    activity: "Santai, jalan kaki",
    description: "Ruang terbuka di pusat kota untuk bersantai.",
    lat: -7.9797,
    lng: 112.6304,
    icon: "🌳"
  },
  {
    id: "p2",
    name: "Alun-Alun Tugu Malang",
    category: "Taman",
    area: "Kota Malang",
    address: "Jl. Tugu, Klojen",
    price: "Gratis",
    activity: "Foto, jalan santai",
    description: "Area taman di sekitar landmark Kota Malang.",
    lat: -7.9788,
    lng: 112.6340,
    icon: "🌿"
  },
  {
    id: "p3",
    name: "Taman Slamet",
    category: "Taman",
    area: "Kota Malang",
    address: "Jl. Taman Slamet, Klojen",
    price: "Gratis",
    activity: "Duduk santai, ngobrol",
    description: "Taman kota untuk berjalan santai dan beristirahat.",
    lat: -7.9705,
    lng: 112.6202,
    icon: "🍃"
  },
  {
    id: "p4",
    name: "Hutan Kota Malabar",
    category: "Taman",
    area: "Kota Malang",
    address: "Kawasan Oro-oro Dowo, Klojen",
    price: "Gratis",
    activity: "Menikmati alam",
    description: "Ruang hijau untuk berjalan santai.",
    lat: -7.9701,
    lng: 112.6259,
    icon: "🌲"
  },
  {
    id: "p5",
    name: "Taman Singha Merjosari",
    category: "Taman",
    area: "Kota Malang",
    address: "Kawasan Merjosari, Lowokwaru",
    price: "Gratis",
    activity: "Olahraga ringan",
    description: "Ruang publik di kawasan Merjosari.",
    lat: -7.9409,
    lng: 112.6047,
    icon: "🌱"
  },
  {
    id: "p6",
    name: "GOR Ken Arok",
    category: "Olahraga",
    area: "Kota Malang",
    address: "Kawasan Kedungkandang",
    price: "Cek pengelola",
    activity: "Olahraga dan komunitas",
    description: "Fasilitas olahraga. Periksa jadwal dan akses sebelum datang.",
    lat: -8.0184,
    lng: 112.6552,
    icon: "🏸"
  },
  {
    id: "p7",
    name: "Perpustakaan Umum Kota Malang",
    category: "Belajar",
    area: "Kota Malang",
    address: "Kawasan Ijen, Klojen",
    price: "Cek layanan",
    activity: "Membaca dan belajar",
    description: "Periksa alamat layanan dan jam operasional melalui kanal resmi.",
    lat: -7.9736,
    lng: 112.6234,
    icon: "📚"
  },
  {
    id: "p8",
    name: "Alun-Alun Kota Batu",
    category: "Taman",
    area: "Kota Batu",
    address: "Jl. Diponegoro, Sisir, Batu",
    price: "Area publik gratis",
    activity: "Jalan santai, berkumpul",
    description: "Ruang publik di Kota Batu. Area dapat ramai pada akhir pekan.",
    lat: -7.8712,
    lng: 112.5264,
    icon: "🎡"
  },
  {
    id: "p9",
    name: "Ruang Komunitas Kreatif",
    category: "Komunitas",
    area: "Kota Malang",
    address: "Area pusat Kota Malang",
    price: "Tergantung acara",
    activity: "Workshop dan komunitas",
    description: "Contoh kategori untuk mencari kegiatan komunitas. Konfirmasi lokasi dengan penyelenggara.",
    lat: -7.9668,
    lng: 112.6321,
    icon: "🎨"
  },
  {
    id: "p10",
    name: "Taman Area Kepanjen",
    category: "Taman",
    area: "Kabupaten Malang",
    address: "Kawasan Kepanjen",
    price: "Cek informasi setempat",
    activity: "Santai dan aktivitas keluarga",
    description: "Titik contoh di Kabupaten Malang. Verifikasi lokasi sebelum berkunjung.",
    lat: -8.1326,
    lng: 112.5728,
    icon: "🌺"
  }
];

// Data disimpan di browser pengguna.
const STORAGE_PLACES = "amandolanan_places_v1";
const STORAGE_FAVORITES = "amandolanan_favorites_v1";

function readStorage(key, fallback) {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

let places = readStorage(STORAGE_PLACES, initialPlaces);
if (!Array.isArray(places) || places.length === 0) {
  places = initialPlaces;
}

let favorites = readStorage(STORAGE_FAVORITES, []);
let activeCategory = "all";
let favoritesOnly = false;
let map;
let markers = {};
let toastTimer;

const $ = selector => document.querySelector(selector);

const categoryNames = {
  Taman: "Taman & ruang publik",
  Olahraga: "Olahraga",
  Belajar: "Belajar",
  Komunitas: "Komunitas"
};

const categoryColors = {
  Taman: "#6cb568",
  Olahraga: "#f3a24f",
  Belajar: "#9a81e7",
  Komunitas: "#58a9d4"
};

// Mencegah teks input pengguna dibaca sebagai HTML.
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function savePlaces() {
  try {
    localStorage.setItem(STORAGE_PLACES, JSON.stringify(places));
  } catch {
    showToast("Data tidak dapat disimpan di browser.");
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(
      STORAGE_FAVORITES,
      JSON.stringify(favorites)
    );
  } catch {
    // Favorit masih berlaku selama halaman terbuka.
  }

  $("#favoriteCount").textContent = favorites.length;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Memfilter tempat berdasarkan nama, kategori, dan wilayah.
function getFilteredPlaces() {
  const keyword = $("#searchInput").value.trim().toLowerCase();
  const area = $("#areaFilter").value;

  return places.filter(place => {
    const searchable = [
      place.name,
      place.address,
      place.area,
      place.activity,
      place.description,
      categoryNames[place.category]
    ].join(" ").toLowerCase();

    return (
      (!keyword || searchable.includes(keyword)) &&
      (area === "all" || place.area === area) &&
      (activeCategory === "all" ||
        place.category === activeCategory) &&
      (!favoritesOnly || favorites.includes(place.id))
    );
  });
}

// Menampilkan kartu tempat.
function renderPlaces() {
  const results = getFilteredPlaces();

  $("#resultCount").textContent =
    `${results.length} tempat ditemukan`;

  $("#placesList").innerHTML = results.map(place => `
    <article class="place-card" data-place-id="${escapeHTML(place.id)}">
      <div class="place-visual visual-${escapeHTML(place.category)}">
        ${escapeHTML(place.icon || "📍")}
      </div>

      <div>
        <div class="place-top">
          <h4>${escapeHTML(place.name)}</h4>

          <button class="heart-button ${favorites.includes(place.id) ? "saved" : ""}"
            data-favorite-id="${escapeHTML(place.id)}"
            aria-label="Ubah favorit">
            ${favorites.includes(place.id) ? "♥" : "♡"}
          </button>
        </div>

        <p class="place-address">
          📍 ${escapeHTML(place.address)} · ${escapeHTML(place.area)}
        </p>

        <div class="place-tags">
          <span class="mini-tag">
            ${escapeHTML(categoryNames[place.category] || place.category)}
          </span>
          <span class="mini-tag price">
            ${escapeHTML(place.price || "Cek informasi")}
          </span>
        </div>

        <div class="place-actions">
          <button data-detail-id="${escapeHTML(place.id)}">
            Detail tempat ↗
          </button>
          <button class="map-link" data-map-id="${escapeHTML(place.id)}">
            Lihat peta
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $("#emptyState").classList.toggle("hidden", results.length > 0);
  $("#placesList").classList.toggle("hidden", results.length === 0);
  $("#favoritesToggle").classList.toggle("active", favoritesOnly);

  updateMarkers(results);
}

// Membuat peta interaktif menggunakan OpenStreetMap.
function initMap() {
  if (!window.L) {
    $("#map").innerHTML =
      "<p style='padding:20px'>Peta membutuhkan koneksi internet. Daftar tempat tetap bisa digunakan.</p>";
    return;
  }

  map = L.map("map", {
    scrollWheelZoom: false
  }).setView([-7.967, 112.635], 11);

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
    }
  ).addTo(map);

  renderPlaces();
}

// Memperbarui titik peta sesuai hasil filter.
function updateMarkers(results) {
  if (!map) return;

  Object.values(markers).forEach(marker => {
    map.removeLayer(marker);
  });

  markers = {};

  results.forEach(place => {
    if (!Number.isFinite(Number(place.lat)) ||
        !Number.isFinite(Number(place.lng))) return;

    const marker = L.circleMarker(
      [Number(place.lat), Number(place.lng)],
      {
        radius: 8,
        color: "#ffffff",
        weight: 2,
        fillColor: categoryColors[place.category] || "#6cb568",
        fillOpacity: 1
      }
    ).addTo(map);

    marker.bindPopup(`
      <strong>${escapeHTML(place.name)}</strong><br>
      <small>${escapeHTML(place.area)}</small><br>
      <small>${escapeHTML(place.price || "Biaya belum diketahui")}</small>
    `);

    marker.on("click", () => {
      showToast(place.name);
    });

    markers[place.id] = marker;
  });
}

// Memilih tempat dan memusatkan peta.
function selectPlace(id) {
  const place = places.find(item => item.id === id);
  if (!place) return;

  if (map && markers[id]) {
    map.setView(
      [Number(place.lat), Number(place.lng)],
      14
    );
    markers[id].openPopup();
  }

  const url =
    `https://www.google.com/maps/search/?api=1&query=${
      encodeURIComponent(place.name + " " + place.address + " " + place.area)
    }`;

  // Tampilkan detail singkat dan pilihan lokasi.
  showToast(`${place.name} — ${place.description}`);

  const detailButton = document.createElement("button");
  detailButton.textContent = "Buka Google Maps";
  detailButton.className = "btn btn-primary";
  detailButton.addEventListener("click", () => {
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // Detail bisa dibuka langsung melalui tombol kartu.
  return detailButton;
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(item => item !== id);
    showToast("Tempat dihapus dari favorit.");
  } else {
    favorites.push(id);
    showToast("Tempat disimpan ke favorit.");
  }

  saveFavorites();
  renderPlaces();
}

// Pencarian langsung saat pengguna mengetik.
$("#searchInput").addEventListener("input", renderPlaces);
$("#areaFilter").addEventListener("change", renderPlaces);

// Filter kategori.
$("#categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });

  renderPlaces();
});

// Interaksi kartu tempat.
$("#placesList").addEventListener("click", event => {
  const favoriteButton = event.target.closest("[data-favorite-id]");

  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(favoriteButton.dataset.favoriteId);
    return;
  }

  const detailButton = event.target.closest("[data-detail-id]");
  const mapButton = event.target.closest("[data-map-id]");
  const card = event.target.closest("[data-place-id]");

  const id = detailButton?.dataset.detailId ||
    mapButton?.dataset.mapId ||
    card?.dataset.placeId;

  if (!id) return;

  const place = places.find(item => item.id === id);
  if (!place) return;

  if (map && markers[id]) {
    map.setView([Number(place.lat), Number(place.lng)], 14);
    markers[id].openPopup();
  }

  if (detailButton) {
    const url =
      `https://www.google.com/maps/search/?api=1&query=${
        encodeURIComponent(place.name + " " + place.address + " " + place.area)
      }`;

    const go = confirm(
      `${place.name}\n\n${place.description}\n\nBuka lokasi di Google Maps?`
    );

    if (go) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }
});

// Filter favorit.
$("#favoritesToggle").addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  renderPlaces();

  if (favoritesOnly) {
    showToast("Menampilkan tempat favoritmu.");
  }
});

// Reset seluruh filter.
function resetFilters() {
  $("#searchInput").value = "";
  $("#areaFilter").value = "all";
  activeCategory = "all";
  favoritesOnly = false;

  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle(
      "active",
      chip.dataset.category === "all"
    );
  });

  if (map) map.setView([-7.967, 112.635], 11);

  renderPlaces();
}

$("#resetMap").addEventListener("click", resetFilters);
$("#clearFilters").addEventListener("click", resetFilters);

// Membuka dan menutup formulir tambah tempat.
function openModal() {
  const modal = $("#addModal");

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeModal() {
  const modal = $("#addModal");

  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}

["openAdd", "openAdd2", "openAdd3"].forEach(id => {
  $("#" + id).addEventListener("click", openModal);
});

$("#closeModal").addEventListener("click", closeModal);
$("#cancelModal").addEventListener("click", closeModal);

// Menyimpan rekomendasi baru.
$("#addPlaceForm").addEventListener("submit", event => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const area = String(data.get("area"));
  const category = String(data.get("category"));

  // Koordinat berikut merupakan titik perkiraan wilayah,
  // bukan lokasi presisi dari alamat yang dimasukkan.
  const centers = {
    "Kota Malang": [-7.967, 112.635],
    "Kabupaten Malang": [-8.1326, 112.5728],
    "Kota Batu": [-7.8712, 112.5264]
  };

  const [lat, lng] = centers[area];

  const newPlace = {
    id: "user-" + Date.now(),
    name: String(data.get("name")).trim(),
    category,
    area,
    address: String(data.get("address")).trim(),
    price: String(data.get("price")).trim() || "Belum diketahui",
    activity: String(data.get("activity")).trim() || "Aktivitas umum",
    description: String(data.get("description")).trim() ||
      "Informasi dikirim oleh pengguna dan belum diverifikasi.",
    lat,
    lng,
    icon: {
      Taman: "🌳",
      Olahraga: "🏸",
      Belajar: "📚",
      Komunitas: "🎨"
    }[category]
  };

  places.unshift(newPlace);
  savePlaces();

  form.reset();
  closeModal();
  resetFilters();

  showToast(
    "Tempat berhasil ditambahkan di browser ini. Lokasi perlu diverifikasi."
  );
});

// Tahun otomatis.
$("#year").textContent = new Date().getFullYear();

// Jalankan website.
saveFavorites();
initMap();
renderPlaces();
