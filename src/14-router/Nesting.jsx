import  { Component } from "react";

import { Route, Link } from "react-router-dom";




const Home = () => <div>Home</div>
// const Topics =()=><div>Topics</div>

const Rendering = () => <div>Rendering</div>
const Components = () => <div>Components</div>
const PropsStates = () => <div>Props v.States</div>

const Topics = (props) => {
    console.log(props)
let {url}=props.match
    return (
        <>
            <h1>Topics</h1>
            <br />
            <ul>
                <li><Link to={`${url}/rendering`}>Rendering</Link></li>
                    <li><Link to={`${url}/components`}>Components</Link></li>
                    <li><Link to={`${url}/propsstates`}>Props v.States</Link></li>

            </ul>
                <Route path={`${url}/rendering`} component={Rendering}></Route>
                <Route path={`${url}/components`} component={Components}></Route>
                <Route path={`${url}/propsstates`} component={PropsStates}></Route>

        </>
    )
}

class Nesting extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>

                </ul>
                <Route path="/" exact component={Home}></Route>
                <Route path="/topics" component={Topics}></Route>

            </div>
        )
    }
}

export default Nesting;