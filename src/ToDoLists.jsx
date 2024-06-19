import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';

const ToDoLists=(props)=>{
    return(
        <div className="list"> 
            <li><Tooltip title="Delete">
                    <ClearIcon size="small" className="cross" onClick={()=>{
                    props.onSelect(props.id)}} />
                </Tooltip> <span>{props.text}</span> </li>
        </div>
    )
}

export default ToDoLists;