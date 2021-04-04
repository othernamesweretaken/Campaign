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
            lineNumber: 67,
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
          lineNumber: 69,
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
                console.log(totalApprovers);
                return _context.abrupt("return", {
                  address: address,
                  requests: requests,
                  requestCount: requestCount,
                  totalApprovers: totalApprovers
                });

              case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwidG90YWxBcHByb3ZlcnMiLCJIZWFkZXIiLCJUYWJsZSIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwibWFyZ2luQm90dG9tIiwicmVuZGVyUm93cyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImFsbFJlcXVlc3RzIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7OztpQ0FvQmE7QUFBQTs7QUFDWCxhQUFPLEtBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQ2pELDRCQUNFLHFFQUFDLCtEQUFEO0FBRUUsWUFBRSxFQUFFQSxLQUZOO0FBR0UsaUJBQU8sRUFBRUQsT0FIWDtBQUlFLGlCQUFPLEVBQUUsS0FBSSxDQUFDSCxLQUFMLENBQVdLLE9BSnRCO0FBS0Usd0JBQWMsRUFBRSxLQUFJLENBQUNMLEtBQUwsQ0FBV007QUFMN0IsV0FDT0YsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBU0QsT0FWTSxDQUFQO0FBV0Q7Ozs2QkFFUTtBQUFBLFVBQ0NHLE1BREQsR0FDbUNDLHVEQURuQyxDQUNDRCxNQUREO0FBQUEsVUFDU0UsR0FEVCxHQUNtQ0Qs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YnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjIxOTQyNjk4MGQ2Yjk2NWQyNDgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9jb250cmFjdC9jYW1wYWlnbic7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XHJcblxyXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdENvdW50KCkuY2FsbCgpO1xyXG4gICAgICAgIGNvbnN0IHRvdGFsQXBwcm92ZXJzID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy50b3RhbEFwcHJvdmVycygpLmNhbGwoKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgLy9BcnJheSg1KS5maWxsKCkubWFwKChlbGVtZW50LGluZGV4KT0+e2luZGV4fSkgID09PiBvdXRwdXQgPSBbMCwxLDIsMyw0XVxyXG5cclxuICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSlcclxuICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLmFsbFJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b3RhbEFwcHJvdmVycyk7XHJcbiAgICAgICAgcmV0dXJuIHsgYWRkcmVzcywgcmVxdWVzdHMsIHJlcXVlc3RDb3VudCwgdG90YWxBcHByb3ZlcnMgfTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJlbmRlclJvd3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlcXVlc3RSb3dcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxyXG4gICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgICAgICAgICB0b3RhbEFwcHJvdmVycz17dGhpcy5wcm9wcy50b3RhbEFwcHJvdmVyc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMz5SZXF1ZXN0czwvaDM+XHJcbiAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmxvYXRlZD1cInJpZ2h0XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgQWRkIFJlcXVlc3RcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5SZWNpcGllbnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5GaW5hbGl6ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxCb2R5Pnt0aGlzLnJlbmRlclJvd3MoKX08L0JvZHk+XHJcbiAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDxkaXY+Rm91bmQge3RoaXMucHJvcHMucmVxdWVzdENvdW50fSByZXF1ZXN0cy48L2Rpdj5cclxuICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=