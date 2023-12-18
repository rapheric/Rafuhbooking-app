   import React from "react";
   import "./featuredProperties.css";
   const FeaturedProperties = () =>{
    return(
        <div className="fp">
      <div className="fpItem">
        
        <img src="https://www.kenyawildlifetours.com/wp-content/uploads/2022/09/62d65065ae09d5e213fe9f346dbb574c.jpg" alt="fimage" className="fImg" />
        <span className="fpName">Kenya</span>
        <span className="fpCity">Mombasa</span>
        <span className="fpPrice"> starting from $25</span>
        <div className="fpRating">
          <button>9.2</button>
          <span>Excellent</span>
        </div>
    
      </div>
       <div className="fpItem">
       <img src="https://www.holidayhouseboys.com/wp-content/uploads/2022/10/255.-The-Best-Beaches-of-Mombasa-Kenya.jpg" alt="fimage" className="fImg" />
       <span className="fpName">Kenya</span>
       <span className="fpCity">Malindi</span>
       <span className="fpPrice"> starting from $28</span>
       <div className="fpRating">
         <button>9.1</button>
         <span>Excellent</span>
       </div>
     </div>
      <div className="fpItem">
      <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ff/d4/cb/mbabamb-3-largejpg.jpg?w=500&h=400&s=1" className="fImg" alt="img" />
      <span className="fpName">Kenya</span>
      <span className="fpCity">Kilifi</span>
      <span className="fpPrice"> starting from $23</span>
      <div className="fpRating">
        <button>8.8</button>
        <span>Excellent</span>
      </div>
    </div>
    </div>
    )
   }
    export default FeaturedProperties;