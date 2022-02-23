import { useState } from "react";
import Form from "../form/form";
import NewUser from "../newUser/newUser";
import { UserType } from "../interface";

const Home = () => {
  const user: UserType[] = [{ name: "Sarthak", age: 19 }];
  const [data, updateData] = useState(user);

  const dataUpdater = (name: string, age: number) => {
    updateData([...data, { name, age }]);
  };

  return (
    <div>
      <Form addFnc={dataUpdater} />
      {data.map((user) => {
        return <NewUser key={Math.random()} name={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default Home;
