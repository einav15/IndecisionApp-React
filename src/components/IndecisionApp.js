import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleAddOption = (option) => {
        if (!option)
            return 'Enter a valid value'
        if (this.state.options.indexOf(option) !== -1)
            return 'Option already exists'
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handlePick = () => {
        const random = Math.floor(Math.random() * this.state.options.length)
        this.setState(() => ({ selectedOption: this.state.options[random] }))
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    render() {
        const title = "Indecision App"
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                    <Options
                        handleDeleteOptions={this.handleDeleteOptions}
                        options={this.state.options}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} clear={this.handleClearSelectedOption} />
            </div>
        )
    }
}