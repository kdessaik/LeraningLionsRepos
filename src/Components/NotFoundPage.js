

import { Link } from 'react-router-dom';
import '../style/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './MenuBar';



function NotFoundPage() {
  return (
    <div>
      <MenuBar/>
        <div class=' text-danger col text-center fs-1'>404 Not Found </div>
        <div class=' col text-center fs-1'>
        <Link  to="/">Go back to Learning Lions Home</Link>

        </div>
    
    </div>
    
  );
}

export default NotFoundPage;
