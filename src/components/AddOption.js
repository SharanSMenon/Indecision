import React from "react";
export default class AddOptions extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.state = {
            error: undefined
        }
    }
    submit(e) {
        e.preventDefault()
        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        e.target.elements.option.value = ''
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option-form"
                onSubmit={this.submit}>
                    <input className="add-option__input" type="text" name="option" placeholder="Enter something..." ></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}