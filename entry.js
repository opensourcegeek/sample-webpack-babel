require('./style.css');

import ReactDOM from 'react-dom';
import React, {Component} from 'react';


import {write} from './dep1.js';


class Sample extends Component {
    render() {
        return <p>Booyakasha from react</p>;
    }

}

console.log(document.getElementById('main'));

ReactDOM.render(<Sample />, document.getElementById('main'));

