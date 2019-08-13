const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}

class  CountdownTimer {
  constructor({selector, targetDate}) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.timerId = null;
      this.start();
      this.stop();
  }

  start() {
    this.timerId = setInterval(() => {
      const startTime = Date.now();
      const currentDate = this.targetDate.getTime();
      const time = currentDate - startTime;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      function updateClock(days, hours, mins, secs) {
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.mins.textContent = mins;
        refs.secs.textContent = secs;
      };
      updateClock(days, hours, mins, secs);
    }, 1000);
  }
  stop() {
    clearInterval(this.TimerId);
  }

}

const h = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 20, 2019'),
});