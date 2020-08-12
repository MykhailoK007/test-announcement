import React from "react";
import {connect} from "react-redux";
import Search from "./Search";
import {searchListener, showSearchAnnouncement} from "../../redux/announcement-reducer";
import SearchResult from "./SearchResult";

class SearchContainer extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {

        return <div>

            {
                this.props.announcement.length
                    ?<Search
                        searchListener={this.props.searchListener}
                        currentSearch={this.props.currentSearch}
                        showSearchAnnouncement={this.props.showSearchAnnouncement}/>
                    :''
            }
            {

                this.props.currentSearch
                    ?<SearchResult searchAnnouncement={this.props.searchAnnouncement}/>:''

            }
            </div>
    }
}
const  mapStateToProps = state =>{
    return{
        announcement: state.announcement,
        currentSearch:state.currentSearch,
        searchAnnouncement:state.searchAnnouncement
    }
}
export default connect(mapStateToProps,{searchListener,showSearchAnnouncement})(SearchContainer)