!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["youpin-img"]=e():t["youpin-img"]=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=9)}([function(t,e){(function(e){t.exports=e}).call(this,{})},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t){switch(void 0===t?"undefined":n(t)){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,h){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===(void 0===t?"undefined":n(t))?a(i(t),function(n){var i=encodeURIComponent(o(n))+r;return s(t[n])?a(t[n],function(t){return i+encodeURIComponent(o(t))}).join(e):i+encodeURIComponent(o(t[n]))}).join(e):h?encodeURIComponent(o(h))+r+encodeURIComponent(o(t)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,s){e=e||"&",r=r||"=";var a={};if("string"!=typeof t||0===t.length)return a;var i=/\+/g;t=t.split(e);var h=1e3;s&&"number"==typeof s.maxKeys&&(h=s.maxKeys);var u=t.length;h>0&&u>h&&(u=h);for(var c=0;c<u;++c){var f,l,p,m,y=t[c].replace(i,"%20"),d=y.indexOf(r);d>=0?(f=y.substr(0,d),l=y.substr(d+1)):(f=y,l=""),p=decodeURIComponent(f),m=decodeURIComponent(l),n(a,p)?o(a[p])?a[p].push(m):a[p]=[a[p],m]:a[p]=m}return a};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";e.decode=e.parse=r(2),e.encode=e.stringify=r(1)},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"===(void 0===t?"undefined":n(t))&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,e,r){"use strict";var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(n=window)}t.exports=n},function(t,e,r){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){"use strict";(function(t,n){var o,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(a){var i="object"==s(e)&&e&&!e.nodeType&&e,h="object"==s(t)&&t&&!t.nodeType&&t,u="object"==(void 0===n?"undefined":s(n))&&n;u.global!==u&&u.window!==u&&u.self!==u||(a=u);var c,f,l=2147483647,p=36,m=1,y=26,d=38,v=700,b=72,g=128,j="-",w=/^xn--/,O=/[^\x20-\x7E]/,x=/[\x2E\u3002\uFF0E\uFF61]/g,S={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},P=p-m,C=Math.floor,k=String.fromCharCode;function A(t){throw RangeError(S[t])}function _(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function q(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),n+_((t=t.replace(x,".")).split("."),e).join(".")}function I(t){for(var e,r,n=[],o=0,s=t.length;o<s;)(e=t.charCodeAt(o++))>=55296&&e<=56319&&o<s?56320==(64512&(r=t.charCodeAt(o++)))?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--):n.push(e);return n}function U(t){return _(t,function(t){var e="";return t>65535&&(e+=k((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=k(t)}).join("")}function R(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:p}function E(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function M(t,e,r){var n=0;for(t=r?C(t/v):t>>1,t+=C(t/e);t>P*y>>1;n+=p)t=C(t/P);return C(n+(P+1)*t/(t+d))}function z(t){var e,r,n,o,s,a,i,h,u,c,f=[],d=t.length,v=0,w=g,O=b;for((r=t.lastIndexOf(j))<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&A("not-basic"),f.push(t.charCodeAt(n));for(o=r>0?r+1:0;o<d;){for(s=v,a=1,i=p;o>=d&&A("invalid-input"),((h=R(t.charCodeAt(o++)))>=p||h>C((l-v)/a))&&A("overflow"),v+=h*a,!(h<(u=i<=O?m:i>=O+y?y:i-O));i+=p)a>C(l/(c=p-u))&&A("overflow"),a*=c;O=M(v-s,e=f.length+1,0==s),C(v/e)>l-w&&A("overflow"),w+=C(v/e),v%=e,f.splice(v++,0,w)}return U(f)}function F(t){var e,r,n,o,s,a,i,h,u,c,f,d,v,w,O,x=[];for(d=(t=I(t)).length,e=g,r=0,s=b,a=0;a<d;++a)(f=t[a])<128&&x.push(k(f));for(n=o=x.length,o&&x.push(j);n<d;){for(i=l,a=0;a<d;++a)(f=t[a])>=e&&f<i&&(i=f);for(i-e>C((l-r)/(v=n+1))&&A("overflow"),r+=(i-e)*v,e=i,a=0;a<d;++a)if((f=t[a])<e&&++r>l&&A("overflow"),f==e){for(h=r,u=p;!(h<(c=u<=s?m:u>=s+y?y:u-s));u+=p)O=h-c,w=p-c,x.push(k(E(c+O%w,0))),h=C(O/w);x.push(k(E(h,0))),s=M(r,v,n==o),r=0,++n}++r,++e}return x.join("")}if(c={version:"1.3.2",ucs2:{decode:I,encode:U},decode:z,encode:F,toASCII:function(t){return q(t,function(t){return O.test(t)?"xn--"+F(t):t})},toUnicode:function(t){return q(t,function(t){return w.test(t)?z(t.slice(4).toLowerCase()):t})}},"object"==s(r(0))&&r(0))void 0===(o=function(){return c}.call(e,r,e,t))||(t.exports=o);else if(i&&h)if(t.exports==i)h.exports=c;else for(f in c)c.hasOwnProperty(f)&&(i[f]=c[f]);else a.punycode=c}(void 0)}).call(this,r(6)(t),r(5))},function(t,e,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=r(7),s=r(4);function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=j,e.resolve=function(t,e){return j(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?j(t,!1,!0).resolveObject(e):e},e.format=function(t){s.isString(t)&&(t=j(t));return t instanceof a?t.format():a.prototype.format.call(t)},e.Url=a;var i=/^([a-z0-9.+-]+:)/i,h=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),f=["'"].concat(c),l=["%","/","?",";","#"].concat(f),p=["/","?","#"],m=/^[+a-z0-9A-Z_-]{0,63}$/,y=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},b={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=r(3);function j(t,e,r){if(t&&s.isObject(t)&&t instanceof a)return t;var n=new a;return n.parse(t,e,r),n}a.prototype.parse=function(t,e,r){if(!s.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+(void 0===t?"undefined":n(t)));var a=t.indexOf("?"),h=-1!==a&&a<t.indexOf("#")?"?":"#",c=t.split(h);c[0]=c[0].replace(/\\/g,"/");var j=t=c.join(h);if(j=j.trim(),!r&&1===t.split("#").length){var w=u.exec(j);if(w)return this.path=j,this.href=j,this.pathname=w[1],w[2]?(this.search=w[2],this.query=e?g.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var O=i.exec(j);if(O){var x=(O=O[0]).toLowerCase();this.protocol=x,j=j.substr(O.length)}if(r||O||j.match(/^\/\/[^@\/]+@[^@\/]+/)){var S="//"===j.substr(0,2);!S||O&&v[O]||(j=j.substr(2),this.slashes=!0)}if(!v[O]&&(S||O&&!b[O])){for(var P,C,k=-1,A=0;A<p.length;A++){-1!==(_=j.indexOf(p[A]))&&(-1===k||_<k)&&(k=_)}-1!==(C=-1===k?j.lastIndexOf("@"):j.lastIndexOf("@",k))&&(P=j.slice(0,C),j=j.slice(C+1),this.auth=decodeURIComponent(P)),k=-1;for(A=0;A<l.length;A++){var _;-1!==(_=j.indexOf(l[A]))&&(-1===k||_<k)&&(k=_)}-1===k&&(k=j.length),this.host=j.slice(0,k),j=j.slice(k),this.parseHost(),this.hostname=this.hostname||"";var q="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!q)for(var I=this.hostname.split(/\./),U=(A=0,I.length);A<U;A++){var R=I[A];if(R&&!R.match(m)){for(var E="",M=0,z=R.length;M<z;M++)R.charCodeAt(M)>127?E+="x":E+=R[M];if(!E.match(m)){var F=I.slice(0,A),N=I.slice(A+1),T=R.match(y);T&&(F.push(T[1]),N.unshift(T[2])),N.length&&(j="/"+N.join(".")+j),this.hostname=F.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),q||(this.hostname=o.toASCII(this.hostname));var $=this.port?":"+this.port:"",L=this.hostname||"";this.host=L+$,this.href+=this.host,q&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==j[0]&&(j="/"+j))}if(!d[x])for(A=0,U=f.length;A<U;A++){var H=f[A];if(-1!==j.indexOf(H)){var K=encodeURIComponent(H);K===H&&(K=escape(H)),j=j.split(H).join(K)}}var W=j.indexOf("#");-1!==W&&(this.hash=j.substr(W),j=j.slice(0,W));var Z=j.indexOf("?");if(-1!==Z?(this.search=j.substr(Z),this.query=j.substr(Z+1),e&&(this.query=g.parse(this.query)),j=j.slice(0,Z)):e&&(this.search="",this.query={}),j&&(this.pathname=j),b[x]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){$=this.pathname||"";var B=this.search||"";this.path=$+B}return this.href=this.format(),this},a.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,a="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&s.isObject(this.query)&&Object.keys(this.query).length&&(a=g.stringify(this.query));var i=this.search||a&&"?"+a||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||b[e])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),e+o+(r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}))+(i=i.replace("#","%23"))+n},a.prototype.resolve=function(t){return this.resolveObject(j(t,!1,!0)).format()},a.prototype.resolveObject=function(t){if(s.isString(t)){var e=new a;e.parse(t,!1,!0),t=e}for(var r=new a,n=Object.keys(this),o=0;o<n.length;o++){var i=n[o];r[i]=this[i]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var h=Object.keys(t),u=0;u<h.length;u++){var c=h[u];"protocol"!==c&&(r[c]=t[c])}return b[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!b[t.protocol]){for(var f=Object.keys(t),l=0;l<f.length;l++){var p=f[l];r[p]=t[p]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||v[t.protocol])r.pathname=t.pathname;else{for(var m=(t.pathname||"").split("/");m.length&&!(t.host=m.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),r.pathname=m.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var y=r.pathname||"",d=r.search||"";r.path=y+d}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var g=r.pathname&&"/"===r.pathname.charAt(0),j=t.host||t.pathname&&"/"===t.pathname.charAt(0),w=j||g||r.host&&t.pathname,O=w,x=r.pathname&&r.pathname.split("/")||[],S=(m=t.pathname&&t.pathname.split("/")||[],r.protocol&&!b[r.protocol]);if(S&&(r.hostname="",r.port=null,r.host&&(""===x[0]?x[0]=r.host:x.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),w=w&&(""===m[0]||""===x[0])),j)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,x=m;else if(m.length)x||(x=[]),x.pop(),x=x.concat(m),r.search=t.search,r.query=t.query;else if(!s.isNullOrUndefined(t.search)){if(S)r.hostname=r.host=x.shift(),(_=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=_.shift(),r.host=r.hostname=_.shift());return r.search=t.search,r.query=t.query,s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!x.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var P=x.slice(-1)[0],C=(r.host||t.host||x.length>1)&&("."===P||".."===P)||""===P,k=0,A=x.length;A>=0;A--)"."===(P=x[A])?x.splice(A,1):".."===P?(x.splice(A,1),k++):k&&(x.splice(A,1),k--);if(!w&&!O)for(;k--;k)x.unshift("..");!w||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),C&&"/"!==x.join("/").substr(-1)&&x.push("");var _,q=""===x[0]||x[0]&&"/"===x[0].charAt(0);S&&(r.hostname=r.host=q?"":x.length?x.shift():"",(_=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=_.shift(),r.host=r.hostname=_.shift()));return(w=w||r.host&&x.length)&&!q&&x.unshift(""),x.length?r.pathname=x.join("/"):(r.pathname=null,r.path=null),s.isNull(r.pathname)&&s.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},a.prototype.parseHost=function(){var t=this.host,e=h.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();e.default=function t(e){e=o.default.resolve("https://",e);var r=h(e);t.modeChecker||console.warn("mode checker is needed");var n=t.modeChecker(e,r);if(!n)return console.warn("can't determine the mode of "+e),null;return new c[n](e,r)};var o=function(t){return t&&t.__esModule?t:{default:t}}(r(8));function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t){var e=o.default.parse(t,!0);return delete e.search,e}var u=function(){function t(e,r){i(this,t),this.a=r}return n(t,[{key:"url",get:function(){return o.default.format(this.a)},set:function(t){console.warn("u can't set its url")}}]),t}(),c={standard:function(t){function e(){var t;i(this,e);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(n)))}return a(e,u),n(e,[{key:"setWebp",value:function(){return this.addParam("t","webp"),this}},{key:"getParam",value:function(t){return this.a.query[t]}},{key:"addParams",value:function(t){return Object.assign(this.a.query,t),this}},{key:"addParam",value:function(t,e){return this.a.query[t]=e,this}},{key:"getSize",value:function(){return{w:this.getParam("w"),h:this.getParam("h")}}},{key:"resize",value:function(t){var e=t.w,r=t.h;return this.addParams({w:e,h:r}),this}}]),e}(),kingsoft:function(t){function e(){var t;i(this,e);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(n)))}return a(e,u),n(e,[{key:"setWebp",value:function(){return this.addParam("F","webp"),this}},{key:"getParam",value:function(t){return(this.a.pathname.match(new RegExp("[?|&]"+t+"=(\\d+)"))||[])[1]}},{key:"addParams",value:function(t){return this.addParam(void 0,void 0,t),this}},{key:"addParam",value:function(t,e,r){var n=(this.a.pathname.match(/@[\s\S]+?(&|$)/,"?")||[""])[0],s=this.a.pathname;n&&(s=s.replace(n,"?"));var a=r||function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}({},t,e),i=h(s);return Object.assign(i.query,a),s=o.default.format(i),n&&(s=s.replace("?",n)),this.a.pathname=s,this}},{key:"getSize",value:function(){return{w:this.getParam("etw"),h:this.getParam("eth")}}},{key:"resize",value:function(t){var e=t.w,r=t.h,n=this.getParam("w"),o=this.getParam("h");if(n&&o){var s=e/this.getParam("etw")||1,a=r/this.getParam("eth")||1;this.addParams({w:Math.round(s*n),h:Math.round(a*o)})}return this.addParams({etw:e,eth:r}),this}}]),e}()}}])});
//# sourceMappingURL=youpin-img.umd.js.map