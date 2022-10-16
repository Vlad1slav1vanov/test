const timesLists = document.querySelectorAll('.ticket__benefit--times');
const TIMES_COUNT = 4;

const hideTimes = (times) => {
  for (let i = TIMES_COUNT - 1; i < times.length; i++) {
    times[i].classList.add('visually-hidden');
  }
}

const showTimes = (times) => {
  for (let i = TIMES_COUNT - 1; i < times.length; i++) {
    times[i].classList.remove('visually-hidden');
  }
}

timesLists.forEach(timesList => {
  const buttonMore = document.createElement('button');
  buttonMore.classList.add('ticket__available-time');
  buttonMore.style.border = 'none';
  buttonMore.textContent = 'Еще...';
  const availableTimeList = timesList.querySelectorAll('a');
  if (availableTimeList.length > TIMES_COUNT) {
    hideTimes(availableTimeList);
    timesList.appendChild(buttonMore);
    buttonMore.addEventListener('click', (evt) => {
      evt.preventDefault();
      showTimes(availableTimeList);
      timesList.removeChild(buttonMore);
    })
  }
});











