"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Box_1 = __importDefault(require("@material-ui/core/Box"));
const spinner_style_1 = require("./spinner.style");
function CircularProgressWithLabel(props) {
    return (<>
    <div>
      <Box_1.default top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
           <spinner_style_1.Spinner {...props}/>

           <spinner_style_1.SpinnerPrecent>
             {`${Math.round(props.value)}%`}</spinner_style_1.SpinnerPrecent>
            </Box_1.default>
          </div>
    </>);
}
function CircularStatic() {
    const [progress, setProgress] = react_1.default.useState(30);
    react_1.default.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 90 : prevProgress + 60));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <CircularProgressWithLabel value={progress}/>;
}
exports.default = CircularStatic;
//# sourceMappingURL=spinner.jsx.map