import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
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
        <CardList>
          {this.state.people.map((people) => (
            <h1 key={people.id}>{people.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
