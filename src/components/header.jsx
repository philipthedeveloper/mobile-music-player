import styledComponents from "styled-components";
import image from "../equalizer.png";

function Header(props) {
  return (
    <>
      <HeadComponent>
        {props.children}
        <HeaderButton>
          <i className="fi fi-br-search"></i>
        </HeaderButton>
        <HeaderButton>
          <img src={image} alt="" />
        </HeaderButton>
      </HeadComponent>
    </>
  );
}

const HeadComponent = styledComponents.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
`;

const HeaderButton = styledComponents.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: 2rem;
  cursor: pointer;
  color: rgb(69, 69, 69);
  font-weight: bolder;
`;

export default Header;
