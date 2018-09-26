const countdown = document.querySelector('countdown');

//set lauch date
const lauchDate = new Date('November 26, 2018 09:00:00').getTime();

//update every second
const intvl = setInterval(() => {
//get todays date and time (ms)
const now = new Date().getTime();

//get distance from now to the lauch Date
const distance = lauchDate - now;
}, 1000);
