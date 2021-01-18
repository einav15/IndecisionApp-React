class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleAddOption(option) {
        if (!option)
            return 'Enter a valid value'
        if (this.state.options.indexOf(option) !== -1)
            return 'Option already exists'
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[random])
    }
    render() {
        const title = "Indecision App"
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option) => (
                <Option key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />))}
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => props.handleDeleteOption(props.optionText)}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        e.target.elements.option.value = ''
        this.setState(() => ({ error }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button type="submit">Add option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

