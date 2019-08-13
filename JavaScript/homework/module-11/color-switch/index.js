const refs = {
  startBtn: document.querySelector('button[data-action="start"'),
  stopBtn: document.querySelector('button[data-action="stop"')
};
const body = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const color = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.colorId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      body.style.backgroundColor = randomColor;
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.colorId);
  }
};

refs.startBtn.addEventListener("click", color.start.bind(color));
refs.stopBtn.addEventListener("click", color.stop.bind(color));