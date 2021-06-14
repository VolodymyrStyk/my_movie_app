import './App.css';
import {MoviesList} from "./components/MoviesList";
import {Header} from "./components/Header";
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import {Movie} from "./components/Movie";

function App() {
    return (
        <div className="App">
            <Router>
                    <Header/>
                <Switch>
                    <Route exact path={'/movies'} component = {MoviesList}/>
                    <Route path={`/movies/:id`} component = {Movie}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
