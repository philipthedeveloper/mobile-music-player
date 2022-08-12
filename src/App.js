import "./App.css";
import Home from "./components/home/home";
import Today from "./components/today/today";
import AddTask from "./components/addtask";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Database from "./components/context";

function App() {
  return (
    <Database>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
        </Routes>
      </BrowserRouter>
      <AddTask />
    </Database>
  );
}

export default App;
