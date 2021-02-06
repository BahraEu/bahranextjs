"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Dependencies
const react_1 = __importDefault(require("react"));
const routes_1 = require("@services/routes/routes");
const style_1 = require("../Products/style");
const Typography_1 = require("@styles/Typography");
const styles_1 = require("./styles");
class EventList extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState(this.props.events);
    }
    render() {
        const { events, currentUrl, currentLanguage } = this.props;
        console.log(currentUrl, currentLanguage, events);
        return (<>
                <style_1.EventsWrap>
                    {events.map(item => (<div key={item.id}>
                            <styles_1.EventsWrapper>
                                <routes_1.Link as={`/events/${item.slug}-${item.eventId}`} href={`/events?slug=${item.slug}-${item.eventId}`}>
                                    <a>
                                      
                                    <style_1.Title dangerouslySetInnerHTML={{ __html: item.title }}></style_1.Title>

                                    </a>
                                </routes_1.Link>
                                <Typography_1.H1>{item.category}</Typography_1.H1>
                          <style_1.Title dangerouslySetInnerHTML={{ __html: item.excerpt }}></style_1.Title>
                            </styles_1.EventsWrapper>
                        </div>))}
                  
                </style_1.EventsWrap>
            </>);
    }
}
exports.default = EventList;
//# sourceMappingURL=eventList.jsx.map