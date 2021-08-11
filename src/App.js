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

const Outer = () => {
  const [state, setState] = React.useState({ showTop: true, showBottom: true });

  const [myTodos, setMyTodos] = React.useState(["Wake", "Clean", "Eat"]);

  React.useEffect(() => {
    console.log("Outer.useEffect");
    return () => {
      console.log("Outer cleanup");
    };
  }, []);

  return (
    <>
      <input
        type="checkbox"
        checked={state.showTop}
        onChange={(event) =>
          setState({ ...state, showTop: event.target.checked })
        }
      />
      Show Top
      <input
        type="checkbox"
        checked={state.showBottom}
        onChange={(event) =>
          setState({ ...state, showBottom: event.target.checked })
        }
      />
      Show Bottom
      {state.showTop ? <Top /> : null}
      {state.showBottom ? <Bottom /> : null}
      <div>
        My todos:
        <ul>
          {myTodos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

function App() {
  return <Outer />;
}

export default App;
