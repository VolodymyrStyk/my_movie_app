import './App.css';
import {MoviesList} from "./backUp/components/MoviesList";
import {Header} from "./backUp/components/Header";
import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";
import {Movie} from "./backUp/components/Movie";

function App() {
    return (
        <div className="App">
            sdsd
        </div>
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