import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./page/HomePage";


function App() {
  var req = "Растения"
  return (
    <>
      <Header />
      {HomePage(req)}
    </>
  );
}

export default App;

