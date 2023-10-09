import React from 'react';
import  ReactDOM  from 'react-dom';


let styleObj = {backgroundColor: 'red'}
function Hello() {
    return <div>
        <h1 style= {styleObj}>Hello World</h1>
        <h2>{3+3}</h2>
    </div>
}

ReactDOM.render(<Hello />, document.getElementById('hello'))