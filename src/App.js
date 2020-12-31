import "./App.css";
import Person from "./Person";
import house from "./Data";
import "./Person";

// function importAll(r) {
//   return r.keys().map(r);
// }

// const images = importAll(
//   require.context("./assets/img/houses", false, /\.(png|jpe?g|svg)$/)
// );

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Houses</h1>
      <img src={"assets/img/houses/E1.jpg"} />
      {house.map((value, index) => {
        return <Person index={index}>{value}</Person>;
      })}
    </div>
  );
}

export default App;
