import "./App.css";
import Crousel from "./component/Crousel";
import Feedback from "./component/Feedback";
import Navbar from "./component/Navbar";
import Touch from "./component/Touch";

function App() {

  return (
    <div className="App">

      <Navbar></Navbar>
      <Crousel></Crousel>
      <Touch></Touch>
      <Feedback></Feedback>
    </div>
  );
}


export default App;
