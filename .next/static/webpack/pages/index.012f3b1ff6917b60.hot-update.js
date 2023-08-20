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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/provider */ \"./context/provider.js\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainPage_cover.module.css */ \"./components/component_handler/pages/mainPage/cover/mainPage_cover.module.css\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n/* harmony import */ var _BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomPlaylist */ \"./components/component_handler/pages/mainPage/cover/BottomPlaylist.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MainPage_Cover = ()=>{\n    _s();\n    const contextData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_provider__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(61); // initial width\n    const [componentWidth, setComponentWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"is open\", isOpen);\n    }, [\n        isOpen\n    ]);\n    // custom style\n    const style = {\n        background: \"white\",\n        width: \"\".concat(width, \"%\"),\n        height: \"98%\",\n        // cursor: 'col-resize',\n        // transition: \"width 1s ease-in-out\",\n        transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\",\n        zIndex: \"100\",\n        position: \"absolute\",\n        right: \"0px\",\n        margin: \"10px\",\n        borderRadius: \"40px\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"flex-start\",\n        color: \"black\"\n    };\n    // event handler for resizing\n    let firstWidth;\n    const handleResize = (event)=>{\n        const newWidth = event.pageX;\n        if (!firstWidth) {\n            firstWidth = newWidth;\n        }\n        if (firstWidth > newWidth) {\n            setWidth(91.3);\n            console.log(\"left\");\n            setIsOpen(true);\n        } else if (firstWidth < newWidth) {\n            setWidth(61);\n            console.log(\"right\");\n            setIsOpen(false);\n        } else {\n            console.log(\"not\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isDragging);\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleResize);\n            document.addEventListener(\"mouseup\", ()=>setIsDragging(false));\n        } else {\n            document.removeEventListener(\"mousemove\", handleResize);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleResize);\n            document.removeEventListener(\"mouseup\", ()=>setIsDragging(false));\n        };\n    }, [\n        isDragging\n    ]);\n    // const BottomPlaylist = useMemo(() => {\n    //     return (\n    //         contextData.playList.map((item, index) => {\n    //             return (\n    //                 <div className={styles.cover_bottomPlaylist_body} >\n    //                     <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>\n    //                         <p>{String(index + 1).length === 1 ? (\"0\" + String(index + 1)) : index + 1}</p>\n    //                         <img src={item.img.src}  />\n    //                         <div>\n    //                             <h4> {item.title} </h4>\n    //                             <p> {item.artist} </p>\n    //                         </div>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_genre} >\n    //                         <p> {item.genre} </p>\n    //                         <p style={{ opacity: \"0.5\" }}> {item.id} </p>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_like} >\n    //                         <FontAwesomeIcon icon={faHeart} />\n    //                         <span> ... </span>\n    //                     </div>\n    //                 </div>\n    //             )\n    //         })\n    //     )\n    // },[contextData.playList])\n    // const BottomPlaylist = () => {\n    //     const memoizedPlaylist = useMemo(() => {\n    //         return contextData.playList.map((item, index) => (\n    //             <div className={styles.cover_bottomPlaylist_body} key={item.id}>\n    //                 <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>\n    //                         <p>{String(index + 1).length === 1 ? (\"0\" + String(index + 1)) : index + 1}</p>\n    //                         <img src={item.img.src}  />\n    //                         <div>\n    //                             <h4> {item.title} </h4>\n    //                             <p> {item.artist} </p>\n    //                         </div>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_genre} >\n    //                         <p> {item.genre} </p>\n    //                         <p style={{ opacity: \"0.5\" }}> {item.id} </p>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_like} >\n    //                         <FontAwesomeIcon icon={faHeart} />\n    //                         <span> ... </span>\n    //                     </div>\n    //             </div>\n    //         ));\n    //     }, [contextData.playList]); // Recalculate only if contextData.playList changes\n    //     return (\n    //         <div>\n    //             {memoizedPlaylist}\n    //         </div>\n    //     );\n    // }\n    // const [boxWidth, setBoxWidth] = useState(null)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const width = componentRef.current.getBoundingClientRect().width;\n            setComponentWidth(width);\n        };\n        // Call the handleResize function when the component renders initially\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        // Cleanup function to remove the event listener when the component is unmounted\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(// <div className={styles.mainDiv}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: componentRef,\n        style: style,\n        onMouseDown: ()=>setIsDragging(true),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header_options),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBell\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        className: \" opacity-40 mr-[-24px] \",\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMagnifyingGlass\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 174,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"search\",\n                                        className: \" h-7 shadow-[0px_0px_5px_0px_#d8d8d8] border-none rounded-md text-black pl-7 bg-white mr-6 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 178,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 173,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: componentWidth * 0.9\n                },\n                className: \" h-[230px] min-h-[200px] bg-blue-200 mx-auto \"\n            }, void 0, false, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full px-10 flex items-center gap-4 overflow-y-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            minWidth: componentWidth * 0.9\n                        },\n                        className: \"h-full overflow-y-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_bottomPlaylist_header),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Trending right now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 207,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" cursor-pointer \",\n                                        children: \"see all\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 208,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 206,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                playList: contextData.playList\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 211,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: isOpen ? {\n                            opacity: 1\n                        } : {\n                            opacity: 0,\n                            width: 0,\n                            height: \"20%\"\n                        },\n                        className: \"bg-green-300 w-[80%] h-[90%] transition-all delay-400 duration-1000 ease-in-out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 214,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n        lineNumber: 164,\n        columnNumber: 5\n    }, undefined));\n};\n_s(MainPage_Cover, \"Vtt/BbYiw/E/vyy1ekLGtqKzM9U=\");\n_c = MainPage_Cover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage_Cover);\nvar _c;\n$RefreshReg$(_c, \"MainPage_Cover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDa0M7QUFDQTtBQUNnQjtBQUNLO0FBQ0E7QUFDeEI7QUFFOUMsTUFBTWEsaUJBQWlCLElBQU07O0lBQzNCLE1BQU1DLGNBQWNiLGlEQUFVQSxDQUFDSywwREFBV0E7SUFFMUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUssZ0JBQWdCO0lBQ3hELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTWdCLGVBQWVqQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDLE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUNILGdEQUFTQSxDQUFDLElBQU07UUFDZHNCLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSDtJQUN6QixHQUFHO1FBQUNBO0tBQU87SUFFWCxlQUFlO0lBQ2YsTUFBTUksUUFBUTtRQUNaQyxZQUFZO1FBQ1pWLE9BQU8sR0FBUyxPQUFOQSxPQUFNO1FBQ2hCVyxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0Q0MsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsT0FBTztJQUNUO0lBRUEsNkJBQTZCO0lBQzdCLElBQUlDO0lBQ0osTUFBTUMsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLE1BQU1DLFdBQVdELE1BQU1FLEtBQUs7UUFDNUIsSUFBSSxDQUFDSixZQUFZO1lBQ2ZBLGFBQWFHO1FBQ2YsQ0FBQztRQUNELElBQUlILGFBQWFHLFVBQVU7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbEIsOERBQUNIO2dCQUNDeEIsT0FBTztvQkFBRVQsT0FBT0UsaUJBQWlCO2dCQUFJO2dCQUNyQ2tDLFdBQVU7Ozs7OzswQkFjWiw4REFBQ0g7Z0JBQUlHLFdBQVU7O2tDQUNiLDhEQUFDSDt3QkFDQ3hCLE9BQU87NEJBQUVrQyxVQUFVekMsaUJBQWlCO3dCQUFJO3dCQUN4Q2tDLFdBQVU7OzBDQUVWLDhEQUFDSDtnQ0FBSUcsV0FBVzlDLCtGQUFrQzs7a0RBQ2hELDhEQUFDdUQ7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7d0NBQUVWLFdBQVU7a0RBQW1COzs7Ozs7Ozs7Ozs7MENBR2xDLDhEQUFDekMsdURBQWNBO2dDQUFDb0QsVUFBVWxELFlBQVlrRCxRQUFROzs7Ozs7Ozs7Ozs7a0NBR2hELDhEQUFDZDt3QkFDQ3hCLE9BQU9KLFNBQVM7NEJBQUUyQyxTQUFTO3dCQUFFLElBQUk7NEJBQUVBLFNBQVM7NEJBQUdoRCxPQUFPOzRCQUFHVyxRQUFPO3dCQUFNLENBQUM7d0JBQ3ZFeUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBOU1NeEM7S0FBQUE7QUErTU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wb25lbnRfaGFuZGxlci9wYWdlcy9tYWluUGFnZS9jb3Zlci9pbmRleC5qcz8zNDRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZU1lbW8sXG4gIHVzZVJlZixcbiAgdXNlU3RhdGUsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L3Byb3ZpZGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21haW5QYWdlX2NvdmVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhTWFnbmlmeWluZ0dsYXNzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFCZWxsLCBmYUhlYXJ0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XG5pbXBvcnQgQm90dG9tUGxheWxpc3QgZnJvbSBcIi4vQm90dG9tUGxheWxpc3RcIjtcblxuY29uc3QgTWFpblBhZ2VfQ292ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHREYXRhID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG5cbiAgY29uc3QgW2lzRHJhZ2dpbmcsIHNldElzRHJhZ2dpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKDYxKTsgLy8gaW5pdGlhbCB3aWR0aFxuICBjb25zdCBbY29tcG9uZW50V2lkdGgsIHNldENvbXBvbmVudFdpZHRoXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjb21wb25lbnRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImlzIG9wZW5cIiwgaXNPcGVuKTtcbiAgfSwgW2lzT3Blbl0pO1xuXG4gIC8vIGN1c3RvbSBzdHlsZVxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgd2lkdGg6IGAke3dpZHRofSVgLFxuICAgIGhlaWdodDogXCI5OCVcIixcbiAgICAvLyBjdXJzb3I6ICdjb2wtcmVzaXplJyxcbiAgICAvLyB0cmFuc2l0aW9uOiBcIndpZHRoIDFzIGVhc2UtaW4tb3V0XCIsXG4gICAgdHJhbnNpdGlvbjogXCJ3aWR0aCAxcyBjdWJpYy1iZXppZXIoMC42NSwgLTAuMTQsIDAuMjQsIDEuMDYpIDBzXCIsXG4gICAgekluZGV4OiBcIjEwMFwiLFxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgcmlnaHQ6IFwiMHB4XCIsXG4gICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNDBweFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgfTtcblxuICAvLyBldmVudCBoYW5kbGVyIGZvciByZXNpemluZ1xuICBsZXQgZmlyc3RXaWR0aDtcbiAgY29uc3QgaGFuZGxlUmVzaXplID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgbmV3V2lkdGggPSBldmVudC5wYWdlWDtcbiAgICBpZiAoIWZpcnN0V2lkdGgpIHtcbiAgICAgIGZpcnN0V2lkdGggPSBuZXdXaWR0aDtcbiAgICB9XG4gICAgaWYgKGZpcnN0V2lkdGggPiBuZXdXaWR0aCkge1xuICAgICAgc2V0V2lkdGgoOTEuMyk7XG4gICAgICBjb25zb2xlLmxvZyhcImxlZnRcIik7XG4gICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChmaXJzdFdpZHRoIDwgbmV3V2lkdGgpIHtcbiAgICAgIHNldFdpZHRoKDYxKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmlnaHRcIik7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdFwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpc0RyYWdnaW5nKTtcbiAgICBpZiAoaXNEcmFnZ2luZykge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gc2V0SXNEcmFnZ2luZyhmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsICgpID0+IHNldElzRHJhZ2dpbmcoZmFsc2UpKTtcbiAgICB9O1xuICB9LCBbaXNEcmFnZ2luZ10pO1xuXG4gIC8vIGNvbnN0IEJvdHRvbVBsYXlsaXN0ID0gdXNlTWVtbygoKSA9PiB7XG4gIC8vICAgICByZXR1cm4gKFxuICAvLyAgICAgICAgIGNvbnRleHREYXRhLnBsYXlMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgLy8gICAgICAgICAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keX0gPlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keV9uYW1lfSByZWY9e2lucHV0UmVmfT5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+e1N0cmluZyhpbmRleCArIDEpLmxlbmd0aCA9PT0gMSA/IChcIjBcIiArIFN0cmluZyhpbmRleCArIDEpKSA6IGluZGV4ICsgMX08L3A+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZy5zcmN9ICAvPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiB7aXRlbS50aXRsZX0gPC9oND5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7aXRlbS5hcnRpc3R9IDwvcD5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5X2dlbnJlfSA+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7aXRlbS5nZW5yZX0gPC9wPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBvcGFjaXR5OiBcIjAuNVwiIH19PiB7aXRlbS5pZH0gPC9wPlxuXG4gIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5X2xpa2V9ID5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUhlYXJ0fSAvPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLi4uIDwvc3Bhbj5cblxuICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgIClcbiAgLy8gICAgICAgICB9KVxuICAvLyAgICAgKVxuICAvLyB9LFtjb250ZXh0RGF0YS5wbGF5TGlzdF0pXG5cbiAgLy8gY29uc3QgQm90dG9tUGxheWxpc3QgPSAoKSA9PiB7XG4gIC8vICAgICBjb25zdCBtZW1vaXplZFBsYXlsaXN0ID0gdXNlTWVtbygoKSA9PiB7XG4gIC8vICAgICAgICAgcmV0dXJuIGNvbnRleHREYXRhLnBsYXlMaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5fSBrZXk9e2l0ZW0uaWR9PlxuICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5X25hbWV9IHJlZj17aW5wdXRSZWZ9PlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD57U3RyaW5nKGluZGV4ICsgMSkubGVuZ3RoID09PSAxID8gKFwiMFwiICsgU3RyaW5nKGluZGV4ICsgMSkpIDogaW5kZXggKyAxfTwvcD5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nLnNyY30gIC8+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+IHtpdGVtLnRpdGxlfSA8L2g0PlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtpdGVtLmFydGlzdH0gPC9wPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHlfZ2VucmV9ID5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtpdGVtLmdlbnJlfSA8L3A+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG9wYWNpdHk6IFwiMC41XCIgfX0+IHtpdGVtLmlkfSA8L3A+XG5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHlfbGlrZX0gPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IC8+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAuLi4gPC9zcGFuPlxuXG4gIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICkpO1xuICAvLyAgICAgfSwgW2NvbnRleHREYXRhLnBsYXlMaXN0XSk7IC8vIFJlY2FsY3VsYXRlIG9ubHkgaWYgY29udGV4dERhdGEucGxheUxpc3QgY2hhbmdlc1xuXG4gIC8vICAgICByZXR1cm4gKFxuICAvLyAgICAgICAgIDxkaXY+XG4gIC8vICAgICAgICAgICAgIHttZW1vaXplZFBsYXlsaXN0fVxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgKTtcbiAgLy8gfVxuICAvLyBjb25zdCBbYm94V2lkdGgsIHNldEJveFdpZHRoXSA9IHVzZVN0YXRlKG51bGwpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd2lkdGggPSBjb21wb25lbnRSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHNldENvbXBvbmVudFdpZHRoKHdpZHRoKTtcbiAgICB9O1xuXG4gICAgLy8gQ2FsbCB0aGUgaGFuZGxlUmVzaXplIGZ1bmN0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCByZW5kZXJzIGluaXRpYWxseVxuICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkRpdn0+XG5cbiAgICA8ZGl2XG4gICAgICByZWY9e2NvbXBvbmVudFJlZn1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBzZXRJc0RyYWdnaW5nKHRydWUpfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfaGVhZGVyfT5cbiAgICAgICAgPGgxPkhvbWU8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2hlYWRlcl9vcHRpb25zfT5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmVsbH0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgb3BhY2l0eS00MCBtci1bLTI0cHhdIFwiXG4gICAgICAgICAgICAgIGljb249e2ZhTWFnbmlmeWluZ0dsYXNzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBoLTcgc2hhZG93LVswcHhfMHB4XzVweF8wcHhfI2Q4ZDhkOF0gYm9yZGVyLW5vbmUgcm91bmRlZC1tZCB0ZXh0LWJsYWNrIHBsLTcgIGJnLXdoaXRlIG1yLTYgXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBjb21wb25lbnRXaWR0aCAqIDAuOSB9fVxuICAgICAgICBjbGFzc05hbWU9XCIgaC1bMjMwcHhdIG1pbi1oLVsyMDBweF0gYmctYmx1ZS0yMDAgbXgtYXV0byBcIlxuICAgICAgPjwvZGl2PlxuICAgICAgey8qIHtjb25zb2xlLmxvZyhib3hXaWR0aCl9ICovfVxuICAgICAgey8qIDxTdGFnZVxuICAgICAgICAgICAgICAgIHdpZHRoPXtib3hXaWR0aCAqIDAuNX1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAqIDAuNX1cbiAgICAgICAgICAgICAgICBvbldoZWVsPXtoYW5kbGVXaGVlbH1cbiAgICAgICAgICAgICAgICBzY2FsZVg9e3N0YWdlLnN0YWdlU2NhbGV9XG4gICAgICAgICAgICAgICAgc2NhbGVZPXtzdGFnZS5zdGFnZVNjYWxlfVxuICAgICAgICAgICAgICAgIHg9e3N0YWdlLnN0YWdlWH1cbiAgICAgICAgICAgICAgICB5PXtzdGFnZS5zdGFnZVl9XG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgICAgICAvPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1mdWxsIHB4LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IG92ZXJmbG93LXktYXV0byAgXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogY29tcG9uZW50V2lkdGggKiAwLjkgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgb3ZlcmZsb3cteS1hdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfaGVhZGVyfT5cbiAgICAgICAgICAgIDxoMz5UcmVuZGluZyByaWdodCBub3c8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIFwiPnNlZSBhbGw8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keX0+ICovfVxuICAgICAgICAgIDxCb3R0b21QbGF5bGlzdCBwbGF5TGlzdD17Y29udGV4dERhdGEucGxheUxpc3R9IC8+XG4gICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17aXNPcGVuID8geyBvcGFjaXR5OiAxIH0gOiB7IG9wYWNpdHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6XCIyMCVcIiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCB3LVs4MCVdIGgtWzkwJV0gdHJhbnNpdGlvbi1hbGwgZGVsYXktNDAwIGR1cmF0aW9uLTEwMDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAvLyA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZV9Db3ZlcjtcbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsInN0eWxlcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTWFnbmlmeWluZ0dsYXNzIiwiZmFCZWxsIiwiZmFIZWFydCIsIkJvdHRvbVBsYXlsaXN0IiwiTWFpblBhZ2VfQ292ZXIiLCJjb250ZXh0RGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwid2lkdGgiLCJzZXRXaWR0aCIsImNvbXBvbmVudFdpZHRoIiwic2V0Q29tcG9uZW50V2lkdGgiLCJjb21wb25lbnRSZWYiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInpJbmRleCIsInBvc2l0aW9uIiwicmlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJjb2xvciIsImZpcnN0V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJldmVudCIsIm5ld1dpZHRoIiwicGFnZVgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpbmRvdyIsImRpdiIsInJlZiIsIm9uTW91c2VEb3duIiwiY2xhc3NOYW1lIiwiY292ZXJfaGVhZGVyIiwiaDEiLCJjb3Zlcl9oZWFkZXJfb3B0aW9ucyIsImljb24iLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwibWluV2lkdGgiLCJjb3Zlcl9ib3R0b21QbGF5bGlzdF9oZWFkZXIiLCJoMyIsInAiLCJwbGF5TGlzdCIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/component_handler/pages/mainPage/cover/index.js\n"));

/***/ })

});