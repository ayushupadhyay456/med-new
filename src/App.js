import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from "./components/About";
import Medbox from "./components/Medbox";

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Medbox' element={<Medbox/>} />
      </Routes>
    </Router>
      </>
  );
}

export default App;
