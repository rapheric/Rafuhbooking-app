import "./head.css"
import {useState} from "react";
/*import {useNavigate} from "react";*/
const Head =()=> {
    /*const navigate = useNavigate()*/
    const[destination, setDestination] = useState("");
     const[openOptions, setOpenOptions]= useState(false);

     const[options, setOptions]= useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) =>{
        setOptions((prev)=>{
            return{
                ...prev, [name]: operation==="i" ? options[name] + 1:options[name] - 1,
            }

        });
    }

    const handleSearch =()=>{
    /* navigate("/hotels" , {state: {destination, options}})   */  
    }

return(
<div className="header">
    <div className="headerContainer">
    <div className="hedades">
        <h1 className="headerTitle">Book a flight</h1>

        <p className="headerDisc">Search for Rafbooking flights and book online.
         To find the right air ticket for your trip,
          just enter  your flight destination ,number of passengers and Select ’Search’
           to continue with the online flight booking process and book a flight ticket that suits your travel plans
        </p>
    
    <button className="headerbtn">login/Register</button>
    </div>
    <div className="headerSearch">
        <div className="headerSearchInput">
            <input type="text"
            value={destination}
            placeholder="where are you going"
            onChange={(event)=>setDestination(event.target.value)}
            />
        </div>
        <div className="headerSearchItem">
            <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>
               0 adults.0 children. 0 rooms</span>
        </div>
        {openOptions &&
        <>
        <div className="options">
            <div className="optionsItem">
                <span className="optionText">adult</span>
                <div className="optionsCounter">
                  <button className="optionCounterBtn" 
                  disabled={options.adult<=1}
                  onClick={()=>handleOption("adult" ,"d")}>-</button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button className="optionCounterBtn"
                    onClick={()=>handleOption("adult" ,"i")}>+</button>
                </div>
            </div>
            <div className="optionsItem">
                <span className="optionText">children</span>
                <div className="optionsCounter">
                  <button className="optionCounter"
                  disabled={options.children<=0}
                    onClick={()=>handleOption("children" ,"d")}>-</button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button className="optionCounterBtn"
                    onClick={()=>handleOption("children" ,"i")}>+</button>
                </div>
            </div>
            <div className="optionsItem">
                <span className="optionText">room</span>
                <div className="optionsCounter">
                  <button className="optionsCounter"
                  disabled={options.room<=1}
                    onClick={()=>handleOption("room" ,"d")}>-</button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button className="optionCounterBtn"
                    onClick={()=>handleOption("room" ,"i")}>+</button>
                </div>
            </div>
        </div>
        </>}
        <div className="headerSearchItem">
            <button className="headerbtnn"
            onClick={handleSearch}>
                search
            </button>
        </div>
    </div>
    </div>
</div>
)
}
export default Head;