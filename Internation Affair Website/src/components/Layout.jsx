import React from "react";
import {Header,Footer} from './index.js'
import { Outlet} from 'react-router-dom'




function Layout()
{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout