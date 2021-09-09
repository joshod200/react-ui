"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PaddedPaper = function PaddedPaper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    style: {
      padding: "20px"
    }
  }, children);
};

var _default = PaddedPaper;
exports["default"] = _default;