// Toggle navigation and burger animation
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
});

// Clear form before unload
window.onbeforeunload = () => {
  document.querySelectorAll("form").forEach((form) => form.reset());
};

// JavaScript untuk navigasi antar halaman
const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const pageId = link.getAttribute("data-page");

    // Sembunyikan semua halaman
    pages.forEach((page) => page.classList.remove("active"));

    // Tampilkan halaman yang diklik
    document.getElementById(pageId).classList.add("active");
  });
});

// Ambil elemen tombol
const btn = document.querySelectorAll("section .btn");
const page = document.querySelectorAll(".page");

// Tambahkan event listener untuk menangani klik
btn.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const pageId = link.getAttribute("data-page");

    // Sembunyikan semua halaman
    page.forEach((page) => page.classList.remove("active"));

    // Tampilkan halaman yang diklik
    document.getElementById(pageId).classList.add("active");
  });
});

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

// Loading Spinner
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

function animatePercentages() {
  const percentageElements = document.querySelectorAll(".percentage");

  percentageElements.forEach((element) => {
    const targetPercent = parseInt(element.getAttribute("data-target"), 10);
    let currentPercent = 0;

    const interval = setInterval(() => {
      if (currentPercent <= targetPercent) {
        element.textContent = `${currentPercent}%`;
        currentPercent++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Kecepatan animasi (20ms per update)
  });
}

// Memulai animasi semua persentase
animatePercentages();
