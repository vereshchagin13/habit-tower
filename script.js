let floorCount = 0;

// Получаем объект Telegram WebApp
const tg = window.Telegram.WebApp;

// Получаем данные пользователя
const user = tg.initDataUnsafe?.user;

if (user) {
  const name = user.first_name + (user.last_name ? ' ' + user.last_name : '');
  const username = user.username || '';
  document.body.insertAdjacentHTML("afterbegin", `<p>👤 Привет, ${name} (@${username})</p>`);
  console.log("Telegram User:", user);
} else {
  document.body.insertAdjacentHTML("afterbegin", `<p>👤 Не удалось получить данные пользователя 😢</p>`);
}

function markHabit() {
  floorCount++;
  document.getElementById("tower").innerText = `Этажей: ${floorCount}`;
}
