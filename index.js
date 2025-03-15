Promise.all([
  fetch("header/header.html").then((res) => res.text()),
  fetch("footer/footer.html").then((res) => res.text()),
  fetch("form/form.html").then((res) => res.text()),
]).then(([headerData, footerData, formData]) => {
  document.getElementById("header").innerHTML = headerData;
  document.getElementById("footer").innerHTML = footerData;

  const btnMenu = document.getElementById("btn__menu");
  const btnClose = document.getElementById("btn__close");
  const sideBar = document.getElementById("sidebar__mobile");

  btnMenu?.addEventListener("click", () => {
    sideBar.classList.add("active");
  });

  btnClose?.addEventListener("click", () => {
    sideBar.classList.remove("active");
  });
  document.getElementById("form").innerHTML = formData;
});
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const slideWidth = document.querySelector(".slide").offsetWidth + 8;

let currentPosition = 0;

nextBtn.addEventListener("click", () => {
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  currentPosition = Math.min(currentPosition + slideWidth, maxScroll);
  slider.style.transform = `translateX(-${currentPosition}px)`;
});

prevBtn.addEventListener("click", () => {
  currentPosition = Math.max(currentPosition - slideWidth, 0);
  slider.style.transform = `translateX(-${currentPosition}px)`;
});
