import React from "react";
import { Route, NavLink } from "react-router-dom";

const handleAddFolder = (e) => {
  console.log("clicked");
};

// const history = useHistory();
// const handleAddFolder = useCallback(
//   () => history.push("/AddFolder"),
//   [history]
// );

const Folders = ({ folderList }) => {
  return (
    <ul style={sidebar}>
      {folderList &&
        folderList.length > 0 &&
        folderList.map((folder) => (
          <li style={sidebarLink} key={folder.id}>
            <NavLink
              activeStyle={{ fontWeight: "bold", color: "red" }}
              to={`/folder/${folder.id}`}
            >
              {folder.name}
            </NavLink>
          </li>
        ))}

      <input type="button" value="Add Folder" onClick={handleAddFolder} />
    </ul>
  );
};

export default Folders;

const sidebarLink = {
  padding: "10px 0px 10px 10px",
  display: "block",
};

const sidebar = {
  height: "100%",
  margin: "50px 0px 500px 0px",
  padding: "5%",
  display: "in-block",
  // display: "block",
  float: "left",
  // maxwidth: "25%",
  width: "25%",
};
