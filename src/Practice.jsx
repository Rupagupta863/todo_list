import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ToDoLists from "./ToDoLists";
import Tooltip from '@mui/material/Tooltip';

const Practice=()=>{
    const [currstate,updstate]=useState("");
    const [Items, setItems]=useState([]);

    const itemevents=(event)=>{
        updstate(event.target.value);
    };
    const listofitems=()=>{
        if(currstate==''){
            alert("please enter an item");
        }
        else{
            setItems((olditems)=>{
                return[...olditems, currstate];
            });
            updstate("");
        }
    };
    const deleteitems=(id)=>{
        setItems((olditems)=>{
            return olditems.filter((arrEle,index)=>{
                return index !== id;
            });
        });
    };
    return(
        <div className="maindiv">
            <br />
            <h1>ToDo List</h1>
            <input type="text" placeholder="Add an Items" onChange={itemevents} value={currstate}/>
            <Tooltip title="Add">
                <button onClick={listofitems}> <AddIcon /> </button>
            </Tooltip>
            <ol>
                {Items.map((itemval,index)=>{
                    return(
                        <div>
                            <ToDoLists 
                                text={itemval} 
                                id={index}
                                key={index}
                                onSelect={deleteitems}
                            />
                        </div>
                    );
                })}
            </ol>
        </div>
    );
}

export default Practice;