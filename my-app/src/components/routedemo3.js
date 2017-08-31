import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
function App() {
    return (<Router children={<Page />} />)
}
function Page() {
    return (
        <div>
            <ul>
                <li><Link to="/page1">Go 1</Link></li>
                <li><Link to="/page2">Go 2</Link></li>
                <li><Link to="/page3">Go 3</Link></li>
            </ul>
            <Route path="/page2" children={MPage} />
        </div>
    )
}
function MPage(props){
    return (<h1>{props.location.pathname}</h1>)
}
//notice param test is dropped there
// function MLink({to,...rest}){
//     return (
//         <Route path={to} children={({match})=>(
//                 <li className={match? 'active':''}>
//                     <Link to={to} {...rest} />
//                 </li>
//             )} />
//     )
// }

export default App;