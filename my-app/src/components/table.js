import React, { Component } from 'react'
class Ztable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thead: props.thead,
            tbody: props.tbody
        }
    }
    render() {
        return (
            <table>
                <Zthead data={this.state.thead} />
                <Ztbody data={this.state.tbody} />
            </table>
        )
    }
}
Ztable.defaultProps = {
    thead: [],
    tbody: []
}
class Zthead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.thead
        }
    }
    render() {
        var trs = computed(this.state.data);
        return (
            <thead>{trs}</thead>
        )
    }
}

class Ztr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data || []
        }
    }
    render() {
        return (
            <tr>
                {this.state.data}
            </tr>
        )
    }
}
//argument thead must be an Array
function computed(thead) {
    var trs = [],trcols = thead, rows = 0, cols = thead.length;
    for (var i = 0; i < thead.length; i++) {
        cols++;
        trcols.push(thead)
    }
    return [];
}

Zthead.defaultProps = {
    thead: []
}
