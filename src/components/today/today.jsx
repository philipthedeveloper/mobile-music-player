import { Link } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Date from "./dateC";
import DateIs from "../dateIs";
// import { todayIs } from "./date";
import MainTask from "./maintask";
import Task from "./task";
import { database } from "../context";
import { useContext } from "react";

function Today() {
  const { todayTask } = useContext(database);

  return (
    <>
      <Header>
        <Link to="/" style={backArrowStyle}>
          <i className="fi fi-br-arrow-left"></i>
        </Link>
      </Header>
      <Date />
      <DateIs />
      <MainTask />
      {todayTask.map((task) => {
        return <Task key={task.name} {...task} />;
      })}
      <Footer />
    </>
  );
}

const backArrowStyle = {
  textDecoration: `none`,
  marginRight: `auto`,
};

export default Today;
