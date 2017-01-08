import React from 'react';
import ReactDOM from 'react-dom';

import 'index.scss';

const HelloWorld = ({ who }) =>
	(<div className="hello-world">{ `Hello ${ who }!` }</div>);

ReactDOM.render(
    <HelloWorld who="World" />,
    document.getElementById('app')
);