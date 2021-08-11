import "./App.css";
import React from "react";

class Top extends React.Component {
  componentDidMount() {
    console.log("Top componentDidMount");
  }

  componentWillUnmount() {
    console.log("Top componentWillUnmount");
  }

  render() {
    return <div>Top</div>;
  }
}

class Bottom extends React.Component {
  componentDidMount() {
    console.log("Bottom componentDidMount");
  }

  componentWillUnmount() {
    console.log("Bottom componentWillUnmount");
  }

  render() {
    return <div>Bottom</div>;
  }
}

class Outer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTop: true, showBottom: true };
  }

  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.state.showTop}
          onChange={(event) =>
            this.setState({ ...this.state, showTop: event.target.checked })
          }
        />
        Show Top
        <input
          type="checkbox"
          checked={this.state.showBottom}
          onChange={(event) =>
            this.setState({ ...this.state, showBottom: event.target.checked })
          }
        />
        Show Bottom
        {this.state.showTop ? <Top /> : null}
        {this.state.showBottom ? <Bottom /> : null}
      </>
    );
  }
}

function App() {
  return <Outer />;
}

export default App;
