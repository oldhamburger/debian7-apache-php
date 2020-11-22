
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/app.js":
/*!***********************!*\
  !*** ./client/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login.js */ "./client/components/Login.js");
/* harmony import */ var _components_Register_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Register.js */ "./client/components/Register.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Footer */ "./client/components/Footer.js");
/* harmony import */ var _components_dashboard_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/index.js */ "./client/components/dashboard/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Home */ "./client/components/Home.js");
/* harmony import */ var _components_private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/private-route/PrivateRoute */ "./client/components/private-route/PrivateRoute.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/setAuthToken */ "./client/utils/setAuthToken.js");
/* harmony import */ var _store_userReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/userReducer */ "./client/store/userReducer.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./client/store/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_budget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/budget */ "./client/components/budget/index.js");
/* harmony import */ var _components_PlaidAccount__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/PlaidAccount */ "./client/components/PlaidAccount.js");
/* harmony import */ var _components_dashboard_insights_InsightsPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/insights/InsightsPage */ "./client/components/dashboard/insights/InsightsPage.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/About */ "./client/components/About.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//Here is where the routes are gonna be


















if (localStorage.jwt) {
  // Set auth token header auth
  var token = localStorage.jwt;
  Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_9__["default"])(token); // Decode token and get user info and exp

  var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(token); // Set user and isAuthenticated

  _store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(Object(_store_userReducer__WEBPACK_IMPORTED_MODULE_10__["fetchUser"])(decoded)); // Check for expired token

  var currentTime = Date.now() / 1000; // to get in milliseconds

  if (decoded.exp < currentTime) {
    // Logout user
    _store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch(Object(_store_userReducer__WEBPACK_IMPORTED_MODULE_10__["logoutUser"])()); // Redirect to login

    window.location.href = './login';
  }
}

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_12__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_11__["default"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _components_Home__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        component: _components_Login_js__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/register",
        component: _components_Register_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
        exact: true,
        path: "/budget",
        component: _components_budget__WEBPACK_IMPORTED_MODULE_13__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
        exact: true,
        path: "/dashboard",
        component: _components_dashboard_index_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
        exact: true,
        path: "/addAccount",
        component: _components_PlaidAccount__WEBPACK_IMPORTED_MODULE_14__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
        exact: true,
        path: "/insights",
        component: _components_dashboard_insights_InsightsPage__WEBPACK_IMPORTED_MODULE_15__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_private_route_PrivateRoute__WEBPACK_IMPORTED_MODULE_7__["default"], {
        exact: true,
        path: "/about",
        component: _components_About__WEBPACK_IMPORTED_MODULE_16__["default"]
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./client/components/About.js":
/*!************************************!*\
  !*** ./client/components/About.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer */ "./client/components/Footer.js");











var styles = {
  card: {
    maxWidth: 245,
    display: "block"
  },
  media: {
    height: 280,
    margin: 3
  },
  bold: {
    fontWeight: "bold"
  },
  header: {}
};

function About(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "team"
  }, "The Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    image: "/char.jpg",
    title: "Contemplative Reptile"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Charlyn Manuyag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "p"
  }, "My name is Charlyn Manuyag! I am from the Bay Area, studied Engineering Physics at UC Berkeley and decided I want to become a Software Engineer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.bold
  }, "Favorite array method:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], null, "filter()")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://github.com/charlynmanuyag",
    target: "_blank"
  }, "Github"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://www.linkedin.com/in/cmanuyag/",
    target: "_blank"
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    image: "/Ramya.jpg",
    height: "80px",
    title: "Contemplative Reptile"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Ramya Sampath"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "p"
  }, "Hi, I am Ramya Sampath, a simple human with deep passion and zeal to create new things that are helpful to others and also satisfies the engineer inside me."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.bold
  }, "Favorite array method:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], null, "filter() - because it gives us what we ask for. We can use filter in life to remove all worries and negativity.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://github.com/rsampath19",
    target: "_blank"
  }, "Github"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://www.linkedin.com/in/ramya-sampath-2a624517a/",
    target: "_blank"
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    image: "/lucy.jpg",
    title: "Contemplative Reptile"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Lucy Marshall"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "p"
  }, "I am a full stack software engineer with a background in communications and diplomacy in Latin America. Prior to moving to NYC I lived in Cuba and Peru working for the UN and various development projects."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.bold
  }, "Favorite array method:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], null, "map()")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://github.com/lucymar",
    target: "_blank"
  }, "Github"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://www.linkedin.com/in/lucy-marshall1/",
    target: "_blank"
  }, "LinkedIn"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.media,
    image: "/katie.jpg",
    title: "Contemplative Reptile"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, "Katie Agresta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "p"
  }, "After exploring the business side of tech for 3 years at American Express, I wanted to move on from the client side of product management to actually developing products myself. I\u2019m now a full-stack specializing in the MERN and NERDS stacks."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.bold
  }, "Favorite array method:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], null, "reduce()")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://github.com/kagresta",
    target: "_blank"
  }, "Github"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    color: "primary",
    href: "https://www.linkedin.com/in/katieagresta/",
    target: "_blank"
  }, "LinkedIn"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], null));
}

About.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(About));

/***/ }),

/***/ "./client/components/Footer.js":
/*!*************************************!*\
  !*** ./client/components/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        id: "footer",
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "paddingFoot"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "footer-cont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        height: "55px",
        src: "/navBarLogo.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text text-lighten-4"
      }, "Terms of service")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text text-lighten-4"
      }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/dashboard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text text-lighten-4"
      }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text text-lighten-4"
      }, "Made on the 25th floor")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-copyright"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\xA9 2019 Sprig Incorporated"))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./client/components/Home.js":
/*!***********************************!*\
  !*** ./client/components/Home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "largContain"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '75vh'
        },
        className: "container valign-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/homeLogo.png",
        height: "250",
        style: {
          display: 'block',
          margin: 'auto'
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "par"
      }, "sprig has sprung"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "spacer3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "s6 rowz "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/register",
        style: {
          width: '240px',
          borderRadius: '3px',
          letterSpacing: '1.5px'
        },
        className: "btn btn-large waves-effect waves-light hoverable btnThings accent-3",
        id: "register"
      }, "Register")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: " s6 rowz"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/login",
        style: {
          width: '240px',
          borderRadius: '3px',
          letterSpacing: '1.5px'
        },
        className: "btn btn-large waves-effect waves-light hoverable btnThings accent-3",
        id: "login"
      }, "Log In"))))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./client/components/Login.js":
/*!************************************!*\
  !*** ./client/components/Login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/userReducer */ "./client/store/userReducer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/Summary.css */ "./client/components/dashboard/Summary.css");
/* harmony import */ var _dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this));
    _this.state = {
      email: '',
      password: '',
      errors: {},
      errMessage: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isAuthenticated) {
        this.props.history.push({
          pathname: '/dashboard'
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isAuthenticated) {
        this.props.history.push({
          pathname: '/dashboard'
        });
      }

      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //this is where we wanna map dispatch the thunk?
                event.preventDefault();
                _context.next = 3;
                return this.props.loggedInUser(this.state);

              case 3:
                if (!this.props.isAuthenticated) {
                  this.setState({
                    errMessage: 'The email and/or password you entered is incorrect',
                    email: '',
                    password: ''
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/",
        className: "btn-flat waves-effect"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          fontSize: 40,
          marginTop: '3px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          textAlign: 'center',
          fontFamily: 'Raleway'
        }
      }, "Welcome User!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        style: {
          textAlign: 'center',
          fontFamily: 'Raleway',
          color: 'red'
        }
      }, this.state.errMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          marginTop: '5rem',
          display: 'flex',
          justifyContent: 'center'
        },
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "email",
        value: this.state.email,
        onChange: this.handleChange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        name: "password",
        value: this.state.password,
        onChange: this.handleChange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "btn btn-large waves-effect waves-light hoverable btnThings accent-3",
        style: {
          marginTop: '10px'
        },
        type: "submit",
        value: "Log In",
        id: "registerTwo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text text-darken-1"
      }, "Don't have an account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/Register"
      }, "Register")))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.user,
    isAuthenticated: state.userReducer.isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loggedInUser: function loggedInUser(user) {
      return dispatch(Object(_store_userReducer__WEBPACK_IMPORTED_MODULE_2__["loggedInUser"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Login));

/***/ }),

/***/ "./client/components/Navbar.js":
/*!*************************************!*\
  !*** ./client/components/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/userReducer */ "./client/store/userReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "./node_modules/@material-ui/icons/ChevronLeft.js");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ChevronRight */ "./node_modules/@material-ui/icons/ChevronRight.js");
/* harmony import */ var _material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Assessment */ "./node_modules/@material-ui/icons/Assessment.js");
/* harmony import */ var _material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Timeline */ "./node_modules/@material-ui/icons/Timeline.js");
/* harmony import */ var _material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/AddBox */ "./node_modules/@material-ui/icons/AddBox.js");
/* harmony import */ var _material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddBox__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_icons_ChromeReaderMode__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/ChromeReaderMode */ "./node_modules/@material-ui/icons/ChromeReaderMode.js");
/* harmony import */ var _material_ui_icons_ChromeReaderMode__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChromeReaderMode__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/Summary.css */ "./client/components/dashboard/Summary.css");
/* harmony import */ var _dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_28__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























var drawerWidth = 240;

