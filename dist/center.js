"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 6 : _ref$size;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    justify: "center",
    style: {
      marginTop: "20px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    lg: size,
    style: {
      position: "relative"
    }
  }, children)));
};

exports["default"] = _default;