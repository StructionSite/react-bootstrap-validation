"use strict";

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Radio = require("./Radio");

var _Radio2 = _interopRequireDefault(_Radio);

var _InputContainer2 = require("./InputContainer");

var _InputContainer3 = _interopRequireDefault(_InputContainer2);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var RadioGroup = (function (_InputContainer) {
  _inherits(RadioGroup, _InputContainer);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    _get(Object.getPrototypeOf(RadioGroup.prototype), "constructor", this).call(this, props);

    this.state = {
      value: props.defaultValue || props.value
    };
  }

  _createClass(RadioGroup, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      _get(Object.getPrototypeOf(RadioGroup.prototype), "componentWillMount", this).call(this);

      this.props._registerInput(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _get(Object.getPrototypeOf(RadioGroup.prototype), "componentWillUnmount", this).call(this);

      this.props._unregisterInput(this);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var input = this._inputs[this.props.name];

      var value = undefined;

      input.forEach(function (ipt) {
        if (ipt.getChecked()) {
          value = ipt.getValue();
        }
      });

      return value;
    }
  }, {
    key: "render",
    value: function render() {
      var label = undefined;

      if (this.props.label) {
        label = _react2["default"].createElement(
          "label",
          {
            className: (0, _classnames2["default"])("control-label", this.props.labelClassName)
          },
          this.props.label
        );
      }

      var groupClassName = {
        "form-group": !this.props.standalone,
        "form-group-lg": !this.props.standalone && this.props.bsSize === "large",
        "form-group-sm": !this.props.standalone && this.props.bsSize === "small",
        "has-feedback": this.props.hasFeedback,
        "has-success": this.props.bsStyle === "success",
        "has-warning": this.props.bsStyle === "warning",
        "has-error": this.props.bsStyle === "error"
      };

      return _react2["default"].createElement(
        "div",
        { className: (0, _classnames2["default"])(groupClassName, this.props.groupClassName) },
        label,
        _react2["default"].createElement(
          "div",
          { className: this.props.wrapperClassName },
          this._renderChildren(),
          this._renderHelp()
        )
      );
    }
  }, {
    key: "_renderChildren",
    value: function _renderChildren() {
      var _this = this;

      return _react2["default"].Children.map(this.props.children, function (child) {
        if (child.type !== _Radio2["default"]) {
          throw new Error("Only Radio component is allowed inside RadioGroup");
        }

        return _react2["default"].cloneElement(child, {
          type: "radio",
          standalone: true,
          checked: _this.state.value === child.props.value,
          name: _this.props.name,
          onChange: _this._onChange.bind(_this),
          _registerInput: _this.registerInput.bind(_this),
          _unregisterInput: _this.unregisterInput.bind(_this)
        });
      });
    }
  }, {
    key: "_renderHelp",
    value: function _renderHelp() {
      return this.props.help ? _react2["default"].createElement(
        "span",
        { className: "help-block", key: "help" },
        this.props.help
      ) : null;
    }
  }, {
    key: "_onChange",
    value: function _onChange(e) {
      if (!e.target) {
        return;
      }

      this.setState({
        value: e.target.value
      });

      this.props.onChange(e);
    }
  }]);

  return RadioGroup;
})(_InputContainer3["default"]);

exports["default"] = RadioGroup;

RadioGroup.propTypes = {
  standalone: _propTypes2["default"].bool,
  hasFeedback: _propTypes2["default"].bool,
  bsSize: function bsSize(props) {
    if (props.standalone && props.bsSize !== undefined) {
      return new Error("bsSize will not be used when `standalone` is set.");
    }

    return _propTypes2["default"].oneOf(["small", "medium", "large"]).apply(null, arguments);
  },
  bsStyle: _propTypes2["default"].oneOf(["success", "warning", "error"]),
  groupClassName: _propTypes2["default"].string,
  wrapperClassName: _propTypes2["default"].string,
  labelClassName: _propTypes2["default"].string,
  validationEvent: _propTypes2["default"].oneOf(["onChange"]),
  validate: _propTypes2["default"].oneOfType([_propTypes2["default"].func, _propTypes2["default"].string]),
  errorHelp: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
};

RadioGroup.defaultProps = {
  standalone: false,
  validationEvent: "onChange",
  onChange: function onChange() {}
};
module.exports = exports["default"];