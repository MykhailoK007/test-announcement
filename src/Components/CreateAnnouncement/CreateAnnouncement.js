import React from "react";
import {NavLink} from "react-router-dom";
import  classes from './CreateAnnouncement.module.css'
const CreateAnnouncement = props => {

    return <div>

        <form action="" className={classes.formContainer}>
            <div className={classes.header}>Create Announcement</div>
            <div className={classes.titleContainer}>
                <span className={classes.text}>Title:</span>
                <input type="text"
                       onChange={(e) => {
                           props.changeAnnouncement(true,e.target.value)}
                       }
                       value={props.title}
                       className={classes.field}

                />
            </div>
            <div >
                <span className={classes.text}>Description:</span>
                <input type="text"
                       onChange={(e)=> {e.preventDefault(); props.changeAnnouncement(false,e.target.value)}}
                       value={props.description}
                       className={classes.field}

                />
            </div>
            <div >
                <NavLink to='/' className={classes.buttonsContainer}>
                    <input type="submit"
                           value='Create'
                           className={classes.button}
                           onClick={()=>props.addAnnouncement()}
                    />
                    <input type="submit" value='Cancel' className={classes.button}/>
                </NavLink>
            </div>

        </form>
    </div>
}
export default CreateAnnouncement;