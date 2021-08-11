import "./App.css";
import React from "react";

const Top = () => {
  React.useEffect(() => {
    console.log("useEffect called");

    return () => {
      console.log("the function that useEffect returns");
    };
  }, []);

  return <div>Top</div>;
};

const Bottom = () => {
  React.useEffect(() => {
    console.log("Bottom componentDidMount");

    return () => {
      console.log("Bottom componentWillUnmount");
    };
  }, []);

  return <div>Bottom</div>;
};

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
