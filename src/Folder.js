import React from "react";
import Notes from "./Notes";

const Folder = (props) => {
  // this means notesList = props.notesList
  const { notesList } = props;
  let filteredList;
  if (props.match && props.match.params) {
    filteredList = notesList.filter(
      (note) => note.folderId === props.match.params.id
    );
    console.log("filter list", filteredList);
  }

  return (
    <div>
      {/* <p>we are in folder {props.match.params.id}</p> */}
      {filteredList && filteredList.length > 0 && (
        <Notes notesList={filteredList} />
      )}
      {!filteredList ||
        (filteredList.length < 1 && (
          <p>No Files found for folder {props.match.params.id}</p>
        ))}
    </div>
  );
};

export default Folder;
