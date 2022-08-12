import styledComponents from "styled-components";

function RecentDivComp({ name, date }) {
  return (
    <>
      <RecentDiv>
        <ImageDiv>
          <span className="material-icons-round">task</span>
        </ImageDiv>
        <TaskInfo>
          <h5>{name}</h5>
          <p>{date}</p>
        </TaskInfo>
        <i className="fi fi-rr-menu-dots-vertical"></i>
      </RecentDiv>
    </>
  );
}

const RecentDiv = styledComponents.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem 1rem;
  padding-right: 0.5rem;
  border-radius: 1rem;
  background-color: rgba(92, 177, 211, 0.1);

  & i {
    margin-left: auto;
  }
`;
const ImageDiv = styledComponents.div`
  & span {
    background-color :#333088;
    color: white;
    padding: 0.5rem;
    font-size: 1.3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
const TaskInfo = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & p{
    margin-top: 0.2rem;
    font-size: 0.7rem;
  }
`;
export default RecentDivComp;
