import { v4 as uuidv4 } from "uuid";

export const UserList = ({ userList }) => {
  return (
    <div>
      {userList.map((el) => (
        <h4 key={uuidv4()}>{el.firstName}</h4>
      ))}
    </div>
  );
};
