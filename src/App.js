import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from './layouts/Main';
import Header from './components/Header/Header';
import Topics from './components/Topics/Topics';
import Quiz from './components/Quiz/Quiz';
import Blog from './components/Blog/Blog';
import Statistic from './components/Statistics/Statistic';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/',loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'), element: <Header></Header> },
        {
          path: '/',
          
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:Id',
          loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`) ,
          element:<Quiz></Quiz>
        },
          {path:'blog', element: <Blog></Blog>},
          {path:'statistic', loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz') ,element:<Statistic></Statistic>},
        {path:'/*', element:'404 !!! Route not found'}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
