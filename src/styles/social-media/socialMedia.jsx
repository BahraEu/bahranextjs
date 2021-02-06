"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = require("../Icon");
const style_1 = require("./style");
const link_1 = __importDefault(require("next/link"));
const SocialMediaC = () => {
    return (<>
            <style_1.SocialMediaContainer>
                <link_1.default href="https://www.facebook.com/pg/BAHRA-754568351542428/" prefetch={false}>
                    <a title="Facebook" aria-label="Facebook" className="link">
                        <Icon_1.Icon name="facebook" fill="#ffffff"/>
                    </a>
                </link_1.default>
                <link_1.default href="https://www.youtube.com/channel/UC7RmJZj7P8luEfS0afVBWhg" prefetch={false}>
                    <a title="Youtube" aria-label="Youtube" className="link">
                        <Icon_1.Icon name="youTube" fill="#ffffff"/>
                    </a>
                </link_1.default>
                <link_1.default href="https://twitter.com/bahra.eu" prefetch={false}>
                    <a title="Twitter" aria-label="Twitter" className="link">
                        <Icon_1.Icon name="twitter" fill="#ffffff"/>
                    </a>
                </link_1.default>
                <link_1.default href="https://www.linkedin.com/company/" prefetch={false}>
                    <a title="Pinterest" aria-label="Pinterest" className="Pinterest">
                        <Icon_1.Icon name="pinterest" fill="#ffffff"/>
                    </a>
                </link_1.default>
                <link_1.default href="https://github.com/bahra.eu" prefetch={false}>
                    <a title="Github" aria-label="Github" className="link">
                        <Icon_1.Icon name="github" fill="#ffffff"/>
                    </a>
                </link_1.default>
                <link_1.default href="https://www.instagram.com/bahra.eu/" prefetch={false}>
                    <a title="Instagram" aria-label="Instagram" className="link">
                        <Icon_1.Icon name="instagram" fill="#ffffff"/>
                    </a>
                </link_1.default>
            </style_1.SocialMediaContainer>
        </>);
};
exports.default = SocialMediaC;
//# sourceMappingURL=socialMedia.jsx.map