import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
var app = {
	title:"Indecision App",
	subtitle:'Put your life in the hands in the life of a computer',
	options:[]
}
const numbers = [55, 101, 1000];
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        renderApp()
    }else{
        alert("Please enter something")
    }
}
const clearOption = () => {
    app.options = []
    renderApp()
}
const onMakeDecision = () => {
    const rand = Math.floor(Math.random() * app.options.length);
    const opt = app.options[rand];
    alert(opt)
}
const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? "Here are your options":"No options"}</p>
            <button disabled={(app.options.length == 0)} onClick={onMakeDecision}>What should I do</button>
            <button onClick={clearOption}>Remove All</button>
            <ol>
                {
                    app.options.map((d, i) => <li key={"option_" + i}>{d}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, document.getElementById('root'));
}
renderApp()