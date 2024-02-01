import { useState } from "react";
import { useForm } from "react-hook-form";

export const AddUser = ({ handleAddUser }) => {
  //   const [firstName, setFirstName] = useState("");

  const {
    register,
    handleSubmit,
      formState: { errors },
    reset,
  } = useForm();

  const handleUserSubmit = (data) => {
    // event.preventDefault();
      // const newUser = { firstName };
      handleAddUser(data);
      reset()
    // setFirstName("");
  };
  return (
    <form onSubmit={handleSubmit(handleUserSubmit)}>
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          id="firstName"
          {...register("firstName", {required: true, minLength: 4})}
          //   value={firstName}
          //   onChange={(elem) => setFirstName(elem.target.value)}
        />
      </label>
      <button type="submit">Add New User</button>
    </form>
  );
};
