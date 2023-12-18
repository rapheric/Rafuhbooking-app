import { BrowserRouter } from "react-router-dom";
import "./navibar.css"
const Navibar =()=>{
    return(
    <div className="navbar">
        <div className="navbarcontainer">
            <span className="logo">
                RafBooking
            </span>
           <div className="navitems">
            
            <link to ="/" >Home</link>
            <link to ="./Hotel">Hotel</link>
            <link to ="./List">List</link>

           </div>
           </div>
    </div>
    )
}
export default Navibar;