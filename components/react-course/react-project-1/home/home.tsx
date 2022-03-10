import { useState } from "react";
import Form from "../users/form";
import { UserType } from "../interface";
import UsersList from "../users/usersList";
import Wrapper from "../helpers/Wrapper";

const Home = () => {
  const user: UserType[] = [{ name: "Sarthak", age: 19 }];
  const [data, updateData] = useState(user);

  const dataUpdater = (name: string, age: number) => {
    updateData((prevData) => {
      return [...prevData, { name, age }];
    });
  };

  return (
    <div>
      <Form addFnc={dataUpdater} />
      <Wrapper>
        <UsersList users={data} />
      </Wrapper>
    </div>
  );
};

export default Home;
