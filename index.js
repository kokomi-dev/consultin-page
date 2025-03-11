document.getElementById("header").innerHTML = fetch("header/header.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("header").innerHTML = data));

document.getElementById("footer").innerHTML = fetch("footer/footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));
