import "./navbar.css"
    
import { Outlet, Link } from "react-router-dom";
        const Navbar = () => {
          return (
          <>
              <div className="navbar">
              <div className="navbarcontainer">
                <span className="logo">RAFBOOKING</span>
               
                <ul className="navItems">
                  <li className="navItem">
                    <Link to="/"  className="navText">Home</Link>
                  </li>
                  <li className="navItem">
                    <Link to="/Hotel"  className="navText">Restaurants</Link>
                  </li>
                  <li className="navItem">
                    <Link to="/List" className="navText">Guestrooms</Link>
                  </li>
                </ul>
              </div>
              </div>
              <Outlet/>
            </>
          )
        };
        
        export default Navbar;