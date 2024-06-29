function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  document.getElementById("hours").innerHTML = pad(hours);
  document.getElementById("minutes").innerHTML = pad(minutes);
  document.getElementById("seconds").innerHTML = pad(seconds);
}

function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

setInterval(updateClock, 1000); // update clock every 1 second
updateClock(); // initial update