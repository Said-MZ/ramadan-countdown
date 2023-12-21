const ramadanDate = new Date(2024, 2, 10);

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const updateTimer = () => {
  const currentDate = new Date();
  const totalSeconds = (ramadanDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 60 / 60 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  const timeFormatter = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  daysElement.innerHTML = timeFormatter(days);
  hoursElement.innerHTML = timeFormatter(hours);
  minutesElement.innerHTML = timeFormatter(minutes);
  secondsElement.innerHTML = timeFormatter(seconds);
};
updateTimer();

setInterval(updateTimer, 1000);
