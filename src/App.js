import "./App.css";
import Person from "./House";
import house from "./Data";
import "./House";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Search></Search>
      <h1>Houses</h1>
      {house.map((value, index) => {
        return (
          <Person key={index} index={index}>
            {value}
          </Person>
        );
      })}
    </div>
  );
}

export default App;
