import React from "react";
import Option from "./Option";
const Options = (props) => {
    return (
        <div className="widget__options">
            <div className="widget-header">
                <h3 className="widget-header__title">Your options</h3>
                <button
                    onClick={props.handleDeleteOptions}
                    className="button--link"
                >Remove All
            </button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started.</p>}
            {
                props.options.map((d, i) => {
                    return <Option
                        item={d}
                        key={"item_" + i}
                        count={i + 1}
                        handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                    />
                })
            }
        </div>
    )
}
export default Options;