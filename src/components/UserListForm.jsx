import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function UserListForm() {
  const [Note, setNote] = useState("");
  const [Notes, setNotes] = useState([]);

  function handleNoteChange(event) {
    const { value: newValue } = event.target;
    setNote(() => {
        return(
            newValue
        );
    });
  }

  function handleClick() {
    setNotes((prevNotes) => {
      return [...prevNotes, Note];
    });
    setNote(() => {
        return "";
    }); 
  }

  return (
    <div>
        <div className="form">
            <input type="text" onChange={handleNoteChange} value={Note} />
            <button onClick={handleClick}>
                <span>Add</span>
            </button>
        </div>
        <div>
            <ul>
                {
                    Notes.map((note) => {
                        return(
                            <ToDoItem
                                text = {note} 
                            />
                        );
                    })
                }
            </ul>
      </div>
    </div>
    
  );
}

export default UserListForm;
