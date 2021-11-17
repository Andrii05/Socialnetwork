import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from 'react-router-dom';



const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Switch>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() =>
                            <Dialogs store={props.store}/>}/>
                        <Route path='/profile' render={() =>
                            <Profile profilePage={props.state.profilePage}
                                     dispatch={props.dispatch}/>}/>
                    </div>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
