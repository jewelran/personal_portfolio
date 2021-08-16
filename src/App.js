import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Conponent/Home/Hone/Home';
import About from './Conponent/Home/About/About';
import Navigation from './Conponent/Shared/Navigation/Navigation';
import Contact from './Conponent/Home/Contact/Contact';
import Progress from './Conponent/Home/Progress/Progress';
import Footer from './Conponent/Shared/Footer/Footer';
import Project from './Conponent/Home/Project/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path = "/">
          <Home></Home>
          </Route>
          <Route  path = "/home">
          <Home></Home>
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route path ="/contact">
            <Contact></Contact>
          </Route>
          <Route path ="/project">
            <Project></Project>
          </Route>
          <Route path ="/skill">
            <Progress></Progress>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
