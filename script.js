document.getElementById("menu").addEventListener("click",openNav);
document.getElementById("close_menu").addEventListener("click",closeNav);

function openNav() {
  document.querySelector(".curtain_nav").style.width = "100%";
}

function closeNav() {
  document.querySelector(".curtain_nav").style.width = "0%";
}
