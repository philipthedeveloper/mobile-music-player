import styledComponents from "styled-components";
import { days, todayIs } from "./today/date";

function DateIs() {
  let { day: today, date } = todayIs;

  const indexOfToday = days.indexOf(today);
  return (
    <DateContainer>
      {days.map((day, index) => {
        if (indexOfToday === index) {
          return <MiniDate key={index} day={day} date={date} attr="today" />;
        } else if (index > indexOfToday) {
          return <MiniDate key={index} day={day} date={date + index} />;
        } else {
          return (
            <MiniDate
              key={index}
              day={day}
              date={date - (indexOfToday - index)}
            />
          );
        }
      })}
    </DateContainer>
  );
}

function MiniDate({ day, date, attr }) {
  let classN = attr ? attr : "";
  return (
    <UlContainer id={classN}>
      <li>{day}</li>
      <li>{date}</li>
    </UlContainer>
  );
}

const DateContainer = styledComponents.div`
display: flex;
justify-content: space-between;
margin-top: 1.4rem
`;

const UlContainer = styledComponents.ul`
display: flex;
flex-direction: column;
align-items: center;  

& li {
  font-size: 0.6rem;
  margin-top: 0.3rem;
}

& li:first-child, &#today li:last-child {
  color: rgb(153, 164, 178);
}

& li:last-child, &#today li:first-child {
  color: #333088;
  font-weight: bold;
}
`;

export default DateIs;
