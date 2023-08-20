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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/provider */ \"./context/provider.js\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainPage_cover.module.css */ \"./components/component_handler/pages/mainPage/cover/mainPage_cover.module.css\");\n/* harmony import */ var _mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.mjs\");\n/* harmony import */ var _BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BottomPlaylist */ \"./components/component_handler/pages/mainPage/cover/BottomPlaylist.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst MainPage_Cover = ()=>{\n    _s();\n    const contextData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_provider__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [isDragging, setIsDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(61); // initial width\n    const [componentWidth, setComponentWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"is open\", isOpen);\n    }, [\n        isOpen\n    ]);\n    // custom style\n    const style = {\n        background: \"white\",\n        width: \"\".concat(width, \"%\"),\n        height: \"98%\",\n        // cursor: 'col-resize',\n        // transition: \"width 1s ease-in-out\",\n        transition: \"width 1s cubic-bezier(0.65, -0.14, 0.24, 1.06) 0s\",\n        zIndex: \"100\",\n        position: \"absolute\",\n        right: \"0px\",\n        margin: \"10px\",\n        borderRadius: \"40px\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"flex-start\",\n        color: \"black\"\n    };\n    // event handler for resizing\n    let firstWidth;\n    const handleResize = (event)=>{\n        const newWidth = event.pageX;\n        if (!firstWidth) {\n            firstWidth = newWidth;\n        }\n        if (firstWidth > newWidth) {\n            setWidth(91.3);\n            console.log(\"left\");\n            setIsOpen(true);\n        } else if (firstWidth < newWidth) {\n            setWidth(61);\n            console.log(\"right\");\n            setIsOpen(false);\n        } else {\n            console.log(\"not\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(isDragging);\n        if (isDragging) {\n            document.addEventListener(\"mousemove\", handleResize);\n            document.addEventListener(\"mouseup\", ()=>setIsDragging(false));\n        } else {\n            document.removeEventListener(\"mousemove\", handleResize);\n        }\n        return ()=>{\n            document.removeEventListener(\"mousemove\", handleResize);\n            document.removeEventListener(\"mouseup\", ()=>setIsDragging(false));\n        };\n    }, [\n        isDragging\n    ]);\n    // const BottomPlaylist = useMemo(() => {\n    //     return (\n    //         contextData.playList.map((item, index) => {\n    //             return (\n    //                 <div className={styles.cover_bottomPlaylist_body} >\n    //                     <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>\n    //                         <p>{String(index + 1).length === 1 ? (\"0\" + String(index + 1)) : index + 1}</p>\n    //                         <img src={item.img.src}  />\n    //                         <div>\n    //                             <h4> {item.title} </h4>\n    //                             <p> {item.artist} </p>\n    //                         </div>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_genre} >\n    //                         <p> {item.genre} </p>\n    //                         <p style={{ opacity: \"0.5\" }}> {item.id} </p>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_like} >\n    //                         <FontAwesomeIcon icon={faHeart} />\n    //                         <span> ... </span>\n    //                     </div>\n    //                 </div>\n    //             )\n    //         })\n    //     )\n    // },[contextData.playList])\n    // const BottomPlaylist = () => {\n    //     const memoizedPlaylist = useMemo(() => {\n    //         return contextData.playList.map((item, index) => (\n    //             <div className={styles.cover_bottomPlaylist_body} key={item.id}>\n    //                 <div className={styles.cover_bottomPlaylist_body_name} ref={inputRef}>\n    //                         <p>{String(index + 1).length === 1 ? (\"0\" + String(index + 1)) : index + 1}</p>\n    //                         <img src={item.img.src}  />\n    //                         <div>\n    //                             <h4> {item.title} </h4>\n    //                             <p> {item.artist} </p>\n    //                         </div>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_genre} >\n    //                         <p> {item.genre} </p>\n    //                         <p style={{ opacity: \"0.5\" }}> {item.id} </p>\n    //                     </div>\n    //                     <div className={styles.cover_bottomPlaylist_body_like} >\n    //                         <FontAwesomeIcon icon={faHeart} />\n    //                         <span> ... </span>\n    //                     </div>\n    //             </div>\n    //         ));\n    //     }, [contextData.playList]); // Recalculate only if contextData.playList changes\n    //     return (\n    //         <div>\n    //             {memoizedPlaylist}\n    //         </div>\n    //     );\n    // }\n    // const [boxWidth, setBoxWidth] = useState(null)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const width = componentRef.current.getBoundingClientRect().width;\n            setComponentWidth(width);\n        };\n        // Call the handleResize function when the component renders initially\n        handleResize();\n        window.addEventListener(\"resize\", handleResize);\n        // Cleanup function to remove the event listener when the component is unmounted\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return(// <div className={styles.mainDiv}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: componentRef,\n        style: style,\n        onMouseDown: ()=>setIsDragging(true),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_header_options),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faBell\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                        className: \" opacity-40 mr-[-24px] \",\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faMagnifyingGlass\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 174,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"search\",\n                                        className: \" h-7 shadow-[0px_0px_5px_0px_#d8d8d8] border-none rounded-md text-black pl-7 bg-white mr-6 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 178,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 173,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 171,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: componentWidth * 0.9\n                },\n                className: \" h-[230px] min-h-[200px] bg-blue-200 mx-auto \"\n            }, void 0, false, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full px-10 flex overflow-y-auto \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: componentWidth * 0.9\n                        },\n                        className: \"h-full overflow-y-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_mainPage_cover_module_css__WEBPACK_IMPORTED_MODULE_5___default().cover_bottomPlaylist_header),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Trending right now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 204,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" cursor-pointer \",\n                                        children: \"see all\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                        lineNumber: 205,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 203,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomPlaylist__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                playList: contextData.playList\n                            }, void 0, false, {\n                                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                                lineNumber: 208,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 202,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: !isOpen ? {\n                            display: \"none\"\n                        } : {},\n                        className: \"bg-green-300 w-10 h-10 transition-all duration-1000 ease-in-out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                        lineNumber: 211,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alijavadpour/Desktop/doremi/components/component_handler/pages/mainPage/cover/index.js\",\n        lineNumber: 164,\n        columnNumber: 5\n    }, undefined));\n};\n_s(MainPage_Cover, \"Vtt/BbYiw/E/vyy1ekLGtqKzM9U=\");\n_c = MainPage_Cover;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage_Cover);\nvar _c;\n$RefreshReg$(_c, \"MainPage_Cover\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDa0M7QUFDQTtBQUNnQjtBQUNLO0FBQ0E7QUFDeEI7QUFFOUMsTUFBTWEsaUJBQWlCLElBQU07O0lBQzNCLE1BQU1DLGNBQWNiLGlEQUFVQSxDQUFDSywwREFBV0E7SUFFMUMsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDLEtBQUssZ0JBQWdCO0lBQ3hELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDckQsTUFBTWdCLGVBQWVqQiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2hDLE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUNILGdEQUFTQSxDQUFDLElBQU07UUFDZHNCLFFBQVFDLEdBQUcsQ0FBQyxXQUFXSDtJQUN6QixHQUFHO1FBQUNBO0tBQU87SUFFWCxlQUFlO0lBQ2YsTUFBTUksUUFBUTtRQUNaQyxZQUFZO1FBQ1pWLE9BQU8sR0FBUyxPQUFOQSxPQUFNO1FBQ2hCVyxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0Q0MsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWkMsT0FBTztJQUNUO0lBRUEsNkJBQTZCO0lBQzdCLElBQUlDO0lBQ0osTUFBTUMsZUFBZSxDQUFDQyxRQUFVO1FBQzlCLE1BQU1DLFdBQVdELE1BQU1FLEtBQUs7UUFDNUIsSUFBSSxDQUFDSixZQUFZO1lBQ2ZBLGFBQWFHO1FBQ2YsQ0FBQztRQUNELElBQUlILGFBQWFHLFVBQVU7WUFDekJ4QixTQUFTO1lBQ1RNLFFBQVFDLEdBQUcsQ0FBQztZQUNaRixVQUFVLElBQUk7UUFDaEIsT0FBTyxJQUFJZ0IsYUFBYUcsVUFBVTtZQUNoQ3hCLFNBQVM7WUFDVE0sUUFBUUMsR0FBRyxDQUFDO1lBQ1pGLFVBQVUsS0FBSztRQUNqQixPQUFPO1lBQ0xDLFFBQVFDLEdBQUcsQ0FBQztRQUNkLENBQUM7SUFDSDtJQUVBdkIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkc0IsUUFBUUMsR0FBRyxDQUFDVjtRQUNaLElBQUlBLFlBQVk7WUFDZDZCLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFMO1lBQ3ZDSSxTQUFTQyxnQkFBZ0IsQ0FBQyxXQUFXLElBQU03QixjQUFjLEtBQUs7UUFDaEUsT0FBTztZQUNMNEIsU0FBU0UsbUJBQW1CLENBQUMsYUFBYU47UUFDNUMsQ0FBQztRQUVELE9BQU8sSUFBTTtZQUNYSSxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhTjtZQUMxQ0ksU0FBU0UsbUJBQW1CLENBQUMsV0FBVyxJQUFNOUIsY0FBYyxLQUFLO1FBQ25FO0lBQ0YsR0FBRztRQUFDRDtLQUFXO0lBRWYseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixzREFBc0Q7SUFDdEQsdUJBQXVCO0lBQ3ZCLHNFQUFzRTtJQUN0RSw2RkFBNkY7SUFDN0YsMEdBQTBHO0lBQzFHLHNEQUFzRDtJQUN0RCxnQ0FBZ0M7SUFDaEMsc0RBQXNEO0lBQ3RELHFEQUFxRDtJQUNyRCxpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLGdGQUFnRjtJQUNoRixnREFBZ0Q7SUFDaEQsd0VBQXdFO0lBRXhFLDZCQUE2QjtJQUM3QiwrRUFBK0U7SUFDL0UsNkRBQTZEO0lBQzdELDZDQUE2QztJQUU3Qyw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsUUFBUTtJQUNSLDRCQUE0QjtJQUU1QixpQ0FBaUM7SUFDakMsK0NBQStDO0lBQy9DLDZEQUE2RDtJQUM3RCwrRUFBK0U7SUFDL0UseUZBQXlGO0lBQ3pGLDBHQUEwRztJQUMxRyxzREFBc0Q7SUFDdEQsZ0NBQWdDO0lBQ2hDLHNEQUFzRDtJQUN0RCxxREFBcUQ7SUFDckQsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixnRkFBZ0Y7SUFDaEYsZ0RBQWdEO0lBQ2hELHdFQUF3RTtJQUV4RSw2QkFBNkI7SUFDN0IsK0VBQStFO0lBQy9FLDZEQUE2RDtJQUM3RCw2Q0FBNkM7SUFFN0MsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsc0ZBQXNGO0lBRXRGLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsSUFBSTtJQUNKLGlEQUFpRDtJQUNqRGIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1zQyxlQUFlLElBQU07WUFDekIsTUFBTXZCLFFBQVFJLGFBQWEwQixPQUFPLENBQUNDLHFCQUFxQixHQUFHL0IsS0FBSztZQUNoRUcsa0JBQWtCSDtRQUNwQjtRQUVBLHNFQUFzRTtRQUN0RXVCO1FBQ0FTLE9BQU9KLGdCQUFnQixDQUFDLFVBQVVMO1FBRWxDLGdGQUFnRjtRQUNoRixPQUFPLElBQU07WUFDWFMsT0FBT0gsbUJBQW1CLENBQUMsVUFBVU47UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxPQUNFLG1DQUFtQztrQkFFbkMsOERBQUNVO1FBQ0NDLEtBQUs5QjtRQUNMSyxPQUFPQTtRQUNQMEIsYUFBYSxJQUFNcEMsY0FBYyxJQUFJOzswQkFFckMsOERBQUNrQztnQkFBSUcsV0FBVzlDLGdGQUFtQjs7a0NBQ2pDLDhEQUFDZ0Q7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0w7d0JBQUlHLFdBQVc5Qyx3RkFBMkI7OzBDQUN6Qyw4REFBQ0MsMkVBQWVBO2dDQUFDaUQsTUFBTS9DLHVFQUFNQTs7Ozs7OzBDQUM3Qiw4REFBQ3dDOztrREFDQyw4REFBQzFDLDJFQUFlQTt3Q0FDZDZDLFdBQVU7d0NBQ1ZJLE1BQU1oRCxnRkFBaUJBOzs7Ozs7a0RBRXpCLDhEQUFDaUQ7d0NBQ0NDLGFBQVk7d0NBQ1pOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbEIsOERBQUNIO2dCQUNDeEIsT0FBTztvQkFBRVQsT0FBT0UsaUJBQWlCO2dCQUFJO2dCQUNyQ2tDLFdBQVU7Ozs7OzswQkFjWiw4REFBQ0g7Z0JBQUlHLFdBQVU7O2tDQUNiLDhEQUFDSDt3QkFBSXhCLE9BQU87NEJBQUVULE9BQU9FLGlCQUFpQjt3QkFBSTt3QkFBR2tDLFdBQVU7OzBDQUNyRCw4REFBQ0g7Z0NBQUlHLFdBQVc5QywrRkFBa0M7O2tEQUNoRCw4REFBQ3NEO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFFVCxXQUFVO2tEQUFtQjs7Ozs7Ozs7Ozs7OzBDQUdsQyw4REFBQ3pDLHVEQUFjQTtnQ0FBQ21ELFVBQVVqRCxZQUFZaUQsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdsRCw4REFBQ2I7d0JBQUl4QixPQUFPLENBQUNKLFNBQU87NEJBQUNhLFNBQVE7d0JBQU0sSUFBRSxDQUFDLENBQUM7d0JBQUVrQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekQ7R0F6TU14QztLQUFBQTtBQTBNTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbXBvbmVudF9oYW5kbGVyL3BhZ2VzL21haW5QYWdlL2NvdmVyL2luZGV4LmpzPzM0NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZUNvbnRleHQsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgdXNlUmVmLFxuICB1c2VTdGF0ZSxcbn0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvcHJvdmlkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbWFpblBhZ2VfY292ZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFNYWduaWZ5aW5nR2xhc3MgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBmYUJlbGwsIGZhSGVhcnQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmltcG9ydCBCb3R0b21QbGF5bGlzdCBmcm9tIFwiLi9Cb3R0b21QbGF5bGlzdFwiO1xuXG5jb25zdCBNYWluUGFnZV9Db3ZlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dERhdGEgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcblxuICBjb25zdCBbaXNEcmFnZ2luZywgc2V0SXNEcmFnZ2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3aWR0aCwgc2V0V2lkdGhdID0gdXNlU3RhdGUoNjEpOyAvLyBpbml0aWFsIHdpZHRoXG4gIGNvbnN0IFtjb21wb25lbnRXaWR0aCwgc2V0Q29tcG9uZW50V2lkdGhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaXMgb3BlblwiLCBpc09wZW4pO1xuICB9LCBbaXNPcGVuXSk7XG5cbiAgLy8gY3VzdG9tIHN0eWxlXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcbiAgICB3aWR0aDogYCR7d2lkdGh9JWAsXG4gICAgaGVpZ2h0OiBcIjk4JVwiLFxuICAgIC8vIGN1cnNvcjogJ2NvbC1yZXNpemUnLFxuICAgIC8vIHRyYW5zaXRpb246IFwid2lkdGggMXMgZWFzZS1pbi1vdXRcIixcbiAgICB0cmFuc2l0aW9uOiBcIndpZHRoIDFzIGN1YmljLWJlemllcigwLjY1LCAtMC4xNCwgMC4yNCwgMS4wNikgMHNcIixcbiAgICB6SW5kZXg6IFwiMTAwXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICByaWdodDogXCIwcHhcIixcbiAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI0MHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICB9O1xuXG4gIC8vIGV2ZW50IGhhbmRsZXIgZm9yIHJlc2l6aW5nXG4gIGxldCBmaXJzdFdpZHRoO1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuZXdXaWR0aCA9IGV2ZW50LnBhZ2VYO1xuICAgIGlmICghZmlyc3RXaWR0aCkge1xuICAgICAgZmlyc3RXaWR0aCA9IG5ld1dpZHRoO1xuICAgIH1cbiAgICBpZiAoZmlyc3RXaWR0aCA+IG5ld1dpZHRoKSB7XG4gICAgICBzZXRXaWR0aCg5MS4zKTtcbiAgICAgIGNvbnNvbGUubG9nKFwibGVmdFwiKTtcbiAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0V2lkdGggPCBuZXdXaWR0aCkge1xuICAgICAgc2V0V2lkdGgoNjEpO1xuICAgICAgY29uc29sZS5sb2coXCJyaWdodFwiKTtcbiAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm90XCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlzRHJhZ2dpbmcpO1xuICAgIGlmIChpc0RyYWdnaW5nKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoKSA9PiBzZXRJc0RyYWdnaW5nKGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKCkgPT4gc2V0SXNEcmFnZ2luZyhmYWxzZSkpO1xuICAgIH07XG4gIH0sIFtpc0RyYWdnaW5nXSk7XG5cbiAgLy8gY29uc3QgQm90dG9tUGxheWxpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgLy8gICAgIHJldHVybiAoXG4gIC8vICAgICAgICAgY29udGV4dERhdGEucGxheUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAvLyAgICAgICAgICAgICByZXR1cm4gKFxuICAvLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5fSA+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9ib3R0b21QbGF5bGlzdF9ib2R5X25hbWV9IHJlZj17aW5wdXRSZWZ9PlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD57U3RyaW5nKGluZGV4ICsgMSkubGVuZ3RoID09PSAxID8gKFwiMFwiICsgU3RyaW5nKGluZGV4ICsgMSkpIDogaW5kZXggKyAxfTwvcD5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nLnNyY30gIC8+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+IHtpdGVtLnRpdGxlfSA8L2g0PlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtpdGVtLmFydGlzdH0gPC9wPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHlfZ2VucmV9ID5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtpdGVtLmdlbnJlfSA8L3A+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG9wYWNpdHk6IFwiMC41XCIgfX0+IHtpdGVtLmlkfSA8L3A+XG5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHlfbGlrZX0gPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSGVhcnR9IC8+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAuLi4gPC9zcGFuPlxuXG4gIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgKVxuICAvLyAgICAgICAgIH0pXG4gIC8vICAgICApXG4gIC8vIH0sW2NvbnRleHREYXRhLnBsYXlMaXN0XSlcblxuICAvLyBjb25zdCBCb3R0b21QbGF5bGlzdCA9ICgpID0+IHtcbiAgLy8gICAgIGNvbnN0IG1lbW9pemVkUGxheWxpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgLy8gICAgICAgICByZXR1cm4gY29udGV4dERhdGEucGxheUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHl9IGtleT17aXRlbS5pZH0+XG4gIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHlfbmFtZX0gcmVmPXtpbnB1dFJlZn0+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntTdHJpbmcoaW5kZXggKyAxKS5sZW5ndGggPT09IDEgPyAoXCIwXCIgKyBTdHJpbmcoaW5kZXggKyAxKSkgOiBpbmRleCArIDF9PC9wPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWcuc3JjfSAgLz5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ge2l0ZW0udGl0bGV9IDwvaDQ+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2l0ZW0uYXJ0aXN0fSA8L3A+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keV9nZW5yZX0gPlxuICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ge2l0ZW0uZ2VucmV9IDwvcD5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgb3BhY2l0eTogXCIwLjVcIiB9fT4ge2l0ZW0uaWR9IDwvcD5cblxuICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfYm90dG9tUGxheWxpc3RfYm9keV9saWtlfSA+XG4gIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFIZWFydH0gLz5cbiAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IC4uLiA8L3NwYW4+XG5cbiAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgKSk7XG4gIC8vICAgICB9LCBbY29udGV4dERhdGEucGxheUxpc3RdKTsgLy8gUmVjYWxjdWxhdGUgb25seSBpZiBjb250ZXh0RGF0YS5wbGF5TGlzdCBjaGFuZ2VzXG5cbiAgLy8gICAgIHJldHVybiAoXG4gIC8vICAgICAgICAgPGRpdj5cbiAgLy8gICAgICAgICAgICAge21lbW9pemVkUGxheWxpc3R9XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICApO1xuICAvLyB9XG4gIC8vIGNvbnN0IFtib3hXaWR0aCwgc2V0Qm94V2lkdGhdID0gdXNlU3RhdGUobnVsbClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBjb25zdCB3aWR0aCA9IGNvbXBvbmVudFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgc2V0Q29tcG9uZW50V2lkdGgod2lkdGgpO1xuICAgIH07XG5cbiAgICAvLyBDYWxsIHRoZSBoYW5kbGVSZXNpemUgZnVuY3Rpb24gd2hlbiB0aGUgY29tcG9uZW50IHJlbmRlcnMgaW5pdGlhbGx5XG4gICAgaGFuZGxlUmVzaXplKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblxuICAgIC8vIENsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lciB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluRGl2fT5cblxuICAgIDxkaXZcbiAgICAgIHJlZj17Y29tcG9uZW50UmVmfVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgb25Nb3VzZURvd249eygpID0+IHNldElzRHJhZ2dpbmcodHJ1ZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcl9oZWFkZXJ9PlxuICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY292ZXJfaGVhZGVyX29wdGlvbnN9PlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFCZWxsfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBvcGFjaXR5LTQwIG1yLVstMjRweF0gXCJcbiAgICAgICAgICAgICAgaWNvbj17ZmFNYWduaWZ5aW5nR2xhc3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNyBzaGFkb3ctWzBweF8wcHhfNXB4XzBweF8jZDhkOGQ4XSBib3JkZXItbm9uZSByb3VuZGVkLW1kIHRleHQtYmxhY2sgcGwtNyAgYmctd2hpdGUgbXItNiBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGNvbXBvbmVudFdpZHRoICogMC45IH19XG4gICAgICAgIGNsYXNzTmFtZT1cIiBoLVsyMzBweF0gbWluLWgtWzIwMHB4XSBiZy1ibHVlLTIwMCBteC1hdXRvIFwiXG4gICAgICA+PC9kaXY+XG4gICAgICB7Lyoge2NvbnNvbGUubG9nKGJveFdpZHRoKX0gKi99XG4gICAgICB7LyogPFN0YWdlXG4gICAgICAgICAgICAgICAgd2lkdGg9e2JveFdpZHRoICogMC41fVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0ICogMC41fVxuICAgICAgICAgICAgICAgIG9uV2hlZWw9e2hhbmRsZVdoZWVsfVxuICAgICAgICAgICAgICAgIHNjYWxlWD17c3RhZ2Uuc3RhZ2VTY2FsZX1cbiAgICAgICAgICAgICAgICBzY2FsZVk9e3N0YWdlLnN0YWdlU2NhbGV9XG4gICAgICAgICAgICAgICAgeD17c3RhZ2Uuc3RhZ2VYfVxuICAgICAgICAgICAgICAgIHk9e3N0YWdlLnN0YWdlWX1cbiAgICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIC8+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgcHgtMTAgZmxleCAgb3ZlcmZsb3cteS1hdXRvICBcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogY29tcG9uZW50V2lkdGggKiAwLjkgfX0gY2xhc3NOYW1lPVwiaC1mdWxsIG92ZXJmbG93LXktYXV0b1wiID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2hlYWRlcn0+XG4gICAgICAgICAgICA8aDM+VHJlbmRpbmcgcmlnaHQgbm93PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBcIj5zZWUgYWxsPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdmVyX2JvdHRvbVBsYXlsaXN0X2JvZHl9PiAqL31cbiAgICAgICAgICA8Qm90dG9tUGxheWxpc3QgcGxheUxpc3Q9e2NvbnRleHREYXRhLnBsYXlMaXN0fSAvPlxuICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17IWlzT3Blbj97ZGlzcGxheTpcIm5vbmVcIn06e319IGNsYXNzTmFtZT1cImJnLWdyZWVuLTMwMCB3LTEwIGgtMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCBlYXNlLWluLW91dFwiPjwvZGl2PlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIC8vIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlX0NvdmVyO1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0Iiwic3R5bGVzIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNYWduaWZ5aW5nR2xhc3MiLCJmYUJlbGwiLCJmYUhlYXJ0IiwiQm90dG9tUGxheWxpc3QiLCJNYWluUGFnZV9Db3ZlciIsImNvbnRleHREYXRhIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJ3aWR0aCIsInNldFdpZHRoIiwiY29tcG9uZW50V2lkdGgiLCJzZXRDb21wb25lbnRXaWR0aCIsImNvbXBvbmVudFJlZiIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZSIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiekluZGV4IiwicG9zaXRpb24iLCJyaWdodCIsIm1hcmdpbiIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiZmlyc3RXaWR0aCIsImhhbmRsZVJlc2l6ZSIsImV2ZW50IiwibmV3V2lkdGgiLCJwYWdlWCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93IiwiZGl2IiwicmVmIiwib25Nb3VzZURvd24iLCJjbGFzc05hbWUiLCJjb3Zlcl9oZWFkZXIiLCJoMSIsImNvdmVyX2hlYWRlcl9vcHRpb25zIiwiaWNvbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJjb3Zlcl9ib3R0b21QbGF5bGlzdF9oZWFkZXIiLCJoMyIsInAiLCJwbGF5TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/component_handler/pages/mainPage/cover/index.js\n"));

/***/ })

});