var styles = function styles(theme) {
  return {
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: _objectSpread({
      display: "flex",
      alignItems: "center",
      padding: "0 8px"
    }, theme.mixins.toolbar, {
      justifyContent: "flex-end"
    }),
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    }
  };
};

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleDrawerOpen", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrawerClose", function () {
      _this.setState({
        open: false
      });
    });

    _this.state = {
      open: false
    };
    _this.onLogoutClick = _this.onLogoutClick.bind(_assertThisInitialized(_this));
    _this.handleDrawerOpen = _this.handleDrawerOpen.bind(_assertThisInitialized(_this));
    _this.handleDrawerClose = _this.handleDrawerClose.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Navbar, [{
    key: "onLogoutClick",
    value: function onLogoutClick(e) {
      e.preventDefault();
      this.props.logoutUser();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var open = this.state.open;
      var welcome = this.props.user.name;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "navbar",
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "fixed",
        className: classnames__WEBPACK_IMPORTED_MODULE_23___default()(classes.appBar, _defineProperty({}, classes.appBarShift, open)),
        style: {
          backgroundColor: "#4c9f70"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        disableGutters: !open
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "inherit",
        "aria-label": "Open drawer",
        onClick: this.handleDrawerOpen,
        className: classnames__WEBPACK_IMPORTED_MODULE_23___default()(classes.menuButton, open && classes.hide)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__["Link"], {
        to: "/dashboard",
        onClick: this.handleDrawerClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/navBarLogo.png",
        height: "40",
        style: {
          marginTop: "9px"
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        id: "welcome"
      }, "Hello, ", welcome), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        id: "logouts",
        onClick: this.onLogoutClick
      }, "Logout"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.drawer,
        variant: "persistent",
        anchor: "left",
        open: open,
        classes: {
          paper: classes.drawerPaper
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.drawerHeader
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: this.handleDrawerClose
      }, theme.direction === "ltr" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_18___default.a, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChevronRight__WEBPACK_IMPORTED_MODULE_19___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__["Link"], {
        to: "/dashboard",
        style: {
          color: "black"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        button: true,
        onClick: this.handleDrawerClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_22___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        primary: "Dashboard"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__["Link"], {
        to: "/about",
        style: {
          color: "black"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        button: true,
        onClick: this.handleDrawerClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ChromeReaderMode__WEBPACK_IMPORTED_MODULE_27___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        primary: "About"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__["Link"], {
        to: "/budget",
        style: {
          color: "black"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        button: true,
        onClick: this.handleDrawerClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Assessment__WEBPACK_IMPORTED_MODULE_20___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        primary: "Budget"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_26__["Link"], {
        to: "/insights",
        style: {
          color: "black"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        button: true,
        onClick: this.handleDrawerClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Timeline__WEBPACK_IMPORTED_MODULE_21___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        primary: "Insights"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
        button: true,
        onClick: this.onLogoutClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_24___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
        primary: "Logout"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logoutUser: function logoutUser() {
      return dispatch(Object(_store_userReducer__WEBPACK_IMPORTED_MODULE_1__["logoutUser"])());
    }
  };
};

Navbar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["withStyles"])(styles, {
  withTheme: true
})(Navbar)));

/***/ }),

/***/ "./client/components/PlaidAccount.js":
/*!*******************************************!*\
  !*** ./client/components/PlaidAccount.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_accountReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/accountReducer */ "./client/store/accountReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_plaid_link_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-plaid-link-button */ "./node_modules/react-plaid-link-button/dist/react-plaid-link-button/react-plaid-link-button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PlaidAccount =
/*#__PURE__*/
function (_Component) {
  _inherits(PlaidAccount, _Component);

  function PlaidAccount(props) {
    var _this;

    _classCallCheck(this, PlaidAccount);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlaidAccount).call(this, props));
    _this.state = {
      loaded: false
    };
    _this.handleOnSuccess = _this.handleOnSuccess.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PlaidAccount, [{
    key: "handleOnSuccess",
    value: function () {
      var _handleOnSuccess = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(token, metadata) {
        var accounts, plaidData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                accounts = this.props.accounts;
                plaidData = {
                  public_token: token,
                  metadata: metadata,
                  accounts: accounts
                };
                _context.next = 4;
                return this.props.addingAccount(plaidData);

              case 4:
                window.location.reload();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleOnSuccess(_x, _x2) {
        return _handleOnSuccess.apply(this, arguments);
      }

      return handleOnSuccess;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "plaid-button",
        className: "boxes"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "newdiv"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_plaid_link_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        buttonProps: {
          className: 'btn waves-effect waves-light hoverable accent-3 main-btn',
          id: 'plaidButton'
        },
        plaidLinkProps: {
          clientName: 'Sprig',
          key: '371579f573cc098b5fbbee72dcc928',
          env: 'sandbox',
          product: ['transactions'],
          onSuccess: this.handleOnSuccess
        },
        onScriptLoad: function onScriptLoad() {
          return _this2.setState(_this2.state);
        },
        id: "plaid-button"
      }, "Add Accounts")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "description"
      }, "Powered by Plaid"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "con"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "creds"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "sandboxcred"
      }, "You are connecting to Plaid sandbox environment. Please use:", ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Username: user_good"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Password: pass_good"))));
    }
  }]);

  return PlaidAccount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addingAccount: function addingAccount(plaidData) {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_1__["addingAccount"])(plaidData));
    }
  };
};

var ConnectedPlaidAccount = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PlaidAccount);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedPlaidAccount);

/***/ }),

/***/ "./client/components/Register.js":
/*!***************************************!*\
  !*** ./client/components/Register.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/userReducer */ "./client/store/userReducer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login */ "./client/components/Login.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Register =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Register, _React$Component);

  function Register() {
    var _this;

    _classCallCheck(this, Register);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Register).call(this));
    _this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errMessage: ""
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isAuthenticated) {
        alert("Please logout to register as new user");
        this.props.history.push({
          pathname: "/dashboard"
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        var emailValid, emailValid2, errors;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //this is where we wanna map dispatch the thunk?
                event.preventDefault();
                emailValid = "@";
                emailValid2 = ".";

                if (this.state.name.match(/^([a-zA-Z0-9])/)) {
                  _context.next = 7;
                  break;
                }

                this.setState({
                  errMessage: "Please enter a valid name",
                  name: "",
                  email: "",
                  password: "",
                  password2: ""
                });
                _context.next = 27;
                break;

              case 7:
                if (!(!this.state.password.match(/^([a-zA-Z0-9])/) || this.state.password !== this.state.password2)) {
                  _context.next = 11;
                  break;
                }

                this.setState({
                  errMessage: "Password cannot include space, please check password entered",
                  name: "",
                  email: "",
                  password: "",
                  password2: ""
                });
                _context.next = 27;
                break;

              case 11:
                if (!(this.state.password.length < 6)) {
                  _context.next = 15;
                  break;
                }

                this.setState({
                  errMessage: "Password must contain atleast 6 characters",
                  name: "",
                  email: "",
                  password: "",
                  password2: ""
                });
                _context.next = 27;
                break;

              case 15:
                if (!(!this.state.email.split("").includes(emailValid) || !this.state.email.split("").includes(emailValid2))) {
                  _context.next = 19;
                  break;
                }

                this.setState({
                  errMessage: "Invalid Email",
                  name: "",
                  email: "",
                  password: "",
                  password2: ""
                });
                _context.next = 27;
                break;

              case 19:
                _context.next = 21;
                return this.props.createdUser(this.state);

              case 21:
                errors = this.props.errors;

                if (!(errors.email === "Email already exists")) {
                  _context.next = 26;
                  break;
                }

                this.setState({
                  errMessage: errors.email,
                  name: "",
                  email: "",
                  password: "",
                  password2: ""
                });
                _context.next = 27;
                break;

              case 26:
                return _context.abrupt("return", this.props.history.push({
                  pathname: "/login"
                }));

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/",
        className: "btn-flat waves-effect"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, {
        style: {
          fontSize: 40,
          marginTop: "3px"
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        style: {
          textAlign: "center",
          fontFamily: "Raleway"
        }
      }, "Welcome to SPRIG!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        style: {
          textAlign: "center",
          fontFamily: "Raleway",
          color: "red"
        }
      }, this.state.errMessage), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s6",
        style: {
          marginLeft: "25%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s6",
        style: {
          paddingLeft: "11.250px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "name",
        value: this.state.name,
        onChange: this.handleChange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "email",
        value: this.state.email,
        onChange: this.handleChange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        name: "password",
        value: this.state.password,
        onChange: this.handleChange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Confirm Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        name: "password2",
        value: this.state.password2,
        onChange: this.handleChange,
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Register",
        className: " btnThings btn btn-large waves-effect waves-light hoverable accent-3",
        id: "registerTwo",
        style: {
          marginLeft: "200px",
          marginRight: "200px",
          marginTop: "15px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "grey-text text-darken-1",
        style: {
          marginLeft: "160px"
        }
      }, "Already have an account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/Login"
      }, "Log In"))))))));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.user,
    errors: state.userReducer.errors,
    isAuthenticated: state.userReducer.isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createdUser: function createdUser(user) {
      return dispatch(Object(_store_userReducer__WEBPACK_IMPORTED_MODULE_2__["createdUser"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Register));
/* componentDidMount() {
  console.log("log from register page", this.props);
  console.log("this is history", this.props.history);
  if (this.props.currentUser.id !== 0) {
    this.props.history.push({
      pathname: "/dashboard"
    });
  }
} */

/***/ }),

/***/ "./client/components/budget/BudgetSummary.js":
/*!***************************************************!*\
  !*** ./client/components/budget/BudgetSummary.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _SetBudget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SetBudget */ "./client/components/budget/SetBudget.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./client/components/budget/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var styles = function styles(theme) {
  return {
    root: _objectSpread({}, theme.mixins.gutters(), {
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      marginLeft: '150px',
      marginRight: '150px',
      color: 'rgb(92, 92, 92)',
      backgroundColor: 'rgb(240, 236, 236)'
    }),
    red: {
      color: 'rgba(245, 111, 82, 1)',
      paddingTop: '20px',
      fontSize: '25px',
      fontWeight: 'bold'
    },
    green: {
      color: 'green',
      paddingTop: '20px',
      fontSize: '25px',
      fontWeight: 'bold'
    },
    savingsGoal: {
      display: 'flex'
    },
    amounts: {
      paddingRight: '10px',
      paddingTop: '20px',
      fontSize: '20px'
    },
    budget: {
      fontSize: '20px'
    },
    titles: {
      paddingTop: '20px',
      fontSize: '25px',
      fontWeight: 'bold',
      color: '#4c9f70'
    }
  };
};

