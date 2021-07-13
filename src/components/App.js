import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import {MoviesList} from "./moviesList/MoviesList";
import "./App.css"
import {MovieInfo} from "./movieInfo/MovieInfo";
import {ErrorMovies} from "./moviesList/ErrorMovies";
import {Header} from "./header/Header";

function App() {

    return (
        <BrowserRouter>
            <div className={'container'}>
                <Header/>
                <Switch>
                    <Route exact path={'/movies'} component={MoviesList}/>
                    <Route path={'/movies/:id'} component={MovieInfo}/>
                    <Route exact path={'/error'} componet ={ErrorMovies}/>
                    <Redirect to={'/movies'}/>
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
