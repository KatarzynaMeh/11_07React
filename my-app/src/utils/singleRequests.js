export const fetchSingleUser = async (id, setSingleUser) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (!response.ok) throw new Error("Failed to pick up user");
    const data = await response.json();
    setSingleUser(data);
  } catch (error) {
    console.log(error);
  }
};
