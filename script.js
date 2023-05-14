
function gotop() {
  window.scrollTo({
    top: 0
  })
}


const xbutton = document.querySelector(".navbar-button");
const clicking = document.querySelector(".when-click");

function responsive() {
  if (clicking.style.display === "flex") {
    clicking.style.display = "none";
    xbutton.innerHTML = `<img class="navbar-img" src="navbar.jpg" alt="navbar">`;
  }else {
    xbutton.innerHTML = `<img class="navbar-img" src="x-icon.jpg" alt="navbar">`;
    clicking.style.display = "flex";
  }
}
