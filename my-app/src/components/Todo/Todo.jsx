export const Todo = ({ taskTitle, taskDescription, doneFlag, id, changeDoneFlag }) => {
  return (
    <div
      style={{
        textDecoration: doneFlag ? "line-through" : "",
        color: doneFlag ? "grey" : "",
      }}
    >
      <h1>{taskTitle}</h1>
      <p>{taskDescription}</p>
      <button onClick={() => changeDoneFlag(id)}>Change</button>
    </div>
  );
};
