import styledComponents from "styled-components";

function Menu() {
  return (
    <>
      <NewDiv>
        <SpanMenu></SpanMenu>
        <SpanMenu></SpanMenu>
        <SpanMenu></SpanMenu>
      </NewDiv>
    </>
  );
}

const NewDiv = styledComponents.div`
  width: 22px;
  aspect-ratio: 1 / 0.6;
  // height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: auto;

  & span:first-child {
    transform: scaleX(0.5);
    transform-origin: left;
  }

  & span:last-child {
    transform: scaleX(0.5);
    transform-origin: right;
  }
`;

const SpanMenu = styledComponents.span`
  display: inline-block;
  width: 100%;
  height: 3px;
  border-radius: 30%;  
  background-color: rgb(69, 69, 69);
`;

export default Menu;
