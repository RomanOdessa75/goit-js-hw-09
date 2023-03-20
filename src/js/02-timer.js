import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const text = document.querySelector('#datetime-picker');
const timerHtml = document.querySelector('.timer');
const startButton = document.querySelector('button[data-start]');
const seconds = document.querySelector('span[data-seconds]');
const minutes = document.querySelector('span[data-minutes]');
const hours = document.querySelector('span[data-hours]');
const days = document.querySelector('span[data-days]');

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(text, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startButton.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(text.value) - new Date();
    startButton.disabled = true;
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      days.textContent = addLeadingZero(timeObject.days);
      hours.textContent = addLeadingZero(timeObject.hours);
      minutes.textContent = addLeadingZero(timeObject.minutes);
      seconds.textContent = addLeadingZero(timeObject.seconds);
      if (countdown <= 10000) {
        timerHtml.style.color = 'tomato';
      }
    } else {
      Notiflix.Notify.success('Countdown finished');
      timerHtml.style.color = 'black';
      clearInterval(timer);
    }
  }, 1000);
});

// styles

timerHtml.style.display = 'flex';
timerHtml.style.justifyContent = 'space-between';
timerHtml.style.width = '250px';
timerHtml.style.gap = '10px';
timerHtml.style.alignItems = 'center';

const fieldElfst = document.querySelectorAll('.field')[0];
const fieldElscd = document.querySelectorAll('.field')[1];
const fieldElthd = document.querySelectorAll('.field')[2];
const fieldElfth = document.querySelectorAll('.field')[3];

fieldElfst.style.display = 'flex';
fieldElfst.style.flexDirection = 'column';
fieldElfst.style.justifyContent = 'center';
fieldElfst.style.width = '100px';

fieldElscd.style.display = 'flex';
fieldElscd.style.flexDirection = 'column';
fieldElscd.style.justifyContent = 'center';
fieldElscd.style.width = '100px';

fieldElthd.style.display = 'flex';
fieldElthd.style.flexDirection = 'column';
fieldElthd.style.justifyContent = 'center';
fieldElthd.style.width = '100px';

fieldElfth.style.display = 'flex';
fieldElfth.style.flexDirection = 'column';
fieldElfth.style.justifyContent = 'center';
fieldElfth.style.width = '100px';

days.style.fontSize = '35px';
days.style.textAlign = 'center';
hours.style.fontSize = '35px';
hours.style.textAlign = 'center';
minutes.style.fontSize = '35px';
minutes.style.textAlign = 'center';
seconds.style.fontSize = '35px';
seconds.style.textAlign = 'center';

const labelElfst = document.querySelectorAll('.label')[0];
labelElfst.style.textAlign = 'center';
const labelElscd = document.querySelectorAll('.label')[1];
labelElscd.style.textAlign = 'center';
const labelElthd = document.querySelectorAll('.label')[2];
labelElthd.style.textAlign = 'center';
const labelElfth = document.querySelectorAll('.label')[3];
labelElfth.style.textAlign = 'center';
