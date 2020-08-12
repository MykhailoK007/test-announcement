import React from "react";
const Search = props => {
    return <div className='searchContainer' >
        <input
            type="text"
            className='searcher'
            onChange={(e)=>{
                    props.searchListener(e.target.value)
                    props.showSearchAnnouncement()
                }
            }
            value={props.currentSearch}
        />

    </div>
}
export default Search;