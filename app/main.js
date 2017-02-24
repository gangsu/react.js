import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello.jsx';

import './../css/base.css';

ReactDom.render(
	<Hello />,
	document.getElementById('content')
);