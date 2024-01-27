import { todos } from '../../utils/todos'
import { AddNewPost } from '../AddNewPost/AddNewPost';
import { Todo } from '../Todo/Todo'
import { useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState(todos);

    
  const changeDoneFlag= (id) => {
    const newTodoList = todoList.map(todo =>
      todo.id === id ? { ...todo, doneFlag: !todo.doneFlag } : todo
    );
    setTodoList(newTodoList);
  };
  

    return (
      <div>
        {todoList.map((todo) => {
          return <Todo key={todo.id} {...todo} changeDoneFlag={changeDoneFlag} />;
        })}
      </div>
    );
}

export default TodoList;