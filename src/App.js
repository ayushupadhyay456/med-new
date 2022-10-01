import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from "./components/About";
import Medbox from "./components/Medbox";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
  <>
  {/* <Dashboard/> */}
  <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
      <Route exact path="/about" element={<About/>}></Route>

    </Routes>
  </Router>
      </>
  );
}

export default App;
