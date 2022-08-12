import styledComponents from "styled-components";
import { todayDate } from "./date";

function Date() {
  return (
    <DateContainer>
      <p>{todayDate}</p>
      <h4>Today</h4>
    </DateContainer>
  );
}

const DateContainer = styledComponents.div`
margin-top: 2rem;

& p {
  font-size: 0.6rem;
  margin-bottom: 0.2rem;
}
`;

export default Date;
