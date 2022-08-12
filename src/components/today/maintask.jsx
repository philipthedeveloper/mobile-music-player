import styledComponents from "styled-components";

function MainTask() {
  return (
    <>
      <MainContainer>
        <CustomContainer>
          <span></span>
          <span></span>
        </CustomContainer>
        <MainTaskContainer>
          <header>
            <p>Design Meeting</p>
            <p>09 : 30</p>
          </header>
          <p>Make a landing page app and mobile</p>
          <SecondCustomContainer>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </SecondCustomContainer>
        </MainTaskContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styledComponents.div`
display: flex;
margin-top: 1.5rem;`;
const CustomContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span:first-child {
  width: 8px;
  aspect-ratio: 1;
  display: inline-block;
  background-color: rgb(153, 164, 178);
  border-radius: 50%;
  outline: 2px solid rgb(153, 164, 178);
  outline-offset: 2px;
  margin: 4px;
  }
  
  & span:last-child {
    flex: 1;
    width: 2px;
    background-color: rgb(153, 164, 178);
    
  }

`;
const MainTaskContainer = styledComponents.div`
background-color: #333088;
padding: 0.7rem;
margin-left: 0.5rem;
position: relative;
overflow: hidden;
border-radius: 0.8rem;
color: rgb(215, 228, 244);
height: 130px;
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;

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

& header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 0.7rem;
  }
}

& p {
  font-size: 0.6rem;
}

`;
const SecondCustomContainer = styledComponents.div`
  position: relative;
  width: 100%;

& span {
  width: 35px;
  aspect-ratio: 1;
  background-color: #fff;
  border: 3px solid #333088;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

& span:first-child {
  left: 0;
  z-index: 5;
}
& span:nth-child(2) {
  left: -10px;
  z-index: 4;
}
& span:nth-child(3) {
  left: -20px;
  z-index: 3;
}
& span:nth-child(4) {
  left: -30px;
}

`;

export default MainTask;
