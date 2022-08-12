const today = new Date();
const date = today.getDate();
const year = today.getFullYear();
const day = today.getDay();
const month = today.getMonth();

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// function checkFebruary() {
//   if (year % 4 === 0) {
//     return 29;
//   }
//   return 28;
// }

// const Feb = checkFebruary();

// const monthsDay = {
//   Jan: 31,
//   Feb: Feb,
//   Mar: 31,
//   Apr: 30,
//   May: 31,
//   Jun: 30,
//   July: 31,
//   Aug: 31,
//   Sept: 30,
//   Oct: 31,
//   Nov: 30,
//   Dec: 31,
// };

let todayDate;

function setToday() {
  todayDate = months[month];
  todayDate += `, ${date} ${year}`;
}

setToday();

function calender() {
  return {
    day: days[day],
    date: date,
  };
}

const todayIs = calender();
export { todayDate, todayIs, days };

// console.log(days[day]);
// function otherDays() {
//   let other = {};
//   let today = days[day];
//   if (date > 1 && date < 7) {
//     switch (today) {
//       case "SUN":
//         let lastMonth = monthsDay[month - 1];
//         days.forEach((day, index) => {
//           if (day === "SUN") {
//             other = { ...other, [day]: date };
//           } else {
//             other = { ...other, [day]: lastMonth - (index - 1) };
//           }
//         });
//         return other;
//       case "MON":

//     }
//   }
// }