var BudgetSummaryComp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BudgetSummaryComp, _React$Component);

  function BudgetSummaryComp(props) {
    _classCallCheck(this, BudgetSummaryComp);

    return _possibleConstructorReturn(this, _getPrototypeOf(BudgetSummaryComp).call(this, props));
  }

  _createClass(BudgetSummaryComp, [{
    key: "render",
    value: function render(props) {
      var classes = this.props.classes;
      var d = new Date();
      var month = new Array();
      month[0] = 'January';
      month[1] = 'February';
      month[2] = 'March';
      month[3] = 'April';
      month[4] = 'May';
      month[5] = 'June';
      month[6] = 'July';
      month[7] = 'August';
      month[8] = 'September';
      month[9] = 'October';
      month[10] = 'November';
      month[11] = 'December';
      var currentMonth = month[d.getMonth()];
      var currentSpend = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getMonthsSpending"])(this.props.transactions);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.root,
        elevation: 1
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "monthHeader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: "h4"
      }, currentMonth, " Budget")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "titleNumber2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.titles,
        variant: "h5",
        component: "h3"
      }, "$", this.props.monthlyIncome), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.titles,
        variant: "h5",
        component: "h3"
      }, "$", this.props.budget)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "titleNumber"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.amounts,
        variant: "subtitle1"
      }, "Income:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.savingsGoal
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.amounts,
        variant: "subtitle1"
      }, "Savings Goal:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SetBudget__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        size: "2",
        width: "550"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "titleNumber2"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.budget,
        variant: "h5",
        component: "h3"
      }, "Your spending limit for May is", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "limit"
      }, " $", this.props.spendingLimit))))));
    }
  }]);

  return BudgetSummaryComp;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

BudgetSummaryComp.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var mapState = function mapState(state) {
  return {
    budget: state.budgetReducer.budget,
    user: state.userReducer.user,
    accounts: state.accountReducer.accounts,
    income: state.accountReducer.income,
    monthlyIncome: state.accountReducer.monthlyIncome,
    transactions: state.accountReducer.transactions,
    spendingLimit: state.budgetReducer.spendingLimit
  };
};

var BudgetSummary = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, null)(BudgetSummaryComp);
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(BudgetSummary));

/***/ }),

/***/ "./client/components/budget/BudgetVis.js":
/*!***********************************************!*\
  !*** ./client/components/budget/BudgetVis.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./client/components/budget/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BudgetVis =
/*#__PURE__*/
function (_Component) {
  _inherits(BudgetVis, _Component);

  function BudgetVis() {
    _classCallCheck(this, BudgetVis);

    return _possibleConstructorReturn(this, _getPrototypeOf(BudgetVis).apply(this, arguments));
  }

  _createClass(BudgetVis, [{
    key: "render",
    value: function render() {
      var currentSpend = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getMonthsSpending"])(this.props.transactions);
      var data = {
        labels: ["BUDGET: $".concat(this.props.spendingLimit), "TOTAL SPENDING: $".concat(currentSpend)],
        datasets: [{
          backgroundColor: ['rgb(143, 167, 238)', 'rgba(245, 111, 82, 1)'],
          borderColor: ['rgb(143, 167, 238)', 'rgba(245, 111, 82, 1)'],
          borderWidth: 1,
          hoverBackgroundColor: ['rgb(143, 167, 238)', 'rgba(245, 111, 82, 1)'],
          hoverBorderColor: ['rgb(143, 167, 238)', 'rgba(245, 111, 82, 1)'],
          data: [this.props.spendingLimit, currentSpend]
        }]
      };
      var d = new Date();
      var month = new Array();
      month[0] = 'January';
      month[1] = 'February';
      month[2] = 'March';
      month[3] = 'April';
      month[4] = 'May';
      month[5] = 'June';
      month[6] = 'July';
      month[7] = 'August';
      month[8] = 'September';
      month[9] = 'October';
      month[10] = 'November';
      month[11] = 'December';
      var currentMonth = month[d.getMonth()];
      var currentSpend2 = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getMonthsSpending"])(this.props.transactions);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, currentSpend2 > this.props.spendingLimit ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "headerBudg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "You are", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "overBudget"
      }, "$", Math.floor(currentSpend2 - this.props.spendingLimit), ' '), "over budget")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "headerBudg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "headerBudget"
      }, "You are", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "underBudget"
      }, "$", this.props.spendingLimit - currentSpend2), ' ', "under budget")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "spending"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        data: data,
        width: 500,
        height: 200,
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: false,
          scales: {
            xAxes: [{
              barPercentage: 1,
              minBarLength: 2,
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                stepSize: 200
              },
              barPercentage: 0.5,
              gridLines: {
                display: false
              },
              display: false
            }]
          }
        }
      }))));
    }
  }]);

  return BudgetVis;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapState = function mapState(state) {
  return {
    budget: state.budgetReducer.budget,
    user: state.userReducer.user,
    accounts: state.accountReducer.accounts,
    income: state.accountReducer.income,
    monthlyIncome: state.accountReducer.monthlyIncome,
    transactions: state.accountReducer.transactions,
    spendingLimit: state.budgetReducer.spendingLimit
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, null)(BudgetVis));

/***/ }),

/***/ "./client/components/budget/SetBudget.js":
/*!***********************************************!*\
  !*** ./client/components/budget/SetBudget.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_budgetReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/budgetReducer */ "./client/store/budgetReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Slider */ "./node_modules/@material-ui/lab/Slider/index.js");
/* harmony import */ var _material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















var styles = function styles(theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    slider: {
      padding: "22px 0px",
      touchAction: "none"
    },
    margin: {
      margin: theme.spacing.unit
    },
    textField: {
      color: "#4c9f70"
    },
    input: {
      borderBottom: "none"
    }
  };
};

var BudgetComp =
/*#__PURE__*/
function (_Component) {
  _inherits(BudgetComp, _Component);

  function BudgetComp(props) {
    var _this;

    _classCallCheck(this, BudgetComp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BudgetComp).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickOpen", function () {
      _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        open: false
      });
    });

    _this.state = {
      goal: 0,
      open: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleSliderChange = _this.handleSliderChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BudgetComp, [{
    key: "handleSliderChange",
    value: function handleSliderChange(event, value) {
      this.setState({
        goal: Math.floor(value)
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return this.props.addingBudget({
                  userId: this.props.user.id,
                  monthlyGoal: this.state.goal
                }, this.props.monthlyIncome);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      var _React$createElement;

      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editor"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons",
        onClick: this.handleClickOpen
      }, " ", "edit", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_14__["default"], {
        open: this.state.open,
        onClose: this.handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_18__["default"], {
        id: "alert-dialog-title"
      }, "How much would you like to save this month?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "budgetForm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: classes.root2,
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sliderContainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab_Slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
        classes: {
          container: classes.slider
        },
        value: this.state.goal,
        "aria-labelledby": "label",
        onChange: this.handleSliderChange,
        min: 0,
        max: this.props.monthlyIncome
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttonRow"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "textDiv"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], (_React$createElement = {
        disabled: true,
        id: "outlined-adornment-amount",
        className: classes.margin
      }, _defineProperty(_React$createElement, "className", classes.textField), _defineProperty(_React$createElement, "variant", "outlined"), _defineProperty(_React$createElement, "value", this.state.goal), _defineProperty(_React$createElement, "label", "Savings Target"), _defineProperty(_React$createElement, "InputProps", {
        startAdornment: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__["default"], {
          position: "start"
        }, "$")
      }), _React$createElement))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "buttonUpd",
        type: "submit",
        variant: "contained",
        onClick: this.handleClose
      }, "Update Goal"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: this.handleClose,
        color: "primary"
      }, "Cancel"))));
    }
  }]);

  return BudgetComp;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapState = function mapState(state) {
  return {
    budget: state.budgetReducer.budget.monthylGoal,
    user: state.userReducer.user,
    monthlyIncome: state.accountReducer.monthlyIncome
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addingBudget: function addingBudget(budgetData, monthlyIncome) {
      return dispatch(Object(_store_budgetReducer__WEBPACK_IMPORTED_MODULE_1__["addingBudget"])(budgetData, monthlyIncome));
    }
  };
};

var SetBudget = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapState, mapDispatchToProps)(BudgetComp);
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(SetBudget));

/***/ }),

/***/ "./client/components/budget/index.js":
/*!*******************************************!*\
  !*** ./client/components/budget/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BudgetSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BudgetSummary */ "./client/components/budget/BudgetSummary.js");
/* harmony import */ var _BudgetVis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BudgetVis */ "./client/components/budget/BudgetVis.js");
/* harmony import */ var _dashboard_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/Loading */ "./client/components/dashboard/Loading.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Footer */ "./client/components/Footer.js");
/* harmony import */ var _store_accountReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/accountReducer */ "./client/store/accountReducer.js");
/* harmony import */ var _store_budgetReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/budgetReducer */ "./client/store/budgetReducer.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var BudgetIndex =
/*#__PURE__*/
function (_Component) {
  _inherits(BudgetIndex, _Component);

  function BudgetIndex(props) {
    var _this;

    _classCallCheck(this, BudgetIndex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BudgetIndex).call(this, props));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(BudgetIndex, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.gettingAccounts();

              case 2:
                _context.next = 4;
                return this.props.gettingTransactions(this.props.accounts);

              case 4:
                _context.next = 6;
                return this.props.gettingIncome(this.props.accounts);

              case 6:
                _context.next = 8;
                return this.props.gettingBudget(this.props.user.id, this.props.income);

              case 8:
                this.setState({
                  loading: true
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "budgBack"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "spacer"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BudgetSummary__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "visContainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BudgetVis__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "loading"
      }, "Calculating your budget")));
    }
  }]);

  return BudgetIndex;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapState = function mapState(state) {
  var _ref;

  return _ref = {
    budget: state.budgetReducer.budget,
    income: state.accountReducer.monthlyIncome,
    user: state.userReducer.user,
    accounts: state.accountReducer.accounts,
    transactions: state.accountReducer.transactions
  }, _defineProperty(_ref, "budget", state.budgetReducer.budget), _defineProperty(_ref, "spendingLimit", state.budgetReducer.spendingLimit), _ref;
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    gettingIncome: function gettingIncome(accounts) {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_6__["gettingIncome"])(accounts));
    },
    gettingAccounts: function gettingAccounts() {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_6__["gettingAccounts"])());
    },
    gettingTransactions: function gettingTransactions(accounts) {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_6__["gettingTransactions"])(accounts));
    },
    gettingBudget: function gettingBudget(userId, monthlyIncome) {
      return dispatch(Object(_store_budgetReducer__WEBPACK_IMPORTED_MODULE_7__["gettingBudget"])(userId, monthlyIncome));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapState, mapDispatchToProps)(BudgetIndex));

