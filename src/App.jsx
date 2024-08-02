import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './routes/RootLayout';
import Posts from './routes/Posts';
import NewPost from './routes/new-post/NewPost';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [
          { path: '/create-post', element: <NewPost /> },
        ]
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={appRouter} />
}

export default App
