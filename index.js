Promise.all([
  fetch("header/header.html").then((res) => res.text()),
  fetch("footer/footer.html").then((res) => res.text()),
  fetch("form/form.html").then((res) => res.text()),
]).then(([headerData, footerData, formData]) => {
  document.getElementById("header").innerHTML = headerData;
  document.getElementById("footer").innerHTML = footerData;
  document.getElementById("form").innerHTML = formData;

  const btnMenu = document.getElementById("btn__menu");
  const btnClose = document.getElementById("btn__close");
  const sideBar = document.getElementById("sidebar__mobile");

  btnMenu?.addEventListener("click", () => {
    sideBar.classList.add("active");
  });

  btnClose?.addEventListener("click", () => {
    sideBar.classList.remove("active");
  });
});
