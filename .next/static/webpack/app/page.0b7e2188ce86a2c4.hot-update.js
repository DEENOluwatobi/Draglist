"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ \"(app-pages-browser)/./src/components/List.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst initialItems = [\n    {\n        id: \"1\",\n        image: \"/pic.svg\",\n        name: \"Scotland Island\",\n        description: \"Description for Item 1\"\n    },\n    {\n        id: \"2\",\n        image: \"https://via.placeholder.com/150\",\n        name: \"Item 2\",\n        description: \"Description for Item 2\"\n    },\n    {\n        id: \"3\",\n        image: \"https://via.placeholder.com/150\",\n        name: \"Item 3\",\n        description: \"Description for Item 3\"\n    },\n    {\n        id: \"4\",\n        image: \"https://via.placeholder.com/150\",\n        name: \"Item 4\",\n        description: \"Description for Item 4\"\n    }\n];\nconst ListHome = ()=>{\n    _s();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center min-h-screen bg-gray-200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-md p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"mb-4 text-2xl font-bold text-center\",\n                    children: \"List\"\n                }, void 0, false, {\n                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/pages/Home.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    items: items,\n                    setItems: setItems\n                }, void 0, false, {\n                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/pages/Home.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/pages/Home.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/pages/Home.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListHome, \"sNFHCHSkSTmZoBPBTQOxnnfkt60=\");\n_c = ListHome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListHome);\nvar _c;\n$RefreshReg$(_c, \"ListHome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9wYWdlcy9Ib21lLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ0Y7QUFHdEMsTUFBTUcsZUFBMkI7SUFDL0I7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsYUFBYTtJQUNmO0NBQ0Q7QUFFRCxNQUFNQyxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQ0U7SUFFbkMscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBc0M7Ozs7Ozs4QkFDcEQsOERBQUNWLHdEQUFJQTtvQkFBQ08sT0FBT0E7b0JBQU9DLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QztHQVhNRjtLQUFBQTtBQWFOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Ib21lLnRzeD82MWRkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxJdGVtczogTGlzdEl0ZW1bXSA9IFtcbiAge1xuICAgIGlkOiAnMScsXG4gICAgaW1hZ2U6ICcvcGljLnN2ZycsXG4gICAgbmFtZTogJ1Njb3RsYW5kIElzbGFuZCcsXG4gICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBmb3IgSXRlbSAxJ1xuICB9LFxuICB7XG4gICAgaWQ6ICcyJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnLFxuICAgIG5hbWU6ICdJdGVtIDInLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gZm9yIEl0ZW0gMidcbiAgfSxcbiAge1xuICAgIGlkOiAnMycsXG4gICAgaW1hZ2U6ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwJyxcbiAgICBuYW1lOiAnSXRlbSAzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIGZvciBJdGVtIDMnXG4gIH0sXG4gIHtcbiAgICBpZDogJzQnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MCcsXG4gICAgbmFtZTogJ0l0ZW0gNCcsXG4gICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBmb3IgSXRlbSA0J1xuICB9LFxuXTtcblxuY29uc3QgTGlzdEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoaW5pdGlhbEl0ZW1zKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYXktMjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1tZCBwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+TGlzdDwvaDE+XG4gICAgICAgIDxMaXN0IGl0ZW1zPXtpdGVtc30gc2V0SXRlbXM9e3NldEl0ZW1zfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0SG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGlzdCIsImluaXRpYWxJdGVtcyIsImlkIiwiaW1hZ2UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJMaXN0SG9tZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/pages/Home.tsx\n"));

/***/ })

});