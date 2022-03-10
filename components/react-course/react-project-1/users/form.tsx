import Button from "../UI/button";
import { useState } from "react";

const Form = ({ addFnc }: { addFnc: Function }): JSX.Element => {
  const [name, updateName] = useState("");
  const [age, updateAge] = useState("");

  const nameChangeHandler = (event: any) => {
    updateName(event.target.value);
  };

  const ageChangeHandler = (event: any) => {
    updateAge(event.target.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    if (name === "" || age === "") {
      console.log("error");
      return;
    }
    addFnc(name, +age);
    updateAge("");
    updateName("");
  };

  return (
    <>
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
