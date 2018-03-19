/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CustomTable = function (_React$Component) {\n  _inherits(CustomTable, _React$Component);\n\n  function CustomTable(props) {\n    _classCallCheck(this, CustomTable);\n\n    var _this = _possibleConstructorReturn(this, (CustomTable.__proto__ || Object.getPrototypeOf(CustomTable)).call(this, props));\n\n    _this.handleSubmit = _this.handleSubmit.bind(_this);\n    _this.handleRemove = _this.handleRemove.bind(_this);\n    _this.state = {\n      records: _this.props.records\n    };\n    return _this;\n  }\n\n  _createClass(CustomTable, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      try {\n        var records = JSON.parse(localStorage.getItem('records'));\n        this.setState(function () {\n          return {\n            records: records\n          };\n        });\n      } catch (e) {\n        //\n      }\n    }\n  }, {\n    key: 'componentDidUpdate',\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (prevState.records.length !== this.state.records.length) {\n        var json = JSON.stringify(this.state.records);\n        localStorage.setItem('records', json);\n      }\n    }\n  }, {\n    key: 'handleSubmit',\n    value: function handleSubmit(values) {\n      var _this2 = this;\n\n      var count = Object.keys(values).length;\n      var hasEmpty = 0;\n      for (var item in values) {\n        if (values[item] === \"\") {\n          ++hasEmpty;\n        }\n      }\n      if (hasEmpty != 0) {\n        if (hasEmpty + 1 === count) return 'Begin entering values!!';else return 'Please enter all values to submit!!';\n      }\n\n      // this.state.records.map((item)=>{\n      //       if(item.id === values.id){\n      //         values.id = item.id+1;\n      //         console.log('got it'+ item.id);\n      //       } \n      //     });\n\n      this.setState(function () {\n        return { records: _this2.state.records.concat([values]) };\n      });\n    }\n  }, {\n    key: 'handleRemove',\n    value: function handleRemove(optionToRemove) {\n      var _this3 = this;\n\n      if (optionToRemove) {\n        this.setState(function () {\n          return {\n            records: _this3.state.records.filter(function (item) {\n              return item.id !== optionToRemove;\n            })\n          };\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'h1',\n          null,\n          'Welcome to Custom Table'\n        ),\n        React.createElement('br', null),\n        React.createElement('br', null),\n        this.state.records.length > 0 && React.createElement(Table, { records: this.state.records, handleRemove: this.handleRemove }),\n        React.createElement(AddInfo, { handleSubmit: this.handleSubmit, records: this.state.records, id: this.state.id })\n      );\n    }\n  }]);\n\n  return CustomTable;\n}(React.Component);\n\nvar AddInfo = function (_React$Component2) {\n  _inherits(AddInfo, _React$Component2);\n\n  function AddInfo(props) {\n    _classCallCheck(this, AddInfo);\n\n    var _this4 = _possibleConstructorReturn(this, (AddInfo.__proto__ || Object.getPrototypeOf(AddInfo)).call(this, props));\n\n    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);\n    _this4.state = {\n      error: undefined\n    };\n    return _this4;\n  }\n\n  _createClass(AddInfo, [{\n    key: 'handleSubmit',\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var id = 1;\n      if (this.props.records) {\n        id = this.props.records.length + 1;\n      }\n      var values = {\n        id: Date.now(),\n        date: e.target.date.value.trim(),\n        category: e.target.category.value.trim(),\n        amount: e.target.amount.value.trim(),\n        description: e.target.description.value.trim(),\n        status: e.target.status.value.trim()\n      };\n      var error = this.props.handleSubmit(values);\n      this.setState(function () {\n        return {\n          error: error\n\n        };\n      });\n      if (!error) {\n        e.target.date.value = '';\n        e.target.amount.value = '';\n        e.target.category.value = 'Category';\n        e.target.description.value = '';\n        e.target.status.value = 'Status';\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'form',\n        { onSubmit: this.handleSubmit, style: { width: 250 + 'px' } },\n        this.state.error && React.createElement(\n          'p',\n          null,\n          this.state.error\n        ),\n        React.createElement(\n          'p',\n          null,\n          React.createElement('input', { type: 'date', placeholder: 'Date', name: 'date', className: 'form-control' })\n        ),\n        React.createElement(\n          'p',\n          null,\n          React.createElement('input', { type: 'number', placeholder: 'Amount', name: 'amount', className: 'form-control' })\n        ),\n        React.createElement(\n          'p',\n          null,\n          React.createElement(\n            'select',\n            { className: 'form-control', name: 'category', placeholder: 'Category' },\n            React.createElement(\n              'option',\n              null,\n              'Category'\n            ),\n            React.createElement(\n              'option',\n              null,\n              'Food'\n            ),\n            React.createElement(\n              'option',\n              null,\n              'Travel'\n            ),\n            React.createElement(\n              'option',\n              null,\n              'Default Expenses'\n            )\n          )\n        ),\n        React.createElement(\n          'p',\n          null,\n          React.createElement('textarea', { type: 'text', placeholder: 'Description', name: 'description', className: 'form-control' })\n        ),\n        React.createElement(\n          'p',\n          null,\n          React.createElement(\n            'select',\n            { className: 'form-control', name: 'status', placeholder: 'Status' },\n            React.createElement(\n              'option',\n              null,\n              'Status'\n            ),\n            React.createElement(\n              'option',\n              null,\n              'Paid'\n            ),\n            React.createElement(\n              'option',\n              null,\n              'Pending'\n            )\n          )\n        ),\n        React.createElement(\n          'button',\n          { className: 'btn btn-primary' },\n          'Submit'\n        )\n      );\n    }\n  }]);\n\n  return AddInfo;\n}(React.Component);\n\nvar Table = function Table(props) {\n  return React.createElement(\n    'div',\n    null,\n    React.createElement(\n      'table',\n      { className: 'table table-sm table-striped' },\n      React.createElement(\n        'tbody',\n        null,\n        React.createElement(\n          'tr',\n          null,\n          React.createElement(\n            'th',\n            null,\n            'ID'\n          ),\n          React.createElement(\n            'th',\n            null,\n            'Date'\n          ),\n          React.createElement(\n            'th',\n            null,\n            'Amount ($)'\n          ),\n          React.createElement(\n            'th',\n            null,\n            'Category'\n          ),\n          React.createElement(\n            'th',\n            null,\n            'Description'\n          ),\n          React.createElement(\n            'th',\n            null,\n            'Status'\n          ),\n          React.createElement('th', null)\n        ),\n        props.records.map(function (item) {\n          //console.log(item);\n          return React.createElement(Record, { values: item, key: item.id, handleRemove: props.handleRemove, records: props.records });\n        })\n      )\n    ),\n    React.createElement('br', null)\n  );\n};\n\nvar Record = function Record(props) {\n  if (props.records.length > 0) {\n    return React.createElement(\n      'tr',\n      { className: props.values.status === \"Pending\" ? 'table-danger' : 'table' },\n      React.createElement(\n        'td',\n        null,\n        props.values && props.values.id\n      ),\n      React.createElement(\n        'td',\n        null,\n        props.values && props.values.date\n      ),\n      React.createElement(\n        'td',\n        null,\n        props.values && props.values.amount\n      ),\n      React.createElement(\n        'td',\n        null,\n        props.values && props.values.category\n      ),\n      React.createElement(\n        'td',\n        null,\n        props.values && props.values.description\n      ),\n      React.createElement(\n        'td',\n        null,\n        props.values && props.values.status\n      ),\n      React.createElement(\n        'td',\n        null,\n        props.values.status !== \"\" && React.createElement(\n          'button',\n          { className: 'btn btn-danger btn-sm', onClick: function onClick(e) {\n              props.handleRemove(props.values.id, e);\n            } },\n          React.createElement(\n            'i',\n            { className: 'material-icons md-18' },\n            'delete'\n          )\n        )\n      )\n    );\n  }\n};\n\nReactDOM.render(React.createElement(CustomTable, { records: [] }), document.getElementById('app'));\n\n// {props.records.map((item)=>{\n//   return (<Record values={item.values} key={item.values}></Record>);\n// })}\n\n\n//neelima code\n// let valiID = undefined;\n// for(let item in values){\n//     if(values[item] === \"\"){\n//       if(valiID === undefined)\n//       break;\n//       else{\n//       valiID = true;\n//       //valiID === undefined ? undefined: true;\n//       break;\n//     }\n//     }\n//     else {\n//       valiID = false;\n//     }\n//   }\n//   if(valiID=== undefined){\n//     error = 'Begin entering values!!';\n\n//     console.log(error);\n//   }else {\n//     error = 'Please enter all values to submit!!';\n//     console.log(error);\n//   }\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });