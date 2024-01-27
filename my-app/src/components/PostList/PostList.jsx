import { useEffect, useState } from "react";
import { posts } from "../../utils/posts";
import { Post } from "../Post/Post";
import { AddNewPost } from "../AddNewPost/AddNewPost";



function PostList() {
  const [postList, setPostList] = useState(JSON.parse(localStorage.getItem('posts')) ?? posts);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(postList))
  }, [postList]
    )
  
  const changeMarked = (id) => {
    console.log(id);
    const newPostList = postList.map(post => post.id === id ? { ...post, marked: !post.marked } : post);
    setPostList(newPostList);
  }
  const handleAddPost = (post) => {
     setPostList([...postList, post])
   }

  return (
    <div>
      <AddNewPost handleAddPost={handleAddPost} />
      {postList.map((post) => {
        return <Post key={post.id} {...post} changeMarked={changeMarked} />;
      })}
    </div>
  );
}

export default PostList;

// function PostList() {
//   console.log(posts);
//   return (
//     <div>
//       {/* CHECK
//       <Post /> */}
//       {posts.map((post) => {
//         return <Post key={post.id} {...post} />;
//       })}
          
//     </div>
//   );
// }

// export default PostList;
