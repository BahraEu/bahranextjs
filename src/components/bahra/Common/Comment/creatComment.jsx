"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_apollo_1 = require("react-apollo");
const wp_mutation_1 = require("../../../../graphql/mutations/wp-mutation");
const core_1 = require("@material-ui/core");
const style_1 = require("@components/bahra/HomePage/Subscription/style");
const Send_1 = __importDefault(require("@material-ui/icons/Send"));
class CreatComment extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.contentInput = (content) => this.setState({ content });
        this.handelSubmit = async () => {
            var _a;
            const { content } = this.state;
            const userID = (_a = this.props.user) === null || _a === void 0 ? void 0 : _a.id;
            await this.props
                .mutate({
                variables: { content: content, userID: userID },
            })
                .then(async ({ data }) => {
                console.log('data', data);
            });
        };
        this.state = {
            content: '',
            loading: false,
        };
    }
    render() {
        console.log('components', this.props);
        const user = this.props.user;
        return (<>
        <core_1.Container>
            <style_1.Row onClick={() => this.handelSubmit}>
              {user && user.avatar ? (<core_1.Avatar src={user.avatar.url}/>) : (<core_1.Avatar src={'https://bahra.eu/wp/wp-content/uploads/2020/05/circle-user.png'}/>)}
              <core_1.Input placeholder="Add Your Comment" value={this.state.content} autoCapitalize="none" onChange={() => this.contentInput}/>
              <core_1.Button onClick={() => this.handelSubmit}>
                <Send_1.default />
              </core_1.Button>
            </style_1.Row>
        </core_1.Container>
      </>);
    }
}
exports.default = react_apollo_1.graphql(wp_mutation_1.CreateCommentMutation)(CreatComment);
//# sourceMappingURL=creatComment.jsx.map