"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formik_1 = require("formik");
const style_1 = require("./style");
const i18n_1 = require("../../../../i18n");
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
const TextareaAutosize_1 = __importDefault(require("@material-ui/core/TextareaAutosize"));
const AddBlogForm = props => {
    const t = props.t;
    debugger;
    console.error(props.message, props);
    return (<>
            <style_1.LogInWrapper>
                <formik_1.Form>
                        <style_1.Label htmlFor="Tittle">
                            {t('Tittle')}
                            <style_1.Input type="Tittle" name="Tittle"/>
                            <style_1.FieldErrorRow name="Tittle" ErrorMessageProp={props.message}/>
                            {props.message && props.message.includes('Tittle')
        ? props.message.split(':').pop()
        : null}
                        </style_1.Label>

                        <style_1.Label htmlFor="Content">
                            {t('Content')}
                            <style_1.Input type="Content" name="Content"/>
                            <style_1.FieldErrorRow name="Content" ErrorMessageProp={props.message}/>
                            {props.message && props.message.includes('Content')
        ? props.message.split(':').pop()
        : null}
                        </style_1.Label>
                        <TextareaAutosize_1.default rowsMax={12} aria-label="maximum height" placeholder="Maximum 12 rows" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua."/>
                        <style_1.LogInButton type="submit" disabled={props.isSubmitting}>
                        {t('Submit')}
                    </style_1.LogInButton>
                </formik_1.Form>
            </style_1.LogInWrapper>
        </>);
};
exports.default = i18n_1.withTranslation('common')(AddBlogForm);
//# sourceMappingURL=addBlogForm.jsx.map