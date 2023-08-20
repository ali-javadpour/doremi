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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/provider */ \"./context/provider.js\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainPage_cover.module.css */ \"./components/component_handler/pages/mainPage/cover/mainPage_cover.module.css\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n/* harmony import */ var _BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomPlaylist */ \"./components/component_handler/pages/mainPage/cover/BottomPlaylist.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MainPage_Cover = ()=>{\n    _s();\n    const contextData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_provider__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(61); // initial width\n    const [componentWidth, setComponentWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"is open\", isOpen);\n    }, [\n        isOpen\n    ]);\n    // custom style\n    const style = {\n        background: \"white\",\n        width: \"\".concat(width, \"%\"),\n        height: \"98%\",\n        // cursor: 'col-resize',\n        // transition: \"width 1s ease-in-out\",\n        transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\",\n        zIndex: \"100\",\n        position: \"absolute\",\n        right: \"0px\",\n        margin: \"10px\",\n        borderRadius: \"40px\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"flex-start\",\n        color: \"black\"\n    };\n    // event handler for resizing\n    let firstWidth;\n    const handleResize = (event)=>{\n        const newWidth = event.pageX;\n        if (!firstWidth) {\n            firstWidth = newWidth;\n        }\n        if (firstWidth > newWidth) {\n            setWidth(91.3);\n            console.log(\"left\");\n            setIsOpen(true);\n        } else if (firstWidth < newWidth) {\n            setWidth(61);\n            console.log(\"right\");\n            setIsOpen(false);\n        } else {\n            console.log(\"not\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isDragging);\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleResize);\n            document.addEventListener(\"mouseup\", ()=>setIsDragging(false));\n        } else {\n            document.removeEventListener(\"mousemove\", handleResize);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleResize);\n            document.removeEventListener(\"mouseup\", ()=>setIsDragging(false));\n        };\n    }, [\n        isDragging\n    ]);\n    // const BottomPlaylist = useMemo(() => {\n    //     return (\n    //         contextData.playList.map((item, index) => {\n    //             return (\n    //                 <div className={styles.cover_bottomPlaylist_body} >\n    //                     <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>\n    //                         <p>{String(index + 1).length === 1 ? (\"0\" + String(index + 1)) : index + 1}</p>\n    //                         <img src={item.img.src}  />\n    //                         <div>\n    //                             <h4> {item.title} </h4>\n    //                             <p> {item.artist} </p>\n    //                         </div>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_genre} >\n    //                         <p> {item.genre} </p>\n    //                         <p style={{ opacity: \"0.5\" }}> {item.id} </p>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_like} >\n    //                         <FontAwesomeIcon icon={faHeart} />\n    //                         <span> ... </span>\n    //                     </div>\n    //                 </div>\n    //             )\n    //         })\n    //     )\n    // },[contextData.playList])\n    // const BottomPlaylist = () => {\n    //     const memoizedPlaylist = useMemo(() => {\n    //         return contextData.playList.map((item, index) => (\n    //             <div className={styles.cover_bottomPlaylist_body} key={item.id}>\n    //                 <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>\n    //                         <p>{String(index + 1).length === 1 ? (\"0\" + String(index + 1)) : index + 1}</p>\n    //                         <img src={item.img.src}  />\n    //                         <div>\n    //                             <h4> {item.title} </h4>\n    //                             <p> {item.artist} </p>\n    //                         </div>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_genre} >\n    //                         <p> {item.genre} </p>\n    //                         <p style={{ opacity: \"0.5\" }}> {item.id} </p>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_like} >\n    //                         <FontAwesomeIcon icon={faHeart} />\n    //                         <span> ... </span>\n    //                     </div>\n    //             </div>\n    //         ));\n    //     }, [contextData.playList]); // Recalculate only if contextData.playList changes\n    //     return (\n    //         <div>\n    //             {memoizedPlaylist}\n    //         </div>\n    //     );\n    // }\n    // const [boxWidth, setBoxWidth] = useState(null)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const width = componentRef.current.getBoundingClientRect().width;\n            setComponentWidth(width);\n        };\n        // Call the handleResize function when the component renders initially\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        // Cleanup function to remove the event listener when the component is unmounted\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(// <div className={styles.mainDiv}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: componentRef,\n        style: style,\n        onMouseDown: ()=>setIsDragging(true),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header_options),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBell\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        className: \" opacity-40 mr-[-24px] \",\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMagnifyingGlass\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 174,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"search\",\n                                        className: \" h-7 shadow-[0px_0px_5px_0px_#d8d8d8] border-none rounded-md text-black pl-7 bg-white mr-6 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 178,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 173,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: componentWidth * 0.9\n                },\n                className: \" h-[230px] min-h-[200px] bg-blue-200 mx-auto \"\n            }, void 0, false, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full px-10 flex overflow-y-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: componentWidth * 0.9\n                        },\n                        className: \"h-full overflow-y-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_bottomPlaylist_header),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Trending right now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 207,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" cursor-pointer \",\n                                        children: \"see all\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 208,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 206,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                playList: contextData.playList\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 211,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: isOpen ? {\n                            opacity: 1\n                        } : {\n                            opacity: 0,\n                            width: 0\n                        },\n                        className: \"bg-green-300 w-[80%] h-[90%] transition-all delay-200 duration-1000 ease-in-out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 214,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n        lineNumber: 164,\n        columnNumber: 5\n    }, undefined));\n};\n_s(MainPage_Cover, \"Vtt/BbYiw/E/vyy1ekLGtqKzM9U=\");\n_c = MainPage_Cover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage_Cover);\nvar _c;\n$RefreshReg$(_c, \"MainPage_Cover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDa0M7QUFDQTtBQUNnQjtBQUNLO0FBQ0E7QUFDeEI7QUFFOUMsTUFBTWEsaUJBQWlCLElBQU07O0lBQzNCLE1BQU1DLGNBQWNiLGlEQUFVQSxDQUFDSywwREFBV0E7SUFFMUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUssZ0JBQWdCO0lBQ3hELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTWdCLGVBQWVqQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDLE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUNILGdEQUFTQSxDQUFDLElBQU07UUFDZHNCLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSDtJQUN6QixHQUFHO1FBQUNBO0tBQU87SUFFWCxlQUFlO0lBQ2YsTUFBTUksUUFBUTtRQUNaQyxZQUFZO1FBQ1pWLE9BQU8sR0FBUyxPQUFOQSxPQUFNO1FBQ2hCVyxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0Q0MsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsT0FBTztJQUNUO0lBRUEsNkJBQTZCO0lBQzdCLElBQUlDO0lBQ0osTUFBTUMsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLE1BQU1DLFdBQVdELE1BQU1FLEtBQUs7UUFDNUIsSUFBSSxDQUFDSixZQUFZO1lBQ2ZBLGFBQWFHO1FBQ2YsQ0FBQztRQUNELElBQUlILGFBQWFHLFVBQVU7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbEIsOERBQUNIO2dCQUNDeEIsT0FBTztvQkFBRVQsT0FBT0UsaUJBQWlCO2dCQUFJO2dCQUNyQ2tDLFdBQVU7Ozs7OzswQkFjWiw4REFBQ0g7Z0JBQUlHLFdBQVU7O2tDQUNiLDhEQUFDSDt3QkFDQ3hCLE9BQU87NEJBQUVULE9BQU9FLGlCQUFpQjt3QkFBSTt3QkFDckNrQyxXQUFVOzswQ0FFViw4REFBQ0g7Z0NBQUlHLFdBQVc5QywrRkFBa0M7O2tEQUNoRCw4REFBQ3NEO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFFVCxXQUFVO2tEQUFtQjs7Ozs7Ozs7Ozs7OzBDQUdsQyw4REFBQ3pDLHVEQUFjQTtnQ0FBQ21ELFVBQVVqRCxZQUFZaUQsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdoRCw4REFBQ2I7d0JBQ0N4QixPQUFPSixTQUFTOzRCQUFFMEMsU0FBUzt3QkFBRSxJQUFJOzRCQUFFQSxTQUFTOzRCQUFHL0MsT0FBTzt3QkFBRSxDQUFDO3dCQUN6RG9DLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQTlNTXhDO0tBQUFBO0FBK01OLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tcG9uZW50X2hhbmRsZXIvcGFnZXMvbWFpblBhZ2UvY292ZXIvaW5kZXguanM/MzQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VDYWxsYmFjayxcbiAgdXNlQ29udGV4dCxcbiAgdXNlRWZmZWN0LFxuICB1c2VNZW1vLFxuICB1c2VSZWYsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9wcm92aWRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9tYWluUGFnZV9jb3Zlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYU1hZ25pZnlpbmdHbGFzcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhQmVsbCwgZmFIZWFydCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xuaW1wb3J0IEJvdHRvbVBsYXlsaXN0IGZyb20gXCIuL0JvdHRvbVBsYXlsaXN0XCI7XG5cbmNvbnN0IE1haW5QYWdlX0NvdmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0RGF0YSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuXG4gIGNvbnN0IFtpc0RyYWdnaW5nLCBzZXRJc0RyYWdnaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSg2MSk7IC8vIGluaXRpYWwgd2lkdGhcbiAgY29uc3QgW2NvbXBvbmVudFdpZHRoLCBzZXRDb21wb25lbnRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29tcG9uZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJpcyBvcGVuXCIsIGlzT3Blbik7XG4gIH0sIFtpc09wZW5dKTtcblxuICAvLyBjdXN0b20gc3R5bGVcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICBoZWlnaHQ6IFwiOTglXCIsXG4gICAgLy8gY3Vyc29yOiAnY29sLXJlc2l6ZScsXG4gICAgLy8gdHJhbnNpdGlvbjogXCJ3aWR0aCAxcyBlYXNlLWluLW91dFwiLFxuICAgIHRyYW5zaXRpb246IFwid2lkdGggMXMgY3ViaWMtYmV6aWVyKDAuNjUsIC0wLjE0LCAwLjI0LCAxLjA2KSAwc1wiLFxuICAgIHpJbmRleDogXCIxMDBcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHJpZ2h0OiBcIjBweFwiLFxuICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gIH07XG5cbiAgLy8gZXZlbnQgaGFuZGxlciBmb3IgcmVzaXppbmdcbiAgbGV0IGZpcnN0V2lkdGg7XG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IG5ld1dpZHRoID0gZXZlbnQucGFnZVg7XG4gICAgaWYgKCFmaXJzdFdpZHRoKSB7XG4gICAgICBmaXJzdFdpZHRoID0gbmV3V2lkdGg7XG4gICAgfVxuICAgIGlmIChmaXJzdFdpZHRoID4gbmV3V2lkdGgpIHtcbiAgICAgIHNldFdpZHRoKDkxLjMpO1xuICAgICAgY29uc29sZS5sb2coXCJsZWZ0XCIpO1xuICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RXaWR0aCA8IG5ld1dpZHRoKSB7XG4gICAgICBzZXRXaWR0aCg2MSk7XG4gICAgICBjb25zb2xlLmxvZyhcInJpZ2h0XCIpO1xuICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJub3RcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coaXNEcmFnZ2luZyk7XG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHNldElzRHJhZ2dpbmcoZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKSk7XG4gICAgfTtcbiAgfSwgW2lzRHJhZ2dpbmddKTtcblxuICAvLyBjb25zdCBCb3R0b21QbGF5bGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAvLyAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICBjb250ZXh0RGF0YS5wbGF5TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gIC8vICAgICAgICAgICAgIHJldHVybiAoXG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHl9ID5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHlfbmFtZX0gcmVmPXtpbnB1dFJlZn0+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntTdHJpbmcoaW5kZXggKyAxKS5sZW5ndGggPT09IDEgPyAoXCIwXCIgKyBTdHJpbmcoaW5kZXggKyAxKSkgOiBpbmRleCArIDF9PC9wPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWcuc3JjfSAgLz5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ge2l0ZW0udGl0bGV9IDwvaDQ+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2l0ZW0uYXJ0aXN0fSA8L3A+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keV9nZW5yZX0gPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2l0ZW0uZ2VucmV9IDwvcD5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgb3BhY2l0eTogXCIwLjVcIiB9fT4ge2l0ZW0uaWR9IDwvcD5cblxuICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keV9saWtlfSA+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIZWFydH0gLz5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IC4uLiA8L3NwYW4+XG5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICApXG4gIC8vICAgICAgICAgfSlcbiAgLy8gICAgIClcbiAgLy8gfSxbY29udGV4dERhdGEucGxheUxpc3RdKVxuXG4gIC8vIGNvbnN0IEJvdHRvbVBsYXlsaXN0ID0gKCkgPT4ge1xuICAvLyAgICAgY29uc3QgbWVtb2l6ZWRQbGF5bGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xuICAvLyAgICAgICAgIHJldHVybiBjb250ZXh0RGF0YS5wbGF5TGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keX0ga2V5PXtpdGVtLmlkfT5cbiAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keV9uYW1lfSByZWY9e2lucHV0UmVmfT5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+e1N0cmluZyhpbmRleCArIDEpLmxlbmd0aCA9PT0gMSA/IChcIjBcIiArIFN0cmluZyhpbmRleCArIDEpKSA6IGluZGV4ICsgMX08L3A+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZy5zcmN9ICAvPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiB7aXRlbS50aXRsZX0gPC9oND5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7aXRlbS5hcnRpc3R9IDwvcD5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5X2dlbnJlfSA+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7aXRlbS5nZW5yZX0gPC9wPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBvcGFjaXR5OiBcIjAuNVwiIH19PiB7aXRlbS5pZH0gPC9wPlxuXG4gIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5X2xpa2V9ID5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSAvPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLi4uIDwvc3Bhbj5cblxuICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICApKTtcbiAgLy8gICAgIH0sIFtjb250ZXh0RGF0YS5wbGF5TGlzdF0pOyAvLyBSZWNhbGN1bGF0ZSBvbmx5IGlmIGNvbnRleHREYXRhLnBsYXlMaXN0IGNoYW5nZXNcblxuICAvLyAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICA8ZGl2PlxuICAvLyAgICAgICAgICAgICB7bWVtb2l6ZWRQbGF5bGlzdH1cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICk7XG4gIC8vIH1cbiAgLy8gY29uc3QgW2JveFdpZHRoLCBzZXRCb3hXaWR0aF0gPSB1c2VTdGF0ZShudWxsKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdpZHRoID0gY29tcG9uZW50UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICBzZXRDb21wb25lbnRXaWR0aCh3aWR0aCk7XG4gICAgfTtcblxuICAgIC8vIENhbGwgdGhlIGhhbmRsZVJlc2l6ZSBmdW5jdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgcmVuZGVycyBpbml0aWFsbHlcbiAgICBoYW5kbGVSZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5EaXZ9PlxuXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb21wb25lbnRSZWZ9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBvbk1vdXNlRG93bj17KCkgPT4gc2V0SXNEcmFnZ2luZyh0cnVlKX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2hlYWRlcn0+XG4gICAgICAgIDxoMT5Ib21lPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9oZWFkZXJfb3B0aW9uc30+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJlbGx9IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIG9wYWNpdHktNDAgbXItWy0yNHB4XSBcIlxuICAgICAgICAgICAgICBpY29uPXtmYU1hZ25pZnlpbmdHbGFzc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaC03IHNoYWRvdy1bMHB4XzBweF81cHhfMHB4XyNkOGQ4ZDhdIGJvcmRlci1ub25lIHJvdW5kZWQtbWQgdGV4dC1ibGFjayBwbC03ICBiZy13aGl0ZSBtci02IFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17eyB3aWR0aDogY29tcG9uZW50V2lkdGggKiAwLjkgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiIGgtWzIzMHB4XSBtaW4taC1bMjAwcHhdIGJnLWJsdWUtMjAwIG14LWF1dG8gXCJcbiAgICAgID48L2Rpdj5cbiAgICAgIHsvKiB7Y29uc29sZS5sb2coYm94V2lkdGgpfSAqL31cbiAgICAgIHsvKiA8U3RhZ2VcbiAgICAgICAgICAgICAgICB3aWR0aD17Ym94V2lkdGggKiAwLjV9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgKiAwLjV9XG4gICAgICAgICAgICAgICAgb25XaGVlbD17aGFuZGxlV2hlZWx9XG4gICAgICAgICAgICAgICAgc2NhbGVYPXtzdGFnZS5zdGFnZVNjYWxlfVxuICAgICAgICAgICAgICAgIHNjYWxlWT17c3RhZ2Uuc3RhZ2VTY2FsZX1cbiAgICAgICAgICAgICAgICB4PXtzdGFnZS5zdGFnZVh9XG4gICAgICAgICAgICAgICAgeT17c3RhZ2Uuc3RhZ2VZfVxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgLz4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCBweC0xMCBmbGV4ICBvdmVyZmxvdy15LWF1dG8gIFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGNvbXBvbmVudFdpZHRoICogMC45IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIG92ZXJmbG93LXktYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2hlYWRlcn0+XG4gICAgICAgICAgICA8aDM+VHJlbmRpbmcgcmlnaHQgbm93PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBcIj5zZWUgYWxsPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHl9PiAqL31cbiAgICAgICAgICA8Qm90dG9tUGxheWxpc3QgcGxheUxpc3Q9e2NvbnRleHREYXRhLnBsYXlMaXN0fSAvPlxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e2lzT3BlbiA/IHsgb3BhY2l0eTogMSB9IDogeyBvcGFjaXR5OiAwLCB3aWR0aDogMCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCB3LVs4MCVdIGgtWzkwJV0gdHJhbnNpdGlvbi1hbGwgZGVsYXktMjAwIGR1cmF0aW9uLTEwMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZV9Db3ZlcjtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTWFnbmlmeWluZ0dsYXNzIiwiZmFCZWxsIiwiZmFIZWFydCIsIkJvdHRvbVBsYXlsaXN0IiwiTWFpblBhZ2VfQ292ZXIiLCJjb250ZXh0RGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwid2lkdGgiLCJzZXRXaWR0aCIsImNvbXBvbmVudFdpZHRoIiwic2V0Q29tcG9uZW50V2lkdGgiLCJjb21wb25lbnRSZWYiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInpJbmRleCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJjb2xvciIsImZpcnN0V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJldmVudCIsIm5ld1dpZHRoIiwicGFnZVgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsImRpdiIsInJlZiIsIm9uTW91c2VEb3duIiwiY2xhc3NOYW1lIiwiY292ZXJfaGVhZGVyIiwiaDEiLCJjb3Zlcl9oZWFkZXJfb3B0aW9ucyIsImljb24iLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwiY292ZXJfYm90dG9tUGxheWxpc3RfaGVhZGVyIiwiaDMiLCJwIiwicGxheUxpc3QiLCJvcGFjaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/component_handler/pages/mainPage/cover/index.js\n"));

/***/ })

});