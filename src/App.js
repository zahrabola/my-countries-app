import './App.css';
import Countries from './components/Countries';
import Filter from './components/Filter';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <h1 className="app"> Zahra Countries Map</h1>
      <Router>
        <Header />

        <Route exact path="/">
          <Filter />
          <Countries />
        </Route>
      </Router>
    </div>
  );
}

export default App;
