"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SingleEvent = props => {
    const event = props.event;
    console.log(event);
    return (<div>
            <div key={event.id}>{event.title}</div>
        </div>);
};
exports.default = SingleEvent;
//# sourceMappingURL=singleEvent.jsx.map