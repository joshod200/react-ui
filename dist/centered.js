"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _center = _interopRequireDefault(require("components/center"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Centered = function Centered(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/_react["default"].createElement(_center["default"], {
    size: size
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: "100vh"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, children)));
};

var _default = Centered;
exports["default"] = _default;