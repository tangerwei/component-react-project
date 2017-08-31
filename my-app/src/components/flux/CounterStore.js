import { dispatcher } from 'react-flux';
import ActionsTypes from './ActionsTypes'
var EventEmitter = require("events").EventEmitter;
const Values = {
    "First": 0,
    "Second": 1,
    "Third": 2
}
const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getValues: function () {
        return Values;
    },
    emitChange: function () {
        this.emit("CHANGE_EVENT");
    },
    addChangeListener: function (callback) {
        this.on("CHANGE_EVENT", callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener("CHANGE_EVENT", callback);
    }
});
console.log(dispatcher);
CounterStore.dispatchToken = dispatcher.register((action) => {
    if (action.type == ActionsTypes.INCREASE) {
        Values[action.caption]++;
        CounterStore.emitChange();
    }
    if (action.type == ActionsTypes.DECREASE) {
        Values[action.caption]--;
        CounterStore.emitChange();
    }
    
});
export default CounterStore