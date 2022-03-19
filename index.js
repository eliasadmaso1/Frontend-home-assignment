function dayEvents(events) {
  var eventsLength = events.length;
  var minutes = [];
  var event, i, j;

  events = events.sort(function (a, b) {
    return a.id - b.id;
  });

  for (i = 0; i < 720; i++) {
    minutes[i] = [];
  }
  console.log(minutes);

  for (i = 0; i < eventsLength; i++) {
    event = events[i];

    for (j = event.start; j < event.end; j++) {
      minutes[j].push(event.id);
    }
  }

  for (i = 0; i < 720; i++) {
    var next_hindex = 0;
    var eventsLengthInMinute = minutes[i].length;

    if (eventsLengthInMinute > 0) {
      for (j = 0; j < eventsLengthInMinute; j++) {
        event = events[minutes[i][j] - 1];

        if (!event.collision || event.collision < eventsLengthInMinute) {
          event.collision = eventsLengthInMinute;

          if (!event.hindex) {
            event.hindex = next_hindex;

            next_hindex++;
          }
        }
      }
    }
  }

  for (i = 0; i < events.length; i++) {
    event = events[i];


    event.width = 498 / event.collision;

    event.left = event.hindex * event.width;

    var div = document.createElement("div");

    div.style.width = event.width + "px";
    div.style.height = event.end - event.start + "px";
    div.style.top = event.start + "px";
    div.style.left = event.left + "px";
    div.style.position = "absolute";
    div.style.background = "white";
    div.style.borderLeft = "solid 2px #809fff";

    console.log(document);
    document.getElementById("calander").appendChild(div);
  }
}

var events = [
  { id: 1, start: 90, end: 130 },
  { id: 2, start: 105, end: 135 },
  { id: 3, start: 120, end: 240 },
  { id: 4, start: 180, end: 260 },
  { id: 5, start: 500, end: 560 },
];

dayEvents(events);
