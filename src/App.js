import './App.css';
import Home from "./home/Home";
import CV from "./cv/CV";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cv" component={CV} />
            </Switch>
        </Router>
    );
}

export default App;