/***/ }),

/***/ "./client/components/budget/utils.js":
/*!*******************************************!*\
  !*** ./client/components/budget/utils.js ***!
  \*******************************************/
/*! exports provided: getMonthsSpending, getSpendLimit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthsSpending", function() { return getMonthsSpending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpendLimit", function() { return getSpendLimit; });
var getMonthsSpending = function getMonthsSpending(transactions) {
  var d = new Date();
  var currentYear = d.getFullYear().toString();
  var monthNum = d.getMonth().toString();

  if (monthNum.length === 1) {
    monthNum = '0' + monthNum;
  }

  var fullDate = currentYear + '-' + monthNum;
  return transactions.filter(function (transaction) {
    return transaction.date.slice(0, 7) === fullDate && !transaction.category.includes('Payment') && !transaction.category.includes('Transfer');
  }).reduce(function (accum, elem) {
    return accum + elem.amount;
  }, 0);
};
var getSpendLimit = function getSpendLimit(income, savingsGoal) {
  return Number(income) - Number(savingsGoal);
};

/***/ }),

/***/ "./client/components/dashboard/CategoriesDonutChart.js":
/*!*************************************************************!*\
  !*** ./client/components/dashboard/CategoriesDonutChart.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./client/components/dashboard/utils.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var data = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: ['#A8DADC', '#f9bd49', '#1D3557', '#E63946', '#FFE066', '#dd9cd8'],
    hoverBackgroundColor: ['#40bcc1', '#dda412', '#04142b', '#8e3339', '#f4e199', 'AA78A6'],
    borderColor: 'rgb(214, 214, 214)',
    hoverBorderColor: 'rgb(255,250,250)'
  }]
};
var options = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: 'white'
    }
  },
  layout: {
    padding: {
      left: 30,
      right: 50,
      top: 50,
      bottom: 40
    },
    maintainAspectRatio: false,
    responsive: true
  }
};

var CategoriesDonut =
/*#__PURE__*/
function (_Component) {
  _inherits(CategoriesDonut, _Component);

  function CategoriesDonut() {
    _classCallCheck(this, CategoriesDonut);

    return _possibleConstructorReturn(this, _getPrototypeOf(CategoriesDonut).apply(this, arguments));
  }

  _createClass(CategoriesDonut, [{
    key: "render",
    value: function render() {
      if (this.props.transactions.length) {
        var donutInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["allCategorySpend"])(this.props.transactions);
        console.log(donutInfo);
        donutInfo.spend = donutInfo.spend.map(function (elem) {
          return Math.round(elem * 100) / 100;
        });
        data.datasets[0].data = donutInfo.spend;
        data.labels = donutInfo.labels;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "chartContainer"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Doughnut"], {
        data: data,
        options: options,
        height: 220
      })));
    }
  }]);

  return CategoriesDonut;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    accounts: state.accountReducer.accounts,
    transactions: state.accountReducer.transactions
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(CategoriesDonut));

/***/ }),

/***/ "./client/components/dashboard/Loading.js":
/*!************************************************!*\
  !*** ./client/components/dashboard/Loading.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/index.js");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: "render",
    //other logic
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_0___default.a, {
        type: "ThreeDots",
        color: "#4c9f70",
        height: "200",
        width: "200"
      });
    }
  }]);

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./client/components/dashboard/Summary.css":
/*!*************************************************!*\
  !*** ./client/components/dashboard/Summary.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./Summary.css */ "./node_modules/css-loader/dist/cjs.js!./client/components/dashboard/Summary.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./client/components/dashboard/Summary.js":
/*!************************************************!*\
  !*** ./client/components/dashboard/Summary.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Summary_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Summary.css */ "./client/components/dashboard/Summary.css");
/* harmony import */ var _Summary_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Summary_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./client/components/dashboard/utils.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/DeleteOutlined */ "./node_modules/@material-ui/icons/DeleteOutlined.js");
/* harmony import */ var _material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_accountReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/accountReducer */ "./client/store/accountReducer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var Summary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Summary, _React$Component);

  function Summary(props) {
    var _this;

    _classCallCheck(this, Summary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Summary).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleRemove",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(accountName) {
        var targetAccount, accountId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                targetAccount = _this.props.accounts.filter(function (elem) {
                  return elem.institutionName === accountName;
                });
                accountId = targetAccount[0]._id;
                _context.next = 4;
                return _this.props.deletingAccount(accountId);

              case 4:
                window.location.reload();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.handleRemove = _this.handleRemove.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Summary, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var balanceData = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["balancesCondensed"])(this.props.balance);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "root"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "headerLeft"
      }, "Bank Name "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "header"
      }, "Checking"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "header"
      }, "Savings"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], null, balanceData.map(function (row, ind) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: ind
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "cellLeft",
          component: "th",
          scope: "row"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
          onClick: function onClick() {
            if (window.confirm('Are you sure you wish to delete this bank account')) _this2.handleRemove(row.accountName);
          }
        }), '', row.accountName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "cell"
        }, "$", row.Checking), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "cell"
        }, "$", row.Savings));
      })))));
    }
  }]);

  return Summary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapState = function mapState(state) {
  return {
    accounts: state.accountReducer.accounts,
    balance: state.accountReducer.balance
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deletingAccount: function deletingAccount(accountId) {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_11__["deletingAccount"])(accountId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapState, mapDispatchToProps)(Summary));

/***/ }),

/***/ "./client/components/dashboard/Transaction.js":
/*!****************************************************!*\
  !*** ./client/components/dashboard/Transaction.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mui-datatables */ "./node_modules/mui-datatables/dist/index.js");
/* harmony import */ var mui_datatables__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mui_datatables__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Transactions =
/*#__PURE__*/
function (_Component) {
  _inherits(Transactions, _Component);

  function Transactions(props) {
    var _this;

    _classCallCheck(this, Transactions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Transactions).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getMuiTheme", function () {
      return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
        overrides: {
          MUIDataTableBodyCell: {
            root: {
              backgroundColor: "white",
              maxwidth: "50%",
              overflowX: "auto",
              padding: "8px",
              leftmargin: "50px",
              rightmargin: "50px"
            }
          }
        }
      });
    });

    _this.state = {
      loaded: false
    }; // this.onLogoutClick = this.onLogoutClick.bind(this);

    return _this;
  }
  /*
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  } */


  _createClass(Transactions, [{
    key: "render",
    value: function render() {
      var transData = [];
      this.props.transactions.forEach(function (element) {
        transData.push({
          Date: new Date(element.date).toDateString(),
          Category: element.category[0],
          Vendor: element.name,
          Amount: element.amount,
          Bank: element.accountName
        });
      });
      var columns = ["Date", "Category", "Vendor", "Amount", "Bank"];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "containerTable"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["MuiThemeProvider"], {
        theme: this.getMuiTheme()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mui_datatables__WEBPACK_IMPORTED_MODULE_2___default.a, {
        title: "Transactions",
        data: transData,
        columns: columns,
        options: {
          selectableRows: false,
          filter: false,
          viewColumns: false
        }
      })));
    }
  }]);

  return Transactions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    accounts: state.accountReducer.accounts,
    transactions: state.accountReducer.transactions
  };
};

var PlaidAccountTransactions = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Transactions);
/* harmony default export */ __webpack_exports__["default"] = (PlaidAccountTransactions);

/***/ }),

/***/ "./client/components/dashboard/index.js":
/*!**********************************************!*\
  !*** ./client/components/dashboard/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary */ "./client/components/dashboard/Summary.js");
/* harmony import */ var _PlaidAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PlaidAccount */ "./client/components/PlaidAccount.js");
/* harmony import */ var _dashboard_Transaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/Transaction */ "./client/components/dashboard/Transaction.js");
/* harmony import */ var _insights_InsightCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insights/InsightCards */ "./client/components/dashboard/insights/InsightCards.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CategoriesDonutChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategoriesDonutChart */ "./client/components/dashboard/CategoriesDonutChart.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Navbar */ "./client/components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Footer */ "./client/components/Footer.js");
/* harmony import */ var _store_accountReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/accountReducer */ "./client/store/accountReducer.js");
/* harmony import */ var _store_insightReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/insightReducer */ "./client/store/insightReducer.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading */ "./client/components/dashboard/Loading.js");
/* harmony import */ var _store_userReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/userReducer */ "./client/store/userReducer.js");
/* harmony import */ var _dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dashboard/Summary.css */ "./client/components/dashboard/Summary.css");
/* harmony import */ var _dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dashboard_Summary_css__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















var Dashboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var accounts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.gettingAccounts();

              case 2:
                accounts = this.props.accounts;

                if (!this.props.accounts.length) {
                  _context.next = 15;
                  break;
                }

                _context.next = 6;
                return this.props.gettingTransactions(accounts);

              case 6:
                this.props.getLargest(this.props.transactions);
                this.props.getRestaurantSpend(this.props.transactions);
                this.props.getMerchantSpend(this.props.transactions);
                this.props.getTranspoSpend(this.props.transactions);
                _context.next = 12;
                return this.props.gettingBalance(this.props.accounts);

              case 12:
                this.setState({
                  loading: true
                });
                _context.next = 16;
                break;

              case 15:
                this.setState({
                  loading: true
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.loading && this.props.accounts.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "index"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Summary__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlaidAccount__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lrg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "insightCont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoriesDonutChart__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_insights_InsightCards__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_dashboard_Transaction__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null))) : this.state.loading && !this.props.accounts.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PlaidAccount__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "header"
      }, "Please link an account to continue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "loading"
      }, "Crunching the numbers")));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.userReducer,
    accounts: state.accountReducer.accounts,
    transactions: state.accountReducer.transactions
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    gettingTransactions: function gettingTransactions(plaidAccountData) {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_9__["gettingTransactions"])(plaidAccountData));
    },
    gettingAccounts: function gettingAccounts() {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_9__["gettingAccounts"])());
    },
    logoutUser: function logoutUser() {
      return dispatch(Object(_store_userReducer__WEBPACK_IMPORTED_MODULE_12__["logoutUser"])());
    },
    gettingBalance: function gettingBalance(plaidAccountData) {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_9__["gettingBalance"])(plaidAccountData));
    },
    getLargest: function getLargest(props) {
      return dispatch(Object(_store_insightReducer__WEBPACK_IMPORTED_MODULE_10__["getLargest"])(props));
    },
    getRestaurantSpend: function getRestaurantSpend(props) {
      return dispatch(Object(_store_insightReducer__WEBPACK_IMPORTED_MODULE_10__["getRestaurantSpend"])(props));
    },
    getMerchantSpend: function getMerchantSpend(props) {
      return dispatch(Object(_store_insightReducer__WEBPACK_IMPORTED_MODULE_10__["getMerchantSpend"])(props));
    },
    getTranspoSpend: function getTranspoSpend(props) {
      return dispatch(Object(_store_insightReducer__WEBPACK_IMPORTED_MODULE_10__["getTranspoSpend"])(props));
    },
    getFees: function getFees(props) {
      return dispatch(Object(_store_insightReducer__WEBPACK_IMPORTED_MODULE_10__["getFees"])(props));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Dashboard));

/***/ }),

/***/ "./client/components/dashboard/insights/BarGraph.js":
/*!**********************************************************!*\
  !*** ./client/components/dashboard/insights/BarGraph.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BarGraph; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./client/components/dashboard/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var data = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: ['#A8DADC', '#f9bd49', '#1D3557'],
    hoverBackgroundColor: ['#40bcc1', '#dda412', '#04142b'],
    borderColor: 'rgb(214, 214, 214)',
    hoverBorderColor: 'rgb(255,250,250)'
  }]
};
var options = {
  legend: {
    display: false,
    position: 'bottom',
    labels: {
      fontColor: 'black'
    }
  },
  layout: {
    padding: {
      left: 30,
      right: 50,
      top: 50,
      bottom: 40
    },
    maintainAspectRatio: false,
    responsive: true
  }
};

var BarGraph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BarGraph, _React$Component);

  function BarGraph() {
    _classCallCheck(this, BarGraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(BarGraph).call(this));
  }

  _createClass(BarGraph, [{
    key: "render",
    value: function render() {
      if (this.props.threeMonthsData) {
        var barInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["condenseTotalMonthly"])(this.props.threeMonthsData[0]);
        barInfo.total = barInfo.total.map(function (elem) {
          return Math.round(elem * 100) / 100;
        });
        data.datasets[0].data = barInfo.total;
        data.labels = barInfo.labels;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "barGraphContainer"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        data: data,
        options: options,
        height: 400,
        width: 450
      }));
    }
  }]);

  return BarGraph;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./client/components/dashboard/insights/InsightCards.js":
/*!**************************************************************!*\
  !*** ./client/components/dashboard/insights/InsightCards.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards */ "./client/components/dashboard/insights/cards.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var InsightCard =
/*#__PURE__*/
function (_Component) {
  _inherits(InsightCard, _Component);

  function InsightCard() {
    _classCallCheck(this, InsightCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(InsightCard).apply(this, arguments));
  }

  _createClass(InsightCard, [{
    key: "render",
    value: function render() {
      var tutorialSteps = [{
        label: "You've spent $".concat(Math.round(this.props.transpoSpend * 100) / 100, " on Travel."),
        imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60'
      }, {
        label: "You've spent a total of $".concat(Math.round(this.props.merchantSpend.amount * 100) / 100, " at ").concat(this.props.merchantSpend.name, "."),
        imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
      }, {
        label: "Your largest transaction was for $".concat(Math.round(this.props.largest.amount * 100) / 100, " at ").concat(this.props.largest.merchant, "."),
        imgPath: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60'
      }, {
        label: "You've spent $".concat(Math.round(this.props.restaurantSpend * 100) / 100, " at Restaurants and Bars."),
        imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80'
      }, {
        label: "You have paid $".concat(Math.round(this.props.fees * 100) / 100, " in banking and ATM fees."),
        imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60'
      }];
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_cards__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tutorialSteps: tutorialSteps
      }));
    }
  }]);

  return InsightCard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    transactions: state.accountReducer.transactions,
    largest: state.insightReducer.largest,
    restaurantSpend: state.insightReducer.restaurantSpend,
    merchantSpend: state.insightReducer.merchantSpend,
    transpoSpend: state.insightReducer.transpoSpend,
    fees: state.insightReducer.fees
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(InsightCard));

/***/ }),

/***/ "./client/components/dashboard/insights/InsightsPage.js":
/*!**************************************************************!*\
  !*** ./client/components/dashboard/insights/InsightsPage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InsightCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InsightCards */ "./client/components/dashboard/insights/InsightCards.js");
/* harmony import */ var _BarGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BarGraph */ "./client/components/dashboard/insights/BarGraph.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Footer */ "./client/components/Footer.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loading */ "./client/components/dashboard/Loading.js");
/* harmony import */ var _store_insightReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/insightReducer */ "./client/store/insightReducer.js");
/* harmony import */ var _store_accountReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/accountReducer */ "./client/store/accountReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LineGraph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LineGraph */ "./client/components/dashboard/insights/LineGraph.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var InsightsPage =
/*#__PURE__*/
function (_Component) {
  _inherits(InsightsPage, _Component);

  function InsightsPage(props) {
    var _this;

    _classCallCheck(this, InsightsPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InsightsPage).call(this, props));
    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(InsightsPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var accounts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.gettingAccounts();

              case 2:
                accounts = this.props.accounts;
                _context.next = 5;
                return this.props.getThreeMonthsData(accounts);

              case 5:
                this.setState({
                  loading: true
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "insights-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "insight-graph"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "insights-title"
      }, "Three Months Total Spending"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BarGraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
        threeMonthsData: [this.props.threeMonthsData]
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "insight-graph"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "insights-title"
      }, "Three Months Spending by Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineGraph__WEBPACK_IMPORTED_MODULE_8__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loading"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "loading"
      }, "Calculating insights")));
    }
  }]);

  return InsightsPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapState = function mapState(state) {
  return {
    accounts: state.accountReducer.accounts,
    threeMonthsData: state.insightReducer.threeMonthsData,
    transactions: state.accountReducer.transactions
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getThreeMonthsData: function getThreeMonthsData(plaidAccountData) {
      return dispatch(Object(_store_insightReducer__WEBPACK_IMPORTED_MODULE_5__["getThreeMonthsData"])(plaidAccountData));
    },
    gettingAccounts: function gettingAccounts() {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_6__["gettingAccounts"])());
    },
    gettingTransactions: function gettingTransactions(plaidAccountData) {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_6__["gettingTransactions"])(plaidAccountData));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState, mapDispatchToProps)(InsightsPage));

/***/ }),

/***/ "./client/components/dashboard/insights/LineGraph.js":
/*!***********************************************************!*\
  !*** ./client/components/dashboard/insights/LineGraph.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./client/components/dashboard/utils.js");
/* harmony import */ var _store_accountReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/accountReducer */ "./client/store/accountReducer.js");
/* harmony import */ var _store_insightReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/insightReducer */ "./client/store/insightReducer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var data = {
  labels: [],
  datasets: [{
    data: [0, 0, 0],
    label: 'Food and Drink',
    borderColor: '#A8DADC',
    hoverBorderColor: '#40bcc1',
    fill: false
  }, {
    data: [0, 0, 0],
    label: 'Shops',
    borderColor: '#f9bd49',
    hoverBorderColor: '#dda412',
    fill: false
  }, {
    data: [0, 0, 0],
    label: 'Travel',
    borderColor: '#1D3557',
    hoverBorderColor: '#04142b',
    fill: false
  }, {
    data: [0, 0, 0],
    label: 'Recreation',
    borderColor: '#E63946',
    hoverBorderColor: '#8e3339',
    fill: false
  }]
};
var options = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      fontColor: 'black'
    }
  },
  layout: {
    padding: {
      left: 30,
      right: 50,
      top: 50,
      bottom: 40
    },
    maintainAspectRatio: false,
    responsive: true
  }
};

