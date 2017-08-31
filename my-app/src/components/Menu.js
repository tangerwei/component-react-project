import React, { Component } from "react"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleMouseout = this.handleMouseout.bind(this);
        this.state = {
            show: true
        }
    }
    handleMouseout(){
        this.setState({
            show:false
        })
    }
    render() {
        return (
            <div style={{ display: this.state.show === true ? "block" : "none" }} onMouseOut={this.handleMouseout}>
                hello
            </div>
        )
    }
}
export default Menu;