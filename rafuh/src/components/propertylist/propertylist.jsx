import React from "react";
 import "./propertylist.css";

 const PropertyList = () =>{
    return(
        <div className="cont">
            <p className="pText">Choose from Rafbooking for Wanderlust days and cozy nights </p>
     <div className="pList">
        <div className="pListItem">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/9d/57/1c/shore-house-restaurant.jpg" alt="hotelimage" className="pListImg" />
            <div className="pListTitles">
                <h1>Restaurants</h1>
                <h2> Mombasa</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7f/5f/29/our-view.jpg?w=600&h=400&s=1" alt="hotelimage" className="pListImg" />
            <div className="pListTitles">
                <h1>Restaurants</h1>
                <h2> Mombasa</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://i0.wp.com/smartnomadkenya.com/wp-content/uploads/2023/06/Leonardos-Restaurant-Diani-1024x682.jpg?resize=580%2C386" alt="hotelimage" className="pListImg" />
            <div className="pListTitles">
                <h1>Restaurants</h1>
                <h2> Malindi</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://d3emaq2p21aram.cloudfront.net/media/cache/venue_carousel/uploads/2016/03/Ali-Barbour-Cave-Restaurant-Kenya-03.jpg" alt="hotelimage" className="pListImg" />
            <div className="pListTitles">
                <h1>Restaurants</h1>
                <h2> Malindi</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/a7/fe/22/dining-spaces-including.jpg?w=600&h=400&s=1" alt="hotelimage" className="pListImg" />
            <div className="pListTitles">
                <h1>Restaurants</h1>
                <h2> kilifi</h2>
            </div>
        </div> 
     </div>
     </div>
    )  
 }
 export default PropertyList