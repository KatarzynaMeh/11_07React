import { useState, useEffect } from "react";
import { addUser, fetchUsers } from "../utils/requests";
import { AddUser } from "../components/AddUser/AddUser";
import { UserList } from "../components/UserList/UserList";

export const UsersPage = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetchUsers(setUserList);
  }, []);
    
   
 const handleAddUser = async (newUser) => {
   const userResponse = await addUser(newUser);
   setUserList([...userList, userResponse]);
 };

  return (
    <main>
      <AddUser handleAddUser={handleAddUser} />
      <UserList userList={userList} />
    </main>
  );
};
