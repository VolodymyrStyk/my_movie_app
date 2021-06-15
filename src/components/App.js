import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {MoviesList} from "./moviesList/MoviesList";
import "./App.css"
import {Switch} from "@material-ui/core";

function App() {

    return (
        <BrowserRouter>
            <div className={'container'}>
                <Switch>
                    <Route path={'/movie'} component={MoviesList}/>
                    <Route path={'/movie/:id'} component ={}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;


//function App() {
//     return (
//         <div className="App">
//             <Router>
//                     <Header/>
//                 <Switch>
//                     <Route exact path={'/movies'} component = {MoviesList}/>
//                     <Route path={`/movies/:id`} component = {Movie}/>
//                 </Switch>
//             </Router>
//         </div>
//     );
// }
//
// export default App;