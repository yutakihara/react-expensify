"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// stateless functional component
var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this));
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_assertThisInitialized(_this));
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);

        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {// Do nothing at all
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        console.log('saving data');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('componentWillUnmount');
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = 'Put your life in the hands of a computer';
      return React.createElement("div", null, React.createElement(Header, {
        subtitle: subtitle
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        handlePick: this.handlePick
      }), React.createElement(Options, {
        options: this.state.options,
        handleDeleteOptions: this.handleDeleteOptions,
        handleDeleteOption: this.handleDeleteOption
      }), React.createElement(AddOption, {
        handleAddOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component); // Stateless functional components


var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), props.subtitle && React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Indecision'
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handlePick,
    disabled: !props.hasOptions
  }, "What should I do?"));
};

var Options = function Options(props) {
  return React.createElement("div", null, React.createElement("button", {
    onClick: props.handleDeleteOptions
  }, "Remove All"), props.options.length === 0 && React.createElement("p", null, "Please add an option to get started!"), props.options.map(function (option) {
    return React.createElement(Option, {
      key: option,
      optionText: option,
      handleDeleteOption: props.handleDeleteOption
    });
  }));
};

var Option = function Option(props) {
  return React.createElement("div", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      props.handleDeleteOption(props.optionText);
    }
  }, "remove"));
};

var AddOption =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });

      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, this.state.error && React.createElement("p", null, this.state.error), React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
