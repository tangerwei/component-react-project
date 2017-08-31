// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './style/App.css';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       zstyle:props.mesStyle
//     }
//     this.message = this.message.bind(this);
//   }
//   message(){
//     var style = this.state.zstyle;
//     style.display = style.display == "block" ?  "none":"block" ;
//     this.setState({
//       zstyle:style
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div style={this.state.zstyle}>sssss</div>
//         <ul>
//           <li onMouseOver ={this.message}>s a Link to EasyUI</li>
//         </ul>
//       </div>
//     );
//   }
// }
// App.defaultProps = {
//   mesStyle:{
//     display:'none',
//     color:'#aaafff'
//   }
// }
// export default App;
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Menu from './components/Menu'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <Menu />
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample