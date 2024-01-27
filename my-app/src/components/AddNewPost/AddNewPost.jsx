import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AddNewPost = ({ handleAddPost }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: title,
      text: text,
      id: uuidv4(),
      img: "https://placehold.co/200x200/orange/white",
      marked: false,
    };
    handleAddPost(newPost);
    setTitle("");
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label htmlFor="text">
        Text
        <input
          id="text"
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>

      <button type="submit">Add new post</button>
    </form>
  );
};
