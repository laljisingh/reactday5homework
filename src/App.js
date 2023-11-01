import "./App.css";
import Crousel from "./component/Crousel";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Testominal from "./component/Testominal";
import Touch from "./component/Touch";

function App() {

  return (
    <div className="App">

      <Navbar></Navbar>
      <Crousel></Crousel>
      <Touch></Touch>
      <Testominal></Testominal>
      <Footer></Footer>
    </div>
  );
}


export default App;
