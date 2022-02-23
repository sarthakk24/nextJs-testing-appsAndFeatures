import Button from "../UI/button";
import { useState } from "react";

const Form = ({ addFnc }: { addFnc: Function }) => {
  const [name, updateName] = useState("");
  const [age, updateAge] = useState(0);

  const nameChangeHandler = (event: any) => {
    updateName(event.target.value);
  };

  const ageChangeHandler = (event: any) => {
    updateAge(+event.target.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    addFnc(name, age);
  };

  return (
    <>
      <div className="bg-[#FEFFFE] text-black p-10 mt-5 rounded-lg">
        <form onSubmit={onSubmitHandler}>
          <div>
            <h1 className="font-bold">Username</h1>
            <input
              type="text"
              className="border-2 w-[600px] mt-1"
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div>
            <h1 className="font-bold">Age (years)</h1>
            <input
              type="number"
              className="border-2 w-[600px] mt-1"
              onChange={ageChangeHandler}
            ></input>
          </div>
          <Button name="Add User" />
        </form>
      </div>
    </>
  );
};

export default Form;
