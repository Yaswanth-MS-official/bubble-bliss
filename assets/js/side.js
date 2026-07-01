const sidebar = document.getElementById("sidebar");

const mainContent = document.querySelector(".main-content");

/* =========================================
   SIDEBAR TOGGLE
========================================= */

function toggleSidebar() {
  /* MOBILE */

  if (window.innerWidth <= 991) {
    sidebar.classList.toggle("show");
  } else {
    /* DESKTOP */
    sidebar.classList.toggle("minimized");

    mainContent.classList.toggle("expanded");
  }
}

/* =========================================
   RTL TOGGLE
========================================= */

const rtlToggle = document.getElementById("rtlToggle");

if (rtlToggle) {
  rtlToggle.addEventListener("click", () => {
    const html = document.documentElement;

    if (html.getAttribute("dir") === "rtl") {
      html.setAttribute("dir", "ltr");

      localStorage.setItem("rtl", "ltr");

      rtlToggle.innerText = "RTL";
    } else {
      html.setAttribute("dir", "rtl");

      localStorage.setItem("rtl", "rtl");

      rtlToggle.innerText = "LTR";
    }
  });
}

/* LOAD RTL */

const savedRTL = localStorage.getItem("rtl");

if (savedRTL === "rtl") {
  document.documentElement.setAttribute("dir", "rtl");

  if (rtlToggle) {
    rtlToggle.innerText = "LTR";
  }
}

/* =========================================
   THEME TOGGLE
========================================= */

const themeToggle = document.getElementById("themeToggle");

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");

  toggleBtn.addEventListener("click", function () {
    let currentTheme = document.documentElement.getAttribute("data-bs-theme");

    let newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-bs-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  });

  // load saved theme
  let savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }
});

/* UPDATE ICON */

function updateThemeIcon() {
  if (!themeToggle) return;

  const currentTheme = document.documentElement.getAttribute("data-bs-theme");

  if (currentTheme === "dark") {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main = document.querySelector(".main-content");

  sidebar.classList.toggle("show");
  sidebar.classList.toggle("minimized");

  // optional desktop shift
  if (window.innerWidth > 768) {
    main.classList.toggle("expanded");
  }
}




