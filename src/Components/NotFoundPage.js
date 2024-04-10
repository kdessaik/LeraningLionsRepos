

import { Link } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function NotFoundPage() {
  return (
    <div>
        <div class=' text-danger col text-center fs-1'>404 Not Found </div>
        <div class=' col text-center fs-1'>
        <Link  to="/">Go back to Learning Lions Home</Link>

        </div>
    
    </div>
    
  );
}

export default NotFoundPage;
