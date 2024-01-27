export const fetchUsers = async (setUserList) => {
  try {
      const response = await fetch("https://dummyjson.com/users");
      if (!response.ok) throw new Error('Failed to pick up users');
      const data = await response.json();
      setUserList(data.users);
  } catch (error) {
    console.log(error);
  }
};
