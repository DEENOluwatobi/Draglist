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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"(app-pages-browser)/./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst DraggableList = (param)=>{\n    let { items, setItems } = param;\n    const handleOnDragEnd = (result)=>{\n        if (!result.destination) return;\n        const newItems = Array.from(items);\n        const [reorderedItem] = newItems.splice(result.source.index, 1);\n        newItems.splice(result.destination.index, 0, reorderedItem);\n        setItems(newItems);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.DragDropContext, {\n        onDragEnd: handleOnDragEnd,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n            droppableId: \"draggable-list\",\n            children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    ...provided.droppableProps,\n                    ref: provided.innerRef,\n                    className: \"p-1 bg-gray-100 rounded-lg\",\n                    children: [\n                        items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n                                draggableId: item.id,\n                                index: index,\n                                children: (provided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        ref: provided.innerRef,\n                                        ...provided.draggableProps,\n                                        className: \"p-4 bg-white rounded-lg shadow flex justify-between items-center\",\n                                        style: {\n                                            ...provided.draggableProps.style\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: item.image,\n                                                    alt: item.name,\n                                                    className: \"w-16 h-16 mr-4 rounded-lg\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"font-bold\",\n                                                            children: item.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                            lineNumber: 38,\n                                                            columnNumber: 25\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"text-sm text-gray-600\",\n                                                            children: item.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                            lineNumber: 39,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 19\n                                    }, undefined)\n                            }, item.id, false, {\n                                fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, undefined)),\n                        provided.placeholder\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Deen_Oluwatobi/Desktop/PROJECTS/Draglist/src/components/List.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DraggableList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DraggableList);\nvar _c;\n$RefreshReg$(_c, \"DraggableList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUM4RDtBQVF4RixNQUFNSSxnQkFBOEM7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUN0RSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkIsSUFBSSxDQUFDQSxPQUFPQyxXQUFXLEVBQUU7UUFFekIsTUFBTUMsV0FBV0MsTUFBTUMsSUFBSSxDQUFDUDtRQUM1QixNQUFNLENBQUNRLGNBQWMsR0FBR0gsU0FBU0ksTUFBTSxDQUFDTixPQUFPTyxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM3RE4sU0FBU0ksTUFBTSxDQUFDTixPQUFPQyxXQUFXLENBQUNPLEtBQUssRUFBRSxHQUFHSDtRQUU3Q1AsU0FBU0k7SUFDWDtJQUVBLHFCQUNFLDhEQUFDVCxnRUFBZUE7UUFBQ2dCLFdBQVdWO2tCQUMxQiw0RUFBQ0osMERBQVNBO1lBQUNlLGFBQVk7c0JBQ3BCLENBQUNDLHlCQUNBLDhEQUFDQztvQkFBSSxHQUFHRCxTQUFTRSxjQUFjO29CQUFFQyxLQUFLSCxTQUFTSSxRQUFRO29CQUFFQyxXQUFVOzt3QkFDaEVuQixNQUFNb0IsR0FBRyxDQUFDLENBQUNDLE1BQU1WLHNCQUNoQiw4REFBQ2QsMERBQVNBO2dDQUFleUIsYUFBYUQsS0FBS0UsRUFBRTtnQ0FBRVosT0FBT0E7MENBQ25ELENBQUNHLHlCQUNBLDhEQUFDVTt3Q0FDQ1AsS0FBS0gsU0FBU0ksUUFBUTt3Q0FDckIsR0FBR0osU0FBU1csY0FBYzt3Q0FDM0JOLFdBQVU7d0NBQ1ZPLE9BQU87NENBQUUsR0FBR1osU0FBU1csY0FBYyxDQUFDQyxLQUFLO3dDQUFDO2tEQUUxQyw0RUFBQ0M7NENBQUlSLFdBQVU7OzhEQUNiLDhEQUFDUztvREFBSUMsS0FBS1IsS0FBS1MsS0FBSztvREFBRUMsS0FBS1YsS0FBS1csSUFBSTtvREFBRWIsV0FBVTs7Ozs7OzhEQUNoRCw4REFBQ1E7O3NFQUNDLDhEQUFDTTs0REFBR2QsV0FBVTtzRUFBYUUsS0FBS1csSUFBSTs7Ozs7O3NFQUNwQyw4REFBQ0U7NERBQUVmLFdBQVU7c0VBQXlCRSxLQUFLYyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFaaERkLEtBQUtFLEVBQUU7Ozs7O3dCQXNCeEJULFNBQVNzQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQztLQTdDTXJDO0FBK0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xpc3QudHN4PzJjZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUsIERyb3BSZXN1bHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgRHJhZ2dhYmxlTGlzdFByb3BzIHtcbiAgaXRlbXM6IExpc3RJdGVtW107XG4gIHNldEl0ZW1zOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxMaXN0SXRlbVtdPj47XG59XG5cbmNvbnN0IERyYWdnYWJsZUxpc3Q6IFJlYWN0LkZDPERyYWdnYWJsZUxpc3RQcm9wcz4gPSAoeyBpdGVtcywgc2V0SXRlbXMgfSkgPT4ge1xuICBjb25zdCBoYW5kbGVPbkRyYWdFbmQgPSAocmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHJldHVybjtcblxuICAgIGNvbnN0IG5ld0l0ZW1zID0gQXJyYXkuZnJvbShpdGVtcyk7XG4gICAgY29uc3QgW3Jlb3JkZXJlZEl0ZW1dID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xuICAgIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlb3JkZXJlZEl0ZW0pO1xuXG4gICAgc2V0SXRlbXMobmV3SXRlbXMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZU9uRHJhZ0VuZH0+XG4gICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJhZ2dhYmxlLWxpc3RcIj5cbiAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgIDx1bCB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IGNsYXNzTmFtZT1cInAtMSBiZy1ncmF5LTEwMCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17aXRlbS5pZH0gZHJhZ2dhYmxlSWQ9e2l0ZW0uaWR9IGluZGV4PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgeyhwcm92aWRlZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzLnN0eWxlIH19IC8vIEVuc3VyZSBzdHlsZXMgYXJlIGFwcGxpZWRcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwidy0xNiBoLTE2IG1yLTQgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57aXRlbS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZSBwLTIgYmctZ3JheS0zMDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIE1vdmVcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICl9XG4gICAgICA8L0Ryb3BwYWJsZT5cbiAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZUxpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJEcmFnZ2FibGVMaXN0IiwiaXRlbXMiLCJzZXRJdGVtcyIsImhhbmRsZU9uRHJhZ0VuZCIsInJlc3VsdCIsImRlc3RpbmF0aW9uIiwibmV3SXRlbXMiLCJBcnJheSIsImZyb20iLCJyZW9yZGVyZWRJdGVtIiwic3BsaWNlIiwic291cmNlIiwiaW5kZXgiLCJvbkRyYWdFbmQiLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwidWwiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImRyYWdnYWJsZUlkIiwiaWQiLCJsaSIsImRyYWdnYWJsZVByb3BzIiwic3R5bGUiLCJkaXYiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJoMyIsInAiLCJkZXNjcmlwdGlvbiIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/List.tsx\n"));

/***/ })

});