import Button from "../UI/button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const Form = ({ addFnc }: { addFnc: Function }): JSX.Element => {
  const [name, updateName] = useState("");
  const [age, updateAge] = useState("");
  const [errorState, updateErrorState] = useState({
    state: false,
    heading: "ErrorHeading",
    content: "ErrorContent",
  });
  const nameChangeHandler = (event: any) => {
    updateName(event.target.value);
  };

  const ageChangeHandler = (event: any) => {
    updateAge(event.target.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    if (name === "") {
      updateErrorState({
        state: true,
        heading: "Invalid input",
        content: "Please enter a valid name",
      });
      return;
    }

    if (+age <= 0) {
      updateErrorState({
        state: true,
        heading: "Invalid input",
        content: "Please enter a valid age (> 0)",
      });
      return;
    }
    addFnc(name, +age);
    updateAge("");
    updateName("");
  };

  const modalClickHandler = () => {
    updateErrorState({ state: false, content: "", heading: "" });
  };

  return (
    <>
      <ErrorModal
        heading={errorState.heading}
        content={errorState.content}
        state={errorState.state}
        fnc={modalClickHandler}
      />
      <div className="bg-[#FEFFFE] text-black p-10 mt-5 rounded-lg">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="name" className="font-bold">
              Username
            </label>
            <br />
            <input
              type="text"
              id="name"
              className="border-2 w-[600px] mt-1 pl-3"
              onChange={nameChangeHandler}
              value={name}
            ></input>
          </div>
          <div>
            <label htmlFor="name" className="font-bold">
              Age (years)
            </label>
            <br />
            <input
              type="number"
              className="border-2 w-[600px] mt-1 pl-3"
              onChange={ageChangeHandler}
              value={age}
            ></input>
          </div>
          <Button name="Add User" />
        </form>
      </div>
    </>
  );
};

export default Form;
