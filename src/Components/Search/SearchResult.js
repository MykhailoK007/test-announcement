import React from "react";
import classes from  './Search.module.css'
import Result from "./Result";

const SearchResult = props => {

    return <div className={classes.resultContainer}>
        {

            props.searchAnnouncement.map(announcement => {

               return announcement.id?
                 <Result
                    title={announcement.title}
                    key={announcement.id}
                    description={announcement.description}
                    date={announcement.date}
                    id={announcement.id}
                />: <div> No such announcement</div>
            })
        }

    </div>
}
export default  SearchResult