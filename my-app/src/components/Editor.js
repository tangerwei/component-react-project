import React, { Component } from 'react'
import "../style/components/Editor.css"
class Editor extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleChange = this.handleChange.bind(this);
        var { inputShow, divshow } = props;
        this.state = {
            inputShow,
            divshow,
            value: "hello"
        }
    }
    handleClick(e) {
        var { inputShow, divshow } = this.state;
        var tmp = inputShow.display;
        inputShow.display = divshow.display;
        divshow.display = tmp;
        this.refs.sd.focus();
        this.setState({
            inputShow,
            divshow
        })
    }
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleKey(e) {
        if (e.keyCode === 13) {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <div className="editor-div" onDoubleClick={this.handleClick} style={this.state.divshow}>{this.state.value}</div>
                <input ref="sd" className="editor-input" style={this.state.inputShow} onChange = {this.handleChange.bind(this)} value={this.state.value} onKeyDown={this.handleKey.bind(this)} />
            </div>
        )
    }
}
var divshow = {
    display: "block",
    
}
var inputShow = {
    display: "none",
};
Editor.defaultProps = {
    inputShow,
    divshow
}

export default Editor;