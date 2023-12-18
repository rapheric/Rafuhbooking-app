import "./featured.css";

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://leegavilla.com/wp-content/uploads/2019/09/WhatsApp-Image-2019-09-23-at-11.53.42-AM.jpeg" alt="featuredimg"/>
                <div className="featuredTitles">   
                    <h1>Mombasa</h1>
                    <h1>Nyali</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/485199233.jpg?k=53e11cfb1eb628b93ec1b1de2016a73cfd386a8e0945aac78f5944405f957372&o=" alt="featuredimg"/>
                <div className="featuredTitles">
                    <h1>Malindi</h1>
                    <h1>watamu</h1>
                </div>
            </div>
           
            
            
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/489674907.jpg?k=7407f2f791866151adf1979360eee8d317d84c5f1eef95975699571d71ed6458&o=&hp=1" alt="featuredimg"/>
                <div className="featuredTitles">
                    <h1>Kilifi</h1>
                    <h1>docks</h1>
                </div>
            </div>
           
            
        </div>
    )
}
export default Featured