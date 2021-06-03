import React from "react";
import Notes from "./Notes";
import { Route, Link } from "react-router-dom";
const Note = (props) => {
  // this means notesList = props.notesList
  const { notesList } = props;
  let activeNote;
  if (props.match && props.match.params) {
    for (let i = 0; i < notesList.length; i++) {
      if (notesList[i].id === props.match.params.id) {
        activeNote = notesList[i];
      }
    }
    // activeNote = notesList.filter((note) => note.id === props.match.params.id);
    // console.log("filter list", activeNote);
  }

  const handleDeleteNote = (e) => {
    console.log("clicked");
  };

  return (
    <div>
      {/* <p>we are in folder {props.match.params.id}</p> */}
      {activeNote && (
        <div>
          <p>
            {activeNote.name}
            {activeNote.modified}
          </p>
          <input type="button" value="Delete Note" onClick={handleDeleteNote} />
          <p>{activeNote.content}</p>
        </div>
      )}
      {!activeNote && (
        <p>No entry found for note id: {props.match.params.id}</p>
      )}
    </div>
  );
};

export default Note;
