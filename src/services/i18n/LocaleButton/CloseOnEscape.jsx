"use strict";
/**
 * Inspired by https://github.com/conorhastings/react-close-on-escape
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class CloseOnEscape extends react_1.Component {
    constructor() {
        super(...arguments);
        this.onEscape = ({ keyCode }) => {
            if (keyCode === 27) {
                this.props.onEscape();
            }
        };
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onEscape);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onEscape);
    }
    render() {
        return this.props.children;
    }
}
exports.default = CloseOnEscape;
//# sourceMappingURL=CloseOnEscape.jsx.map