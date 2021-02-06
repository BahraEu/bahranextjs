"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = exports.StoreContext = void 0;
const react_1 = __importStar(require("react"));
const use_dark_mode_1 = __importDefault(require("use-dark-mode"));
// import { initializeStore } from '../../src/services/stores/store'
const theme_1 = require("../../src/styles/theme");
let store;
exports.StoreContext = react_1.createContext(store);
function useStore() {
    const context = react_1.useContext(exports.StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within StoreProvider');
    }
    return context;
}
exports.useStore = useStore;
const BahraProvider = props => {
    // const store = initializeStore()
    const darkMode = use_dark_mode_1.default(true);
    const [theme, setTheme] = react_1.default.useState(theme_1.Light);
    const [mounted, setMounted] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        setTheme(darkMode.value ? theme_1.Dark : theme_1.Light);
        setMounted(true);
    }, []);
    const body = <theme_1.ThemeProvider theme={theme}>
        
            {props.children}
        
        </theme_1.ThemeProvider>;
    if (!mounted) {
        return <div>{body}</div>;
    }
    return body;
};
exports.default = BahraProvider;
//# sourceMappingURL=bahraProviders.jsx.map