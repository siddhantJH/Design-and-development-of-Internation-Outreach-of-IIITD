import React from "react";
import {Header,Footer} from './index.js'
import { Outlet} from 'react-router-dom'




function Layout()
{
    
    return(
        <div>
            <Header/>
            <Outlet/>
          
        </div>
    )
}

export default Layout