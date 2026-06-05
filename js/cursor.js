const sound = new Audio("sound/cursor.mp3");
const mobile = matchMedia("(hover: none), (pointer: coarse)").matches;

let x = 0;
let y = 0;

document.onpointerdown = (e) => {
  x = e.clientX;
  y = e.clientY;
};

document.onpointerup = (e) => {
  if (mobile || e.pointerType === "touch") return;
  if (Math.hypot(e.clientX - x, e.clientY - y) > 4) return;
  if (getSelection()?.toString()) return;

  sound.currentTime = 0;
  sound.play();
};
