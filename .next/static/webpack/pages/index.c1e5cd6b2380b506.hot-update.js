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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/provider */ \"./context/provider.js\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainPage_cover.module.css */ \"./components/component_handler/pages/mainPage/cover/mainPage_cover.module.css\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n/* harmony import */ var _BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomPlaylist */ \"./components/component_handler/pages/mainPage/cover/BottomPlaylist.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MainPage_Cover = ()=>{\n    _s();\n    const contextData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_provider__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(61); // initial width\n    const [componentWidth, setComponentWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"is open\", isOpen);\n    }, [\n        isOpen\n    ]);\n    // custom style\n    const style = {\n        background: \"white\",\n        width: \"\".concat(width, \"%\"),\n        height: \"98%\",\n        // cursor: 'col-resize',\n        // transition: \"width 1s ease-in-out\",\n        transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\",\n        zIndex: \"100\",\n        position: \"absolute\",\n        right: \"0px\",\n        margin: \"10px\",\n        borderRadius: \"40px\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"flex-start\",\n        color: \"black\"\n    };\n    // event handler for resizing\n    let firstWidth;\n    const openClickFunction = ()=>{\n        if (width === 61) {\n            setWidth(91.3);\n            setIsOpen(true);\n        } else {\n            setWidth(61);\n            setIsOpen(false);\n        }\n    };\n    const handleResize = (event)=>{\n        const newWidth = event.pageX;\n        if (!firstWidth) {\n            firstWidth = newWidth;\n        }\n        if (firstWidth > newWidth) {\n            setWidth(91.3);\n            console.log(\"left\");\n            setIsOpen(true);\n        } else if (firstWidth < newWidth) {\n            setWidth(61);\n            console.log(\"right\");\n            setIsOpen(false);\n        } else {\n            console.log(\"not\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isDragging);\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleResize);\n            document.addEventListener(\"mouseup\", ()=>setIsDragging(false));\n        } else {\n            document.removeEventListener(\"mousemove\", handleResize);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleResize);\n            document.removeEventListener(\"mouseup\", ()=>setIsDragging(false));\n        };\n    }, [\n        isDragging\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const width = componentRef.current.getBoundingClientRect().width;\n            setComponentWidth(width);\n        };\n        // Call the handleResize function when the component renders initially\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        // Cleanup function to remove the event listener when the component is unmounted\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(// <div className={styles.mainDiv}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: componentRef,\n        style: style,\n        onMouseDown: ()=>setIsDragging(true),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between py-4 px-10 w-full mt-[10px] h-[10%] \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faArrowLeft,\n                                className: \"cursor-pointer active:translate-x-5\",\n                                onClick: ()=>openClickFunction()\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_6___default().cover_header_options),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBell\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        className: \" opacity-40 mr-[-24px] \",\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faMagnifyingGlass\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"search\",\n                                        className: \" h-7 shadow-[0px_0px_5px_0px_#d8d8d8] border-none rounded-md text-black pl-7 bg-white mr-6 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full h-[90%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        //   style={{width: componentWidth}}\n                        style: isOpen ? {\n                            width: \"65%\",\n                            transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\"\n                        } : {\n                            width: \"100%\",\n                            transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\"\n                        },\n                        className: \"duration-1000 ease-in-out h-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" h-[30%] bg-blue-200 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 155,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" w-full px-10 flex items-center justify-center gap-4 h-[70%] \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        minWidth: componentWidth * 0.9\n                                    },\n                                    className: \"h-full\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" w-full flex justify-between items-end h-[10%] border-b border-gray-300 \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: \"Trending right now\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                                    lineNumber: 171,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \" cursor-pointer \",\n                                                    children: \"see all\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                                    lineNumber: 172,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                            lineNumber: 170,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            playList: contextData.playList\n                                        }, void 0, false, {\n                                            fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                            lineNumber: 175,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                    lineNumber: 169,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 168,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: isOpen ? {\n                            opacity: 1,\n                            width: \"35%\",\n                            transition: \"all 100ms ease-in-out\"\n                        } : {\n                            opacity: 0,\n                            width: 0,\n                            transition: \"all 1000ms ease-in-out \"\n                        },\n                        className: \"bg-green-300 w-0 h-full rounded-br-3xl flex justify-center items-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 180,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, undefined));\n};\n_s(MainPage_Cover, \"Vtt/BbYiw/E/vyy1ekLGtqKzM9U=\");\n_c = MainPage_Cover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage_Cover);\nvar _c;\n$RefreshReg$(_c, \"MainPage_Cover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDa0M7QUFDQTtBQUNnQjtBQUNnQztBQUMzQjtBQUN4QjtBQUU5QyxNQUFNZSxpQkFBaUIsSUFBTTs7SUFDM0IsTUFBTUMsY0FBY2YsaURBQVVBLENBQUNLLDBEQUFXQTtJQUUxQyxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUNsRCxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUMsS0FBSyxnQkFBZ0I7SUFDeEQsTUFBTSxDQUFDZ0IsZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1rQixlQUFlbkIsNkNBQU1BLENBQUMsSUFBSTtJQUNoQyxNQUFNLENBQUNvQixRQUFRQyxVQUFVLEdBQUdwQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2R3QixRQUFRQyxHQUFHLENBQUMsV0FBV0g7SUFDekIsR0FBRztRQUFDQTtLQUFPO0lBRVgsZUFBZTtJQUNmLE1BQU1JLFFBQVE7UUFDWkMsWUFBWTtRQUNaVixPQUFPLEdBQVMsT0FBTkEsT0FBTTtRQUNoQlcsUUFBUTtRQUNSLHdCQUF3QjtRQUN4QixzQ0FBc0M7UUFDdENDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxjQUFjO1FBQ2RDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLE9BQU87SUFDVDtJQUVBLDZCQUE2QjtJQUM3QixJQUFJQztJQUVKLE1BQU1DLG9CQUFvQixJQUFJO1FBQzFCLElBQUd2QixVQUFVLElBQUc7WUFDWkMsU0FBUztZQUNUSyxVQUFVLElBQUk7UUFDaEIsT0FBSztZQUNETCxTQUFTO1lBQ1RLLFVBQVUsS0FBSztRQUNyQixD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S3BELDhEQUFDYjt3QkFDQ3pCLE9BQ0VKLFNBQ0k7NEJBQUUyQyxTQUFTOzRCQUFHaEQsT0FBTzs0QkFBT1ksWUFBWTt3QkFBd0IsSUFDaEU7NEJBQUVvQyxTQUFTOzRCQUFHaEQsT0FBTzs0QkFBR1ksWUFBWTt3QkFBMEIsQ0FBQzt3QkFFckV5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEI7R0FoTE16QztLQUFBQTtBQWlMTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzPzM0NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvcHJvdmlkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWFpblBhZ2VfY292ZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFBcnJvd0xlZnQsIGZhQXJyb3dSaWdodCwgZmFNYWduaWZ5aW5nR2xhc3MgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUJlbGwsIGZhSGVhcnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmltcG9ydCBCb3R0b21QbGF5bGlzdCBmcm9tIFwiLi9Cb3R0b21QbGF5bGlzdFwiO1xuXG5jb25zdCBNYWluUGFnZV9Db3ZlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dERhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoNjEpOyAvLyBpbml0aWFsIHdpZHRoXG4gIGNvbnN0IFtjb21wb25lbnRXaWR0aCwgc2V0Q29tcG9uZW50V2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaXMgb3BlblwiLCBpc09wZW4pO1xuICB9LCBbaXNPcGVuXSk7XG5cbiAgLy8gY3VzdG9tIHN0eWxlXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICB3aWR0aDogYCR7d2lkdGh9JWAsXG4gICAgaGVpZ2h0OiBcIjk4JVwiLFxuICAgIC8vIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxuICAgIC8vIHRyYW5zaXRpb246IFwid2lkdGggMXMgZWFzZS1pbi1vdXRcIixcbiAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDFzIGN1YmljLWJlemllcigwLjY1LCAtMC4xNCwgMC4yNCwgMS4wNikgMHNcIixcbiAgICB6SW5kZXg6IFwiMTAwXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICByaWdodDogXCIwcHhcIixcbiAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0MHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICB9O1xuXG4gIC8vIGV2ZW50IGhhbmRsZXIgZm9yIHJlc2l6aW5nXG4gIGxldCBmaXJzdFdpZHRoO1xuXG4gIGNvbnN0IG9wZW5DbGlja0Z1bmN0aW9uID0gKCk9PntcbiAgICAgIGlmKHdpZHRoID09PSA2MSl7XG4gICAgICAgICAgc2V0V2lkdGgoOTEuMylcbiAgICAgICAgICBzZXRJc09wZW4odHJ1ZSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXRXaWR0aCg2MSlcbiAgICAgICAgICAgIHNldElzT3BlbihmYWxzZSlcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1dpZHRoID0gZXZlbnQucGFnZVg7XG4gICAgaWYgKCFmaXJzdFdpZHRoKSB7XG4gICAgICBmaXJzdFdpZHRoID0gbmV3V2lkdGg7XG4gICAgfVxuICAgIGlmIChmaXJzdFdpZHRoID4gbmV3V2lkdGgpIHtcbiAgICAgIHNldFdpZHRoKDkxLjMpO1xuICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpO1xuICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RXaWR0aCA8IG5ld1dpZHRoKSB7XG4gICAgICBzZXRXaWR0aCg2MSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpO1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3RcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXNEcmFnZ2luZyk7XG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHNldElzRHJhZ2dpbmcoZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKSk7XG4gICAgfTtcbiAgfSwgW2lzRHJhZ2dpbmddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gY29tcG9uZW50UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICBzZXRDb21wb25lbnRXaWR0aCh3aWR0aCk7XG4gICAgfTtcblxuICAgIC8vIENhbGwgdGhlIGhhbmRsZVJlc2l6ZSBmdW5jdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgcmVuZGVycyBpbml0aWFsbHlcbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5EaXZ9PlxuXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb21wb25lbnRSZWZ9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBvbk1vdXNlRG93bj17KCkgPT4gc2V0SXNEcmFnZ2luZyh0cnVlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB5LTQgcHgtMTAgdy1mdWxsIG10LVsxMHB4XSBoLVsxMCVdIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUFycm93TGVmdH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYWN0aXZlOnRyYW5zbGF0ZS14LTVcIiBvbkNsaWNrPXsoKT0+b3BlbkNsaWNrRnVuY3Rpb24oKX0gLz5cbiAgICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2hlYWRlcl9vcHRpb25zfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmVsbH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgb3BhY2l0eS00MCBtci1bLTI0cHhdIFwiXG4gICAgICAgICAgICAgIGljb249e2ZhTWFnbmlmeWluZ0dsYXNzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTcgc2hhZG93LVswcHhfMHB4XzVweF8wcHhfI2Q4ZDhkOF0gYm9yZGVyLW5vbmUgcm91bmRlZC1tZCB0ZXh0LWJsYWNrIHBsLTcgIGJnLXdoaXRlIG1yLTYgXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtWzkwJV1cIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIC8vICAgc3R5bGU9e3t3aWR0aDogY29tcG9uZW50V2lkdGh9fVxuICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgIGlzT3BlblxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjY1JVwiLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aCAxcyBjdWJpYy1iZXppZXIoMC42NSwgLTAuMTQsIDAuMjQsIDEuMDYpIDBzXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGggMXMgY3ViaWMtYmV6aWVyKDAuNjUsIC0wLjE0LCAwLjI0LCAxLjA2KSAwc1wiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dCBoLWZ1bGxcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMzAlXSBiZy1ibHVlLTIwMCBcIj48L2Rpdj5cbiAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKGJveFdpZHRoKX0gKi99XG4gICAgICAgICAgey8qIDxTdGFnZVxuICAgICAgICAgICAgICAgIHdpZHRoPXtib3hXaWR0aCAqIDAuNX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAqIDAuNX1cbiAgICAgICAgICAgICAgICBvbldoZWVsPXtoYW5kbGVXaGVlbH1cbiAgICAgICAgICAgICAgICBzY2FsZVg9e3N0YWdlLnN0YWdlU2NhbGV9XG4gICAgICAgICAgICAgICAgc2NhbGVZPXtzdGFnZS5zdGFnZVNjYWxlfVxuICAgICAgICAgICAgICAgIHg9e3N0YWdlLnN0YWdlWH1cbiAgICAgICAgICAgICAgICB5PXtzdGFnZS5zdGFnZVl9XG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICAvPiAqL31cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBweC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBoLVs3MCVdIFwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtaW5XaWR0aDogY29tcG9uZW50V2lkdGggKiAwLjkgfX0gY2xhc3NOYW1lPVwiaC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1lbmQgaC1bMTAlXSBib3JkZXItYiBib3JkZXItZ3JheS0zMDAgXCI+XG4gICAgICAgICAgICAgICAgPGgzPlRyZW5kaW5nIHJpZ2h0IG5vdzwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIFwiPnNlZSBhbGw8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5fT4gKi99XG4gICAgICAgICAgICAgIDxCb3R0b21QbGF5bGlzdCBwbGF5TGlzdD17Y29udGV4dERhdGEucGxheUxpc3R9IC8+XG4gICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgICAgPyB7IG9wYWNpdHk6IDEsIHdpZHRoOiBcIjM1JVwiLCB0cmFuc2l0aW9uOiBcImFsbCAxMDBtcyBlYXNlLWluLW91dFwiIH1cbiAgICAgICAgICAgICAgOiB7IG9wYWNpdHk6IDAsIHdpZHRoOiAwLCB0cmFuc2l0aW9uOiBcImFsbCAxMDAwbXMgZWFzZS1pbi1vdXQgXCIgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi0zMDAgdy0wIGgtZnVsbCByb3VuZGVkLWJyLTN4bCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIC8vIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlX0NvdmVyO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0Iiwic3R5bGVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFBcnJvd0xlZnQiLCJmYUFycm93UmlnaHQiLCJmYU1hZ25pZnlpbmdHbGFzcyIsImZhQmVsbCIsImZhSGVhcnQiLCJCb3R0b21QbGF5bGlzdCIsIk1haW5QYWdlX0NvdmVyIiwiY29udGV4dERhdGEiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIndpZHRoIiwic2V0V2lkdGgiLCJjb21wb25lbnRXaWR0aCIsInNldENvbXBvbmVudFdpZHRoIiwiY29tcG9uZW50UmVmIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsInRyYW5zaXRpb24iLCJ6SW5kZXgiLCJwb3NpdGlvbiIsInJpZ2h0IiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJmaXJzdFdpZHRoIiwib3BlbkNsaWNrRnVuY3Rpb24iLCJoYW5kbGVSZXNpemUiLCJldmVudCIsIm5ld1dpZHRoIiwicGFnZVgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsImRpdiIsInJlZiIsIm9uTW91c2VEb3duIiwiY2xhc3NOYW1lIiwiaWNvbiIsIm9uQ2xpY2siLCJoMSIsImNvdmVyX2hlYWRlcl9vcHRpb25zIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm1pbldpZHRoIiwiaDMiLCJwIiwicGxheUxpc3QiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/component_handler/pages/mainPage/cover/index.js\n"));

/***/ })

});