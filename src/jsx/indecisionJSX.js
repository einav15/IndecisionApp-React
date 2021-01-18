const app = {
    title: "Indecision app",
    subtitle: "By Einav",
    options: []
}

const initButtonClicked = () => {
    const random = Math.floor(Math.random() * app.options.length)
    alert(app.options[random])
}
const removeButtonClicked = () => {
    app.options = []
    render()
}

const submitForm = (e)=>{
    e.preventDefault()
    const option = e.target.elements.option.value
    if(!!option){
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    } 
}

const render = () => {
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0? 'Your options': 'No options'}</p>
            <button disable={app.options.length < 1} onClick={initButtonClicked}>What should I do?</button>
            <button onClick={removeButtonClicked}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={submitForm}>
                <input type="text" name="option" />
                <button type="submit">Add Option</button>
            </form>

        </div>
    )
    const appBody = document.querySelector('#app')

    ReactDOM.render(jsx, appBody)
}
render()    