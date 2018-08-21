import React from "react";

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.item}</p>
            <button
                onClick={(e) => {
                    props.handleDeleteOptionSingular(props.item)
                }}
                className="button--link"
            >&times;
            </button>
        </div>
    )
};
export default Option;