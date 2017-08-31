import React, { Component } from "react";
import * as Actions from "./Actions";
import CounterStore from "./CounterStore";
class CounterA extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            count:CounterStore.getValues()[props.caption]
        }
    }
    onChange(){
        const count = CounterStore.getValues()[this.props.caption];
        this.setState({count});
    }
    handlerClickAdd(){
        Actions.increment(this.props.caption);
    }
    handlerClickDel(){
        Actions.decrement(this.props.caption);
    }
    render(){
        return (<div>
            <button onClick = {this.handlerClick}>+</button>
            <button onClick = {this.handlerClickDel}>-</button>
            {this.state.count}
        </div>);
    }
    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }
}
export default CounterA;