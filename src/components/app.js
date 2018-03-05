import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Lobby from './lobby';
import Chat from './chat';

const App = () => (
    <div className="container">
        <h1 className="center-align">Fire 🔥 Chat</h1>
        <Lobby/>
    </div>
);

export default App;