var LineGraph =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LineGraph, _React$Component);

  function LineGraph() {
    var _this;

    _classCallCheck(this, LineGraph);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineGraph).call(this));
    _this.state = {
      data: data
    };
    _this.populateData = _this.populateData.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(LineGraph, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var accounts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.gettingAccounts();

              case 2:
                accounts = this.props.accounts;
                _context.next = 5;
                return this.props.getThreeMonthsDataCategory(accounts);

              case 5:
                this.populateData();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "populateData",
    value: function populateData() {
      if (this.props.threeMonthsCategory.length) {
        var catsArray = ['Food and Drink', 'Shops', 'Travel', 'Recreation'];
        var lineData = this.props.threeMonthsCategory;
        lineData.map(function (elem, index) {
          console.log('elem', elem);
          var label = Object.keys(elem)[0];

          if (!data.labels.includes(label)) {
            data.labels.push(label);
          }

          elem[label].labels.map(function (categories, ind) {
            var catIndex = catsArray.indexOf(categories);
            data.datasets[catIndex].data[index] += Math.round(elem[label].spend[ind] * 100) / 100;
          });
        });
        this.setState({
          data: data
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.threeMonthsCategory.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__["Line"], {
        data: data,
        options: options,
        height: 400,
        width: 450
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }]);

  return LineGraph;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapState = function mapState(state) {
  return {
    accounts: state.accountReducer.accounts,
    threeMonthsCategory: state.insightReducer.threeMonthsCategory
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    gettingAccounts: function gettingAccounts() {
      return dispatch(Object(_store_accountReducer__WEBPACK_IMPORTED_MODULE_3__["gettingAccounts"])());
    },
    getThreeMonthsDataCategory: function getThreeMonthsDataCategory(plaidAccountData) {
      return dispatch(Object(_store_insightReducer__WEBPACK_IMPORTED_MODULE_4__["getThreeMonthsDataCategory"])(plaidAccountData));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapState, mapDispatchToProps)(LineGraph));

/***/ }),

/***/ "./client/components/dashboard/insights/cards.js":
/*!*******************************************************!*\
  !*** ./client/components/dashboard/insights/cards.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ "./node_modules/@material-ui/core/esm/MobileStepper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-swipeable-views-utils */ "./node_modules/react-swipeable-views-utils/lib/index.js");
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var AutoPlaySwipeableViews = Object(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_10__["autoPlay"])(react_swipeable_views__WEBPACK_IMPORTED_MODULE_9___default.a);

var styles = function styles(theme) {
  return {
    root: {
      marginRight: '25px',
      marginLeft: '25px',
      marginBottom: '25px',
      padding: '25px'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      width: 350,
      flexGrow: 1,
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      backgroundColor: 'rgb(240, 240, 240)'
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      height: 45,
      backgroundColor: 'rgb(240, 240, 240)',
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      justifyContent: 'center'
    },
    textCard: {
      fontSize: '1.5rem',
      color: 'rgb(92, 92, 92)'
    },
    cardHead: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#404b5b'
    },
    bottom: {
      backgroundColor: 'rgb(240, 240, 240)',
      color: 'white'
    },
    buttons: {
      color: 'black',
      fontWeight: 'bold'
    }
  };
};

var SwipeableTextMobileStepper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SwipeableTextMobileStepper, _React$Component);

  function SwipeableTextMobileStepper(props) {
    var _this;

    _classCallCheck(this, SwipeableTextMobileStepper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwipeableTextMobileStepper).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeStep: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleNext", function () {
      _this.setState(function (prevState) {
        return {
          activeStep: prevState.activeStep + 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBack", function () {
      _this.setState(function (prevState) {
        return {
          activeStep: prevState.activeStep - 1
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStepChange", function (activeStep) {
      _this.setState({
        activeStep: activeStep
      });
    });

    return _this;
  }

  _createClass(SwipeableTextMobileStepper, [{
    key: "render",
    value: function render() {
      var _React$createElement;

      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var activeStep = this.state.activeStep;
      var maxSteps = this.props.tutorialSteps.length;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        square: true,
        elevation: 0,
        className: classes.top
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.cardHead
      }, "3 Months at a Glance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        square: true,
        elevation: 0,
        className: classes.header
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.textCard
      }, this.props.tutorialSteps[activeStep].label)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3__["default"], (_React$createElement = {
        steps: maxSteps,
        position: "static",
        activeStep: activeStep,
        className: classes.mobileStepper
      }, _defineProperty(_React$createElement, "className", classes.bottom), _defineProperty(_React$createElement, "nextButton", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.buttons,
        size: "small",
        onClick: this.handleNext,
        disabled: activeStep === maxSteps - 1
      }, "Next", theme.direction === 'rtl' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7___default.a, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default.a, null))), _defineProperty(_React$createElement, "backButton", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.buttons,
        size: "small",
        onClick: this.handleBack,
        disabled: activeStep === 0
      }, theme.direction === 'rtl' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_8___default.a, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_7___default.a, null), "Back")), _React$createElement)));
    }
  }]);

  return SwipeableTextMobileStepper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SwipeableTextMobileStepper.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles, {
  withTheme: true
})(SwipeableTextMobileStepper));

/***/ }),

/***/ "./client/components/dashboard/utils.js":
/*!**********************************************!*\
  !*** ./client/components/dashboard/utils.js ***!
  \**********************************************/
/*! exports provided: getCategorySpend, getLargestTransaction, allCategorySpend, fetchBalanceSummary, balancesCondensed, merchantSpend, largestByMerchant, subscriptionFinder, totalMonthly, condenseTotalMonthly, getMonth, getMonthsSpending, simplifyMonthlyData, finalLineGraphData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategorySpend", function() { return getCategorySpend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLargestTransaction", function() { return getLargestTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCategorySpend", function() { return allCategorySpend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBalanceSummary", function() { return fetchBalanceSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balancesCondensed", function() { return balancesCondensed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merchantSpend", function() { return merchantSpend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "largestByMerchant", function() { return largestByMerchant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriptionFinder", function() { return subscriptionFinder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalMonthly", function() { return totalMonthly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "condenseTotalMonthly", function() { return condenseTotalMonthly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthsSpending", function() { return getMonthsSpending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyMonthlyData", function() { return simplifyMonthlyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalLineGraphData", function() { return finalLineGraphData; });
/* harmony import */ var _store_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/utils */ "./client/store/utils.js");
 //reformats this.props.transactions to include transactions across accounts in a flat array. NOTE: account name is not included.
// returns amount spent on a given category ACROSS accounts - takes this.props.transactions and a category string

var getCategorySpend = function getCategorySpend(transactionProps, category) {
  return transactionProps.filter(function (elem) {
    return elem.category[0] === category;
  }).reduce(function (accum, elem) {
    return accum += elem.amount;
  }, 0);
}; // returns the largest transaction in the last 30 days - does not include credit card payments or account transfers

var getLargestTransaction = function getLargestTransaction(transactionProps) {
  return transactionProps.reduce(function (accum, elem) {
    if (accum.amount < elem.amount && !elem.category.includes('Payment') && !elem.category.includes('Transfer')) {
      accum.amount = elem.amount;
      accum.merchant = elem.name;
      accum.date = new Date(elem.date);
    }

    return accum;
  }, {
    amount: 0,
    merchant: ''
  });
}; // this returns an object of arrays with spending categories and corresponding ammounts spent

var allCategorySpend = function allCategorySpend(transactions) {
  var labels = [];
  var spend = [];
  transactions.map(function (elem) {
    if (!labels.includes(elem.category[0]) && !elem.category.includes('Payment') && !elem.category.includes('Transfer')) {
      labels.push(elem.category[0]);
      spend.push(getCategorySpend(transactions, elem.category[0]));
    }
  });
  return {
    labels: labels,
    spend: spend
  };
}; //this function uses the fetched data from the balances and filters it to show only
//Checking and Savings accounts only

var fetchBalanceSummary = function fetchBalanceSummary(balances) {
  return balances.map(function (elem) {
    elem.balance = elem.balance.filter(function (ele) {
      return ele.name === 'Plaid Checking' || ele.name === 'Plaid Saving';
    });
    return elem;
  });
}; //this uses fetchBalanceSummary to condense everything so make sure
//when we call this function we are sending in the ORIGINAL DATA FROM PLAID

var balancesCondensed = function balancesCondensed(arr) {
  var newArray = fetchBalanceSummary(arr);
  var result = [];

  for (var i = 0; i < newArray.length; i++) {
    var obj = {};
    obj.accountName = newArray[i].accountName;
    var balanceArray = newArray[i].balance;
    obj.Checking = balanceArray[0].balances.available;
    obj.Savings = balanceArray[1].balances.available;
    result.push(obj);
  }

  return result;
}; //returns an object with merchant name and cumulative total spent at each merchant in last 30 days

var merchantSpend = function merchantSpend(transactionProps) {
  var newObj = {};
  transactionProps.map(function (elem) {
    if (!elem.category.includes('Payment') && !elem.category.includes('Transfer')) {
      if (newObj[elem.name] === undefined) {
        newObj[elem.name] = elem.amount;
      } else {
        newObj[elem.name] += elem.amount;
      }
    }
  });
  return newObj;
}; //returns merchant with highest amount spent in the last 30 days cumulatively

var largestByMerchant = function largestByMerchant(transactionProps) {
  var newObj = merchantSpend(transactionProps);
  var largest = {
    name: '',
    amount: 0
  };

  for (var key in newObj) {
    if (newObj[key] > largest.amount) {
      largest.name = key;
      largest.amount = newObj[key];
    }
  }

  return largest;
};
var subscriptionFinder = function subscriptionFinder(transactions) {
  var shortList = {};

  for (var i = 0; i < transactions.length; i++) {
    var current = transactions[i];

    if (!shortList[current.name]) {
      shortList[current.name] = {
        num: 1,
        charge: current.amount,
        date: current.date.slice(8),
        accountName: current.accountName
      };
    } else {
      if (shortList[current.name].charge === current.amount && shortList[current.name].date === current.date.slice(8) && shortList[current.name].accountName === current.accountName) {
        shortList[current.name].num++;
      }
    }
  }

  var finalList = [];

  for (var key in shortList) {
    if (shortList[key].num === 3) {
      finalList.push({
        name: shortList[key].name,
        amount: shortList[key].amount
      });
    }
  }

  return finalList;
}; //call simplifiedMonthly first

