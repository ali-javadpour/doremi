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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/provider */ \"./context/provider.js\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainPage_cover.module.css */ \"./components/component_handler/pages/mainPage/cover/mainPage_cover.module.css\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n/* harmony import */ var _BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomPlaylist */ \"./components/component_handler/pages/mainPage/cover/BottomPlaylist.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MainPage_Cover = ()=>{\n    _s();\n    const contextData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_provider__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(61); // initial width\n    const [componentWidth, setComponentWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"is open\", isOpen);\n    }, [\n        isOpen\n    ]);\n    // custom style\n    const style = {\n        background: \"white\",\n        width: \"\".concat(width, \"%\"),\n        height: \"98%\",\n        // cursor: 'col-resize',\n        // transition: \"width 1s ease-in-out\",\n        transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\",\n        zIndex: \"100\",\n        position: \"absolute\",\n        right: \"0px\",\n        margin: \"10px\",\n        borderRadius: \"40px\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"flex-start\",\n        color: \"black\"\n    };\n    // event handler for resizing\n    let firstWidth;\n    const handleResize = (event)=>{\n        const newWidth = event.pageX;\n        if (!firstWidth) {\n            firstWidth = newWidth;\n        }\n        if (firstWidth > newWidth) {\n            setWidth(91.3);\n            console.log(\"left\");\n            setIsOpen(true);\n        } else if (firstWidth < newWidth) {\n            setWidth(61);\n            console.log(\"right\");\n            setIsOpen(false);\n        } else {\n            console.log(\"not\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isDragging);\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleResize);\n            document.addEventListener(\"mouseup\", ()=>setIsDragging(false));\n        } else {\n            document.removeEventListener(\"mousemove\", handleResize);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleResize);\n            document.removeEventListener(\"mouseup\", ()=>setIsDragging(false));\n        };\n    }, [\n        isDragging\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const width = componentRef.current.getBoundingClientRect().width;\n            setComponentWidth(width);\n        };\n        // Call the handleResize function when the component renders initially\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        // Cleanup function to remove the event listener when the component is unmounted\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(// <div className={styles.mainDiv}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: componentRef,\n        style: style,\n        onMouseDown: ()=>setIsDragging(true),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between py-4 px-10 w-full mt-[10px] h-[10%] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header_options),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBell\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        className: \" opacity-40 mr-[-24px] \",\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMagnifyingGlass\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"search\",\n                                        className: \" h-7 shadow-[0px_0px_5px_0px_#d8d8d8] border-none rounded-md text-black pl-7 bg-white mr-6 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 116,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full h-[90%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: isOpen ? {\n                            width: \"65%\"\n                        } : {\n                            width: \"100%\"\n                        },\n                        className: \"duration-1000 ease-in-out\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    width: componentWidth * 0.9\n                                },\n                                className: \" h-[230px] min-h-[200px] bg-blue-200 mx-auto \"\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" w-full px-10 flex items-center gap-4 overflow-y-auto \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        minWidth: componentWidth * 0.9\n                                    },\n                                    className: \"h-full overflow-y-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_bottomPlaylist_header),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Trending right now\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                                    lineNumber: 147,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" cursor-pointer \",\n                                                    children: \"see all\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                                    lineNumber: 148,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                            lineNumber: 146,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            playList: contextData.playList\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                            lineNumber: 151,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                    lineNumber: 142,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 141,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: isOpen ? {\n                            opacity: 1,\n                            width: \"35%\"\n                        } : {\n                            opacity: 0,\n                            width: 0,\n                            height: \"60%\"\n                        },\n                        className: \"bg-green-300 w-[35%] h-[90%] transition-all delay-400 duration-1000 ease-in-out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined));\n};\n_s(MainPage_Cover, \"Vtt/BbYiw/E/vyy1ekLGtqKzM9U=\");\n_c = MainPage_Cover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage_Cover);\nvar _c;\n$RefreshReg$(_c, \"MainPage_Cover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDa0M7QUFDQTtBQUNnQjtBQUNLO0FBQ0E7QUFDeEI7QUFFOUMsTUFBTWEsaUJBQWlCLElBQU07O0lBQzNCLE1BQU1DLGNBQWNiLGlEQUFVQSxDQUFDSywwREFBV0E7SUFFMUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUssZ0JBQWdCO0lBQ3hELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTWdCLGVBQWVqQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDLE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUNILGdEQUFTQSxDQUFDLElBQU07UUFDZHNCLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSDtJQUN6QixHQUFHO1FBQUNBO0tBQU87SUFFWCxlQUFlO0lBQ2YsTUFBTUksUUFBUTtRQUNaQyxZQUFZO1FBQ1pWLE9BQU8sR0FBUyxPQUFOQSxPQUFNO1FBQ2hCVyxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0Q0MsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsT0FBTztJQUNUO0lBRUEsNkJBQTZCO0lBQzdCLElBQUlDO0lBQ0osTUFBTUMsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLE1BQU1DLFdBQVdELE1BQU1FLEtBQUs7UUFDNUIsSUFBSSxDQUFDSixZQUFZO1lBQ2ZBLGFBQWFHO1FBQ2YsQ0FBQztRQUNELElBQUlILGFBQWFHLFVBQVU7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L2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzPzM0NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvcHJvdmlkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWFpblBhZ2VfY292ZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFNYWduaWZ5aW5nR2xhc3MgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUJlbGwsIGZhSGVhcnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmltcG9ydCBCb3R0b21QbGF5bGlzdCBmcm9tIFwiLi9Cb3R0b21QbGF5bGlzdFwiO1xuXG5jb25zdCBNYWluUGFnZV9Db3ZlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dERhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoNjEpOyAvLyBpbml0aWFsIHdpZHRoXG4gIGNvbnN0IFtjb21wb25lbnRXaWR0aCwgc2V0Q29tcG9uZW50V2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaXMgb3BlblwiLCBpc09wZW4pO1xuICB9LCBbaXNPcGVuXSk7XG5cbiAgLy8gY3VzdG9tIHN0eWxlXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICB3aWR0aDogYCR7d2lkdGh9JWAsXG4gICAgaGVpZ2h0OiBcIjk4JVwiLFxuICAgIC8vIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxuICAgIC8vIHRyYW5zaXRpb246IFwid2lkdGggMXMgZWFzZS1pbi1vdXRcIixcbiAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDFzIGN1YmljLWJlemllcigwLjY1LCAtMC4xNCwgMC4yNCwgMS4wNikgMHNcIixcbiAgICB6SW5kZXg6IFwiMTAwXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICByaWdodDogXCIwcHhcIixcbiAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0MHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICB9O1xuXG4gIC8vIGV2ZW50IGhhbmRsZXIgZm9yIHJlc2l6aW5nXG4gIGxldCBmaXJzdFdpZHRoO1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuZXdXaWR0aCA9IGV2ZW50LnBhZ2VYO1xuICAgIGlmICghZmlyc3RXaWR0aCkge1xuICAgICAgZmlyc3RXaWR0aCA9IG5ld1dpZHRoO1xuICAgIH1cbiAgICBpZiAoZmlyc3RXaWR0aCA+IG5ld1dpZHRoKSB7XG4gICAgICBzZXRXaWR0aCg5MS4zKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibGVmdFwiKTtcbiAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0V2lkdGggPCBuZXdXaWR0aCkge1xuICAgICAgc2V0V2lkdGgoNjEpO1xuICAgICAgY29uc29sZS5sb2coXCJyaWdodFwiKTtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm90XCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlzRHJhZ2dpbmcpO1xuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gc2V0SXNEcmFnZ2luZyhmYWxzZSkpO1xuICAgIH07XG4gIH0sIFtpc0RyYWdnaW5nXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IGNvbXBvbmVudFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgc2V0Q29tcG9uZW50V2lkdGgod2lkdGgpO1xuICAgIH07XG5cbiAgICAvLyBDYWxsIHRoZSBoYW5kbGVSZXNpemUgZnVuY3Rpb24gd2hlbiB0aGUgY29tcG9uZW50IHJlbmRlcnMgaW5pdGlhbGx5XG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgIC8vIENsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluRGl2fT5cblxuICAgIDxkaXZcbiAgICAgIHJlZj17Y29tcG9uZW50UmVmfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgb25Nb3VzZURvd249eygpID0+IHNldElzRHJhZ2dpbmcodHJ1ZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweS00IHB4LTEwIHctZnVsbCBtdC1bMTBweF0gaC1bMTAlXSBcIj5cbiAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2hlYWRlcl9vcHRpb25zfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmVsbH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgb3BhY2l0eS00MCBtci1bLTI0cHhdIFwiXG4gICAgICAgICAgICAgIGljb249e2ZhTWFnbmlmeWluZ0dsYXNzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTcgc2hhZG93LVswcHhfMHB4XzVweF8wcHhfI2Q4ZDhkOF0gYm9yZGVyLW5vbmUgcm91bmRlZC1tZCB0ZXh0LWJsYWNrIHBsLTcgIGJnLXdoaXRlIG1yLTYgXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtWzkwJV1cIiA+XG4gICAgICAgIDxkaXYgc3R5bGU9e2lzT3Blbj97d2lkdGg6XCI2NSVcIn06e3dpZHRoOlwiMTAwJVwifX0gY2xhc3NOYW1lPVwiZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dFwiID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogY29tcG9uZW50V2lkdGggKiAwLjkgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLVsyMzBweF0gbWluLWgtWzIwMHB4XSBiZy1ibHVlLTIwMCBteC1hdXRvIFwiXG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coYm94V2lkdGgpfSAqL31cbiAgICAgICAgICB7LyogPFN0YWdlXG4gICAgICAgICAgICAgICAgd2lkdGg9e2JveFdpZHRoICogMC41fVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0ICogMC41fVxuICAgICAgICAgICAgICAgIG9uV2hlZWw9e2hhbmRsZVdoZWVsfVxuICAgICAgICAgICAgICAgIHNjYWxlWD17c3RhZ2Uuc3RhZ2VTY2FsZX1cbiAgICAgICAgICAgICAgICBzY2FsZVk9e3N0YWdlLnN0YWdlU2NhbGV9XG4gICAgICAgICAgICAgICAgeD17c3RhZ2Uuc3RhZ2VYfVxuICAgICAgICAgICAgICAgIHk9e3N0YWdlLnN0YWdlWX1cbiAgICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIHB4LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IG92ZXJmbG93LXktYXV0byAgXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb21wb25lbnRXaWR0aCAqIDAuOSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgb3ZlcmZsb3cteS1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9oZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxoMz5UcmVuZGluZyByaWdodCBub3c8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBcIj5zZWUgYWxsPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keX0+ICovfVxuICAgICAgICAgICAgICA8Qm90dG9tUGxheWxpc3QgcGxheUxpc3Q9e2NvbnRleHREYXRhLnBsYXlMaXN0fSAvPlxuICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgICAgICAgID8geyBvcGFjaXR5OiAxLCB3aWR0aDogXCIzNSVcIiB9XG4gICAgICAgICAgICAgICAgICA6IHsgb3BhY2l0eTogMCwgd2lkdGg6IDAsIGhlaWdodDogXCI2MCVcIiB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tMzAwIHctWzM1JV0gaC1bOTAlXSB0cmFuc2l0aW9uLWFsbCBkZWxheS00MDAgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZV9Db3ZlcjtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTWFnbmlmeWluZ0dsYXNzIiwiZmFCZWxsIiwiZmFIZWFydCIsIkJvdHRvbVBsYXlsaXN0IiwiTWFpblBhZ2VfQ292ZXIiLCJjb250ZXh0RGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwid2lkdGgiLCJzZXRXaWR0aCIsImNvbXBvbmVudFdpZHRoIiwic2V0Q29tcG9uZW50V2lkdGgiLCJjb21wb25lbnRSZWYiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInpJbmRleCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJjb2xvciIsImZpcnN0V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJldmVudCIsIm5ld1dpZHRoIiwicGFnZVgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsImRpdiIsInJlZiIsIm9uTW91c2VEb3duIiwiY2xhc3NOYW1lIiwiaDEiLCJjb3Zlcl9oZWFkZXJfb3B0aW9ucyIsImljb24iLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwibWluV2lkdGgiLCJjb3Zlcl9ib3R0b21QbGF5bGlzdF9oZWFkZXIiLCJoMyIsInAiLCJwbGF5TGlzdCIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/component_handler/pages/mainPage/cover/index.js\n"));

/***/ })

});