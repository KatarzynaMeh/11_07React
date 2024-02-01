import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { AddUser } from "./components/AddUser/AddUser";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import { Counter } from "./components/Counter/Counter";
import { Effect } from "./components/Effect/Effect";
import { Post } from "./components/Post/Post";
import PostList from "./components/PostList/PostList";
import { SingleUser } from "./components/SingleUser/SingleUser";
import { Todo } from "./components/Todo/Todo";
import TodoList from "./components/TodoList/TodoList";
import { UserList } from "./components/UserList/UserList";
import { UsersPage } from "./pages/UsersPage";

export function App() {
  // const todoLine = {
  //   taskTitle: "Hallo",
  //   taskDescription: "lorem ipsum",
  //   doneFlg: true,
  // }

  // const firstPost = {
  //   title: "First Post",
  //   description: "lorem lorem",
  //   marked: true,
  // };
  return (
    <>
      <div className="App">Hello World</div>
      
      <UsersPage />
      {/* <UserList /> */}
      {/* <SingleUser /> */}
      {/* <Effect /> */}
      {/* <p>My name is Katia</p>
      <AboutMe />
      <Todo {...todoLine} /> */}
      {/* <Post
        title={firstPost.title}
        description={firstPost.description}
        marked={firstPost.marked}
      /> */}
      {/* <Post {...firstPost} />
      <Post title="Third Post" description="lorem lorem lorem" /> */}
      {/* <Counter /> */}
      {/* <ChangeColor /> */}
      {/* <PostList /> */}
      {/* <TodoList /> */}
    </>
  );
}


