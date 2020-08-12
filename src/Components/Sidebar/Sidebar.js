import React from "react";
import '../../App.css'

import {NavLink} from "react-router-dom";


const Sidebar = ()=> {

    return <div >
                <NavLink to='/create'>
                    <input type="submit" value="+" className='createAnnouncement'/>
                </NavLink>
    </div>
}
export default Sidebar;