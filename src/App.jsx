import { useEffect, useState } from 'react'
import './App.css'
import MainHeader from './components/main-header/MainHeader'
import PostsList from './components/posts-list/PostsList'
import { API } from './js/api';

function App() {
  const [postsList, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${API}/posts`);
      const { posts } = await res.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  return (
    <main>
      <MainHeader />
      {
        (postsList.length > 0) &&
        <PostsList posts={postsList} />
      }
      {postsList.length === 0 && 'Loading Posts...'}
    </main>
  )
}

export default App
