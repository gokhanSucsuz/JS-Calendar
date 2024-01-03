function nowDateFunction() {
  const nowDate = new Date();
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");
  let format = document.querySelector(".format");
  format.innerHTML = nowDate.getHours() > 12 ? "PM" : "AM";
  hours.innerHTML =
    nowDate.getHours() == 0 ? (hours.innerHTML = 12) : nowDate.getHours();
  hours.innerHTML =
    nowDate.getHours() < 10
      ? (hours.innerHTML = "0" + nowDate.getHours())
      : nowDate.getHours();
  minutes.innerHTML =
    nowDate.getMinutes() < 10
      ? (minutes.innerHTML = "0" + nowDate.getMinutes())
      : nowDate.getMinutes();
  seconds.innerHTML =
    nowDate.getSeconds() < 10
      ? (seconds = "0" + nowDate.getSeconds())
      : nowDate.getSeconds();
}
nowDateFunction();
setInterval(nowDateFunction, 1000);
let dateFunction = new Date();
const months = document.querySelector(".month");
const now = document.querySelector(".now");
now.innerHTML = new Date(
  dateFunction.getFullYear(),
  dateFunction.getMonth(),
  dateFunction.getDay() + 1
).toDateString();
const prev = document.querySelector(".carousel-control-prev-icon");
const next = document.querySelector(".carousel-control-next-icon");
const days = document.querySelector(".days");
function getCalendar() {
  const months = document.querySelector(".month");
  let monthName = dateFunction.toLocaleString("en", { month: "long" });
  months.innerHTML = monthName + " - " + dateFunction.getFullYear();
  let prevMonthDays = dateFunction.getDate();
  let nextMonthDays = dateFunction.getDate();
  let year = dateFunction.getFullYear();
  let month = dateFunction.getMonth();
  var today = dateFunction.getDay(2024, 0);
  let thisMonthDays = new Date(year, month + 1, 0).getDate();
  let lastDay = new Date(year, month + 1, 0).getDay();
  let firstDay = new Date(
    dateFunction.getFullYear(),
    dateFunction.getMonth(),
    1
  ).getDay();
  console.log(firstDay);
  if (month == 0) prevMonthDays = new Date(year - 1, 12, 0).getDate();
  else prevMonthDays = new Date(year, month + 1, 0).getDate();
  console.log(
    `${dateFunction.toLocaleString("default", {
      month: "long"
    })} ayı gün sayısı`,
    prevMonthDays
  );
  if (month == 11) nextMonthDays = new Date(year + 1, 1, 0).getDate();
  else nextMonthDays = new Date(year, month + 2, 0).getDate();
  if (true) {
    if (today % 7 == 0) today = 0;
    else if (today % 7 == 1) today = 1;
    else if (today % 7 == 2) today = 2;
    else if (today % 7 == 3) today = 3;
    else if (today % 7 == 4) today = 4;
    else if (today % 7 == 5) today = 5;
    else if (today % 7 == 6) today = 6;

    for (let i = prevMonthDays - firstDay; i < prevMonthDays; i++) {
      let day = document.createElement("div");
      day.classList.add(
        "p-2",
        "shadow-sm",
        "rounded-3",
        "bg-white",
        "text-warning",
        "opacity-50",
        "day"
      );
      day.innerHTML = i;
      days.append(day);
    }
  }

  for (let i = 1; i <= thisMonthDays; i++) {
    let day = document.createElement("div");
    day.classList.add(
      "p-2",
      "shadow-sm",
      "rounded-3",
      "bg-white",
      "text-warning",
      "day"
    );
    i == 1 ? day.classList.add("active-day") : "";
    day.innerHTML = i;
    days.append(day);
  }
  if (lastDay == 6) lastDay = -1;
  for (let i = 1; i <= 7 - (lastDay + 1); i++) {
    let day = document.createElement("div");
    day.classList.add(
      "p-2",
      "shadow-sm",
      "rounded-3",
      "bg-white",
      "text-warning",
      "opacity-50",
      "day"
    );
    day.innerHTML = i;
    days.append(day);
  }
  const mounthDays = document.querySelectorAll(".day");
  mounthDays.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      const btnWeeks = document.querySelectorAll(".btn-week");
      btnWeeks.forEach((item, index) => {
        item.classList.remove("btn-dark");
      });
      console.log(index);
      if (index == 0 || index == 7 || index == 14 || index == 21 || index == 28)
        btnWeeks[0].classList.add("btn-dark");
      else if (
        index == 1 ||
        index == 8 ||
        index == 15 ||
        index == 22 ||
        index == 29
      )
        btnWeeks[1].classList.add("btn-dark");
      else if (
        index == 2 ||
        index == 9 ||
        index == 16 ||
        index == 23 ||
        index == 30
      )
        btnWeeks[2].classList.add("btn-dark");
      else if (
        index == 3 ||
        index == 10 ||
        index == 17 ||
        index == 24 ||
        index == 31
      )
        btnWeeks[3].classList.add("btn-dark");
      else if (
        index == 4 ||
        index == 11 ||
        index == 18 ||
        index == 25 ||
        index == 32
      )
        btnWeeks[4].classList.add("btn-dark");
      else if (
        index == 5 ||
        index == 12 ||
        index == 19 ||
        index == 26 ||
        index == 33
      )
        btnWeeks[5].classList.add("btn-dark");
      else if (
        index == 6 ||
        index == 13 ||
        index == 20 ||
        index == 27 ||
        index == 34
      )
        btnWeeks[6].classList.add("btn-dark");

      mounthDays.forEach((item, index) => {
        item.classList.remove("active-day");
      });
      event.target.classList.add("active-day");

      now.innerHTML = new Date(
        year,
        month,
        event.target.textContent
      ).toDateString();
    });
  });
}
prev.addEventListener("click", () => {
  changeDate("prev");
});
next.addEventListener("click", () => {
  changeDate("next");
});
function changeDate(value) {
  const btnWeeks = document.querySelectorAll(".btn-week");
  if (value == "prev") {
    days.innerHTML = "";
    if (dateFunction.getMonth() != 0)
      dateFunction.setMonth(dateFunction.getMonth() - 1);
    else {
      dateFunction.setMonth(11);
      dateFunction.setFullYear(dateFunction.getFullYear() - 1);
    }
    btnWeeks.forEach((item, index) => {
      item.classList.remove("btn-dark");
    });
    getCalendar();
  } else if (value == "next") {
    days.innerHTML = "";
    if (dateFunction.getMonth() != 12)
      dateFunction.setMonth(dateFunction.getMonth() + 1);
    else {
      dateFunction.setMonth(1);
      dateFunction.setFullYear(dateFunction.getFullYear() + 1);
    }
    btnWeeks.forEach((item, index) => {
      item.classList.remove("btn-dark");
    });
    getCalendar();
  }
}
getCalendar();
