var count = 0;
const addOne = () => {
	count++
    // console.log("Add One")
    renderCounterApp()

};
const minusOne = () => {
	count--
    // console.log("Minus One")
    renderCounterApp()

};
const reset = () => {
    // console.log("Reset")
    count = 0;
    renderCounterApp()
}
const renderCounterApp = () => {
	var template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button id="increment" onClick={addOne}>Increment by 1</button><br />
        <button onClick={minusOne}>Decrement by 1</button><br />
        <button onClick={reset}>Reset</button><br />
    </div>
    )

	ReactDOM.render(template2, document.getElementById('root'));

}
renderCounterApp()