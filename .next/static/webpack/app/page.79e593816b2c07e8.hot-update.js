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

/***/ "(app-pages-browser)/./src/components/List.tsx":
/*!*********************************!*\
  !*** ./src/components/List.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DraggableList = (param)=>{\n    let { items, setItems } = param;\n    const handleOnDragEnd = (result)=>{\n        console.log(\"Drag End:\", result); // Debugging\n        if (!result.destination) return;\n        const newItems = Array.from(items);\n        const [reorderedItem] = newItems.splice(result.source.index, 1);\n        newItems.splice(result.destination.index, 0, reorderedItem);\n        setItems(newItems);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n            droppableId: \"draggable-list\",\n            children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    ...provided.droppableProps,\n                    ref: provided.innerRef,\n                    className: \"p-4 bg-gray-100 rounded-lg\",\n                    children: [\n                        items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n                                draggableId: item.id,\n                                index: index,\n                                children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        ref: provided.innerRef,\n                                        ...provided.draggableProps,\n                                        className: \"p-4 mb-1 bg-white rounded-sm flex justify-between items-center\",\n                                        style: {\n                                            ...provided.draggableProps.style\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: item.image,\n                                                    alt: item.name,\n                                                    className: \"w-16 h-16 mr-4 rounded-lg\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"font-semibold text-[.9em] md:text-base\",\n                                                            children: item.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                            lineNumber: 39,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-[.8em] md:text-sm text-gray-600\",\n                                                            children: item.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                            lineNumber: 40,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 19\n                                    }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, undefined)),\n                        provided.placeholder\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DraggableList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraggableList);\nvar _c;\n$RefreshReg$(_c, \"DraggableList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUM4RDtBQVF4RixNQUFNSSxnQkFBOEM7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUN0RSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhRixTQUFTLFlBQVk7UUFDOUMsSUFBSSxDQUFDQSxPQUFPRyxXQUFXLEVBQUU7UUFFekIsTUFBTUMsV0FBV0MsTUFBTUMsSUFBSSxDQUFDVDtRQUM1QixNQUFNLENBQUNVLGNBQWMsR0FBR0gsU0FBU0ksTUFBTSxDQUFDUixPQUFPUyxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM3RE4sU0FBU0ksTUFBTSxDQUFDUixPQUFPRyxXQUFXLENBQUNPLEtBQUssRUFBRSxHQUFHSDtRQUU3Q1QsU0FBU007SUFDWDtJQUVBLHFCQUNFLDhEQUFDWCxnRUFBZUE7UUFBQ2tCLFdBQVdaO2tCQUMxQiw0RUFBQ0osMERBQVNBO1lBQUNpQixhQUFZO3NCQUNwQixDQUFDQyx5QkFDQSw4REFBQ0M7b0JBQUksR0FBR0QsU0FBU0UsY0FBYztvQkFBRUMsS0FBS0gsU0FBU0ksUUFBUTtvQkFBRUMsV0FBVTs7d0JBQ2hFckIsTUFBTXNCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVixzQkFDaEIsOERBQUNoQiwwREFBU0E7Z0NBQWUyQixhQUFhRCxLQUFLRSxFQUFFO2dDQUFFWixPQUFPQTswQ0FDbkQsQ0FBQ0cseUJBQ0EsOERBQUNVO3dDQUNDUCxLQUFLSCxTQUFTSSxRQUFRO3dDQUNyQixHQUFHSixTQUFTVyxjQUFjO3dDQUMzQk4sV0FBVTt3Q0FDVk8sT0FBTzs0Q0FBRSxHQUFHWixTQUFTVyxjQUFjLENBQUNDLEtBQUs7d0NBQUM7a0RBRTFDLDRFQUFDQzs0Q0FBSVIsV0FBVTs7OERBQ2IsOERBQUNTO29EQUFJQyxLQUFLUixLQUFLUyxLQUFLO29EQUFFQyxLQUFLVixLQUFLVyxJQUFJO29EQUFFYixXQUFVOzs7Ozs7OERBQ2hELDhEQUFDUTs7c0VBQ0MsOERBQUNNOzREQUFHZCxXQUFVO3NFQUEwQ0UsS0FBS1csSUFBSTs7Ozs7O3NFQUNqRSw4REFBQ0U7NERBQUVmLFdBQVU7c0VBQXdDRSxLQUFLYyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFaL0RkLEtBQUtFLEVBQUU7Ozs7O3dCQW1CeEJULFNBQVNzQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQztLQTNDTXZDO0FBK0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xpc3QudHN4PzJjZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUsIERyb3BSZXN1bHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgRHJhZ2dhYmxlTGlzdFByb3BzIHtcbiAgaXRlbXM6IExpc3RJdGVtW107XG4gIHNldEl0ZW1zOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxMaXN0SXRlbVtdPj47XG59XG5cbmNvbnN0IERyYWdnYWJsZUxpc3Q6IFJlYWN0LkZDPERyYWdnYWJsZUxpc3RQcm9wcz4gPSAoeyBpdGVtcywgc2V0SXRlbXMgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVPbkRyYWdFbmQgPSAocmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0RyYWcgRW5kOicsIHJlc3VsdCk7IC8vIERlYnVnZ2luZ1xuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSByZXR1cm47XG5cbiAgICBjb25zdCBuZXdJdGVtcyA9IEFycmF5LmZyb20oaXRlbXMpO1xuICAgIGNvbnN0IFtyZW9yZGVyZWRJdGVtXSA9IG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcbiAgICBuZXdJdGVtcy5zcGxpY2UocmVzdWx0LmRlc3RpbmF0aW9uLmluZGV4LCAwLCByZW9yZGVyZWRJdGVtKTtcblxuICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVPbkRyYWdFbmR9PlxuICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyYWdnYWJsZS1saXN0XCI+XG4gICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICA8dWwgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfSByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSBjbGFzc05hbWU9XCJwLTQgYmctZ3JheS0xMDAgcm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e2l0ZW0uaWR9IGRyYWdnYWJsZUlkPXtpdGVtLmlkfSBpbmRleD17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHsocHJvdmlkZWQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCBtYi0xIGJnLXdoaXRlIHJvdW5kZWQtc20gZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMuc3R5bGUgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwidy0xNiBoLTE2IG1yLTQgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWy45ZW1dIG1kOnRleHQtYmFzZVwiPntpdGVtLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWy44ZW1dIG1kOnRleHQtc20gdGV4dC1ncmF5LTYwMFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcHBhYmxlPlxuICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICApO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZUxpc3Q7XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiRHJhZ2dhYmxlTGlzdCIsIml0ZW1zIiwic2V0SXRlbXMiLCJoYW5kbGVPbkRyYWdFbmQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIkFycmF5IiwiZnJvbSIsInJlb3JkZXJlZEl0ZW0iLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIm9uRHJhZ0VuZCIsImRyb3BwYWJsZUlkIiwicHJvdmlkZWQiLCJ1bCIsImRyb3BwYWJsZVByb3BzIiwicmVmIiwiaW5uZXJSZWYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiZHJhZ2dhYmxlSWQiLCJpZCIsImxpIiwiZHJhZ2dhYmxlUHJvcHMiLCJzdHlsZSIsImRpdiIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsImgzIiwicCIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/List.tsx\n"));

/***/ })

});