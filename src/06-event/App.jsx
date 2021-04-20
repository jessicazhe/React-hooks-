import { Component } from 'react'
class App extends Component {


    handleClick(){
        console.log('clicked.');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}
export default App 