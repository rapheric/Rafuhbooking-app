import React from 'react'
import "./home.css";
import Head from "../../components/header/header";

import  PropertyList  from '../../components/propertylist/propertylist'; 
import MailList from '../../components/mailList/mailList';
import  Footer  from '../../components/footer/footer';
import FeaturedProperties from "../../components/featuredproperties/featuredProperties";
/*import Navbar from "../../components/navbar/navbar.jsx";*/

const home = () => {
  return (
    <div>
 
    <div className='homecontainer'>
        <Head/>
        <div className='homm'>
        <h1 className='bText'>Available Hotels and Restaurants</h1>
        <PropertyList/>
        <h1 className='bText' >Available beaches</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>

</div>
    </div>
    </div>
  )
}

export default home