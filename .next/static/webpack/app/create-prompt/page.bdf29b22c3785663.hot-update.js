"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create-prompt/page",{

/***/ "(app-pages-browser)/./components/Form.jsx":
/*!*****************************!*\
  !*** ./components/Form.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\nconst Form = (param)=>{\n    let { type, post, setPost, submitting, handleSubmit } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"mx-auto flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"head_text text-left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"blue_gradient\",\n                    children: [\n                        type,\n                        \" Post\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 43\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"desc text-left max-w-md\",\n                children: [\n                    type,\n                    \" and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-satoshi font-semibold text-base text-gray-700\",\n                                children: \"Your AI Prompt\"\n                            }, void 0, false, {\n                                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                value: post.prompt,\n                                onChange: (e)=>setPost({\n                                        ...post,\n                                        prompt: e.target.value\n                                    }),\n                                placeholder: \"Write your post here\",\n                                required: true,\n                                className: \"form_textarea \"\n                            }, void 0, false, {\n                                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-satoshi font-semibold text-base text-gray-700\",\n                                children: [\n                                    \"Field of Prompt\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-normal\",\n                                        children: \"(#product, #webdevelopment, #idea, etc.)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: post.tag,\n                                onChange: (e)=>setPost({\n                                        ...post,\n                                        tag: e.target.value\n                                    }),\n                                type: \"text\",\n                                placeholder: \"#Tag\",\n                                required: true,\n                                className: \"form_input\"\n                            }, void 0, false, {\n                                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-end mx-3 mb-5 gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                href: \"/\",\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: submitting,\n                                className: \"px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white\",\n                                children: submitting ? \"\".concat(type, \"ing...\") : type\n                            }, void 0, false, {\n                                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/realestzan/Downloads/Project/Coding/circula/components/Form.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ0c7QUFFN0IsTUFBTUUsT0FBTztRQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFO0lBQzdELHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQiw0RUFBQ0U7b0JBQUtGLFdBQVU7O3dCQUFpQk47d0JBQUs7Ozs7Ozs7Ozs7OzswQkFDMUUsOERBQUNTO2dCQUFFSCxXQUFVOztvQkFBMkJOO29CQUFLOzs7Ozs7OzBCQUk3Qyw4REFBQ1U7Z0JBQ0NDLFVBQVVQO2dCQUNWRSxXQUFVOztrQ0FFViw4REFBQ007OzBDQUNDLDhEQUFDSjtnQ0FBS0YsV0FBVTswQ0FBcUQ7Ozs7OzswQ0FJckUsOERBQUNPO2dDQUNDQyxPQUFPYixLQUFLYyxNQUFNO2dDQUNsQkMsVUFBVSxDQUFDQyxJQUFNZixRQUFRO3dDQUFFLEdBQUdELElBQUk7d0NBQUVjLFFBQVFFLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSztvQ0FBQztnQ0FDM0RLLGFBQVk7Z0NBQ1pDLFFBQVE7Z0NBQ1JkLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FLZCw4REFBQ007OzBDQUNDLDhEQUFDSjtnQ0FBS0YsV0FBVTs7b0NBQXFEO29DQUNuRDtrREFDaEIsOERBQUNFO3dDQUFLRixXQUFVO2tEQUFjOzs7Ozs7Ozs7Ozs7MENBSWhDLDhEQUFDZTtnQ0FDQ1AsT0FBT2IsS0FBS3FCLEdBQUc7Z0NBQ2ZOLFVBQVUsQ0FBQ0MsSUFBTWYsUUFBUTt3Q0FBRSxHQUFHRCxJQUFJO3dDQUFFcUIsS0FBS0wsRUFBRUMsTUFBTSxDQUFDSixLQUFLO29DQUFDO2dDQUN4RGQsTUFBSztnQ0FDTG1CLGFBQVk7Z0NBQ1pDLFFBQVE7Z0NBQ1JkLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FJZCw4REFBQ2lCO3dCQUFJakIsV0FBVTs7MENBQ2IsOERBQUNSLGlEQUFJQTtnQ0FBQzBCLE1BQUs7Z0NBQUlsQixXQUFVOzBDQUF3Qjs7Ozs7OzBDQUlqRCw4REFBQ21CO2dDQUNDekIsTUFBSztnQ0FDTDBCLFVBQVV2QjtnQ0FDVkcsV0FBVTswQ0FFVEgsYUFBYSxHQUFRLE9BQUxILE1BQUssWUFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1QztLQS9ETUQ7QUFpRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzeD8yOTExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRm9ybSA9ICh7IHR5cGUsIHBvc3QsIHNldFBvc3QsIHN1Ym1pdHRpbmcsIGhhbmRsZVN1Ym1pdCB9KSA9PiB7XG4gIHJldHVybiAoIFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleC1jb2xcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJoZWFkX3RleHQgdGV4dC1sZWZ0XCI+PHNwYW4gY2xhc3NOYW1lPVwiYmx1ZV9ncmFkaWVudFwiPnt0eXBlfSBQb3N0PC9zcGFuPjwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJkZXNjIHRleHQtbGVmdCBtYXgtdy1tZFwiPnt0eXBlfSBhbmQgc2hhcmUgYW1hemluZyBwcm9tcHRzIHdpdGggdGhlIHdvcmxkLCBhbmQgbGV0IHlvdXIgaW1hZ2luYXRpb24gcnVuIHdpbGQgd2l0aCBhbnkgQUktcG93ZXJlZCBwbGF0Zm9ybS48L3A+XG5cblxuXG4gICAgICA8Zm9ybVxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICBjbGFzc05hbWU9J210LTEwIHctZnVsbCBtYXgtdy0yeGwgZmxleCBmbGV4LWNvbCBnYXAtNyBnbGFzc21vcnBoaXNtJ1xuICAgICAgPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXNhdG9zaGkgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICBZb3VyIEFJIFByb21wdFxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdmFsdWU9e3Bvc3QucHJvbXB0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQb3N0KHsgLi4ucG9zdCwgcHJvbXB0OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdXcml0ZSB5b3VyIHBvc3QgaGVyZSdcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm1fdGV4dGFyZWEgJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cblxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXNhdG9zaGkgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICBGaWVsZCBvZiBQcm9tcHR7XCIgXCJ9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbm9ybWFsJz5cbiAgICAgICAgICAgICAgKCNwcm9kdWN0LCAjd2ViZGV2ZWxvcG1lbnQsICNpZGVhLCBldGMuKVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtwb3N0LnRhZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zdCh7IC4uLnBvc3QsIHRhZzogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI9JyNUYWcnXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb3JtX2lucHV0J1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZW5kIG14LTMgbWItNSBnYXAtNCc+XG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9J3B4LTUgcHktMS41IHRleHQtc20gYmctcHJpbWFyeS1vcmFuZ2Ugcm91bmRlZC1mdWxsIHRleHQtd2hpdGUnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1Ym1pdHRpbmcgPyBgJHt0eXBlfWluZy4uLmAgOiB0eXBlfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuPC9mb3JtPlxuXG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJGb3JtIiwidHlwZSIsInBvc3QiLCJzZXRQb3N0Iiwic3VibWl0dGluZyIsImhhbmRsZVN1Ym1pdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ0ZXh0YXJlYSIsInZhbHVlIiwicHJvbXB0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImlucHV0IiwidGFnIiwiZGl2IiwiaHJlZiIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Form.jsx\n"));

/***/ })

});