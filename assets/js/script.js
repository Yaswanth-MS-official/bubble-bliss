const htmlTag = document.documentElement;
const bootstrapLink = document.getElementById("bootstrap-css");

const themeToggle = document.getElementById("themeToggle");
const rtlToggle = document.getElementById("rtlToggle");

/* ================= LOAD SETTINGS ================= */

const savedTheme = localStorage.getItem("theme") || "light";
const savedDir = localStorage.getItem("direction") || "ltr";

/* APPLY THEME */
htmlTag.setAttribute("data-bs-theme", savedTheme);

/* APPLY DIRECTION */
htmlTag.setAttribute("dir", savedDir);

/* APPLY BOOTSTRAP CSS */
if (savedDir === "rtl") {
  bootstrapLink.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";
  rtlToggle.innerHTML = "LTR";

}

/* ================= THEME TOGGLE ================= */

themeToggle.addEventListener("click", () => {
  const newTheme =
    htmlTag.getAttribute("data-bs-theme") === "light" ? "dark" : "light";

  htmlTag.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

/* ================= RTL TOGGLE ================= */

rtlToggle.addEventListener("click", () => {
  const newDir = htmlTag.getAttribute("dir") === "ltr" ? "rtl" : "ltr";

  htmlTag.setAttribute("dir", newDir);
  localStorage.setItem("direction", newDir);

  if (newDir === "rtl") {
    bootstrapLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.rtl.min.css";
    rtlToggle.innerHTML = "LTR";
  } else {
    bootstrapLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap/5.3.3/dist/css/bootstrap.min.css";
    rtlToggle.innerHTML = "RTL";
  }
});
function updatePrice() {
  const drinkPrice = parseInt(document.getElementById("drinkSelect").value);
  const sizePrice = parseInt(document.getElementById("sizeSelect").value);

  let toppingPrice = 0;
  document.querySelectorAll(".topping:checked").forEach((cb) => {
    toppingPrice += parseInt(cb.value);
  });

  const total = drinkPrice + sizePrice + toppingPrice;
  document.getElementById("totalPrice").innerText = "₹" + total;
}

let slides = document.querySelectorAll(".hero-slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);


const filterButtons = document.querySelectorAll(".btn-category");
const items = document.querySelectorAll(".menu-item");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // ACTIVE BUTTON STYLE
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        items.forEach(item => {

            const category = item.getAttribute("data-category");

            if (filter === "all" || filter === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });
});
