import React from "react";
import classes from './Search.module.css'

const Result = props => {
    return <div className={classes.container}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.description}>{props.description}</div>
        <hr/>
    </div>
}

export default Result;