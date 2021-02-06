"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const formik_1 = require("formik");
const react_1 = __importDefault(require("react"));
const react_places_autocomplete_1 = __importDefault(require("react-places-autocomplete"));
const Send_1 = __importDefault(require("@material-ui/icons/Send"));
const PlaceInput = ({ input: { value, onChange, onBlur }, options, placeholder, onSelect, meta: { touched, error } }) => {
    return (<react_places_autocomplete_1.default value={value} onChange={onChange} searchOptions={options} onSelect={onSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (<formik_1.Form data-error={touched && !!error}>
          <formik_1.Field>
          <core_1.InputBase placeholder={placeholder} {...getInputProps({ placeholder, onBlur })}/>
          {touched && error && (<core_1.InputLabel>
              {error}
            </core_1.InputLabel>)}
          {suggestions.length > 0 && (<div style={{
        marginTop: 0,
        position: 'absolute',
        zIndex: 1000,
        width: '100%'
    }}>
              {loading && <div>Loading...</div>}
              <core_1.List component="nav" aria-label="main mailbox folders">
                {suggestions.map(suggestion => (<core_1.ListItem {...getSuggestionItemProps(suggestion)}>
                   <core_1.ListItemIcon>
                  <Send_1.default />
                </core_1.ListItemIcon>
                    <core_1.ListItemIcon>
                      {suggestion.formattedSuggestion.secondaryText}
                    </core_1.ListItemIcon>
                  </core_1.ListItem>))}
              </core_1.List>
            </div>)}
          </formik_1.Field>
        </formik_1.Form>)}
    </react_places_autocomplete_1.default>);
};
exports.default = PlaceInput;
//# sourceMappingURL=PlaceInput.jsx.map