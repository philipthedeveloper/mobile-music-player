import { useContext } from "react";
import styledComponents from "styled-components";
import { database } from "../context";

function CustomWidget({ name, value, color }) {
  return (
    <CustomDiv value={value} color={color}>
      <button>Details</button>
      <p id="task_name">{name}</p>
      <footer>
        <p>{`${value}%`}</p>
        <div id="completion_level"></div>
      </footer>
    </CustomDiv>
  );
}

const CustomDiv = styledComponents.div`
width: 120px;
aspect-ratio: 1 / 1.2;
background-color: ${(props) => props.color};
border-radius: 1.2rem;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0.8rem;
padding-bottom: 1rem;
}

&::before {
  content: '';
  display: block;
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 15px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  left: -45%;
  top: 60%;
}

&::after {
  content: '';
  display: block;
  width: 40%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  right: -25%;
  bottom: 75%;
}

& button {
  align-self: flex-end;
  background-color: transparent;
  color: rgb(215, 228, 244);
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  font-weight: lighter;
  border: 1px solid rgb(215, 228, 244);
  border-radius: 2rem;
}

& p#task_name {
  font-size: 0.85rem;
  color: rgb(215, 228, 244);

   }

   & footer {
     display: flex;
     flex-direction: column;
     & p {
       font-size : 0.6rem;
       color: rgb(215, 228, 244);
       align-self: flex-end;
       margin-bottom: 0.1rem;
      }
      
      & #completion_level {
        width: 100%;
        height: 3px;
        background-color: rgba(215, 228, 244, 0.4);
        border-radius: 1rem;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        
        &::before {
          content: '';
          display: block;
          width: ${(props) => props.value}%;
          height: 100%;
          background-color: rgba(215, 228, 244, 1);
          border-radius: 1rem;
        }
      }
    }
    `;

function RecentWidget(props) {
  const { recentWidget } = useContext(database);
  return (
    <Widget className="recentwidget">
      {recentWidget.map(({ name, completionLevel, color }) => (
        <CustomWidget
          key={completionLevel}
          name={name}
          value={completionLevel}
          color={color}
        />
      ))}
    </Widget>
  );
}

const Widget = styledComponents.div`
  display: grid;
  width: auto;
  grid-template-columns: repeat(3, 120px);
  gap: 0.5rem;
  margin-top: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
`;

export default RecentWidget;
