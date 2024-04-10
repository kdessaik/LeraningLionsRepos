
import './style/css/App.css';
import Button from 'react-bootstrap/Button'

import MenuBar from './Components/MenuBar';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import NotFoundPage from './Components/NotFoundPage';
import Home from './Components/Home'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<NotFoundPage/>
  }
]);

function App() {
  return (
    <>  
     <MenuBar/>
    <RouterProvider router={router}/>
    </>

  );
}

export default App;
