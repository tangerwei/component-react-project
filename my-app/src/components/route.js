import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    NavLink
} from 'react-router-dom'

const App = function (props) {
    return (
        <BrowserRouter children={<SApp />}>

        </BrowserRouter>
    )
}
const objPath = {
    pathname: 'yahoo',
    search: '?user=userAbc',
    hash: 'yahoo-hash',
    state: { fromDashboard: false }
}
const SApp = function (props) {
    return (<div>
        <h2>Accounts</h2>
        <ul>
            <li><Link to="/netflix">NetFlixA</Link></li>
            <li><Link to="/zillow-group">NetFlixB</Link></li>
            <li><Link to="/yahoo">NetFlixC</Link></li>
            <li><Link to={objPath}>NetFlixV</Link></li>
            <li><NavLink
                to="/yahoo"
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}
            >NavLinkGo</NavLink></li>
            <li><NavLink
                strict
                to="/yahoo/a"
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}
            >ExacetNavLinkGo</NavLink></li>
            <li><NavLink
                isActive={isActivev}
                to="/abc"
                activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }}
            >ExacetNavLinkGo</NavLink></li>
        </ul>
        <Route path="/:id" component={Child}></Route>
    </div>)
}

function isActivev(match,location){
    console.log(arguments);
    return false;
}

class Child extends Component {
    constructor(props) {
        super(props);
        var { match } = props;
        this.state = {
            match
        }
    }
    render() {
        console.log(this.props);
        return (<div>
            <h3>{this.props.match.params.id}</h3>
        </div>)
    }
}

export default App;