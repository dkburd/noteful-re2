import React, { useState } from "react";
import sampleData from "../src/sampleData";

export default function AddFolder(props) {
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [data, setData] = useState(sampleData.folders);
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   console.log(id, name);
  //   sampleData.folders.push({ id, name });
  //   console.log(data);
  // };

  // const handleId = (evt) => {
  //   setId(evt.currentTarget.value);
  // };

  // const handleName = (evt) => {
  //   setName(evt.currentTarget.value);
  // };

  return (
    <div>
      <form onSubmit={(evt) => props.handleSubmit(evt)}>
        <input onChange={(evt) => props.handleId(evt)} type="text" name="id" />
        <br></br>
        <input
          onChange={(evt) => props.handleName(evt)}
          type="text"
          name="name"
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
