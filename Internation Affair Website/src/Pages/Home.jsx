import React from "react";
import hd from '../assets/sampleunsplash.jpg';
import '../index.css'; // Make sure to import your custom CSS
import Testimonial15 from "../components/Testimonials";
import PlayerComponent from "../components/VideoPlayer";

function Home() {
    return (
        <>
            <div className="">
                {/* Collage image and name */}
                <div
                    style={{ height: '90vh', backgroundImage: `url(${hd})` }}
                    className="bg-cover bg-center text-white p-4 w-full flex items-center justify-center shadow-md"
                >
                </div>
            </div>
            {/* About Us section */}
            <div style={{ backgroundColor: "#022742" }} className="w-screen h-128">
                <div style={{ backgroundColor: "#022742" }} className="grid place-items-center w-screen bg-blue h-16 py-7 z-index-10">
                    <div className="flex items-center text-white space-x-2">
                        <span>Explore IIITD</span>
                        <button className="hover:translate-y-[-5px]">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* about us section */}
            <div  style={{ height: '60vh'}} className="flex flex-row">
              <div className="w-1/2 flex-col flex ">
                <h2 className="grow content-end text-5xl font-old-english h-1 text-[#219C90]">About our Institute</h2>
                <p className="font-normal text-2xl grow content-start mx-auto px-20 py-5 font-roboto text-[#1A2130]">Indraprastha Institute of Information Technology, Delhi (aka. IIIT-Delhi or IIIT-D)
                   was created as a State University by an act of Govt. of NCT of Delhi (The IIIT Delhi Act, 2007)
                    empowering it to do research and development, and grant degrees. In a relatively short time,
                     it has earned an excellent reputation in India and abroad for being a center of quality
                     education and research in IT and interdisciplinary <a href="https://www.iiitd.ac.in/about" className="font-normal text-sm font-montserrat hover:underline">Know More</a></p>
              </div>
                <div className="content-center mx-auto w-auto">
                <PlayerComponent/>
                </div>
            </div>
            {/* Testimonial section */}
            <div>
                {/* Add your testimonial component here */}
                <Testimonial15 />
            </div>
        </>
    );
}

export default Home;