var dict = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};
var totalMonthly = function totalMonthly(data) {
  var returned = {};

  for (var i = 0; i < data.length; i++) {
    var current = data[i];
    var trans = current.transactions;
    var filtered = trans.filter(function (elem) {
      if (elem.category.length === 2) {
        return elem.category[0] !== 'Payment' && elem.category[1] !== 'Credit Card';
      } else {
        return elem;
      }
    });

    for (var j = 0; j < filtered.length; j++) {
      var monthNum = filtered[j].date.slice(5, 7);
      var month = dict[monthNum];

      if (returned[month]) {
        returned[month] += filtered[j].amount;
      } else {
        returned[month] = filtered[j].amount;
      }
    }
  }

  return returned;
}; //this will give an object where the labels is an array of months
//and the total is an array of all the total per month
//the obj it takes in is the result of calling totalMonthly

var condenseTotalMonthly = function condenseTotalMonthly(obj) {
  var newObj = {};
  var labels = Object.keys(obj);
  var total = Object.values(obj);
  newObj.labels = labels;
  newObj.total = total;
  return newObj;
}; //counter is basically getting the fullMonth until counter months before

var getMonth = function getMonth(transactions, counter) {
  var d = new Date();
  var currentYear = d.getFullYear().toString();
  var monthNumber = Number(d.getMonth()) - counter;
  var monthNum = monthNumber.toString();

  if (monthNum.length === 1) {
    monthNum = '0' + monthNum;
  } else if (Number(monthNum) < 4) {
    monthNum = (Number(monthNum) + 12).toString();
  }

  var fullDate = currentYear + '-' + monthNum;
  return fullDate;
}; //this will give -- based on the month that is being passed on fullDate, will return an
//array of all the transaction objects in that month

var getMonthsSpending = function getMonthsSpending(transactions, counter) {
  var fullDate = getMonth(transactions, counter);
  var newTrans = transactions.filter(function (transaction) {
    return transaction.date.slice(0, 7) === fullDate && !transaction.category.includes('Payment');
  });
  return {
    date: fullDate,
    trans: newTrans
  };
}; //this will push three objects of three different monthly transactions

var simplifyMonthlyData = function simplifyMonthlyData(transactions) {
  var finalArray = [];
  var counter = -1;

  while (counter < 2) {
    var trans = getMonthsSpending(transactions, counter);
    finalArray.push(trans);
    counter += 1;
  }

  return finalArray;
}; // this is what we want to manipulate for the line graph which will give us an array
// of three different objects (since we're doing three different months)
//with their date in it as well
// NOTE: make sure to pass in transactions returned from simplifyMonthly!

var finalLineGraphData = function finalLineGraphData(transactions) {
  var arr = simplifyMonthlyData(transactions);
  return arr.map(function (elem) {
    var ret = allCategorySpend(elem.trans);
    var returned = {};
    returned[elem.date] = ret;
    return returned;
  });
};

/***/ }),

/***/ "./client/components/private-route/PrivateRoute.js":
/*!*********************************************************!*\
  !*** ./client/components/private-route/PrivateRoute.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navbar */ "./client/components/Navbar.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      auth = _ref.auth,
      rest = _objectWithoutProperties(_ref, ["component", "auth"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, rest, {
    render: function render(props) {
      return auth === true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/login"
      });
    }
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.userReducer.isAuthenticated
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(PrivateRoute));

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./client/app.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('app'));

/***/ }),

/***/ "./client/store/accountReducer.js":
/*!****************************************!*\
  !*** ./client/store/accountReducer.js ***!
  \****************************************/
/*! exports provided: gettingAccounts, addingAccount, deletingAccount, gettingTransactions, gettingBalance, gettingIncome, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingAccounts", function() { return gettingAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addingAccount", function() { return addingAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletingAccount", function() { return deletingAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingTransactions", function() { return gettingTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingBalance", function() { return gettingBalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingIncome", function() { return gettingIncome; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./client/store/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 //initial state

var initialState = {
  accounts: [],
  transactions: [],
  balance: [],
  income: [],
  monthlyIncome: 1
};
 //ACTION TYPES

var ADD_ACCOUNT = 'ADD_ACCOUNT';
var GET_TRANSACTIONS = 'GET_TRANSACTIONS';
var DELETE_ACCOUNT = 'DELETE_ACCOUNT';
var GET_ACCOUNTS = 'GET_ACCOUNTS';
var GET_BALANCE = 'GET_BALANCE';
var GET_INCOME = 'GET_INCOME'; //ACTION CREATOR

var addAccount = function addAccount(plaidAccountData) {
  return {
    type: ADD_ACCOUNT,
    plaidAccountData: plaidAccountData
  };
};

var getIncome = function getIncome(income) {
  return {
    type: GET_INCOME,
    income: income
  };
};

var getAccounts = function getAccounts(plaidAccountData) {
  return {
    type: GET_ACCOUNTS,
    plaidAccountData: plaidAccountData
  };
};

var deleteAccount = function deleteAccount(accountId) {
  return {
    type: DELETE_ACCOUNT,
    accountId: accountId
  };
};

var getTransactions = function getTransactions(plaidAccountData) {
  return {
    type: GET_TRANSACTIONS,
    plaidAccountData: plaidAccountData
  };
};

var getBalance = function getBalance(plaidAccountData) {
  return {
    type: GET_BALANCE,
    plaidAccountData: plaidAccountData
  };
}; //Thunk


var gettingAccounts = function gettingAccounts() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var _ref2, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/plaid/accounts');

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                dispatch(getAccounts(data));
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var addingAccount = function addingAccount(plaidAccountData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch) {
        var _ref4, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/plaid/accounts/add', plaidAccountData);

              case 3:
                _ref4 = _context2.sent;
                data = _ref4.data;
                dispatch(addAccount(data));
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var deletingAccount = function deletingAccount(accountId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/plaid/accounts/".concat(accountId));

              case 3:
                dispatch(deleteAccount(accountId));
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 6]]);
      }));

      return function (_x3) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var gettingTransactions = function gettingTransactions(plaidAccountData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch) {
        var _ref7, data;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/plaid/accounts/transactions/monthly', plaidAccountData);

              case 3:
                _ref7 = _context4.sent;
                data = _ref7.data;
                console.log('data transactions', data);
                dispatch(getTransactions(data));
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
};
var gettingBalance = function gettingBalance(plaidAccountData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch) {
        var _ref9, data;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/plaid/accounts/balance', plaidAccountData);

              case 3:
                _ref9 = _context5.sent;
                data = _ref9.data;
                dispatch(getBalance(data));
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      return function (_x5) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};
var gettingIncome = function gettingIncome(plaidAccountData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(dispatch) {
        var _ref11, data;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/plaid/income', plaidAccountData);

              case 3:
                _ref11 = _context6.sent;
                data = _ref11.data;
                console.log('data', data);
                dispatch(getIncome(data));
                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                console.error(_context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
      }));

      return function (_x6) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
}; //REDUCER

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_ACCOUNT:
      return _objectSpread({}, state, {
        accounts: [action.plaidAccountData].concat(_toConsumableArray(state.accounts))
      });

    case DELETE_ACCOUNT:
      return _objectSpread({}, state, {
        accounts: _toConsumableArray(state.accounts.filter(function (account) {
          return account.accountId !== action.accountId;
        }))
      });

    case GET_TRANSACTIONS:
      var simplified = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["simplifyMonthly"])(_toConsumableArray(action.plaidAccountData));
      return _objectSpread({}, state, {
        transactions: simplified
      });

    case GET_ACCOUNTS:
      return _objectSpread({}, state, {
        accounts: _toConsumableArray(action.plaidAccountData)
      });

    case GET_BALANCE:
      return _objectSpread({}, state, {
        balance: _toConsumableArray(action.plaidAccountData)
      });

    case GET_INCOME:
      var monthlyIncome = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getIncomeTotal"])(_toConsumableArray(action.income));
      return _objectSpread({}, state, {
        income: _toConsumableArray(action.income),
        monthlyIncome: monthlyIncome
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/budgetReducer.js":
/*!***************************************!*\
  !*** ./client/store/budgetReducer.js ***!
  \***************************************/
/*! exports provided: addingBudget, gettingBudget, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addingBudget", function() { return addingBudget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gettingBudget", function() { return gettingBudget; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var initialState = {
  budget: 0,
  spendingLimit: 0
};
var ADD_BUDGET = 'ADD_BUDGET';
var GET_BUDGET = 'GET_BUDGET';

var addBudget = function addBudget(budgetData, monthlyIncome) {
  return {
    type: ADD_BUDGET,
    budgetData: budgetData,
    monthlyIncome: monthlyIncome
  };
};

var getBudget = function getBudget(budget, monthlyIncome) {
  return {
    type: GET_BUDGET,
    budget: budget,
    monthlyIncome: monthlyIncome
  };
};

var addingBudget = function addingBudget(budgetData, monthlyIncome) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var _ref2, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/budget', budgetData);

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                dispatch(addBudget(data, monthlyIncome));
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var gettingBudget = function gettingBudget(userId, monthlyIncome) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch) {
        var _ref4, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/budget/".concat(userId));

              case 3:
                _ref4 = _context2.sent;
                data = _ref4.data;
                dispatch(getBudget(data.monthlyGoal, monthlyIncome));
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_BUDGET:
      return _objectSpread({}, state, {
        budget: action.budgetData,
        spendingLimit: Math.round((Number(action.monthlyIncome) - Number(action.budgetData)) * 100) / 100
      });

    case GET_BUDGET:
      return _objectSpread({}, state, {
        budget: action.budget,
        spendingLimit: Math.round((Number(action.monthlyIncome) - Number(action.budget)) * 100) / 100
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userReducer */ "./client/store/userReducer.js");
/* harmony import */ var _accountReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accountReducer */ "./client/store/accountReducer.js");
/* harmony import */ var _insightReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insightReducer */ "./client/store/insightReducer.js");
/* harmony import */ var _budgetReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./budgetReducer */ "./client/store/budgetReducer.js");








var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  userReducer: _userReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  accountReducer: _accountReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  insightReducer: _insightReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  budgetReducer: _budgetReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
});
var middleware = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])({
  collapsed: true
})));
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, middleware);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./client/store/insightReducer.js":
/*!****************************************!*\
  !*** ./client/store/insightReducer.js ***!
  \****************************************/
