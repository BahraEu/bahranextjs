"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Dependencies
const react_1 = __importDefault(require("react"));
const cartsEffect_1 = __importDefault(require("../../../styles/common/Card/cartsEffect"));
class BlogList extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState(this.props.Blogs);
    }
    render() {
        const { Blogs, currentUrl } = this.props;
        debugger;
        return (<>
            <cartsEffect_1.default currentUrl={currentUrl} blogs={Blogs}/>
                  
                </>);
    }
}
exports.default = BlogList;
//# sourceMappingURL=blogList.jsx.map