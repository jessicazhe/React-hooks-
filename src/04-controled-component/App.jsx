import { Component, createRef } from 'react'

class App extends Component {

    constructor(props) {
        super(props)
        this.inp = createRef()
    }

    state = {
        textValue: 'hello'
    }

    handleChange(e) {
        this.setState({
            textValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                {/* <input value={this.state.textValue} onChange={this.handleChange.bind(this)} type='text' /> */}

                <input ref='' onChange={this.handleChange.bind(this)} type="text" />
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.textVelue);
        }, 3000)
    }

}
export default App  