"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/provider.js":
/*!*****************************!*\
  !*** ./context/provider.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/img/aseman_abri.jpg */ \"./public/img/aseman_abri.jpg\");\n/* harmony import */ var _public_img_Diyare_Asheghihayam_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/img/Diyare-Asheghihayam.jpg */ \"./public/img/Diyare-Asheghihayam.jpg\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst Provider = (param, props)=>{\n    let { children  } = param;\n    _s();\n    const smallBoxData = [\n        {\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            title: \"aseman abrist\",\n            artist: \"Homayoon shajarian\",\n            genre: \"\"\n        },\n        {\n            img: _public_img_Diyare_Asheghihayam_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            title: \"diare asheghi hayam\",\n            artist: \"Homayoon shajarian\",\n            genre: \"\"\n        },\n        {\n            img: _public_img_Diyare_Asheghihayam_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            title: \"aseman abrist\",\n            artist: \"Homayoon shajarian\",\n            genre: \"\"\n        }\n    ];\n    // const mainURL = \"https://api.mobolet.ir/\"\n    const [showingPage, setShowingPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"main\");\n    //brand_menu Data\n    const [playingMusic, setPlayingMusic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        url: \"\",\n        title: \"aseman abrist\",\n        artist: \"Homayoon shajarian\",\n        genre: \"\"\n    });\n    const [playList, setPlayList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"0001\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://media-vip.my-pishvaz.com/musicfa/tagdl/downloads/Homayoun%20Shajaryan%20-%20Ahay%20Khabardar%20(320).mp3?st=K3nR8_23knD0-0kncyUY5Q&e=1679516219\",\n            title: \"ahay khabar dar\",\n            artist: \"Homayoon shajarian\",\n            genre: \"pop\",\n            isLiked: true\n        },\n        {\n            id: \"0002\",\n            img: _public_img_Diyare_Asheghihayam_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            url: \"https://media-vip.my-pishvaz.com/musicfa/tagdl/ati/Homayoun%20Shajaryan%20-%20Diare%20Asheghihayam%20(320).mp3?st=yZlF1qZQASEImMZZbEQIFw&e=1679516219\",\n            title: \"دیار عاشقی هایم\",\n            artist: \"Homayoon shajarian\",\n            genre: \"jazz\",\n            isLiked: false\n        },\n        {\n            id: \"0003\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0004\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0005\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0006\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0007\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0008\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0009\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0010\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        },\n        {\n            id: \"0011\",\n            img: _public_img_aseman_abri_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            url: \"https://ups.music-fa.com/tagdl/8e401/Homayoun%20Shajaryan%20-%20Khoon%20Az%20Rokham%20Beshooy%20(320).mp3?_gl=1*9ecu53*_ga*MTc3MDQzNDg5Mi4xNjc5NTAzMjY5*_ga_FKQYXDVPQM*MTY3OTUxNTAxNC4yLjEuMTY3OTUxNTAxOC4wLjAuMA..&_ga=2.188433320.1243687680.1679503277-1770434892.1679503269\",\n            title: \"khoon az rokham beshavi\",\n            artist: \"Homayoon shajarian\",\n            genre: \"rock\",\n            isLiked: false\n        }\n    ]);\n    const [music, setMusic] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [playingTrack, setPlayingTrack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            showingPage,\n            setShowingPage,\n            smallBoxData,\n            playingMusic,\n            setPlayingMusic,\n            music,\n            setMusic,\n            playingTrack,\n            setPlayingTrack,\n            playList,\n            setPlayList\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/alijavadpour/Desktop/doremi/context/provider.js\",\n        lineNumber: 145,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Provider, \"MMw0lnr/J4vgJfjzF8hrkyRqE9M=\");\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUd4QiwrQ0FBUUEsQ0FBQztJQUVqRCxxQkFDQyw4REFBQ0csWUFBWUMsUUFBUTtRQUNwQnFCLE9BQU87WUFDTmI7WUFBYUM7WUFDYk47WUFDQU87WUFBY0M7WUFDZE07WUFBT0M7WUFDUEM7WUFBY0M7WUFDZFA7WUFBVUM7UUFFWDtrQkFFQ1o7Ozs7OztBQUdKO0dBdkpNRjtLQUFBQTtBQXdKTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L3Byb3ZpZGVyLmpzPzFlMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGltYWdlMSBmcm9tIFwiLi4vcHVibGljL2ltZy9hc2VtYW5fYWJyaS5qcGdcIlxuaW1wb3J0IGltYWdlMiBmcm9tIFwiLi4vcHVibGljL2ltZy9EaXlhcmUtQXNoZWdoaWhheWFtLmpwZ1wiXG5cblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0sIHByb3BzKSA9PiB7XG5cblx0Y29uc3Qgc21hbGxCb3hEYXRhID0gW1xuXHRcdHtcblx0XHRcdGltZzogaW1hZ2UxLFxuXHRcdFx0dGl0bGU6IFwiYXNlbWFuIGFicmlzdFwiLFxuXHRcdFx0YXJ0aXN0OiBcIkhvbWF5b29uIHNoYWphcmlhblwiLFxuXHRcdFx0Z2VucmU6IFwiXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdGltZzogaW1hZ2UyLFxuXHRcdFx0dGl0bGU6IFwiZGlhcmUgYXNoZWdoaSBoYXlhbVwiLFxuXHRcdFx0YXJ0aXN0OiBcIkhvbWF5b29uIHNoYWphcmlhblwiLFxuXHRcdFx0Z2VucmU6IFwiXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdGltZzogaW1hZ2UyLFxuXHRcdFx0dGl0bGU6IFwiYXNlbWFuIGFicmlzdFwiLFxuXHRcdFx0YXJ0aXN0OiBcIkhvbWF5b29uIHNoYWphcmlhblwiLFxuXHRcdFx0Z2VucmU6IFwiXCJcblx0XHR9LFxuXHRdXG5cdC8vIGNvbnN0IG1haW5VUkwgPSBcImh0dHBzOi8vYXBpLm1vYm9sZXQuaXIvXCJcblx0Y29uc3QgW3Nob3dpbmdQYWdlLCBzZXRTaG93aW5nUGFnZV0gPSB1c2VTdGF0ZShcIm1haW5cIilcblx0Ly9icmFuZF9tZW51IERhdGFcblx0Y29uc3QgW3BsYXlpbmdNdXNpYywgc2V0UGxheWluZ011c2ljXSA9IHVzZVN0YXRlKHtcblx0XHRpbWc6IGltYWdlMSxcblx0XHR1cmw6IFwiXCIsXG5cdFx0dGl0bGU6IFwiYXNlbWFuIGFicmlzdFwiLFxuXHRcdGFydGlzdDogXCJIb21heW9vbiBzaGFqYXJpYW5cIixcblx0XHRnZW5yZTogXCJcIlxuXHR9KVxuXHRjb25zdCBbcGxheUxpc3QsIHNldFBsYXlMaXN0XSA9IHVzZVN0YXRlKFtcblx0XHR7XG5cdFx0XHRpZDogXCIwMDAxXCIsXG5cdFx0XHRpbWc6IGltYWdlMSxcblx0XHRcdHVybDogXCJodHRwczovL21lZGlhLXZpcC5teS1waXNodmF6LmNvbS9tdXNpY2ZhL3RhZ2RsL2Rvd25sb2Fkcy9Ib21heW91biUyMFNoYWphcnlhbiUyMC0lMjBBaGF5JTIwS2hhYmFyZGFyJTIwKDMyMCkubXAzP3N0PUszblI4XzIza25EMC0wa25jeVVZNVEmZT0xNjc5NTE2MjE5XCIsXG5cdFx0XHR0aXRsZTogXCJhaGF5IGtoYWJhciBkYXJcIixcblx0XHRcdGFydGlzdDogXCJIb21heW9vbiBzaGFqYXJpYW5cIixcblx0XHRcdGdlbnJlOiBcInBvcFwiLFxuXHRcdFx0aXNMaWtlZDogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IFwiMDAwMlwiLFxuXHRcdFx0aW1nOiBpbWFnZTIsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9tZWRpYS12aXAubXktcGlzaHZhei5jb20vbXVzaWNmYS90YWdkbC9hdGkvSG9tYXlvdW4lMjBTaGFqYXJ5YW4lMjAtJTIwRGlhcmUlMjBBc2hlZ2hpaGF5YW0lMjAoMzIwKS5tcDM/c3Q9eVpsRjFxWlFBU0VJbU1aWmJFUUlGdyZlPTE2Nzk1MTYyMTlcIixcblx0XHRcdHRpdGxlOiBcItiv24zYp9ixINi52KfYtNmC24wg2YfYp9uM2YVcIixcblx0XHRcdGFydGlzdDogXCJIb21heW9vbiBzaGFqYXJpYW5cIixcblx0XHRcdGdlbnJlOiBcImphenpcIixcblx0XHRcdGlzTGlrZWQ6IGZhbHNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogXCIwMDAzXCIsXG5cdFx0XHRpbWc6IGltYWdlMSxcblx0XHRcdHVybDogXCJodHRwczovL3Vwcy5tdXNpYy1mYS5jb20vdGFnZGwvOGU0MDEvSG9tYXlvdW4lMjBTaGFqYXJ5YW4lMjAtJTIwS2hvb24lMjBBeiUyMFJva2hhbSUyMEJlc2hvb3klMjAoMzIwKS5tcDM/X2dsPTEqOWVjdTUzKl9nYSpNVGMzTURRek5EZzVNaTR4TmpjNU5UQXpNalk1Kl9nYV9GS1FZWERWUFFNKk1UWTNPVFV4TlRBeE5DNHlMakV1TVRZM09UVXhOVEF4T0M0d0xqQXVNQS4uJl9nYT0yLjE4ODQzMzMyMC4xMjQzNjg3NjgwLjE2Nzk1MDMyNzctMTc3MDQzNDg5Mi4xNjc5NTAzMjY5XCIsXG5cdFx0XHR0aXRsZTogXCJraG9vbiBheiByb2toYW0gYmVzaGF2aVwiLFxuXHRcdFx0YXJ0aXN0OiBcIkhvbWF5b29uIHNoYWphcmlhblwiLFxuXHRcdFx0Z2VucmU6IFwicm9ja1wiLFxuXHRcdFx0aXNMaWtlZDogZmFsc2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiBcIjAwMDRcIixcblx0XHRcdGltZzogaW1hZ2UxLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vdXBzLm11c2ljLWZhLmNvbS90YWdkbC84ZTQwMS9Ib21heW91biUyMFNoYWphcnlhbiUyMC0lMjBLaG9vbiUyMEF6JTIwUm9raGFtJTIwQmVzaG9veSUyMCgzMjApLm1wMz9fZ2w9MSo5ZWN1NTMqX2dhKk1UYzNNRFF6TkRnNU1pNHhOamM1TlRBek1qWTUqX2dhX0ZLUVlYRFZQUU0qTVRZM09UVXhOVEF4TkM0eUxqRXVNVFkzT1RVeE5UQXhPQzR3TGpBdU1BLi4mX2dhPTIuMTg4NDMzMzIwLjEyNDM2ODc2ODAuMTY3OTUwMzI3Ny0xNzcwNDM0ODkyLjE2Nzk1MDMyNjlcIixcblx0XHRcdHRpdGxlOiBcImtob29uIGF6IHJva2hhbSBiZXNoYXZpXCIsXG5cdFx0XHRhcnRpc3Q6IFwiSG9tYXlvb24gc2hhamFyaWFuXCIsXG5cdFx0XHRnZW5yZTogXCJyb2NrXCIsXG5cdFx0XHRpc0xpa2VkOiBmYWxzZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IFwiMDAwNVwiLFxuXHRcdFx0aW1nOiBpbWFnZTEsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly91cHMubXVzaWMtZmEuY29tL3RhZ2RsLzhlNDAxL0hvbWF5b3VuJTIwU2hhamFyeWFuJTIwLSUyMEtob29uJTIwQXolMjBSb2toYW0lMjBCZXNob295JTIwKDMyMCkubXAzP19nbD0xKjllY3U1MypfZ2EqTVRjM01EUXpORGc1TWk0eE5qYzVOVEF6TWpZNSpfZ2FfRktRWVhEVlBRTSpNVFkzT1RVeE5UQXhOQzR5TGpFdU1UWTNPVFV4TlRBeE9DNHdMakF1TUEuLiZfZ2E9Mi4xODg0MzMzMjAuMTI0MzY4NzY4MC4xNjc5NTAzMjc3LTE3NzA0MzQ4OTIuMTY3OTUwMzI2OVwiLFxuXHRcdFx0dGl0bGU6IFwia2hvb24gYXogcm9raGFtIGJlc2hhdmlcIixcblx0XHRcdGFydGlzdDogXCJIb21heW9vbiBzaGFqYXJpYW5cIixcblx0XHRcdGdlbnJlOiBcInJvY2tcIixcblx0XHRcdGlzTGlrZWQ6IGZhbHNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogXCIwMDA2XCIsXG5cdFx0XHRpbWc6IGltYWdlMSxcblx0XHRcdHVybDogXCJodHRwczovL3Vwcy5tdXNpYy1mYS5jb20vdGFnZGwvOGU0MDEvSG9tYXlvdW4lMjBTaGFqYXJ5YW4lMjAtJTIwS2hvb24lMjBBeiUyMFJva2hhbSUyMEJlc2hvb3klMjAoMzIwKS5tcDM/X2dsPTEqOWVjdTUzKl9nYSpNVGMzTURRek5EZzVNaTR4TmpjNU5UQXpNalk1Kl9nYV9GS1FZWERWUFFNKk1UWTNPVFV4TlRBeE5DNHlMakV1TVRZM09UVXhOVEF4T0M0d0xqQXVNQS4uJl9nYT0yLjE4ODQzMzMyMC4xMjQzNjg3NjgwLjE2Nzk1MDMyNzctMTc3MDQzNDg5Mi4xNjc5NTAzMjY5XCIsXG5cdFx0XHR0aXRsZTogXCJraG9vbiBheiByb2toYW0gYmVzaGF2aVwiLFxuXHRcdFx0YXJ0aXN0OiBcIkhvbWF5b29uIHNoYWphcmlhblwiLFxuXHRcdFx0Z2VucmU6IFwicm9ja1wiLFxuXHRcdFx0aXNMaWtlZDogZmFsc2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiBcIjAwMDdcIixcblx0XHRcdGltZzogaW1hZ2UxLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vdXBzLm11c2ljLWZhLmNvbS90YWdkbC84ZTQwMS9Ib21heW91biUyMFNoYWphcnlhbiUyMC0lMjBLaG9vbiUyMEF6JTIwUm9raGFtJTIwQmVzaG9veSUyMCgzMjApLm1wMz9fZ2w9MSo5ZWN1NTMqX2dhKk1UYzNNRFF6TkRnNU1pNHhOamM1TlRBek1qWTUqX2dhX0ZLUVlYRFZQUU0qTVRZM09UVXhOVEF4TkM0eUxqRXVNVFkzT1RVeE5UQXhPQzR3TGpBdU1BLi4mX2dhPTIuMTg4NDMzMzIwLjEyNDM2ODc2ODAuMTY3OTUwMzI3Ny0xNzcwNDM0ODkyLjE2Nzk1MDMyNjlcIixcblx0XHRcdHRpdGxlOiBcImtob29uIGF6IHJva2hhbSBiZXNoYXZpXCIsXG5cdFx0XHRhcnRpc3Q6IFwiSG9tYXlvb24gc2hhamFyaWFuXCIsXG5cdFx0XHRnZW5yZTogXCJyb2NrXCIsXG5cdFx0XHRpc0xpa2VkOiBmYWxzZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IFwiMDAwOFwiLFxuXHRcdFx0aW1nOiBpbWFnZTEsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly91cHMubXVzaWMtZmEuY29tL3RhZ2RsLzhlNDAxL0hvbWF5b3VuJTIwU2hhamFyeWFuJTIwLSUyMEtob29uJTIwQXolMjBSb2toYW0lMjBCZXNob295JTIwKDMyMCkubXAzP19nbD0xKjllY3U1MypfZ2EqTVRjM01EUXpORGc1TWk0eE5qYzVOVEF6TWpZNSpfZ2FfRktRWVhEVlBRTSpNVFkzT1RVeE5UQXhOQzR5TGpFdU1UWTNPVFV4TlRBeE9DNHdMakF1TUEuLiZfZ2E9Mi4xODg0MzMzMjAuMTI0MzY4NzY4MC4xNjc5NTAzMjc3LTE3NzA0MzQ4OTIuMTY3OTUwMzI2OVwiLFxuXHRcdFx0dGl0bGU6IFwia2hvb24gYXogcm9raGFtIGJlc2hhdmlcIixcblx0XHRcdGFydGlzdDogXCJIb21heW9vbiBzaGFqYXJpYW5cIixcblx0XHRcdGdlbnJlOiBcInJvY2tcIixcblx0XHRcdGlzTGlrZWQ6IGZhbHNlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpZDogXCIwMDA5XCIsXG5cdFx0XHRpbWc6IGltYWdlMSxcblx0XHRcdHVybDogXCJodHRwczovL3Vwcy5tdXNpYy1mYS5jb20vdGFnZGwvOGU0MDEvSG9tYXlvdW4lMjBTaGFqYXJ5YW4lMjAtJTIwS2hvb24lMjBBeiUyMFJva2hhbSUyMEJlc2hvb3klMjAoMzIwKS5tcDM/X2dsPTEqOWVjdTUzKl9nYSpNVGMzTURRek5EZzVNaTR4TmpjNU5UQXpNalk1Kl9nYV9GS1FZWERWUFFNKk1UWTNPVFV4TlRBeE5DNHlMakV1TVRZM09UVXhOVEF4T0M0d0xqQXVNQS4uJl9nYT0yLjE4ODQzMzMyMC4xMjQzNjg3NjgwLjE2Nzk1MDMyNzctMTc3MDQzNDg5Mi4xNjc5NTAzMjY5XCIsXG5cdFx0XHR0aXRsZTogXCJraG9vbiBheiByb2toYW0gYmVzaGF2aVwiLFxuXHRcdFx0YXJ0aXN0OiBcIkhvbWF5b29uIHNoYWphcmlhblwiLFxuXHRcdFx0Z2VucmU6IFwicm9ja1wiLFxuXHRcdFx0aXNMaWtlZDogZmFsc2Vcblx0XHR9LFxuXHRcdHtcblx0XHRcdGlkOiBcIjAwMTBcIixcblx0XHRcdGltZzogaW1hZ2UxLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vdXBzLm11c2ljLWZhLmNvbS90YWdkbC84ZTQwMS9Ib21heW91biUyMFNoYWphcnlhbiUyMC0lMjBLaG9vbiUyMEF6JTIwUm9raGFtJTIwQmVzaG9veSUyMCgzMjApLm1wMz9fZ2w9MSo5ZWN1NTMqX2dhKk1UYzNNRFF6TkRnNU1pNHhOamM1TlRBek1qWTUqX2dhX0ZLUVlYRFZQUU0qTVRZM09UVXhOVEF4TkM0eUxqRXVNVFkzT1RVeE5UQXhPQzR3TGpBdU1BLi4mX2dhPTIuMTg4NDMzMzIwLjEyNDM2ODc2ODAuMTY3OTUwMzI3Ny0xNzcwNDM0ODkyLjE2Nzk1MDMyNjlcIixcblx0XHRcdHRpdGxlOiBcImtob29uIGF6IHJva2hhbSBiZXNoYXZpXCIsXG5cdFx0XHRhcnRpc3Q6IFwiSG9tYXlvb24gc2hhamFyaWFuXCIsXG5cdFx0XHRnZW5yZTogXCJyb2NrXCIsXG5cdFx0XHRpc0xpa2VkOiBmYWxzZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aWQ6IFwiMDAxMVwiLFxuXHRcdFx0aW1nOiBpbWFnZTEsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly91cHMubXVzaWMtZmEuY29tL3RhZ2RsLzhlNDAxL0hvbWF5b3VuJTIwU2hhamFyeWFuJTIwLSUyMEtob29uJTIwQXolMjBSb2toYW0lMjBCZXNob295JTIwKDMyMCkubXAzP19nbD0xKjllY3U1MypfZ2EqTVRjM01EUXpORGc1TWk0eE5qYzVOVEF6TWpZNSpfZ2FfRktRWVhEVlBRTSpNVFkzT1RVeE5UQXhOQzR5TGpFdU1UWTNPVFV4TlRBeE9DNHdMakF1TUEuLiZfZ2E9Mi4xODg0MzMzMjAuMTI0MzY4NzY4MC4xNjc5NTAzMjc3LTE3NzA0MzQ4OTIuMTY3OTUwMzI2OVwiLFxuXHRcdFx0dGl0bGU6IFwia2hvb24gYXogcm9raGFtIGJlc2hhdmlcIixcblx0XHRcdGFydGlzdDogXCJIb21heW9vbiBzaGFqYXJpYW5cIixcblx0XHRcdGdlbnJlOiBcInJvY2tcIixcblx0XHRcdGlzTGlrZWQ6IGZhbHNlXG5cdFx0fSxcblx0XSlcblx0Y29uc3QgW211c2ljLCBzZXRNdXNpY10gPSB1c2VTdGF0ZShudWxsKVxuXHRjb25zdCBbcGxheWluZ1RyYWNrLCBzZXRQbGF5aW5nVHJhY2tdID0gdXNlU3RhdGUoMClcblxuXHRyZXR1cm4gKFxuXHRcdDxVc2VyQ29udGV4dC5Qcm92aWRlclxuXHRcdFx0dmFsdWU9e3tcblx0XHRcdFx0c2hvd2luZ1BhZ2UsIHNldFNob3dpbmdQYWdlLFxuXHRcdFx0XHRzbWFsbEJveERhdGEsXG5cdFx0XHRcdHBsYXlpbmdNdXNpYywgc2V0UGxheWluZ011c2ljLFxuXHRcdFx0XHRtdXNpYywgc2V0TXVzaWMsXG5cdFx0XHRcdHBsYXlpbmdUcmFjaywgc2V0UGxheWluZ1RyYWNrLFxuXHRcdFx0XHRwbGF5TGlzdCwgc2V0UGxheUxpc3QsXG5cblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJpbWFnZTEiLCJpbWFnZTIiLCJVc2VyQ29udGV4dCIsIlByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInNtYWxsQm94RGF0YSIsImltZyIsInRpdGxlIiwiYXJ0aXN0IiwiZ2VucmUiLCJzaG93aW5nUGFnZSIsInNldFNob3dpbmdQYWdlIiwicGxheWluZ011c2ljIiwic2V0UGxheWluZ011c2ljIiwidXJsIiwicGxheUxpc3QiLCJzZXRQbGF5TGlzdCIsImlkIiwiaXNMaWtlZCIsIm11c2ljIiwic2V0TXVzaWMiLCJwbGF5aW5nVHJhY2siLCJzZXRQbGF5aW5nVHJhY2siLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/provider.js\n"));

/***/ })

});