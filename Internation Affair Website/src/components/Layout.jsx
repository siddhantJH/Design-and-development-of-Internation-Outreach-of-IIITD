import React from "react";
import {Header,Footer} from './index.js'
import { Outlet} from 'react-router-dom'
import ChatBox from "./ChatBot.jsx";




function Layout()
{
    
    return(
        <div className="w-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout