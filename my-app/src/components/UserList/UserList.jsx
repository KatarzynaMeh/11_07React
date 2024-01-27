import { useEffect, useState } from "react";
import { fetchUsers } from "./../../utils/requests";

export const UserList = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetchUsers(setUserList);
  }, []);
  console.log(userList);

  return (
    <div>
      {userList.map((el) => (
        <h4 key={el.id}>{el.firstName}</h4>
      ))}
    </div>
  );
};
