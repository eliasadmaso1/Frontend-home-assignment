const eventsContainer = document.querySelector("#container");
const houresContainer = document.querySelector("#houres");

const houres = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

for (let i = 0; i < houres.length; i++) {
  houresContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="houre">${houres[i]}</div>`
  );
}

const events = [
  { id: 1, start: 90, end: 130, left: 0, width: 166 },
  { id: 2, start: 105, end: 135, left: 166, width: 166 },
  { id: 3, start: 120, end: 240, left: 332, width: 166 },
  { id: 4, start: 180, end: 260, left: 0, width: 332 },
  { id: 5, start: 500, end: 560, left: 0, width: 500 },
];

for (let i = 0; i < events.length; i++) {
  eventsContainer.insertAdjacentHTML(
    'beforeend',
    `<div style="position:absolute;left:${events[i].left}px; width:${events[i].width}px; top:${events[i].start}px; height:${events[i].end - events[i].start}px; background:white;border:solid 0.5px gray;">
    <h1 style="font-size:8px; color:#6699ff">Sample Item</h1>
    <h1 style="font-size:7px; color: #737373">Sample Location</h1>

    </div>`
  );
}
