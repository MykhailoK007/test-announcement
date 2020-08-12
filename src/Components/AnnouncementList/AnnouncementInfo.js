import React from "react";
import classes from './Announcement.module.css'
import {NavLink} from "react-router-dom";
const AnnouncementInfo = (props) => {

       return <div className={classes.announcement} >
           <div className={classes.buttonsContainer}>
               <NavLink to={`/edit/${props.id}`}>
                   <input  type='submit'
                           className={[classes.edit,classes.announcementControl].join(' ')}
                           value="Edit"
                           onClick={() => {

                               props.setCurrentAnnouncement(props.id)}}
                   />
               </NavLink>
               <input type='submit'
                      value='X'
                      onClick={(e)=>props.deleteAnnouncement(props.id)}
                      className={[classes.edit,classes.announcementControl].join(' ')}
               />

           </div>
        <div className={classes.IDAnnouncement}>ID:{props.id}</div>
        <div className="title">Title:{props.title}</div>
        <div className="description">Description:{props.description}</div>
       </div>
}
export default AnnouncementInfo;

