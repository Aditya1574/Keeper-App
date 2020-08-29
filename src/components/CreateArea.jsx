import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const intial = {
    title: "",
    content: ""
  };

  const [isClicked , setValue] = useState(false);

  const [note, MakeNote] = useState(intial);

  function handleChange(event) {
    const { value, name } = event.target;

    MakeNote(prevItem => {
      if (name === "title") {
        return {
          title: value,
          content: prevItem.content
        };
      } else {
        return {
          title: prevItem.title,
          content: value
        };
      }
    });
  }

  function SubmitNote(event) {
    props.WhenAdd(note);
    event.preventDefault();
    MakeNote(intial);
  }

  function UpdateValue(){
      setValue(true);
  }

  return (
    <div>
      <form className="create-note">
      {isClicked &&
        (<input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />)}
        <textarea
          onClick={UpdateValue}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isClicked}>
        <Fab onClick={SubmitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
