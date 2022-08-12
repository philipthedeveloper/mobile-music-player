import React, { useEffect, useState } from "react";

const database = React.createContext();
export { database };

let form;

const recentWidget = [
  {
    name: "User interface design",
    completionLevel: 50,
    color: "rgb(128, 101, 231)",
  },
  {
    name: "Wireframe elements",
    completionLevel: 30,
    color: "#333088",
  },
  {
    name: "Landing page design",
    completionLevel: 70,
    color: "#000",
  },
];

const recentDiv = [
  { name: `Learn Firebase`, date: `20 April, 2022` },
  { name: `Visit LinkedIn`, date: `17 March, 2022` },
  { name: `Learn Node.js`, date: `12 April;, 2022` },
  { name: `Review Express`, date: `21 February, 2022` },
];

const todayTask = [
  {
    name: "Learn Firebase",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.",
    dueTime: "09 : 30",
  },
  {
    name: "Review Express",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.",
    dueTime: "10 : 45",
  },
  {
    name: "Visit LinkedIn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.",
    dueTime: "11 : 15",
  },
  {
    name: "Learn Node.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.",
    dueTime: "01 : 25",
  },
];

function Database(props) {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    form = document.querySelector("form");
    // root = document.querySelector("#root");
    // root.addEventListener("click", closeForm);
  }, []);

  // function closeForm(e) {
  //   e.stopPropagation();
  //   // e.stopImmediatePropagation();
  //   console.log(e.target);
  //   if (e.target !== form) {
  //     if (showForm) {
  //       form.style.transform = `scaleY(0)  translateX(-50%)`;
  //       setShowForm(false);
  //     }
  //   }
  // }

  function setForm() {
    if (!showForm) {
      form.style.transform = `scaleY(1)  translateX(-50%)`;
      setShowForm(true);
    } else {
      form.style.transform = `scaleY(0)  translateX(-50%)`;
      setShowForm(false);
    }
  }

  return (
    <database.Provider value={{ recentWidget, recentDiv, todayTask, setForm }}>
      {props.children}
    </database.Provider>
  );
}

export default Database;
