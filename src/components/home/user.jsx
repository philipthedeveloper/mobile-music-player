import styledComponents from "styled-components";

function User() {
  return (
    <>
      <UserContainer>
        <ImageDiv>
          <span className="material-icons-round">person</span>
        </ImageDiv>
        <UserInfo>
          <h4>Hi, Maxwell</h4>
          <p>Welcome back</p>
        </UserInfo>
      </UserContainer>
    </>
  );
}

const UserContainer = styledComponents.div`
  display: flex;
  margin-top: 2rem;
`;
const ImageDiv = styledComponents.div`
  & span {
    background-color :#333088;
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
const UserInfo = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & p{
    font-size: 0.75rem;
  }
`;

export default User;
