window.onload = () => {
  let tens = "00";
  let second = "00";

  // call html

  let appendtens = document.getElementById("tens");
  let appendseconds = document.getElementById("seconds");

  let btnStart = document.getElementById("btn-start");
  let btnStop = document.getElementById("btn-stop");
  let btnReset = document.getElementById("btn-reset");

  let Interval;

  btnStart.onclick = () => {
    Interval = setInterval(startTimer, 10);
  };

  btnStop.onclick = () => {
    clearInterval(Interval);
  };
  btnReset.onclick = () => {
    clearInterval(Interval);

    tens = "00";
    second = "00";
    appendtens.innerHTML = tens;
    appendseconds.innerHTML = second;
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      appendtens.innerHTML = "0" + tens;
    } else {
      appendtens.innerHTML = tens;
    }
    if (tens > 99) {
      tens = 0;
      second++;
      appendseconds.innerHTML = "0" + second;
      appendtens.innerHTML = "0" + 0;
    }
    if (second > 9) {
      appendseconds.innerHTML = second;
    }
  }
};
