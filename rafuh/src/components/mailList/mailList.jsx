import React from "react";
import "./mailList.css";
 const MailList = () =>{
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
    return(
      <div className="mail" onSubmit={handleSubmit}>
            <h1 className="mailTitle">for more information , reach us on ........</h1>
            <span className="mailDesc">email us any time incase you have any enquiry. our team is ready to attend to you </span>
            <div className="mailInputContainer">
                <input type="text" placeholder="your email"
                className="mailInputContainerinput"/>
                <button className="mailInputContainerButton">send</button>
            </div>
      </div>
    ) 
}
export default MailList