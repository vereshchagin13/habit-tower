let floorCount = 0;

function markHabit() {
  floorCount++;
  document.getElementById("tower").innerText = `Этажей: ${floorCount}`;
}
