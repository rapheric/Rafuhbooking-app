import "./hotel.css"
/*import Navbar from "../../components/navbar/navbar";*/
import Footer from "../../components/footer/footer";
import MailList from "../../components/mailList/mailList";

const Pics = [
    {
        id:1,
        src:"https://media-cdn.tripadvisor.com/media/photo-s/12/9d/57/1c/shore-house-restaurant.jpg",
    },
    {
        id:2,
        src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/7f/5f/29/our-view.jpg?w=600&h=400&s=1",
    },
    {
        id:3,
        src:"https://i0.wp.com/smartnomadkenya.com/wp-content/uploads/2023/06/Leonardos-Restaurant-Diani-1024x682.jpg?resize=580%2C386",
    },
    {
    id:4,
    src:"https://d3emaq2p21aram.cloudfront.net/media/cache/venue_carousel/uploads/2016/03/Ali-Barbour-Cave-Restaurant-Kenya-03.jpg",
    },
    {
        id:5,
        src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/a7/fe/22/dining-spaces-including.jpg?w=600&h=400&s=1",
    },
    {
        id:6,
        src:"https://images.kenyapropertycentre.com/properties/images/8825/060d314b0ac5e7-kilifi-cbd-offices-stalls-restaurant-space-plaza-complex-mall-for-rent-sokoni-kilifi.jpg",
    },
    {
        id:7,
        src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/4c/9e/80/getlstd-property-photo.jpg?w=500&h=-1&s=1",
    },
    {
        id:8,
        src:"https://www.wiomsa.org/wp-content/uploads/2019/03/Screenshot-2019-03-11-at-16.17.42.png",
    }

]

  const Hotel =()=>{
    return(
        <div>
         <div className="hotelContainer">
            <div className="hotelWrapper">
                <h1 className="hotelTitle">Grand Hotels and Restaurants</h1>
                <h2 className="hotelDistance">Excellent location - 200m from pirates beach</h2>
                <div className="hotelImages">
                    {Pics.map((pic,id)=>{
                        return(
                        <div className="hotelImgWrapper">
                          <img key ="id" src={pic.src} alt="" className="hotelImg" />    
                        </div>
                        )
                    }
                    )}
                </div>
                <div className="hotelDetails">
                    <div className="hotelDetailsTexts">
                        <h1 className="hotelTitle">stay in the heart of these ample hotels</h1>
                        <p className="hoteldesc">Our hotels are five star hotel with comfy and ample rooms which 
                        their services are top most </p>
                  </div>
                 <div className="hoteldetailsres">
                         <button className="bookNow">reserve or book now</button>
                         
                 </div>
                </div>   
            </div>
            <MailList/>
            <Footer/>
         </div>
        </div>
    )
 }
 export default Hotel