"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0b79fda73900\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz8yZDNmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMGI3OWZkYTczOTAwXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.jsx":
/*!****************************!*\
  !*** ./components/Nav.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [toggleDropdown, setToggleDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(res);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex-between h-24 w-2/3 flex-center mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                href: \"/\",\n                className: \"flex gap-2 flex-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"/assets/images/logo.jpg\",\n                        alt: \"logo\",\n                        width: 30,\n                        height: 30,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"orange_gradient font-black text-3xl\",\n                        children: \"Circula AI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:flex hidden\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-3 md:gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/create-prompt\",\n                            className: \"black_btn\",\n                            children: \"Create Post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut,\n                            className: \"outline_btn\",\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: session === null || session === void 0 ? void 0 : session.user.image,\n                                width: 37,\n                                height: 37,\n                                className: \"rounded-full\",\n                                alt: \"profile\"\n                            }, void 0, false, {\n                                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                            },\n                            className: \"black_btn\",\n                            children: \"Sign in\"\n                        }, provider.name, false, {\n                            fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden flex relative\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: session === null || session === void 0 ? void 0 : session.user.image,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full\",\n                            alt: \"profile\",\n                            onClick: ()=>setToggleDropdown(!toggleDropdown)\n                        }, void 0, false, {\n                            fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined),\n                        toggleDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/profile\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"My Profile\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    href: \"/create-prompt\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"Create Prompt\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>{\n                                        setToggleDropdown(false);\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                                    },\n                                    className: \"mt-5 w-full black_btn\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                            },\n                            className: \"black_btn\",\n                            children: \"Sign in\"\n                        }, provider.name, false, {\n                            fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                            lineNumber: 121,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Nav.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"pQwkQD6kx3e0MFe+jjOLDX1MoSg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTZCO0FBQ0U7QUFDYTtBQUNnQztBQUU1RSxNQUFNUSxNQUFNOztJQUNWLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdKLDJEQUFVQTtJQUVwQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyREQsZ0RBQVNBLENBQUM7UUFDUDtZQUNDLE1BQU1hLE1BQU0sTUFBTVIsNkRBQVlBO1lBQzlCSyxhQUFhRztRQUNmO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDakIsaURBQUlBO2dCQUFDa0IsTUFBSztnQkFBSUQsV0FBVTs7a0NBQ3ZCLDhEQUFDaEIsa0RBQUtBO3dCQUNKa0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkwsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBc0M7Ozs7Ozs7Ozs7OzswQkFJckQsOERBQUNPO2dCQUFJUCxXQUFVOzBCQUNaUCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNlLElBQUksa0JBQ1osOERBQUNEO29CQUFJUCxXQUFVOztzQ0FDYiw4REFBQ2pCLGlEQUFJQTs0QkFBQ2tCLE1BQUs7NEJBQWlCRCxXQUFVO3NDQUFZOzs7Ozs7c0NBSWxELDhEQUFDUzs0QkFBT0MsTUFBSzs0QkFBU0MsU0FBU3ZCLG9EQUFPQTs0QkFBRVksV0FBVTtzQ0FBYzs7Ozs7O3NDQUloRSw4REFBQ2pCLGlEQUFJQTs0QkFBQ2tCLE1BQUs7c0NBQ1QsNEVBQUNqQixrREFBS0E7Z0NBQ0prQixHQUFHLEVBQUVULG9CQUFBQSw4QkFBQUEsUUFBU2UsSUFBSSxDQUFDSSxLQUFLO2dDQUN4QlIsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkwsV0FBVTtnQ0FDVkcsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FLVjs4QkFDR1QsYUFDQ21CLE9BQU9DLE1BQU0sQ0FBQ3BCLFdBQVdxQixHQUFHLENBQUMsQ0FBQ0MseUJBQzVCLDhEQUFDUDs0QkFDQ0MsTUFBSzs0QkFFTEMsU0FBUztnQ0FDUHhCLHVEQUFNQSxDQUFDNkIsU0FBU0MsRUFBRTs0QkFDcEI7NEJBQ0FqQixXQUFVO3NDQUNYOzJCQUxNZ0IsU0FBU0UsSUFBSTs7Ozs7Ozs7Ozs7MEJBYzlCLDhEQUFDWDtnQkFBSVAsV0FBVTswQkFDWlAsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTZSxJQUFJLGtCQUNaLDhEQUFDRDtvQkFBSVAsV0FBVTs7c0NBQ2IsOERBQUNoQixrREFBS0E7NEJBQ0prQixHQUFHLEVBQUVULG9CQUFBQSw4QkFBQUEsUUFBU2UsSUFBSSxDQUFDSSxLQUFLOzRCQUN4QlIsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkwsV0FBVTs0QkFDVkcsS0FBSTs0QkFDSlEsU0FBUyxJQUFNZCxrQkFBa0IsQ0FBQ0Q7Ozs7Ozt3QkFHbkNBLGdDQUNDLDhEQUFDVzs0QkFBSVAsV0FBVTs7OENBQ2IsOERBQUNqQixpREFBSUE7b0NBQ0hrQixNQUFLO29DQUNMRCxXQUFVO29DQUNWVyxTQUFTLElBQU1kLGtCQUFrQjs4Q0FDbEM7Ozs7Ozs4Q0FHRCw4REFBQ2QsaURBQUlBO29DQUNIa0IsTUFBSztvQ0FDTEQsV0FBVTtvQ0FDVlcsU0FBUyxJQUFNZCxrQkFBa0I7OENBQ2xDOzs7Ozs7OENBR0QsOERBQUNZO29DQUNDQyxNQUFLO29DQUNMQyxTQUFTO3dDQUNQZCxrQkFBa0I7d0NBQ2xCVCx3REFBT0E7b0NBQ1Q7b0NBQ0FZLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU9QOzhCQUNHTixhQUNDbUIsT0FBT0MsTUFBTSxDQUFDcEIsV0FBV3FCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDNUIsOERBQUNQOzRCQUNDQyxNQUFLOzRCQUVMQyxTQUFTO2dDQUNQeEIsdURBQU1BLENBQUM2QixTQUFTQyxFQUFFOzRCQUNwQjs0QkFDQWpCLFdBQVU7c0NBQ1g7MkJBTE1nQixTQUFTRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNwQztHQWpJTTNCOztRQUNzQkYsdURBQVVBOzs7S0FEaENFO0FBbUlOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzeD85ODk5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGNvbnN0IFtwcm92aWRlcnMsIHNldFByb3ZpZGVyc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RvZ2dsZURyb3Bkb3duLCBzZXRUb2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG4gICAgICBzZXRQcm92aWRlcnMocmVzKTtcbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT0nZmxleC1iZXR3ZWVuIGgtMjQgdy0yLzMgZmxleC1jZW50ZXIgbXgtYXV0byc+XG4gICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9J2ZsZXggZ2FwLTIgZmxleC1jZW50ZXInPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9Jy9hc3NldHMvaW1hZ2VzL2xvZ28uanBnJ1xuICAgICAgICAgIGFsdD0nbG9nbydcbiAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgaGVpZ2h0PXszMH1cbiAgICAgICAgICBjbGFzc05hbWU9J29iamVjdC1jb250YWluJ1xuICAgICAgICAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9J29yYW5nZV9ncmFkaWVudCBmb250LWJsYWNrIHRleHQtM3hsJz5DaXJjdWxhIEFJPC9wPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICB7LyogRGVza3RvcCBOYXZpZ2F0aW9uICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOmZsZXggaGlkZGVuJz5cbiAgICAgICAge3Nlc3Npb24/LnVzZXIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTMgbWQ6Z2FwLTUnPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NyZWF0ZS1wcm9tcHQnIGNsYXNzTmFtZT0nYmxhY2tfYnRuJz5cbiAgICAgICAgICAgICAgQ3JlYXRlIFBvc3RcbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3NpZ25PdXR9IGNsYXNzTmFtZT0nb3V0bGluZV9idG4nPlxuICAgICAgICAgICAgICBTaWduIE91dFxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wcm9maWxlJz5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uPy51c2VyLmltYWdlfVxuICAgICAgICAgICAgICAgIHdpZHRoPXszN31cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezM3fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJ1xuICAgICAgICAgICAgICAgIGFsdD0ncHJvZmlsZSdcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge3Byb3ZpZGVycyAmJlxuICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4gKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2lnbkluKHByb3ZpZGVyLmlkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JsYWNrX2J0bidcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpoaWRkZW4gZmxleCByZWxhdGl2ZSc+XG4gICAgICAgIHtzZXNzaW9uPy51c2VyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24/LnVzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIHdpZHRoPXszN31cbiAgICAgICAgICAgICAgaGVpZ2h0PXszN31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwnXG4gICAgICAgICAgICAgIGFsdD0ncHJvZmlsZSdcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlRHJvcGRvd24oIXRvZ2dsZURyb3Bkb3duKX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHt0b2dnbGVEcm9wZG93biAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9Jy9wcm9maWxlJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcm9wZG93bl9saW5rJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE15IFByb2ZpbGVcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9Jy9jcmVhdGUtcHJvbXB0J1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcm9wZG93bl9saW5rJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBQcm9tcHRcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb2dnbGVEcm9wZG93bihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J210LTUgdy1mdWxsIGJsYWNrX2J0bidcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIE91dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtwcm92aWRlcnMgJiZcbiAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25Jbihwcm92aWRlci5pZCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdibGFja19idG4nXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiZ2V0UHJvdmlkZXJzIiwiTmF2IiwiZGF0YSIsInNlc3Npb24iLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJ0b2dnbGVEcm9wZG93biIsInNldFRvZ2dsZURyb3Bkb3duIiwicmVzIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImRpdiIsInVzZXIiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImltYWdlIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.jsx\n"));

/***/ })

});