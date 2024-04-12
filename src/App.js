
import './style/css/App.css';
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom'
import NotFoundPage from './Components/NotFoundPage';
import Home from './Components/Home'
import RootComponents from './Components/RootComponents';
import About from './Components/About';
import Donate from './Components/Donate';

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootComponents/>} errorElement={<NotFoundPage />}>
   <Route index element={<Home/>}/>
   <Route  path='/about' element ={<About/>}/>
   <Route path='/donate' element={<Donate/>}/>
  </Route>
  )
  
);

function App() {
  return (
    <>  
     
    <RouterProvider router={router}/>
    </>

  );
}

export default App;
