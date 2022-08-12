import styledComponents from "styled-components";
import DateIs from "./dateIs";
import { database } from "./context";
import { useContext } from "react";

function AddTask() {
  const { setForm } = useContext(database);
  return (
    <>
      <FormContainer action="">
        <i className="fi fi-sr-cross-circle close" onClick={setForm}></i>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Task Title" />
        </div>
        <div className="creation_date">
          <label htmlFor="creationn_date">Creation Date</label>
          <input
            type="text"
            name="creation_date"
            id="creation_date"
            placeholder="Creation date"
          />
        </div>
        <div className="start_date">
          <header>
            <p>Start date & time</p>
            <p>
              August<i className="fi fi-bs-angle-down"></i>
            </p>
          </header>
          <DateIs />
          <footer>
            <p>Get alert for this task</p>
            <div className="button">
              <span>ON</span>
              <span>OFF</span>
            </div>
          </footer>
          <button>Create Task</button>
        </div>
      </FormContainer>
    </>
  );
}

const FormContainer = styledComponents.form`
  position: fixed;
  bottom: 0;
  left: 50%;  
  transform: scaleY(0) translateX(-50%);
  transform-origin: bottom;
  transition: 0.5s ease;
  overflow: hidden;
  background-color: #fff;
  width: 280px;
  border-radius: 2rem 2rem 0 0;
  padding: 1.5rem 1rem 2rem 1rem;
  z-index: 14;
  box-shadow: 0px -3px 8px rgb(128, 101, 231, 0.3);

  & i.close {
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    color: #333088;
  }

  &::before {
    content: ' ';
    display: block;
    width: 30%;
    height: 3px;
    background-color: rgb(153, 164, 178); 
    border-radius: 0.4rem;
    position: absolute;
    z-index: 6;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
  }


  & div.title, & div.creation_date {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0rem;

    & label {
      margin-bottom: 0.5rem;
      font-weight: bolder;
      font-size: 0.7rem;
      color: #333088;
    }

    & input {
      border: none;
      outline: none;
      background-color: rgba(92, 177, 211, 0.1);
      padding: 0.8rem;
      border-radius: 0.5rem;
      font-weight: 500;  
      color: rgb(128, 101, 231);
      font-size: 0.75rem;
    }
  }

  & .start_date header {
    display: flex;
    justify-content: space-between;

    & p {
      display: flex;
      align-items: center;
      font-size: 0.7rem;
      color: #333088;
      font-weight: bolder;

      & i {
        margin-left: 0.6rem; 
        color: #333088;
      }
    }
  }

  & footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.7rem;

    & p {
      font-size: 0.7rem;
      color: #333088;
      font-weight: bolder;
    }

    & .button {
      background-color: #333088;
      display:flex;
      justify-content: space-between;
      border-radius: 2rem;
      padding: 0.3rem 0.4rem;
      width: 45px;
      position: relative;

      & span {
        font-size : 0.5rem;
        color: white;
      }


      &::before {
        content: '';
        display: block;
        width: 15px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: rgb(128, 101, 231);
        position: absolute;
        top: 50%;
        left: 58%;
        transform: translateY(-50%);
      }
    }
  }

  & button {
    width: 100%;
    margin-top: 1rem;
    padding: 0.8rem;
    border: none;
    outline: none;
    color: #fff;
    background-color: rgb(128, 101, 231);
    border-radius: 0.6rem;
  }
`;

export default AddTask;
