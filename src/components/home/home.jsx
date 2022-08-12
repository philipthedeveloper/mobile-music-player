import Footer from "../footer";
import Menu from "./menu";
import Header from "../header";
import User from "./user";
import MyTask from "./mytask";
import RecentWidget from "./recentwidget";
import RecentDivComp from "./recentdiv";
import { database } from "../context";
import { useContext } from "react";

function Home() {
  const { recentDiv } = useContext(database);
  return (
    <>
      <Header>
        <Menu />
      </Header>
      <User />
      <MyTask />
      <RecentWidget />
      {recentDiv.map(({ name, date }) => (
        <RecentDivComp key={name} name={name} date={date} />
      ))}
      <Footer />
    </>
  );
}

export default Home;
