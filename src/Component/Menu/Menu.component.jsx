import '../../../node_modules/bootstrap/js/dist/collapse'
import milogyLogo from '../../images/milogy-Logo.png'
import {Link} from 'react-router-dom'
const Menu = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={milogyLogo} alt="" className="me-5"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                  <Link className="nav-link active ms-5 " to="/nback"><h4>Nback</h4></Link> 
              </li>     
              <li className="nav-item">
                  <Link className="nav-link active ms-5 " to="/strop"><h4>Strop</h4></Link> 
              </li>  
              <li className="nav-item">
                  <Link className="nav-link active ms-5 " to="/gonogo"><h4>Gonogo</h4></Link> 
              </li>  
              <li className="nav-item">
                  <Link className="nav-link active ms-5 " to="/cpt"><h4>Cpt</h4></Link> 
              </li>       
            </ul>

          </div>
        </div>
      </nav>
   
      
    </>
  )
}
export default Menu;