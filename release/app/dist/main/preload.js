!function(e,o){if("object"==typeof exports&&"object"==typeof module)module.exports=o();else if("function"==typeof define&&define.amd)define([],o);else{var r=o();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o);const r=require("electron");return r.contextBridge.exposeInMainWorld("electron",{ipcRenderer:{sendMessage(e,o){r.ipcRenderer.send(e,o)},on(e,o){const n=(e,...r)=>o(...r);return r.ipcRenderer.on(e,n),()=>r.ipcRenderer.removeListener(e,n)},once(e,o){r.ipcRenderer.once(e,((e,...r)=>o(...r)))}}}),o})()));
//# sourceMappingURL=preload.js.map