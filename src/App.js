import "./App.css";
import House from "./House";
import house from "./Data";
import "./House";
import Search from "./Search";
import matches from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Search></Search>
      <h1>Houses</h1>
      {/* {house.map((value, index) => {
        return (
          <Person key={index} index={index}>
            {value}
          </Person>
        );
      })} */}

      {matches.map((value, index) => {
        return (
          <House key={index} index={index}>
            {value}
          </House>
        );
      })}
    </div>
  );
}

export default App;
