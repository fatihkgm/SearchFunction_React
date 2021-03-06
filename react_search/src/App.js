import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search_box/search-box.component";

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

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter((people) =>
      people.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Seach People"
          handleChange={this.handleChange}
        />
        <CardList people={filteredPeople}></CardList>
      </div>
    );
  }
}

export default App;
