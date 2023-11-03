import React, {useState} from "react";

function ToDoItem(props)
{
    const [textStyle, setOnChange] = useState({
        textDecoration: "",
        cursor: ""
    });

    function handleClick(event)
    {
        setOnChange((prevValue) => {
            return({
                ...prevValue,
                textDecoration: prevValue.textDecoration === ""? "line-through": ""
            });
        });
    }

    function handleMouseOver()
    {
        setOnChange((prevValue) => {
            return({
                ...prevValue,
                cursor: "pointer"
            });
        });
    }

    function handleMouseOut()
    {
        setOnChange((prevValue) => {
            return({
                ...prevValue,
                cursor: ""
            });
        });
    }

    return(
        <li onClick={handleClick} 
            style={textStyle} 
            onMouseOver = {handleMouseOver}
            onMouseOut={handleMouseOut}>
            {props.text}
        </li>
    );
}

export default ToDoItem;