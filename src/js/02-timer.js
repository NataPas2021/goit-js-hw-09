import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const refs = {
  calendar: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      dateChecking(selectedDates[0]);
    },
  };

const datePicker = flatpickr(refs.calendar, options);

const isActive = true;
const INTERVAL_DELAY = 1000; 
let intervalId = null;

refs.startBtn.disabled = true;

refs.startBtn.addEventListener('click', onClickStart);

function dateChecking(date) {
  const currentDate = new Date();
  if(currentDate > date) {
    return Notify.failure('Please choose a date in the future')
  } refs.startBtn.disabled = !isActive;

}

function onClickStart(e) {
  countdown();
  refs.startBtn.disabled = isActive; 
  refs.calendar.disabled = isActive;
}

function countdown() {
   intervalId = setInterval(() => {
    const diff = datePicker.selectedDates[0] - Date.now();
    const convertedTime = convertMs(diff);
    if(diff < 1000) {
      clearInterval(intervalId);
    }
    updateClockface(convertedTime);
    
   }, INTERVAL_DELAY)
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


function updateClockface ({days, hours, minutes, seconds}) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
};