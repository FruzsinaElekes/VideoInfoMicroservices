import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import DetailedPage from './DetailedPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} ></Route>
        <Route path="/video/:id" component={DetailedPage}></Route>
      </div>
    </Router>
  );
}

export default App;
