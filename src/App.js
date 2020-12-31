import "./App.css";
import Person from "./Person";
import house from "./Data";
import "./Person";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Houses</h1>
      {house.map((value, index) => {
        return <Person index={index}>{value}</Person>;
      })}
    </div>
  );
}

export default App;
