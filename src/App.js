import Navbar from "./Navbar";
import Card from "./Card";
import data from "./data";

const cards = data.map((item) => {
  return <Card key={Math.random().toString()} item={item} />;
});

function App() {
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
