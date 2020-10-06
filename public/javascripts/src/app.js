import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGirdPlugin from "@fullcalendar/timegrid";
import interActionPlugin, { Draggable } from "@fullcalendar/interaction";
import $ from "jquery";

//function

//calendar
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, listPlugin, timeGirdPlugin, interActionPlugin],
    height: "auto",
    headerToolbar: {
      left: "prevYear,prev,next,nextYear today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    },
    locale: "ko",
    droppable: true,
    drop: function (res) {
      // is the "remove after drop" checkbox checked?
      if (removeCheckbox.checked) {
        // if so, remove the element from the "Draggable Events" list
        res.draggedEl.parentNode.removeChild(res.draggedEl);
      }
    },
    weekNumbers: true,
    editable: true,
    navLinks: true,
    businessHours: true,
    dayMaxEvents: true,
    selectable: true,
    selectMirror: true,
    select: function (res) {
      var title = prompt("Event Title:");
      if (title) {
        calendar.addEvent({
          title: title,
          start: res.start,
          end: res.end,
          allDay: res.allDay,
        });
      } else {
        alert("event is nacessary");
      }
      calendar.unselect();
    },
    eventClick: function (arg) {
      if (confirm("Are you sure you want to delete this event?")) {
        arg.event.remove();
      }
    },
  });

  calendar.render();
});

//jquery
$(function () {
  $(document).ready(function () {});
});
