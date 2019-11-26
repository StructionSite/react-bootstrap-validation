"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$assign = require("babel-runtime/core-js/object/assign")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require("react-bootstrap");

var ValidatedInput = (function (_Input) {
  _inherits(ValidatedInput, _Input);

  function ValidatedInput(props) {
    _classCallCheck(this, ValidatedInput);

    _get(Object.getPrototypeOf(ValidatedInput.prototype), "constructor", this).call(this, props);

    if (!props._registerInput || !props._unregisterInput) {
      throw new Error("Input must be placed inside the Form component");
    }
  }

  _createClass(ValidatedInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (_reactBootstrap.Input.prototype.componentWillMount) {
        _get(Object.getPrototypeOf(ValidatedInput.prototype), "componentWillMount", this).call(this);
      }

      this.props._registerInput(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (_reactBootstrap.Input.prototype.componentWillUnmount) {
        _get(Object.getPrototypeOf(ValidatedInput.prototype), "componentWillUnmount", this).call(this);
      }

      this.props._unregisterInput(this);
    }
  }]);

  return ValidatedInput;
})(_reactBootstrap.Input);

exports["default"] = ValidatedInput;

ValidatedInput.propTypes = _Object$assign({}, _reactBootstrap.Input.propTypes, {
  name: _propTypes2["default"].string.isRequired,
  validationEvent: _propTypes2["default"].oneOf(["", "onChange", "onBlur", "onFocus"]),
  validate: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].string]),
  errorHelp: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
});

ValidatedInput.defaultProps = _Object$assign({}, _reactBootstrap.Input.defaultProps, {
  validationEvent: ""
});
module.exports = exports["default"];