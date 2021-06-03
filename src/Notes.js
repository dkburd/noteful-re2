import React from "react";
import { Route, Link } from "react-router-dom";
// add Note

const handleAddNote = (e) => {
  console.log("clicked");
};

const Notes = ({ notesList }) => {
  return (
    <div style={notescontainer}>
      <ul>
        {notesList &&
          notesList.length > 0 &&
          notesList.map((note) => (
            <li style={noteStyle} key={note.id}>
              <Link to={`/note/${note.id}`}>
                {note.name} ({note.modified})
              </Link>
            </li>
          ))}
        <input type="button" value="Add Note" onClick={handleAddNote} />
      </ul>
    </div>
  );
};

export default Notes;

const notescontainer = {
  marginLeft: "25%",
};

const noteStyle = {
  padding: "6px",
  // textDecoration: "none",
  listStyleType: "none",
};
