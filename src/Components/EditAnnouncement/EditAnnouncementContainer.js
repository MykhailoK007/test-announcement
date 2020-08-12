import React from "react";
import {connect} from "react-redux";
import EditAnnouncement from "./EditAnnouncement";
import {changeAnnouncement, editAnnouncement, setCurrentAnnouncement} from "../../redux/announcement-reducer";
class EditAnnouncementContainer extends React.Component {

    render() {

        return <EditAnnouncement title={this.props.currentAnnouncement.title}
                                 changeAnnouncement = {this.props.changeAnnouncement.bind(this)}
                                 description = {this.props.currentAnnouncement.description}
                                 editAnnouncement = {this.props.editAnnouncement.bind(this)}

        />

    }
}
const mapStateToProps = state => {
    return {
        currentAnnouncement: state.currentAnnouncement
    }
}

export default connect(mapStateToProps,{setCurrentAnnouncement,changeAnnouncement,editAnnouncement})(EditAnnouncementContainer)