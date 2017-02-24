import React from 'react';
import configJson from './../../config.json';
import style from './Hello.css';

class Hello extends React.Component {
    render() {
        return (
        	<div>
	            <h1 className={style.green}>Hello World!{configJson.name}</h1>
	            <h1>Hello World!</h1>
	            <h2>Hello World!</h2>
	            <h2>Hello World!</h2>
	            <h3>Hello World!</h3>
	            <h3>Hello World!</h3>
	            <h4>Hello World!</h4>
	            <h4>Hello World!</h4>
	            <h5>Hello World!</h5>
	            <h5>Hello World!</h5>
	            <h6>Hello World!</h6>
	            <h6>Hello World!!!!!!!</h6>
            </div>
        );
    }
}

export default Hello;