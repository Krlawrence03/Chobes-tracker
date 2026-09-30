// Last win: Monday, Dec 1, 2025, 11:00 PM Central (CST, UTC-6) = Dec 2, 2025 05:00 UTC
const LAST_WIN_UTC = Date.UTC(2025, 11, 2, 5, 0, 0);

const el = {
  weeks: document.getElementById("weeks"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const total = Math.max(0, Math.floor((Date.now() - LAST_WIN_UTC) / 1000));
  const weeks = Math.floor(total / 604800);
  const days = Math.floor((total % 604800) / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  el.weeks.textContent = weeks;
  el.days.textContent = days;
  el.hours.textContent = pad(hours);
  el.minutes.textContent = pad(minutes);
  el.seconds.textContent = pad(seconds);
}

tick();
setInterval(tick, 1000);

// Rotating roasts
const roasts = [
  "The waiver wire has filed a restraining order.",
  "Even his auto-drafted bench is embarrassed.",
  "His team has more bye weeks than wins.",
  "He is SO bad at fantasy football",
  "He's the reason the league has a last-place punishment.",
  "Opponents schedule him like a bye week.",
  "His lineup looks like it was set by Diggs.",
  "ESPN's win probability chart is negative",
  "He's one win away from ending this website. Take your time.",
];

const roastEl = document.getElementById("roast");
let roastIndex = Math.floor(Math.random() * roasts.length);
roastEl.textContent = roasts[roastIndex];

setInterval(() => {
  roastEl.classList.add("fade");
  setTimeout(() => {
    roastIndex = (roastIndex + 1) % roasts.length;
    roastEl.textContent = roasts[roastIndex];
    roastEl.classList.remove("fade");
  }, 500);
}, 6000);

// "Reset" button that resets nothing
const resetBtn = document.getElementById("reset");
const toast = document.getElementById("toast");
let toastTimer;

resetBtn.addEventListener("click", () => {
  resetBtn.classList.remove("shake");
  void resetBtn.offsetWidth; // restart the animation on repeat clicks
  resetBtn.classList.add("shake");

  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
});
