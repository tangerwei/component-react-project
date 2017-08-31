import React,{Component} from 'react'
import{
    // BrowserRouter as Router,
    Route,
    Link,
    MemoryRouter as Router
} from 'react-router-dom'

function App(){
    return (<Router initialEntries={['/page3','/page1','/page2']} initialIndex={3}>
        <div>
            <ul>
                <li><Link to="/page1">Go MemoryRouter</Link></li>
                <li><Link to="/page2">Go MemoryRouter2</Link></li>
                <li><Link to="/page3">Go MemoryRoute3</Link></li>
            </ul>
            <Route pathname="/page1" component={Page} />
            <Route pathname="/page2" component={Page} />
        </div>
    </Router>)
}
class Page extends Component{
    constructor(props){
        super(props);
        this.state={
            key:10
        }
    }
    render(){
        // console.log(this.props);
        return (<h3>{this.props.location.pathname}</h3>)
    }
}
export default App;