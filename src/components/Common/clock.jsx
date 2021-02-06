"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format = (t) => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;
const pad = (n) => (n < 10 ? `0${n}` : n);
const Clock = (props) => {
    const divStyle = {
        backgroundColor: props.light ? '#3185FC' : '#000',
        color: '#E3D26F',
        display: 'inline-block',
        font: '50px menlo, monaco, monospace',
        padding: '15px',
    };
    return <div style={divStyle}>{format(new Date(props.lastUpdate))}</div>;
};
exports.default = Clock;
//# sourceMappingURL=clock.jsx.map