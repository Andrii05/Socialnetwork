import React, {Component} from 'react';
import './App.css';

const App = () => {
    return (
        <div>
          <div><Header/></div>
        <div className="App">

            <ul>
                <li>Css</li>
                <li>JS</li>
                <li>React</li>
                <li>HTML</li>
            </ul>
        </div>
        </div>
    );
}

const Header = () => {
  return (
      <div>
        <a>Home</a>
        <a>New Feed</a>
        <a>Messages</a>
      </div>
  );
}

export default App;
