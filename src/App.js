import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Quiz from './Components/Quiz/Quiz';
import Statictics from './Components/Statistic/Statictics';
import Main from './Layout/Main/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/quiz/:quizId',
          loader:async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<Quiz></Quiz>

        },
        {
          path:'/static',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statictics></Statictics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },  
        {
          path:'/*',
          element:<PageNotFound></PageNotFound>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
