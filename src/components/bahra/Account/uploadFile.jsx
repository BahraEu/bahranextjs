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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RootRef_1 = __importDefault(require("@material-ui/core/RootRef"));
const core_1 = require("@material-ui/core");
const react_1 = __importStar(require("react"));
const react_dropzone_1 = require("react-dropzone");
function MyDropzone() {
    const onDrop = react_1.useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result;
                console.log(binaryStr);
            };
            reader.readAsArrayBuffer(file);
        });
    }, []);
    const { getRootProps, getInputProps } = react_dropzone_1.useDropzone({ onDrop });
    const _a = getRootProps(), { ref } = _a, rootProps = __rest(_a, ["ref"]);
    return (<>

      <RootRef_1.default rootRef={ref}>
        <core_1.Paper {...rootProps}>
      <input {...getInputProps()}/>
      <p>Drag 'n' drop some files here, or click to select files</p>
          </core_1.Paper>
         </RootRef_1.default>
    </>);
}
exports.default = MyDropzone;
// <RootRef rootRef={ref}>
//   <Paper {...rootProps}>
//     <input {...getInputProps()} />
//     <p>Drag 'n' drop some files here, or click to select files</p>
//   </Paper>
// </RootRef>
//# sourceMappingURL=uploadFile.jsx.map