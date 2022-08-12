import { useContext } from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { database } from "./context";

function Footer() {
  const { setForm } = useContext(database);

  return (
    <>
      <NavFooter>
        <UlFooter>
          <li>
            <Link to="/" style={linkStyle} id="home">
              <i className="fi fi-rr-home"></i>
            </Link>
          </li>
          <li>
            <Link to="/notification" style={linkStyle}>
              <i className="fi fi-rr-envelope"></i>
            </Link>
          </li>
          <li>
            <ButtonFooter id="addTask" onClick={setForm}>
              <i className="fi fi-br-plus"></i>
            </ButtonFooter>
          </li>
          <li>
            <Link to="/collection" style={linkStyle}>
              <i className="fi fi-rr-picture"></i>
            </Link>
          </li>
          <li>
            <Link to="/profile" style={linkStyle}>
              <i className="fi fi-rr-user"></i>
            </Link>
          </li>
        </UlFooter>
      </NavFooter>
    </>
  );
}

const NavFooter = styledComponents.nav`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 280px;
  min-width: 275px;
  margin: auto;
  // border-bottom-left-radius: 2rem;
  // border-bottom-right-radius: 2rem;
  box-shadow: 0px -3px 8px rgb(128, 101, 231, 0.3);
  &::after {
    content: ' ';
    display: block;
    width: 30%;
    height: 3px;
    background-color: rgb(153, 164, 178); 
    border-radius: 0.4rem;
    position: absolute;
    z-index: 6;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const UlFooter = styledComponents.ul`
  display: flex;
  justify-content: space-between;
  align-items:center;
  list-style: none;
  padding: 0.5rem 2rem 1.2rem;
`;

const ButtonFooter = styledComponents.button`
  border: none;
  outline: none;
  background-color: rgb(128, 101, 231);
  color: white;
  padding: 0.7rem 0.8rem;
  border-radius: 0.6rem;
  box-shadow: inset 0px 0px 4px hsl(252, 73%, 60%);
  &:hover {
    background-color: #343091;
  }
`;

const linkStyle = {
  textDecoration: "none",
  color: `rgb(153, 164, 178)`,
};

export default Footer;
