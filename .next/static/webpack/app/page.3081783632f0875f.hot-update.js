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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DraggableList = (param)=>{\n    let { items, setItems } = param;\n    const handleOnDragEnd = (result)=>{\n        console.log(\"Drag End:\", result); // Debugging\n        if (!result.destination) return;\n        const newItems = Array.from(items);\n        const [reorderedItem] = newItems.splice(result.source.index, 1);\n        newItems.splice(result.destination.index, 0, reorderedItem);\n        setItems(newItems);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n            droppableId: \"draggable-list\",\n            children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    ...provided.droppableProps,\n                    ref: provided.innerRef,\n                    className: \"p-4 bg-gray-100 rounded-lg\",\n                    children: [\n                        items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n                                draggableId: item.id,\n                                index: index,\n                                children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        ref: provided.innerRef,\n                                        ...provided.draggableProps,\n                                        ...provided.dragHandleProps,\n                                        className: \"p-4 mb-2 bg-white rounded-lg shadow flex justify-between items-center\",\n                                        style: {\n                                            ...provided.draggableProps.style\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: item.image,\n                                                        alt: item.name,\n                                                        className: \"w-16 h-16 mr-4 rounded-full\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                        lineNumber: 38,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                className: \"font-bold\",\n                                                                children: item.name\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                                lineNumber: 40,\n                                                                columnNumber: 25\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"text-sm text-gray-600\",\n                                                                children: item.description\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                                lineNumber: 41,\n                                                                columnNumber: 25\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                onClick: handleOnDragEnd,\n                                                children: \"Move\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 19\n                                    }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, undefined)),\n                        provided.placeholder\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DraggableList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraggableList);\nvar _c;\n$RefreshReg$(_c, \"DraggableList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUM4RDtBQVF4RixNQUFNSSxnQkFBOEM7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUN0RSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQyxhQUFhRixTQUFTLFlBQVk7UUFDOUMsSUFBSSxDQUFDQSxPQUFPRyxXQUFXLEVBQUU7UUFFekIsTUFBTUMsV0FBV0MsTUFBTUMsSUFBSSxDQUFDVDtRQUM1QixNQUFNLENBQUNVLGNBQWMsR0FBR0gsU0FBU0ksTUFBTSxDQUFDUixPQUFPUyxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM3RE4sU0FBU0ksTUFBTSxDQUFDUixPQUFPRyxXQUFXLENBQUNPLEtBQUssRUFBRSxHQUFHSDtRQUU3Q1QsU0FBU007SUFDWDtJQUVBLHFCQUNFLDhEQUFDWCxnRUFBZUE7UUFBQ2tCLFdBQVdaO2tCQUMxQiw0RUFBQ0osMERBQVNBO1lBQUNpQixhQUFZO3NCQUNwQixDQUFDQyx5QkFDQSw4REFBQ0M7b0JBQUksR0FBR0QsU0FBU0UsY0FBYztvQkFBRUMsS0FBS0gsU0FBU0ksUUFBUTtvQkFBRUMsV0FBVTs7d0JBQ2hFckIsTUFBTXNCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNVixzQkFDaEIsOERBQUNoQiwwREFBU0E7Z0NBQWUyQixhQUFhRCxLQUFLRSxFQUFFO2dDQUFFWixPQUFPQTswQ0FDbkQsQ0FBQ0cseUJBQ0EsOERBQUNVO3dDQUNDUCxLQUFLSCxTQUFTSSxRQUFRO3dDQUNyQixHQUFHSixTQUFTVyxjQUFjO3dDQUMxQixHQUFHWCxTQUFTWSxlQUFlO3dDQUM1QlAsV0FBVTt3Q0FDVlEsT0FBTzs0Q0FBRSxHQUFHYixTQUFTVyxjQUFjLENBQUNFLEtBQUs7d0NBQUM7OzBEQUUxQyw4REFBQ0M7Z0RBQUlULFdBQVU7O2tFQUNiLDhEQUFDVTt3REFBSUMsS0FBS1QsS0FBS1UsS0FBSzt3REFBRUMsS0FBS1gsS0FBS1ksSUFBSTt3REFBRWQsV0FBVTs7Ozs7O2tFQUNoRCw4REFBQ1M7OzBFQUNDLDhEQUFDTTtnRUFBR2YsV0FBVTswRUFBYUUsS0FBS1ksSUFBSTs7Ozs7OzBFQUNwQyw4REFBQ0U7Z0VBQUVoQixXQUFVOzBFQUF5QkUsS0FBS2UsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQUcxRCw4REFBQ1I7Z0RBQUlTLFNBQVNyQzswREFBaUI7Ozs7Ozs7Ozs7OzsrQkFoQnJCcUIsS0FBS0UsRUFBRTs7Ozs7d0JBdUJ4QlQsU0FBU3dCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0tBL0NNekM7QUFtRE4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlzdC50c3g/MmNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSwgRHJvcFJlc3VsdCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBEcmFnZ2FibGVMaXN0UHJvcHMge1xuICBpdGVtczogTGlzdEl0ZW1bXTtcbiAgc2V0SXRlbXM6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPExpc3RJdGVtW10+Pjtcbn1cblxuY29uc3QgRHJhZ2dhYmxlTGlzdDogUmVhY3QuRkM8RHJhZ2dhYmxlTGlzdFByb3BzPiA9ICh7IGl0ZW1zLCBzZXRJdGVtcyB9KSA9PiB7XG4gIGNvbnN0IGhhbmRsZU9uRHJhZ0VuZCA9IChyZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRHJhZyBFbmQ6JywgcmVzdWx0KTsgLy8gRGVidWdnaW5nXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcblxuICAgIGNvbnN0IG5ld0l0ZW1zID0gQXJyYXkuZnJvbShpdGVtcyk7XG4gICAgY29uc3QgW3Jlb3JkZXJlZEl0ZW1dID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xuICAgIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xuXG4gICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZH0+XG4gICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJhZ2dhYmxlLWxpc3RcIj5cbiAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgIDx1bCB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IGNsYXNzTmFtZT1cInAtNCBiZy1ncmF5LTEwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17aXRlbS5pZH0gZHJhZ2dhYmxlSWQ9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IG1iLTIgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgLi4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHMuc3R5bGUgfX0gLy8gRW5zdXJlIHN0eWxlcyBhcmUgYXBwbGllZFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwidy0xNiBoLTE2IG1yLTQgcm91bmRlZC1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntpdGVtLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlT25EcmFnRW5kfT5cbiAgICAgICAgICAgICAgICAgICAgICBNb3ZlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICl9XG4gICAgICA8L0Ryb3BwYWJsZT5cbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGVMaXN0O1xuXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIkRyYWdnYWJsZUxpc3QiLCJpdGVtcyIsInNldEl0ZW1zIiwiaGFuZGxlT25EcmFnRW5kIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRlc3RpbmF0aW9uIiwibmV3SXRlbXMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyZWRJdGVtIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJvbkRyYWdFbmQiLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwidWwiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImRyYWdnYWJsZUlkIiwiaWQiLCJsaSIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwic3R5bGUiLCJkaXYiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoMyIsInAiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/List.tsx\n"));

/***/ })

});