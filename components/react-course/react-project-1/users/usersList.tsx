import { UserType } from "../helpers/interface";
import NewUser from "./newUser";

interface UserTypes {
  users: UserType[];
}

const UsersList = (props: UserTypes) => {
  return (
    <div>
      {props.users.map((user: UserType) => {
        return <NewUser key={Math.random()} name={user.name} age={user.age} />;
      })}
    </div>
  );
};

export default UsersList;
