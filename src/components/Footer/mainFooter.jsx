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
exports.Footer = void 0;
const React = __importStar(require("react"));
const link_1 = __importDefault(require("next/link"));
const formik_1 = require("formik");
const socialMedia_1 = __importDefault(require("../../styles/social-media/socialMedia"));
const style_1 = require("./style");
const core_1 = require("@material-ui/core");
const Footer = () => {
    const initialValues = { firstName: '' };
    return (<>
            <style_1.Container>
                <img alt="" src={require('../../../public/images/logo.png')} height="10" width="0"/>

                <div style={{ textAlign: 'center' }}>
                    <div>
                        <link_1.default prefetch href="/acount">
                            <a>ACOUNT</a>
                        </link_1.default>
                        |
                        <link_1.default prefetch href="/blogs">
                            <a>BLOGS</a>
                        </link_1.default>
                        |

                        <link_1.default prefetch href="/artists">
                            <a>ARTIST</a>
                        </link_1.default>
                        |

                        <link_1.default prefetch href="/shop">
                            <a>SHOP</a>
                        </link_1.default>
                        |

                        <link_1.default prefetch href="/security">
                            <a>SECURITY</a>
                        </link_1.default>
                        |

                        <link_1.default prefetch href="/guide">
                            <a>GUIDE</a>
                        </link_1.default>
                        |

                        <link_1.default prefetch href="/about">
                            <a>ABOUT</a>
                        </link_1.default>
                    </div>
                    <formik_1.Formik initialValues={initialValues} onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }} render={() => (<formik_1.Form>
                                <formik_1.Field name="firstName" render={({ field, meta }) => (<div>
                                            <core_1.Input type="text" {...field} placeholder="search"/>
                                            {meta.touched && meta.error && meta.error}
                                        </div>)}/>
                            </formik_1.Form>)}/>
                    <socialMedia_1.default />
                </div>
            </style_1.Container>
        </>);
};
exports.Footer = Footer;
//# sourceMappingURL=mainFooter.jsx.map