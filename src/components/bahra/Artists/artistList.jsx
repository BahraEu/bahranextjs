"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Dependencies
const react_1 = __importDefault(require("react"));
const routes_1 = require("@services/routes/routes");
const style_1 = require("../Products/style");
const styles_1 = require("./styles");
const Typography_1 = require("../../../styles/Typography");
const Avatar_1 = __importDefault(require("../../../styles/common/Avatar"));
class ArtistList extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.setState(this.props.artists);
    }
    render() {
        debugger;
        const { artists } = this.props;
        console.log(artists);
        return (<>
                    <style_1.ArtistsWrap>
                        {artists.map(item => (<div key={item.id}>
                                <styles_1.ArtistsWrapper>
                                    <routes_1.Link as={`/artists/${item.slug}-${item.artistId}`} href={`/artists ?slug=${item.slug}-${item.artistId}`}>
                                        <a>
                                            <style_1.ImgWrap>
                                                <style_1.Img src={item.image.node.sourceUrl}/>
                                            </style_1.ImgWrap>
                                            
                                             
                                            <style_1.Title>{item.title}</style_1.Title>
                                            <Typography_1.H2>{item.excerpt}</Typography_1.H2>
                                            <Avatar_1.default src={'https://i.pravatar.cc/300'}/>
                                        </a>
                                    </routes_1.Link>
                                </styles_1.ArtistsWrapper>
                                
                            </div>))}
                    </style_1.ArtistsWrap>

            </>
        // <DesignDetailsCard/>
        );
    }
}
exports.default = ArtistList;
//# sourceMappingURL=artistList.jsx.map