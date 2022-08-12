import { Link } from "react-router-dom";
import styledComponents from "styled-components";

function MyTask(props) {
  return (
    <>
      <TaskContainer>
        <h4>My tasks</h4>
        <nav>
          <UlTask>
            <li>
              <Link to="/">Recently</Link>
            </li>
            <li>
              <Link to="/Today">Today</Link>
            </li>
            <li>
              <Link to="/Upcoming">Upcoming</Link>
            </li>
            <li>
              <Link to="/Later">Later</Link>
            </li>
          </UlTask>
        </nav>
      </TaskContainer>
    </>
  );
}

const TaskContainer = styledComponents.div`
  margin-top: 1.5rem;

  & h4 {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
    color: hsl(60,10%,20%);
  }
`;

const UlTask = styledComponents.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    text-decoration: none;
    font-size: 0.75rem;
    color: rgb(153, 164, 178);
    font-weight: 500; 
  }
   & li:first-child a {
      color: rgb(128, 101, 231);
   }
  `;

export default MyTask;
