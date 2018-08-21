import React from 'react';
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={props.hasOptions == false}
                className="big_button">
                What should I do
            </button>
        </div>
    )
}
export default Action;