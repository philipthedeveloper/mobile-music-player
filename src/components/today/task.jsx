import styledComponents from "styled-components";

function Task({ name, description, dueTime }) {
  return (
    <MainContainer>
      <CustomContainer>
        <span></span>
        <span></span>
      </CustomContainer>
      <TaskContainer>
        <header>
          <p>{name}</p>
          <p>{dueTime}</p>
        </header>
        <div className="details">
          <p>{description}</p>
          <i className="fi fi-rr-menu-dots"></i>
        </div>
      </TaskContainer>
    </MainContainer>
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
const TaskContainer = styledComponents.div`
background-color: rgba(92, 177, 211, 0.1);
padding: 0.7rem;
margin-left: 0.5rem;
border-radius: 0.8rem;
color: rgb(153, 164, 178);
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-between;

& header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    font-size: 0.7rem;
    font-weight: bold;
  }
}

& .details {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  align-items: flex-end;
  p {
    font-size: 0.7rem;
    margin-right: 0.2rem;
  }
}


`;

export default Task;
