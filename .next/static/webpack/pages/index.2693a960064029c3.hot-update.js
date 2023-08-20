"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/component_handler/pages/mainPage/cover/index.js":
/*!********************************************************************!*\
  !*** ./components/component_handler/pages/mainPage/cover/index.js ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/provider */ \"./context/provider.js\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainPage_cover.module.css */ \"./components/component_handler/pages/mainPage/cover/mainPage_cover.module.css\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n/* harmony import */ var _BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomPlaylist */ \"./components/component_handler/pages/mainPage/cover/BottomPlaylist.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MainPage_Cover = ()=>{\n    _s();\n    const contextData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_provider__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(61); // initial width\n    const [componentWidth, setComponentWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"is open\", isOpen);\n    }, [\n        isOpen\n    ]);\n    // custom style\n    const style = {\n        background: \"white\",\n        width: \"\".concat(width, \"%\"),\n        height: \"98%\",\n        // cursor: 'col-resize',\n        // transition: \"width 1s ease-in-out\",\n        transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\",\n        zIndex: \"100\",\n        position: \"absolute\",\n        right: \"0px\",\n        margin: \"10px\",\n        borderRadius: \"40px\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"flex-start\",\n        color: \"black\"\n    };\n    // event handler for resizing\n    let firstWidth;\n    const handleResize = (event)=>{\n        const newWidth = event.pageX;\n        if (!firstWidth) {\n            firstWidth = newWidth;\n        }\n        if (firstWidth > newWidth) {\n            setWidth(91.3);\n            console.log(\"left\");\n            setIsOpen(true);\n        } else if (firstWidth < newWidth) {\n            setWidth(61);\n            console.log(\"right\");\n            setIsOpen(false);\n        } else {\n            console.log(\"not\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isDragging);\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleResize);\n            document.addEventListener(\"mouseup\", ()=>setIsDragging(false));\n        } else {\n            document.removeEventListener(\"mousemove\", handleResize);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleResize);\n            document.removeEventListener(\"mouseup\", ()=>setIsDragging(false));\n        };\n    }, [\n        isDragging\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const width = componentRef.current.getBoundingClientRect().width;\n            setComponentWidth(width);\n        };\n        // Call the handleResize function when the component renders initially\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        // Cleanup function to remove the event listener when the component is unmounted\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(// <div className={styles.mainDiv}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: componentRef,\n        style: style,\n        onMouseDown: ()=>setIsDragging(true),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between py-4 px-10 w-full mt-[10px] h-[10%] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header_options),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBell\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        className: \" opacity-40 mr-[-24px] \",\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMagnifyingGlass\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"search\",\n                                        className: \" h-7 shadow-[0px_0px_5px_0px_#d8d8d8] border-none rounded-md text-black pl-7 bg-white mr-6 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full h-[90%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        //   style={{width: componentWidth}}\n                        style: isOpen ? {\n                            width: \"65%\",\n                            transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\"\n                        } : {\n                            width: \"100%\",\n                            transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\"\n                        },\n                        className: \"duration-1000 ease-in-out h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" h-[30%] bg-blue-200 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" w-full px-10 flex items-center justify-center gap-4 h-[70%] \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        minWidth: componentWidth * 0.9\n                                    },\n                                    className: \"h-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" w-full flex justify-between items-end h-[10%] border-b border-gray-300 \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Trending right now\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                                    lineNumber: 150,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" cursor-pointer \",\n                                                    children: \"see all\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                                    lineNumber: 151,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                            lineNumber: 149,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            playList: contextData.playList\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                            lineNumber: 154,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                    lineNumber: 145,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 144,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: isOpen ? {\n                            opacity: 1,\n                            width: \"35%\",\n                            transition: \"all 0s ease-in-out\"\n                        } : {\n                            opacity: 0,\n                            width: 0,\n                            transition: \"all 2s ease-in-out\"\n                        },\n                        className: \"bg-green-300 w-0 h-full rounded-br-3xl flex justify-center items-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined));\n};\n_s(MainPage_Cover, \"Vtt/BbYiw/E/vyy1ekLGtqKzM9U=\");\n_c = MainPage_Cover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage_Cover);\nvar _c;\n$RefreshReg$(_c, \"MainPage_Cover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDa0M7QUFDQTtBQUNnQjtBQUNLO0FBQ0E7QUFDeEI7QUFFOUMsTUFBTWEsaUJBQWlCLElBQU07O0lBQzNCLE1BQU1DLGNBQWNiLGlEQUFVQSxDQUFDSywwREFBV0E7SUFFMUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUssZ0JBQWdCO0lBQ3hELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTWdCLGVBQWVqQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDLE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUNILGdEQUFTQSxDQUFDLElBQU07UUFDZHNCLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSDtJQUN6QixHQUFHO1FBQUNBO0tBQU87SUFFWCxlQUFlO0lBQ2YsTUFBTUksUUFBUTtRQUNaQyxZQUFZO1FBQ1pWLE9BQU8sR0FBUyxPQUFOQSxPQUFNO1FBQ2hCVyxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0Q0MsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsT0FBTztJQUNUO0lBRUEsNkJBQTZCO0lBQzdCLElBQUlDO0lBQ0osTUFBTUMsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLE1BQU1DLFdBQVdELE1BQU1FLEtBQUs7UUFDNUIsSUFBSSxDQUFDSixZQUFZO1lBQ2ZBLGFBQWFHO1FBQ2YsQ0FBQztRQUNELElBQUlILGFBQWFHLFVBQVU7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dHMvY29tcG9uZW50X2hhbmRsZXIvcGFnZXMvbWFpblBhZ2UvY292ZXIvaW5kZXguanM/MzQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9wcm92aWRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tYWluUGFnZV9jb3Zlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYU1hZ25pZnlpbmdHbGFzcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhQmVsbCwgZmFIZWFydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xuaW1wb3J0IEJvdHRvbVBsYXlsaXN0IGZyb20gXCIuL0JvdHRvbVBsYXlsaXN0XCI7XG5cbmNvbnN0IE1haW5QYWdlX0NvdmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0RGF0YSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSg2MSk7IC8vIGluaXRpYWwgd2lkdGhcbiAgY29uc3QgW2NvbXBvbmVudFdpZHRoLCBzZXRDb21wb25lbnRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpcyBvcGVuXCIsIGlzT3Blbik7XG4gIH0sIFtpc09wZW5dKTtcblxuICAvLyBjdXN0b20gc3R5bGVcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICBoZWlnaHQ6IFwiOTglXCIsXG4gICAgLy8gY3Vyc29yOiAnY29sLXJlc2l6ZScsXG4gICAgLy8gdHJhbnNpdGlvbjogXCJ3aWR0aCAxcyBlYXNlLWluLW91dFwiLFxuICAgIHRyYW5zaXRpb246IFwid2lkdGggMXMgY3ViaWMtYmV6aWVyKDAuNjUsIC0wLjE0LCAwLjI0LCAxLjA2KSAwc1wiLFxuICAgIHpJbmRleDogXCIxMDBcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHJpZ2h0OiBcIjBweFwiLFxuICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gIH07XG5cbiAgLy8gZXZlbnQgaGFuZGxlciBmb3IgcmVzaXppbmdcbiAgbGV0IGZpcnN0V2lkdGg7XG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1dpZHRoID0gZXZlbnQucGFnZVg7XG4gICAgaWYgKCFmaXJzdFdpZHRoKSB7XG4gICAgICBmaXJzdFdpZHRoID0gbmV3V2lkdGg7XG4gICAgfVxuICAgIGlmIChmaXJzdFdpZHRoID4gbmV3V2lkdGgpIHtcbiAgICAgIHNldFdpZHRoKDkxLjMpO1xuICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpO1xuICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RXaWR0aCA8IG5ld1dpZHRoKSB7XG4gICAgICBzZXRXaWR0aCg2MSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpO1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3RcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXNEcmFnZ2luZyk7XG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHNldElzRHJhZ2dpbmcoZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKSk7XG4gICAgfTtcbiAgfSwgW2lzRHJhZ2dpbmddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gY29tcG9uZW50UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICBzZXRDb21wb25lbnRXaWR0aCh3aWR0aCk7XG4gICAgfTtcblxuICAgIC8vIENhbGwgdGhlIGhhbmRsZVJlc2l6ZSBmdW5jdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgcmVuZGVycyBpbml0aWFsbHlcbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5EaXZ9PlxuXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb21wb25lbnRSZWZ9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBvbk1vdXNlRG93bj17KCkgPT4gc2V0SXNEcmFnZ2luZyh0cnVlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB5LTQgcHgtMTAgdy1mdWxsIG10LVsxMHB4XSBoLVsxMCVdIFwiPlxuICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfaGVhZGVyX29wdGlvbnN9PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCZWxsfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBvcGFjaXR5LTQwIG1yLVstMjRweF0gXCJcbiAgICAgICAgICAgICAgaWNvbj17ZmFNYWduaWZ5aW5nR2xhc3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNyBzaGFkb3ctWzBweF8wcHhfNXB4XzBweF8jZDhkOGQ4XSBib3JkZXItbm9uZSByb3VuZGVkLW1kIHRleHQtYmxhY2sgcGwtNyAgYmctd2hpdGUgbXItNiBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC1bOTAlXVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgIC8vICAgc3R5bGU9e3t3aWR0aDogY29tcG9uZW50V2lkdGh9fVxuICAgICAgICBzdHlsZT17aXNPcGVuP3t3aWR0aDpcIjY1JVwiLCB0cmFuc2l0aW9uOiBcIndpZHRoIDFzIGN1YmljLWJlemllcigwLjY1LCAtMC4xNCwgMC4yNCwgMS4wNikgMHNcIn06e3dpZHRoOlwiMTAwJVwiLCB0cmFuc2l0aW9uOiBcIndpZHRoIDFzIGN1YmljLWJlemllcigwLjY1LCAtMC4xNCwgMC4yNCwgMS4wNikgMHNcIn19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCBoLWZ1bGxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtWzMwJV0gYmctYmx1ZS0yMDAgXCJcbiAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhib3hXaWR0aCl9ICovfVxuICAgICAgICAgIHsvKiA8U3RhZ2VcbiAgICAgICAgICAgICAgICB3aWR0aD17Ym94V2lkdGggKiAwLjV9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgKiAwLjV9XG4gICAgICAgICAgICAgICAgb25XaGVlbD17aGFuZGxlV2hlZWx9XG4gICAgICAgICAgICAgICAgc2NhbGVYPXtzdGFnZS5zdGFnZVNjYWxlfVxuICAgICAgICAgICAgICAgIHNjYWxlWT17c3RhZ2Uuc3RhZ2VTY2FsZX1cbiAgICAgICAgICAgICAgICB4PXtzdGFnZS5zdGFnZVh9XG4gICAgICAgICAgICAgICAgeT17c3RhZ2Uuc3RhZ2VZfVxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgLz4gKi99XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgcHgtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgaC1bNzAlXSBcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IGNvbXBvbmVudFdpZHRoICogMC45IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgaC1bMTAlXSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgXCI+XG4gICAgICAgICAgICAgICAgPGgzPlRyZW5kaW5nIHJpZ2h0IG5vdzwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIFwiPnNlZSBhbGw8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5fT4gKi99XG4gICAgICAgICAgICAgIDxCb3R0b21QbGF5bGlzdCBwbGF5TGlzdD17Y29udGV4dERhdGEucGxheUxpc3R9IC8+XG4gICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgICAgPyB7IG9wYWNpdHk6IDEsIHdpZHRoOiBcIjM1JVwiLCB0cmFuc2l0aW9uOlwiYWxsIDBzIGVhc2UtaW4tb3V0XCIgIH1cbiAgICAgICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHdpZHRoOiAwLCB0cmFuc2l0aW9uOlwiYWxsIDJzIGVhc2UtaW4tb3V0XCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgdy0wIGgtZnVsbCByb3VuZGVkLWJyLTN4bCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIC8vIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlX0NvdmVyO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0Iiwic3R5bGVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNYWduaWZ5aW5nR2xhc3MiLCJmYUJlbGwiLCJmYUhlYXJ0IiwiQm90dG9tUGxheWxpc3QiLCJNYWluUGFnZV9Db3ZlciIsImNvbnRleHREYXRhIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJ3aWR0aCIsInNldFdpZHRoIiwiY29tcG9uZW50V2lkdGgiLCJzZXRDb21wb25lbnRXaWR0aCIsImNvbXBvbmVudFJlZiIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiekluZGV4IiwicG9zaXRpb24iLCJyaWdodCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiZmlyc3RXaWR0aCIsImhhbmRsZVJlc2l6ZSIsImV2ZW50IiwibmV3V2lkdGgiLCJwYWdlWCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwiZGl2IiwicmVmIiwib25Nb3VzZURvd24iLCJjbGFzc05hbWUiLCJoMSIsImNvdmVyX2hlYWRlcl9vcHRpb25zIiwiaWNvbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJtaW5XaWR0aCIsImgzIiwicCIsInBsYXlMaXN0Iiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/component_handler/pages/mainPage/cover/index.js\n"));

/***/ })

});