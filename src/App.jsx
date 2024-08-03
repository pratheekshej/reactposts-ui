import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './routes/RootLayout';
import Posts, { loader as postsLoader } from './routes/Posts';
import NewPost, { action as postsAction } from './routes/new-post/NewPost';
import PostDetails, { loader as postDetailsLoader } from './routes/post-details/PostDetails';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: postsAction
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: postDetailsLoader
          },
        ]
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={appRouter} />
}

export default App
