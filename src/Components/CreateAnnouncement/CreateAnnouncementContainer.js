import React from "react";
import {connect} from "react-redux";
import CreateAnnouncement from "./CreateAnnouncement";
import {addAnnouncement, changeAnnouncement} from "../../redux/announcement-reducer";
class CreateAnnouncementContainer extends React.Component{

    render() {

        return <CreateAnnouncement
            changeAnnouncement={this.props.changeAnnouncement.bind(this)}
            addAnnouncement={this.props.addAnnouncement.bind(this)}
            title={this.props.currentAnnouncement.title}
            description={this.props.currentAnnouncement.description}

        />
    }

}
const mapStateToProps = (state) => {

    return {
        currentAnnouncement: state.currentAnnouncement
    }
}

export default connect(mapStateToProps,{changeAnnouncement,addAnnouncement})(CreateAnnouncementContainer)