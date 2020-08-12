import React from "react";
import AnnouncementInfo from "./AnnouncementInfo";
import {connect} from "react-redux";
import classes from './Announcement.module.css'
import {deleteAnnouncement, setCurrentAnnouncement} from "../../redux/announcement-reducer";

class AnnouncementContainer extends React.Component{
        constructor(props) {
            super(props);
        }


    render(){

        return <div className={classes.container} >
            {
                (this.props.announcement.length)?
                this.props.announcement.map(announcement => {

                    return <AnnouncementInfo
                        title={announcement.title}
                        key={announcement.id}
                        description={announcement.description}
                        date={announcement.date}
                        id={announcement.id}
                        deleteAnnouncement = {this.props.deleteAnnouncement.bind(this)}
                        setCurrentAnnouncement = {this.props.setCurrentAnnouncement}
                    />
                }):
                   <div className={classes.empty}>
                       List is empty
                   </div>
            }

        </div>
    }
}
const mapStateToProps = state => {
    return {
        announcement:state.announcement
    }
}
export default connect(mapStateToProps,{setCurrentAnnouncement,deleteAnnouncement})(AnnouncementContainer);