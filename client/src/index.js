import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
};

function Names(){
    return(
        <div>
            <Welcome name="Brandon"/>
            <Welcome name="Lorem"/>
            <Welcome name="Ipsum"/>
        </div>
    );
};

ReactDOM.render(
    <Names />,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();