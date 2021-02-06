"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_1 = require("../Products/style");
const Container_1 = __importDefault(require("@material-ui/core/Container"));
const react_1 = __importDefault(require("react"));
const GridContainer_1 = __importDefault(require("../../../styles/common/Grid/GridContainer"));
const link_1 = __importDefault(require("next/link"));
const core_1 = require("@material-ui/core");
function SingleArtist(artist) {
    console.log(artist);
    const Bahra = require('../../../../public/images/Bahra.png');
    return (<Container_1.default>
                <style_1.ImgWrap>

                    <style_1.Img className="artist-image" src={artist.image.node.sourceUrl} alt={artist.name}/>

                    
                </style_1.ImgWrap>

                <div>
                    <style_1.Title className="artist_title entry-title">{artist.title}</style_1.Title>

                </div>
                <div>
                  <div>
                    <GridContainer_1.default>
                      <core_1.Grid xs={12} sm={12} md={6}>
                        <link_1.default href='/'>
                          <img src={Bahra} alt="..."/>
                            View landing page
                        </link_1.default>
                      </core_1.Grid>
                      <core_1.Grid xs={12} sm={12} md={6}>
                        <link_1.default href="profile-page">
                          <img src={Bahra} alt="..."/>
                            View profile page
                        </link_1.default>
                      </core_1.Grid>
                    </GridContainer_1.default>
                  </div>
                </div>
            <div className="artist-container" key={artist.id}></div>
        </Container_1.default>);
}
exports.default = SingleArtist;
//# sourceMappingURL=singleArtist.jsx.map