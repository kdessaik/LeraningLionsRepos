
import './style/css/App.css';
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements} from 'react-router-dom'
import NotFoundPage from './Components/NotFoundPage';
import Home from './Components/Home'
import RootComponents from './Components/RootComponents';
import About from './Components/About';
import Donate from './Components/Donate';
import WorkUs from './Components/WorkUs';
import Volunteer from './Components/Volunteer';
import Become from './Components/Become';
import Contact from './Components/Contact'

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootComponents/>} errorElement={<NotFoundPage />}>
   <Route index element={<Home/>}/>
   <Route  path='/about' element ={<About/>}/>
   <Route path='/donate' element={<Donate/>}/>
   <Route path='/Work-with-Us' element={<WorkUs/>}/>
   <Route path='/Volunteer' element={<Volunteer/>}/>
   <Route path='/Become-a-lion' element={<Become/>}/>
   <Route path='/Contact' element={<Contact/>}/>

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
