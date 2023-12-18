import React from "react"
/*import {useLocation} from "react-router-dom";
import Navbar from "../../components/navbar/navbar"*/
/*import { useState } from "react";*/
import SearchItems from "../../components/searchItems/searchItem";
import "./list.css";


const List=()=>{

   /* const[destination , setDestination ] = useState(location.state.destination)*/
   /* const[options , setOptions] = useState(location.state.options)*/
    
    return(
        <div>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsOptionItem">
                        <span className="lsOptionText">
                                Destination
                                </span>
                            <input type="text"
                            className="lsteminput" />
                        </div>
                        <div className="lsItem">
                        <div className="label">Options</div>
                        
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="number" className="lsteminput" />
                            </div>
                        
            
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    Max price <small>per night</small>
                                </span>
                                <input type="number" className="lsteminput" />
                            </div>
                        

                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    adult
                                </span>
                                <input type="number" className="lsteminput"
                                min={1}
                               /* placeholder={options.adult}*//>
                            </div>
                        
                        
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    children
                                </span>
                                <input type="number" className="lsteminput" 
                                min={0}
                                /* placeholder={options.children}*//>
                            </div>
        
                        
                            <div className="lsOptionItem">
                                <span className="lsOptionText">
                                    room
                                </span>
                                <input type="number" className="lsteminput" 
                                min={1}
                                 /*placeholder={options.room}*//>
                            </div>
                        </div>
                          <button className="searchButton">
                            Search
                          </button>
                        </div>
                        <div className="listResult">
                          <SearchItems/>
                        </div>
                </div>
                </div>
            </div>
        
    );
}
export default List