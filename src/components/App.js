import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import {MoviesList} from "./moviesList/MoviesList";
import "./App.css"
import {MovieInfo} from "./movieInfo/MovieInfo";
import {ErrorMovies} from "./moviesList/ErrorMovies";
import {Header} from "./header/Header";
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

function App() {
    const themes = {
        light: 'public/light.css',
        dark: 'dark.css',
    };

    return (
        <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
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
        </ThemeSwitcherProvider>
    );
}

export default App;
