webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _contract_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../contract/campaign */ "./contract/campaign.js");
/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/RequestRow */ "./components/RequestRow.js");








var _jsxFileName = "D:\\Solidity\\Campaign\\pages\\campaigns\\requests\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var RequestIndex = /*#__PURE__*/function (_Component) {
  Object(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(RequestIndex, _Component);

  var _super = _createSuper(RequestIndex);

  function RequestIndex() {
    Object(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RequestIndex);

    return _super.apply(this, arguments);
  }

  Object(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RequestIndex, [{
    key: "renderRows",
    value: function renderRows() {
      var _this = this;

      return this.props.requests.map(function (request, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_RequestRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
          id: index,
          request: request,
          address: _this.props.address,
          totalApprovers: _this.props.totalApprovers
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, _this);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"].Body;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
          children: "Requests"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
          route: "/campaigns/".concat(this.props.address, "/requests/new"),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
              primary: true,
              floated: "right",
              style: {
                marginBottom: 10
              },
              children: "Add Request"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Table"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Header, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Row, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "ID"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Amount"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Recipient"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Approval Count"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Approve"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                children: "Finalize"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(HeaderCell, {
                style: true,
                children: "Transaction update"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Body, {
            children: this.renderRows()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: ["Found ", this.props.requestCount, " requests."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var address, campaign, requestCount, totalApprovers, requests;
        return D_Solidity_Campaign_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = Object(_contract_campaign__WEBPACK_IMPORTED_MODULE_12__["default"])(address);
                _context.next = 4;
                return campaign.methods.getRequestCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.totalApprovers().call();

              case 7:
                totalApprovers = _context.sent;
                _context.next = 10;
                return Promise.all( //Array(5).fill().map((element,index)=>{index})  ==> output = [0,1,2,3,4]
                Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return campaign.methods.allRequests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount,
                  totalApprovers: totalApprovers
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestIndex);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwidG90YWxBcHByb3ZlcnMiLCJIZWFkZXIiLCJUYWJsZSIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwicmVuZGVyUm93cyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImFsbFJlcXVlc3RzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7Ozs7Ozs7Ozs7O2lDQW9CYTtBQUFBOztBQUNYLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxRQUFYLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDakQsNEJBQ0UscUVBQUMsK0RBQUQ7QUFFRSxZQUFFLEVBQUVBLEtBRk47QUFHRSxpQkFBTyxFQUFFRCxPQUhYO0FBSUUsaUJBQU8sRUFBRSxLQUFJLENBQUNILEtBQUwsQ0FBV0ssT0FKdEI7QUFLRSx3QkFBYyxFQUFFLEtBQUksQ0FBQ0wsS0FBTCxDQUFXTTtBQUw3QixXQUNPRixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFTRCxPQVZNLENBQVA7QUFXRDs7OzZCQUVRO0FBQUEsVUFDQ0csTUFERCxHQUNtQ0MsdURBRG5DLENBQ0NELE1BREQ7QUFBQSxVQUNTRSxHQURULEdBQ21DRCx1REFEbkMsQ0FDU0MsR0FE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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMuMDUxYWIyNmQ3MDg4YjM0MTdjM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2NvbnRyYWN0L2NhbXBhaWduJztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcclxuXHJcbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0Q291bnQoKS5jYWxsKCk7XHJcbiAgICAgICAgY29uc3QgdG90YWxBcHByb3ZlcnMgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLnRvdGFsQXBwcm92ZXJzKCkuY2FsbCgpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAvL0FycmF5KDUpLmZpbGwoKS5tYXAoKGVsZW1lbnQsaW5kZXgpPT57aW5kZXh9KSAgPT0+IG91dHB1dCA9IFswLDEsMiwzLDRdXHJcblxyXG4gICAgICAgICAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKVxyXG4gICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuYWxsUmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codG90YWxBcHByb3ZlcnMpO1xyXG4gICAgICAgIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIHRvdGFsQXBwcm92ZXJzIH07XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICByZW5kZXJSb3dzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZXF1ZXN0Um93XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnByb3BzLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgdG90YWxBcHByb3ZlcnM9e3RoaXMucHJvcHMudG90YWxBcHByb3ZlcnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgSGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHkgfSA9IFRhYmxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxyXG4gICAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQ9XCJyaWdodFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBSZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsIHN0eWxlPlRyYW5zYWN0aW9uIHVwZGF0ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxCb2R5Pnt0aGlzLnJlbmRlclJvd3MoKX08L0JvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDxkaXY+Rm91bmQge3RoaXMucHJvcHMucmVxdWVzdENvdW50fSByZXF1ZXN0cy48L2Rpdj5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=