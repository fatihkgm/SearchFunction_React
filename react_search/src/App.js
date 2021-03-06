import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ people: users }))
    );
  }

  render() {
    return (
      <div className="App">
        <input type="search" placeholder="Seach People" onChange={e => this.setState({searchField:e.target.value})} />
        <CardList people={this.state.people}></CardList>
      </div>
    );
  }
}

export default App;
