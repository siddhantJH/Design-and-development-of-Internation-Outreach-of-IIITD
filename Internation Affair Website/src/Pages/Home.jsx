//Siddhant

import React from "react";
import hd from '../assets/sampleunsplash.jpg'
import '../index.css'; // Make sure to import your custom CSS
import Testimonial15 from "../components/Testimonials";

function Home()
{
    return(<>
    <div className="blur-top flex items-center justify-center">
    <div
        style={{ height: '600px', backgroundImage: `url(${hd})` }}
        className="blur-section bg-cover bg-center bg-blue-500 text-white p-4 w-screen shadow-md flex items-center justify-center"
    >
        <p className="text-9xl font-bold text-center font-montserrat ">IIITD</p>
    </div>
    </div>
    <div style={{backgroundColor:"#344C64"}}className=" w-screen bg-white">
        <Testimonial15/>
    </div>
    </>)
}


export default Home