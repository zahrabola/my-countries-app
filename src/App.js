import './App.css';
import Countries from './components/Countries';
import Filter from './components/Filter';
import Header from './components/Header';
import Country from './components/Country';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <h1 className="app"> Zahra Countries Map</h1>
      <Router>
        <Header />
        <Filter />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route exact path="/countries/:name" element={<Country />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
