const navToggle = document.querySelector("#burger");
const ul = document.querySelector("nav ul");

navToggle.addEventListener("click", function () {
  ul.classList.toggle("show");
});

// dark-mode

const themeToggleBtn = document.querySelector("#theme-toggle");
const theme = localStorage.getItem("theme");

theme && document.body.classList.add(theme);

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.removeItem("theme");
  }
});


// form submit
const scriptURL = "https://script.google.com/macros/s/AKfycbwCqtL-KEKLXYuz_bJotwyOgSJrEwq_jw_YhDuwqCVU6rsZWGf6-j9QL9VqFh-7Y14c/exec";
const form = document.forms["form-submit"];
const btnKirim = document.querySelector('.btn-kirim');
const loading = document.querySelector('.loading');
const alert = document.querySelector('.alert');

document.querySelector('.dismisalert').addEventListener('click', ()=>{
  alert.classList.toggle("d-none");
});



form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnKirim.classList.toggle("d-none");
  loading.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response)    
      btnKirim.classList.toggle("d-none");
      loading.classList.toggle("d-none");
      alert.classList.toggle("d-none");
      form.reset();
  })
    .catch((error) => console.error("Error!", error.message));
});
