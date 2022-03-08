import { useState } from "react";
import Form from "../users/form";
import { UserType } from "../interface";
import UsersList from "../users/usersList";

const Home = () => {
  const user: UserType[] = [{ name: "Sarthak", age: 19 }];
  const [data, updateData] = useState(user);

  const dataUpdater = (name: string, age: number) => {
    updateData([...data, { name, age }]);
  };

  return (
    <div>
      <Form addFnc={dataUpdater} />
      <UsersList users={data} />
    </div>
  );
};

export default Home;
