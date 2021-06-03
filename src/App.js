import "./App.css";
import Header from "./Header";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./About";
import sampleData from "./sampleData";
import Notes from "./Notes";
import Folders from "./Folders";
import Folder from "./Folder";
import Note from "./Note";
import AddFolder from "./AddFolder";
// import AddNote from './AddNote'

// function App() {
//   return (
//     <div className="App">
// <Header/>
//     </div>
//   );
// }

class App extends Component {
  // set empty arrarys for notes and folders
  state = {
    notes: sampleData.notes,
    folders: sampleData.folders,
    id: "",
    name: "",
  };
  renderNavRoutes() {
    const { notes, folders } = this.state;
    return (
      <div>
        <p>render nav routes</p>
      </div>
    );
  }

  notesInFolder() {}
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.id, this.state.name);
    let folders = this.state.folders;
    folders.push({ id: this.state.id, name: this.state.name });
    this.setState({
      folders: [...folders],
    });
    console.log(this.state.folders);
  };

  handleId = (evt) => {
    this.setState({ id: evt.currentTarget.value });
  };

  handleName = (evt) => {
    this.setState({ name: evt.currentTarget.value });
  };

  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <Header />
        {/* <Folders folderList={this.state.folders} /> */}

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route
            path="/folder/:id"
            // this render is needed to pass the props.match.params from the url
            render={(props) => (
              <div>
                <Folders folderList={this.state.folders} />
                <Folder {...props} notesList={this.state.notes} />
              </div>
            )}
          />
          <Route
            path="/note/:id"
            // this render is needed to pass the props.match.params from the url
            render={(props) => <Note {...props} notesList={this.state.notes} />}
          />

          <Route path="/addFolder">
            <AddFolder
              handleSubmit={this.handleSubmit}
              handleId={this.handleId}
              handleName={this.handleName}
            />
          </Route>

          {/* <Route path="/note">
            <About />
          </Route> */}

          <Route path="/">
            {/* <BackButton --- alt sidebar not yet made for back button /> */}
            <Folders folderList={this.state.folders} />
            <Notes notesList={this.state.notes} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
