import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pictures: [
        { id: 1, name: "Fatih" },
        { id: 2, name: "Lady Dress" },
        { id: 3, name: "Stylish" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.pictures.map((pictures) => (
          <h1 key={pictures.id}>{pictures.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
