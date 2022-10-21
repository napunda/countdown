function modaltoggle() {
  const modal = document.querySelector(".modal-container");
  modal.classList.toggle("disable");
}

const modaltrigger = document.getElementById("button");
const fadetrigger = document.querySelector(".fade");

modaltrigger.addEventListener("click", modaltoggle);
fadetrigger.addEventListener("click", modaltoggle);

const countdown = () => {
  const targetDate = new Date("2022/10/21 11:30:00:00").getTime();
  const now = new Date().getTime();
  const gap = targetDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const daysText = Math.floor(gap / days);
  const hoursText = Math.floor((gap % days) / hours);
  const minutesText = Math.floor((gap % hours) / minutes);
  const secondsText = Math.floor((gap % minutes) / seconds);

  if (gap > 0) {
    document.querySelector(".days p").innerHTML =
      daysText < 10 ? "0" + daysText : daysText;
    document.querySelector(".hours p").innerHTML =
      hoursText < 10 ? "0" + hoursText : hoursText;
    document.querySelector(".minutes p").innerHTML =
      minutesText < 10 ? "0" + minutesText : minutesText;
    document.querySelector(".seconds p").innerHTML =
      secondsText < 10 ? "0" + secondsText : secondsText;
  }
};

setInterval(() => {
  countdown();
}, 1000);