/*! exports provided: getLargest, getRestaurantSpend, getTranspoSpend, getMerchantSpend, getFees, getThreeMonths, getThreeMonthsCategory, getThreeMonthsData, getThreeMonthsDataCategory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLargest", function() { return getLargest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRestaurantSpend", function() { return getRestaurantSpend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranspoSpend", function() { return getTranspoSpend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchantSpend", function() { return getMerchantSpend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFees", function() { return getFees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThreeMonths", function() { return getThreeMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThreeMonthsCategory", function() { return getThreeMonthsCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThreeMonthsData", function() { return getThreeMonthsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThreeMonthsDataCategory", function() { return getThreeMonthsDataCategory; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard/utils */ "./client/components/dashboard/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./client/store/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-case-declarations */



var GET_LARGEST = 'GET_LARGEST';
var GET_RESTAURANT = 'GET_RESTAURANT';
var GET_MERCHANT = 'GET_MERCHANT';
var GET_TRANSPO = 'GET_TRANSPO';
var GET_FEES = 'GET_FEES';
var GET_THREE_MONTHS = 'GET_THREE_MONTHS ';
var GET_THREE_MONTHS_CATEGORY = 'GET_THREE_MONTHS_CATEGORY ';
var getLargest = function getLargest(props) {
  return {
    type: GET_LARGEST,
    props: props
  };
};
var getRestaurantSpend = function getRestaurantSpend(props) {
  return {
    type: GET_RESTAURANT,
    props: props
  };
};
var getTranspoSpend = function getTranspoSpend(props) {
  return {
    type: GET_TRANSPO,
    props: props
  };
};
var getMerchantSpend = function getMerchantSpend(props) {
  return {
    type: GET_MERCHANT,
    props: props
  };
};
var getFees = function getFees(props) {
  return {
    type: GET_FEES,
    props: props
  };
};
var getThreeMonths = function getThreeMonths(threeMonthsData) {
  return {
    type: GET_THREE_MONTHS,
    threeMonthsData: threeMonthsData
  };
};
var getThreeMonthsCategory = function getThreeMonthsCategory(threeMonthsData) {
  return {
    type: GET_THREE_MONTHS_CATEGORY,
    threeMonthsData: threeMonthsData
  };
};
var initialState = {
  largest: {},
  merchantSpend: {},
  restaurantSpend: '',
  transpoSpend: '',
  fees: 0,
  threeMonthsData: {},
  threeMonthsCategory: {}
};
var getThreeMonthsData = function getThreeMonthsData(plaidAccountData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var _ref2, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/plaid/accounts/transactions/monthly', plaidAccountData);

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                dispatch(getThreeMonths(data));
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var getThreeMonthsDataCategory = function getThreeMonthsDataCategory(plaidAccountData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch) {
        var _ref4, data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/plaid/accounts/transactions/monthly', plaidAccountData);

              case 3:
                _ref4 = _context2.sent;
                data = _ref4.data;
                console.log('dispatched', data);
                dispatch(getThreeMonthsCategory(data));
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 9]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_LARGEST:
      var largest = Object(_components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__["getLargestTransaction"])(action.props);
      return _objectSpread({}, state, {
        largest: largest
      });

    case GET_RESTAURANT:
      var rest = Object(_components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__["getCategorySpend"])(action.props, 'Food and Drink');
      return _objectSpread({}, state, {
        restaurantSpend: rest
      });

    case GET_FEES:
      var fees = Object(_components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__["getCategorySpend"])(action.props, 'Fees');
      return _objectSpread({}, state, {
        fees: fees
      });

    case GET_MERCHANT:
      var merchant = Object(_components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__["largestByMerchant"])(action.props);
      return _objectSpread({}, state, {
        merchantSpend: merchant
      });

    case GET_TRANSPO:
      var transpo = Object(_components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__["getCategorySpend"])(action.props, 'Travel');
      return _objectSpread({}, state, {
        transpoSpend: transpo
      });

    case GET_THREE_MONTHS:
      var threeMonthsData = Object(_components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__["totalMonthly"])(action.threeMonthsData);
      return _objectSpread({}, state, {
        threeMonthsData: threeMonthsData
      });

    case GET_THREE_MONTHS_CATEGORY:
      var threeMonthsCategory = Object(_components_dashboard_utils__WEBPACK_IMPORTED_MODULE_1__["finalLineGraphData"])(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["simplifyMonthly"])(action.threeMonthsData));
      return _objectSpread({}, state, {
        threeMonthsCategory: threeMonthsCategory
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/userReducer.js":
/*!*************************************!*\
  !*** ./client/store/userReducer.js ***!
  \*************************************/
/*! exports provided: GET_ERRORS, createUser, fetchUser, getErrors, createdUser, loggedInUser, logoutUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERRORS", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createdUser", function() { return createdUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggedInUser", function() { return loggedInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutUser", function() { return logoutUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/setAuthToken */ "./client/utils/setAuthToken.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");

 //initialState

var initialState = {
  isAuthenticated: false,
  user: {},
  errors: {}
};

var isEmpty = __webpack_require__(/*! is-empty */ "./node_modules/is-empty/lib/index.js"); //ACTION TYPES


var CREATE_USER = 'CREATE_USER'; // for user registration

var GET_CURRENT_USER = 'GET_CURRENT_USER'; // for getting current user from login

var GET_ERRORS = 'GET_ERRORS'; //ACTION CRETORS

var createUser = function createUser(user) {
  return {
    type: CREATE_USER,
    user: user
  };
};
var fetchUser = function fetchUser(user) {
  return {
    type: GET_CURRENT_USER,
    user: user
  };
};
var getErrors = function getErrors(err) {
  return {
    type: GET_ERRORS,
    err: err
  };
}; //Thunk - for user registration

var createdUser = function createdUser(user) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch) {
        var _ref2, data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/register', user);

              case 3:
                _ref2 = _context.sent;
                data = _ref2.data;
                dispatch(createUser(data));
                dispatch(getErrors('No errors'));
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                dispatch(getErrors(_context.t0.response.data));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}; //Thunk - for user login

var loggedInUser = function loggedInUser(user) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch) {
        var res, token, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users/login', user);

              case 3:
                res = _context2.sent;
                token = res.data.token;
                localStorage.setItem('jwt', token);
                Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
                data = jwtDecode(token);
                dispatch(fetchUser(data));
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 11]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var logoutUser = function logoutUser() {
  return function (dispatch) {
    // Remove token from local storage
    localStorage.removeItem('jwt'); // Remove auth header for future requests

    Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_1__["default"])(false); // Set current user to empty object {} which will set isAuthenticated to false

    dispatch(fetchUser({}));
  };
}; //reducer

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CREATE_USER:
      return _objectSpread({}, state, {
        user: action.user
      });

    case GET_CURRENT_USER:
      return _objectSpread({}, state, {
        user: action.user,
        isAuthenticated: !isEmpty(action.user)
      });

    case GET_ERRORS:
      return _objectSpread({}, state, {
        errors: action.err
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./client/store/utils.js":
/*!*******************************!*\
  !*** ./client/store/utils.js ***!
  \*******************************/
/*! exports provided: simplifyMonthly, getIncomeTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplifyMonthly", function() { return simplifyMonthly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncomeTotal", function() { return getIncomeTotal; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var simplifyMonthly = function simplifyMonthly(transactionProps) {
  var _ref;

  var newArray = transactionProps.map(function (elem) {
    var name = elem.name;
    return elem.transactions.map(function (ele) {
      ele.accountName = elem.accountName;
      return ele;
    });
  });
  newArray = (_ref = []).concat.apply(_ref, _toConsumableArray(newArray));
  return newArray;
};
var getIncomeTotal = function getIncomeTotal(incomeProps) {
  return incomeProps.reduce(function (accum, elem) {
    return accum + elem.monthly_income;
  }, 0);
};

/***/ }),

/***/ "./client/utils/setAuthToken.js":
/*!**************************************!*\
  !*** ./client/utils/setAuthToken.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var setAuthToken = function setAuthToken(token) {
  if (token) {
    // Apply authorization token to every request if logged in
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./noConflict */ "./node_modules/@babel/polyfill/lib/noConflict.js");

var _global = _interopRequireDefault(__webpack_require__(/*! core-js/library/fn/global */ "./node_modules/core-js/library/fn/global.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_global.default._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global.default._babelPolyfill = true;

/***/ }),

/***/ "./node_modules/@babel/polyfill/lib/noConflict.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/polyfill/lib/noConflict.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/es6 */ "./node_modules/core-js/es6/index.js");

__webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");

__webpack_require__(/*! core-js/fn/array/flat-map */ "./node_modules/core-js/fn/array/flat-map.js");

__webpack_require__(/*! core-js/fn/string/pad-start */ "./node_modules/core-js/fn/string/pad-start.js");

__webpack_require__(/*! core-js/fn/string/pad-end */ "./node_modules/core-js/fn/string/pad-end.js");

__webpack_require__(/*! core-js/fn/string/trim-start */ "./node_modules/core-js/fn/string/trim-start.js");

__webpack_require__(/*! core-js/fn/string/trim-end */ "./node_modules/core-js/fn/string/trim-end.js");

__webpack_require__(/*! core-js/fn/symbol/async-iterator */ "./node_modules/core-js/fn/symbol/async-iterator.js");

__webpack_require__(/*! core-js/fn/object/get-own-property-descriptors */ "./node_modules/core-js/fn/object/get-own-property-descriptors.js");

__webpack_require__(/*! core-js/fn/object/values */ "./node_modules/core-js/fn/object/values.js");

__webpack_require__(/*! core-js/fn/object/entries */ "./node_modules/core-js/fn/object/entries.js");

__webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");

__webpack_require__(/*! core-js/web */ "./node_modules/core-js/web/index.js");

__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toArray.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/common.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/grey.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/grey.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/indigo.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/indigo.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
var _default = indigo;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/pink.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/colors/pink.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {