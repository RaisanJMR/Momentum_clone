// DOM ELEMENTS
const time = document.getElementById('time'),
   greeting = document.getElementById('greeting'),
   name = document.getElementById('name'),
   focus = document.getElementById('focus');
// OPTIONS
const showAmPm = true;
// SHOW TIME
function showTime() {
   let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

   // SET AM OR PM
   const amPm = hour >= 12 ? 'PM' : 'AM';

   // 12 HR FORMAT
   hour = hour % 12 || 12;
   // OUTPUT TIME
   time.innerHTML = `${hour}<span>:</span>${addZero(
      min
   )}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

   setTimeout(showTime, 1000);
}
// ADD ZERO
function addZero(n) {
   return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
// SET BACKGROUND READING
function setBgGreet() {
   let today = new Date(),
      hour = today.getHours();

   if (hour < 12) {
      // MORNING
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      document.body.style.backgroundSize = '100% 100vh';
      greeting.textContent = 'Good Morning';
      document.body.style.color = 'white';
   } else if (hour < 18) {
      // AFTERNOON
      document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
      document.body.style.backgroundSize = '100% 100vh';
      greeting.textContent = 'Good Afternoon';
      document.body.style.color = 'white';
   } else {
      // EVENING
      document.body.style.backgroundImage = "url('../img/morning.jpg')";
      document.body.style.backgroundSize = '100vw 100vh';
      greeting.textContent = 'Good Evening';
      document.body.style.color = '#fff';
   }
}
// SET NAME
function setName(e) {
   if (e.type === 'keypress') {
      // WHICH KEY IS PRESSED
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('name', e.target.innerHTML);
         name.blur();
      } else {
         localStorage.setItem('name', e.target.innerHTML);
      }
   }
}
// SET FOCUS
function setFocus(e) {
   if (e.type === 'keypress') {
      // WHICH KEY IS PRESSED
      if (e.which == 13 || e.keyCode == 13) {
         localStorage.setItem('focus', e.target.innerHTML);
         focus.blur();
      } else {
         localStorage.setItem('focus', e.target.innerHTML);
      }
   }
}
// GET NAME
function getName() {
   if (localStorage.getItem('name') === null) {
      name.textContent = '[Enter name]';
   } else {
      name.textContent = localStorage.getItem('name');
   }
}
// GET FOCUS
function getFocus() {
   if (localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
   } else {
      focus.textContent = localStorage.getItem('focus');
   }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// RUN
showTime();
setBgGreet();
getName();
getFocus();
