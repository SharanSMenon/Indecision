import React from 'react';
import AddOptions from "./AddOption";
import Options from "./Options";
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';
// Component has to be uppercase
// Create constructor to bind functions
// Normal Class-Based Components
export default class IndecisionApp extends React.Component {
    // Constructor
    constructor(props) {
        // Super
        super(props);
        // Setting up state
        this.state = {
            options: props.options,
            selectedOption: undefined
        }
        // Binding handlers to this
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptionSingular = this.handleDeleteOptionSingular.bind(this);
        this.handleClearSelected = this.handleClearSelected.bind(this)
    }
    // Lifecycle methods
    // Two arguments, prev state and prev props
    // Saving data in localstorage
    componentDidMount() {
        // Fetching data
        try {
            const options = JSON.parse(localStorage.getItem("Indecision-Options"));
            if (options) {
                this.setState(() => ({
                    options
                }));
            }
        } catch (error) {
            // Do nothing

        }
    }
    componentDidUpdate(prevProps, prevState) {
        // Saving data
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("Indecision-Options", json);
        }
    }
    // Barely useful
    componentWillUnmount() {
        console.log("ComponentWillUnmount");

    }
    // Event Handlers
    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteOptionSingular(option) {
        this.setState((prev) => ({
            options: prev.options.filter((item) => item !== option)
        }));
    }
    handlePick() {
        const rand = Math.floor(Math.random() * this.state.options.length);
        const opt = this.state.options[rand];
        this.setState(() => ({
            selectedOption: opt
        }))
    }
    handleClearSelected() {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleAddOption(option) {
        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This option already exists";
        }
        this.setState((prev) => ({
            options: prev.options.concat([option])
        }));
    }
    // Render
    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header
                    subtitle={
                        subtitle
                    }
                />
                <div className="container">
                    <Action
                        hasOptions={
                            this.state.options
                        }
                        handlePick={
                            this.handlePick
                        } />
                    <div className="widget">
                        <Options
                            options={
                                this.state.options
                            }
                            handleDeleteOptions={
                                this.handleDeleteOptions
                            }
                            handleDeleteOptionSingular={
                                this.handleDeleteOptionSingular
                            } />
                        <AddOptions
                            handleAddOption={
                                this.handleAddOption
                            }
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelected={this.handleClearSelected}
                />
            </div>
        )
    }
}
// Default props for IndecisionApp component
IndecisionApp.defaultProps = {
    options: [],
    selectedOption: undefined
}