!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).i18nextHttpBackend=e()}(function(){return function o(i,r,a){function s(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=r[t]={exports:{}},i[t][0].call(n.exports,function(e){return s(i[t][1][e]||e)},n,n.exports,o,i,r,a)}return r[t].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)s(a[e]);return s}({1:[function(n,o,i){!function(t){!function(){var e;"function"==typeof fetch&&(e=void 0!==t&&t.fetch?t.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),void 0===n||"undefined"!=typeof window&&void 0!==window.document||((e=e||n("cross-fetch")).default&&(e=e.default),i.default=e,o.exports=i.default)}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"cross-fetch":5}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=e("./utils.js"),o=(e=e("./request.js"))&&e.__esModule?e:{default:e};function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:function(e){return JSON.parse(e)},stringify:JSON.stringify,parsePayload:function(e,t,n){return n=n||"",(t=t)in(o={})?Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[t]=n,o;var o},request:o.default,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}}e=f,(u=[{key:"init",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=(0,s.defaults)(n,this.options||{},r()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval(function(){return t.reload()},this.options.reloadInterval)}},{key:"readMulti",value:function(e,t,n){this._readAny(e,e,t,t,n)}},{key:"read",value:function(e,t,n){this._readAny([e],e,[t],t,n)}},{key:"_readAny",value:function(t,n,o,i,r){var a=this,e=this.options.loadPath;"function"==typeof this.options.loadPath&&(e=this.options.loadPath(t,o)),(e=(0,s.makePromise)(e)).then(function(e){if(!e)return r(null,{});e=a.services.interpolator.interpolate(e,{lng:t.join("+"),ns:o.join("+")});a.loadUrl(e,r,n,i)})}},{key:"loadUrl",value:function(i,r,a,s){var u=this;this.options.request(this.options,i,void 0,function(e,t){if(t&&(500<=t.status&&t.status<600||!t.status))return r("failed loading "+i+"; status code: "+t.status,!0);if(t&&400<=t.status&&t.status<500)return r("failed loading "+i+"; status code: "+t.status,!1);if(!t&&e&&e.message&&-1<e.message.indexOf("Failed to fetch"))return r("failed loading "+i+": "+e.message,!0);if(e)return r(e,!1);var n,o;try{n="string"==typeof t.data?u.options.parse(t.data,a,s):t.data}catch(e){o="failed parsing "+i+" to json"}if(o)return r(o,!1);r(null,n)})}},{key:"create",value:function(n,o,e,t,i){var r,a,s,u,f=this;this.options.addPath&&("string"==typeof n&&(n=[n]),r=this.options.parsePayload(o,e,t),a=0,s=[],u=[],n.forEach(function(e){var t=f.options.addPath,t=("function"==typeof f.options.addPath&&(t=f.options.addPath(e,o)),f.services.interpolator.interpolate(t,{lng:e,ns:o}));f.options.request(f.options,t,r,function(e,t){a+=1,s.push(e),u.push(t),a===n.length&&i&&i(s,u)})}))}},{key:"reload",value:function(){var t,e,n=this,o=this.services,i=o.backendConnector,r=o.languageUtils,a=o.logger,o=i.language;o&&"cimode"===o.toLowerCase()||(t=[],(e=function(e){r.toResolveHierarchy(e).forEach(function(e){t.indexOf(e)<0&&t.push(e)})})(o),this.allOptions.preload&&this.allOptions.preload.forEach(e),t.forEach(function(o){n.allOptions.ns.forEach(function(n){i.read(o,n,"read",null,null,function(e,t){e&&a.warn("loading namespace ".concat(n," for language ").concat(o," failed"),e),!e&&t&&a.log("loaded namespace ".concat(n," for language ").concat(o),t),i.loaded("".concat(o,"|").concat(n),e,t)})})}))}}])&&i(e.prototype,u),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1});var a,u=f;function f(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=this,i=f;if(!(o instanceof i))throw new TypeError("Cannot call a class as a function");this.services=e,this.options=t,this.allOptions=n,this.type="backend",this.init(e,t,n)}u.type="backend",n.default=u,t.exports=n.default},{"./request.js":3,"./utils.js":4}],3:[function(n,o,i){!function(t){!function(){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var h,v,w,g=n("./utils.js"),e=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==m(e)&&"function"!=typeof e)return{default:e};t=a(t);if(t&&t.has(e))return t.get(e);var n,o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var r;"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&((r=i?Object.getOwnPropertyDescriptor(e,n):null)&&(r.get||r.set)?Object.defineProperty(o,n,r):o[n]=e[n])}o.default=e,t&&t.set(e,o);return o}(n("./getFetch.js"));function a(e){var t,n;return"function"!=typeof WeakMap?null:(t=new WeakMap,n=new WeakMap,(a=function(e){return e?n:t})(e))}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"==typeof fetch&&(h=void 0!==t&&t.fetch?t.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),(0,g.hasXMLHttpRequest)()&&(void 0!==t&&t.XMLHttpRequest?v=t.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(v=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&(void 0!==t&&t.ActiveXObject?w=t.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(w=window.ActiveXObject)),"function"!=typeof(h=h||!e||v||w?h:e.default||e)&&(h=void 0);var b=function(e,t){if(t&&"object"===m(t)){var n,o="";for(n in t)o+="&"+encodeURIComponent(n)+"="+encodeURIComponent(t[n]);if(!o)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+o.slice(1)}return e},O=function(e,t,n){h(e,t).then(function(t){if(!t.ok)return n(t.statusText||"Error",{status:t.status});t.text().then(function(e){n(null,{status:t.status,data:e})}).catch(n)}).catch(n)},j=!1;i.default=function(e,t,n,o){if("function"==typeof n&&(o=n,n=void 0),o=o||function(){},h){var i=e,r=t,a=n,s=o,u=(i.queryStringParams&&(r=b(r,i.queryStringParams)),(0,g.defaults)({},"function"==typeof i.customHeaders?i.customHeaders():i.customHeaders)),f=(a&&(u["Content-Type"]="application/json"),"function"==typeof i.requestOptions?i.requestOptions(a):i.requestOptions),c=(0,g.defaults)({method:a?"POST":"GET",body:a?i.stringify(a):void 0,headers:u},j?{}:f);try{O(r,c,s)}catch(e){if(!f||0===Object.keys(f).length||!e.message||e.message.indexOf("not implemented")<0)return s(e);try{Object.keys(f).forEach(function(e){delete c[e]}),O(r,c,s),j=!0}catch(e){s(e)}}}else if((0,g.hasXMLHttpRequest)()||"function"==typeof ActiveXObject){var i=e,a=t,u=n,l=o;u&&"object"===m(u)&&(u=b("",u).slice(1)),i.queryStringParams&&(a=b(a,i.queryStringParams));try{var d=v?new v:new w("MSXML2.XMLHTTP.3.0"),p=(d.open(u?"POST":"GET",a,1),i.crossDomain||d.setRequestHeader("X-Requested-With","XMLHttpRequest"),d.withCredentials=!!i.withCredentials,u&&d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.overrideMimeType&&d.overrideMimeType("application/json"),i.customHeaders);if(p="function"==typeof p?p():p)for(var y in p)d.setRequestHeader(y,p[y]);d.onreadystatechange=function(){3<d.readyState&&l(400<=d.status?d.statusText:null,{status:d.status,data:d.responseText})},d.send(u)}catch(e){console&&console.log(e)}}else o(new Error("No fetch and no xhr implementation found!"))},o.exports=i.default}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./getFetch.js":1,"./utils.js":4}],4:[function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.defaults=function(n){return i.call(r.call(arguments,1),function(e){if(e)for(var t in e)void 0===n[t]&&(n[t]=e[t])}),n},n.hasXMLHttpRequest=function(){return"function"==typeof XMLHttpRequest||"object"===("undefined"==typeof XMLHttpRequest?"undefined":o(XMLHttpRequest))},n.makePromise=function(e){if(function(e){return e&&"function"==typeof e.then}(e))return e;return Promise.resolve(e)};var n=[],i=n.forEach,r=n.slice},{}],5:[function(e,t,n){},{}]},{},[2])(2)});