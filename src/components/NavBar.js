

import { Link } from "react-router-dom";


 const NavBar=()=>{

 




    return (
      <div>



        <nav className="navbar fixed-top navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">News App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>

                <li className="nav-item">
                  <Link to="/buisness" className="nav-link"> Buisness </Link>
                </li>
                <li className="nav-item">
                  <Link to="/entertainment" className="nav-link" >Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link to="/general" className="nav-link">General</Link>
                </li>
                <li className="nav-item">
                  <Link to="/health" className="nav-link" >Health</Link>
                </li>
                <li className="nav-item">
                  <Link to="/science" className="nav-link" >Science</Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports" className="nav-link" >Sports</Link>
                </li>
                <li className="nav-item">
                  <Link to="/technology" className="nav-link" > Technology</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>





      </div>
    )
 }

export default NavBar