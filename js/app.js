function modaltoggle() {
  const modal = document.querySelector(".modal-container");
  modal.classList.toggle("disable");
}

const modaltrigger = document.getElementById("button");
const fadetrigger = document.querySelector(".fade");

modaltrigger.addEventListener("click", modaltoggle);
fadetrigger.addEventListener("click", modaltoggle);
