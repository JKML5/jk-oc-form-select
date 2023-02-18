"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function FormSelect(_ref) {
  var id = _ref.id,
    name = _ref.name,
    data = _ref.data;
  var StyledSelect = _styledComponents.default.select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    font-size: 16px;\n    height: 40px;\n    border: none;\n    outline: 1px solid #000000;\n    border-radius: 5px;\n    background-color: #ffffff;\n    padding: 0 10px;\n    width: 50%;\n\n    &:focus {\n      border: none;\n      outline: 2px solid #4e6701;\n    }\n  "])));
  var sortedValues = typeof data[0] === 'string' ? data.sort() : data.sort(function (a, b) {
    if (Object.values(a)[0] < Object.values(b)[0]) return -1;
    if (Object.values(a)[0] > Object.values(b)[0]) return 1;
    return 0;
  });
  function getOption(optionData) {
    return typeof optionData === 'string' ? /*#__PURE__*/React.createElement("option", {
      key: optionData,
      value: optionData
    }, optionData) : /*#__PURE__*/React.createElement("option", {
      key: Object.values(optionData)[0],
      value: Object.values(optionData)[1]
    }, Object.values(optionData)[0]);
  }
  return /*#__PURE__*/React.createElement(StyledSelect, {
    id: id,
    name: name
  }, sortedValues.map(function (value) {
    return getOption(value);
  }));
}
FormSelect.defaultProps = {
  id: '',
  name: '',
  data: []
};
FormSelect.propTypes = {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  data: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = FormSelect;
exports.default = _default;