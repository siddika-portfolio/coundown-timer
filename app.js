const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "1 01 2022";

function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) /1000;
    
    const days = Math.floor(totalSeconds/ 3600/ 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const mins = Math.floor(totalSeconds/ 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerText = formatTime(days);
    hoursEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(mins);
    secondsEl.innerText = formatTime(seconds);

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }

}

countdown();

setInterval(countdown, 1000) 


// const currentTime = newYearDate.getTime();
//     const eventTime = currentDate.getTime()
//     const realTime = eventTime - currentTime
//     // console.log(currentTime, eventTime, realTime);
//     const seconds = Math.floor(totalSeconds / 1000);
//     const mins = Math.floor(seconds / 60);
//     const hours = Math.floor(mins / 60);
//     const days = Math.floor(hours / 24)
