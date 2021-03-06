"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_google_maps_1 = require("react-google-maps");
const CustomSkinMap = react_google_maps_1.withScriptjs(react_google_maps_1.withGoogleMap(() => (<react_google_maps_1.GoogleMap defaultZoom={13} defaultCenter={{ lat: 40.748817, lng: -73.985428 }} defaultOptions={{
    scrollwheel: false,
    zoomControl: true,
    styles: [
        {
            featureType: "water",
            stylers: [
                { saturation: 43 },
                { lightness: -11 },
                { hue: "#0088ff" }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                { hue: "#ff0000" },
                { saturation: -100 },
                { lightness: 99 }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
        },
        {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
        },
        {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
        },
        {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
        },
        {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
        },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
        }
    ]
}}>
      <react_google_maps_1.Marker position={{ lat: 40.748817, lng: -73.985428 }}/>
    </react_google_maps_1.GoogleMap>)));
function Maps() {
    return (<CustomSkinMap googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyChF-V0LobUxgDz5ujBRic35HcsyTcDbAM&libraries=places" loadingElement={<div style={{ height: `100%` }}/>} containerElement={<div style={{ height: `100vh` }}/>} mapElement={<div style={{ height: `100%` }}/>}/>);
}
exports.default = Maps;
//# sourceMappingURL=Maps.jsx.map