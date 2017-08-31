import React from 'react'
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom'

// const {Component} = React;

function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/page1">Go1</Link></li>
                    <li><Link to={{pathname:"/page2",hash:'SDKJS2'}}>Go2</Link></li>
                    <li><Link to="/page3">Go3</Link></li>
                </ul>
                 <Route path="/page1" component={Page}/> 
                 <Route path="/page2" render={(props)=>(<h3>hash:{props.location.hash}</h3>)}/> 
                 <MyRoute path='/page3' component={MStyle} />
            </div>
        </BrowserRouter>
    )
}

function MyRoute({component:Component,...rest}){
    console.log(Component);
    return (<Route {...rest} render={props=>(
            <Component {...props} />
        )}/>)
}

function MStyle(props){
    return <h1>MStyle{props.location.pathname}</h1>
}

function Page(props) {
    console.log(props);
    return (<h3>{props.location.pathname}</h3>)
}

export default App