/****************************************************************************************************/
/*****************Bundled JavaScript Packages**********************************************************/
/****************************************************************************************************/

/*!
 * jQuery JavaScript Library v1.7.1
 * http://jquery.com/
 */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*!
 * jQuery UI 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.12",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&
this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=
this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?
e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.12"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g.refreshPositions();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},
b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=
d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};
a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&
this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",
{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",
a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+
c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<
c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+
c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),
f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),
{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=
parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.12"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=
d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),k=0;k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,k);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){e(this).removeClass("ui-resizable-autohide");b._handles.show()},function(){if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),
d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:
this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",
b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;
f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(l(b.left))this.position.left=b.left;if(l(b.top))this.position.top=b.top;if(l(b.height))this.size.height=b.height;if(l(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=
null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+
this.size.height,k=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&k)b.left=i-a.minWidth;if(d&&k)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=
[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,
a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,
c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.12"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=
b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var k=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(k.css("position"))){c._revertToRelativePosition=true;k.css({position:"absolute",top:"auto",left:"auto"})}k.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};
if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-
g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,
height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=
e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,
d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?
d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=
a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&
/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");
b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/
(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},l=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.12"})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a==="disabled"){this.options[a]=
b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&!b){var f=false;
d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-
this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=
this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=
d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||
0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",
a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-
f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=
this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==
""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=
this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a=
{top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),
10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=
this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-
this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",
f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,
this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.12"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.12",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.attr("scrollTop"),c=this.element.height();if(b<0)this.element.attr("scrollTop",g+b);else b>=c&&this.element.attr("scrollTop",g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);
e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,
g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;


/*
 * jQuery UI Button 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,f=a([]);if(c)f=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return f};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
i);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||a(this).removeClass(f)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var e=b.element[0];h(e).not(e).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");
g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(e){if(c.disabled)return false;if(e.keyCode==a.ui.keyCode.SPACE||e.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",
c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var b=this.element.parents().filter(":last"),c="label[for="+this.element.attr("id")+"]";this.buttonElement=b.find(c);if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();this.buttonElement=b.filter(c);if(!this.buttonElement.length)this.buttonElement=b.find(c)}this.element.addClass("ui-helper-hidden-accessible");
(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,f=d.primary&&d.secondary,e=[];if(d.primary||d.secondary){if(this.options.text)e.push("ui-button-text-icon"+(f?"s":d.primary?"-primary":"-secondary"));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){e.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||b.attr("title",c)}}else e.push("ui-button-text-only");b.addClass(e.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,l){var m={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},n={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},o=c.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",
e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==
b.uiDialog[0]){e=c(this).css("z-index");isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=
1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===
f[0]&&e.shiftKey){g.focus(1);return false}}});c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,
function(){return!(d=true)});if(d){c.each(a,function(f,h){h=c.isFunction(h)?{click:h,text:f}:h;var i=c('<button type="button"></button>').click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.each(h,function(j,k){if(j!=="click")j in o?i[j](k):i.attr(j,k)});c.fn.button&&i.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,
originalSize:f.originalSize,position:f.position,size:f.size}}a=a===l?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",
f,b(h))},stop:function(f,h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):
[a[0],a[1]];if(b.length===1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);
if(g in m)e=true;if(g in n)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):
e.removeClass("ui-dialog-disabled");break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=
this.options,b,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-
b,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.12",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),
create:function(a){if(this.instances.length===0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,
function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();
else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),h,g,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=
false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");h=b._start(c,f);if(h===false)return}break}i=b.options.step;h=b.options.values&&b.options.values.length?(g=b.values(f)):(g=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:g=b._valueMin();break;case d.ui.keyCode.END:g=b._valueMax();break;case d.ui.keyCode.PAGE_UP:g=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:g=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(h===
b._valueMax())return;g=b._trimAlignValue(h+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(h===b._valueMin())return;g=b._trimAlignValue(h-i);break}b._slide(c,f,g);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,h,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});e=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(i){var j=Math.abs(c-h.values(i));if(e>j){e=j;f=d(this);g=i}});if(a.range===true&&this.values(1)===a.min){g+=1;f=d(this.handles[g])}if(this._start(b,
g)===false)return false;this._mouseSliding=true;h._handleIndex=g;f.addClass("ui-state-active").focus();a=f.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-f.width()/2,top:b.pageY-a.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;
if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(a);c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],
value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}else return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}else if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):
this.value();else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,h={},g,i,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(k){f=(c.values(k)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](h,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(k===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);
if(k===1)c.range[e?"animate":"css"]({width:f-g+"%"},{queue:false,duration:a.animate})}else{if(k===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(k===1)c.range[e?"animate":"css"]({height:f-g+"%"},{queue:false,duration:a.animate})}g=f});else{i=this.value();j=this._valueMin();l=this._valueMax();f=l!==j?(i-j)/(l-j)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](h,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.12"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.12"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,A){function K(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function F(a,b){d.extend(a,b);for(var c in b)if(b[c]==
null||b[c]==A)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.12"}});var y=(new Date).getTime();d.extend(K.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){F(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();
f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&
b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==
""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,
c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),
true);this._updateDatepicker(b);this._updateAlternate(b);b.dpDiv.show()}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}F(a.settings,e||{});
b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,
function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:
f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},
e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");F(e.settings,f);if(i!==null&&f.dateFormat!==A&&f.minDate===A)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==A&&f.maxDate===A)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},
_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),
"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?
-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,
+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==A?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);
d.datepicker._curInst&&d.datepicker._curInst!=b&&d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,"beforeShow");F(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=
document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");
var f=d.datepicker._get(b,"duration"),h=function(){d.datepicker._datepickerShowing=true;var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=
b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var e=a.dpDiv.find("iframe.ui-datepicker-cover");e.length&&e.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){d(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).removeClass("ui-datepicker-prev-hover");
this.className.indexOf("ui-datepicker-next")!=-1&&d(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");d(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).addClass("ui-datepicker-next-hover")}}).end().find("."+
this._dayOverClass+" a").trigger("mouseover").end();c=this._getNumberOfMonths(a);e=c[1];e>1?a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",17*e+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(c[0]!=1||c[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&
a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var f=a.yearshtml;setTimeout(function(){f===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);f=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():
0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),
"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?
"fadeOut":"hide"](a?c:null,e);a||e();if(a=this._get(b,"onClose"))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(d.datepicker._curInst){a=
d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=
d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c==
"M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=this._getInst(d(a)[0]);b.input&&b._selectingMonthYear&&setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=
b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();
this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);
a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?
c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=z+1<a.length&&a.charAt(z+1)==p)&&z++;return p},m=function(p){var v=o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&v?4:p=="o"?3:2)+"}");p=b.substring(s).match(p);if(!p)throw"Missing number at position "+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,v,H){p=o(p)?H:v;for(v=0;v<p.length;v++)if(b.substr(s,p[v].length).toLowerCase()==p[v].toLowerCase()){s+=p[v].length;return v+1}throw"Unknown name at position "+
s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw"Unexpected literal at position "+s;s++},s=0,z=0;z<a.length;z++)if(k)if(a.charAt(z)=="'"&&!o("'"))k=false;else r();else switch(a.charAt(z)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var w=new Date(m("@"));c=w.getFullYear();j=w.getMonth()+1;l=w.getDate();break;case "!":w=new Date((m("!")-this._ticksTo1970)/1E4);c=w.getFullYear();j=w.getMonth()+
1;l=w.getDate();break;case "'":if(o("'"))r();else k=true;break;default:r()}if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}w=this._daylightSavingAdjust(new Date(c,j-1,l));if(w.getFullYear()!=c||w.getMonth()+1!=j||w.getDate()!=l)throw"Invalid date";return w},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&
a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,r){return i(o)?r[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",
b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+=
"0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==A?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=
f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=
(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,
l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=
a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=
this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var r=this._get(a,"nextText");r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+r+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+r+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>";j=this._get(a,"currentText");r=this._get(a,"gotoCurrent")&&a.currentDay?u:b;j=!h?j:this.formatDate(j,r,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+y+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,r)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");r=this._get(a,"dayNames");this._get(a,"dayNamesShort");var s=this._get(a,"dayNamesMin"),z=
this._get(a,"monthNames"),w=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),v=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var L=this._getDefaultDate(a),I="",D=0;D<i[0];D++){for(var M="",E=0;E<i[1];E++){var N=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",x="";if(l){x+='<div class="ui-datepicker-group';if(i[1]>1)switch(E){case 0:x+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-
1:x+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:x+=" ui-datepicker-group-middle";t="";break}x+='">'}x+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&D==0?c?f:n:"")+(/all|right/.test(t)&&D==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,D>0||E>0,z,w)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var B=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var q=
(t+h)%7;B+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+r[q]+'">'+s[q]+"</span></th>"}x+=B+"</tr></thead><tbody>";B=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,B);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;B=l?6:Math.ceil((t+B)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var O=0;O<B;O++){x+="<tr>";var P=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(q)+"</td>";for(t=0;t<7;t++){var G=
p?p.apply(a.input?a.input[0]:null,[q]):[true,""],C=q.getMonth()!=g,J=C&&!H||!G[0]||k&&q<k||o&&q>o;P+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(C?" ui-datepicker-other-month":"")+(q.getTime()==N.getTime()&&g==a.selectedMonth&&a._keyEvent||L.getTime()==q.getTime()&&L.getTime()==N.getTime()?" "+this._dayOverClass:"")+(J?" "+this._unselectableClass+" ui-state-disabled":"")+(C&&!v?"":" "+G[1]+(q.getTime()==u.getTime()?" "+this._currentClass:"")+(q.getTime()==b.getTime()?" ui-datepicker-today":
""))+'"'+((!C||v)&&G[2]?' title="'+G[2]+'"':"")+(J?"":' onclick="DP_jQuery_'+y+".datepicker._selectDay('#"+a.id+"',"+q.getMonth()+","+q.getFullYear()+', this);return false;"')+">"+(C&&!v?"&#xa0;":J?'<span class="ui-state-default">'+q.getDate()+"</span>":'<a class="ui-state-default'+(q.getTime()==b.getTime()?" ui-state-highlight":"")+(q.getTime()==u.getTime()?" ui-state-active":"")+(C?" ui-priority-secondary":"")+'" href="#">'+q.getDate()+"</a>")+"</td>";q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}x+=
P+"</tr>"}g++;if(g>11){g=0;m++}x+="</tbody></table>"+(l?"</div>"+(i[0]>0&&E==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");M+=x}I+=M}I+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return I},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',
o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&
l)?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";if(d.browser.mozilla)k+='<select class="ui-datepicker-year"><option value="'+c+'" selected="selected">'+c+"</option></select>";else{k+=a.yearshtml;a.yearshtml=null}}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=
a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,
"onChangeMonthYear");if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=
function(a){if(!this.length)return this;if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,
[this[0]].concat(b));return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new K;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.12";window["DP_jQuery_"+y]=d})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.12"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function n(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return o.transparent;return o[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return n(b)}function p(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function q(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function m(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=n(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},r=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue("fx",function(){var e=f(this),g=e.attr("style")||" ",h=q(p.call(this)),l,v=e.attr("className");f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});l=q(p.call(this));e.attr("className",v);e.animate(u(h,l),a,b,function(){f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)});h=f.queue(this);l=h.splice(h.length-1,1)[0];
h.splice(1,0,l);f.dequeue(this)})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,
a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.12",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,
a){var b;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);
return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(m(c))return this._show.apply(this,arguments);
else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(m(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(m(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),
b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,
a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,
a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==
e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=
g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,
a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.12
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;




// create a way to access ui.autocomplete after it gets overridden by the
// other autocomplete plugin
$.widget.bridge("ui_autocomplete", $.ui.autocomplete);

/*
*  Ajax Autocomplete for jQuery, version 1.1
*  (c) 2009 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: http://www.devbridge.com/projects/autocomplete/jquery/
*
*  Last Review: 09/27/2009
*/
(function($){var reEscape=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\"].join("|\\")+")","g");function fnFormatResult(value,data,currentValue){var pattern="("+currentValue.replace(reEscape,"\\$1")+")";return value.replace(new RegExp(pattern,"i"),"<strong>$1</strong>");}function Autocomplete(el,options){this.el=$(el);this.el.attr("autocomplete","off");this.suggestions=[];this.data=[];this.badQueries=[];this.selectedIndex=-1;this.currentValue=this.el.val();this.intervalId=0;this.cachedResponse=[];this.onChangeInterval=null;this.ignoreValueChange=false;this.serviceUrl=options.serviceUrl;this.isLocal=false;this.options={autoSubmit:false,minChars:1,maxHeight:300,deferRequestBy:0,width:0,highlight:true,params:{},fnFormatResult:fnFormatResult,delimiter:null,zIndex:9999};this.initialize();this.setOptions(options);}$.fn.autocomplete=function(options){return new Autocomplete(this.get(0),options);};Autocomplete.prototype={killerFn:null,initialize:function(){var me,uid,autocompleteElId;me=this;uid=new Date().getTime();autocompleteElId="Autocomplete_"+uid;this.killerFn=function(e){if($(e.target).parents(".autocomplete").size()===0){me.killSuggestions();me.disableKillerFn();}};if(!this.options.width){this.options.width=this.el.width();}this.mainContainerId="AutocompleteContainter_"+uid;$('<div id="'+this.mainContainerId+'" style="width:300px;position:absolute;z-index:9999;"><div class="autocomplete-w1"><div class="autocomplete" id="'+autocompleteElId+'" style="display:none; "></div></div></div>').appendTo("body");this.container=$("#"+autocompleteElId);this.fixPosition();if(window.opera){this.el.keypress(function(e){me.onKeyPress(e);});}else{this.el.keydown(function(e){me.onKeyPress(e);});}this.el.keyup(function(e){me.onKeyUp(e);});this.el.blur(function(){me.enableKillerFn();});this.el.focus(function(){me.fixPosition();});},setOptions:function(options){var o=this.options;$.extend(o,options);if(o.lookup){this.isLocal=true;if($.isArray(o.lookup)){o.lookup={suggestions:o.lookup,data:[]};}}$("#"+this.mainContainerId).css({zIndex:o.zIndex});this.container.css({maxHeight:o.maxHeight+"px"});},clearCache:function(){this.cachedResponse=[];this.badQueries=[];},disable:function(){this.disabled=true;},enable:function(){this.disabled=false;},fixPosition:function(){var offset=this.el.offset();$("#"+this.mainContainerId).css({top:(offset.top+this.el.innerHeight())+"px",left:offset.left+"px"});},enableKillerFn:function(){var me=this;$(document).bind("click",me.killerFn);},disableKillerFn:function(){var me=this;$(document).unbind("click",me.killerFn);},killSuggestions:function(){var me=this;this.stopKillSuggestions();this.intervalId=window.setInterval(function(){me.hide();me.stopKillSuggestions();},300);},stopKillSuggestions:function(){window.clearInterval(this.intervalId);},onKeyPress:function(e){if(this.disabled||!this.enabled){return;}switch(e.keyCode){case 27:this.el.val(this.currentValue);this.hide();break;case 9:case 13:if(this.selectedIndex===-1){this.hide();return;}this.select(this.selectedIndex);if(e.keyCode===9){return;}break;case 38:this.moveUp();break;case 40:this.moveDown();break;default:return;}e.stopImmediatePropagation();e.preventDefault();},onKeyUp:function(e){if(this.disabled){return;}switch(e.keyCode){case 38:case 40:return;}clearInterval(this.onChangeInterval);if(this.currentValue!==this.el.val()){if(this.options.deferRequestBy>0){var me=this;this.onChangeInterval=setInterval(function(){me.onValueChange();},this.options.deferRequestBy);}else{this.onValueChange();}}},onValueChange:function(){clearInterval(this.onChangeInterval);this.currentValue=this.el.val();var q=this.getQuery(this.currentValue);this.selectedIndex=-1;if(this.ignoreValueChange){this.ignoreValueChange=false;return;}if(q===""||q.length<this.options.minChars){this.hide();}else{this.getSuggestions(q);}},getQuery:function(val){var d,arr;d=this.options.delimiter;if(!d){return $.trim(val);}arr=val.split(d);return $.trim(arr[arr.length-1]);},getSuggestionsLocal:function(q){var ret,arr,len,val,i;arr=this.options.lookup;len=arr.suggestions.length;ret={suggestions:[],data:[]};q=q.toLowerCase();for(i=0;i<len;i++){val=arr.suggestions[i];if(val.toLowerCase().indexOf(q)===0){ret.suggestions.push(val);ret.data.push(arr.data[i]);}}return ret;},getSuggestions:function(q){var cr,me;cr=this.isLocal?this.getSuggestionsLocal(q):this.cachedResponse[q];if(cr&&$.isArray(cr.suggestions)){this.suggestions=cr.suggestions;this.data=cr.data;this.suggest();}else{if(!this.isBadQuery(q)){me=this;me.options.params.query=q;$.get(this.serviceUrl,me.options.params,function(txt){me.processResponse(txt);},"text");}}},isBadQuery:function(q){var i=this.badQueries.length;while(i--){if(q.indexOf(this.badQueries[i])===0){return true;}}return false;},hide:function(){this.enabled=false;this.selectedIndex=-1;this.container.hide();},suggest:function(){if(this.suggestions.length===0){this.hide();return;}var me,len,div,f,v,i,s,mOver,mClick;me=this;len=this.suggestions.length;f=this.options.fnFormatResult;v=this.getQuery(this.currentValue);mOver=function(xi){return function(){me.activate(xi);};};mClick=function(xi){return function(){me.select(xi);};};this.container.hide().empty();for(i=0;i<len;i++){s=this.suggestions[i];div=$((me.selectedIndex===i?'<div class="selected"':"<div")+' title="Click to navigate to record">'+f(s,this.data[i],v)+"</div>");div.mouseover(mOver(i));div.click(mClick(i));this.container.append(div);}this.enabled=true;this.container.show();},processResponse:function(text){var response;try{response=eval("("+text+")");}catch(err){return;}if(!$.isArray(response.data)){response.data=[];}this.cachedResponse[response.query]=response;if(response.suggestions.length===0){this.badQueries.push(response.query);}if(response.query===this.getQuery(this.currentValue)){this.suggestions=response.suggestions;this.data=response.data;this.suggest();}},activate:function(index){var divs,activeItem;divs=this.container.children();if(this.selectedIndex!==-1&&divs.length>this.selectedIndex){$(divs.get(this.selectedIndex)).attr("class","");}this.selectedIndex=index;if(this.selectedIndex!==-1&&divs.length>this.selectedIndex){activeItem=divs.get(this.selectedIndex);$(activeItem).attr("class","selected");}return activeItem;},deactivate:function(div,index){div.className="";if(this.selectedIndex===index){this.selectedIndex=-1;}},select:function(i){var selectedValue,f;selectedValue=this.suggestions[i];if(selectedValue){this.el.val(selectedValue);if(this.options.autoSubmit){f=this.el.parents("form");if(f.length>0){f.get(0).submit();}}this.ignoreValueChange=true;this.hide();this.onSelect(i);}},moveUp:function(){if(this.selectedIndex===-1){return;}if(this.selectedIndex===0){this.container.children().get(0).className="";this.selectedIndex=-1;this.el.val(this.currentValue);return;}this.adjustScroll(this.selectedIndex-1);},moveDown:function(){if(this.selectedIndex===(this.suggestions.length-1)){return;}this.adjustScroll(this.selectedIndex+1);},adjustScroll:function(i){var activeItem,offsetTop,upperBound,lowerBound;activeItem=this.activate(i);offsetTop=activeItem.offsetTop;upperBound=this.container.scrollTop();lowerBound=upperBound+this.options.maxHeight-25;if(offsetTop<upperBound){this.container.scrollTop(offsetTop);}else{if(offsetTop>lowerBound){this.container.scrollTop(offsetTop-this.options.maxHeight+25);}}},onSelect:function(i){var me,onSelect,getValue,s,d;me=this;onSelect=me.options.onSelect;getValue=function(value){var del,currVal,arr;del=me.options.delimiter;if(!del){return value;}currVal=me.currentValue;arr=currVal.split(del);if(arr.length===1){return value;}return currVal.substr(0,currVal.length-arr[arr.length-1].length)+value;};s=me.suggestions[i];d=me.data[i];me.el.val(getValue(s));if($.isFunction(onSelect)){onSelect(s,d);}}};}(jQuery));
/* Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 2.1.2
 */
(function(a){a.fn.bgiframe=(a.browser.msie&&/msie 6\.0/i.test(navigator.userAgent)?function(d){d=a.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:true,src:"javascript:false;"},d);var c='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+d.src+'"style="display:block;position:absolute;z-index:-1;'+(d.opacity!==false?"filter:Alpha(Opacity='0');":"")+"top:"+(d.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')":b(d.top))+";left:"+(d.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":b(d.left))+";width:"+(d.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":b(d.width))+";height:"+(d.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":b(d.height))+';"/>';return this.each(function(){if(a(this).children("iframe.bgiframe").length===0){this.insertBefore(document.createElement(c),this.firstChild)}})}:function(){return this});a.fn.bgIframe=a.fn.bgiframe;function b(c){return c&&c.constructor===Number?c+"px":c}})(jQuery);

/*
 * jQuery Tools 1.2.4 - The missing UI library for the Web
 * 
 * [tooltip, tooltip.dynamic]
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * File generated: Mon Aug 30 11:53:49 GMT 2010
 */
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,e=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];e+=a.outerWidth()+c.offset[1];var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")e-=a/2;if(i=="left")e-=a;return{top:h,left:e}}function u(a,b){var c=this,h=a.add(c),e,i=0,j=0,m=a.attr("title"),q=a.attr("data-tooltip"),r=n[b.effect],l,s=
a.is(":input"),v=s&&a.is(":checkbox, :radio, select, :button, :submit"),t=a.attr("type"),k=b.events[t]||b.events[s?v?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+b.effect+'"';k=k.split(/,\s*/);if(k.length!=2)throw"Tooltip: bad events configuration for "+t;a.bind(k[0],function(d){clearTimeout(i);if(b.predelay)j=setTimeout(function(){c.show(d)},b.predelay);else c.show(d)}).bind(k[1],function(d){clearTimeout(j);if(b.delay)i=setTimeout(function(){c.hide(d)},b.delay);else c.hide(d)});if(m&&
b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,{show:function(d){if(!e){if(q)e=f(q);else if(m)e=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else if(b.tip)e=f(b.tip).eq(0);else{e=a.next();e.length||(e=a.parent().next())}if(!e.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;e.stop(true,true);var g=p(a,e,b);d=d||f.Event();d.type="onBeforeShow";h.trigger(d,[g]);if(d.isDefaultPrevented())return c;g=p(a,e,b);e.css({position:"absolute",
top:g.top,left:g.left});l=true;r[0].call(c,function(){d.type="onShow";l="full";h.trigger(d)});g=b.events.tooltip.split(/,\s*/);e.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&e.bind(g[1],function(o){o.relatedTarget!=a[0]&&a.trigger(k[1].split(" ")[0])});return c},hide:function(d){if(!e||!c.isShown())return c;d=d||f.Event();d.type="onBeforeHide";h.trigger(d);if(!d.isDefaultPrevented()){l=false;n[b.effect][1].call(c,function(){d.type="onHide";
h.trigger(d)});return c}},isShown:function(d){return d?l=="full":l},getConf:function(){return b},getTip:function(){return e},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(d,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(o){f(c).bind(g,o);return c}})}f.tools=f.tools||{version:"1.2.4"};f.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,
events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){n[a]=[b,c]}};var n={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();a.call()}],fade:[function(a){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,
a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new u(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(g){function j(a){var c=g(window),d=c.width()+c.scrollLeft(),h=c.height()+c.scrollTop();return[a.offset().top<=c.scrollTop(),d<=a.offset().left+a.width(),h<=a.offset().top+a.height(),c.scrollLeft()>=a.offset().left]}function k(a){for(var c=a.length;c--;)if(a[c])return false;return true}var i=g.tools.tooltip;i.dynamic={conf:{classNames:"top right bottom left"}};g.fn.dynamic=function(a){if(typeof a=="number")a={speed:a};a=g.extend({},i.dynamic.conf,a);var c=a.classNames.split(/\s/),d;this.each(function(){var h=
g(this).tooltip().onBeforeShow(function(e,f){e=this.getTip();var b=this.getConf();d||(d=[b.position[0],b.position[1],b.offset[0],b.offset[1],g.extend({},b)]);g.extend(b,d[4]);b.position=[d[0],d[1]];b.offset=[d[2],d[3]];e.css({visibility:"hidden",position:"absolute",top:f.top,left:f.left}).show();f=j(e);if(!k(f)){if(f[2]){g.extend(b,a.top);b.position[0]="top";e.addClass(c[0])}if(f[3]){g.extend(b,a.right);b.position[1]="right";e.addClass(c[1])}if(f[0]){g.extend(b,a.bottom);b.position[0]="bottom";e.addClass(c[2])}if(f[1]){g.extend(b,
a.left);b.position[1]="left";e.addClass(c[3])}if(f[0]||f[2])b.offset[0]*=-1;if(f[1]||f[3])b.offset[1]*=-1}e.css({visibility:"visible"}).hide()});h.onBeforeShow(function(){var e=this.getConf();this.getTip();setTimeout(function(){e.position=[d[0],d[1]];e.offset=[d[2],d[3]]},0)});h.onHide(function(){var e=this.getTip();e.removeClass(a.classNames)});ret=h});return a.api?ret:this}})(jQuery);
/*
* jQuery timepicker addon
* By: Trent Richardson [http://trentrichardson.com]
* Version 0.6.2
* Last Modified: 9/26/2010
* 
* Copyright 2010 Trent Richardson
* Dual licensed under the MIT and GPL licenses.
* http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
* http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
* 
* HERES THE CSS:
* .ui-timepicker-div dl{ text-align: left; }
* .ui-timepicker-div dl dt{ height: 25px; }
* .ui-timepicker-div dl dd{ margin: -25px 0 10px 65px; }
*/
(function($){function Timepicker(singleton){if(typeof(singleton)==='boolean'&&singleton==true){this.regional=[];this.regional['']={currentText:'Now',ampm:false,timeFormat:'hh:mm tt',timeOnlyTitle:'Choose Time',timeText:'Time',hourText:'Hour',minuteText:'Minute',secondText:'Second'};this.defaults={showButtonPanel:true,timeOnly:false,showHour:true,showMinute:true,showSecond:false,showTime:true,stepHour:0.05,stepMinute:0.05,stepSecond:0.05,hour:0,minute:0,second:0,hourMin:0,minuteMin:0,secondMin:0,hourMax:23,minuteMax:59,secondMax:59,alwaysSetTime:true};$.extend(this.defaults,this.regional['']);}else{this.defaults=$.extend({},$.timepicker.defaults);}}Timepicker.prototype={$input:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,hour:0,minute:0,second:0,ampm:'',formattedDate:'',formattedTime:'',formattedDateTime:'',addTimePicker:function(dp_inst){var tp_inst=this;var currDT=this.$input.val();var regstr=this.defaults.timeFormat.toString().replace(/h{1,2}/ig,'(\\d?\\d)').replace(/m{1,2}/ig,'(\\d?\\d)').replace(/s{1,2}/ig,'(\\d?\\d)').replace(/t{1,2}/ig,'(am|pm|a|p)?').replace(/\s/g,'\\s?')+'$';if(!this.defaults.timeOnly){var dp_dateFormat=$.datepicker._get(dp_inst,'dateFormat');regstr='.{'+dp_dateFormat.length+',}\\s+'+regstr;}var order=this.getFormatPositions();var treg=currDT.match(new RegExp(regstr,'i'));if(treg){if(order.t!==-1){this.ampm=((treg[order.t]===undefined||treg[order.t].length===0)?'':(treg[order.t].charAt(0).toUpperCase()=='A')?'AM':'PM').toUpperCase();}if(order.h!==-1){if(this.ampm=='AM'&&treg[order.h]=='12'){this.hour=0;}else if(this.ampm=='PM'&&treg[order.h]!='12'){this.hour=(parseFloat(treg[order.h])+12).toFixed(0);}else{this.hour=treg[order.h];}}if(order.m!==-1){this.minute=treg[order.m];}if(order.s!==-1){this.second=treg[order.s];}}tp_inst.timeDefined=(treg)?true:false;if(typeof(dp_inst.stay_open)!=='boolean'||dp_inst.stay_open===false){setTimeout(function(){tp_inst.injectTimePicker(dp_inst,tp_inst);},10);}else{tp_inst.injectTimePicker(dp_inst,tp_inst);}},getFormatPositions:function(){var finds=this.defaults.timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|t{1,2})/g);var orders={h:-1,m:-1,s:-1,t:-1};if(finds){for(var i=0;i<finds.length;i++){if(orders[finds[i].toString().charAt(0)]==-1){orders[finds[i].toString().charAt(0)]=i+1;}}}return orders;},injectTimePicker:function(dp_inst,tp_inst){var $dp=dp_inst.dpDiv;var opts=tp_inst.defaults;var hourMax=opts.hourMax-(opts.hourMax%opts.stepHour);var minMax=opts.minuteMax-(opts.minuteMax%opts.stepMinute);var secMax=opts.secondMax-(opts.secondMax%opts.stepSecond);if($dp.find("div#ui-timepicker-div-"+dp_inst.id).length===0){var noDisplay=' style="display:none;"';var html='<div class="ui-timepicker-div" id="ui-timepicker-div-'+dp_inst.id+'"><dl>'+'<dt class="ui_tpicker_time_label" id="ui_tpicker_time_label_'+dp_inst.id+'"'+((opts.showTime)?'':noDisplay)+'>'+opts.timeText+'</dt>'+'<dd class="ui_tpicker_time" id="ui_tpicker_time_'+dp_inst.id+'"'+((opts.showTime)?'':noDisplay)+'></dd>'+'<dt class="ui_tpicker_hour_label" id="ui_tpicker_hour_label_'+dp_inst.id+'"'+((opts.showHour)?'':noDisplay)+'>'+opts.hourText+'</dt>'+'<dd class="ui_tpicker_hour" id="ui_tpicker_hour_'+dp_inst.id+'"'+((opts.showHour)?'':noDisplay)+'></dd>'+'<dt class="ui_tpicker_minute_label" id="ui_tpicker_minute_label_'+dp_inst.id+'"'+((opts.showMinute)?'':noDisplay)+'>'+opts.minuteText+'</dt>'+'<dd class="ui_tpicker_minute" id="ui_tpicker_minute_'+dp_inst.id+'"'+((opts.showMinute)?'':noDisplay)+'></dd>'+'<dt class="ui_tpicker_second_label" id="ui_tpicker_second_label_'+dp_inst.id+'"'+((opts.showSecond)?'':noDisplay)+'>'+opts.secondText+'</dt>'+'<dd class="ui_tpicker_second" id="ui_tpicker_second_'+dp_inst.id+'"'+((opts.showSecond)?'':noDisplay)+'></dd>'+'</dl></div>';$tp=$(html);if(opts.timeOnly===true){$tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">'+'<div class="ui-datepicker-title">'+opts.timeOnlyTitle+'</div>'+'</div>');$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();}tp_inst.hour_slider=$tp.find('#ui_tpicker_hour_'+dp_inst.id).slider({orientation:"horizontal",value:tp_inst.hour,min:opts.hourMin,max:hourMax,step:opts.stepHour,slide:function(event,ui){tp_inst.hour_slider.slider("option","value",ui.value);tp_inst.onTimeChange(dp_inst,tp_inst);}});tp_inst.minute_slider=$tp.find('#ui_tpicker_minute_'+dp_inst.id).slider({orientation:"horizontal",value:tp_inst.minute,min:opts.minuteMin,max:minMax,step:opts.stepMinute,slide:function(event,ui){tp_inst.minute_slider.slider("option","value",ui.value);tp_inst.onTimeChange(dp_inst,tp_inst);}});tp_inst.second_slider=$tp.find('#ui_tpicker_second_'+dp_inst.id).slider({orientation:"horizontal",value:tp_inst.second,min:opts.secondMin,max:secMax,step:opts.stepSecond,slide:function(event,ui){tp_inst.second_slider.slider("option","value",ui.value);tp_inst.onTimeChange(dp_inst,tp_inst);}});$dp.find('.ui-datepicker-calendar').after($tp);tp_inst.$timeObj=$('#ui_tpicker_time_'+dp_inst.id);if(dp_inst!==null){var timeDefined=tp_inst.timeDefined;tp_inst.onTimeChange(dp_inst,tp_inst);tp_inst.timeDefined=timeDefined;}}},onTimeChange:function(dp_inst,tp_inst){var hour=tp_inst.hour_slider.slider('value');var minute=tp_inst.minute_slider.slider('value');var second=tp_inst.second_slider.slider('value');var ampm=(hour<12)?'AM':'PM';var hasChanged=false;if(tp_inst.hour!=hour||tp_inst.minute!=minute||tp_inst.second!=second||(tp_inst.ampm.length>0&&tp_inst.ampm!=ampm)){hasChanged=true;}tp_inst.hour=parseFloat(hour).toFixed(0);tp_inst.minute=parseFloat(minute).toFixed(0);tp_inst.second=parseFloat(second).toFixed(0);tp_inst.ampm=ampm;tp_inst.formatTime(tp_inst);tp_inst.$timeObj.text(tp_inst.formattedTime);if(hasChanged){tp_inst.updateDateTime(dp_inst,tp_inst);tp_inst.timeDefined=true;}},formatTime:function(tp_inst){var tmptime=tp_inst.defaults.timeFormat.toString();var hour12=((tp_inst.ampm=='AM')?(tp_inst.hour):(tp_inst.hour%12));hour12=(hour12===0)?12:hour12;if(tp_inst.defaults.ampm===true){tmptime=tmptime.toString().replace(/hh/g,((hour12<10)?'0':'')+hour12).replace(/h/g,hour12).replace(/mm/g,((tp_inst.minute<10)?'0':'')+tp_inst.minute).replace(/m/g,tp_inst.minute).replace(/ss/g,((tp_inst.second<10)?'0':'')+tp_inst.second).replace(/s/g,tp_inst.second).replace(/TT/g,tp_inst.ampm.toUpperCase()).replace(/tt/g,tp_inst.ampm.toLowerCase()).replace(/T/g,tp_inst.ampm.charAt(0).toUpperCase()).replace(/t/g,tp_inst.ampm.charAt(0).toLowerCase());}else{tmptime=tmptime.toString().replace(/hh/g,((tp_inst.hour<10)?'0':'')+tp_inst.hour).replace(/h/g,tp_inst.hour).replace(/mm/g,((tp_inst.minute<10)?'0':'')+tp_inst.minute).replace(/m/g,tp_inst.minute).replace(/ss/g,((tp_inst.second<10)?'0':'')+tp_inst.second).replace(/s/g,tp_inst.second);tmptime=$.trim(tmptime.replace(/t/gi,''));}tp_inst.formattedTime=tmptime;return tp_inst.formattedTime;},updateDateTime:function(dp_inst,tp_inst){var dt=new Date(dp_inst.selectedYear,dp_inst.selectedMonth,dp_inst.selectedDay);var dateFmt=$.datepicker._get(dp_inst,'dateFormat');var formatCfg=$.datepicker._getFormatConfig(dp_inst);this.formattedDate=$.datepicker.formatDate(dateFmt,(dt===null?new Date():dt),formatCfg);var formattedDateTime=this.formattedDate;var timeAvailable=dt!==null&&tp_inst.timeDefined;if(this.defaults.timeOnly===true){formattedDateTime=this.formattedTime;}else if(this.defaults.timeOnly!==true&&(this.defaults.alwaysSetTime||timeAvailable)){formattedDateTime+=' '+this.formattedTime;}this.formattedDateTime=formattedDateTime;this.$input.val(formattedDateTime);this.$input.trigger("change");},setDefaults:function(settings){extendRemove(this.defaults,settings||{});return this;}};jQuery.fn.datetimepicker=function(o){var opts=(o===undefined?{}:o);var input=$(this);var tp=new Timepicker();var inlineSettings={};for(var attrName in tp.defaults){var attrValue=input.attr('time:'+attrName);if(attrValue){try{inlineSettings[attrName]=eval(attrValue);}catch(err){inlineSettings[attrName]=attrValue;}}}tp.defaults=$.extend(tp.defaults,inlineSettings);var beforeShowFunc=function(input,inst){tp.hour=tp.defaults.hour;tp.minute=tp.defaults.minute;tp.second=tp.defaults.second;tp.ampm='';tp.$input=$(input);tp.inst=inst;tp.addTimePicker(inst);if($.isFunction(opts.beforeShow)){opts.beforeShow(input,inst);}};var onChangeMonthYearFunc=function(year,month,inst){tp.updateDateTime(inst,tp);if($.isFunction(opts.onChangeMonthYear)){opts.onChangeMonthYear(year,month,inst);}};var onCloseFunc=function(dateText,inst){if(tp.timeDefined===true&&input.val()!=''){tp.updateDateTime(inst,tp);}if($.isFunction(opts.onClose)){opts.onClose(dateText,inst);}};tp.defaults=$.extend({},tp.defaults,opts,{beforeShow:beforeShowFunc,onChangeMonthYear:onChangeMonthYearFunc,onClose:onCloseFunc,timepicker:tp});$(this).datepicker(tp.defaults);};jQuery.fn.timepicker=function(opts){opts=$.extend(opts,{timeOnly:true});$(this).datetimepicker(opts);};$.datepicker._base_selectDate=$.datepicker._selectDate;$.datepicker._selectDate=function(id,dateStr){var target=$(id);var inst=this._getInst(target[0]);var tp_inst=$.datepicker._get(inst,'timepicker');if(tp_inst){inst.inline=true;inst.stay_open=true;$.datepicker._base_selectDate(id,dateStr);inst.stay_open=false;inst.inline=false;this._notifyChange(inst);this._updateDatepicker(inst);}else{$.datepicker._base_selectDate(id,dateStr);}};$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker;$.datepicker._updateDatepicker=function(inst){if(typeof(inst.stay_open)!=='boolean'||inst.stay_open===false){this._base_updateDatepicker(inst);this._beforeShow(inst.input,inst);}};$.datepicker._beforeShow=function(input,inst){var beforeShow=this._get(inst,'beforeShow');if(beforeShow){inst.stay_open=true;beforeShow.apply((inst.input?inst.input[0]:null),[inst.input,inst]);inst.stay_open=false;}};$.datepicker._base_doKeyPress=$.datepicker._doKeyPress;$.datepicker._doKeyPress=function(event){var inst=$.datepicker._getInst(event.target);var tp_inst=$.datepicker._get(inst,'timepicker');if(tp_inst){if($.datepicker._get(inst,'constrainInput')){var dateChars=$.datepicker._possibleChars($.datepicker._get(inst,'dateFormat'));var chr=String.fromCharCode(event.charCode===undefined?event.keyCode:event.charCode);var chrl=chr.toLowerCase();return event.ctrlKey||(chr<' '||!dateChars||dateChars.indexOf(chr)>-1||event.keyCode==58||event.keyCode==32||chr==':'||chr==' '||chrl=='a'||chrl=='p'||charl=='m');}}else{return $.datepicker._base_doKeyPress(event);}};$.datepicker._base_gotoToday=$.datepicker._gotoToday;$.datepicker._gotoToday=function(id){$.datepicker._base_gotoToday(id);var target=$(id);var dp_inst=this._getInst(target[0]);var tp_inst=$.datepicker._get(dp_inst,'timepicker');if(tp_inst){var date=new Date();var hour=date.getHours();var minute=date.getMinutes();var second=date.getSeconds();if((hour<tp_inst.defaults.hourMin||hour>tp_inst.defaults.hourMax)||(minute<tp_inst.defaults.minuteMin||minute>tp_inst.defaults.minuteMax)||(second<tp_inst.defaults.secondMin||second>tp_inst.defaults.secondMax)){hour=tp_inst.defaults.hourMin;minute=tp_inst.defaults.minuteMin;second=tp_inst.defaults.secondMin;}tp_inst.hour_slider.slider('value',hour);tp_inst.minute_slider.slider('value',minute);tp_inst.second_slider.slider('value',second);tp_inst.onTimeChange(dp_inst,tp_inst);}};function extendRemove(target,props){$.extend(target,props);for(var name in props)if(props[name]==null||props[name]==undefined)target[name]=props[name];return target;};$.timepicker=new Timepicker(true);})(jQuery);

/*
 * File:        FixedHeader.min.js
 * Version:     2.0.6
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * 
 * Copyright 2009-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD (3 point) style license, as supplied with this software.
 * 
 * This source file is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY 
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 */
var FixedHeader=function(a,c){if("function"!=typeof this.fnInit)alert("FixedHeader warning: FixedHeader must be initialised with the 'new' keyword.");else{var b={aoCache:[],oSides:{top:!0,bottom:!1,left:!1,right:!1},oZIndexes:{top:104,bottom:103,left:102,right:101},oMes:{iTableWidth:0,iTableHeight:0,iTableLeft:0,iTableRight:0,iTableTop:0,iTableBottom:0},oOffset:{top:0},nTable:null,bUseAbsPos:!1,bFooter:!1};this.fnGetSettings=function(){return b};this.fnUpdate=function(){this._fnUpdateClones();this._fnUpdatePositions()};
this.fnPosition=function(){this._fnUpdatePositions()};this.fnInit(a,c);"function"==typeof a.fnSettings&&(a._oPluginFixedHeader=this)}};
FixedHeader.prototype={fnInit:function(a,c){var b=this.fnGetSettings(),d=this;this.fnInitSettings(b,c);if("function"==typeof a.fnSettings){if("functon"==typeof a.fnVersionCheck&&!0!==a.fnVersionCheck("1.6.0")){alert("FixedHeader 2 required DataTables 1.6.0 or later. Please upgrade your DataTables installation");return}var e=a.fnSettings();if(""!=e.oScroll.sX||""!=e.oScroll.sY){alert("FixedHeader 2 is not supported with DataTables' scrolling mode at this time");return}b.nTable=e.nTable;e.aoDrawCallback.push({fn:function(){FixedHeader.fnMeasure();
d._fnUpdateClones.call(d);d._fnUpdatePositions.call(d)},sName:"FixedHeader"})}else b.nTable=a;b.bFooter=0<$(">tfoot",b.nTable).length?!0:!1;b.bUseAbsPos=jQuery.browser.msie&&("6.0"==jQuery.browser.version||"7.0"==jQuery.browser.version);b.oSides.top&&b.aoCache.push(d._fnCloneTable("fixedHeader","FixedHeader_Header",d._fnCloneThead));b.oSides.bottom&&b.aoCache.push(d._fnCloneTable("fixedFooter","FixedHeader_Footer",d._fnCloneTfoot));b.oSides.left&&b.aoCache.push(d._fnCloneTable("fixedLeft","FixedHeader_Left",
d._fnCloneTLeft));b.oSides.right&&b.aoCache.push(d._fnCloneTable("fixedRight","FixedHeader_Right",d._fnCloneTRight));FixedHeader.afnScroll.push(function(){d._fnUpdatePositions.call(d)});jQuery(window).resize(function(){FixedHeader.fnMeasure();d._fnUpdateClones.call(d);d._fnUpdatePositions.call(d)});FixedHeader.fnMeasure();d._fnUpdateClones();d._fnUpdatePositions()},fnInitSettings:function(a,c){if("undefined"!=typeof c&&("undefined"!=typeof c.top&&(a.oSides.top=c.top),"undefined"!=typeof c.bottom&&
(a.oSides.bottom=c.bottom),"undefined"!=typeof c.left&&(a.oSides.left=c.left),"undefined"!=typeof c.right&&(a.oSides.right=c.right),"undefined"!=typeof c.zTop&&(a.oZIndexes.top=c.zTop),"undefined"!=typeof c.zBottom&&(a.oZIndexes.bottom=c.zBottom),"undefined"!=typeof c.zLeft&&(a.oZIndexes.left=c.zLeft),"undefined"!=typeof c.zRight&&(a.oZIndexes.right=c.zRight),"undefined"!=typeof c.offsetTop))a.oOffset.top=c.offsetTop;a.bUseAbsPos=jQuery.browser.msie&&("6.0"==jQuery.browser.version||"7.0"==jQuery.browser.version)},
_fnCloneTable:function(a,c,b){var d=this.fnGetSettings(),e;"absolute"!=jQuery(d.nTable.parentNode).css("position")&&(d.nTable.parentNode.style.position="relative");e=d.nTable.cloneNode(!1);e.removeAttribute("id");var f=document.createElement("div");f.style.position="absolute";f.style.top="0px";f.style.left="0px";f.className+=" FixedHeader_Cloned "+a+" "+c;"fixedHeader"==a&&(f.style.zIndex=d.oZIndexes.top);"fixedFooter"==a&&(f.style.zIndex=d.oZIndexes.bottom);"fixedLeft"==a?f.style.zIndex=d.oZIndexes.left:
"fixedRight"==a&&(f.style.zIndex=d.oZIndexes.right);e.style.margin="0";f.appendChild(e);document.body.appendChild(f);return{nNode:e,nWrapper:f,sType:a,sPosition:"",sTop:"",sLeft:"",fnClone:b}},_fnMeasure:function(){var a=this.fnGetSettings(),c=a.oMes,b=jQuery(a.nTable),d=b.offset(),e=this._fnSumScroll(a.nTable.parentNode,"scrollTop");this._fnSumScroll(a.nTable.parentNode,"scrollLeft");c.iTableWidth=b.outerWidth();c.iTableHeight=b.outerHeight();c.iTableLeft=d.left+a.nTable.parentNode.scrollLeft;c.iTableTop=
d.top+e;c.iTableRight=c.iTableLeft+c.iTableWidth;c.iTableRight=FixedHeader.oDoc.iWidth-c.iTableLeft-c.iTableWidth;c.iTableBottom=FixedHeader.oDoc.iHeight-c.iTableTop-c.iTableHeight},_fnSumScroll:function(a,c){for(var b=a[c];(a=a.parentNode)&&!("HTML"==a.nodeName||"BODY"==a.nodeName);)b=a[c];return b},_fnUpdatePositions:function(){var a=this.fnGetSettings();this._fnMeasure();for(var c=0,b=a.aoCache.length;c<b;c++)"fixedHeader"==a.aoCache[c].sType?this._fnScrollFixedHeader(a.aoCache[c]):"fixedFooter"==
a.aoCache[c].sType?this._fnScrollFixedFooter(a.aoCache[c]):"fixedLeft"==a.aoCache[c].sType?this._fnScrollHorizontalLeft(a.aoCache[c]):this._fnScrollHorizontalRight(a.aoCache[c])},_fnUpdateClones:function(){for(var a=this.fnGetSettings(),c=0,b=a.aoCache.length;c<b;c++)a.aoCache[c].fnClone.call(this,a.aoCache[c])},_fnScrollHorizontalRight:function(a){var c=this.fnGetSettings(),b=c.oMes,d=FixedHeader.oWin,e=FixedHeader.oDoc,f=a.nWrapper,g=jQuery(f).outerWidth();d.iScrollRight<b.iTableRight?(this._fnUpdateCache(a,
"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+b.iTableWidth-g+"px","left",f.style)):b.iTableLeft<e.iWidth-d.iScrollRight-g?c.bUseAbsPos?(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",e.iWidth-d.iScrollRight-g+"px","left",f.style)):(this._fnUpdateCache(a,"sPosition","fixed","position",f.style),
this._fnUpdateCache(a,"sTop",b.iTableTop-d.iScrollTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",d.iWidth-g+"px","left",f.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",f.style))},_fnScrollHorizontalLeft:function(a){var c=this.fnGetSettings(),b=c.oMes,d=FixedHeader.oWin,e=a.nWrapper,f=jQuery(e).outerWidth();d.iScrollLeft<b.iTableLeft?(this._fnUpdateCache(a,
"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",e.style)):d.iScrollLeft<b.iTableLeft+b.iTableWidth-f?c.bUseAbsPos?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft",d.iScrollLeft+"px","left",e.style)):(this._fnUpdateCache(a,"sPosition","fixed","position",e.style),this._fnUpdateCache(a,
"sTop",b.iTableTop-d.iScrollTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft","0px","left",e.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+b.iTableWidth-f+"px","left",e.style))},_fnScrollFixedFooter:function(a){var c=this.fnGetSettings(),b=c.oMes,d=FixedHeader.oWin,e=FixedHeader.oDoc,f=a.nWrapper,g=jQuery("thead",c.nTable).outerHeight(),h=jQuery(f).outerHeight();
d.iScrollBottom<b.iTableBottom?(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop+b.iTableHeight-h+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",f.style)):d.iScrollBottom<b.iTableBottom+b.iTableHeight-h-g?c.bUseAbsPos?(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",e.iHeight-d.iScrollBottom-h+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",
f.style)):(this._fnUpdateCache(a,"sPosition","fixed","position",f.style),this._fnUpdateCache(a,"sTop",d.iHeight-h+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft-d.iScrollLeft+"px","left",f.style)):(this._fnUpdateCache(a,"sPosition","absolute","position",f.style),this._fnUpdateCache(a,"sTop",b.iTableTop+h+"px","top",f.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",f.style))},_fnScrollFixedHeader:function(a){for(var c=this.fnGetSettings(),b=c.oMes,d=FixedHeader.oWin,e=
a.nWrapper,f=0,g=c.nTable.getElementsByTagName("tbody"),h=0;h<g.length;++h)f+=g[h].offsetHeight;b.iTableTop>d.iScrollTop+c.oOffset.top?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",b.iTableTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",e.style)):d.iScrollTop+c.oOffset.top>b.iTableTop+f?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",b.iTableTop+f+"px","top",e.style),this._fnUpdateCache(a,
"sLeft",b.iTableLeft+"px","left",e.style)):c.bUseAbsPos?(this._fnUpdateCache(a,"sPosition","absolute","position",e.style),this._fnUpdateCache(a,"sTop",d.iScrollTop+"px","top",e.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft+"px","left",e.style)):(this._fnUpdateCache(a,"sPosition","fixed","position",e.style),this._fnUpdateCache(a,"sTop",c.oOffset.top+"px","top",e.style),this._fnUpdateCache(a,"sLeft",b.iTableLeft-d.iScrollLeft+"px","left",e.style))},_fnUpdateCache:function(a,c,b,d,e){a[c]!=b&&(e[d]=
b,a[c]=b)},_fnCloneThead:function(a){var c=this.fnGetSettings(),b=a.nNode;for(a.nWrapper.style.width=jQuery(c.nTable).outerWidth()+"px";0<b.childNodes.length;)jQuery("thead th",b).unbind("click"),b.removeChild(b.childNodes[0]);a=jQuery("thead",c.nTable).clone(!0)[0];b.appendChild(a);jQuery("thead>tr th",c.nTable).each(function(a){jQuery("thead>tr th:eq("+a+")",b).width(jQuery(this).width())});jQuery("thead>tr td",c.nTable).each(function(a){jQuery("thead>tr td:eq("+a+")",b).width(jQuery(this).width())})},
_fnCloneTfoot:function(a){var c=this.fnGetSettings(),b=a.nNode;for(a.nWrapper.style.width=jQuery(c.nTable).outerWidth()+"px";0<b.childNodes.length;)b.removeChild(b.childNodes[0]);a=jQuery("tfoot",c.nTable).clone(!0)[0];b.appendChild(a);jQuery("tfoot:eq(0)>tr th",c.nTable).each(function(a){jQuery("tfoot:eq(0)>tr th:eq("+a+")",b).width(jQuery(this).width())});jQuery("tfoot:eq(0)>tr td",c.nTable).each(function(a){jQuery("tfoot:eq(0)>tr th:eq("+a+")",b)[0].style.width(jQuery(this).width())})},_fnCloneTLeft:function(a){var c=
this.fnGetSettings(),b=a.nNode,d=$("tbody",c.nTable)[0];for($("tbody tr:eq(0) td",c.nTable);0<b.childNodes.length;)b.removeChild(b.childNodes[0]);b.appendChild(jQuery("thead",c.nTable).clone(!0)[0]);b.appendChild(jQuery("tbody",c.nTable).clone(!0)[0]);c.bFooter&&b.appendChild(jQuery("tfoot",c.nTable).clone(!0)[0]);$("thead tr",b).each(function(){$("th:gt(0)",this).remove()});$("tfoot tr",b).each(function(){$("th:gt(0)",this).remove()});$("tbody tr",b).each(function(){$("td:gt(0)",this).remove()});
this.fnEqualiseHeights("tbody",d.parentNode,b);c=jQuery("thead tr th:eq(0)",c.nTable).outerWidth();b.style.width=c+"px";a.nWrapper.style.width=c+"px"},_fnCloneTRight:function(a){for(var c=this.fnGetSettings(),b=$("tbody",c.nTable)[0],d=a.nNode,e=jQuery("tbody tr:eq(0) td",c.nTable).length;0<d.childNodes.length;)d.removeChild(d.childNodes[0]);d.appendChild(jQuery("thead",c.nTable).clone(!0)[0]);d.appendChild(jQuery("tbody",c.nTable).clone(!0)[0]);c.bFooter&&d.appendChild(jQuery("tfoot",c.nTable).clone(!0)[0]);
jQuery("thead tr th:not(:nth-child("+e+"n))",d).remove();jQuery("tfoot tr th:not(:nth-child("+e+"n))",d).remove();$("tbody tr",d).each(function(){$("td:lt("+(e-1)+")",this).remove()});this.fnEqualiseHeights("tbody",b.parentNode,d);c=jQuery("thead tr th:eq("+(e-1)+")",c.nTable).outerWidth();d.style.width=c+"px";a.nWrapper.style.width=c+"px"},fnEqualiseHeights:function(a,c,b){var d=$(a+" tr:eq(0)",c).children(":eq(0)"),e=d.outerHeight()-d.height(),f=$.browser.msie&&("6.0"==$.browser.version||"7.0"==
$.browser.version);$(a+" tr",b).each(function(b){$.browser.mozilla||$.browser.opera?$(this).children().height($(a+" tr:eq("+b+")",c).outerHeight()):$(this).children().height($(a+" tr:eq("+b+")",c).outerHeight()-e);f||$(a+" tr:eq("+b+")",c).height($(a+" tr:eq("+b+")",c).outerHeight())})}};FixedHeader.oWin={iScrollTop:0,iScrollRight:0,iScrollBottom:0,iScrollLeft:0,iHeight:0,iWidth:0};FixedHeader.oDoc={iHeight:0,iWidth:0};FixedHeader.afnScroll=[];
FixedHeader.fnMeasure=function(){var a=jQuery(window),c=jQuery(document),b=FixedHeader.oWin,d=FixedHeader.oDoc;d.iHeight=c.height();d.iWidth=c.width();b.iHeight=a.height();b.iWidth=a.width();b.iScrollTop=a.scrollTop();b.iScrollLeft=a.scrollLeft();b.iScrollRight=d.iWidth-b.iScrollLeft-b.iWidth;b.iScrollBottom=d.iHeight-b.iScrollTop-b.iHeight};FixedHeader.VERSION="2.0.6";FixedHeader.prototype.VERSION=FixedHeader.VERSION;
jQuery(window).scroll(function(){FixedHeader.fnMeasure();for(var a=0,c=FixedHeader.afnScroll.length;a<c;a++)FixedHeader.afnScroll[a]()});


/*
 * jQuery autogrow (textarea auto-resizer)
 */
(function($) {
    /*
     * Auto-growing textareas; technique ripped from Facebook
     */
    $.fn.autogrow = function(options) {
        
        this.filter('textarea').each(function() {
            
            var $this       = $(this),
                minHeight   = $this.height(),
                lineHeight  = $this.css('lineHeight');
            
            var shadow = $('<div></div>').css({
                position:   'absolute',
                top:        -10000,
                left:       -10000,
                width:      $(this).width() - parseInt($this.css('paddingLeft')) - parseInt($this.css('paddingRight')),
                fontSize:   $this.css('fontSize'),
                fontFamily: $this.css('fontFamily'),
                lineHeight: $this.css('lineHeight'),
                resize:     'none'
            }).appendTo(document.body);
            
            var update = function() {
    
                var times = function(string, number) {
                    var _res = '';
                    for(var i = 0; i < number; i ++) {
                        _res = _res + string;
                    }
                    return _res;
                };
                
                var val = this.value.replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/&/g, '&amp;')
                                    .replace(/\n$/, '<br/>&nbsp;')
                                    .replace(/\n/g, '<br/>')
                                    .replace(/ {2,}/g, function(space) { return times('&nbsp;', space.length -1) + ' ' });
                
                shadow.html(val);
                $(this).css('height', Math.max(shadow.height() + 20, minHeight));
				
            }
            
            $(this).change(update).keyup(update).keydown(update);
            
            update.apply(this);
            
        });
        
        return this;
        
    }
    
})(jQuery);


/*
 * delayKeyup
 * http://code.azerti.net/javascript/jquery/delaykeyup.htm
 * Inspired by CMS in this post : http://stackoverflow.com/questions/1909441/jquery-keyup-delay
 * Written by Gaten
 * Exemple : $("#input").delayKeyup(function(){ alert("5 secondes passed from the last event keyup."); }, 5000);
 */
(function ($) {
    $.fn.delayKeyup = function(callback, ms){
        var timer = 0;
        $(this).keyup(function(){                  
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        });
        return $(this);
    };
})(jQuery);


/*
 * Flexigrid for jQuery - New Wave Grid
 *
 * Copyright (c) 2008 Paulo P. Marinas (webplicity.net/flexigrid)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * $Date: 2008-04-01 00:09:43 +0800 (Tue, 01 Apr 2008) $
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(b($){$.3N=b(t,p){8(t.1D)D o;p=$.4L({G:5Z,l:\'1l\',3o:P,4d:o,5W:30,4A:7m,3n:P,2o:o,5F:\'7l\',2g:\'3E\',5N:\'7k 7j\',3Y:o,5B:P,18:1,1r:1,5b:P,1F:15,2W:[10,15,20,25,40],2Q:o,5J:\'7i {5I} 4s {4s} 5i {1r} 62\',5H:\'7h, 7g 7f ...\',2U:\'\',1u:\'\',5M:\'7e 62\',3i:1,4S:P,4p:P,4O:P,4Y:0.5,4y:o,4v:o,4w:o,4q:o},p);$(t).1U().V({5v:0,5u:0,7d:0}).3e(\'l\');c g={1w:{},21:b(){c 2P=0-6.f.1C;8(6.f.1C>0)2P-=3t.4a(p.32/2);$(g.17).d({1i:g.f.1Q+1});c 1n=6.1n;$(\'9\',g.17).L();$(\'X j:1j u:Z\',6.f).T(b(){c n=$(\'X j:1j u:Z\',g.f).2d(6);c 2O=B($(\'9\',6).l());c 7c=2O;8(2P==0)2P-=3t.4a(p.32/2);2O=2O+2P+1n;$(\'9:U(\'+n+\')\',g.17).d({\'1c\':2O+\'2b\'}).1U();2P=2O})},2p:b(1d){1d=o;8(!1d)1d=$(g.E).G();c 61=$(6.f).G();$(\'9\',6.17).T(b(){$(6).G(1d+61)});c 60=B($(g.z).G());8(60>1d)$(g.z).G(1d).l(5Z);k $(g.z).G(\'1l\').l(\'1l\');$(g.1E).d({G:1d,3T:(1d*-1)});c 4D=g.E.1Q+1d;8(p.G!=\'1l\'&&p.3n)4D=g.2Z.1Q;$(g.2E).d({G:4D})},2Y:b(3H,e,O){8(3H==\'12\'){$(g.z).L();$(g.19).L();c n=$(\'9\',6.17).2d(O);c 3G=$(\'u:Z 9:U(\'+n+\')\',6.f).l();$(O).M(\'2F\').3y().L();$(O).2S().M(\'2F\').1U();6.12={5Y:e.2j,5X:B(O.1z.1c),3G:3G,n:n};$(\'1x\').d(\'2M\',\'2r-4C\')}k 8(3H==\'1R\'){c 2N=o;$(\'1x\').d(\'2M\',\'1K-4C\');8(O){2N=P;$(\'1x\').d(\'2M\',\'2r-4C\')}6.1R={h:p.G,5U:e.3c,w:p.l,5T:e.2j,2N:2N}}k 8(3H==\'5n\'){$(g.z).L();$(g.19).L();6.1w=$(6.f).7b();6.1w.5R=6.1w.1c+$(\'2u\',6.f).l();6.1w.5Q=6.1w.1i+$(\'2u\',6.f).G();6.3b=O;6.2J=$(\'u\',6.f).2d(O);6.16=r.A("9");6.16.R="16";6.16.11=O.11;8($.J.1k){6.16.R="16 5y"}$(6.16).d({4Z:\'7a\',79:\'1c\',1O:\'2k\',4b:O.1B});$(\'1x\').F(6.16);$(6.17).L()}$(\'1x\').2l()},4R:b(e){8(6.12){c n=6.12.n;c 3d=e.2j-6.12.5Y;c 5V=6.12.5X+3d;c 1A=6.12.3G+3d;8(1A>p.5W){$(\'9:U(\'+n+\')\',6.17).d(\'1c\',5V);6.12.1A=1A}}k 8(6.1R){c v=6.1R;c y=e.3c;c 3d=y-v.5U;8(!p.4B)p.4B=p.l;8(p.l!=\'1l\'&&!p.5k&&v.2N){c x=e.2j;c 5S=x-v.5T;c 3F=v.w+5S;8(3F>p.4B){6.K.1z.l=3F+\'2b\';p.l=3F}}c 1d=v.h+3d;8((1d>p.4A||p.G<p.4A)&&!v.2N){6.E.1z.G=1d+\'2b\';p.G=1d;6.2p(1d)}v=N}k 8(6.16){$(6.3b).M(\'3u\').W(\'3r\');8(e.2j>6.1w.5R||e.2j<6.1w.1c||e.3c>6.1w.5Q||e.3c<6.1w.1i){$(\'1x\').d(\'2M\',\'78\')}k $(\'1x\').d(\'2M\',\'77\');$(6.16).d({1i:e.3c+10,1c:e.2j+20,1O:\'1E\'})}},3P:b(){8(6.12){c n=6.12.n;c 1A=6.12.1A;$(\'u:Z 9:U(\'+n+\')\',6.f).d(\'l\',1A);$(\'j\',6.E).T(b(){$(\'m:Z 9:U(\'+n+\')\',6).d(\'l\',1A)});6.f.1C=6.E.1C;$(\'9:U(\'+n+\')\',6.17).3y().1U();$(\'.2F\',6.17).W(\'2F\');6.21();6.2p();6.12=o}k 8(6.1R){6.1R=o}k 8(6.16){$(6.16).2H();8(6.1S!=N){8(6.2J>6.1S)$(\'u:U(\'+6.1S+\')\',6.f).2c(6.3b);k $(\'u:U(\'+6.1S+\')\',6.f).2x(6.3b);6.5P(6.2J,6.1S);$(6.2w).2H();$(6.2v).2H();6.21()}6.3b=N;6.1w=N;6.2J=N;6.1S=N;6.16=N;$(\'.3u\',6.f).W(\'3u\');$(6.17).1U()}$(\'1x\').d(\'2M\',\'76\');$(\'1x\').2l(o)},3M:b(2n,Z){c 2i=$("u[2s=\'2r"+2n+"\']",6.f)[0];c n=$(\'X u\',g.f).2d(2i);c 4z=$(\'Q[1b=\'+2n+\']\',g.z)[0];8(Z==N){Z=2i.L}8($(\'Q:1y\',g.z).1h<p.3i&&!Z)D o;8(Z){2i.L=o;$(2i).1U();4z.1y=P}k{2i.L=P;$(2i).L();4z.1y=o}$(\'1f j\',t).T(b(){8(Z)$(\'m:U(\'+n+\')\',6).1U();k $(\'m:U(\'+n+\')\',6).L()});6.21();8(p.4y)p.4y(2n,Z);D Z},5P:b(2h,1Y){$(\'1f j\',t).T(b(){8(2h>1Y)$(\'m:U(\'+1Y+\')\',6).2c($(\'m:U(\'+2h+\')\',6));k $(\'m:U(\'+1Y+\')\',6).2x($(\'m:U(\'+2h+\')\',6))});8(2h>1Y)$(\'j:U(\'+1Y+\')\',6.z).2c($(\'j:U(\'+2h+\')\',6.z));k $(\'j:U(\'+1Y+\')\',6.z).2x($(\'j:U(\'+2h+\')\',6.z));8($.J.1k&&$.J.1N<7.0)$(\'j:U(\'+1Y+\') Q\',6.z)[0].1y=P;6.f.1C=6.E.1C},45:b(){6.f.1C=6.E.1C;6.21()},3L:b(Y){8(p.5O)Y=p.5O(Y);$(\'.3m\',6.I).W(\'2f\');6.2f=o;8(!Y){$(\'.2X\',6.I).1t(p.5N);D o}8(p.2g==\'3E\')p.1r=+$(\'3D 1r\',Y).2y();k p.1r=Y.1r;8(p.1r==0){$(\'j, a, m, 9\',t).3f();$(t).3v();p.1J=1;p.18=1;6.4u();$(\'.2X\',6.I).1t(p.5M);D o}p.1J=3t.75(p.1r/p.1F);8(p.2g==\'3E\')p.18=+$(\'3D 18\',Y).2y();k p.18=Y.18;6.4u();c 1f=r.A(\'1f\');8(p.2g==\'74\'){$.T(Y.3D,b(i,1K){c j=r.A(\'j\');8(i%2&&p.3o)j.R=\'3Z\';8(1K.2e)j.2e=\'1K\'+1K.2e;$(\'X j:1j u\',g.f).T(b(){c m=r.A(\'m\');c 1X=$(6).V(\'2s\').4m(3);m.1B=6.1B;m.11=1K.3a[1X];$(j).F(m);m=N});8($(\'X\',6.K).1h<1){2A(1X=0;1X<3a.1h;1X++){c m=r.A(\'m\');m.11=1K.3a[1X];$(j).F(m);m=N}}$(1f).F(j);j=N})}k 8(p.2g==\'3E\'){i=1;$("3D 1K",Y).T(b(){i++;c j=r.A(\'j\');8(i%2&&p.3o)j.R=\'3Z\';c 3C=$(6).V(\'2e\');8(3C)j.2e=\'1K\'+3C;3C=N;c 4x=6;$(\'X j:1j u\',g.f).T(b(){c m=r.A(\'m\');c 1X=$(6).V(\'2s\').4m(3);m.1B=6.1B;m.11=$("3a:U("+1X+")",4x).2y();$(j).F(m);m=N});8($(\'X\',6.K).1h<1){$(\'3a\',6).T(b(){c m=r.A(\'m\');m.11=$(6).2y();$(j).F(m);m=N})}$(1f).F(j);j=N;4x=N})}$(\'j\',t).3f();$(t).3v();$(t).F(1f);6.44();6.43();6.21();1f=N;Y=N;i=N;8(p.4w)p.4w();8(p.4p)$(g.1E).2H();6.f.1C=6.E.1C;8($.J.3g)$(t).d(\'5G\',\'Z\')},5q:b(u){8(6.2f)D P;$(g.z).L();$(g.19).L();8(p.1o==$(u).V(\'1p\')){8(p.1g==\'2I\')p.1g=\'46\';k p.1g=\'2I\'}$(u).M(\'34\').3y().W(\'34\');$(\'.5L\',6.f).W(\'5L\');$(\'.5K\',6.f).W(\'5K\');$(\'9\',u).M(\'s\'+p.1g);p.1o=$(u).V(\'1p\');8(p.4v)p.4v(p.1o,p.1g);k 6.1L()},4u:b(){$(\'.2D Q\',6.I).23(p.18);$(\'.2D H\',6.I).1t(p.1J);c 4t=(p.18-1)*p.1F+1;c 3B=4t+p.1F-1;8(p.1r<3B)3B=p.1r;c 1W=p.5J;1W=1W.4r(/{5I}/,4t);1W=1W.4r(/{4s}/,3B);1W=1W.4r(/{1r}/,p.1r);$(\'.2X\',6.I).1t(1W)},1L:b(){8(6.2f)D P;8(p.4q){c 2t=p.4q();8(!2t)D o}6.2f=P;8(!p.2o)D o;$(\'.2X\',6.I).1t(p.5H);$(\'.3m\',6.I).M(\'2f\');$(g.1E).d({1i:g.E.1Q});8(p.4p)$(6.K).1P(g.1E);8($.J.3g)$(t).d(\'5G\',\'73\');8(!p.1m)p.1m=1;8(p.18>p.1J)p.18=p.1J;c 3z=[{S:\'18\',1b:p.1m},{S:\'1F\',1b:p.1F},{S:\'1o\',1b:p.1o},{S:\'1g\',1b:p.1g},{S:\'2U\',1b:p.2U},{S:\'1u\',1b:p.1u}];8(p.4o){2A(c 3A=0;3A<p.4o.1h;3A++)3z[3z.1h]=p.4o[3A]}$.72({24:p.5F,2o:p.2o,Y:3z,2g:p.2g,71:b(Y){g.3L(Y)},70:b(Y){6Z{8(p.5E)p.5E(Y)}6Y(e){}}})},3U:b(){p.2U=$(\'Q[S=q]\',g.1e).23();p.1u=$(\'26[S=1u]\',g.1e).23();p.1m=1;6.1L()},2C:b(5D){8(6.2f)D P;6X(5D){39\'1j\':p.1m=1;38;39\'2S\':8(p.18>1)p.1m=B(p.18)-1;38;39\'3Q\':8(p.18<p.1J)p.1m=B(p.18)+1;38;39\'5d\':p.1m=p.1J;38;39\'Q\':c 1v=B($(\'.2D Q\',6.I).23());8(1G(1v))1v=1;8(1v<1)1v=1;k 8(1v>p.1J)1v=p.1J;$(\'.2D Q\',6.I).23(1v);p.1m=1v;38}8(p.1m==p.18)D o;8(p.5C)p.5C(p.1m);k 6.1L()},44:b(){$(\'1f j m\',g.E).T(b(){c 2L=r.A(\'9\');c n=$(\'m\',$(6).2R()).2d(6);c 1I=$(\'u:U(\'+n+\')\',g.f).42(0);8(1I!=N){8(p.1o==$(1I).V(\'1p\')&&p.1o){6.R=\'34\'}$(2L).d({4b:1I.1B,l:$(\'9:1j\',1I)[0].1z.l});8(1I.L)$(6).d(\'1O\',\'2k\')}8(p.5B==o)$(2L).d(\'50-6W\',\'6V\');8(6.11==\'\')6.11=\'&2V;\';2L.11=6.11;c 4n=$(6).2R()[0];c 4l=o;8(4n.2e)4l=4n.2e.4m(3);8(1I!=N){8(1I.37)1I.37(2L,4l)}$(6).3v().F(2L).3e(\'l\')})},6U:b(O){c 4k=B($(O).G());c 4g=B($(O).2R().G());c 4j=B(O.1z.l);c 4f=B($(O).2R().l());c 1i=O.5A.1Q;c 1c=O.5A.6T;c 4i=B($(O).d(\'2G\'));c 4h=B($(O).d(\'6S\'));D{4k:4k,4j:4j,1i:1i,1c:1c,4i:4i,4h:4h,4g:4g,4f:4f}},43:b(){$(\'1f j\',g.E).T(b(){$(6).1a(b(e){c O=(e.5t||e.5s);8(O.5r||O.24)D P;$(6).2T(\'3x\');8(p.6R)$(6).3y().W(\'3x\')}).1Z(b(e){8(e.6Q){$(6).2T(\'3x\');g.2q=P;6.3I();$(g.K).2l()}}).4Q(b(){8(g.2q){g.2q=o;$(g.K).2l(o)}}).1s(b(e){8(g.2q){$(6).2T(\'3x\')}},b(){});8($.J.1k&&$.J.1N<7.0){$(6).1s(b(){$(6).M(\'5z\')},b(){$(6).W(\'5z\')})}})},6P:0};8(p.4e){X=r.A(\'X\');j=r.A(\'j\');2A(i=0;i<p.4e.1h;i++){c 1q=p.4e[i];c u=r.A(\'u\');u.11=1q.1O;8(1q.S&&1q.6O)$(u).V(\'1p\',1q.S);$(u).V(\'2s\',\'2r\'+i);8(1q.1B)u.1B=1q.1B;8(1q.l)$(u).V(\'l\',1q.l);8(1q.L){u.L=P}8(1q.37){u.37=1q.37}$(j).F(u)}$(X).F(j);$(t).1P(X)}g.K=r.A(\'9\');g.1M=r.A(\'9\');g.f=r.A(\'9\');g.E=r.A(\'9\');g.2Z=r.A(\'9\');g.2E=r.A(\'9\');g.17=r.A(\'9\');g.1E=r.A(\'9\');g.z=r.A(\'9\');g.19=r.A(\'9\');g.3h=r.A(\'9\');g.22=r.A(\'9\');g.1e=r.A(\'9\');8(p.3Y)g.I=r.A(\'9\');g.36=r.A(\'2u\');g.K.R=\'4N\';8(p.l!=\'1l\')g.K.1z.l=p.l+\'2b\';8($.J.1k)$(g.K).M(\'5y\');8(p.4d)$(g.K).M(\'4d\');$(t).2c(g.K);$(g.K).F(t);8(p.4c){g.22.R=\'22\';c 2K=r.A(\'9\');2K.R=\'2K\';2A(i=0;i<p.4c.1h;i++){c 1V=p.4c[i];8(!1V.6N){c 1H=r.A(\'9\');1H.R=\'6M\';1H.11="<9><H>"+1V.S+"</H></9>";8(1V.5x)$(\'H\',1H).M(1V.5x).d({2G:20});1H.3w=1V.3w;1H.S=1V.S;8(1V.3w){$(1H).1a(b(){6.3w(6.S,g.K)})}$(2K).F(1H);8($.J.1k&&$.J.1N<7.0){$(1H).1s(b(){$(6).M(\'5w\')},b(){$(6).W(\'5w\')})}}k{$(2K).F("<9 C=\'28\'></9>")}}$(g.22).F(2K);$(g.22).F("<9 1z=\'53:52\'></9>");$(g.K).1P(g.22)}g.f.R=\'f\';$(t).2c(g.f);g.36.5v=0;g.36.5u=0;$(g.f).F(\'<9 C="6L"></9>\');$(\'9\',g.f).F(g.36);c X=$("X:1j",t).42(0);8(X)$(g.36).F(X);X=N;8(!p.5p)c 5o=0;$(\'X j:1j u\',g.f).T(b(){c 35=r.A(\'9\');8($(6).V(\'1p\')){$(6).1a(b(e){8(!$(6).47(\'3r\'))D o;c O=(e.5t||e.5s);8(O.5r||O.24)D P;g.5q(6)});8($(6).V(\'1p\')==p.1o){6.R=\'34\';35.R=\'s\'+p.1g}}8(6.L)$(6).L();8(!p.5p){$(6).V(\'2s\',\'2r\'+5o++)}$(35).d({4b:6.1B,l:6.l+\'2b\'});35.11=6.11;$(6).3v().F(35).3e(\'l\').1Z(b(e){g.2Y(\'5n\',e,6)}).1s(b(){8(!g.12&&!$(6).47(\'3u\')&&!g.16)$(6).M(\'3r\');8($(6).V(\'1p\')!=p.1o&&!g.16&&!g.12&&$(6).V(\'1p\'))$(\'9\',6).M(\'s\'+p.1g);k 8($(6).V(\'1p\')==p.1o&&!g.16&&!g.12&&$(6).V(\'1p\')){c 1T=\'\';8(p.1g==\'2I\')1T=\'46\';k 1T=\'2I\';$(\'9\',6).W(\'s\'+p.1g).M(\'s\'+1T)}8(g.16){c n=$(\'u\',g.f).2d(6);8(n==g.2J)D o;8(n<g.2J)$(6).F(g.2w);k $(6).F(g.2v);g.1S=n}k 8(!g.12){c 1v=$(\'u:Z\',g.f).2d(6);c 49=B($(\'9:U(\'+1v+\')\',g.17).d(\'1c\'));c 1A=B($(g.19).l())+B($(g.19).d(\'33\'));3s=49-1A+3t.4a(p.32/2);$(g.z).L();$(g.19).L();$(g.19).d({\'1c\':3s,1i:g.f.1Q}).1U();c 48=B($(g.z).l());$(g.z).d({1i:g.E.1Q});8((3s+48)>$(g.K).l())$(g.z).d(\'1c\',49-48+1);k $(g.z).d(\'1c\',3s);8($(6).47(\'34\'))$(g.19).M(\'5m\');k $(g.19).W(\'5m\')}},b(){$(6).W(\'3r\');8($(6).V(\'1p\')!=p.1o)$(\'9\',6).W(\'s\'+p.1g);k 8($(6).V(\'1p\')==p.1o){c 1T=\'\';8(p.1g==\'2I\')1T=\'46\';k 1T=\'2I\';$(\'9\',6).M(\'s\'+p.1g).W(\'s\'+1T)}8(g.16){$(g.2w).2H();$(g.2v).2H();g.1S=N}})});g.E.R=\'E\';$(t).2c(g.E);$(g.E).d({G:(p.G==\'1l\')?\'1l\':p.G+"2b"}).45(b(e){g.45()}).F(t);8(p.G==\'1l\'){$(\'2u\',g.E).M(\'6K\')}g.44();g.43();c 14=$(\'X j:1j u:1j\',g.f).42(0);8(14!=N){g.17.R=\'17\';g.1n=0;g.1n+=(1G(B($(\'9\',14).d(\'33\')))?0:B($(\'9\',14).d(\'33\')));g.1n+=(1G(B($(\'9\',14).d(\'3q\')))?0:B($(\'9\',14).d(\'3q\')));g.1n+=(1G(B($(\'9\',14).d(\'2G\')))?0:B($(\'9\',14).d(\'2G\')));g.1n+=(1G(B($(\'9\',14).d(\'3p\')))?0:B($(\'9\',14).d(\'3p\')));g.1n+=(1G(B($(14).d(\'33\')))?0:B($(14).d(\'33\')));g.1n+=(1G(B($(14).d(\'3q\')))?0:B($(14).d(\'3q\')));g.1n+=(1G(B($(14).d(\'2G\')))?0:B($(14).d(\'2G\')));g.1n+=(1G(B($(14).d(\'3p\')))?0:B($(14).d(\'3p\')));$(g.E).2c(g.17);c 5l=$(g.E).G();c 41=$(g.f).G();$(g.17).d({1i:-41+\'2b\'});$(\'X j:1j u\',g.f).T(b(){c 31=r.A(\'9\');$(g.17).F(31);8(!p.32)p.32=$(31).l();$(31).d({G:5l+41}).1Z(b(e){g.2Y(\'12\',e,6)});8($.J.1k&&$.J.1N<7.0){g.2p($(g.K).G());$(31).1s(b(){g.2p();$(6).M(\'2F\')},b(){8(!g.12)$(6).W(\'2F\')})}})}8(p.3o)$(\'1f j:6J\',g.E).M(\'3Z\');8(p.3n&&p.G!=\'1l\'){g.2Z.R=\'4P\';$(g.2Z).1Z(b(e){g.2Y(\'1R\',e)}).1t(\'<H></H>\');$(g.E).2x(g.2Z)}8(p.3n&&p.l!=\'1l\'&&!p.5k){g.2E.R=\'6I\';$(g.2E).1Z(b(e){g.2Y(\'1R\',e,P)}).1t(\'<H></H>\').d(\'G\',$(g.K).G());8($.J.1k&&$.J.1N<7.0){$(g.2E).1s(b(){$(6).M(\'5j\')},b(){$(6).W(\'5j\')})}$(g.K).F(g.2E)}8(p.3Y){g.I.R=\'I\';g.I.11=\'<9 C="3W"></9>\';$(g.E).2x(g.I);c 1t=\' <9 C="2a"> <9 C="5h 29"><H></H></9><9 C="5g 29"><H></H></9> </9> <9 C="28"></9> <9 C="2a"><H C="2D">6H <Q 24="2y" 57="4" 1b="1" /> 5i <H> 1 </H></H></9> <9 C="28"></9> <9 C="2a"> <9 C="5f 29"><H></H></9><9 C="5e 29"><H></H></9> </9> <9 C="28"></9> <9 C="2a"> <9 C="3m 29"><H></H></9> </9> <9 C="28"></9> <9 C="2a"><H C="2X"></H></9>\';$(\'9\',g.I).1t(1t);$(\'.3m\',g.I).1a(b(){g.1L()});$(\'.5h\',g.I).1a(b(){g.2C(\'1j\')});$(\'.5g\',g.I).1a(b(){g.2C(\'2S\')});$(\'.5f\',g.I).1a(b(){g.2C(\'3Q\')});$(\'.5e\',g.I).1a(b(){g.2C(\'5d\')});$(\'.2D Q\',g.I).56(b(e){8(e.55==13)g.2C(\'Q\')});8($.J.1k&&$.J.1N<7)$(\'.29\',g.I).1s(b(){$(6).M(\'5c\')},b(){$(6).W(\'5c\')});8(p.5b){c 3X="";2A(c 2B=0;2B<p.2W.1h;2B++){8(p.1F==p.2W[2B])2z=\'3l="3l"\';k 2z=\'\';3X+="<3k 1b=\'"+p.2W[2B]+"\' "+2z+" >"+p.2W[2B]+"&2V;&2V;</3k>"};$(\'.3W\',g.I).1P("<9 C=\'2a\'><26 S=\'1F\'>"+3X+"</26></9> <9 C=\'28\'></9>");$(\'26\',g.I).6G(b(){8(p.5a)p.5a(+6.1b);k{p.1m=1;p.1F=+6.1b;g.1L()}})}8(p.58){$(\'.3W\',g.I).1P("<9 C=\'2a\'> <9 C=\'59 29\'><H></H></9> </9>  <9 C=\'28\'></9>");$(\'.59\',g.I).1a(b(){$(g.1e).6F(\'6E\',b(){$(\'.1e:Z Q:1j\',g.K).3J(\'3I\')})});g.1e.R=\'1e\';27=p.58;c 3V="";2A(c s=0;s<27.1h;s++){8(p.1u==\'\'&&27[s].6D==P){p.1u=27[s].S;2z=\'3l="3l"\'}k 2z=\'\';3V+="<3k 1b=\'"+27[s].S+"\' "+2z+" >"+27[s].1O+"&2V;&2V;</3k>"}8(p.1u==\'\')p.1u=27[0].S;$(g.1e).F("<9 C=\'6C\'>6B 6A <Q 24=\'2y\' 57=\'30\' S=\'q\' C=\'6z\' /> <26 S=\'1u\'>"+3V+"</26> <Q 24=\'6y\' 1b=\'54\' /></9>");$(\'Q[S=q],26[S=1u]\',g.1e).56(b(e){8(e.55==13)g.3U()});$(\'Q[1b=54]\',g.1e).1a(b(){$(\'Q[S=q]\',g.1e).23(\'\');p.2U=\'\';g.3U()});$(g.E).2x(g.1e)}}$(g.I,g.1e).F("<9 1z=\'53:52\'></9>");8(p.2Q){g.1M.R=\'1M\';g.1M.11=\'<9 C="6x">\'+p.2Q+\'</9>\';$(g.K).1P(g.1M);8(p.6w){$(g.1M).F(\'<9 C="51" 2Q="6v/6u 6t"><H></H></9>\');$(\'9.51\',g.1M).1a(b(){$(g.K).2T(\'6s\');$(6).2T(\'6r\')})}}g.2w=r.A(\'H\');g.2w.R=\'2w\';g.2v=r.A(\'H\');g.2v.R=\'2v\';g.1E.R=\'6q\';c 2t=$(g.E).G();c 3S=g.E.1Q;$(g.1E).d({l:g.E.1z.l,G:2t,6p:\'50\',4Z:\'6o\',3T:(2t*-1),6n:1,1i:3S,1c:\'6m\'});$(g.1E).6l(0,p.4Y);8($(\'u\',g.f).1h){g.z.R=\'z\';g.z.11="<2u 6k=\'0\' 6j=\'0\'><1f></1f></2u>";$(g.z).d({3T:(2t*-1),1O:\'2k\',1i:3S}).2l();c 3j=0;$(\'u 9\',g.f).T(b(){c 4X=$("u[2s=\'2r"+3j+"\']",g.f)[0];c 3R=\'1y="1y"\';8(4X.1z.1O==\'2k\')3R=\'\';$(\'1f\',g.z).F(\'<j><m C="6i"><Q 24="6h" \'+3R+\' C="4T" 1b="\'+3j+\'" /></m><m C="4V">\'+6.11+\'</m></j>\');3j++});8($.J.1k&&$.J.1N<7.0)$(\'j\',g.z).1s(b(){$(6).M(\'4W\')},b(){$(6).W(\'4W\')});$(\'m.4V\',g.z).1a(b(){8($(\'Q:1y\',g.z).1h<=p.3i&&$(6).2S().4U(\'Q\')[0].1y)D o;D g.3M($(6).2S().4U(\'Q\').23())});$(\'Q.4T\',g.z).1a(b(){8($(\'Q:1y\',g.z).1h<p.3i&&6.1y==o)D o;$(6).2R().3Q().3J(\'1a\')});$(g.K).1P(g.z);$(g.19).M(\'19\').1t(\'<9></9>\').V(\'2Q\',\'6g/6f 6e\').1a(b(){$(g.z).6d();D P});8(p.4S)$(g.K).1P(g.19)}$(g.3h).M(\'3h\').d({1O:\'2k\'});$(g.E).F(g.3h);$(g.E).1s(b(){$(g.z).L();$(g.19).L()},b(){8(g.2q)g.2q=o});$(g.K).1s(b(){},b(){$(g.z).L();$(g.19).L()});$(r).6c(b(e){g.4R(e)}).4Q(b(e){g.3P()}).1s(b(){},b(){g.3P()});8($.J.1k&&$.J.1N<7.0){$(\'.f,.E,.1M,.I,.4P,.22, .1e\',g.K).d({l:\'6b%\'});$(g.K).M(\'6a\');8(p.l!=\'1l\')$(g.K).M(\'69\')}g.21();g.2p();t.p=p;t.1D=g;8(p.2o&&p.4O){g.1L()}D t};c 3O=o;$(r).4M(b(){3O=P});$.2m.4N=b(p){D 6.T(b(){8(!3O){$(6).L();c t=6;$(r).4M(b(){$.3N(t,p)})}k{$.3N(6,p)}})};$.2m.68=b(p){D 6.T(b(){8(6.1D&&6.p.2o)6.1D.1L()})};$.2m.67=b(p){D 6.T(b(){8(6.1D)$.4L(6.p,p)})};$.2m.66=b(2n,Z){D 6.T(b(){8(6.1D)6.1D.3M(2n,Z)})};$.2m.65=b(Y){D 6.T(b(){8(6.1D)6.1D.3L(Y)})};$.2m.2l=b(p){8(p==N)3K=P;k 3K=p;8(3K){D 6.T(b(){8($.J.1k||$.J.4J)$(6).4K(\'4I\',b(){D o});k 8($.J.4H){$(6).d(\'4G\',\'2k\');$(\'1x\').3J(\'3I\')}k 8($.J.3g)$(6).4K(\'1Z\',b(){D o});k $(6).V(\'4F\',\'4E\')})}k{D 6.T(b(){8($.J.1k||$.J.4J)$(6).3f(\'4I\');k 8($.J.4H)$(6).d(\'4G\',\'64\');k 8($.J.3g)$(6).3f(\'1Z\');k $(6).3e(\'4F\',\'4E\')})}}})(63);',62,457,'||||||this||if|div||function|var|css||hDiv||||tr|else|width|td||false|||document|||th|||||nDiv|createElement|parseInt|class|return|bDiv|append|height|span|pDiv|browser|gDiv|hide|addClass|null|obj|true|input|className|name|each|eq|attr|removeClass|thead|data|visible||innerHTML|colresize||cdcol||colCopy|cDrag|page|nBtn|click|value|left|newH|sDiv|tbody|sortorder|length|top|first|msie|auto|newp|cdpad|sortname|abbr|cm|total|hover|html|qtype|nv|hset|body|checked|style|nw|align|scrollLeft|grid|block|rp|isNaN|btnDiv|pth|pages|row|populate|mDiv|version|display|prepend|offsetTop|vresize|dcolt|no|show|btn|stat|idx|cdrop|mousedown||rePosDrag|tDiv|val|type||select|sitems|btnseparator|pButton|pGroup|px|before|index|id|loading|dataType|cdrag|ncol|pageX|none|noSelect|fn|cid|url|fixHeight|multisel|col|axis|gh|table|cdropright|cdropleft|after|text|sel|for|nx|changePage|pcontrol|rDiv|dragging|paddingLeft|remove|asc|dcoln|tDiv2|tdDiv|cursor|hgo|cdpos|cdleft|title|parent|prev|toggleClass|query|nbsp|rpOptions|pPageStat|dragStart|vDiv||cgDiv|cgwidth|borderLeftWidth|sorted|thdiv|hTable|process|break|case|cell|dcol|pageY|diff|removeAttr|unbind|opera|iDiv|minColToggle|cn|option|selected|pReload|resizable|striped|paddingRight|borderRightWidth|thOver|nl|Math|thMove|empty|onpress|trSelected|siblings|param|pi|r2|nid|rows|xml|newW|ow|dragtype|focus|trigger|prevent|addData|toggleCol|addFlex|docloaded|dragEnd|next|chk|gtop|marginBottom|doSearch|sopt|pDiv2|opt|usepager|erow||hdheight|get|addRowProp|addCellProp|scroll|desc|hasClass|ndw|onl|floor|textAlign|buttons|novstripe|colModel|pwt|pht|pdt|pdl|wt|ht|pid|substr|prnt|params|hideOnSubmit|onSubmit|replace|to|r1|buildpager|onChangeSort|onSuccess|robj|onToggleCol|cb|minheight|defwidth|resize|hrH|on|unselectable|MozUserSelect|mozilla|selectstart|safari|bind|extend|ready|flexigrid|autoload|vGrip|mouseup|dragMove|showToggleBtn|togCol|find|ndcol2|ndcolover|kcol|blockOpacity|position|white|ptogtitle|both|clear|Clear|keyCode|keydown|size|searchitems|pSearch|onRpChange|useRp|pBtnOver|last|pLast|pNext|pPrev|pFirst|of|hgOver|nohresize|cdheight|srtd|colMove|ci|colmodel|changeSort|href|srcElement|target|cellSpacing|cellPadding|fbOver|bclass|ie|trOver|offsetParent|nowrap|onChangePage|ctype|onError|method|visibility|procmsg|from|pagestat|sasc|sdesc|nomsg|errormsg|preProcess|switchCol|bottom|right|xdiff|sx|sy|nleft|minwidth|ol|startX|200|nd|hdHeight|items|jQuery|inherit|flexAddData|flexToggleCol|flexOptions|flexReload|ie6fullwidthbug|ie6|100|mousemove|toggle|Columns|Show|Hide|checkbox|ndcol1|cellspacing|cellpadding|fadeTo|0px|zIndex|relative|background|gBlock|vsble|hideBody|Table|Maximize|Minimize|showTableToggleBtn|ftitle|button|qsbox|Search|Quick|sDiv2|isdefault|fast|slideToggle|change|Page|hGrip|odd|autoht|hDivBox|fbutton|separator|sortable|pager|shiftKey|singleSelect|paddingTop|offsetLeft|getCellDim|normal|space|switch|catch|try|error|success|ajax|hidden|json|ceil|default|pointer|move|float|absolute|offset|ppos|border|No|wait|please|Processing|Displaying|Error|Connection|POST|80'.split('|'),0,{}))

// Based on "Dynamic Client Side Table Sorting" by Tom Dell'Aringa at http://www.dmxzone.com/

// index of the column that was sorted last. -1 specifies that the user has never clicked a sort column
var lastSort = -1;

// @param tableid string ID of the table to sort (e.g., <table id="rr_table" ...)
// @param sortColumn int Column index to sort (e.g., <tr><th>ID</th><th>Title</th></tr>, 0 = sort by id, 1 = sort by title)
// @param type string Specifies which algorithm to use when comparing values. (e.g., 'string','int','date')
function SortTable(tableid, sortColumn, type)
{
    // get table
    var table = document.getElementById(tableid);
    // get the table body
    var tbody = table.getElementsByTagName('tbody')[0];
    // get all rows of the table body
    var rows = tbody.getElementsByTagName('tr');
    // our new array of rows
    var rowArray = new Array();
    // number of rows we are working with
    var length = rows.length;
    //clone each row for sorting
    for (var i=0; i<length; i++)
    {
        rowArray[i] = rows[i].cloneNode(true);
    }
    // if user clicked on column 1 header two times in a row (for example)
    if (sortColumn == lastSort)
    {
        // merely reverse the array
        rowArray.reverse();
    }
    // else user is sorting by a different column header
    else
    {
        // save the index of the column we are sorting by in case we need to reverse
        lastSort = sortColumn;
        // what type of values exist in the column? string, int, date, float?
        switch(type)
        {
            // sort by number
            case 'float':
                rowArray.sort(RowCompareNumbers);
                break;
            // sort by integer
            case 'int':
                rowArray.sort(RowCompareIntegers);
                break;
            // sort by string/text
            case 'string':
                rowArray.sort(RowCompare);
                break;
            // sort by date
            case 'date':
                rowArray.sort(RowCompareDates);
                break;
        }
    }
    // create our new tbody to replace the old one
    var newTbody = document.createElement('tbody');
    var length = rowArray.length;
    var rowclass = '';
    // append all of our newly sorted rows
    for (var i=0; i<length; i++)
    {
        // determine row class (e.g., use "even" or "odd" css class)
        rowclass = (i % 2) ? 'erow' : '';
        // set class
        rowArray[i].className = rowclass;
        // append row to new tbody
        newTbody.appendChild(rowArray[i]);
    }
    // replace old data with new data
    table.replaceChild(newTbody, tbody);
}

// @param tableid string ID of the table to sort (e.g., <table id="rr_table" ...)
// @param sortColumn int Column index to sort (e.g., <tr><th>ID</th><th>Title</th></tr>, 0 = sort by id, 1 = sort by title)
// @param type string Specifies which algorithm to use when comparing values. (e.g., 'string','int','date')
function SortTableScore(tableid, sortColumn, type)
{
    // get table
    var table = document.getElementById(tableid);
    // get the table body
    var tbody = table.getElementsByTagName('tbody')[0];
    // get all rows of the table body
    var rows = tbody.getElementsByTagName('tr');
    // our new array of rows
    var rowArray = new Array();
    // number of rows we are working with
    var length = rows.length;
    //clone each row for sorting
    for (var i=0; i<length; i++)
    {
        rowArray[i] = rows[i].cloneNode(true);
    }
    // if user clicked on column 1 header two times in a row (for example)
    if (sortColumn == lastSort)
    {
        // merely reverse the array
        rowArray.reverse();
    }
    // else user is sorting by a different column header
    else
    {
        // save the index of the column we are sorting by in case we need to reverse
        lastSort = sortColumn;
        // what type of values exist in the column? string, int, date, float?
        switch(type)
        {
            // sort by number
            case 'float':
                rowArray.sort(RowCompareNumbers);
                break;
            // sort by integer
            case 'int':
                rowArray.sort(RowCompareIntegers);
                break;
            // sort by string/text
            case 'string':
                rowArray.sort(RowCompare);
                break;
            // sort by date
            case 'date':
                rowArray.sort(RowCompareDates);
                break;
        }
    }
    // create our new tbody to replace the old one
    var newTbody = document.createElement('tbody');
    var length = rowArray.length;
    var rowclass = 'odd';
    // append all of our newly sorted rows
    for (var i=0; i<length; i++)
    {
        // determine row class (e.g., use "even" or "odd" css class)
        //rowclass = (i % 2) ? 'even' : 'odd';
        // set class
        //rowArray[i].className = rowclass;
        // append row to new tbody
        newTbody.appendChild(rowArray[i]);
    }
    // replace old data with new data
    table.replaceChild(newTbody, tbody);
}
// Text sort
function RowCompare(a, b)
{
	// Get all innerHtml
    var aValPre = a.getElementsByTagName('td')[lastSort].innerHTML.toLowerCase();
    var bValPre = b.getElementsByTagName('td')[lastSort].innerHTML.toLowerCase();
	// Remove all html
    var aValStripTags = aValPre.replace(/(<([^>]+)>)/ig,"").replace(/^\s*|\s*$/g,"");
    var bValStripTags = bValPre.replace(/(<([^>]+)>)/ig,"").replace(/^\s*|\s*$/g,"");
	// If contains only html and nothing else, then leave html (so we have something to compare against), else strip all tags
	var aVal = (aValStripTags.length==0) ? aValPre : aValStripTags;
	var bVal = (bValStripTags.length==0) ? bValPre : bValStripTags;
    var rVal;
    if(aVal == bVal)
    {
        rVal = 0;
    }
    else
    {
        if(aVal > bVal)
        {
              rVal = 1;
        }
        else
        {
              rVal = -1;
        }
    }
    return rVal;
}
// Integer sort
function RowCompareIntegers(a, b)
{
    var aVal = parseInt(a.getElementsByTagName('td')[lastSort].innerHTML.replace(/(<([^>]+)>)/ig,""), 10);
    var bVal = parseInt(b.getElementsByTagName('td')[lastSort].innerHTML.replace(/(<([^>]+)>)/ig,""), 10);
    return (aVal - bVal);
}
// Number sort
function RowCompareNumbers(a, b)
{
    var aVal = a.getElementsByTagName('td')[lastSort].innerHTML.replace(/(<([^>]+)>)/ig,"")*1;
    var bVal = b.getElementsByTagName('td')[lastSort].innerHTML.replace(/(<([^>]+)>)/ig,"")*1;
    return (aVal - bVal);
}
// Date sort
function RowCompareDates(a, b)
{
	var aVal = a.getElementsByTagName('td')[lastSort].innerHTML;
	var bVal = b.getElementsByTagName('td')[lastSort].innerHTML;
	
	if((a == '' || aVal == '&nbsp;') && (bVal == '' || bVal == '&nbsp;'))
		return 0;
	if(a == '' || aVal == '&nbsp;')
		return -1;
	if(bVal == '' || bVal == '&nbsp;')
		return 1;
	
    aVal = Date.parse(aVal.replace(/(<([^>]+)>)/ig,""));
    bVal = Date.parse(bVal.replace(/(<([^>]+)>)/ig,""));
    return (aVal - bVal);
}
// Quicksearch for searching text in html tables
jQuery(function ($) {
	$.fn.quicksearch = function (target, opt) {
		
		var timeout, cache, rowcache, jq_results, val = '', e = this, options = $.extend({ 
			delay: 100,
			selector: null,
			stripeRows: null,
			loader: null,
			noResults: '',
			bind: 'keyup',
			onBefore: function () { 
				return;
			},
			onAfter: function () { 
				return;
			},
			show: function () {
				this.style.display = "";
			},
			hide: function () {
				this.style.display = "none";
			}
		}, opt);
		
		this.go = function () {
			
			var i = 0, noresults = true, vals = val.toLowerCase().split(' ');
			
			var rowcache_length = rowcache.length;
			for (var i = 0; i < rowcache_length; i++)
			{
				if (this.test(vals, cache[i]) || val == "") {
					options.show.apply(rowcache[i]);
					noresults = false;
				} else {
					options.hide.apply(rowcache[i]);
				}
			}
			
			if (noresults) {
				this.results(false);
			} else {
				this.results(true);
				this.stripe();
			}
			
			this.loader(false);
			options.onAfter();
			
			return this;
		};
		
		this.stripe = function () {
			
			if (typeof options.stripeRows === "object" && options.stripeRows !== null)
			{
				var joined = options.stripeRows.join(' ');
				var stripeRows_length = options.stripeRows.length;
				
				jq_results.not(':hidden').each(function (i) {
					$(this).removeClass(joined).addClass(options.stripeRows[i % stripeRows_length]);
				});
			}
			
			return this;
		};
		
		this.strip_html = function (input) {
			var output = input.replace(/<\/?[^>]+>/gi, '');
			output = $.trim(output.toLowerCase());
			return output;
		};
		
		this.results = function (bool) {
			if (typeof options.noResults === "string" && options.noResults !== "") {
				if (bool) {
					$(options.noResults).hide();
				} else {
					$(options.noResults).show();
				}
			}
			return this;
		};
		
		this.loader = function (bool) {
			if (typeof options.loader === "string" && options.loader !== "") {
				 (bool) ? $(options.loader).show() : $(options.loader).hide();
			}
			return this;
		};
		
		this.test = function (vals, t) {
			for (var i = 0; i < vals.length; i += 1) {
				if (t.indexOf(vals[i]) === -1) {
					return false;
				}
			}
			return true;
		};
		
		this.cache = function () {
			
			jq_results = $(target);
			
			if (typeof options.noResults === "string" && options.noResults !== "") {
				jq_results = jq_results.not(options.noResults);
			}
			
			var t = (typeof options.selector === "string") ? jq_results.find(options.selector) : $(target).not(options.noResults);
			cache = t.map(function () {
				return e.strip_html(this.innerHTML);
			});
			
			rowcache = jq_results.map(function () {
				return this;
			});
			
			return this.go();
		};
		
		this.trigger = function () {
			this.loader(true);
			options.onBefore();
			
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function () {
				e.go();
			}, options.delay);
			
			return this;
		};
		
		this.cache();
		this.results(true);
		this.stripe();
		this.loader(false);
		
		return this.each(function () {
			$(this).bind(options.bind, function () {
				val = $(this).val();
				e.trigger();
			});
		});
		
	};
});

/*
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);

/****************************************************************************************************/
// FormChek.js
//
// SUMMARY
//
// This is a set of JavaScript functions for validating input on
// an HTML form.  Functions are provided to validate:
//
//      - U.S. and international phone/fax numbers
//      - U.S. ZIP codes (5 or 9 digit postal codes)
//      - U.S. Postal Codes (2 letter abbreviations for names of states)
//      - U.S. Social Security Numbers (abbreviated as SSNs)
//      - email addresses
//	- dates (entry of year, month, and day and validity of combined date)
//	- credit card numbers
//
// Supporting utility functions validate that:
//
//      - characters are Letter, Digit, or LetterOrDigit
//      - strings are a Signed, Positive, Negative, Nonpositive, or
//        Nonnegative integer
//      - strings are a Float or a SignedFloat
//      - strings are Alphabetic, Alphanumeric, or Whitespace
//      - strings contain an integer within a specified range
//
// Functions are also provided to interactively check the
// above kinds of data and prompt the user if they have
// been entered incorrectly.
//
// Other utility functions are provided to:
//
// 	- remove from a string characters which are/are not
//	  in a "bag" of selected characters
// 	- reformat a string, adding delimiter characters
//	- strip whitespace/leading whitespace from a string
//      - reformat U.S. phone numbers, ZIP codes, and Social
//        Security numbers
//
//
// Many of the below functions take an optional parameter eok (for "emptyOK")
// which determines whether the empty string will return true or false.
// Default behavior is controlled by global variable defaultEmptyOK.
//
// BASIC DATA VALIDATION FUNCTIONS:
//
// isWhitespace (s)                    Check whether string s is empty or whitespace.
// isLetter (c)                        Check whether character c is an English letter
// isDigit (c)                         Check whether character c is a digit
// isLetterOrDigit (c)                 Check whether character c is a letter or digit.
// isInteger (s [,eok])                True if all characters in string s are numbers.
// isSignedInteger (s [,eok])          True if all characters in string s are numbers; leading + or - allowed.
// isPositiveInteger (s [,eok])        True if string s is an integer > 0.
// isNonnegativeInteger (s [,eok])     True if string s is an integer >= 0.
// isNegativeInteger (s [,eok])        True if s is an integer < 0.
// isNonpositiveInteger (s [,eok])     True if s is an integer <= 0.
// isFloat (s [,eok])                  True if string s is an unsigned floating point (real) number. (Integers also OK.)
// isSignedFloat (s [,eok])            True if string s is a floating point number; leading + or - allowed. (Integers also OK.)
// isAlphabetic (s [,eok])             True if string s is English letters
// isAlphanumeric (s [,eok])           True if string s is English letters and numbers only.
//
// isSSN (s [,eok])                    True if string s is a valid U.S. Social Security Number.
// isUSPhoneNumber (s [,eok])          True if string s is a valid U.S. Phone Number.
// isInternationalPhoneNumber (s [,eok]) True if string s is a valid international phone number.
// isZIPCode (s [,eok])                True if string s is a valid U.S. ZIP code.
// isStateCode (s [,eok])              True if string s is a valid U.S. Postal Code
// isEmail (s [,eok])                  True if string s is a valid email address.
// isYear (s [,eok])                   True if string s is a valid Year number.
// isIntegerInRange (s, a, b [,eok])   True if string s is an integer between a and b, inclusive.
// isMonth (s [,eok])                  True if string s is a valid month between 1 and 12.
// isDay (s [,eok])                    True if string s is a valid day between 1 and 31.
// daysInFebruary (year)               Returns number of days in February of that year.
// isDate (year, month, day)           True if string arguments form a valid date.


// FUNCTIONS TO REFORMAT DATA:
//
// stripCharsInBag (s, bag)            Removes all characters in string bag from string s.
// stripCharsNotInBag (s, bag)         Removes all characters NOT in string bag from string s.
// stripWhitespace (s)                 Removes all whitespace characters from s.
// stripInitialWhitespace (s)          Removes initial (leading) whitespace characters from s.
// reformat (TARGETSTRING, STRING,     Function for inserting formatting characters or
//   INTEGER, STRING, INTEGER ... )       delimiters into TARGETSTRING.
// reformatZIPCode (ZIPString)         If 9 digits, inserts separator hyphen.
// reformatSSN (SSN)                   Reformats as 123-45-6789.
// reformatUSPhone (USPhone)           Reformats as (123) 456-789.


// FUNCTIONS TO PROMPT USER:
//
// prompt (s)                          Display prompt string s in status bar.
// promptEntry (s)                     Display data entry prompt string s in status bar.
// warnEmpty (theField, s)             Notify user that required field theField is empty.
// warnInvalid (theField, s)           Notify user that contents of field theField are invalid.


// FUNCTIONS TO INTERACTIVELY CHECK FIELD CONTENTS:
//
// checkString (theField, s [,eok])    Check that theField.value is not empty or all whitespace.
// checkStateCode (theField)           Check that theField.value is a valid U.S. state code.
// checkZIPCode (theField [,eok])      Check that theField.value is a valid ZIP code.
// checkUSPhone (theField [,eok])      Check that theField.value is a valid US Phone.
// checkInternationalPhone (theField [,eok])  Check that theField.value is a valid International Phone.
// checkEmail (theField [,eok])        Check that theField.value is a valid Email.
// checkSSN (theField [,eok])          Check that theField.value is a valid SSN.
// checkYear (theField [,eok])         Check that theField.value is a valid Year.
// checkMonth (theField [,eok])        Check that theField.value is a valid Month.
// checkDay (theField [,eok])          Check that theField.value is a valid Day.
// checkDate (yearField, monthField, dayField, labelString, OKtoOmitDay)
//                                     Check that field values form a valid date.
// getRadioButtonValue (radio)         Get checked value from radio button.
// checkCreditCard (radio, theField)   Validate credit card info.


// CREDIT CARD DATA VALIDATION FUNCTIONS
//
// isCreditCard (st)              True if credit card number passes the Luhn Mod-10 test.
// isVisa (cc)                    True if string cc is a valid VISA number.
// isMasterCard (cc)              True if string cc is a valid MasterCard number.
// isAmericanExpress (cc)         True if string cc is a valid American Express number.
// isDinersClub (cc)              True if string cc is a valid Diner's Club number.
// isCarteBlanche (cc)            True if string cc is a valid Carte Blanche number.
// isDiscover (cc)                True if string cc is a valid Discover card number.
// isEnRoute (cc)                 True if string cc is a valid enRoute card number.
// isJCB (cc)                     True if string cc is a valid JCB card number.
// isAnyCard (cc)                 True if string cc is a valid card number for any of the accepted types.
// isCardMatch (Type, Number)     True if Number is valid for credic card of type Type.
//
// Other stub functions are retained for backward compatibility with LivePayment code.
// See comments below for details.
//
// Performance hint: when you deploy this file on your website, strip out the
// comment lines from the source code as well as any of the functions which
// you don't need.  This will give you a smaller .js file and achieve faster
// downloads.
//
// 18 Feb 97 created Eric Krock
//
// (c) 1997 Netscape Communications Corporation



// VARIABLE DECLARATIONS

var digits = "0123456789";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


// whitespace characters
var whitespace = " \t\n\r";


// decimal point character differs by language and culture
var decimalPointDelimiter = "."


// non-digit characters which are allowed in phone numbers
var phoneNumberDelimiters = "()- ";


// characters which are allowed in US phone numbers
var validUSPhoneChars = digits + phoneNumberDelimiters;


// characters which are allowed in international phone numbers
// (a leading + is OK)
var validWorldPhoneChars = digits + phoneNumberDelimiters + "+";


// non-digit characters which are allowed in
// Social Security Numbers
var SSNDelimiters = "- ";



// characters which are allowed in Social Security Numbers
var validSSNChars = digits + SSNDelimiters;



// U.S. Social Security Numbers have 9 digits.
// They are formatted as 123-45-6789.
var digitsInSocialSecurityNumber = 9;



// U.S. phone numbers have 10 digits.
// They are formatted as 123 456 7890 or (123) 456-7890.
var digitsInUSPhoneNumber = 10;



// non-digit characters which are allowed in ZIP Codes
var ZIPCodeDelimiters = "-";



// our preferred delimiter for reformatting ZIP Codes
var ZIPCodeDelimeter = "-"


// characters which are allowed in Social Security Numbers
var validZIPCodeChars = digits + ZIPCodeDelimiters



// U.S. ZIP codes have 5 or 9 digits.
// They are formatted as 12345 or 12345-6789.
var digitsInZIPCode1 = 5
var digitsInZIPCode2 = 9


// non-digit characters which are allowed in credit card numbers
var creditCardDelimiters = " "


// CONSTANT STRING DECLARATIONS
// (grouped for ease of translation and localization)

// m is an abbreviation for "missing"
var mPrefix = "You did not enter a value into the "
var mSuffix = " field. This is a required field. Please enter it now."

// s is an abbreviation for "string"
var sUSLastName = "Last Name"
var sUSFirstName = "First Name"
var sWorldLastName = "Family Name"
var sWorldFirstName = "Given Name"
var sTitle = "Title"
var sCompanyName = "Company Name"
var sUSAddress = "Street Address"
var sWorldAddress = "Address"
var sCity = "City"
var sStateCode = "State Code"
var sWorldState = "State, Province, or Prefecture"
var sCountry = "Country"
var sZIPCode = "ZIP Code"
var sWorldPostalCode = "Postal Code"
var sPhone = "Phone Number"
var sFax = "Fax Number"
var sDateOfBirth = "Date of Birth"
var sExpirationDate = "Expiration Date"
var sEmail = "Email"
var sSSN = "Social Security Number"
var sCreditCardNumber = "Credit Card Number"
var sOtherInfo = "Other Information"

// i is an abbreviation for "invalid"
var iZIPCode = "This field must be a 5 or 9 digit U.S. ZIP Code (like 94043). Please re-enter it now.";
var iUSPhone = "This field must be a 10 digit U.S. phone number. Please use a format such as (999) 999-9999, 999-999-9999, 9999999999, or with an extension such as (999) 999-9999 x9999 or 999-999-9999x999. Please re-enter it now.";
var iEmail = "This field must be a valid email address (like joe@user.com). Please re-enter it now.";
var iStateCode = "This field must be a valid two character U.S. state abbreviation (like CA for California). Please re-enter it now."
var iWorldPhone = "This field must be a valid international phone number. Please re-enter it now."
var iSSN = "This field must be a 9 digit U.S. social security number (like 123 45 6789). Please re-enter it now."
var iCreditCardPrefix = "This is not a valid "
var iCreditCardSuffix = " credit card number. (Click the link on this form to see a list of sample numbers.) Please re-enter it now."
var iDay = "This field must be a day number between 1 and 31.  Please re-enter it now."
var iMonth = "This field must be a month number between 1 and 12.  Please re-enter it now."
var iYear = "This field must be a 2 or 4 digit year number.  Please re-enter it now."
var iDatePrefix = "The Day, Month, and Year for "
var iDateSuffix = " do not form a valid date.  Please re-enter them now."

// p is an abbreviation for "prompt"
var pEntryPrompt = "Please enter a "
var pStateCode = "2 character code (like CA)."
var pZIPCode = "5 or 9 digit U.S. ZIP Code (like 94043)."
var pUSPhone = "10 digit U.S. phone number (like 415 555 1212)."
var pWorldPhone = "international phone number."
var pSSN = "9 digit U.S. social security number (like 123 45 6789)."
var pEmail = "valid email address (like joe@user.com)."
var pCreditCard = "valid credit card number."
var pDay = "day number between 1 and 31."
var pMonth = "month number between 1 and 12."
var pYear = "2 or 4 digit year number."


// Global variable defaultEmptyOK defines default return value
// for many functions when they are passed the empty string.
// By default, they will return defaultEmptyOK.
//
// defaultEmptyOK is false, which means that by default,
// these functions will do "strict" validation.  Function
// isInteger, for example, will only return true if it is
// passed a string containing an integer; if it is passed
// the empty string, it will return false.
//
// You can change this default behavior globally (for all
// functions which use defaultEmptyOK) by changing the value
// of defaultEmptyOK.
//
// Most of these functions have an optional argument emptyOK
// which allows you to override the default behavior for
// the duration of a function call.
//
// This functionality is useful because it is possible to
// say "if the user puts anything in this field, it must
// be an integer (or a phone number, or a string, etc.),
// but it's OK to leave the field empty too."
// This is the case for fields which are optional but which
// must have a certain kind of content if filled in.

var defaultEmptyOK = false




// Attempting to make this library run on Navigator 2.0,
// so I'm supplying this array creation routine as per
// JavaScript 1.0 documentation.  If you're using
// Navigator 3.0 or later, you don't need to do this;
// you can use the Array constructor instead.

function makeArray(n) {
//*** BUG: If I put this line in, I get two error messages:
//(1) Window.length can't be set by assignment
//(2) daysInMonth has no property indexed by 4
//If I leave it out, the code works fine.
//   this.length = n;
   for (var i = 1; i <= n; i++) {
      this[i] = 0
   }
   return this
}



var daysInMonth = makeArray(12);
daysInMonth[1] = 31;
daysInMonth[2] = 29;   // must programmatically check this
daysInMonth[3] = 31;
daysInMonth[4] = 30;
daysInMonth[5] = 31;
daysInMonth[6] = 30;
daysInMonth[7] = 31;
daysInMonth[8] = 31;
daysInMonth[9] = 30;
daysInMonth[10] = 31;
daysInMonth[11] = 30;
daysInMonth[12] = 31;




// Valid U.S. Postal Codes for states, territories, armed forces, etc.
// See http://www.usps.gov/ncsc/lookups/abbr_state.txt.

var USStateCodeDelimiter = "|";
var USStateCodes = "AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|AE|AA|AE|AE|AP"




// Check whether string s is empty.

function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}



// Returns true if string s is empty or
// whitespace characters only.

function isWhitespace (s)

{   var i;

    // Is s empty?
    if (isEmpty(s)) return true;

    // Search through string's characters one by one
    // until we find a non-whitespace character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character isn't whitespace.
        var c = s.charAt(i);

        if (whitespace.indexOf(c) == -1) return false;
    }

    // All characters are whitespace.
    return true;
}



// Removes all characters which appear in string bag from string s.

function stripCharsInBag (s, bag)

{   var i;
    var returnString = "";

    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}



// Removes all characters which do NOT appear in string bag
// from string s.

function stripCharsNotInBag (s, bag)

{   var i;
    var returnString = "";

    // Search through string's characters one by one.
    // If character is in bag, append to returnString.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}



// Removes all whitespace characters from s.
// Global variable whitespace (see above)
// defines which characters are considered whitespace.

function stripWhitespace (s)

{   return stripCharsInBag (s, whitespace)
}




// WORKAROUND FUNCTION FOR NAVIGATOR 2.0.2 COMPATIBILITY.
//
// The below function *should* be unnecessary.  In general,
// avoid using it.  Use the standard method indexOf instead.
//
// However, because of an apparent bug in indexOf on
// Navigator 2.0.2, the below loop does not work as the
// body of stripInitialWhitespace:
//
// while ((i < s.length) && (whitespace.indexOf(s.charAt(i)) != -1))
//   i++;
//
// ... so we provide this workaround function charInString
// instead.
//
// charInString (CHARACTER c, STRING s)
//
// Returns true if single character c (actually a string)
// is contained within string s.

function charInString (c, s)
{   for (i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}



// Removes initial (leading) whitespace characters from s.
// Global variable whitespace (see above)
// defines which characters are considered whitespace.

function stripInitialWhitespace (s)

{   var i = 0;

    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;

    return s.substring (i, s.length);
}







// Returns true if character c is an English letter
// (A .. Z, a..z).
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

function isLetter (c)
{   return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) )
}



// Returns true if character c is a digit
// (0 .. 9).

function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}



// Returns true if character c is a letter or digit.

function isLetterOrDigit (c)
{   return (isLetter(c) || isDigit(c))
}



// isInteger (STRING s [, BOOLEAN emptyOK])
//
// Returns true if all characters in string s are numbers.
//
// Accepts non-signed integers only. Does not accept floating
// point, exponential notation, etc.
//
// We don't use parseInt because that would accept a string
// with trailing non-numeric characters.
//
// By default, returns defaultEmptyOK if s is empty.
// There is an optional second argument called emptyOK.
// emptyOK is used to override for a single function call
//      the default behavior which is specified globally by
//      defaultEmptyOK.
// If emptyOK is false (or any value other than true),
//      the function will return false if s is empty.
// If emptyOK is true, the function will return true if s is empty.
//
// EXAMPLE FUNCTION CALL:     RESULT:
// isInteger ("5")            true
// isInteger ("")             defaultEmptyOK
// isInteger ("-5")           false
// isInteger ("", true)       true
// isInteger ("", false)      false
// isInteger ("5", false)     true

function isInteger (s)

{   var i;

    if (isEmpty(s))
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character is number.
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}







// isSignedInteger (STRING s [, BOOLEAN emptyOK])
//
// Returns true if all characters are numbers;
// first character is allowed to be + or - as well.
//
// Does not accept floating point, exponential notation, etc.
//
// We don't use parseInt because that would accept a string
// with trailing non-numeric characters.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.
//
// EXAMPLE FUNCTION CALL:          RESULT:
// isSignedInteger ("5")           true
// isSignedInteger ("")            defaultEmptyOK
// isSignedInteger ("-5")          true
// isSignedInteger ("+5")          true
// isSignedInteger ("", false)     false
// isSignedInteger ("", true)      true

function isSignedInteger (s)

{   if (isEmpty(s))
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedInteger.arguments.length > 1)
            secondArg = isSignedInteger.arguments[1];

        // skip leading + or -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;
        return (isInteger(s.substring(startPos, s.length), secondArg))
    }
}




// isPositiveInteger (STRING s [, BOOLEAN emptyOK])
//
// Returns true if string s is an integer > 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isPositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a positive, not negative, number

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) > 0) ) );
}






// isNonnegativeInteger (STRING s [, BOOLEAN emptyOK])
//
// Returns true if string s is an integer >= 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isNonnegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a number >= 0

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) >= 0) ) );
}






// isNegativeInteger (STRING s [, BOOLEAN emptyOK])
//
// Returns true if string s is an integer < 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isNegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a negative, not positive, number

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) < 0) ) );
}






// isNonpositiveInteger (STRING s [, BOOLEAN emptyOK])
//
// Returns true if string s is an integer <= 0.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isNonpositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a number <= 0

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) <= 0) ) );
}





// isFloat (STRING s [, BOOLEAN emptyOK])
//
// True if string s is an unsigned floating point (real) number.
//
// Also returns true for unsigned integers. If you wish
// to distinguish between integers and floating point numbers,
// first call isInteger, then call isFloat.
//
// Does not accept exponential notation.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isFloat (s)

{   var i;
    var seenDecimalPoint = false;

    if (isEmpty(s))
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);

    if (s == decimalPointDelimiter) return false;

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character is number.
        var c = s.charAt(i);

        if ((c == decimalPointDelimiter) && !seenDecimalPoint) seenDecimalPoint = true;
        else if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}







// isSignedFloat (STRING s [, BOOLEAN emptyOK])
//
// True if string s is a signed or unsigned floating point
// (real) number. First character is allowed to be + or -.
//
// Also returns true for unsigned integers. If you wish
// to distinguish between integers and floating point numbers,
// first call isSignedInteger, then call isSignedFloat.
//
// Does not accept exponential notation.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isSignedFloat (s) {   
	if (isEmpty(s)) {
       if (isSignedFloat.arguments.length == 1) {
			return defaultEmptyOK;
		} else {
			return (isSignedFloat.arguments[1] == true);
		}
    } else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;
        if (isSignedFloat.arguments.length > 1) {
            secondArg = isSignedFloat.arguments[1];
		}
        // skip leading + or -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") ) {
			startPos = 1;
		}
        return (isFloat(s.substring(startPos, s.length), secondArg))
    }
}


// isAlphabetic (STRING s [, BOOLEAN emptyOK])
//
// Returns true if string s is English letters
// (A .. Z, a..z) only.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

function isAlphabetic (s)

{   var i;

    if (isEmpty(s))
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-alphabetic character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character is letter.
        var c = s.charAt(i);

        if (!isLetter(c))
        return false;
    }

    // All characters are letters.
    return true;
}




// isAlphanumeric (STRING s [, BOOLEAN emptyOK])
//
// Returns true if string s is English letters
// (A .. Z, a..z) and numbers only.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.
//
// NOTE: Need i18n version to support European characters.
// This could be tricky due to different character
// sets and orderings for various languages and platforms.

function isAlphanumeric (s)

{   var i;

    if (isEmpty(s))
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-alphanumeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {
        // Check that current character is number or letter.
        var c = s.charAt(i);

        if (! (isLetter(c) || isDigit(c) ) )
        return false;
    }

    // All characters are numbers or letters.
    return true;
}




// reformat (TARGETSTRING, STRING, INTEGER, STRING, INTEGER ... )
//
// Handy function for arbitrarily inserting formatting characters
// or delimiters of various kinds within TARGETSTRING.
//
// reformat takes one named argument, a string s, and any number
// of other arguments.  The other arguments must be integers or
// strings.  These other arguments specify how string s is to be
// reformatted and how and where other strings are to be inserted
// into it.
//
// reformat processes the other arguments in order one by one.
// * If the argument is an integer, reformat appends that number
//   of sequential characters from s to the resultString.
// * If the argument is a string, reformat appends the string
//   to the resultString.
//
// NOTE: The first argument after TARGETSTRING must be a string.
// (It can be empty.)  The second argument must be an integer.
// Thereafter, integers and strings must alternate.  This is to
// provide backward compatibility to Navigator 2.0.2 JavaScript
// by avoiding use of the typeof operator.
//
// It is the caller's responsibility to make sure that we do not
// try to copy more characters from s than s.length.
//
// EXAMPLES:
//
// * To reformat a 10-digit U.S. phone number from "1234567890"
//   to "(123) 456-7890" make this function call:
//   reformat("1234567890", "(", 3, ") ", 3, "-", 4)
//
// * To reformat a 9-digit U.S. Social Security number from
//   "123456789" to "123-45-6789" make this function call:
//   reformat("123456789", "", 3, "-", 2, "-", 4)
//
// HINT:
//
// If you have a string which is already delimited in one way
// (example: a phone number delimited with spaces as "123 456 7890")
// and you want to delimit it in another way using function reformat,
// call function stripCharsNotInBag to remove the unwanted
// characters, THEN call function reformat to delimit as desired.
//
// EXAMPLE:
//
// reformat (stripCharsNotInBag ("123 456 7890", digits),
//           "(", 3, ") ", 3, "-", 4)

function reformat (s)

{   var arg;
    var sPos = 0;
    var resultString = "";

    for (var i = 1; i < reformat.arguments.length; i++) {
       arg = reformat.arguments[i];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}




// isSSN (STRING s [, BOOLEAN emptyOK])
//
// isSSN returns true if string s is a valid U.S. Social
// Security Number.  Must be 9 digits.
//
// NOTE: Strip out any delimiters (spaces, hyphens, etc.)
// from string s before calling this function.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isSSN (s)
{   if (isEmpty(s))
       if (isSSN.arguments.length == 1) return defaultEmptyOK;
       else return (isSSN.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInSocialSecurityNumber)
}




// isUSPhoneNumber (STRING s [, BOOLEAN emptyOK])
//
// isUSPhoneNumber returns true if string s is a valid U.S. Phone
// Number.  Must be 10 digits.
//
// NOTE: Strip out any delimiters (spaces, hyphens, parentheses, etc.)
// from string s before calling this function.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isUSPhoneNumber (s)
{   if (isEmpty(s))
       if (isUSPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isUSPhoneNumber.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInUSPhoneNumber)
}




// isInternationalPhoneNumber (STRING s [, BOOLEAN emptyOK])
//
// isInternationalPhoneNumber returns true if string s is a valid
// international phone number.  Must be digits only; any length OK.
// May be prefixed by + character.
//
// NOTE: A phone number of all zeros would not be accepted.
// I don't think that is a valid phone number anyway.
//
// NOTE: Strip out any delimiters (spaces, hyphens, parentheses, etc.)
// from string s before calling this function.  You may leave in
// leading + character if you wish.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isInternationalPhoneNumber (s)
{   if (isEmpty(s))
       if (isInternationalPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isInternationalPhoneNumber.arguments[1] == true);
    return (isPositiveInteger(s))
}




// isZIPCode (STRING s [, BOOLEAN emptyOK])
//
// isZIPCode returns true if string s is a valid
// U.S. ZIP code.  Must be 5 or 9 digits only.
//
// NOTE: Strip out any delimiters (spaces, hyphens, etc.)
// from string s before calling this function.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isZIPCode (s)
{  if (isEmpty(s))
       if (isZIPCode.arguments.length == 1) return defaultEmptyOK;
       else return (isZIPCode.arguments[1] == true);
   return (isInteger(s) &&
            ((s.length == digitsInZIPCode1) ||
             (s.length == digitsInZIPCode2)))
}





// isStateCode (STRING s [, BOOLEAN emptyOK])
//
// Return true if s is a valid U.S. Postal Code
// (abbreviation for state).
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isStateCode(s)
{   if (isEmpty(s))
       if (isStateCode.arguments.length == 1) return defaultEmptyOK;
       else return (isStateCode.arguments[1] == true);
    return ( (USStateCodes.indexOf(s) != -1) &&
             (s.indexOf(USStateCodeDelimiter) == -1) )
}




// isEmail (STRING s [, BOOLEAN emptyOK])
//
// Email address must be of form a@b.c -- in other words:
// * there must be at least one character before the @
// * there must be at least one character before and after the .
// * the characters @ and . are both required
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isEmail (s)
{   
	re5 = /^([_a-z0-9-']+)(\.[_a-z0-9-']+)*@([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
	return re5.test(s);
}





// isYear (STRING s [, BOOLEAN emptyOK])
//
// isYear returns true if string s is a valid
// Year number.  Must be 2 or 4 digits only.
//
// For Year 2000 compliance, you are advised
// to use 4-digit year numbers everywhere.
//
// And yes, this function is not Year 10000 compliant, but
// because I am giving you 8003 years of advance notice,
// I don't feel very guilty about this ...
//
// For B.C. compliance, write your own function. ;->
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isYear (s)
{   if (isEmpty(s))
       if (isYear.arguments.length == 1) return defaultEmptyOK;
       else return (isYear.arguments[1] == true);
    if (!isNonnegativeInteger(s)) return false;
    return ((s.length == 2) || (s.length == 4));
}



// isIntegerInRange (STRING s, INTEGER a, INTEGER b [, BOOLEAN emptyOK])
//
// isIntegerInRange returns true if string s is an integer
// within the range of integer arguments a and b, inclusive.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.


function isIntegerInRange (s, a, b)
{   if (isEmpty(s))
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);

    // Catch non-integer strings to avoid creating a NaN below,
    // which isn't available on JavaScript 1.0 for Windows.
    
    //MODIFIED BY PAUL HARRIS - 051204 WAS isInteger(...)
    if (!isSignedInteger(s, false)) return false;

    // Now, explicitly change the type to integer via parseInt
    // so that the comparison code below will work both on
    // JavaScript 1.2 (which typechecks in equality comparisons)
    // and JavaScript 1.1 and before (which doesn't).
    var num = parseInt (s);
    return ((num >= a) && (num <= b));
}



// isMonth (STRING s [, BOOLEAN emptyOK])
//
// isMonth returns true if string s is a valid
// month number between 1 and 12.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isMonth (s)
{   if (isEmpty(s))
       if (isMonth.arguments.length == 1) return defaultEmptyOK;
       else return (isMonth.arguments[1] == true);
    return isIntegerInRange (s, 1, 12);
}



// isDay (STRING s [, BOOLEAN emptyOK])
//
// isDay returns true if string s is a valid
// day number between 1 and 31.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function isDay (s)
{   if (isEmpty(s))
       if (isDay.arguments.length == 1) return defaultEmptyOK;
       else return (isDay.arguments[1] == true);
    return isIntegerInRange (s, 1, 31);
}



// daysInFebruary (INTEGER year)
//
// Given integer argument year,
// returns number of days in February of that year.

function daysInFebruary (year)
{   // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (  ((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 );
}



// isDate (STRING year, STRING month, STRING day)
//
// isDate returns true if string arguments year, month, and day
// form a valid date.
//

function isDate (year, month, day)
{   // catch invalid years (not 2- or 4-digit) and invalid months and days.
    if (! (isYear(year, false) && isMonth(month, false) && isDay(day, false))) return false;

    // Explicitly change type to integer to make code work in both
    // JavaScript 1.1 and JavaScript 1.2.
    var intYear = parseInt(year);
    var intMonth = parseInt(month);
    var intDay = parseInt(day);

    // catch invalid days, except for February
    if (intDay > daysInMonth[intMonth]) return false;

    if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;

    return true;
}




/* FUNCTIONS TO NOTIFY USER OF INPUT REQUIREMENTS OR MISTAKES. */


// Display prompt string s in status bar.

function prompt (s)
{   window.status = s
}



// Display data entry prompt string s in status bar.

function promptEntry (s)
{   window.status = pEntryPrompt + s
}




// Notify user that required field theField is empty.
// String s describes expected contents of theField.value.
// Put focus in theField and return false.

function warnEmpty (theField, s)
{   theField.focus()
    alert(mPrefix + s + mSuffix)
    return false
}



// Notify user that contents of field theField are invalid.
// String s describes expected contents of theField.value.
// Put select theField, pu focus in it, and return false.

function warnInvalid (theField, s)
{
	theField.style.fontWeight = 'bold';
	theField.style.backgroundColor='#FFB7BE';
	// Set id for regex validation dialog div
	var valPopupId = 'redcapValidationErrorPopup';
	// Get ID of field: If field does not have an id, then given it a random one so later we can reference it directly.
	var obId = $(theField).attr('id');
	if (obId == null) {
		obId = "val-"+Math.floor(Math.random()*10000000000000000);
		$(theField).attr('id', obId);
	}
	// Set the Javascript for returning focus back on element (if specified)
	setTimeout(function(){
		simpleDialog(s, null,valPopupId, null, "$('#"+obId+"').focus();");
		$('#'+valPopupId).parent().find('button:first').focus();
	},10);
    return false;
}




/* FUNCTIONS TO INTERACTIVELY CHECK VARIOUS FIELDS. */

// checkString (TEXTFIELD theField, STRING s, [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is not all whitespace.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkString (theField, s, emptyOK)
{   // Next line is needed on NN3 to avoid "undefined is not a number" error
    // in equality comparison below.
    if (checkString.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (isWhitespace(theField.value))
       return warnEmpty (theField, s);
    else return true;
}



// checkStateCode (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid U.S. state code.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkStateCode (theField, emptyOK)
{   if (checkStateCode.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  theField.value = theField.value.toUpperCase();
       if (!isStateCode(theField.value, false))
          return warnInvalid (theField, iStateCode);
       else return true;
    }
}



// takes ZIPString, a string of 5 or 9 digits;
// if 9 digits, inserts separator hyphen

function reformatZIPCode (ZIPString)
{   if (ZIPString.length == 5) return ZIPString;
    else return (reformat (ZIPString, "", 5, "-", 4));
}




// checkZIPCode (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid ZIP code.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkZIPCode (theField, emptyOK)
{   if (checkZIPCode.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    { var normalizedZIP = stripCharsInBag(theField.value, ZIPCodeDelimiters)
      if (!isZIPCode(normalizedZIP, false))
         return warnInvalid (theField, iZIPCode);
      else
      {  // if you don't want to insert a hyphen, comment next line out
         theField.value = reformatZIPCode(normalizedZIP)
         return true;
      }
    }
}



// takes USPhone, a string of 10 digits
// and reformats as (123) 456-789

function reformatUSPhone (USPhone)
{   return (reformat (USPhone, "(", 3, ") ", 3, "-", 4))
}



// checkUSPhone (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid US Phone.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

/* 
function checkUSPhone (theField, emptyOK)
{   if (checkUSPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  var normalizedPhone = stripCharsInBag(theField.value, phoneNumberDelimiters)
       if (!isUSPhoneNumber(normalizedPhone, false))
          return warnInvalid (theField, iUSPhone);
       else
       {  // if you don't want to reformat as (123) 456-789, comment next line out
          theField.value = reformatUSPhone(normalizedPhone)
          return true;
       }
    }
}
 */
function checkUSPhone (theField, emptyOK)
{ if (checkUSPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
   if ((emptyOK == true) && (isEmpty(theField.value))) return true;
   else
   { var ext = ""; // A.P. start
     var fv = new String(theField.value);
     if (fv.indexOf("x") > -1) // Extension; check it and remove
     { ext = fv.slice(fv.indexOf("x")+1);
       ext = ext.replace(/[\s-\.]/g,"");
       fv = fv.slice(0,fv.indexOf("x"));
       if (/[^\d]/.test(ext)) return warnInvalid (theField, iUSPhone);
       ext = " x"+ext;
     }
     var normalizedPhone = stripCharsInBag(fv, phoneNumberDelimiters);
     fv = fv.replace(/[\s]/g,"");
     fv = fv.replace(/[-]/g,"");
	 if (!/^\(?\d{3}\)?\d{3}-?\d{4}$/.test(fv)) // A.P. end
		// if (!isUSPhoneNumber(normalizedPhone, false))
        return warnInvalid (theField, iUSPhone);
     else
     {  // if you don't want to reformat as (123) 456-7890 x12345, comment next line out
       theField.value = reformatUSPhone(normalizedPhone)+ext; // OK, one more change - "+ext" added
       return true;
     }
   }
}



// checkInternationalPhone (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid International Phone.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkInternationalPhone (theField, emptyOK)
{   if (checkInternationalPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  if (!isInternationalPhoneNumber(theField.value, false))
          return warnInvalid (theField, iWorldPhone);
       else return true;
    }
}



// checkEmail (TEXTFIELD theField [, BOOLEAN emptyOK==false])
//
// Check that string theField.value is a valid Email.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkEmail (theField, emptyOK)
{   if (checkEmail.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isEmail(theField.value, false)) {
		return warnInvalid (theField, iEmail);
	}
    else return true;
}



// takes SSN, a string of 9 digits
// and reformats as 123-45-6789

function reformatSSN (SSN)
{   return (reformat (SSN, "", 3, "-", 2, "-", 4))
}


// Check that string theField.value is a valid SSN.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkSSN (theField, emptyOK)
{   if (checkSSN.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  var normalizedSSN = stripCharsInBag(theField.value, SSNDelimiters)
       if (!isSSN(normalizedSSN, false))
          return warnInvalid (theField, iSSN);
       else
       {  // if you don't want to reformats as 123-456-7890, comment next line out
          theField.value = reformatSSN(normalizedSSN)
          return true;
       }
    }
}




// Check that string theField.value is a valid Year.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkYear (theField, emptyOK)
{   if (checkYear.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isYear(theField.value, false))
       return warnInvalid (theField, iYear);
    else return true;
}


// Check that string theField.value is a valid Month.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkMonth (theField, emptyOK)
{   if (checkMonth.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isMonth(theField.value, false))
       return warnInvalid (theField, iMonth);
    else return true;
}


// Check that string theField.value is a valid Day.
//
// For explanation of optional argument emptyOK,
// see comments of function isInteger.

function checkDay (theField, emptyOK)
{   if (checkDay.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isDay(theField.value, false))
       return warnInvalid (theField, iDay);
    else return true;
}



// checkDate (yearField, monthField, dayField, STRING labelString [, OKtoOmitDay==false])
//
// Check that yearField.value, monthField.value, and dayField.value
// form a valid date.
//
// If they don't, labelString (the name of the date, like "Birth Date")
// is displayed to tell the user which date field is invalid.
//
// If it is OK for the day field to be empty, set optional argument
// OKtoOmitDay to true.  It defaults to false.

function checkDate (yearField, monthField, dayField, labelString, OKtoOmitDay)
{   // Next line is needed on NN3 to avoid "undefined is not a number" error
    // in equality comparison below.
    if (checkDate.arguments.length == 4) OKtoOmitDay = false;
    if (!isYear(yearField.value)) return warnInvalid (yearField, iYear);
    if (!isMonth(monthField.value)) return warnInvalid (monthField, iMonth);
    if ( (OKtoOmitDay == true) && isEmpty(dayField.value) ) return true;
    else if (!isDay(dayField.value))
       return warnInvalid (dayField, iDay);
    if (isDate (yearField.value, monthField.value, dayField.value))
       return true;
    alert (iDatePrefix + labelString + iDateSuffix)
    return false
}



// Get checked value from radio button.

function getRadioButtonValue (radio)
{   for (var i = 0; i < radio.length; i++)
    {   if (radio[i].checked) { break }
    }
    return radio[i].value
}
//Credit Card code omitted.


//Begin Add - script from Vanderbilt
//2004-05-12 by Paul Harris

// ===================================================================
// Author: Matt Kruse <matt@mattkruse.com>
// WWW: http://www.mattkruse.com/
//
// NOTICE: You may use this code for any purpose, commercial or
// private, without any further permission from the author. You may
// remove this notice from your final code if you wish, however it is
// appreciated by the author if at least my web site address is kept.
//
// You may *NOT* re-distribute this code in any way except through its
// use. That means, you can include it in your product, or your web
// site, or any other form where the code is actually being used. You
// may not put the plain javascript up on your site for download or
// include it in your javascript libraries for download.
// If you wish to share this code with others, please just point them
// to the URL instead.
// Please DO NOT link directly to my .js files from your site. Copy
// the files to your server and use them there. Thank you.
// ===================================================================

// HISTORY
// ------------------------------------------------------------------
// May 17, 2003: Fixed bug in parseDate() for dates <1970
// March 11, 2003: Added parseDate() function
// March 11, 2003: Added "NNN" formatting option. Doesn't match up
//                 perfectly with SimpleDateFormat formats, but
//                 backwards-compatability was required.

// ------------------------------------------------------------------
// These functions use the same 'format' strings as the
// java.text.SimpleDateFormat class, with minor exceptions.
// The format string consists of the following abbreviations:
//
// Field        | Full Form          | Short Form
// -------------+--------------------+-----------------------
// Year         | yyyy (4 digits)    | yy (2 digits), y (2 or 4 digits)
// Month        | MMM (name or abbr.)| MM (2 digits), M (1 or 2 digits)
//              | NNN (abbr.)        |
// Day of Month | dd (2 digits)      | d (1 or 2 digits)
// Day of Week  | EE (name)          | E (abbr)
// Hour (1-12)  | hh (2 digits)      | h (1 or 2 digits)
// Hour (0-23)  | HH (2 digits)      | H (1 or 2 digits)
// Hour (0-11)  | KK (2 digits)      | K (1 or 2 digits)
// Hour (1-24)  | kk (2 digits)      | k (1 or 2 digits)
// Minute       | mm (2 digits)      | m (1 or 2 digits)
// Second       | ss (2 digits)      | s (1 or 2 digits)
// AM/PM        | a                  |
//
// NOTE THE DIFFERENCE BETWEEN MM and mm! Month=MM, not mm!
// Examples:
//  "MMM d, y" matches: January 01, 2000
//                      Dec 1, 1900
//                      Nov 20, 00
//  "M/d/yy"   matches: 01/20/00
//                      9/2/00
//  "MMM dd, yyyy hh:mm:ssa" matches: "January 01, 2000 12:30:45AM"
// ------------------------------------------------------------------

var MONTH_NAMES=new Array('January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
var DAY_NAMES=new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat');
function LZ(x) {return(x<0||x>9?"":"0")+x}

// ------------------------------------------------------------------
// isDate ( date_string, format_string )
// Returns true if date string matches format of format string and
// is a valid date. Else returns false.
// It is recommended that you trim whitespace around the value before
// passing it to this function, as whitespace is NOT ignored!
// ------------------------------------------------------------------
function isDate(val,format) {
	var date=getDateFromFormat(val,format);
	if (date==0) { return false; }
	return true;
	}

// -------------------------------------------------------------------
// compareDates(date1,date1format,date2,date2format)
//   Compare two date strings to see which is greater.
//   Returns:
//   1 if date1 is greater than date2
//   0 if date2 is greater than date1 or if they are the same
//  -1 if either of the dates is in an invalid format
// -------------------------------------------------------------------
function compareDates(date1,dateformat1,date2,dateformat2) {
	var d1=getDateFromFormat(date1,dateformat1);
	var d2=getDateFromFormat(date2,dateformat2);
	if (d1==0 || d2==0) {
		return -1;
		}
	else if (d1 > d2) {
		return 1;
		}
	return 0;
	}

// ------------------------------------------------------------------
// formatDate (date_object, format)
// Returns a date in the output format specified.
// The format string uses the same abbreviations as in getDateFromFormat()
// ------------------------------------------------------------------
function formatDate(date,format) {
	format=format+"";
	var result="";
	var i_format=0;
	var c="";
	var token="";
	var y=date.getYear()+"";
	var M=date.getMonth()+1;
	var d=date.getDate();
	var E=date.getDay();
	var H=date.getHours();
	var m=date.getMinutes();
	var s=date.getSeconds();
	var yyyy,yy,MMM,MM,dd,hh,h,mm,ss,ampm,HH,H,KK,K,kk,k;
	// Convert real date parts into formatted versions
	var value=new Array();
	if (y.length < 4) {	
		y=""+(y-0+1900);
	}
	value["y"]=""+y;
	value["yyyy"]=y;
	value["yy"]=y.substring(2,4);
	value["M"]=M;
	value["MM"]=LZ(M);
	value["MMM"]=MONTH_NAMES[M-1];
	value["NNN"]=MONTH_NAMES[M+11];
	value["d"]=d;
	value["dd"]=LZ(d);
	value["E"]=DAY_NAMES[E+7];
	value["EE"]=DAY_NAMES[E];
	value["H"]=H;
	value["HH"]=LZ(H);
	if (H==0){value["h"]=12;}
	else if (H>12){value["h"]=H-12;}
	else {value["h"]=H;}
	value["hh"]=LZ(value["h"]);
	if (H>11){value["K"]=H-12;} else {value["K"]=H;}
	value["k"]=H+1;
	value["KK"]=LZ(value["K"]);
	value["kk"]=LZ(value["k"]);
	if (H > 11) { value["a"]="PM"; }
	else { value["a"]="AM"; }
	value["m"]=m;
	value["mm"]=LZ(m);
	value["s"]=s;
	value["ss"]=LZ(s);
	while (i_format < format.length) {
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		if (value[token] != null) { result=result + value[token]; }
		else { result=result + token; }
		}
	return result;
	}

// ------------------------------------------------------------------
// Utility functions for parsing in getDateFromFormat()
// ------------------------------------------------------------------
function _isInteger(val) {
	var digits="1234567890";
	for (var i=0; i < val.length; i++) {
		if (digits.indexOf(val.charAt(i))==-1) { return false; }
		}
	return true;
	}
function _getInt(str,i,minlength,maxlength) {
	for (var x=maxlength; x>=minlength; x--) {
		var token=str.substring(i,i+x);
		if (token.length < minlength) { return null; }
		if (_isInteger(token)) { return token; }
		}
	return null;
	}

// ------------------------------------------------------------------
// getDateFromFormat( date_string , format_string )
//
// This function takes a date string and a format string. It matches
// If the date string matches the format string, it returns the
// getTime() of the date. If it does not match, it returns 0.
// ------------------------------------------------------------------
function getDateFromFormat(val,format) {
	val=val+"";
	format=format+"";
	var i_val=0;
	var i_format=0;
	var c="";
	var token="";
	var token2="";
	var x,y;
	var now=new Date();
	var year=now.getYear();
	var month=now.getMonth()+1;
	var date=1;
	var hh=now.getHours();
	var mm=now.getMinutes();
	var ss=now.getSeconds();
	var ampm="";

	while (i_format < format.length) {
		// Get next token from format string
		c=format.charAt(i_format);
		token="";
		while ((format.charAt(i_format)==c) && (i_format < format.length)) {
			token += format.charAt(i_format++);
			}
		// Extract contents of value based on format token
		if (token=="yyyy" || token=="yy" || token=="y") {
			if (token=="yyyy") { x=4;y=4; }
			if (token=="yy")   { x=2;y=2; }
			if (token=="y")    { x=2;y=4; }
			year=_getInt(val,i_val,x,y);
			if (year==null) { return 0; }
			i_val += year.length;
			if (year.length==2) {
				//START RT Changed this Code
				var this_year_2d = ""+now.getFullYear();
				this_year_2d = this_year_2d.substring(2)*1;
				year = (year <= (this_year_2d+10)) ? (year-0+2000) : (year-0+1900);
				//END RT Changed this Code				
				//START PH Changed this Code
				//The code now assumes any 2 digit year is in the future if 
				//within 5 years of this year or in the past if otherwise.
				// var thisyear=now.getYear();
				// year=2000+(year-0);
				// if (year>thisyear+5){
					// year=year-100;
				// }
				//WAS
				//if (year > 70) { year=1900+(year-0); }
				//else { year=2000+(year-0); }
				//END PH Changed this Code
				}
			}
		else if (token=="MMM"||token=="NNN"){
			month=0;
			for (var i=0; i<MONTH_NAMES.length; i++) {
				var month_name=MONTH_NAMES[i];
				if (val.substring(i_val,i_val+month_name.length).toLowerCase()==month_name.toLowerCase()) {
					if (token=="MMM"||(token=="NNN"&&i>11)) {
						month=i+1;
						if (month>12) { month -= 12; }
						i_val += month_name.length;
						break;
						}
					}
				}
			if ((month < 1)||(month>12)){return 0;}
			}
		else if (token=="EE"||token=="E"){
			for (var i=0; i<DAY_NAMES.length; i++) {
				var day_name=DAY_NAMES[i];
				if (val.substring(i_val,i_val+day_name.length).toLowerCase()==day_name.toLowerCase()) {
					i_val += day_name.length;
					break;
					}
				}
			}
		else if (token=="MM"||token=="M") {
			month=_getInt(val,i_val,token.length,2);
			if(month==null||(month<1)||(month>12)){return 0;}
			i_val+=month.length;}
		else if (token=="dd"||token=="d") {
			date=_getInt(val,i_val,token.length,2);
			if(date==null||(date<1)||(date>31)){return 0;}
			i_val+=date.length;}
		else if (token=="hh"||token=="h") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>12)){return 0;}
			i_val+=hh.length;}
		else if (token=="HH"||token=="H") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>23)){return 0;}
			i_val+=hh.length;}
		else if (token=="KK"||token=="K") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<0)||(hh>11)){return 0;}
			i_val+=hh.length;}
		else if (token=="kk"||token=="k") {
			hh=_getInt(val,i_val,token.length,2);
			if(hh==null||(hh<1)||(hh>24)){return 0;}
			i_val+=hh.length;hh--;}
		else if (token=="mm"||token=="m") {
			mm=_getInt(val,i_val,token.length,2);
			if(mm==null||(mm<0)||(mm>59)){return 0;}
			i_val+=mm.length;}
		else if (token=="ss"||token=="s") {
			ss=_getInt(val,i_val,token.length,2);
			if(ss==null||(ss<0)||(ss>59)){return 0;}
			i_val+=ss.length;}
		else if (token=="a") {
			if (val.substring(i_val,i_val+2).toLowerCase()=="am") {ampm="AM";}
			else if (val.substring(i_val,i_val+2).toLowerCase()=="pm") {ampm="PM";}
			else {return 0;}
			i_val+=2;}
		else {
			if (val.substring(i_val,i_val+token.length)!=token) {return 0;}
			else {i_val+=token.length;}
			}
		}
	// If there are any trailing characters left in the value, it doesn't match
	if (i_val != val.length) { return 0; }
	// Is date valid for month?
	if (month==2) {
		// Check for leap year
		if ( ( (year%4==0)&&(year%100 != 0) ) || (year%400==0) ) { // leap year
			if (date > 29){ return 0; }
			}
		else { if (date > 28) { return 0; } }
		}
	if ((month==4)||(month==6)||(month==9)||(month==11)) {
		if (date > 30) { return 0; }
		}
	// Correct hours value
	if (hh<12 && ampm=="PM") { hh=hh-0+12; }
	else if (hh>11 && ampm=="AM") { hh-=12; }
	var newdate=new Date(year,month-1,date,hh,mm,ss);
	return newdate.getTime();
	}

// ------------------------------------------------------------------
// parseDate( date_string [, prefer_euro_format] )
//
// This function takes a date string and tries to match it to a
// number of possible date formats to get the value. It will try to
// match against the following international formats, in this order:
// y-M-d   MMM d, y   MMM d,y   y-MMM-d   d-MMM-y  MMM d
// M/d/y   M-d-y      M.d.y     MMM-d     M/d      M-d
// d/M/y   d-M-y      d.M.y     d-MMM     d/M      d-M
// A second argument may be passed to instruct the method to search
// for formats like d/M/y (european format) before M/d/y (American).
// Returns a Date object or null if no patterns match.
// ------------------------------------------------------------------
function parseDate(val) {
	var preferEuro=(arguments.length==2)?arguments[1]:false;
	generalFormats=new Array('y-M-d','MMM d, y','MMM d,y','y-MMM-d','d-MMM-y','MMM d');
	monthFirst=new Array('M/d/y','M-d-y','M.d.y','MMM-d','M/d','M-d');
	dateFirst =new Array('d/M/y','d-M-y','d.M.y','d-MMM','d/M','d-M');
	var checkList=new Array('generalFormats',preferEuro?'dateFirst':'monthFirst',preferEuro?'monthFirst':'dateFirst');
	var d=null;
	for (var i=0; i<checkList.length; i++) {
		var l=window[checkList[i]];
		for (var j=0; j<l.length; j++) {
			d=getDateFromFormat(val,l[j]);
			if (d!=0) { return new Date(d); }
			}
		}
	return null;
	}

// Check if in HH:MM military format
function isTime(val,hasSeconds) {
	if (hasSeconds) {
		var regex=/^(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)[:](0|1|2|3|4|5)\d{1}[:](0|1|2|3|4|5)\d{1}$/;
	} else {
		var regex=/^(00|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23)[:](0|1|2|3|4|5)\d{1}$/;
	}
	return regex.test(val);
}


// Convert date format from DD-MM-YYYY to YYYY-MM-DD
function date_dmy2ymd(val)
{
	val = trim(val);
	if (val == '') return val;
	var date_arr = val.split('-');
	if (date_arr.length != 3) return '';
	if (date_arr[0].length < 2) date_arr[0] = "0" + date_arr[0];
	if (date_arr[1].length < 2) date_arr[1] = "0" + date_arr[1];
	return date_arr[2]+"-"+date_arr[1]+"-"+date_arr[0];
}
// Convert date format from MM-DD-YYYY to YYYY-MM-DD
function date_mdy2ymd(val)
{
	val = trim(val);
	if (val == '') return '';
	var date_arr = val.split('-');
	if (date_arr.length != 3) return '';
	if (date_arr[0].length < 2) date_arr[0] = "0" + date_arr[0];
	if (date_arr[1].length < 2) date_arr[1] = "0" + date_arr[1];
	return date_arr[2]+"-"+date_arr[0]+"-"+date_arr[1];
}
// Convert date format from YYYY-MM-DD to DD-MM-YYYY
function date_ymd2dmy(val)
{
	val = trim(val);
	if (val == '') return val;
	var date_arr = val.split('-');
	if (date_arr.length != 3) return '';
	if (date_arr[1].length < 2) date_arr[1] = "0" + date_arr[1];
	if (date_arr[2].length < 2) date_arr[2] = "0" + date_arr[2];
	return date_arr[2]+"-"+date_arr[1]+"-"+date_arr[0];
}
// Convert date format from YYYY-MM-DD to MM-DD-YYYY
function date_ymd2mdy(val)
{
	val = trim(val);
	if (val == '') return '';
	var date_arr = val.split('-');
	if (date_arr.length != 3) return '';
	if (date_arr[1].length < 2) date_arr[1] = "0" + date_arr[1];
	if (date_arr[2].length < 2) date_arr[2] = "0" + date_arr[2];
	return date_arr[1]+"-"+date_arr[2]+"-"+date_arr[0];
}
// For date fields (any format type), replace any periods or slashes in the date with a dash and add any leading zeros.
function redcap_clean_date(this_date,texttype)
{
	if (this_date == '') return '';
	// For legacy "date" format (YYYY-MM-DD) entered by user as MM/DD/YYYY, reformat to YYYY-MM-DD
	if (/_ymd/.test(texttype) && this_date.split('/').length == 3) { // if correctly has 2 slashes AND is in MM/DD/YYYY format
		if (/^(\d{1,2})([\/])(\d{1,2})([\/])(\d{4})$/.test(this_date)) {
			var this_date_parsed = parseDate(this_date);
			if (this_date_parsed == null) return this_date;
			return formatDate(this_date_parsed,'y-MM-dd');
		}
	}	
	// Replace periods and slashes with dashes
	var this_date = this_date.replace(/[.\/]/g,'-');
	// Check to make sure 2 dashes exist. If not, return current value, unless an eight digit number, in which case add dashes.
	if (this_date.split('-').length == 1) {
		if (this_date.length == 8) { // Assuming have all 8 digits
			if (/_ymd/.test(texttype)) {
				this_date = this_date.substr(0,4)+"-"+this_date.substr(4,2)+"-"+this_date.substr(6,2);
			} else {
				this_date = this_date.substr(0,2)+"-"+this_date.substr(2,2)+"-"+this_date.substr(4,4);
			}
		} else if (this_date.length == 6) { // Assuming have all 4 digits of year but 1 for month and day
			if (/_ymd/.test(texttype)) {
				this_date = this_date.substr(0,4)+"-0"+this_date.substr(4,1)+"-0"+this_date.substr(5,1);
			} else {
				this_date = "0"+this_date.substr(0,1)+"-0"+this_date.substr(1,1)+"-"+this_date.substr(2,4);
			}
		} else {
			// Can't figure out the format
			return this_date;
		}
	} else if (this_date.split('-').length != 3) {
		// Can't figure out the format
		return this_date;
	}
	// Make sure has leading zeros
	var date_arr = this_date.split('-');
	if (date_arr[1].length < 2) date_arr[1] = "0" + date_arr[1];
	if (/_mdy/.test(texttype) || /_dmy/.test(texttype)) {
		if (date_arr[0].length < 2) date_arr[0] = "0" + date_arr[0];
		var year = date_arr[2];
	} else {
		if (date_arr[2].length < 2) date_arr[2] = "0" + date_arr[2];
		var year = date_arr[0];		
	}
	// Make sure year has 4 digits
	if (year.length == 2) {
		var this_year_2d = "" + new Date().getFullYear();
		this_year_2d = this_year_2d.substring(2)*1;
		year = (year <= (this_year_2d+10)) ? (year-0+2000) : (year-0+1900);
		if (/_mdy/.test(texttype) || /_dmy/.test(texttype)) {
			date_arr[2] = year;
		} else {
			date_arr[0] = year;
		}
	}
	// Return formatted date
	return date_arr[0]+"-"+date_arr[1]+"-"+date_arr[2];
}

// REDCap form validation function
function redcap_validate(ob, min, max, returntype, texttype, regexVal, returnFocus, dateDelimiterReturned)
{
	var return_value;
	var kickout_message;
	var holder1;
	var holder2;
	var holder3;
	
	// Reset flag on page
	$('#field_validation_error_state').val('0');
	
	// If blank, do nothing
	if (ob.value == '') {	
		ob.style.fontWeight = 'normal';
		ob.style.backgroundColor='#FFFFFF';
		return true;
	}
		
	// Get ID of field: If field does not have an id, then given it a random one so later we can reference it directly.
	var obId = $(ob).attr('id');
	if (obId == null) {
		obId = "val-"+Math.floor(Math.random()*10000000000000000);
		$(ob).attr('id', obId);
	}
	
	// Set the Javascript for returning focus back on element (if specified)
	if (returnFocus == null) returnFocus = 1;
	var returnFocusJS = (returnFocus == 1) ? "$('#"+obId+"').focus();" : "";
		
	//REGULAR EXPRESSION
	if (regexVal != null)
	{
		// Before evaluating with regex, first do some cleaning
		ob.value = trim(ob.value);
	
		// Set id for regex validation dialog div
		var regexValPopupId = 'redcapValidationErrorPopup';
		
		// For date[time][_seconds] fields, replace any periods or slashes with a dash. Add any leading zeros.
		if (texttype=="date_ymd" || texttype=="date_mdy" || texttype=="date_dmy") {
			ob.value = redcap_clean_date(ob.value,texttype);
			if (ob.value.split('-').length == 2) {
				// If somehow contains just one dash, then remove the dash and re-validate it to force reformatting
				return $(ob).val(ob.value.replace(/-/g,'')).trigger('blur');
			}
			var thisdate = ob.value;
			var thistime = '';
		} else if (texttype=="datetime_ymd" || texttype=="datetime_mdy" || texttype=="datetime_dmy"
				|| texttype=="datetime_seconds_ymd" || texttype=="datetime_seconds_mdy" || texttype=="datetime_seconds_dmy") {
			var dt_array = ob.value.split(' ');
			if (dt_array[1] == null) dt_array[1] = '';			
			var thisdate = redcap_clean_date(dt_array[0],texttype);
			var thistime = dt_array[1];
			ob.value = trim(thisdate+' '+thistime);
			if (ob.value.split('-').length == 2) {
				// If somehow contains just one dash, then remove the dash and re-validate it to force reformatting
				return $(ob).val(ob.value.replace(/-/g,'')).trigger('blur');
			}
		}			
		
		// Obtain regex from hidden divs on page (where they are stored)
		var regexDataType = '';
		if (regexVal === 1) {
			regexVal = $('#valregex_divs #valregex-'+texttype).html();
			regexDataType = $('#valregex_divs #valregex-'+texttype).attr('datatype');
		}
		
		// Evaluate value with regex
		eval('var regexVal2 = '+regexVal+';');
		if (regexVal2.test(ob.value)) 
		{
			// Passed the regex test!
			
			// Reformat phone format, if needed
			if (texttype=="phone") {
				ob.value = ob.value.replace(/-/g,"").replace(/ /g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/\./g,"");
				if (ob.value.length > 10) {
					ob.value = trim(reformatUSPhone(ob.value.substr(0,10))+" "+trim(ob.value.substr(10)));
				} else {
					ob.value = reformatUSPhone(ob.value);
				}
			}
			// Make sure time has a leading zero if hour is single digit
			else if (texttype=="time" && ob.value.length == 4) {
				ob.value = "0"+ob.value;
			}
			// If a date[time] field and the returnDelimiter is specified, then do a delimiter replace
			else if (dateDelimiterReturned != null && dateDelimiterReturned != '-' && (texttype.substring(0,5) == 'date_' || texttype.substring(0,9) == 'datetime_')) {
				ob.value = ob.value.replace(/-/g, dateDelimiterReturned);
			}
			
			// Now do range check (if needed) for various validation types
			if (min != '' || max != '')
			{
				holder1 = ob.value;
				holder2 = min;
				holder3 = max;
				// Range check - integer/number
				if (texttype=="integer" || texttype=="number" || regexDataType=="integer" || regexDataType=="number") 
				{
					holder1 = holder1*1;
					holder2 = (holder2==='') ? '' : holder2*1;
					holder3 = (holder3==='') ? '' : holder3*1;
				}
				// Range check - time
				else if (texttype=="time") 
				{
					// Remove all non-numerals so we can compare them numerically
					holder1 = (holder1.replace(/:/g,""))*1;
					holder2 = (holder2==='') ? '' : (holder2.replace(/:/g,""))*1;
					holder3 = (holder3==='') ? '' : (holder3.replace(/:/g,""))*1;
				}
				// Range check - date[time][_seconds]
				else if (texttype=="date_ymd" || texttype=="date_mdy" || texttype=="date_dmy" 
					|| texttype=="datetime_ymd" || texttype=="datetime_mdy" || texttype=="datetime_dmy"
					|| texttype=="datetime_seconds_ymd" || texttype=="datetime_seconds_mdy" || texttype=="datetime_seconds_dmy") 
				{
					// Convert date format of value to YMD to compare with min/max, which are already in YMD format
					if (/_mdy/.test(texttype)) {
						holder1 = trim(date_mdy2ymd(thisdate)+' '+thistime);
					} else if (/_dmy/.test(texttype)) {
						holder1 = trim(date_dmy2ymd(thisdate)+' '+thistime);
					} else {
						holder1 = trim(thisdate+' '+thistime);
					}
					// Ensure that min/max are in YMD format (legacy values could've been in M/D/Y format)
					if (texttype.substr(0,5) == "date_") {
						holder2 = redcap_clean_date(holder2,"date_ymd");
						holder3 = redcap_clean_date(holder3,"date_ymd");
					}
					// Remove all non-numerals so we can compare them numerically
					holder1 = (holder1.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
					holder2 = (holder2==='') ? '' : (holder2.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
					holder3 = (holder3==='') ? '' : (holder3.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
				}
				// Check range
				if ((holder2 !== '' && holder1 < holder2) || (holder3 !== '' && holder1 > holder3)) {	
					var msg1 = ($('#valtext_divs #valtext_rangesoft1').length) ? $('#valtext_divs #valtext_rangesoft1').text() : 'The value you provided is outside the suggested range.';
					var msg2 = ($('#valtext_divs #valtext_rangesoft2').length) ? $('#valtext_divs #valtext_rangesoft2').text() : 'This value is admissible, but you may wish to verify.';
					simpleDialog(msg1 + ' (' + (min==''?'no limit':min) + ' - ' + (max==''?'no limit':max) +'). ' + msg2);
					ob.style.backgroundColor='#FFB7BE';
					return true;
				}
			}
			// Not out of range, so leave the field as normal
			ob.style.fontWeight = 'normal';
			ob.style.backgroundColor='#FFFFFF';
			return true;			
		}
		// Set default generic message for failure
		var msg = ($('#valtext_divs #valtext_regex').length) ? $('#valtext_divs #valtext_regex').text() : 'The value you provided could not be validated because it does not follow the expected format. Please try again.';
		// Custom messages for legacy validation types
		if (texttype=="zipcode") {
			msg = ($('#valtext_divs #valtext_zipcode').length) ? $('#valtext_divs #valtext_zipcode').text() : iZIPCode;
		} else if (texttype=="email") {
			msg = ($('#valtext_divs #valtext_email').length) ? $('#valtext_divs #valtext_email').text() : iEmail;
		} else if (texttype=="phone") {
			msg = ($('#valtext_divs #valtext_phone').length) ? $('#valtext_divs #valtext_phone').text() : iUSPhone;
		} else if (texttype=="integer") {
			msg = ($('#valtext_divs #valtext_integer').length) ? $('#valtext_divs #valtext_integer').text() : 'This value you provided is not an integer. Please try again.';
		} else if (texttype=="number") {
			msg = ($('#valtext_divs #valtext_number').length) ? $('#valtext_divs #valtext_number').text() : 'This value you provided is not a number. Please try again.';
		} else if (texttype=="vmrn") {
			msg = ($('#valtext_divs #valtext_vmrn').length) ? $('#valtext_divs #valtext_vmrn').text() : 'The value entered is not a valid Vanderbilt Medical Record Number (i.e. 4- to 9-digit number, excluding leading zeros). Please try again.';
		} else if (texttype=="time") {
			msg = ($('#valtext_divs #valtext_time').length) ? $('#valtext_divs #valtext_time').text() : 'The value entered must be a time value in the following format HH:MM within the range 00:00-23:59 (e.g., 04:32 or 23:19).';
		}
		// Because of strange syncronicity issues of back-to-back fields with validation, set pop-up content first here
		$('#'+regexValPopupId).html(msg);
		// Give alert message of failure
		setTimeout(function(){
			simpleDialog(msg, null, regexValPopupId, null, returnFocusJS);
			$('#'+regexValPopupId).parent().find('button:first').focus();
		},10);
		ob.style.fontWeight = 'bold';
		ob.style.backgroundColor = '#FFB7BE';
		// Set flag on page
		$('#field_validation_error_state').val('1');
		return false;
	}

	//ZIPCODE
	if(texttype=="zipcode")
	{
		if ($('#valtext_divs #valtext_zipcode').length) iZIPCode = $('#valtext_divs #valtext_zipcode').text();
	    if (checkZIPCode(ob,true)) {
			ob.style.fontWeight = 'normal';
			ob.style.backgroundColor='#FFFFFF';
			return true;
		}
		return false;
	}
	
	//EMAIL
	if (texttype=="email")
    {
		if ($('#valtext_divs #valtext_email').length) iEmail = $('#valtext_divs #valtext_email').text();
		if (checkEmail(ob,true)) {
			ob.style.fontWeight = 'normal';
			ob.style.backgroundColor='#FFFFFF';
			return true;
		}
		return false;
	}

	//Phone
	if (texttype=="phone")
    {
		if ($('#valtext_divs #valtext_phone').length) iUSPhone = $('#valtext_divs #valtext_phone').text();
		if (checkUSPhone(ob,true)) {
			ob.style.fontWeight = 'normal';
			ob.style.backgroundColor='#FFFFFF';
			return true;
		}
		return false;
	}
	
	//Time (HH:MM)
	if (texttype=="time")
    {
		if (ob.value != "") {
			if (!isTime(ob.value,0)) {
				var msg = ($('#valtext_divs #valtext_time').length) ? $('#valtext_divs #valtext_time').text() : 'The value entered must be a time value in the following format HH:MM within the range 00:00-23:59 (e.g., 04:32 or 23:19).';
				simpleDialog(msg, null, null, null, returnFocusJS);
				ob.style.fontWeight = 'bold';
				ob.style.backgroundColor = '#FFB7BE';
				return false;
			}				
			//Now handle limits
			holder1 = (ob.value.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
			holder2 = (min=='') ? '' : (min.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
			holder3 = (max=='') ? '' : (max.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
			if ((holder2 != '' && holder1 < holder2) || (holder3 != '' && holder1 > holder3)) {	
				if(returntype=="hard") {
					var msg = ($('#valtext_divs #valtext_rangehard').length) ? $('#valtext_divs #valtext_rangehard').text() : 'The value you provided must be within the suggested range';
					simpleDialog(msg + ' (' + min + ' - ' + max +').', null, null, null, returnFocusJS);
					ob.style.backgroundColor='#FFB7BE';
				}
				else
				{
					var msg1 = ($('#valtext_divs #valtext_rangesoft1').length) ? $('#valtext_divs #valtext_rangesoft1').text() : 'The value you provided is outside the suggested range.';
					var msg2 = ($('#valtext_divs #valtext_rangesoft2').length) ? $('#valtext_divs #valtext_rangesoft2').text() : 'This value is admissible, but you may wish to verify.';
					simpleDialog(msg1 + ' (' + min + ' - ' + max +'). ' + msg2, null, null, null, returnFocusJS);
					ob.style.backgroundColor='#FFB7BE';
				}
			}
		}
		ob.style.fontWeight = 'normal';
		ob.style.backgroundColor='#FFFFFF';
		return true;
	}

	
	//Datetime (YYYY-MM-DD HH:MM) and Datetime w/ seconds (YYYY-MM-DD HH:MM:SS)
	if (texttype=="datetime" || texttype=="datetime_seconds")
    {		
		if (ob.value != "") {
			var dt_array = ob.value.split(' ');
			var dt_date = dt_array[0];
			var dt_time = dt_array[1];
			var holder1 = parseDate(dt_date);
			var hasSeconds = (texttype=="datetime_seconds");
			if (!isTime(dt_time,hasSeconds) || holder1==null) {
				if (!hasSeconds) {
					var msg = ($('#valtext_divs #valtext_datetime').length) ? $('#valtext_divs #valtext_datetime').text() : 'The value entered must be a datetime value in the following format YYYY-MM-DD HH:MM with the time in the range 00:00-23:59.';
				} else {
					var msg = ($('#valtext_divs #valtext_datetime_seconds').length) ? $('#valtext_divs #valtext_datetime_seconds').text() : 'The value entered must be a datetime value in the following format YYYY-MM-DD HH:MM:SS with the time in the range 00:00:00-23:59:59.';
				}
				simpleDialog(msg, null, null, null, returnFocusJS);
				ob.style.fontWeight = 'bold';
				ob.style.backgroundColor = '#FFB7BE';
				return false;
			}
			ob.value=formatDate(holder1,'y-MM-dd')+' '+dt_time;				
			//Now handle limits
			holder1 = (ob.value.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
			holder2 = (min=='') ? '' : (min.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
			holder3 = (max=='') ? '' : (max.replace(/:/g,"").replace(/ /g,"").replace(/-/g,""))*1;
			if ((holder2 != '' && holder1 < holder2) || (holder3 != '' && holder1 > holder3)) {	
				if(returntype=="hard") {
					var msg = ($('#valtext_divs #valtext_rangehard').length) ? $('#valtext_divs #valtext_rangehard').text() : 'The value you provided must be within the suggested range';
					simpleDialog(msg + ' (' + min + ' - ' + max +').', null, null, null, returnFocusJS);
					ob.style.backgroundColor='#FFB7BE';
				}
				else
				{
					var msg1 = ($('#valtext_divs #valtext_rangesoft1').length) ? $('#valtext_divs #valtext_rangesoft1').text() : 'The value you provided is outside the suggested range.';
					var msg2 = ($('#valtext_divs #valtext_rangesoft2').length) ? $('#valtext_divs #valtext_rangesoft2').text() : 'This value is admissible, but you may wish to verify.';
					simpleDialog(msg1 + ' (' + min + ' - ' + max +'). ' + msg2, null, null, null, returnFocusJS);
					ob.style.backgroundColor='#FFB7BE';
				}
			}
		}
		ob.style.fontWeight = 'normal';
		ob.style.backgroundColor='#FFFFFF';
		return true;
	}


	//Dates
	if(texttype=="date")
	{
	    //if empty, let it go
		if(isEmpty(ob.value)){return true;}
	    var result;
	    var holder1 = parseDate(ob.value);
		if(holder1==null){
			var msg = ($('#valtext_divs #valtext_date').length) ? $('#valtext_divs #valtext_date').text() : 'The value entered in this field must be a date. You may use one of several formats (ex. YYYY-MM-DD or MM/DD/YYYY), but the final result must constitute a real date. Please try again.';
			simpleDialog(msg, null, null, null, returnFocusJS);
		    ob.style.fontWeight = 'bold';
			ob.style.backgroundColor='#FFB7BE';
	        return false;
		}
		holder1=formatDate(holder1,'y-MM-dd');
        ob.value=holder1;
        //Reset field style
		ob.style.fontWeight = 'normal';	
		ob.style.backgroundColor='#FFFFFF';			
		//Now handle limits
		holder2 = (!min=='') ? formatDate(parseDate(min),'y-MM-dd') : formatDate(parseDate(ob.value),'y-MM-dd');
		holder3 = (!max=='') ? formatDate(parseDate(max),'y-MM-dd') : formatDate(parseDate(ob.value),'y-MM-dd');
		if(compareDates(holder2,'y-MM-dd',holder1,'y-MM-dd')==1 || compareDates(holder1,'y-MM-dd',holder3,'y-MM-dd')==1){
			if(returntype=="hard") {
				var msg = ($('#valtext_divs #valtext_rangehard').length) ? $('#valtext_divs #valtext_rangehard').text() : 'The value you provided must be within the suggested range';
				simpleDialog(msg + ' (' + holder2 + ' - ' + holder3 +').', null, null, null, returnFocusJS);
				ob.style.backgroundColor='#FFB7BE';
			}
			else
			{
				var msg1 = ($('#valtext_divs #valtext_rangesoft1').length) ? $('#valtext_divs #valtext_rangesoft1').text() : 'The value you provided is outside the suggested range.';
				var msg2 = ($('#valtext_divs #valtext_rangesoft2').length) ? $('#valtext_divs #valtext_rangesoft2').text() : 'This value is admissible, but you may wish to verify.';
				simpleDialog(msg1 + ' (' + holder2 + ' - ' + holder3 +'). ' + msg2, null, null, null, returnFocusJS);
				ob.style.backgroundColor='#FFB7BE';
			}
			return true;
		}
		ob.style.fontWeight = 'normal';	
		ob.style.backgroundColor='#FFFFFF';	
		return true;	
	}

	//Vanderbilt MRN
	if (texttype=="vmrn")
	{
		reformat_vanderbilt_mrn(ob); // Remove all non-numerals
		if (!is_vanderbilt_mrn(ob.value)) {
			var msg = ($('#valtext_divs #valtext_vmrn').length) ? $('#valtext_divs #valtext_vmrn').text() : 'The value entered is not a valid Vanderbilt Medical Record Number (i.e. 4- to 9-digit number, excluding leading zeros). Please try again.';
			simpleDialog(msg, null, null, null, returnFocusJS);
			ob.style.fontWeight = 'bold';
			ob.style.backgroundColor = '#FFB7BE';
			return false;
		} else {
			ob.style.fontWeight = 'normal';
			ob.style.backgroundColor='#FFFFFF';
			return true;
		}
	}

	//Numbers
	if (texttype=="int" ||texttype=="float")
    {
        //if empty, let it go
		if(isEmpty(ob.value)){return true;}
        var range_text;
		
		if(!min == '' && !max == ''){
	  			range_text = 'Range = ' + min + ' to ' + max;
	    } else {
	       	if(!min==''){
	            range_text = 'Minimum = ' + min;
	        } else {
	            range_text = max + ' = Maximum';
	        }
		}

		//First, make sure the type is correct
		if(texttype=="int")
		{
			return_value=isSignedInteger(ob.value,true);
			if(!return_value)
			{
				var msg = ($('#valtext_divs #valtext_integer').length) ? $('#valtext_divs #valtext_integer').text() : 'This value you provided is not an integer. Please try again.';
		    	simpleDialog(msg, null, null, null, returnFocusJS);
				ob.style.fontWeight = 'bold';
				ob.style.backgroundColor='#FFB7BE';
		        return false;
			}
		} else if(texttype=="float") {
			return_value=isSignedFloat(ob.value,true);
			if(!return_value)
			{
				var msg = ($('#valtext_divs #valtext_number').length) ? $('#valtext_divs #valtext_number').text() : 'This value you provided is not a number. Please try again.';
		    	simpleDialog(msg, null, null, null, returnFocusJS);
				ob.style.fontWeight = 'bold';
				ob.style.backgroundColor='#FFB7BE';
		        return false;
			}
		}
		
		ob.style.fontWeight = 'normal';
		ob.style.backgroundColor='#FFFFFF';
		
		//Handle case where min AND max not provided.
		if(min=='' && max==''){ return true; }
		//Handle case where min and/or max provided.
		if(!min==''){holder1 = min-0;} else {holder1=ob.value;}
		if(!max==''){holder2 = max-0;} else {holder2=ob.value;}
		if(ob.value > holder2 || ob.value < holder1){
			ob.style.fontWeight = 'bold';
			ob.style.backgroundColor='#FFB7BE';
			if(returntype=="hard") {
				var msg = ($('#valtext_divs #valtext_rangehard').length) ? $('#valtext_divs #valtext_rangehard').text() : 'The value you provided must be within the suggested range.';
				simpleDialog(msg + ' (' + range_text + ')', null, null, null, returnFocusJS);
			} else {
				var msg1 = ($('#valtext_divs #valtext_rangesoft1').length) ? $('#valtext_divs #valtext_rangesoft1').text() : 'The value you provided is outside the suggested range.';
				var msg2 = ($('#valtext_divs #valtext_rangesoft2').length) ? $('#valtext_divs #valtext_rangesoft2').text() : 'This value is admissible, but you may wish to verify.';
				simpleDialog(msg1 + ' (' + range_text +') ' + msg2, null, null, null, returnFocusJS);
			}
			return false;
		}		
		ob.style.fontWeight = 'normal';
		ob.style.backgroundColor='#FFFFFF';
		return true;
	}
}

// Validate a Vanderbilt University Medical Record Number (4-9 digit number)
function is_vanderbilt_mrn(mrn) {
	// Remove non-numerals
	mrn = mrn.replace(/[^0-9]/ig, '');
	if (mrn == '') return true; // Ignore null value
	mrn = mrn*1;
	// Must be 4-9 digits
	return (mrn > 999 && mrn <= 999999999);
}
// Reformat a Vanderbilt University Medical Record Number (4-9 digit number)
function reformat_vanderbilt_mrn(ob) {
	mrn = ob.value;
	// Remove non-numerals
	mrn = mrn.replace(/[^0-9]/ig, '');
	if (mrn != '') {
		mrn = (mrn*1)+'';
		// Add leading zeros, if needed
		while (mrn.length < 9) mrn = "0" + mrn;
	}
	ob.value = mrn;
}


// Date Differencing Functions
function datediff(d1,d2,unit,dateformat,returnSigned) 
{
	// Make sure Units are provided
	if (unit == null) {
		alert('CALCULATION ERRORS EXIST!\n\nThere is a syntactical error in a DATEDIFF calculation on this page. '
			+ 'The UNIT parameter is not specified. Please edit the equation to fix this.\n\n'
			+ 'See the Help & FAQ page for documentation on using the DATEDIFF function.');
		return;
	}
	// Initialize parameters first
	var d1 = String(d1);
	var d2 = String(d2);
	var dateformatProvided = (dateformat != null);
	if (dateformat != "mdy" && dateformat != "dmy") dateformat = "ymd";
	returnSigned = (returnSigned == null) ? false : (returnSigned == true || returnSigned == 'true');
	var d1isToday = (d1 == "today" || d1 == today);
	// Determine data type of field ("date", "time", "datetime", or "datetime_seconds")
	var format_checkfield = (d1isToday ? d2 : d1);
	var numcolons = format_checkfield.split(":").length - 1;
	if (numcolons == 1) {
		if (format_checkfield.indexOf("-") > -1) {
			var datatype = "datetime";
		} else {
			var datatype = "time";
		}
	} else if (numcolons > 1) {
		var datatype = "datetime_seconds";
	} else {
		var datatype = "date";
	}
	// TIME
	if (datatype == "time") {
		// Return in specified units
		return secondDiff(timeToSeconds(d1),timeToSeconds(d2),unit,returnSigned);
	}	
	// DATE	pre-check
	if (datatype == "date") {
		// If either is set as today's date
		if (d1isToday) {
			if (dateformat == "mdy") {
				d1 = today_mdy;
			} else if (dateformat == "dmy") {
				d1 = today_dmy;
			} else {
				d1 = today;
			}
		} else if (d2 == "today" || d2 == today) {
			if (dateformat == "mdy") {
				d2 = today_mdy;
			} else if (dateformat == "dmy") {
				d2 = today_dmy;
			} else {
				d2 = today;
			}
		}
		if (d1.indexOf("-") < 0 || d2.indexOf("-") < 0) {
			return 'NaN';	
		}
	}
	// Make sure the date/time values aren't empty
	if (d1 == "" || d2 == "" || d1 == null || d2 == null) return 'NaN';
	// When possible, check if dates are both in same format and also in same format as specified by dateformat parameter
	if (dateformat == "mdy" || dateformat == "dmy") {
		// For DMY or MDY, make sure hyphens are in correct places
		var dateformat1Correct = (d1.substr(2,1) == '-' && d1.substr(5,1) == '-');
		var dateformat2Correct = (d2.substr(2,1) == '-' && d2.substr(5,1) == '-');
	} else {
		// For YMD, make sure hyphens are in correct places
		var dateformat1Correct = (d1.substr(4,1) == '-' && d1.substr(7,1) == '-');
		var dateformat2Correct = (d2.substr(4,1) == '-' && d2.substr(7,1) == '-');
	}
	if (!(dateformat1Correct && dateformat2Correct)) {
		var msg = 'CALCULATION ERRORS EXIST!\n\nThere is a syntactical error in a DATEDIFF calculation on this page. ';
		if ((dateformat1Correct && !dateformat2Correct) || (!dateformat1Correct && dateformat2Correct)) {
			msg += '\n\nPROBLEM: The two values ("'+d1+'", "'+d2+'") appear to be in different formats from each other. They must both be in the same format. You will need to modify at least one of these fields so that its format is the same as the other (i.e. "ymd", "mdy", or "dmy").';
		}
		if (!dateformat1Correct) {
			msg += '\n\nPROBLEM: The first value ("'+d1+'") is not in the format specified in the equation (i.e. "'+dateformat+'"). ';
			if (!dateformatProvided) msg += 'Since the DATEFORMAT parameter was not provided as the fourth parameter in the equation, "ymd" format was assumed. ';
			msg += 'You will need to modify this field so that its validation format is now "'+dateformat+'" or else modify the DATEFORMAT parameter in the equation.';
		}
		if (!dateformat2Correct) {
			msg += '\n\nPROBLEM: The second value ("'+d2+'") is not in the format specified in the equation (i.e. "'+dateformat+'"). ';
			if (!dateformatProvided) msg += 'Since the DATEFORMAT parameter was not provided as the fourth parameter in the equation, "ymd" format was assumed. ';
			msg += 'You will need to modify this field so that its validation format is now "'+dateformat+'" or else modify the DATEFORMAT parameter in the equation.';
		}
		msg += '\n\nSee the Help & FAQ page for documentation on using the DATEDIFF function.';
		alert(msg);
		return;
	}
	// DATE, DATETIME, or DATETIME_SECONDS
	var d1sec = 0;
	var d2sec = 0;
	// Separate time if datetime or datetime_seconds
	if (datatype != "date") {
		d1b = d1.split(" ");
		d2b = d2.split(" ");
		// Split into date and time (in seconds)
		d1 = d1b[0];
		d2 = d2b[0];
		d1sec = timeToSeconds(d1b[1]);
		d2sec = timeToSeconds(d2b[1]);
	}
	var dt1 = d1.split("-");
	var dt2 = d2.split("-");
	// Convert the dates to seconds (conversion varies due to dateformat)
	if (dateformat == "ymd") {
		var dat1 = new Date(parseInt(dt1[0],10), parseInt(dt1[1],10)-1, parseInt(dt1[2],10), 0, 0, d1sec).valueOf();
		var dat2 = new Date(parseInt(dt2[0],10), parseInt(dt2[1],10)-1, parseInt(dt2[2],10), 0, 0, d2sec).valueOf();
	} else if (dateformat == "mdy") {
		var dat1 = new Date(parseInt(dt1[2],10), parseInt(dt1[0],10)-1, parseInt(dt1[1],10), 0, 0, d1sec).valueOf();
		var dat2 = new Date(parseInt(dt2[2],10), parseInt(dt2[0],10)-1, parseInt(dt2[1],10), 0, 0, d2sec).valueOf();
	} else if (dateformat == "dmy") {
		var dat1 = new Date(parseInt(dt1[2],10), parseInt(dt1[1],10)-1, parseInt(dt1[0],10), 0, 0, d1sec).valueOf();
		var dat2 = new Date(parseInt(dt2[2],10), parseInt(dt2[1],10)-1, parseInt(dt2[0],10), 0, 0, d2sec).valueOf();
	} else {
		return 'NaN';
	}
	// Get the difference in seconds
	var sec = (dat2-dat1)/1000;
	if (!returnSigned) sec = Math.abs(sec);
	// Return in specified units
	if (unit == "s") {
		return sec;
	} else if (unit == "m") {	
		return sec/60;
	} else if (unit == "h") {	
		return sec/3600;
	} else if (unit == "d") {	
		return (datatype == "date" ? Math.round(sec/86400) : sec/86400);
	} else if (unit == "M") {
		return sec/2630016; // Use 1 month = 30.44 days
	} else if (unit == "y") {
		return sec/31556952; // Use 1 year = 365.2425 days
	}
	return 'NaN';
}
// Convert military time to seconds (i.e. number of seconds since midnight)
function timeToSeconds(time) {
	if (time.indexOf(":") < 0) return 'NaN';
	timearray = time.split(":");
	return (timearray[0]*3600) + (timearray[1]*60) + (timearray[2] == undefined ? 0 : timearray[2]*1);
}
// Return the difference of two number values in desired units converted from seconds
function secondDiff(time1,time2,unit,returnSigned) {
	sec = time2-time1;
	if (!returnSigned) sec = Math.abs(sec);
	// Return in specified units
	if (unit == "s") {
		return sec;
	} else if (unit == "m") {	
		return sec/60;
	} else if (unit == "h") {	
		return sec/3600;
	} else if (unit == "d") {	
		return sec/86400;
	} else if (unit == "M") {
		return sec/2630016; // Use 1 month = 30.44 days
	} else if (unit == "y") {
		return sec/31556952; // Use 1 year = 365.2425 days
	}
	return 'NaN';
}

// Round numbers to a given decimal point
function round(number,decimal_points) {
	if (number == null) return 'NaN';
	if (!decimal_points || decimal_points == null) return Math.round(number);
	var exp = Math.pow(10, decimal_points);
	number = Math.round(number * exp) / exp;
	return parseFloat(number.toFixed(decimal_points));
}
// Round numbers up to a given decimal point
function roundup(number,decimal_points) {
	if (number == null) return 'NaN';
	if (!decimal_points || decimal_points == null) return Math.ceil(number);
	var exp = Math.pow(10, decimal_points);
	number = Math.ceil(number * exp) / exp;
	return parseFloat(number.toFixed(decimal_points));
}
// Round numbers down to a given decimal point
function rounddown(number,decimal_points) {
	if (number == null) return 'NaN';
	if (!decimal_points || decimal_points == null) return Math.floor(number);
	var exp = Math.pow(10, decimal_points);
	number = Math.floor(number * exp) / exp;
	return parseFloat(number.toFixed(decimal_points));
}
// Find mean of list of numbers (can input unlimited amount of arguments)
function mean() {
	var items = mean.arguments.length;
	var count = items;
	var sum = 0;
	var thisnum;
	for (i = 0; i < items; i++) {
		thisnum = mean.arguments[i];
		if (isFloat(thisnum) && thisnum != 'NaN') {
			sum += parseFloat(thisnum);
		} else if (thisnum == null || thisnum == "undefined" || thisnum == "" || thisnum == "NaN") {
			count--;
		} else {
			return 'NaN';
		}
	}
	return (sum/count);
}
// Find median of list of numbers (can input unlimited amount of arguments)
function median() {
	var items = median.arguments;
	var n = items.length;
	var count = 0;
	var items2 = new Array();
	var thisnum;
	for (i = 0; i < n; i++) {
		thisnum = items[i];
		if (isFloat(thisnum) && thisnum != 'NaN') {
			items2[i] = thisnum;
			count++;
		} else if (thisnum != null && thisnum != "undefined" && thisnum != "" && thisnum != 'NaN') {
			return 'NaN';
		}
	}
	// Sort the array
	items2.sort(function(a,b){return a - b});
	// Find median
	var h = Math.floor(count/2);
	if (count % 2 == 0) { 
		return (items2[h] + items2[h-1]) / 2; 
	} else { 
		return items2[h]; 
	}
}
// Find max of list of numbers (can input unlimited amount of arguments)
function max() {
	var items = max.arguments;
	var items2 = new Array();
	var thisnum;
	var count = 0;
	for (i = 0; i < items.length; i++) {
		thisnum = items[i];
		if (isFloat(thisnum) && thisnum != 'NaN') {
			items2[count] = thisnum;
			count++;
		} else if (thisnum != null && thisnum != "undefined" && thisnum != "" && thisnum != 'NaN') {
			return 'NaN';
		}
	}
	return Math.max.apply(Math, items2);
}
// Find min of list of numbers (can input unlimited amount of arguments)
function min() {
	var items = min.arguments;
	var items2 = new Array();
	var thisnum;
	var count = 0;
	for (i = 0; i < items.length; i++) {
		thisnum = items[i];
		if (isFloat(thisnum) && thisnum != 'NaN') {
			items2[count] = thisnum;
			count++;
		} else if (thisnum != null && thisnum != "undefined" && thisnum != "" && thisnum != 'NaN') {
			return 'NaN';
		}
	}
	return Math.min.apply(Math, items2);
}
// Find standard deviation of list of numbers (can input unlimited amount of arguments)
function stdev() {
	var data = stdev.arguments;
	var deviation = new Array();
	var valid_data = new Array();
	var sum = 0;
	var devnsum = 0;
	var stddevn = 0;
	var len = data.length;
	var valid_len = 0;
	for (var i=0; i<len; i++) {
		thisnum = data[i];
		if (isFloat(thisnum) && thisnum != 'NaN') {
			sum = sum + (thisnum * 1);  // ensure number
			valid_data[valid_len] = thisnum;
			valid_len++;
		} else if (thisnum != null && thisnum != "undefined" && thisnum != "" && thisnum != 'NaN') {
			return 'NaN';
		}
	}
	data = new Array(); // clear data from memory
	if (valid_len == 0) return 'NaN';
	var mean = (sum/valid_len);
	for (i=0; i<valid_len; i++) {
		deviation[i] = valid_data[i] - mean;
		deviation[i] = deviation[i] * deviation[i];
		devnsum = devnsum + deviation[i];
	}
	return Math.sqrt(devnsum/(valid_len-1));
}
// Return absolute value of a number
function abs(val) {
	return (isFloat(val) ? Math.abs(val) : 'NaN');
}
// Find sum of list of numbers (can input unlimited amount of arguments)
function sum() {
	var items = sum.arguments.length;
	var thissum = 0;
	var thisnum;
	var usedNums = false;
	for (i = 0; i < items; i++) {
		thisnum = sum.arguments[i];
		if (isFloat(thisnum) && thisnum != 'NaN') {
			thissum += parseFloat(thisnum);
			usedNums = true;
		} else if (thisnum != null && thisnum != "undefined" && thisnum != "" && thisnum != 'NaN') {
			return 'NaN';
		}
	}
	return (usedNums ? thissum : 'NaN');	
}

// Serialize a selector (i.e. a web form) into a JSON object with all its components
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

/****************************************************************************************************/
/***************** Custom JavaScript ******************************************************************/
/****************************************************************************************************/

// Returns version of Internet Explorer (if user is using IE)
function vIE(){
	var version = -1;
	if (window.navigator.appName == "Microsoft Internet Explorer") {
		version = parseFloat((new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})')).exec(navigator.userAgent)[1]);
		// If IE7 and above, use the Document Mode to really determine version
		if (version >= 7) {		
			version = (document.documentMode) ? document.documentMode : 7;
		}
	}
	return version;
}

//AJAX object
var req = createXMLHttpRequest();
function createXMLHttpRequest() {
	var ua;
	if (window.XMLHttpRequest) {
		try {
			ua = new XMLHttpRequest();
		} catch(e) {
			ua = false;
		}
	} else if(window.ActiveXObject) {
		try {
			ua = new ActiveXObject("Microsoft.XMLHTTP");
		} catch(e) {
			ua = false;
		}
	}
	return ua;
}

//AJAX Get
function doAjaxGet(file,urlvars,innerHtmlId) {
	var rnd982g = Math.random();
	var ajax;	
	if (window.XMLHttpRequest) {
		ajax = new XMLHttpRequest(); //For Firefox, Safari, Opera
	} else if (window.ActiveXObject) {
		ajax = new ActiveXObject("Microsoft.XMLHTTP"); //For IE 5+
	} else {
		return false; //Error for an old browser
	}	
	urlvars = urlvars.replace(/#/g,"%23");
	ajax.open('GET', file+'?'+urlvars+'&rnd982g='+rnd982g);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			if (typeof innerHtmlId != "undefined")
				document.getElementById(innerHtmlId).innerHTML = ajax.responseText;
		}
	}
	ajax.send(null);
}

//Allow for dynamic style changes
function changeSty(thisfield,classpassed){
	document.getElementById(thisfield).className=classpassed;
}

//Focus for radio fields
function doFocusRadio(field,form) {
	eval("try{ document."+form+"."+field+"___radio[0].focus() } catch(err) { try{ document."+form+"."+field+"___radio.focus() } catch(err) { document."+form+"."+field+".focus() } }");
}

// Move to next field when put focus on "reset value" link for radio fields (for easy tabbing on page)
function doFocusNext(field,form,iteration) {
	if (!isNumeric(iteration)) iteration = 1;
	var nexttabindex = $('form#'+form+' input[name="'+field+'"]').attr('tabindex') + iteration;
	var nextfield = $('form#'+form+' input[tabindex="'+nexttabindex+'"]:enabled:visible:first, form#'+form+' select[tabindex="'+nexttabindex+'"], form#'+form+' textarea[tabindex="'+nexttabindex+'"]');
	var nextradiofield = $('form#'+form+' input[name="'+nextfield.attr('name')+'___radio"]:enabled:visible:first');
	if (nextradiofield.length && (nextradiofield.css('visibility') == 'visible' || nextradiofield.css('visibility') == 'inherit')) {
		// Next input is a radio, so put focus on it
		nextradiofield.trigger('focus');
	} else if (nextfield.length && (nextfield.css('visibility') == 'visible' || nextfield.css('visibility') == 'inherit')
		&& !nextfield.prop('readonly')) {
		// Put focus on next input, select, or textarea
		nextfield.trigger('focus');
	} else if (iteration <= 20) {
		// Don't do more than 20 recursions if field not found
		doFocusNext(field,form,iteration+1);
	} else {
		// Give up! Couldn't find the next field.
	}
}

// Enable green row highlight for data entry form table
function enableDataEntryRowHighlight() {
	$('form#form table#form_table :input, form#form table#form_table a')
	.bind('click focus select', function(event){
		// If save buttons are not displayed (e.g., form is locked), then don't highlight row
		if ($('#__SUBMITBUTTONS__-div').css('display') == 'none') return;
		// Exclude if clicked the Data History and balloon icons for this field
		if ($(this).has('img').length) return;
		// Obtain type of html tag source that triggered this event
		var targetTag = event.target.nodeName.toLowerCase();
		// Exclude "reset" links for radios (unless directly clicked)
		if ($(this).hasClass('cclink') && event.type != 'click') return;
		// Exclude text input, textarea, and drop-down click because it would have already been triggered by focus
		if (event.type == 'click' && (targetTag == 'textarea' || targetTag == 'select' 
			|| (targetTag == 'input' && $(event.target).attr('type') == 'text'))) return;
		// Skip over calc fields
		if (targetTag == 'input' && $(event.target).attr('type') == 'text' && $(event.target).attr('readonly') == 'readonly') return;
		// Find row element
		var tr = $(this).closest('tr');
		// Go up one or two levels if table nested within table
		if (tr.attr('sq_id') == null) tr = tr.parent().closest('tr');
		if (tr.attr('sq_id') == null) tr = tr.parent().closest('tr');
		// If could not find the row element, then stop
		if (tr.attr('sq_id') == null || tr.attr('id') == null || tr.attr('id').indexOf('-sh-tr') > -1) return;
		// Reset bgcolor for all rows in case others are highlighted
		$('form#form table#form_table tr td.greenhighlight').removeClass('greenhighlight');
		// If found the row element, highlight all cells
		tr.children("td").each(function() {
			$(this).addClass('greenhighlight');
			if ($(this).hasClass('label_matrix')) {
				$(this).find('table tr td.data_matrix, table.mtxchoicetablechk tr td.data, table.mtxchoicetable tr td.data')
					.addClass('greenhighlight');
			}
		});
		// Add custom "Save and Open Query Popup" button
		if (data_resolution_enabled == '2') {
			var hasExclRedIcon = (tr.html().indexOf('balloon_exclamation.gif') > -1);
			var hasExclBlueIcon = (tr.html().indexOf('balloon_exclamation_blue.gif') > -1);
			if (hasExclRedIcon || hasExclBlueIcon) {
				// Get field name
				var fieldname = tr.attr('id').replace('-tr','');
				// Add content to tooltip
				$('#tooltipDRWsave').html( '<div style="padding:12px 0 0 8px;overflow:hidden;">'+
					'<button name="submit-btn-saverecord" class="jqbuttonmed" onclick="appendHiddenInputToForm(\'scroll-top\',\''+($(window).scrollTop())+'\');appendHiddenInputToForm(\'dqres-fld\',\''+fieldname+'\');dataEntrySubmit(this);return false;">'+
					'<img src="'+app_path_images+'balloon_exclamation'+(hasExclBlueIcon ? '_blue' : '')+'.gif" class="imgfix"> Save and then open <br>Data Resolution Pop-up</button>'+
					'</div>');
				// Buttonize the Save&Open Popup button
				$('#tooltipDRWsave button').button();
				// Open tooltip	to right of field
				$('#tooltipDRWsave').css({
					position: "absolute",
					top: (tr.position().top + tr.outerHeight()/2 - $('#tooltipDRWsave').outerHeight()/2)+ "px",
					left: (tr.position().left + tr.outerWidth() - 10) + "px"
				}).show();
			} else {
				$('#tooltipDRWsave').hide();
			}
		}
	});
}
			
// Open Save button tooltip	fixed at top-right of data entry forms
function displayFormSaveBtnTooltip() {
	// If save buttons are not displayed (e.g., form is locked), then don't display tooltip
	if ($('#__SUBMITBUTTONS__-div').length == 0 || $('#__SUBMITBUTTONS__-div').css('display') == 'none') return;
	// Copy all the buttons from bottom of page and put in div
	$('#formSaveTip').html( $('#__SUBMITBUTTONS__-div').html() );
	// Adjust position if does not contain the Save And Go To Next Form button
	var hasSaveNextFormBtn = ($('#formSaveTip input[name="submit-btn-savenextform"]').length);
	var extraBtnOffset = (hasSaveNextFormBtn) ? 0 : 20;
	// Adjust position if does not contain the Save And Go To Next Form button
	var hasSaveMarkCompleteBtn = ($('#formSaveTip input[name="submit-btn-savecompresp"]').length);
	var extraBtnOffset2 = (hasSaveMarkCompleteBtn) ? -3 : 0;
	var extraBtnOffset2valign = (hasSaveMarkCompleteBtn) ? -9 : 0;
	// Increase padding of div to center buttons vertically
	var padding = $('#formSaveTip').css('padding-top').replace('px','')*1;
	$('#formSaveTip').css('padding-top', (padding+extraBtnOffset+extraBtnOffset2valign)+'px');
	// Open tooltip	fixed at top-right of page	
	$('#formSaveTip').css({
		position: "fixed",
		top: (-14 - extraBtnOffset - extraBtnOffset2)+ "px",
		left: ($('form#form table#form_table').position().left + $('form#form table#form_table').outerWidth() + 5) + "px"
	}).show();
}

// Append hidden input to Data Entry Form (i.e. form#form)
function appendHiddenInputToForm(name,val) {
	$('form#form').append('<input type="hidden" value="'+val+'" name="'+name+'">');
}

//For unchecking radio buttons
function uncheckRadioGroup (radioButtonOrGroup) {
  if (radioButtonOrGroup.length) { // we have a group
    for (var b = 0; b < radioButtonOrGroup.length; b++)
      if (radioButtonOrGroup[b].checked) {
        radioButtonOrGroup[b].checked = false;
        break;
      }
  }
  else 
    try{radioButtonOrGroup.checked = false}catch(err){};
}

//For check and uncheck reset password
//check box is unchecked, reset field not shown
var checkedIndex = true;
function ckReset(temp_pass) {
	var e = document.getElementById('resetFieldLeft');
	var d = resetFieldLeft_text + "<input type='hidden' name='reset_flag' value='1'>"; 
	if (checkedIndex == true) {
		if (temp_pass) { 
			e.innerHTML = d + ckreset_msg1; 
		} else {
			e.innerHTML = d + ckreset_msg2;
		}
		checkedIndex = false;
	} else if (checkedIndex == false) {
		e.innerHTML = "";
		checkedIndex = true;
	}
}

function chk_username(pass) {
   // pass - field to check
   // returns false if there are characters other than letters, 
   // 	numbers, and underscores
   //re = /^\w@+$/;
   //Allow alphanumeric, underscore, period, hyphen, ampersand
   re = /^([a-zA-Z0-9_\.\-\@])+$/;
   return re.test(pass.value);
}
function chk_cont(pass) {
   // pass - field to check
   // returns false if there is not at least one lower-case letter, 
   // 	one upper-case letter, and one number.
   re1 = /\d+/;
   re2 = /[a-z]+/;
   re3 = /[A-Z]+/;
   return re1.test(pass.value) && re2.test(pass.value) && re3.test(pass.value);
}

function chk_len(pass,mn,mx) {
   // pass - field to check
   // mn   - minimum allowed length
   // mx   - maximum allowed length
   // returns false if pass.value.length is less than
   //          or greater than mx
   var str = trim(pass.value);
return str.length >= mn && str.length <= mx }

function trim(s) {
   // str - any string
   // returns the same string with stripped leading and trailing blanks
   var str = new String(s);
   return (str == '') ? '' : str.replace(/^\s*|\s*$/g,"");
}

function alertbad(fld,mess) {
   alert(mess);
   setTimeout(function () { fld.focus() }, 1);
   return false;
}

function delete_doc(docs_id) {
	if(confirm(delete_doc_msg)) {
		window.location.href=app_path_webroot+page+"?pid="+pid+"&delete="+docs_id+addGoogTrans();
		return true;
	}
	return false;
}


//For individual field File uploads
function filePopUp(field_name,label_page) {
	document.getElementById('file_upload').innerHTML = file_upload_win;
	document.getElementById('field_name').value = field_name+'-linknew';	
	$.get(label_page, { s: getParameterByName('s'), field_name: field_name},
		function(data) {
			$("#field_name_popup").html(data);
			$('#file_upload').dialog('destroy');
			$('#file_upload').dialog({ bgiframe: true, modal: true, width: (isMobileDevice ? $('body').width() : 500) });
			// Since iOS (v5.1 and below) devices do not support file uploading on webpages in Mobile Safari, give note to user about this.
			if (isIOS && isIOS5andBelow) {
				$('#this_upload_field').hide();
				$('#f1_upload_form').html("<p style='color:red;'><b>CANNOT UPLOAD FILE!</b><br>"
					+ "We're sorry, but Apple does not support uploading files onto webpages "
					+ "in their Mobile Safari browser for iOS devices, such as iPhones, iPads, and iPod Touches (specifically those on iOS version 5.1 and below). "
					+ "Because it appears that you are using one of these devices, you will not be able to upload a file here."
					+ "This is not an issue in REDCap but is merely a limitation imposed by Apple. NOTE: iOS version 6 and above *does* support uploading "
					+ "of pictures and videos (but not other file types), so you may consider upgrading your Apple device to the latest version of iOS.</p>");
			}
		}
	);
}
function startUpload(){
	document.getElementById('f1_upload_process').style.display = 'block';
	document.getElementById('f1_upload_form').style.display = 'none';
	return true;
}
function stopUpload(success,this_field,doc_id,doc_name,study_id,doc_size,event_id,download_page,delete_page){
	var result = '';
	if (success == 1){
		result = '<div style="font-weight:bold;font-size:14px;text-align:center;color:green;"><br><img src="'+app_path_webroot+'Resources/images/tick.png" class="imgfix"> Document was successfully uploaded!<\/div>';
		document.getElementById(this_field+"-link").style.display = 'block';
		if (doc_name.length > 24) doc_name = doc_name.substring(0,22)+"...";
		document.getElementById(this_field+"-link").innerHTML = doc_name+doc_size;
		document.getElementById(this_field+"-link").href = download_page+"&id="+doc_id+"&s="+getParameterByName('s')+"&record="+study_id+"&page="+getParameterByName('page')+"&event_id="+event_id+"&field_name="+this_field;
		$('#'+this_field+"-link").attr('onclick', "return appendRespHash('"+this_field+"');");
		var newlinktext = '<img src="'+app_path_images+'bullet_delete.png"> '
			+ '<a href="javascript:;" style="font-size:10px;color:red;" onclick=\'if(confirm(delDocText)) { deleteDocument('+doc_id+',"'+this_field+'","'+study_id+'",'+event_id+',"'+delete_page+'&__response_hash__="+$("#form input[name=__response_hash__]").val());return false; }\'>Remove file</a>';
		if (sendit_enabled) {
			newlinktext += "<span class=\"sendit-lnk\"><span style=\"font-size:10px;padding:0 10px;\">or</span><img src=\""+app_path_images+"mail_small.png\" style=\"position:relative;top:5px;\" /><a onclick=\"popupSendIt("+doc_id+",3);return false;\" href=\"javascript:;\" style=\"font-size:10px;\">Send-It</a>&nbsp;</span>";
		}
		document.getElementById(this_field+"-linknew").innerHTML = newlinktext;
		eval("document.form."+this_field+".value = '"+doc_id+"';");
	} else {
		result = '<div style="font-weight:bold;font-size:14px;text-align:center;">There was an error during file upload!<\/div><br><br>';
	}
	document.getElementById('f1_upload_form').style.display = 'block';
	document.getElementById('f1_upload_form').innerHTML = result;
	document.getElementById('f1_upload_process').style.display = 'none';
	$('#file_upload').dialog('option', 'buttons', { "Close": function() { $(this).dialog("destroy"); } });	
	// Trigger branching logic in case a "file" field is involved in branching
	doBranching();
	return true;   
}
var delDocText = "DELETE DOCUMENT?\n\nAre you sure you want to permanently remove this document?";
function deleteDocument(doc_id,this_field,id,event_id,delete_page) {
	eval("document.form."+this_field+".value = '';");	
	$.get(delete_page, { s: getParameterByName('s'), id: doc_id, field_name: this_field, record: id, event_id: event_id },function(data) {
		$("#"+this_field+"-linknew").html(data);			
		$("#"+this_field+"-link").css('display','none');
		simpleDialog('The document "'+$("#"+this_field+"-link").html()+'" has been deleted.');
		dataEntryFormValuesChanged = true;
	});
	// Trigger branching logic in case a "file" field is involved in branching
	doBranching();
	return true;
}

//Opens pop-up for sending Send-It files on forms and in File Repository
function popupSendIt(doc_id,loc) {
	window.open(app_path_webroot+'SendIt/upload.php?loc='+loc+'&id='+doc_id,'sendit','width=830, height=700, toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1');
}



//Functions used in Branching Logic for hiding/showing fields
function checkAll(flag, formname, field) {
   var this_code;
   eval("var chkLen=document."+formname+"."+field+".length;");
   if (chkLen) {
      for (var x = 0; x < chkLen; x++) {
         if (flag == 1) {
			eval("document."+formname+"."+field+"[x].checked = true;");
         } else {
			eval("document."+formname+"."+field+"[x].checked = false;"
				+"this_code = document."+formname+"."+field+"[x].getAttribute('code');");
			eval("document."+formname+".__chk__"+field.substring(8)+"_RC_"+this_code+".value='';");				
         }
      }
   } else {
      if (flag == 1) {
		eval("document."+formname+"."+field+".checked = true;");	           
      } else {
		eval("document."+formname+"."+field+".checked = false;"
			+"this_code = document."+formname+"."+field+".getAttribute('code');");
		eval("document."+formname+".__chk__"+field.substring(8)+"_RC_"+this_code+".value='';");	
      }
   }
}

// Check if any checkboxes in a group are checked
function anyChecked(formname, field) {
	var numChecked = 0;
	var domfld = document.forms[formname].elements[field];
	// If field doesn't exist, it must be a "descriptive" field
	try {
		var fldexists = (domfld != null);
	} catch(e) {
		try {
			var fldexists = (domfld.value != null);
		} catch(e) {
			var fldexists = false;
		}
	}
   if (!fldexists) return 0;
   var chkLen2 = domfld.length;
   if (chkLen2) {
      for (var x = 0; x < chkLen2; x++) {
		if (document.forms[formname].elements[field][x].checked) numChecked++;
      }
   } else {
		if (document.forms[formname].elements[field].checked) numChecked++;
   }
   return numChecked;
}

// Return boolean for whether DOM element exists
function elementExists(domfld) {
	try {
		return (domfld != null);
	} catch(e) {
		return false;
	}
}

// Evaluate branching logic and show/hide table row based upon its evaluation
function evalLogic(this_field,logic) {
	if (logic == false) {
		// HIDE ROW (first evaluate if a checkbox)
		var is_chkbx = 0;
		var fldLen = 0;
		eval("var domfld = document.forms['form']."+this_field+";");
		if (isIE) {
			try {
				var fldexists = (domfld.value != null);
				if (fldexists) fldLen = domfld.value.length;
			} catch(e) {
				var fldexists = false;
				var fldLen = 0;
			}
		} else {
			var fldexists = (domfld != null);
			if (fldexists) fldLen = domfld.value.length;
		}
		if (!fldexists) {
			// Checkbox fields (might also be a "descriptive" field)
			var fldLen = anyChecked("form","__chkn__"+this_field);
			is_chkbx = 1;
		}
		var msg = (fldLen > 0) ? 'show' : '';
		// Now hide the row
		if (msg=='show') {
			if (showEraseValuePrompt) {
				// If using randomization, make sure we're not going to erase the randomization field or stata field values
				if (randomizationCriteriaFieldList != null && in_array(this_field, randomizationCriteriaFieldList)) {
					// Randomization fields CANNOT be hidden after randomization has happened, so stop here.
					return false;
				}
				// Determine if we should prompt the user and erase the value
				var eraseIt = (page == 'surveys/index.php') ? true : confirm(brErase(this_field));
			} else {
				var eraseIt = false;
			}
			if (eraseIt) {
				if (is_chkbx) {
					// Checkbox fields
					checkAll(0,"form","__chkn__"+this_field);		
				} else {
					// Regular field
					domfld.value = '';
					// If a radio field, additionally make sure the radio buttons are all unchecked
					if (document.forms['form'].elements[this_field+'___radio'] != null) {
						uncheckRadioGroup(document.forms['form'].elements[this_field+'___radio']);
					}
				}
				document.getElementById(this_field+'-tr').style.display='none';
			}
		} else {
			document.getElementById(this_field+'-tr').style.display='none';
		}
	} else {
		// SHOW ROW
		var showit = true;
		var getClassTerm = ((isIE && vIE()<8) ? 'className' : 'class');
		if (page == 'surveys/index.php') {
			// Survey page: Treat differently since it contains fields on the form that might need to remain hidden (because of multi-paging)
			if (document.getElementById(this_field+'-tr').getAttribute(getClassTerm) != null) {
				if (document.getElementById(this_field+'-tr').getAttribute(getClassTerm).indexOf('hide') > -1) {
					// If row has class 'hide', then keep hidden
					showit = false;
				}
			}
		}
		// Now show the row, if applicable
		if (showit) document.getElementById(this_field+'-tr').style.display = (isIE ? 'block' : 'table-row');
	}
}


//Data Cleaner functions
function ToggleDataCleanerDiv(fid,prefix,divId,spinId,field,svc,formVar,group_id,usingGCT) {
	if (usingGCT == null) usingGCT = false;
	var d = document.getElementById(divId);
	if (d.style.display != 'none' && d.style.display != '') {
		d.style.display = 'none';
		return;
	}
	/* Else we've got something to do */
	var s = document.getElementById(spinId);
	s.style.display = 'inline';
	//AJAX request to fetch values
	$.get(app_path_webroot+'Graphical/highlowmiss.php', { pid: pid, field: field, svc: svc, group_id: group_id }, function(data) {
		var val;
		var label;
		var id;
		var evtid;
		var html = prefix;
		s.style.display='none';
		/* element 0 is the count */
		var case_id = data.split('|');
		if (case_id[0] == 0) {
			//Zero records returned
			html += 'none';
		} else {
			//More than zero records returned. Parse them.
			for (var i = 1; i <= case_id[0]; i++) {
				var idv = case_id[i].split(':');
				id = idv[0];
				label = fid + ': ' + id;
				if (idv.length == 3){
					//High or Low values
					val = idv[1];
					evtid = idv[2];
				} else {
					//Missing values
					val = idv[0];
					evtid = idv[1];
				}
				html += '<a target="_blank" style="text-decoration:underline;" onclick="$(\'#'+field+'-mperc\').html(\'\'); return true;" href="'+app_path_webroot+'DataEntry/index.php?pid='+pid+'&page='+formVar+'&event_id='+evtid+'&id='+id+'&fldfocus='+field+'#'+field+'-tr">'+val+'</a>, ';
			}
			html = html.substring(0,html.length-2);
		}	
		d.innerHTML = html;
		d.style.display='block';
	});
}
function PlotLoaded(divPlotId,spinId){
	s = document.getElementById(spinId);
	s.style.display = 'none';
	d = document.getElementById(divPlotId);
	d.style.display = 'inline';
}
function RefreshPlot(divPlotId,spinId,imgId){
	d = document.getElementById(divPlotId);
	s = document.getElementById(spinId);
	i = document.getElementById(imgId);
	im = s.childNodes[0]; /* image spinner */
	s.style.width = i.width + 'px';
	s.style.height= i.height + 'px';
	im.style.position  = 'relative';
	im.style.top = (Math.round(i.height / 2) - Math.round(im.height / 2))+ 'px';
	im.style.left = (Math.round(i.width / 2) - Math.round(im.width / 2)) + 'px';
	s.style.display = 'block';
	d.style.display = 'none';	
	// Add "refresh" flag to prevent the pacing when done when viewing whole page (prevents lag)
	// Also add random num in URL to ensure refresh (make sure does not get added multiple times from multiple refreshes)
	var rgx = new RegExp("&refresh=0\.\\d*");
	if (rgx.test(i.src)){
		i.src = i.src.replace(rgx,'&refresh=' + Math.random());
	} else {
		i.src += '&refresh=' + Math.random();
	}

}
function ToggleFormPullDown(){
	d = document.getElementById("dc-form-list");
	i = document.getElementById("dc-expand");

	if (d.style.display != 'none' && d.style.display != ''){
		d.style.display = 'none';
		i.src = i.src.replace('collapse','expand');
	} else {
		i.src = i.src.replace('expand','collapse');
		d.style.display = 'block';
	}
}
var __isFireFox = navigator.userAgent.match(/gecko/i);

//returns the absolute position of some element within document
function GetElementAbsolutePos(element) {
	var res = new Object();
	res.x = 0; res.y = 0;
	if (element !== null) {
		res.x = element.offsetLeft; 
		res.y = element.offsetTop; 
    	
		var offsetParent = element.offsetParent;
		var parentNode = element.parentNode;

		while (offsetParent !== null) {
			res.x += offsetParent.offsetLeft;
			res.y += offsetParent.offsetTop;

			if (offsetParent != document.body && offsetParent != document.documentElement) {
				res.x -= offsetParent.scrollLeft;
				res.y -= offsetParent.scrollTop;
			}
			//next lines are necessary to support FireFox problem with offsetParent
			if (__isFireFox) {
				while (offsetParent != parentNode && parentNode !== null) {
					res.x -= parentNode.scrollLeft;
					res.y -= parentNode.scrollTop;
					
					parentNode = parentNode.parentNode;
				}    
			}
			parentNode = offsetParent.parentNode;
			offsetParent = offsetParent.offsetParent;
		}
	}
    return res;
}
function TogglePositionDesc(x,id,disp){
	d = document.getElementById(id);
	$('#'+id).dialog('destroy');
	$('#'+id).dialog({ bgiframe: true, modal: true, width: 500, buttons: { Close: function() { $(this).dialog('close'); } } });
}



//Function that makes table draggable
function AddTableDrag() {
	var table2 = document.getElementById('draggable');
	var tableDnD2 = new TableDnD();
	tableDnD2.init(table2);
}

function showEv(day_num) {
	document.getElementById('hiddenlink'+day_num).style.display = 'none';
	document.getElementById('hidden'+day_num).style.display = 'block';
}

// Highlight a whole html table (by ID) for a specified amount of time
function highlightTable(tblid,event_time) {
	if (document.getElementById(tblid) == null) return;	
	$('#'+tblid+' td').effect('highlight',{},event_time);
}
//Highlight a table row (by ID) for a specified amount of time
function highlightTableRow(rowid,event_time) {
	$('#'+rowid+' td').effect('highlight',{},event_time);
}
//Highlight a table row (by jQuery object) for a specified amount of time
function highlightTableRowOb(ob,event_time) {
	ob.children('td').effect('highlight',{},event_time);
}

//Display "Working" div as progress indicator
function showProgress(show,ms) {
	// Set default time for fade-in/fade-out
	if (ms == null) ms = 500;
	if (!$("#working").length) 	$('body').append('<div id="working"><img src="'+app_path_images+'progress_circle.gif">&nbsp; Working...</div>');
	if (!$("#fade").length) 	$('body').append('<div id="fade"></div>');
	if (show) {
		centerProgressDiv();
		$("#working").fadeIn(ms);
		$('#fade').dialog({ bgiframe: false, modal: true, width: 0, height: 0, position: ['right','bottom'],
			open: function(){
				// Because the dialog will show, even though small, we need to hide it
				$('#fade').parent().hide();
			}
		});
	} else {
		setTimeout(function(){	
			$("#working").fadeOut(ms);
			$("#fade").dialog('destroy');
		},ms);
	}
}

//Center the "Working" div on the page
function centerProgressDiv() {
	var div = $('#working');
	div.css("position","absolute")
       .css("top", (($(window).height() - div.outerHeight()) / 2) + $(window).scrollTop() - 100 + "px")
       .css("left", (($(window).width() - div.outerWidth()) / 2) + $(window).scrollLeft() + "px");
}


//Place focus at end of text in an input Text field
function setCaretToEnd(el) {
	if (isIE) {
		if (el.createTextRange) {
			var v = el.value;
			var r = el.createTextRange();
			r.moveStart('character', v.length);
			r.select();
			return;
		}
		el.focus();
		return;
	}
	el.focus();
	return;
}

//Open pop-up for month/year/week conversion to days
function openConvertPopup() {
	$('#convert').dialog('destroy'); 
	var this_day = $('#day_offset').val();
	if (this_day != '') {
		$("#calc_year").val(this_day/365);
		$("#calc_month").val(this_day/30);
		$("#calc_week").val(this_day/7);
		$("#calc_day").val(this_day);
	} else {
		$("#calc_year").val('');
		$("#calc_month").val('');
		$("#calc_week").val('');
		$("#calc_day").val('');
	}
	var pos = $('#day_offset').offset();
	$('#convTimeBtn').addClass('ui-state-default ui-corner-all');
	$('#convert').dialog({ bgiframe: true, modal: true, width: 350, height: 210, position: [pos.left,pos.top - 220]	});
}
//Provide month/year/week conversion to days
function calcDay(el) {
	var isNumeric=function(symbol){var objRegExp=/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;return objRegExp.test(symbol);};
	if (!isNumeric(el.value)) {
		var oldval = el.value;
		$("#calc_year").val('');
		$("#calc_month").val('');
		$("#calc_week").val('');
		$("#calc_day").val('');
		$("#"+el.id).val(oldval);
	} else if (el.id == "calc_year") {
		$("#calc_month").val(el.value*12);
		$("#calc_week").val(el.value*52);
		$("#calc_day").val(Math.round(el.value*365));
	} else if (el.id == "calc_month") {
		$("#calc_year").val(el.value/12);
		$("#calc_week").val(el.value*4);
		$("#calc_day").val(Math.round(el.value*30));
	} else if (el.id == "calc_week") {
		$("#calc_year").val(el.value/52);
		$("#calc_month").val(el.value/4);
		$("#calc_day").val(Math.round(el.value*7));
	} else if (el.id == "calc_day") {
		$("#calc_year").val(el.value/365);
		$("#calc_month").val(el.value/30);
		$("#calc_week").val(el.value/7);
	}
	//Value of 9999 days is max
	if ($("#calc_day").val() != '' && isNumeric($("#calc_day").val())) {
		if ($("#calc_day").val() > 9999) $("#calc_day").val(9999);
	}
}


//Function for deleting an event/visit
function delVisit(arm,event_id,num_events_total) {	
	if (confirm('DELETE EVENT?\n\nAre you sure you wish to delete this event?')) {	
		if (status > 0) {
			if (!confirm('ARE YOU SURE?\n\nDeleting this event will DELETE ALL DATA collected for this event. Are you sure you wish to delete this event?')) {
				return;
			}
		}
		document.getElementById("progress").style.visibility = "visible";
		$.get(app_path_webroot+"Design/define_events_ajax.php", { pid: pid, arm: arm, action: 'delete', event_id: event_id },
			function(data) {
				document.getElementById("table").innerHTML = data;
				//Reload page if just added second event (so that all Longitudinal functions show)
				if (num_events_total == 2) {
					showProgress(1);
					setTimeout("window.location.reload();",300);
				}
			}
		);
	}
}
function delVisit2(arm,event_id,num_events_total) {	
	if (confirm('DELETE EVENT?\n\nAre you sure you wish to delete this event?')) {
		document.getElementById("progress").style.visibility = "visible";
		$.get(app_path_webroot+"Design/define_events_ajax.php", { pid: pid, arm: arm, action: 'delete', event_id: event_id },
			function(data) {
				document.getElementById("table").innerHTML = data;
				//Reload page if just added second event (so that all Longitudinal functions show)
				if (num_events_total == 2) {
					showProgress(1);
					window.location.reload();
				}
			}
		);
	}
}
//Function to begin editing an event/visit
function beginEdit(arm,event_id) {
	document.getElementById("progress").style.visibility = "visible";
	$.get(app_path_webroot+"Design/define_events_ajax.php", { pid: pid, arm: arm, edit: '', event_id: event_id },
		function(data) {
			document.getElementById("table").innerHTML = data;
			setCaretToEnd(document.getElementById("day_offset_edit"));
		}
	);
}
//Function for editing an event/visit
function editVisit(arm,event_id) {
	if (document.getElementById("offset_min_edit").value == "" || document.getElementById("offset_max_edit").value == "" || document.getElementById("day_offset_edit").value == "" || document.getElementById("descrip_edit").value == "") {
		alert("Please enter a value for Days Offset and Event Name");
		return;
	}
	document.getElementById("editbutton").disabled = true;
	document.getElementById("day_offset_edit").disabled = true;
	document.getElementById("offset_min_edit").disabled = true;
	document.getElementById("offset_max_edit").disabled = true;						
	document.getElementById("descrip_edit").disabled = true;
	document.getElementById("progress").style.visibility = "visible";
	$.post(app_path_webroot+"Design/define_events_ajax.php", { pid: pid, arm: arm, action: 'edit', event_id: event_id, offset_min: document.getElementById("offset_min_edit").value, offset_max: document.getElementById("offset_max_edit").value, day_offset: document.getElementById("day_offset_edit").value, descrip: document.getElementById("descrip_edit").value },
		function(data) {
			document.getElementById("table").innerHTML = data;
			highlightTableRow('design_'+event_id,2000);
		}
	);
}
//Function for adding an event/visit
function addEvents(arm,num_events_total) {
	if (document.getElementById("offset_min").value == "" || document.getElementById("offset_max").value == "" || document.getElementById("day_offset").value == "" || jQuery.trim(document.getElementById("descrip").value) == "") {
		alert("Please enter a value for Days Offset and Event Name");
		$("#descrip").val(jQuery.trim($("#descrip").val()));
		return;
	}
	// Check if event name is duplicated
	var event_names = "|";
	$("#event_table .evt_name").each(function(){
		event_names += jQuery.trim($(this).html()) + "|";
	});
	if (event_names.indexOf("|"+jQuery.trim($("#descrip").val())+"|") > -1) {
		alert("You have duplicated an existing event name. All Events must have unique names. Please enter a different value.");
		setTimeout(function () { $("#descrip").focus() }, 1);
		return;
	}
	document.getElementById("progress").style.visibility = "visible";
	document.getElementById("addbutton").disabled = true;
	document.getElementById("day_offset").disabled = true;	
	document.getElementById("offset_min").disabled = true;
	document.getElementById("offset_max").disabled = true;					
	document.getElementById("descrip").disabled = true;
	$.get(app_path_webroot+"Design/define_events_ajax.php", { pid: pid, arm: arm, action: 'add', offset_min: document.getElementById("offset_min").value, offset_max: document.getElementById("offset_max").value, day_offset: document.getElementById("day_offset").value, descrip: document.getElementById("descrip").value },
		function(data) {
			$("#table").html(data);
			highlightTableRow('design_'+$("#new_event_id").val(), 2000);
			//Reload page if just added second event (so that all Longitudinal functions show)
			if (num_events_total == 1) {
				showProgress(1);
				setTimeout("window.location.reload();",300);
			} else {
				// If add event for first time on page, show tooltip reminder about designating forms
				if (hasShownDesignatePopup == 0) {
					$("#popupTrigger").trigger('mouseover');
					hasShownDesignatePopup++;
				}
			}
		}
	);
}


// Create/Edit Project form manipulation
function setFieldsCreateForm(slide_effect) {

	// Disble blind toggle sliding effect?
	if (slide_effect == null) slide_effect = true;
	var slow = (slide_effect) ? 'slow' : 0;
	
	// Check if step 1 is checked
	if ($('#projecttype1').prop('checked') || $('#projecttype2').prop('checked') ) {
		// Forms or Survey+Forms
		$('#repeatforms_chk1').removeAttr('disabled');
		$('#repeatforms_chk2').removeAttr('disabled');
		$('#step2').fadeTo(slow, 1);
	} else {
		$('#repeatforms_chk1').prop('disabled', 'disabled');
		$('#repeatforms_chk1').prop('checked',false);
		$('#repeatforms_chk2').prop('disabled', 'disabled');
		$('#repeatforms_chk2').prop('checked',false);
		if ($('#projecttype0').prop('checked')) {
			// Single Survey is selected
			if (slide_effect) {
				$('#step2').hide('fade',slow);
				$('#additional_options').hide('fade',slow);
			} else {
				$('#step2').hide();
				$('#additional_options').hide();
			}
			// Uncheck all checkboxes in "Additional options"
			$('#additional_options input[type="checkbox"]').prop('checked',false);
		} else {
			$('#step2').fadeTo('fast', 0.2);
			$('#additional_options').fadeTo('fast', 0.2);
		}
	}
	
	// Check if step 2 is checked
	if ($('#repeatforms_chk2').prop('checked')) {
		$('#step3').fadeTo(slow, 1);
		$('#scheduling_chk').removeAttr('disabled');
	} else {
		$('#scheduling_chk').prop('disabled', 'disabled');
		$('#scheduling_chk').prop('checked', false);
		$('#step3').fadeTo('fast', 0.2);
	}
	
	// Show additional options if step 2 is selected
	if ($('#repeatforms_chk1').prop('checked') || $('#repeatforms_chk2').prop('checked')) {
		$('#additional_options').fadeTo(slow, 1);
		$('#additional_options input[type="checkbox"]').prop('disabled',false);
	} else {
		$('#additional_options').fadeTo('fast', 0.2);
		$('#additional_options input[type="checkbox"]').prop('checked',false).prop('disabled',true);
	}
	
	// Surveys enabled
	if ($('#datacollect_chk').prop('checked') && $('#projecttype0').prop('checked')) {
		$('#surveys_enabled').val(2);
	} else if ($('#datacollect_chk').prop('checked') && $('#projecttype2').prop('checked')) {
		$('#surveys_enabled').val(1);
	} else {
		$('#surveys_enabled').val(0);
	}
	// Repeatforms field
	$('#repeatforms').val( ((($('#datacollect_chk').prop('checked') && $('#repeatforms_chk2').prop('checked')) || $('#scheduling_chk').prop('checked')) ? 1 : 0) );
	// Scheduling field
	$('#scheduling').val( (($('#scheduling_chk').prop('checked')) ? 1 : 0) );
	// Randomization field
	$('#randomization').val( (($('#randomization_chk').prop('checked')) ? 1 : 0) );
}

// Check values before submission on Create/Edit Project form
function setFieldsCreateFormChk() {
	if ($('#app_title').val().length < 1) {
		simpleDialog('Please provide a project title.','Missing title');
		return false;
	}
	if (page != "ProjectGeneral/copy_project_form.php") {
		if ( 
			(!$('#projecttype0').prop('checked') && !$('#projecttype1').prop('checked') && !$('#projecttype2').prop('checked'))
			|| ( ( $('#projecttype1').prop('checked') || $('#projecttype2').prop('checked') ) && ( !$('#repeatforms_chk1').prop('checked') && !$('#repeatforms_chk2').prop('checked') ) ) 
		   ) {
			simpleDialog('Please fill out all the fields and steps.','Some steps not completed');
			return false;
		}
	}
	if ($('#purpose').val() == '' || ($('#purpose').val() == '1' && $('#purpose_other_text').val() == '')) {
		simpleDialog('Please specify the purpose for creating this project','Specify purpose');
		return false;
	}
	var numChkBoxes = $('#purpose_other_research input[type=checkbox]').length - 1; // Number of Research checkboxes
	if ($('#purpose').val() == '2'){
		var numChecked = 0;
		for (i = 0; i <= numChkBoxes; i++) {
			if (document.getElementById('purpose_other['+i+']').checked) {
				numChecked++;
			}
		}
		if (numChecked < 1)	{
			simpleDialog('Please specify one or more areas of research for this project.','Specify research area');
			return false;
		}
	} else {
		for (i = 0; i <= numChkBoxes; i++) {
			document.getElementById('purpose_other['+i+']').checked = false;
		}	
	}
	// If "template" option is selected, make sure the user has chosen a template from the table
	if ($('input[name="project_template_radio"]').length && $('input[name="project_template_radio"]:checked').val() == '1'
		&& !isNumeric($('input[name="copyof"]:checked').val())) {
		simpleDialog('You have not selected a project template from the list. Please select a template.','Select a template');
		return false;
	}
	return true;
}

// Change status of project
function doChangeStatus(archive,super_user_action,user_email,randomization,randProdAllocTableExists) {
	randomization = (randomization == null) ? 0 : (randomization == 1 ? 1 : 0);
	randProdAllocTableExists = (randProdAllocTableExists == null) ? 0 : (randProdAllocTableExists == 1 ? 1 : 0);
	var delete_data = 0;
	if (randomization == 1 && randProdAllocTableExists == 0) {
		alert('ERROR: This project is utilizing the randomization module and cannot be moved to production status yet because a randomization allocation table has not been uploaded for use in production status. Someone with appropriate rights must first go to the Randomization page and upload an allocation table.');
		return false;
	}
	if ($('#delete_data:checked').val() !== null) {
		if ($('#delete_data:checked').val() == "on") {
			delete_data = 1;
			// Make user confirm that they want to delete data
			if (archive == 0 && super_user_action != 'move_to_prod') { // Don't show prompt when super users are processing users' requests to push to prod
				if (!confirm("DELETE ALL DATA?\n\nAre you sure you really want to delete all existing data when the project is moved to production? If not, click Cancel and uncheck the checkbox inside the red box.")) {
					return false;
				}
			}
		} else if (randomization) {
			// If not deleting all data BUT using randomization module, remind that the randomization field's values will be erased
			if (!confirm("WARNING: RANDOMIZATION FIELD'S DATA WILL BE DELETED\n\nSince you have enabled the randomization module, please be advised that if any records contain a value for your randomization field (i.e. have been randomized), those values will be PERMANENTLY DELETED once the project is moved to production. (Only data for that field will be deleted. Other fields will not be touched.) Is this okay?")) {
				return false;
			}
		}
	}
	$(":button:contains('YES, Move to Production Status')").html('Please wait...');
	$(":button:contains('Cancel')").css("display","none");
	$.get(app_path_webroot+'ProjectGeneral/change_project_status.php', { pid: pid, do_action_status: 1, archive: archive, delete_data: delete_data },
		function(data) {
			if (archive == 1) $('#archive_dialog').dialog('destroy'); else $('#status_dialog').dialog('destroy');
			if (data != '0') {
				if (archive == 1) {
					alert("The project has now been ARCHIVED.\n\n(You will now be redirected back to the Home page.)");
					window.location.href = app_path_webroot_full+'index.php?action=myprojects';
				} else {
					if (data == '1') {
						if (super_user_action == 'move_to_prod') {
							$.get(app_path_webroot+'ProjectGeneral/notifications.php', { pid: pid, type: 'move_to_prod_user', this_user_email: user_email },
								function(data2) {							
									window.location.href = app_path_webroot_full+'index.php?action=approved_movetoprod&user_email='+user_email+addGoogTrans();
								}
							);
						} else {
							window.location.href = app_path_webroot+'ProjectSetup/index.php?pid='+pid+'&msg=movetoprod'+addGoogTrans();
						}
					} else {
						alert("The project has now been set to INACTIVE status.\n\n(The page will now be reloaded to reflect the change.)");
						window.location.href = app_path_webroot+'index.php?pid='+pid+addGoogTrans();
					}
				}
			} else {
				alert('ERROR: The action could not be performed.');
			}
		}
	);
}

// Check if REDCap needs to upgrade (i.e. has new version folder on web server already)
function version_check() {
	$.get(app_path_webroot+'ControlCenter/version_check.php', { },
		function(data) {
			if (data != '0') {				
				setTimeout(function(){ 
					$('#version_check').html(data);
					$('#version_check').slideToggle(500); 
				},500);
			}
		}
	);
}

// Add new Super User
function add_super_user() {
	var new_super_user = $('#new_super_user').val();
	if (new_super_user.length < 1) return;
	document.getElementById('add_super_btn').disabled = true;
	document.getElementById('new_super_user').disabled = true;
	$.post(app_path_webroot+'ControlCenter/user_controls_ajax.php?user_view=super_user&view=user_controls&action=add_super_user&username='+new_super_user, { },
		function(data) {
			if (data == '0') {
				alert(woops);
				window.location.href = app_path_webroot+page;
			} else {
				window.location.href = app_path_webroot+page+'?saved=1';
			}
		}
	);
}
// Remove Super User
function remove_super_user(super_user) {
	if (confirm("Remove \""+super_user+"\" as a Super User?")) {
		$.post(app_path_webroot+'ControlCenter/user_controls_ajax.php?user_view=super_user&view=user_controls&action=remove_super_user&username='+super_user, { },
			function(data) {
				if (data == '0') {
					alert(woops);
					window.location.href = app_path_webroot+page;
				} else {
					highlightTableRow('su-'+super_user,1500);
					setTimeout(function(){
						$('#su-'+super_user).remove();
						$('#new_super_user').append('<option value="'+super_user+'">'+super_user+'</option>');
					},500);
				}
			}
		);
	}
}
// View User list on User Controls page in Control Center
function view_user(username) {
	// Close userlist dialog pop-up, if opened
	$('#userList').dialog('destroy');
	
	if (username.length < 1) return;
	$('#view_user_progress').css({'visibility':'visible'});
	$('#user_search_btn').prop('disabled',true);
	$('#user_search').prop('disabled',true);
	$.get(app_path_webroot+'ControlCenter/user_controls_ajax.php', { user_view: 'view_user', view: 'user_controls', username: username },
		function(data) {
			$('#view_user_div').html(data);
			highlightTable('indv_user_info',1000);
			enableUserSearch();
		}
	);
}

// For selecting values for merging in Data Comparison Tool when using Double Data Entry module
function dataCmpChk(col,field,val) {
	if (col < 3) {
		eval('document.create_new.'+field+'.value = val; document.create_new.'+field+'___RAD3.disabled = true;');
		changeSty(field+'___RAD3','data');
		if (col == 1) {
			changeSty(field+'___RAD1','header');
			changeSty(field+'___RAD2','data');
		} else if (col == 2) {
			changeSty(field+'___RAD1','data');
			changeSty(field+'___RAD2','header');
		} 
	} else if (col == 3) {
		eval('document.create_new.'+field+'.value = ""; document.create_new.'+field+'___RAD3.disabled = false;');
		changeSty(field+'___RAD1','data');
		changeSty(field+'___RAD2','data');
		changeSty(field+'___RAD3','header');
	}
}

// Round corners of an html element
function roundCorners(element) {
	var size = 20;
	var settings = {
		tl: { radius: size },
		tr: { radius: size },
		bl: { radius: size },
		br: { radius: size },
		antiAlias: true
	}
	curvyCorners(settings, element);
}

// Check if vertical scrollbars exist
function IsYScrollBarExist(ObjectId) {
    Object = document.getElementById(ObjectId);
	Object.scrollTop = 1;
	if (Object.scrollTop > 0) {
		Object.scrollTop = 0; 
		return true;
	} else {
		return false;
	}
}
// Check if horizontal scrollbars exist
function IsXScrollBarExist(ObjectId) {
	Object = document.getElementById(ObjectId);
	Object.scrollLeft=1;
	if (Object.scrollLeft>0) {Object.scrollLeft=0; return true;}
	else {return false;}
}

// Grow a textarea field on data entry form when "expand" link is clicked
function growTextarea(field) {
	if ($('#'+field).val().length > 0) {
		$('#'+field+'-expand').css({'visibility':'hidden'});
		$('#'+field).autogrow();
	}
}

// Open pop-up window for viewing videos
function popupvid(video,title) {
	if (title == null) title = "REDCap Video";
	window.open('https://redcap.vanderbilt.edu/consortium/videoplayer.php?video='+video+'&title='+title+'&referer='+server_name,'myWin','width=1050, height=800, toolbar=0, menubar=0, location=0, status=0, scrollbars=1, resizable=1');
}

// Shared Library functionality
function shareForm() {
	window.location.href = app_path_webroot+"SharedLibrary/index.php?pid="+pid+"&page="+$('#form_names').val();
}
function loadSharedForm() {
	window.location.href = shared_lib_browse_url;
}

// Report Builder functionality to add new row to table
function addRow(thisFieldNum) {
	if ($('#dropdown-operator_'+thisFieldNum).length) {
		if ($('#dropdown-operator_'+thisFieldNum).prop('disabled')) {
			document.getElementById('num_query_fields').value++; 
			document.getElementById('query_table').innerHTML = document.getElementById('query_table').innerHTML.substring(0,document.getElementById('query_table').innerHTML.length-16) + new_row.replace(/{__fieldnum__}/ig,document.getElementById('num_query_fields').value) + '</tbody></table>'; 
			for (var b = 1; b <= document.getElementById('num_query_fields').value; b++) {
				document.getElementById('dropdown-field_'+b).value = document.getElementById('allfield_'+b).value;
				document.getElementById('dropdown-operator_'+b).value = document.getElementById('operator_'+b).value;
				document.getElementById('visible-condvalue_'+b).value = document.getElementById('condvalue_'+b).value;
			} 
			document.getElementById('visible-TITLE').value = document.getElementById('__TITLE__').value;
		}
	}
}

// Retrieve variable's value from URL
function getParameterByName(name,use_parent_window) {
	if (use_parent_window == null) use_parent_window = false;
	var loc = (use_parent_window ? window.opener.location.href : window.location.href);
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( loc );
	if( results == null )
		return "";
	else
		return results[1];
}

// Get, set, and delete cookies
function getCookie(c_name) {
	if (document.cookie.length>0)
	  {
	  c_start=document.cookie.indexOf(c_name + "=");
	  if (c_start!=-1)
		{
		c_start=c_start + c_name.length+1;
		c_end=document.cookie.indexOf(";",c_start);
		if (c_end==-1) c_end=document.cookie.length;
		return unescape(document.cookie.substring(c_start,c_end));
		}
	  }
	return "";
}
function deleteCookie(name) {
	document.cookie = name + "=" + ";expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/";
}
// Set cookie with expiration at day-level
function setCookie(c_name,value,expiredays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+"; path=/";
}
// Set cookie with expiration at minute-level
function setCookieMin(c_name,value,expiremin) {
	var exdate = new Date();
	var exdatemin = Math.floor(expiremin);
	var exdatesec = round((expiremin-exdatemin)*60);
	exdate.setMinutes(exdate.getMinutes()+exdatemin,exdate.getSeconds()+exdatesec,0);
	document.cookie=c_name+ "=" +escape(value)+((expiremin==null) ? "" : ";expires="+exdate.toGMTString())+"; path=/";
}

// Auto-suggest for entering new records on data entry page
function suggest(inputString,arm){
	if(inputString.length == 0) {
		$('#suggestions').fadeOut();
	} else {
	$('#inputString').addClass('load');
		$.post(app_path_webroot+'DataEntry/auto_complete.php?pid='+pid+'&arm='+arm, {query: ""+inputString+""}, function(data){
			if(data.length >0) {
				$('#suggestions').fadeIn();
				$('#suggestionsList').html(data);
				$('#inputString').removeClass('load');
			}
		});
	}
}

// Chack Two-byte character (for Japanese)
function checkIsTwoByte(value) {
	for (var i = 0; i < value.length; ++i) {
		var c = value.charCodeAt(i);
		if (c >= 256 || (c >= 0xff61 && c <= 0xff9f)) {
			return true;
		}
	}
	return false;
}

// After running branching logic, hide any section headers in which all fields in the section have been hidden
function hideSectionHeaders() {
	var this_id;
	var this_display;
	var lastSH = "";
	var numFields = 0;
	var numFieldsHidden = 0;
	var tbl = document.getElementById("form_table");
	var rows = tbl.tBodies[0].rows; //getElementsByTagName("tr")
	var getClassTerm = ((isIE && vIE()<8) ? 'className' : 'class'); // Weird issues with IE
	var matrixGroup = "";
	var lastMatrixGroup = "";
	var matrixGroups = new Array();
	var fieldIsHidden;
	var isSurveyPage = (page == 'surveys/index.php');
	//Get index somewhere in middle of table
	for (var i=0; i<rows.length; i++) {
		// Get id for this row
		this_id = rows[i].getAttribute("id");
		
		// If this row has an id, then check if SH, matrix header, matrix field, or regular field
		if (this_id != null && this_id.indexOf("-tr") > 0) {
			
			// If a Section Header, then check if previous section's fields were all hidden. If so, then hide the SH too.
			if (this_id.indexOf("-sh-tr") > 0) {
				if (lastSH != "") {
					if (numFieldsHidden == numFields && numFields > 0) {
						// Hide SH
						document.getElementById(lastSH).style.display = 'none';
					} else {
						// Possibly show SH OR do nothing
						var showit = true;
						if (isSurveyPage) {
							// Survey page: Treat differently since it contains fields on the form that might need to remain hidden (because of multi-paging)
							if (document.getElementById(lastSH).getAttribute(getClassTerm) != null) {
								if (document.getElementById(lastSH).getAttribute(getClassTerm).indexOf('hide') > -1) {
									// If row has class 'hide', then keep hidden
									showit = false;
								}
							}
						}
						// Make SH visible (in case it was hidden)
						if (showit) document.getElementById(lastSH).style.display = (isIE ? 'block' : 'table-row');
					}
				}
				// Reset values for next section
				lastSH = this_id;
				numFields = 0;
				numFieldsHidden = 0;
				matrixGroup = "";
			} 
			
			// If a Matrix Header, then ?????????????. If so, then hide the Matrix Header too.
			else if (this_id.indexOf("-mtxhdr-tr") > 0) {
				matrixGroup = lastMatrixGroup = document.getElementById(this_id).getAttribute('mtxgrp');
				matrixGroups[matrixGroup] = 0;
			}
			
			// If a normal field, then check its display value AND if it's in a matrix group
			else {
				// Check if hidden
				fieldIsHidden = document.getElementById(this_id).style.display == "none";
				if (fieldIsHidden) numFieldsHidden++;
				// Count field for this section
				numFields++;
				// If field is in a matrix group, get group name
				if (document.getElementById(this_id).getAttribute('mtxgrp') != null) {
					matrixGroup = document.getElementById(this_id).getAttribute('mtxgrp');
					if (!fieldIsHidden) matrixGroups[matrixGroup]++;
				}
			}
			
		}
	}
	
	// For survey pages only: Check if we need to hide the last SH on the page (will not hide by itself with current logic)
	if (isSurveyPage && lastSH != "") {
		if (numFieldsHidden == numFields && numFields > 0) {
			// Hide SH
			document.getElementById(lastSH).style.display = 'none';
		} else {
			// Possibly show SH OR do nothing
			var showit = true;
			if (isSurveyPage) {
				// Survey page: Treat differently since it contains fields on the form that might need to remain hidden (because of multi-paging)
				if (document.getElementById(lastSH).getAttribute(getClassTerm) != null) {
					if (document.getElementById(lastSH).getAttribute(getClassTerm).indexOf('hide') > -1) {
						// If row has class 'hide', then keep hidden
						showit = false;
					}
				}
			}
			// Make SH visible (in case it was hidden)
			if (showit) document.getElementById(lastSH).style.display = (isIE ? 'block' : 'table-row');
		}
	}
	
	// If any matrix groups have all their fields hidden (i.e. value=0), then hide the matrix header
	for (var grpname in matrixGroups) {
		var mtxhdr_id = grpname+'-mtxhdr-tr';
		if (matrixGroups[grpname] == 0) {
			// Hide matrix header
			document.getElementById(mtxhdr_id).style.display = 'none';
		} else {
			// Possibly show matrix header OR do nothing
			var showit = true;
			if (isSurveyPage) {
				// Survey page: Treat differently since it contains fields on the form that might need to remain hidden (because of multi-paging)
				if (document.getElementById(mtxhdr_id).getAttribute(getClassTerm) != null) {
					if (document.getElementById(mtxhdr_id).getAttribute(getClassTerm).indexOf('hide') > -1) {
						// If row has class 'hide', then keep hidden
						showit = false;
					}
				}
			}						
			// Make matrix header visible (in case it was hidden)
			if (showit) document.getElementById(mtxhdr_id).style.display = (isIE ? 'block' : 'table-row');
		}
	}
}

// Data history icon onmouseover/out actions
function dh1(ob) {
	ob.src = app_path_images+'history_active.png';
}
function dh2(ob) {
	ob.src = app_path_images+'history.png';
}

// Open pop-up dialog for viewing data history of a field
function dataHist(field,event_id,record) {
	// Get window scroll position before we load dialog content
	var windowScrollTop = $(window).scrollTop();
	if (record == null) record = decodeURIComponent(getParameterByName('id'));
	$('#data_history').dialog('destroy');
	$('#dh_var').html(field);
	$('#data_history2').html('<p><img src="'+app_path_images+'progress_circle.gif" class="imgfix"> Loading...</p>');
	$('#data_history').dialog({ bgiframe: true, title: 'Data History for variable "'+field+'" for record "'+record+'"', modal: true, width: 650, zIndex: 3999, buttons: { 
		Close: function() { $(this).dialog('destroy'); } }
	});
	$.post(app_path_webroot+"DataEntry/data_history_popup.php?pid="+pid, {field_name: field, event_id: event_id, record: record }, function(data){
		$('#data_history2').html(data);
		// Adjust table height within the dialog to fit
		var tableHeightMax = 300;
		if ($('#data_history3').height() > tableHeightMax) {
			$('#data_history3').height(tableHeightMax);					
			$('#data_history3').scrollTop( $('#data_history3')[0].scrollHeight );
			// Reset window scroll position, if got moved when dialog content was loaded
			$(window).scrollTop(windowScrollTop);
			// Re-center dialog
			$('#data_history').dialog('option', 'position', { my: "center", at: "center", of: window });
		}
		// Highlight the last row in DH table
		if ($('table#dh_table tr').length > 1) {
			//alert( $('table#dh_table tr:last').html() );
			setTimeout(function(){
				highlightTableRow('dh_table_last_tr', 2500);
			},300);
		}
	});
}

// Data Cleaner icon onmouseover/out actions
function dc1(ob) {
	ob.src = app_path_images+'balloon_left.png';
}
function dc2(ob) {
	ob.src = app_path_images+'balloon_left_bw2.gif';
}

// Modify the page's URL in browser's address bar *without* reloading the page
function modifyURL(newUrl) {
	if (window.history.pushState && window.history.replaceState) {
		window.history.pushState({}, document.title, newUrl);
	}
}

// Open DRW Introduction pop-up
function openDataResolutionIntroPopup() {
	$.post(app_path_webroot+"DataQuality/data_resolution_intro_popup.php?pid="+pid, { }, function(data){
		var json_data = jQuery.parseJSON(data);
		simpleDialog(json_data.content,json_data.title,'drw_intro_popup',700);
		fitDialog($('#drw_intro_popup'));
	});
}

// Reload the Data Resolution Log table in Data Quality module
function dataResLogReload(show_progress) {
	var status_type = $('#choose_status_type').val();
	var field_rule = $('#choose_field_rule').val();
	var group_id = ($('#choose_dag').length) ? $('#choose_dag').val() : '';
	var event_id = ($('#choose_event').length) ? $('#choose_event').val() : '';
	var assigned_user_id = ($('#choose_assigned_user').length) ? $('#choose_assigned_user').val() : '';
	var query_string = 'pid='+pid+'&status_type='+status_type+'&field_rule_filter='+field_rule;
	if (group_id != '') query_string += '&group_id='+group_id;
	if (event_id != '') query_string += '&event_id='+event_id;
	if (assigned_user_id != '') query_string += '&assigned_user_id='+assigned_user_id;
	show_progress = !!show_progress;
	if (show_progress) showProgress(1);
	$.post(app_path_webroot+'DataQuality/resolve_ajax.php?'+query_string,{},function(data){ 
		// Parse JSON
		var json_data = jQuery.parseJSON(data);
		// Replace table html
		$('#resTableParent').html(json_data.html);
		// Update count in tab badge
		$('#dq_tab_issue_count').html(json_data.num_issues);
		// Initialize other things
		initWidgets(true);
		if (show_progress) showProgress(0);
		// Modify URL without reloading page
		modifyURL(app_path_webroot+page+'?'+query_string);
	});
}

// Open pop-up dialog for viewing data resolution for a field
function dataResPopup(field,event_id,record,existing_record,rule_id) {
	if (record == null) record = getParameterByName('id');
	if (existing_record == null) existing_record = $('form#form input[name="hidden_edit_flag"]').val();
	if (rule_id == null) rule_id = '';
	// Hide floating field tooltip on form (if visible)
	$('#tooltipDRWsave').hide();
	// Get dialog content via ajax
	$.post(app_path_webroot+"DataQuality/data_resolution_popup.php?pid="+pid, { rule_id: rule_id, action: 'view', field_name: field, event_id: event_id, record: record, existing_record: existing_record }, function(data){
		// Parse JSON
		var json_data = jQuery.parseJSON(data);
		if (existing_record == 1) {
			// Get window scroll position before we load dialog content
			var windowScrollTop = $(window).scrollTop();
			// Load the dialog content
			initDialog('data_resolution');
			$('#data_resolution').html(json_data.content);
			initWidgets();
			// Set dialog width
			var dialog_width = (data_resolution_enabled == '1') ? 650 : 750;
			// Open dialog
			$('#data_resolution').dialog({ bgiframe: true, title: json_data.title, modal: true, width: dialog_width, zIndex: 3999, destroy: 'fade' });
			// Adjust table height within the dialog to fit
			var existingRowsHeightMax = 300;
			if ($('#existingDCHistoryDiv').height() > existingRowsHeightMax) {
				$('#existingDCHistoryDiv').height(existingRowsHeightMax);					
				$('#existingDCHistoryDiv').scrollTop( $('#existingDCHistoryDiv')[0].scrollHeight );
				// Reset window scroll position, if got moved when dialog content was loaded
				$(window).scrollTop(windowScrollTop);
				// Re-center dialog
				$('#data_resolution').dialog('option', 'position', { my: "center", at: "center", of: window });
			}
		} else {
			// If record does not exist yet, then give warning that will not work
			initDialog('data_resolution');
			$('#data_resolution').css('background-color','#FFF7D2').html(json_data.content);
			initWidgets();
			$('#data_resolution').dialog({ bgiframe: true, title: json_data.title, modal: true, width: 500, zIndex: 3999 });
		}
	});
}

// Save new values from data cleaner pop-up dialog for individual field
function dataResolutionSave(field,event_id,record,rule_id) {
	// Set vars
	if (record == null) record = getParameterByName('id');
	if (rule_id == null) rule_id = '';
	// Check input values
	var comment = trim($('#dc-comment').val());
	//alert( $('#data_resolution input[name="dc-status"]:checked').val() );return;
	if (comment.length == 0 && ($('#data_resolution input[name="dc-status"]').length == 0 
		|| ($('#data_resolution input[name="dc-status"]').length && $('#data_resolution input[name="dc-status"]:checked').val() != 'VERIFIED'))) {
		simpleDialog("A comment is required. Please enter a comment.","ERROR: Enter comment");
		return;
	}
	var query_status = ($('#data_resolution input[name="dc-status"]:checked').length ? $('#data_resolution input[name="dc-status"]:checked').val() : '');
	if ($('#dc-response').length && query_status != 'CLOSED' && $('#dc-response').val().length == 0) {
		simpleDialog("A response is required. Please select a response option from the drop-down.","ERROR: Select response option");
		return;
	}
	var response = (($('#dc-response').length && query_status != 'CLOSED') ? $('#dc-response').val() : '');
	// Note if user is sending query back for further attention (rather than closing it)
	var send_back = (query_status != 'CLOSED' && $('#dc-response_requested-closed').length) ? 1 : 0;
	// Determine if we're re-opening the query (i.e. if #dc-response_requested is a checkbox and assign user drop-down is not there)
	var reopen_query = ($('#dc-response_requested').length && $('#dc-response_requested').attr('type') == 'checkbox' && $('#dc-assigned_user_id').length == 0) ? 1 : 0;
	// If user is responding to query, check for file uploaded
	var upload_doc_id = '';
	var delete_doc_id = '';
	delete_doc_id_count = 0;
	if ($('#drw_upload_file_container input.drw_upload_doc_id').length > 0) {
		// Loop through all doc_id's available
		delete_doc_id = new Array();
		$('#drw_upload_file_container input.drw_upload_doc_id').each(function(){
			if ($(this).attr('delete') == 'yes') {
				delete_doc_id[delete_doc_id_count++] = $(this).val();
			} else {
				upload_doc_id = $(this).val();
			}
		});
		delete_doc_id = delete_doc_id.join(",");
	}
	// Disable all input fields in pop-up while saving
	$('#newDCHistory :input').prop('disabled',true);
	$('#data_resolution .jqbutton').button('disable');
	// Display saving icon
	$('#drw_saving').removeClass('hidden');
	// Get start time before ajax call is made
	var starttime = new Date().getTime();
	// Make ajax call
	$.post(app_path_webroot+"DataQuality/data_resolution_popup.php?pid="+pid, { action: 'save', field_name: field, event_id: event_id, record: record,
		comment: comment, 
		response_requested: (($('#dc-response_requested').length && $('#dc-response_requested').prop('checked')) ? 1 : 0),
		upload_doc_id: upload_doc_id, delete_doc_id: delete_doc_id,
		assigned_user_id: (($('#dc-assigned_user_id').length) ? $('#dc-assigned_user_id').val() : ''),
		status: query_status, send_back: send_back,
		response: response, reopen_query: reopen_query,
		rule_id: rule_id
	}, function(data){
		if (data=='0') {
			alert(woops);
		} else {
			// Parse JSON
			var json_data = jQuery.parseJSON(data);
			// Update new timestamp for saved row (in case different)
			$('#newDCnow').html(json_data.tsNow);
			// Display saved icon
			$('#drw_saving').addClass('hidden');
			$('#drw_saved').removeClass('hidden');
			// Set bg color of last row to green
			$('table#newDCHistory tr td.data').css({'background-color':'#C1FFC1'});
			// Page-dependent actions
			if (page == 'DataQuality/field_comment_log.php') {
				// Field Comment Log page: reload table
				reloadFieldCommentLog();
			} else if (page == 'DataQuality/resolve.php') {
				// Data Quality Resolve Issues page: reload table
				dataResLogReload();
			} else if (page == 'DataQuality/index.php') {
				// Update count in tab badge
				$('#dq_tab_issue_count').html(json_data.num_issues);
			}
			// Update icons/counts
			if (page == 'DataEntry/index.php' || page == 'DataQuality/index.php') {
				// Data Quality Find Issues page: Change ballon icon for this field/rule result
				$('#dc-icon-'+rule_id+'_'+field+'__'+record).attr('src', json_data.icon);
				// Update number of comments for this field/rule result
				$('#dc-numcom-'+rule_id+'_'+field+'__'+record).html(json_data.num_comments);
				// Data Entry page: Change ballon icon for field
				$('#dc-icon-'+field).attr('src', json_data.icon).attr('onmouseover', '').attr('onmouseout', '');
			}
			// CLOSE DIALOG: Get response time of ajax call (to ensure closing time is always the same even with longer requests)
			var endtime = new Date().getTime() - starttime;
			var delaytime = 1500;
			var timeouttime = (endtime >= delaytime) ? 1000 : (delaytime - endtime);
			setTimeout(function(){
				// Close dialog with fade effect
				$('#data_resolution').dialog('option', 'hide', {effect:'fade', duration: 500}).dialog('close');
				// Highlight table row in form (to emphasize where user was) - Data Entry page only
				if (page == 'DataEntry/index.php') {
					setTimeout(function(){
						highlightTableRow(field+'-tr',3000);
					},200);
				}
				// Destroy the dialog so that fade effect doesn't persist if reopened
				setTimeout(function(){
					$('#data_resolution').dialog('destroy');
				},500);
			}, timeouttime);
		}
	});
}

// Data Resolution Workflow: Open dialog for uploading files (for query response)
function openDataResolutionFileUpload(record, event_id, field, rule_id) {
	// Reset all hidden/non-hidden divs
	$('#drw_upload_success').hide();
	$('#drw_upload_failed').hide();
	$('#drw_upload_progress').hide();
	$('#drw_upload_form').show();
	// Reset file input field (must replace it because val='' won't work)
	var fileInput = $('#dc-upload_doc_id-container').html();
	$('#dc-upload_doc_id-container').html('').html(fileInput);
	// Add values to the hidden inputs inside the dialog
	$("#drw_file_upload_popup input[name='record']").val(record);
	$("#drw_file_upload_popup input[name='event_id']").val(event_id);
	$("#drw_file_upload_popup input[name='field']").val(field);
	$("#drw_file_upload_popup input[name='rule_id']").val(rule_id);
	// Open dialog
	$("#drw_file_upload_popup").dialog({ bgiframe: true, modal: true, width: 450, buttons: {
		"Cancel": function() { $(this).dialog("close"); },
		"Upload document": function() { $('form#drw_upload_form').submit(); }
	}});
}
// Data Resolution Workflow: Delete uploaded file (for query response)
function dataResolutionDeleteUpload() {
	// If any hidden input doc_id's already exist, they must be deleted, so keep them but mark them for deletion
	$('#drw_upload_file_container input.drw_upload_doc_id').attr('delete','yes');
	// Show "add new document" link
	$('#drw_upload_new_container').show();
	// Hide "remove document" link
	$('#drw_upload_remove_doc').hide();
	// Hide doc_name link
	$('#dc-upload_doc_id-label').html('').hide();
}
// Data Resolution Workflow: Start uploading file (for query response)
function dataResolutionStartUpload() {
	$('#drw_upload_form').hide();
	$('#drw_upload_progress').show();
}
// Data Resolution Workflow: Stop uploading file (for query response)
function dataResolutionStopUpload(doc_id,doc_name) {
	$('#drw_file_upload_popup #drw_upload_form').hide();
	$('#drw_file_upload_popup #drw_upload_progress').hide();
	if (doc_id > 0) {
		// Success
		$('#drw_file_upload_popup #drw_upload_success').show();
		// Add doc_id as hidden input in hidden div container inside dialog
		$('#drw_upload_file_container').append('<input type="hidden" class="drw_upload_doc_id" value="'+doc_id+'">');
		// Hide "add new document" link
		$('#drw_upload_new_container').hide();
		// Show "remove document" link
		$('#drw_upload_remove_doc').show();
		// Add doc_name to hidden link
		$('#dc-upload_doc_id-label').html(doc_name).show();
	} else {
		// Failed
		$('#drw_file_upload_popup #drw_upload_failed').show();
	}
	// Add close button
	$('#drw_file_upload_popup').dialog('option', 'buttons', { "Close": function() { $(this).dialog("close"); } });	
}


// Data Quality: Display the explainExclude dialog
function explainDQExclude() {
	$('#explain_exclude').dialog({ bgiframe: true, modal: true, width: 500, 
		buttons: {'Close':function(){$(this).dialog("close");}}
	});	
}

// Data Quality: Display the explainResolve dialog
function explainDQResolve() {
	$('#explain_resolve').dialog({ bgiframe: true, modal: true, width: 500, 
		buttons: {'Close':function(){$(this).dialog("close");}}
	});	
}

// Data Quality: Exclude an individual record-event[-field] from displaying in the results table
function excludeDQResult(ob,rule_id,exclude,record,event_id,field_name) {
	// Do ajax call to set exclude value
	$.post(app_path_webroot+'DataQuality/exclude_result_ajax.php?pid='+pid, { exclude: exclude, field_name: field_name, rule_id: rule_id, record: record, event_id: event_id }, function(data){
		if (data == '1') {
			// Change style of row to show exclusion value change 
			var this_row = $(ob).parent().parent().parent();
			this_row.removeClass('erow');	
			if (exclude) {		
				this_row.css({'background-color':'#FFE1E1','color':'red'});
				$(ob).parent().html("<a href='javascript:;' style='font-size:10px;text-decoration:underline;color:#800000;' onclick=\"excludeDQResult(this,'"+rule_id+"',0,'"+record+"',"+event_id+",'"+field_name+"');\">remove exclusion</a>");
			} else {			
				this_row.css({'background-color':'#EFF6E8','color':'green'});
				$(ob).parent().html("<a href='javascript:;' style='font-size:10px;text-decoration:underline;' onclick=\"excludeDQResult(this,'"+rule_id+"',1,'"+record+"',"+event_id+",'"+field_name+"');\">exclude</a>");
				// Remove the "(excluded)" label under record name
				this_row.children('td:first').find('.dq_excludelabel').html('')
			}
		} else {
			alert(woops);
		}
	});
}

// Data Quality: When user clicks data value on form for real-time execution, close dialog and highlight field with pop-up to save
function dqRteGoToField(field) {
	// Close dialog
	$('#dq_rules_violated').dialog('close');
	// Go to the field
	$('html, body').animate({
        scrollTop: $('tr#'+field+'-tr').offset().top - 150
     }, 700);
	// Put focus on field
	$('form#form input[name="'+field+'"]').focus();
	// Open tooltip right above field
	$('tr#'+field+'-tr')
		.tooltip({ tip: '#dqRteFieldFocusTip', relative: true, effect: 'fade', offset: [10,0], position: 'top center', events: { tooltip: "mouseenter" } })
		.trigger('mouseenter')
		.unbind();
}

// Data Quality: Reload an individual record-event[-field] table of rules violated on data entry page
function reloadDQResultSingleRecord(show_excluded) {
	// Do ajax call to set exclude value
	$.post(app_path_webroot+'DataQuality/data_entry_single_record_ajax.php?pid='+pid, { dq_error_ruleids: getParameterByName('dq_error_ruleids'), 
		show_excluded: show_excluded, record: getParameterByName('id'), event_id: getParameterByName('event_id'),
		page: getParameterByName('page')}, function(data){
		$('#dq_rules_violated').html(data);
		initWidgets();
	});
}

// Run processes when submitting form on data entry page
function formSubmitDataEntry() {
	// Disable the onbeforeunload so that we don't get an alert before we leave
	window.onbeforeunload = function() { }
	// Before finally submitting the form, execute all calculated fields again just in case someone clicked Enter in a text field
	calculate();
	// REQUIRED FIELDS: Loop through table and remove form elements from html that are hidden due to branching logic 
	// (so user is not prompted to enter values for invisible fields).
	$("#form_table tr").each(function() {
		// Is it a required field?
		if ($(this).attr("req") != null) {
			// Is the req field hidden (i.e. on another survey page)?
			if ($(this).css("display") == "none") {
				// Only remove field from form if does not already have a saved value (i.e. has 'hasval=1' as row attribute)
				if ($(this).attr("hasval") != "1") {
					$(this).html('');
				}
			}
		}
	});
	// For surveys only
	if (page == 'surveys/index.php') {
		// If using "save and return later", append to form action to point to new place
		if ($('#submit-action').val() == "submit-btn-savereturnlater") {
			$('#form').attr('action', $('#form').attr('action')+'&__return=1' );
		}
		// If using "previous page" button, append to form action to point to new place
		if ($('#submit-action').val() == "submit-btn-saveprevpage") {
			$('#form').attr('action', $('#form').attr('action')+'&__prevpage=1' );
		}
	}
	// Disable all buttons on page when submitting to prevent double submission
	setTimeout(function(){ $('#form :button').prop('disabled',true); },10);
	// Submit form (finally!)
	document.form.submit();
}

// Execute when buttons are clicked on data entry forms
function dataEntrySubmit(ob) 
{
	// Set value of hidden field used in post-processing after form is submitted
	// $('#submit-action').val( ( $(ob).text() ? trim($(ob).text()) : trim($(ob).val()) ) );
	$('#submit-action').val( $(ob).attr('name') );
	if ($('#submit-action').val() == '' || $('#submit-action').val() == null) {
		$('#submit-action').val('submit-btn-saverecord');
	}
	
	// Clicked Save or Delete
	if ($('#submit-action').val() != "submit-btn-cancel") 
	{
		// Determine esign_action
		var esign_action = "";
		if ($('#__ESIGNATURE__').length && $('#__ESIGNATURE__').prop('checked') && $('#__ESIGNATURE__').prop('disabled') == false) {
			esign_action = "save";
			// If form is not locked already or checked to be locked, then stop (because is necessary)
			if ($('#__LOCKRECORD__').prop('checked') == false) {
				simpleDialog('WARNING:\n\nThe "Lock Record" option must be checked before the e-signature can be saved. Please check the "Lock Record" check box and try again.');
				return false;
			}
		}
		
		// Set the lock action
		var lock_action = ($('#__LOCKRECORD__').prop("disabled") && (esign_action == "save" || esign_action == "")) ? 2 : 1;
		
		// "change reason" popup for existing records (and lock record, if user has rights)
		if (require_change_reason && record_exists && dataEntryFormValuesChanged) 
		{
			$('#change_reason_popup').dialog('destroy');
			$('#change_reason_popup').dialog({ bgiframe: true, modal: true, width: 500, zIndex: 4999, buttons: {
				'Save': function() {
					$('#change_reason_popup_error').css('display','none'); //Default state
					if ($("#change_reason").val().length < 1) {
						$('#change_reason_popup_error').toggle('blind',{},'normal');
						return false;
					}
					// Before submitting the form, add change reason values from dialog as form elements for submission
					$('#form').append('<input type="hidden" name="change-reason" value="'+$("#change_reason").val().replace(/"/gi, '&quot;')+'">');						
					// Save locked value
					if ($('#__LOCKRECORD__').prop('checked')) {
						$('#change_reason_popup').dialog('destroy');
						saveLocking(lock_action,esign_action);
					// Not locked, so just submit form
					} else {
						formSubmitDataEntry();
					}
				}
			} });
		}
		// Do locking and/or save e-signature, then submit form
		else if ($('#__LOCKRECORD__').prop('checked') && (!$('#__LOCKRECORD__').prop("disabled") || esign_action == "save"))
		{
			saveLocking(lock_action,esign_action);
		}
		// Just submit form if neither using change_reason nor locking
		else
		{
			formSubmitDataEntry();
		}
	}
	// Clicked Cancel (requires form submission)
	else {
		formSubmitDataEntry();
	}	
}

// Set form as unlocked (enabled fields, etc.)
function setUnlocked(esign_action) {
	var form_name = getParameterByName('page');
	// Bring back Save buttons
	$('#__SUBMITBUTTONS__-div').css('display','block');	
	// Remove locking informational text
	$('#__LOCKRECORD__').prop('checked', false);
	$('#lockingts').html('').css('display','none');
	$('#unlockbtn').css('display','none');	
	$('#lock_record_msg').css('display','none');
	// Remove lock icon from menu (if visible)
	$('img#formlock-'+form_name).hide();
	// Hide e-signature checkbox if e-signed but user does not have e-sign rights
	if (lock_record < 2 && $('#esignchk').length) {
		$('#esignchk').hide().html('');
	}
	// Determine if user has read-only rights for this form
	var readonly_form_rights = !($('#__SUBMITBUTTONS__-div').length && $('#__SUBMITBUTTONS__-div').css('display') != 'none');
	if (readonly_form_rights) {
		$('#__LOCKRECORD__').prop('disabled', false);
	} else {
		// Remove the onclick attribute from the lock record checkbox so that the next locking is done via form post
		$('#__LOCKRECORD__').removeAttr('onclick');
		// Unlock and reset all fields on form
		$(':input').each(function() {
			// Re-enable field UNLESS field is involved in randomization (i.e. has randomizationField class)
			if (!$(this).hasClass('randomizationField')) {
				// Enable field
				$(this).prop('disabled', false);
			}
		});
		// Make radio "reset" link visible again
		$('.cclink').each(function() {
			// Re-enable link UNLESS field is involved in randomization (i.e. has randomizationField class)
			if (!$(this).hasClass('randomizationField')) {
				// Enable field
				$(this).css('display','block');
			}
		});
		// Enable "Randomize" button, if using randomization
		$('#redcapRandomizeBtn').removeAttr('aria-disabled').removeClass('ui-state-disabled').prop('disabled', false);
		// Add all options back to Form Status drop-down, and set value back afterward 
		var form_status_field = $(':input[name='+form_name+'_complete]');
		var form_val = form_status_field.val();	
		var sel = ' selected ';
		form_status_field
			.find('option')
			.remove()
			.end()
			.append('<option value="0"'+(form_val==0?sel:'')+'>Incomplete</option><option value="1"'+(form_val==1?sel:'')+'>Unverified</option><option value="2"'+(form_val==2?sel:'')+'>Complete</option>');
		// If editing a survey response, do NOT re-enable the Form Status field
		if (getParameterByName('editresp') == "1") form_status_field.prop("disabled",true);
		// Enable green row highlight for data entry form table
		enableDataEntryRowHighlight();
		// Re-display the save form buttons tooltip
		displayFormSaveBtnTooltip();
	}
	// Check for e-sign negation
	var esign_msg = "";
	if (esign_action == "negate") {
		$('#esignts').hide();
		$('#esign_msg').hide();
		$('#__ESIGNATURE__').prop('checked', false);
		esign_msg = ", and the existing e-signature has been negated";	
	}
	// Give confirmation
	simpleDialog("This form has now been unlocked"+esign_msg+". Users can now modify the data again on this form.","UNLOCK SUCCESSFUL!");
}

// Lock/Unlock records for multiple forms
function lockUnlockForms(fetched, fetched2, event_id, arm, grid, lock) {
	if (lock == 'lock') {
		var prompt = 'LOCK ALL FORMS?\n\nDo you wish to lock all data entry forms for record "'+fetched2+'"? '
				   + 'After doing this, no one will be able to edit this record until it is unlocked by someone with Lock/Unlock privileges.';
		var alertmsg = 'All data entry forms have now been LOCKED for record "'+fetched2+'".';
	} else if (lock == 'unlock') {
		var prompt = 'UNLOCK ALL FORMS?\n\nDo you wish to unlock all data entry forms for record "'+fetched2+'"? '
				   + 'NOTE: Any e-signatures that have been saved for any forms will be negated in this process.';
		var alertmsg = 'All data entry forms have now been UNLOCKED for record "'+fetched2+'".';
	} else {
		return;
	}
	alertmsg += ' The page will now reload to reflect the changes.';
	if (confirm(prompt)) {
		$.get(app_path_webroot+'Locking/all_forms_action.php', { pid: pid, id: fetched, action: lock, grid: grid, event_id: event_id, arm: arm },
			function(data) {
				if (data == "1") {
					alert(alertmsg);
					window.location.reload();
				} else {
					alert("Woops! An error occurred. Please try again.");
				}
			}
		);
	}
}

// Run any time an esign fails to verify username/password
function esignFail(numLogins) {
	if (numLogins == 3) {
		alert("SYSTEM LOGOUT:\n\nYou have failed to enter a valid username/password three (3) times. "
			+ "You will now be automatically logged out of REDCap.");
		window.location.href += "&logout=1";
	} else {
		$('#esign_popup_error').toggle('blind',{},'normal');
	}
}

// Save the locking value from the form, then submit form
function saveLocking(lock_action,esign_action)
{
	// Determine action
	if (lock_action == 2) 		var action = "";
	else if (lock_action == 1)  var action = "lock";
	else if (lock_action == 0)  var action = "unlock";
	// Error msg
	var error_msg = "Woops! An error occurred, and the changes could not be made. Please try again.";
	// E-signature required (i.e. lock_record==2), but not if simply unlocking/negating esign
	if (lock_record == 2 && $('#__ESIGNATURE__').prop('checked') && esign_action == "save")
	{
		// Count login attempts
		var numLogins = 0;
		// Username/password popup	
		$('#esign_popup').dialog('destroy');
		$('#esign_popup').dialog({ bgiframe: true, modal: true, width: 530, zIndex: 3999, buttons: {
			'Save': function() {
				// Check username/password entered is correct
				$('#esign_popup_error').css('display','none'); //Default state
				$.post(app_path_webroot+"Locking/single_form_action.php?pid="+pid, {esign_action: esign_action, event_id: event_id, action: action, username: $('#esign_username').val(), password: $('#esign_password').val(), record: getParameterByName('id'), form_name: getParameterByName('page')}, function(data){
					$('#esign_password').val('');
					if (data == "1") {
						// If response=1, then correct username/password was entered and e-signature was saved
						$('#esign_popup').dialog('close');
						numLogins = 0;
						// Submit the form if saving e-signature
						if (action == 'lock' || action == '') {			
							formSubmitDataEntry();;
						} else {
							setUnlocked(esign_action);
						}
					} else if (data == "2") {
						// If response=2, then a php/sql error occurred
						$('#esign_popup').dialog('close');
						alert(error_msg);
					} else {
						// Login failed
						numLogins++;
						esignFail(numLogins);
					}
				});
			}
		} });
	} 
	// No e-signature, so just save locking value
	else 
	{
		$.post(app_path_webroot+"Locking/single_form_action.php?pid="+pid, {esign_action: esign_action, no_auth_key: 'q4deAr8s', event_id: event_id, action: action, record: getParameterByName('id'), form_name: getParameterByName('page')}, function(data){
			if (data == "1") {
				// Submit the form if saving e-signature
				if (action == 'lock' || action == '') {	
					formSubmitDataEntry();
				} else {
					setUnlocked(esign_action);
				}
			} else {
				// error occurred
				alert(error_msg);
			}
		});	
	}
}

// Function used when whole form is disabled *except* the lock record checkbox (this avoids a form post to prevent issues of saving for disabled fields)
function lockDisabledForm(ob) {
	// Dialog for confirmation
	if (confirm("LOCK FORM?\n\nAre you sure you wish to lock this form for record \""+getParameterByName('id')+"\"?")) {
		$.post(app_path_webroot+"Locking/single_form_action.php?pid="+pid, {esign_action: '', no_auth_key: 'q4deAr8s', event_id: event_id, action: "lock", record: getParameterByName('id'), form_name: getParameterByName('page')}, function(data){
			if (data == "1") {
				$(ob).prop('disabled',true);
				simpleDialog("The form has now been locked. The page will now reload to reflect this change.","LOCK SUCCESSFUL!",null,null,"window.location.reload();");
			} else {
				alert(woops);
			}
		});
	} else {
		// Make sure we uncheck the checkbox if they decline after checking it.
		$(ob).prop('checked',false);
	}
}

// Unlock a record on a form
function unlockForm(unlockBtnJs) {
	var esign_notice = "";
	var esign_action = "";
	if (unlockBtnJs == null) unlockBtnJs = '';
	// Show extra notice if record has been e-signed (because unlocking will negate it)
	if ($('#__ESIGNATURE__').length && $('#__ESIGNATURE__').prop('checked') && $('#__ESIGNATURE__').prop('disabled')) {
		esign_notice = " NOTICE: Unlocking this form will also negate the current e-signature.";
		esign_action = "negate";
	}
	simpleDialog("Are you sure you wish to unlock this form for record \"<b>"+getParameterByName('id')+"</b>\"?"+esign_notice,"UNLOCK FORM?",null,null,
		null,"Cancel","saveLocking(0,'"+esign_action+"');"+unlockBtnJs,"Unlock");
}

// Get file extension from filename string
function getfileextension(filename) { 
	if (!filename || filename == null || filename.length == 0) return "";
	var dot = filename.lastIndexOf("."); 
	if (dot == -1) return ""; 
	var extension = filename.substr(dot+1,filename.length); 
	return extension; 
} 

// Window sizing
function resizeMainWindow() {
	if ($('#southpad').length) {
		resizeMainWindowSub();
		setTimeout(function(){
			resizeMainWindowSub();
		},700);
	}
}
// Window sizing
function resizeMainWindowSub() {
	var fudge = 20 - (isIE6 ? 17 : 0) - (isIE7 ? 17 : 0);
	var windowHeight = $(window).height();
	var westHeight = $('#west_inner').outerHeight(true);
	$('#southpad').height(0); // Reset this value
	var southpadHeight = $('#southpad').outerHeight(true);
	var centerHeight = $('#center_inner').outerHeight(true) + $('#south').outerHeight(true) + southpadHeight;
	if (centerHeight < windowHeight && westHeight < windowHeight) {
		$('#southpad').height(windowHeight - (centerHeight - southpadHeight + fudge));
	} else if (centerHeight < westHeight) {
		$('#southpad').height(westHeight - (centerHeight + fudge + $('#south').outerHeight(true) - 70));
	}
	$('#south').css('visibility','visible');
}

// Initialization functions for normal project-level pages
function initPage() {
	// Resize windows
	resizeMainWindow();
	// Perform actions upcon page resize
	window.onresize = function() {
		// Nothing yet
	}
	// Allow collapsing of left-hand menu
	if ($('#west').length) {
		$('#westpad').bind('mousedown',function(){
			$("#west").toggle();
		});	
	}
	// Add fade mouseover for "Edit instruments" link on project menu
	$("#menuLnkEditInstr").hover(function() {
		$(this).removeClass('opacity50');
		if (isIE) $("#menuLnkEditInstr img").removeClass('opacity50');
	}, function() {
		$(this).addClass('opacity50');
		if (isIE) $("#menuLnkEditInstr img").addClass('opacity50');
	});
	// Add fade mouseover for "Choose other record" link on project menu
	$("#menuLnkChooseOtherRec").hover(function() {
		$(this).removeClass('opacity50');
	}, function() {
		$(this).addClass('opacity50');
	});	
	// Put focus on main window for initial scrolling (only works in IE)
	if ($('#center').length) document.getElementById('center').focus();
}

// Call login reset page via AJAX
function callLoginResetAjax(resettime,logouttime) {
	var params = '';
	// Detect if we're on data entry page or  not
	try {
		var form = getParameterByName('page');
		var rec  = getParameterByName('id');
		if (page == 'DataEntry/index.php' && form != '' && rec != '') {
			params = '?pid='+pid+'&page='+form+'&id='+rec;
			var event_id = getParameterByName('event_id');
			if (event_id != '') params += '&event_id='+event_id;
			var auto_param = getParameterByName('auto');
			if (auto_param != '') params += '&auto='+auto_param;
		}
	} catch(err) {}
	$.get(app_path_webroot+'ProjectGeneral/login_reset.php'+params, {}, function(data){
		if (data == "1") {
			initAutoLogout(resettime,logouttime);
		} else {
			var showFailureNotice = true;
			try {
				if (page == 'DataEntry/index.php' && getParameterByName('id') != '') {
					showFailureNotice = false;
				}
			} catch(err) {}
			if (showFailureNotice) {
				var lostSessionMsg = "<b>Your REDCap session has expired.</b><br>Click the button below to log in again.";
				$.doTimeout('autoLogoutId4', 1, function(){ autoLogoutDialog(lostSessionMsg,true,resettime,logouttime); }, true);
			}
		}
	});
}

// Initialize auto-logout popup timer and logout reset timer listener
function initAutoLogout(resettime,logouttime) {
	// Do not run pop-up alert if on the login page and not logged in
	if ($('#redcap_login_a38us_09i85').length || $('#redcap_login_openid_Re8D2_8uiMn').length) return false;
	// Set ajax call at timed interval that is triggered by typing, clicking, or mouse movement (to prevent auto-logout)
	$.doTimeout('autoLogoutResetId', (resettime*60000), function(){ 
		$(document).bind('keyup mousemove click', function(){
			$(this).unbind('keyup mousemove click');
			// Call login reset page via AJAX
			callLoginResetAjax(resettime,logouttime);			
		});
	});
	// Set auto-logout popups to occur at set intervals
	var warn_timeout1 = "You will be automatically logged out of REDCap in <b>2 MINUTES</b> due to inactivity. Click the button below to prevent auto logout.";
	var warn_timeout2 = "You will be automatically logged out of REDCap in <b>30 SECONDS</b> due to inactivity. Click the button below to prevent auto logout.";
	var warn_timeout3 = "<b>Due to inactivity, your REDCap session has expired.</b> Click the button below to log in again.";
	$.doTimeout('autoLogoutId1', ((logouttime-2)*60000), function(){ autoLogoutDialog(warn_timeout1,false,resettime,logouttime); }, true);
	$.doTimeout('autoLogoutId2', ((logouttime-0.5)*60000), function(){ autoLogoutDialog(warn_timeout2,false,resettime,logouttime); }, true);
	$.doTimeout('autoLogoutId3', (logouttime*60000), function(){ autoLogoutDialog(warn_timeout3,true,resettime,logouttime); }, true);
}

// Display dialog pop-up with auto-logout warning text
function autoLogoutDialog(msg,doLogout,resettime,logouttime) {
	// Set dialog content and button text
	var image = (doLogout ? 'cross_big.png' : 'warning.png');
	var classname = (doLogout ? 'red' : 'yellow');
	var content = '<div class="'+classname+'" style="margin:20px 0;"><table cellspacing=10 width=100%><tr>'
				+ '<td><img src="'+app_path_images+image+'"></td>'
				+ '<td style="font-family:verdana;padding-left:10px;">'+msg+'</td></tr></table></div>';
	var btnText = (doLogout ? 'Log In' : 'Continue on this page');
	// Setup up dialog
	var div_id = 'redcapAutoLogoutDialog';
	$('#'+div_id).dialog('destroy');
	$('#'+div_id).remove();
	$('body').append('<div id="'+div_id+'" style="display:none;"></div>');
	// Display dialog
	$('#'+div_id).dialog({ bgiframe: true, modal: true, width: 450, title: 'REDCap Auto Logout Warning', 
		open: function(){ fitDialog(this); $(this).html(content); }, 
		close: function(){ 
			if (doLogout){ 
				// Disable the onbeforeunload so that we don't get an alert before we leave
				window.onbeforeunload = function() { }
				// Reload page to force re-login (don't use window.location.reload() because it can cause a resubmit of Post in some browsers)
				var loc = window.location.href;
				window.location.href = loc;
			} else { 
				// Contact the server via AJAX and reset the session
				callLoginResetAjax(resettime,logouttime);
			}
		}, 
		buttons: [{
			text: btnText,
			click: function() { $(this).dialog("close"); }
		}]
	});
}

// Opens dialog popup for viewing all users in Control Center
function openUserHistoryList() {
	var days = $('#activity-level').val();
	var title = $('#activity-level option:selected').text();
	$('#userListTable').html('');
	$('#userListProgress').css('display','block');					
	$('#userList').dialog('destroy');
	var userListDialog = $('#userList').dialog({ title: title, bgiframe: true, modal: true, position: ['center',50], width: 850, buttons: { Close: function() { $(this).dialog('close'); } } });
	$.get(app_path_webroot+'ControlCenter/user_list_ajax.php?d='+days, {}, function(data) {
		// Inject table
		$('#userListProgress').css('display','none');
		$('#userListTable').html(data);
		// Reset dialog dimensions
		fitDialog(userListDialog);
		// Activate table search
		$('#user_list_search').quicksearch('table#table-userListTableInner tbody tr');
		// Re-activate table search when table is re-sorted
		$('.hDivBox').click(function() {
			$('#user_list_search').quicksearch('table#table-userListTableInner tbody tr');
		});
	});
}

// Return hash string from URL
function addGoogTrans() {
	return ''; // NOT USING YET
}

// Strip all html tags
function strip_tags(val) {
	return val.replace(/<\/?[^>]+>/gi, '');
}

// Enforce character limit on a text box
function charLimit(id,limit) {
	var str = $("#"+id).val();
	if (str.length > limit) {
		$("#"+id).val(str.substring(0,limit));
		alert("You have exceeded the character limit of "+limit+" for this text box. The text entered will now be truncated to "+limit+" characters.");
		setTimeout(function () { $("#"+id).focus() }, 1);
	}
}

// Submit form to import records
function importDataSubmit(require_change_reason) {
	
	// If data change reason is required for existing record, loop through each, check for text in each, and add to form for submission
	if (require_change_reason) 
	{
		var count_empty = 0;
		$('.change_reason').each(function(){
			var row_num = $(this).prop('id').replace('reason-','');
			var this_reason = $('#reason-'+row_num).val();	
			if (trim(this_reason) == "") {
				count_empty++;
			} else {
				$('#change-reasons-div').append("<input name='records[]' value='"+$('#record-'+row_num).html()+"'><input name='events[]' value='"+$('#event-'+row_num).html()+"'><textarea name='reasons[]'>"+this_reason+"</textarea>");
			}
		});
		if (count_empty > 0) {
			$('#change-reasons-div').html('');
			alert("You have not entered a 'reason for data changes' for "+count_empty+" records. Please supply a reason in the text box for each before you can continue.");
			return false;
		}
	} 
	$('#uploadmain2').css('display','none');
	$('#progress2').css('display','block');
	return true;
}

// Remove all unselected options from Form Status drop-down (used when page is locked but not e-signed)
function removeUnselectedFormStatusOptions() {
	$(':input[name='+getParameterByName('page')+'_complete] option').each(function(){
		if ( $(this).prop('selected') == false ) {
			$(this).remove();
		} else {
			$(this).css('color','gray');
		}
	});
}

// Branching Logic & Calculated Fields
var isNumeric 	 = function(symbol){var objRegExp=/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;return objRegExp.test(symbol);};
var chkNull   	 = function(val){return ((val==''||val==null)?'NaN':(val*1))}
var calcErrExist = true;
var brErrExist   = true;
function calcErr(fld) {
	alert('CALCULATION ERRORS EXIST!\n\nThere is a syntactical error in the calculation for the field "'+fld+'" on this page. '
		+ 'None of the calculations on this data entry form will function correctly until this error has been corrected.\n\n'
		+ 'If you are not sure what this means, please contact your project administrator.');
}
function calcErr2() {
	alert('CALCULATION ERRORS EXIST!\n\nThere is a syntactical error in one or more of the calculations on this page. '
		+ 'It cannot be determined which fields contain the error, so please check the equation for every calculated field on this page. '
		+ 'None of the calculations on this data entry form will function correctly until this error has been corrected.\n\n'
		+ 'If you are not sure what this means, please contact your project administrator.');
}
function brErr(fld) {
	if (page == 'surveys/index.php') {
		// Survey page
		alert('SURVEY ERRORS EXIST: CANNOT CONTINUE!\n\nPlease contact your survey administrator and let them know that Branching Logic errors exist on this survey for the field "'+fld+'". This survey will not function correctly until these errors have been fixed. Sorry for any inconvenience.');
	} else {
		// Data entry form
		alert('BRANCHING LOGIC ERRORS EXIST!\n\nThere is a syntactical error in the the Branching Logic for the field "'+fld+'" on this page. '
			+ 'None of the Branching Logic on this data entry form will function correctly until this error has been corrected.\n\n'
			+ 'If you are not sure what this means, please contact your project administrator.');
	}
}
function brErr2() {
	if (page == 'surveys/index.php') {
		// Survey page
		alert('SURVEY ERRORS EXIST: CANNOT CONTINUE!\n\nPlease contact your survey administrator and let them know that Branching Logic errors exist on this survey. This survey will not function correctly until these errors have been fixed. Sorry for any inconvenience.');
	} else {
		// Data entry form
		alert('BRANCHING LOGIC ERRORS EXIST!\n\nThere is a syntactical error in the Branching Logic of one or more fields on this page. '
			+ 'It cannot be determined which fields contain the error, so please check the Branching Logic for every field on this page. '
			+ 'None of the Branching Logic on this data entry form will function correctly until this error has been corrected.\n\n'
			+ 'If you are not sure what this means, please contact your project administrator.');
	}
}
function brErase(fld) {
	return 'ERASE CURRENT VALUE OF THE FIELD "'+fld+'" ?\n\n'
		 + 'The current field for which you just entered data requires that the field named "'+fld+'" be hidden from view. '
		 + 'However, that field already has a value, so its value might need to be reset back to a blank value.\n\n'
		 + 'Click OK to HIDE this field and ERASE its current value. Click CANCEL if you DO NOT wish to hide this field or erase its current value.';
}

// Display e-signature explanation dialog pop-up
function esignExplainLink() {
	$.get(app_path_webroot+'Locking/esignature_explanation_popup.php', { }, function(data) {
		if (!$('#esignExplain').length) $('body').append('<div id="esignExplain"></div>');
		$('#esignExplain').dialog('destroy');
		$('#esignExplain').html(data);
		$('#esignExplain').dialog({ bgiframe: true, title: 'What is an E-signature?', modal: true, width: 650, buttons: { Close: function() { $(this).dialog('close'); } } });
	});
}

// Loads disclaimer dialog pop-up for calc field precision explanation
function calcDisclaimer() {
	$.get(app_path_webroot+'DataEntry/calc_disclaimer_popup.php', { pid: pid }, function(data) {
		if (!$('#calcDisclaimer').length) $('body').append('<div id="calcDisclaimer"></div>');
		$('#calcDisclaimer').dialog('destroy');
		$('#calcDisclaimer').html(data);
		$('#calcDisclaimer').dialog({ bgiframe: true, modal: true, title: 'Disclaimer for "calc" field types', width: 650, buttons: { Close: function() { $(this).dialog('close'); } } });
	});
}

// Display explanation dialog pop-up to explain create/rename/delete record settings on User Rights
function userRightsRecordsExplain() {
	$.get(app_path_webroot+'UserRights/record_rights_popup.php', { pid: pid }, function(data) {
		if (!$('#recordsExplain').length) $('body').append('<div id="recordsExplain"></div>');
		$('#recordsExplain').dialog('destroy');
		$('#recordsExplain').html(data);
		$('#recordsExplain').dialog({ bgiframe: true, modal: true, title: 'User privileges pertaining to project records', width: 650, buttons: { Close: function() { $(this).dialog('close'); } } });
	});
}

// Open popup window for viewing a calc field's equation
function viewEq(field) {
	var metadata_table = (status > 0 && page == 'Design/online_designer.php') ? 'metadata_temp' : 'metadata';
	$.get(app_path_webroot+'DataEntry/view_equation_popup.php', { pid: pid, field: field, metadata_table: metadata_table }, function(data) {
		if (!$('#viewEq').length) $('body').append('<div id="viewEq"></div>');
		$('#viewEq').dialog('destroy');
		$('#viewEq').html(data);
		$('#viewEq').dialog({ bgiframe: true, modal: true, title: 'Calculation equation for variable "'+field+'"', width: 600, buttons: { Close: function() { $(this).dialog('close'); } } });
	});
}

// Selecting logo for survey and check if an image
function checkLogo(file) {			
	extension = getfileextension(file);	
	extension = extension.toLowerCase();
	if (extension != "jpeg" && extension != "jpg" && extension != "gif" && extension != "png" && extension != "bmp") {
		$("#old_logo").val("");
		alert("ERROR: The file you selected is not an image file (e.g., GIF, JPG, JPEG, BMP, PNG). Please try again.");
	}
}

// Send email to oneself with survey link
function sendSelfEmail(survey_id,url) {
	$.get(app_path_webroot+'Surveys/email_self.php', { pid: pid, survey_id: survey_id, url: url }, function(data) {
		if (data != '0') {
			simpleDialog('The survey link was successfully emailed to '+data,'Email sent!');
		} else {
			alert(woops);
		}
	});
}

// Check for onblur event on element and run, if exists (for Form Renderer only)
function chkBlur(ob) {
	if (ob.getAttribute('onblur') != null) {
		// Replace "this" with "ob" if needed and eval it
		eval(ob.getAttribute('onblur').replace('this','document.form.'+ob.getAttribute('name')));
	}
}

// Open window for viewing survey
function surveyOpen(path,preview) {
	// Determine if showing a survey preview rather than official survey (default preview=false or 0)
	if (preview == null) preview = 0;
	if (preview != 1 && preview != 0) preview = 0;
	// Open window
	window.open(path+(preview ? '&preview=1' : ''),'_blank');
}

function survPubLink(survey_id,shorturl) {	
	$.get(app_path_webroot+'Surveys/public_survey_link.php', { pid: pid, survey_id: survey_id }, function(data) {
		if (!$('#survPubLink').length) $('body').append('<div id="survPubLink"></div>');
		$('#survPubLink').dialog('destroy');
		$('#survPubLink').html(data);
		$('#survPubLink').dialog({ bgiframe: true, title: 'Public Survey Link for Email or Webpage', modal: true, width: 750, buttons: { Close: function() { $(this).dialog('close'); } } });
		/* 
		// Display or retrieve the short URL for the survey
		var shorturl_addtext = 'Either survey link below may be used. The Short Survey Link merely utilizes a URL shortening service to redirect to the survey using a shorter URL.';
		if (!shorturl) {
			$.get(app_path_webroot+'Surveys/shorturl.php', { pid: pid, survey_id: survey_id }, function(data) {
				if (data != '0') {				
					$('#shorturl').val(data);
					$('#shorturl_div').css('display','');
					$('#shorturl_addtext').html(shorturl_addtext);
				}
			});
		} else {
			$('#shorturl_div').css('display','');
			$('#shorturl_addtext').html(shorturl_addtext);
		}
		*/
	});
}

// Open dialog box for emailing survey invitation
function OpenDlgSendSurvPart(survey_id,event_id,record) {
	$('#emailPart').dialog('destroy');
	$('#emailPart').dialog({ bgiframe: true, title: 'Email a Survey Invitation', modal: true, width: 500, buttons: { 
		Cancel: function() { $(this).dialog('close'); },
		'Send Email': function() {
			$(":button:contains('Send Email')").css("display","none");
			$(":button:contains('Cancel')").html("Close");
			var subject = $('#emailTitle').val();
			var message = $('#emailCont').val();
			var to_email = ($('#partEmailManualInput').val().length > 0) ? trim($('#partEmailManualInput').val()) : trim($('#partEmailValue').text());
			$('#emailPart').html("<p><img src='"+app_path_images+"progress_circle.gif' class='imgfix'> Please wait...</p>");
			$.post(app_path_webroot+'Surveys/email_participants.php?pid='+pid, { survey_id: survey_id, event_id: event_id, record: record, to_email: to_email, message: message, subject: subject }, function(data) {
				if (data != '0') {				
					$('#emailPart').html(data);
					setTimeout(function(){
						$('#emailPart').dialog('close'); 
					},2000);
				} else {
					alert("Woops! An error occurred. Please try again.");
					$('#emailPart').dialog('close');
				}
			});
		}
	} });
}

// Delete an entire project and its data
function delete_project(this_pid,ob,delete_now) {
	delete_now = (delete_now == null || delete_now != 1) ? '0' : '1';
	$.post(app_path_webroot+'ProjectGeneral/delete_project.php?pid='+this_pid, { action: 'prompt', delete_now: delete_now }, function(data) {
		initDialog("del_db_dialog",data);
		$('#del_db_dialog').dialog({ bgiframe: true, title: 'Permanently delete this project?', modal: true, width: 550, buttons: { 
			Cancel: function() { $(this).dialog('close'); } , 
			'Delete the project': function() {
				if (trim($('#delete_project_confirm').val().toLowerCase()) != "delete") {
					simpleDialog('You must type "DELETE" first.');
					return;
				}
				simpleDialog('<span style="font-size:14px;color:#800000;">Are you really sure you wish to delete this project?</span>','CONFIRM DELETION',null,null,"$('#del_db_dialog').dialog('close');",'Cancel','delete_project_do('+this_pid+','+delete_now+')','Yes, delete the project');
			}
		} });
	});
}
function delete_project_do(this_pid,delete_now) {
	$(':button:contains("Cancel")').html('Please wait...');
	$(':button:contains("Delete the project")').css('display','none');
	showProgress(1);
	$.post(app_path_webroot+'ProjectGeneral/delete_project.php?pid='+this_pid, { action: 'delete', delete_now: delete_now }, function(data) {
		showProgress(0);
		if (data == '1') {
			if (delete_now) {
				var msg = "The project was successfully deleted from REDCap <b>PERMANENTLY</b>. The project and all its data have been completely removed from REDCap.<br><br>";
			} else {
				var msg = "The project was successfully deleted from REDCap and can no longer be accessed. If this was done by mistake, please contact your REDCap administrator.<br><br>";
			}
			if (window.location.href.indexOf("/ControlCenter/") > -1) {
				simpleDialog(msg+"The page will now reload.","Project successfully deleted!","",500,"window.location.reload();");
			} else {
				simpleDialog(msg+"You will now be redirected back to the My Projects page.","Project successfully deleted!","",500,"window.location.href = '"+app_path_webroot_full+"index.php?action=myprojects';");
			}
		} else {
			simpleDialog("Woops! An error occurred. Please try again.");
		}
		$('#del_db_dialog').dialog('close');
	});
}

// Undelete a project that was previously "deleted" by a user
function undelete_project(this_pid) {
	$.post(app_path_webroot+'ProjectGeneral/delete_project.php?pid='+this_pid, { action: 'prompt_undelete' }, function(data) {
		$('#undelete_project_dialog').html(data).dialog({ bgiframe: true, modal: true, width: 550, buttons: { 
			Cancel: function() { $(this).dialog('close'); } , 
			'Undelete the project': function() {
				$.post(app_path_webroot+'ProjectGeneral/delete_project.php?pid='+this_pid, { action: 'undelete' }, function(data) {
					$('#undelete_project_dialog').dialog('close');
					if (data == '1') {
						simpleDialog('The project has now been restored. The page will now reload to reflect the changes.','PROJECT RESTORED!',null,null,"window.location.reload()");
					} else {
						alert(woops);
					}
				});
			}
		} });
	});
}

// Creates hidden div needed for jQuery UI dialog box. If div exists and is a dialog already, removes as existing dialog.
function initDialog(div_id,inner_html) {
	if ($('#'+div_id).length) {
		$('#'+div_id).dialog('destroy');
		$('#'+div_id).addClass('simpleDialog');
	} else {
		$('body').append('<div id="'+div_id+'" class="simpleDialog"></div>');
	}
	$('#'+div_id).html((inner_html == null ? '' : inner_html));
}

// For emailing survey link for participants that wish to return later
function emailReturning(survey_id,event_id,participant_id,hash,email,page) {
	$.get(page, { s: hash, survey_id: survey_id, event_id: event_id, participant_id: participant_id, email: email }, function(data) {
		if (data == '0') {
			alert(woops);
		} else if (data == '2') {
			$('#autoEmail').hide();
			$('#provideEmail').show();
		} else if (email != '') {
			simpleDialog('The email was successfully sent to '+data,'Email sent!');
		}
	});
}

// Get current time as hh:mm or just hh, mm, or ss
function currentTime(type,showSeconds) {
	var d = new Date();
	var curr_hour = d.getHours();
	if (curr_hour < 10) curr_hour = '0'+curr_hour;
	var curr_min = d.getMinutes();
	if (curr_min < 10) curr_min = '0'+curr_min;
	var curr_sec = d.getSeconds();
	if (curr_sec < 10) curr_sec = '0'+curr_sec;
	if (type=='m') return curr_min;
	else if (type=='h') return curr_hour;
	else if (type=='s') return curr_sec;
	else return curr_hour+':'+curr_min+(showSeconds ? ':'+curr_sec : '');
}

// Get today's date in various formats
function getCurrentDate(valType) {
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	if (month < 10) month = "0" + month;
	var day = currentTime.getDate();
	if (day < 10) day = "0" + day;
	var year = currentTime.getFullYear();
	if (/_mdy/.test(valType)) {
		return month+'-'+day+'-'+year;
	} else if (/_dmy/.test(valType)) {
		return day+'-'+month+'-'+year;
	} else {
		return year+'-'+month+'-'+day;
	}
}

// Button to set date field to today's date
function setToday(name,valType) {
	eval("document.form."+name+".value='"+getCurrentDate(valType)+"';");
	// If user modifies any values on the data entry form, set flag to TRUE
	dataEntryFormValuesChanged = true;
	// Trigger branching/calc fields, in case fields affected
	$('[name='+name+']').focus();
	setTimeout(function(){try{calculate();doBranching();}catch(e){}},50); 
}

// Button to set time field to current time as hh:ss
function setNowTime(name) {
	eval("document.form."+name+".value='"+currentTime('both')+"';");
	// If user modifies any values on the data entry form, set flag to TRUE
	dataEntryFormValuesChanged = true;
	// Trigger branching/calc fields, in case fields affected
	$('[name='+name+']').focus();
	setTimeout(function(){try{calculate();doBranching();}catch(e){}},50); 
}

// Button to set datetime field to current time as yyyy-mm-dd hh:ss
function setNowDateTime(name,showSeconds,valType) {
	eval("document.form."+name+".value='"+getCurrentDate(valType)+' '+currentTime('both',showSeconds)+"';");
	// If user modifies any values on the data entry form, set flag to TRUE
	dataEntryFormValuesChanged = true;
	// Trigger branching/calc fields, in case fields affected
	$('[name='+name+']').focus();
	setTimeout(function(){try{calculate();doBranching();}catch(e){}},50); 
}

//Date field functions
function dateKeyDown(event2,fldname) {
	eval("var fld = document.form."+fldname+";");
	if (event2.keyCode==13) {
		$('document.form.'+fldname).blur();
		return true;
	}
}

// Show dialog of project revision history
function revHist(this_pid) {
	$.get(app_path_webroot+'ProjectSetup/project_revision_history.php?pid='+this_pid,{},function(data){	
		initDialog('revHist','<div style="height:400px;">'+data+'</div>');
		$('#revHist').dialog({ bgiframe: true, title: $('#revHist #revHistPrTitle').text(), modal: true, width: 800, buttons: { 
			Close: function() { $(this).dialog('close'); }
		}});
	});
}


// Initialize all jQuery widgets, buttons, and icons
function initWidgets(resetMainWindowHeight) {
	// If flag is set, reset the main window's height (footer will move vertically if loading page contents via ajax)
	resetMainWindowHeight = !!resetMainWindowHeight;
	if (resetMainWindowHeight) resizeMainWindowSub();
	// Enable any jQuery UI buttons
	if ($('.jqbutton').length) 	  $('.jqbutton'   ).button();
	if ($('.jqbuttonsm').length)  $('.jqbuttonsm' ).button();
	if ($('.jqbuttonmed').length) $('.jqbuttonmed').button();
	// Enable sliders
	initSliders();
	// Pop-up date-picker initialization
	if ($('.cal').length) $('.cal').datepicker({ 
		onSelect: function(){ $(this).focus(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', showOn: 'button', buttonImage: app_path_images+'date.png', 
		buttonImageOnly: true, changeMonth: true, changeYear: true, dateFormat: 'yy-mm-dd'
	});
	// Pop-up date-picker initialization
	if ($('.date_ymd').length) $('.date_ymd').datepicker({ 
		onSelect: function(){ $(this).focus(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', showOn: 'button', buttonImage: app_path_images+'date.png', 
		buttonImageOnly: true, changeMonth: true, changeYear: true, dateFormat: 'yy-mm-dd', constrainInput: false
	});
	if ($('.date_mdy').length) $('.date_mdy').datepicker({ 
		onSelect: function(){ $(this).focus(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', showOn: 'button', buttonImage: app_path_images+'date.png', 
		buttonImageOnly: true, changeMonth: true, changeYear: true, dateFormat: 'mm-dd-yy', constrainInput: false
	});
	if ($('.date_dmy').length) $('.date_dmy').datepicker({ 
		onSelect: function(){ $(this).focus(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', showOn: 'button', buttonImage: app_path_images+'date.png', 
		buttonImageOnly: true, changeMonth: true, changeYear: true, dateFormat: 'dd-mm-yy', constrainInput: false
	});
	// Pop-up time-picker initialization
	$('.time2').timepicker({
		onClose: function(dateText, inst){ $('#'+$(inst).attr('id')).blur(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		hour: currentTime('h'), minute: currentTime('m'), buttonText: 'Click to select a time', 
		showOn: 'button', buttonImage: app_path_images+'timer.png', buttonImageOnly: true, timeFormat: 'hh:mm'
	});
	// Pop-up datetime-picker initialization
	$('.datetime_ymd').datetimepicker({
		onClose: function(dateText, inst){ $('#'+$(inst).attr('id')).blur(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', changeMonth: true, changeYear: true, dateFormat: 'yy-mm-dd',
		hour: currentTime('h'), minute: currentTime('m'), buttonText: 'Click to select a date/time', 
		showOn: 'button', buttonImage: app_path_images+'datetime.png', buttonImageOnly: true, timeFormat: 'hh:mm', constrainInput: false
	});
	$('.datetime_mdy').datetimepicker({
		onClose: function(dateText, inst){ $('#'+$(inst).attr('id')).blur(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', changeMonth: true, changeYear: true, dateFormat: 'mm-dd-yy',
		hour: currentTime('h'), minute: currentTime('m'), buttonText: 'Click to select a date/time', 
		showOn: 'button', buttonImage: app_path_images+'datetime.png', buttonImageOnly: true, timeFormat: 'hh:mm', constrainInput: false
	});
	$('.datetime_dmy').datetimepicker({
		onClose: function(dateText, inst){ $('#'+$(inst).attr('id')).blur(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', changeMonth: true, changeYear: true, dateFormat: 'dd-mm-yy',
		hour: currentTime('h'), minute: currentTime('m'), buttonText: 'Click to select a date/time', 
		showOn: 'button', buttonImage: app_path_images+'datetime.png', buttonImageOnly: true, timeFormat: 'hh:mm', constrainInput: false
	});
	// Pop-up datetime-picker initialization (w/ seconds)
	$('.datetime_seconds_ymd').datetimepicker({
		onClose: function(dateText, inst){ $('#'+$(inst).attr('id')).blur(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', changeMonth: true, changeYear: true, dateFormat: 'yy-mm-dd',
		hour: currentTime('h'), minute: currentTime('m'), buttonText: 'Click to select a date/time', 
		showOn: 'button', buttonImage: app_path_images+'datetime.png', buttonImageOnly: true, timeFormat: 'hh:mm:ss', constrainInput: false
	});
	$('.datetime_seconds_mdy').datetimepicker({
		onClose: function(dateText, inst){ $('#'+$(inst).attr('id')).blur(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', changeMonth: true, changeYear: true, dateFormat: 'mm-dd-yy',
		hour: currentTime('h'), minute: currentTime('m'), buttonText: 'Click to select a date/time', 
		showOn: 'button', buttonImage: app_path_images+'datetime.png', buttonImageOnly: true, timeFormat: 'hh:mm:ss', constrainInput: false
	});
	$('.datetime_seconds_dmy').datetimepicker({
		onClose: function(dateText, inst){ $('#'+$(inst).attr('id')).blur(); dataEntryFormValuesChanged=true; try{ calculate();doBranching(); }catch(e){ } },
		buttonText: 'Click to select a date', yearRange: '-100:+10', changeMonth: true, changeYear: true, dateFormat: 'dd-mm-yy',
		hour: currentTime('h'), minute: currentTime('m'), buttonText: 'Click to select a date/time', 
		showOn: 'button', buttonImage: app_path_images+'datetime.png', buttonImageOnly: true, timeFormat: 'hh:mm:ss', constrainInput: false
	});
}

//Enable sliders when clicking on them
function enableSldr(fld) {
	$("#slider-"+fld).slider({
		disabled: false,
		change: function(event, ui) {
			// Set input value
			document.forms['form'].elements[fld].value = ui.value;
			// Piping: Transmit slider value to all piping receiver spans
			$('form#form span.piping_receiver.piperec-'+event_id+'-'+fld).html(ui.value);
			// Set flag as true for data changes
			dataEntryFormValuesChanged = true;
			// Branching logic and calculations
			doBranching();
			calculate();
		},
		slide: function(event, ui) {
			document.forms['form'].elements[fld].value = ui.value;
		},
		click: function(event, ui) {
			// Set input value
			document.forms['form'].elements[fld].value = ui.value;
			// Piping: Transmit slider value to all piping receiver spans
			$('form#form span.piping_receiver.piperec-'+event_id+'-'+fld).html(ui.value);
			// Branching logic and calculations
			doBranching();
			calculate();
		}
	});
	if (document.forms['form'].elements[fld].value.length == 0) {
		document.forms['form'].elements[fld].value = 50; //Set value to 50 when click on it (prevents ambiguity of value after first click)
	}
	$("#sldrmsg-"+fld).css('visibility','hidden');
	doBranching();
	calculate();
}
//Initialize all sliders on page
function initSliders() {
	$(".slider").slider({ value: 50 });
	$(".slider").slider('disable');
}
//Set value and enable specific slider
function setSlider(fld,val,enable) {
	$("#slider-"+fld).slider("option", "value", val);
	$("#slider-"+fld).slider("enable");
	$("#sldrmsg-"+fld).css('visibility','hidden');
}
//Reset slider value
function resetSlider(fld) {
	$("#slider-"+fld).slider("option", "value", 50);
	$("#slider-"+fld).slider("disable");
	$("#sldrmsg-"+fld).css('visibility','visible');
	document.forms['form'].elements[fld].value = '';
	dataEntryFormValuesChanged = true;
	doBranching();
	calculate();
}

// Give message if PK field was changed on Design page
function update_pk_msg(reload_page,moved_source) {
	$.get(app_path_webroot+'Design/update_pk_popup.php', { pid: pid, moved_source: moved_source }, function(data) {
		if (data != '') { // Don't show dialog if no callback html (i.e. no records exist)
			initDialog("update_pk_popup",data);
			$('#update_pk_popup').dialog({title: langRecIdFldChanged, bgiframe: true, modal: true, width: 600, buttons: [
				{ text: langOkay, click: function () { 
					$(this).dialog('close'); 
					if (reload_page != null) {
						if (reload_page) window.location.reload();
					}
				}}
			]});
		} else if (moved_source == 'form') {
			simpleDialog(form_moved_msg,null,'','','window.location.reload();');
		}
	});
}

// Fit a jQuery UI dialog box on the page if too tall.
function fitDialog(ob) {
	var winh = $(window).height();
	var thisHeight = $(ob).height();
	var dialogCollapsedOnMobile = (isMobileDevice && thisHeight < 50);
	if ((thisHeight+110) >= winh || dialogCollapsedOnMobile) {
		// Set new height to be slightly smaller than window size
		$(ob).dialog('option', 'height', winh-30);
		// If height somehow ends up as 0 (tends to happen on mobile devices)
		if (dialogCollapsedOnMobile) {
			$(ob).height(winh - 85);
		}
		// Center it
		$(ob).dialog('option', 'position', ["center",10]);
	}
}

// Checks if value is in array (similar to PHP version of it)
function in_array(needle, haystack, argStrict) {
    // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
    // *     returns 1: true
    // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
    // *     returns 2: false
    // *     example 3: in_array(1, ['1', '2', '3']);
    // *     returns 3: true
    // *     example 3: in_array(1, ['1', '2', '3'], false);
    // *     returns 3: true
    // *     example 4: in_array(1, ['1', '2', '3'], true);
    // *     returns 4: false
    var key = '', strict = !!argStrict;
    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
    }
    return false;
}

// Find index of a given array value (similar to PHP version of it)
function array_search(needle, haystack, argStrict) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
  // *     returns 1: 'surname'
  // *     example 2: ini_set('phpjs.return_phpjs_arrays', 'on');
  // *     example 2: var ordered_arr = array({3:'value'}, {2:'value'}, {'a':'value'}, {'b':'value'});
  // *     example 2: var key = array_search(/val/g, ordered_arr); // or var key = ordered_arr.search(/val/g);
  // *     returns 2: '3'

  var strict = !!argStrict,
    key = '';

  if (haystack && typeof haystack === 'object' && haystack.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
    return haystack.search(needle, argStrict);
  }
  if (typeof needle === 'object' && needle.exec) { // Duck-type for RegExp
    if (!strict) { // Let's consider case sensitive searches as strict
      var flags = 'i' + (needle.global ? 'g' : '') +
            (needle.multiline ? 'm' : '') +
            (needle.sticky ? 'y' : ''); // sticky is FF only
      needle = new RegExp(needle.source, flags);
    }
    for (key in haystack) {
      if (needle.test(haystack[key])) {
        return key;
      }
    }
    return false;
  }

  for (key in haystack) {
    if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
      return key;
    }
  }

  return false;
}

// When stop action is triggered by clicking a survey question option, give notice before ending survey
function triggerStopAction(ob) {
	$('#stopActionPrompt').dialog({ bgiframe: true, modal: true, width: (isMobileDevice ? $('body').width() : 550), 
		close: function(){
			var obname = ob.prop('name');
			var varname = ''
			// Undo last response if closing and returning to survey
			if (obname.substring(0,8) == '__chkn__'){
				// Checkbox
				$('#form input[name="'+obname+'"]').each(function(){
					if ($(this).attr('code') == ob.attr('code')) {
						$(this).prop('checked',false);
					}
				});
				$('#form input[name="'+obname.replace('__chkn__','__chk__')+'_RC_'+ob.attr('code')+'"]').val('');
				varname = obname.substring(8,obname.length);
			} else if (obname.substring(obname.length-8,obname.length) == '___radio'){
				// Radio
				uncheckRadioGroup(ob);
				$('#form input[name="'+obname.substring(0,obname.length-8)+'"]').val('');
				varname = obname.substring(0,obname.length-8);
			} else {
				// Drop-down
				$('#form select[name="'+obname+'"]').val('');
				varname = obname;
			}
			// Highlight the row they need to return to 
			setTimeout(function(){
				$('#stopActionReturn').dialog({ bgiframe: true, modal: true, width: 320, buttons: { 
					'Continue survey': function() { 
						highlightTableRow(varname+'-tr',2500); $(this).dialog('close'); 
					}
				} });
			},100);
		},
		buttons: { 
			'Continue survey and undo last response': function() { 
				// Trigger calculations and branching logic
				setTimeout(function(){calculate();doBranching();},50);
				$(this).dialog('close'); 
			},
			'End the survey now': function() {
				$('#form').prop('action', $('#form').prop('action')+'&__endsurvey=1' );
				dataEntrySubmit(document.getElementById('submit-action'));
			}
		} 
	});
}

// Run when click the "reset value" for radio button fields
function radioResetVal(field,form) {
	uncheckRadioGroup(document.forms[form].elements[field+'___radio']);
	document.forms[form].elements[field].value='';
	if (form == 'form') {
		// Piping: Transmit blank value to all piping receiver spans
		if (event_id != null) {
			$('form#form span.piping_receiver.piperec-'+event_id+'-'+field).html('______');
			// Update drop-down options separately via ajax
			try{ updatePipingDropdowns(field,''); } catch(e) { }
		}
		// Branching logic and calculations
		calculate();
		doBranching();
	}
	return false;
}

// Checks survey page's URL for any reserved parameters (prevents confliction when using survey pre-filling)
function checkReservedSurveyParams(haystack) {
	var hu = window.location.search.substring(1);
	var gy = hu.split("&");
	var param, paramVal;
	var listRes = new Array();
	var listcount = 0;
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		param = ft[0];
		paramVal = ft[1];
		if (param != "s" && param != "hash" && !(param == "preview" && paramVal == "1")) {
			if (in_array(param, haystack)) {
				listRes[listcount] = param;
				listcount++;
			}
		}
	}
	if (listcount>0) {
		msg = "NOTICE: You are attempting to pass parameters in the URL that are reserved. "
			+ "Below are the parameters that you will need to remove from the URL's query string, as they will not be able to pre-fill "
			+ "survey questions because they are reserved. If you do not know what this means, please contact "
			+ "your survey administrator.\n\nReserved parameters:\n - " + listRes.join("\n - ");
		alert(msg);
	};
}

// Append the CSRF token from user's session to all forms on the webpage
function appendCsrfTokenToForm() {
	if (window.redcap_csrf_token) {
		setTimeout(function(){ 
			$('form').each(function(){ 
				$(this).append('<input type="hidden" name="redcap_csrf_token" value="'+redcap_csrf_token+'">') 
			});
		},100); 
	}
}

// Function to download data dictionary (give warning if project has any forms downloaded from Shared Library)
function downloadDD(draft,showLegal) {
	var url = app_path_webroot+'Design/data_dictionary_download.php?pid='+pid;
	if (draft) url += '&draft';
	if (showLegal) {
		if (!$('#sharedLibLegal').length) $('body').append('<div id="sharedLibLegal"></div>');
		$.get(app_path_webroot+'SharedLibrary/terms_of_use.php', { }, function(data){
			$('#sharedLibLegal').html(data);
			$('#sharedLibLegal').dialog({ bgiframe: true, modal: true, width: 600, title: 'REMINDER', buttons: { 
				Cancel: function() { $(this).dialog('close'); },
				'I Agree with Terms of Use': function() { window.location.href = url; $(this).dialog('close'); } 
			} });
		});
	} else {
		window.location.href = url;
	}
}
	
// Open the dialog for info about Shared Library
function openLibInfoPopup(action_text) {
	$.post(app_path_webroot+'SharedLibrary/info.php?pid='+pid, { action_text: action_text }, function(data){
		// Add dialog content
		if (!$('#sharedLibInfo').length) $('body').append('<div id="sharedLibInfo"></div>');
		$('#sharedLibInfo').html(data);
		$('#sharedLibInfo').dialog({ bgiframe: true, modal: true, width: 650, open: function(){fitDialog(this)}, 
			buttons: { Close: function() { $(this).dialog('close'); } }, title: 'The REDCap Shared Library'
		});
	});			
}
		
// Show spinner icon as plot spaceholder (using Google Chart Tools)
function showSpinner(field) {	
	var currentDivHeight = $('#plot-'+field).height();
	$('#plot-'+field).html('<div style="text-align:center;width:500px;height:'+currentDivHeight+'px;"><img title="Loading..." alt="Loading..." src="'+app_path_images+'progress.gif"></div>');
}

// Render Multiple Box Plots/Bar Charts (using Google Chart Tools)
function renderCharts(nextfields,charttype,results_code_hash) {
	// Do initial checking/setting of parameters
	if (nextfields.length < 1) return;
	if (isSurveyPage == null) isSurveyPage = false;
	if (charttype == null) charttype = '';
	if (results_code_hash == null || !isSurveyPage) results_code_hash = '';
	var hash = getParameterByName('s');
	var record = getParameterByName('record');
	// Do ajax request
	var url = app_path_webroot+'Graphical/plot_gct.php?pid='+pid;
	if (hash != '') {
		// Show results to survey participant (use passthru mechanism to avoid special authentication issues)
		url = dirname(dirname(app_path_webroot))+'/surveys/index.php?pid='+pid+'&s='+hash+'&__results='+getParameterByName('__results')+'&__passthru='+escape('Graphical/plot_gct.php');
	} else if (record != '') {
		// Overlay results from one record
		var event_id = getParameterByName('event_id');
		url += '&record='+record+'&event_id='+event_id;
	}
	$.post(url, { fields: nextfields, charttype: charttype, isSurveyPage: (isSurveyPage ? '1' : '0'), results_code_hash: results_code_hash }, function(resp_data){
		var json_data = jQuery.parseJSON(resp_data);
		// Set variables
		var field = json_data.field;
		var form = json_data.form;
		var nextfields = json_data.nextfields;
		var raw_data = json_data.data;
		var minValue = json_data.min;
		var maxValue = json_data.max;
		var medianValue = json_data.median;
		var respondentData = json_data.respondentData;
		var showChart = json_data.showChart; // Used to hide Bar Charts if lacking diversity
		if (charttype != '') {
			var plottype = charttype;
		} else {
			var plottype = json_data.plottype;
		}
		// If no data was sent OR plot should be hidden due to lack of diversity, then do not display field (would cause error)
		if (!showChart || raw_data.length == 0) {
			// Hide the field div
			$('#plot-'+field).html( $('#no_show_plot_div').html() );
			$('#stats-'+field).remove();
			$('#chart-select-'+field).hide();
			$('#refresh-link-'+field).hide();			
			// Perform the next ajax request if more fields still need to be processed
			if (nextfields.length > 0) {
				renderCharts(nextfields,charttype,results_code_hash);
			}
			return;
		}
		// Instantiate data object
		var data = new google.visualization.DataTable();
		// Box Plot
		if (plottype == 'BoxPlot') 
		{
			// Store record names and event_id's into array to allow navigation to page
			var recordEvent = new Array();
			// Set text for the pop-up tooltip
			var tooltipText = (isSurveyPage ? 'Value entered by survey participant /' : 'Click plot point to go to this record /');
			// Add data columns
			data.addColumn('number', '');
			data.addColumn('number', 'Value');
			// Add data rows
			for (var i = 0; i < raw_data.length; i++) {
				// Add to chart data
				data.addRow([{v: raw_data[i][0], f: raw_data[i][0]+'\n\n'}, {v: raw_data[i][1], f: tooltipText}]);				
				// Add to recordEvent array
				if (!isSurveyPage) {
					recordEvent[i] = '&id='+raw_data[i][2]+'&event_id='+raw_data[i][3];
				}
			}
			// Add median dot
			data.addColumn('number', 'Median');
			data.addRow([{v: medianValue, f: medianValue+'\n\n'}, null, {v: 0.5, f: 'Median value /'}]);
			// Add single respondent/record data point
			if (respondentData != '') {
				var tooltipTextSingleResp1, tooltipTextSingleResp2;
				if (isSurveyPage) {
					tooltipTextSingleResp1 = tooltipTextSingleResp2 = 'YOUR value';
				} else {
					tooltipTextSingleResp1 = 'Value for selected record ('+record+')';
					tooltipTextSingleResp2 = 'Click plot point to go to this record';
				}
				data.addColumn('number', tooltipTextSingleResp1);
				data.addRow([{v: respondentData*1, f: respondentData+'\n\n'}, null, null, {v: 0.5, f: tooltipTextSingleResp2+' /'}]);
				// Add to recordEvent array
				if (!isSurveyPage) {
					recordEvent[i+1] = '&id='+record+'&event_id='+event_id;
				}
			}
			// Display box plot
			var chart = new google.visualization.ScatterChart(document.getElementById('plot-'+field));
			var chartHeight = 250;
			chart.draw(data, {chartArea: {top: 10, left: 30, height: (chartHeight-50)}, width: 650, height: chartHeight, legend: 'none', vAxis: {minValue: 0, maxValue: 1, textStyle: {fontSize: 1} }, hAxis: {minValue: minValue, maxValue: maxValue} });
			// Set action to open form in new tab when select a plot point
			if (!isSurveyPage) {		
				google.visualization.events.addListener(chart, 'select', function selectPlotPoint(){
					var selection = chart.getSelection();
					if (selection.length < 1) return;
					var message = '';
					for (var i = 0; i < selection.length; i++) {
						var itemrow = selection[i].row;
						if (itemrow != null && recordEvent[itemrow] != null) {
							window.open(app_path_webroot+'DataEntry/index.php?pid='+pid+'&page='+form+recordEvent[itemrow]+'&fldfocus='+field+'#'+field+'-tr','_blank');
							return;
						}
					}
				});
			}
		} 
		// Bar/Pie Chart
		else 
		{
			// Add data columns
			data.addColumn('string', '');
			if (isSurveyPage) {
				data.addColumn('number', 'Count from other respondents');
				data.addColumn('number', 'Count from YOU');
			} else {
				data.addColumn('number', 'Count');
				data.addColumn('number', 'Count from the selected record');
			}
			// Add data rows
			data.addRows(raw_data);
			// Display bar chart or pie chart
			if (plottype == 'PieChart') {
				var chart = new google.visualization.PieChart(document.getElementById('plot-'+field));
				var chartHeight = 300;
				chart.draw(data, {chartArea: {top: 10, height: (chartHeight-50)}, width: 600, height: chartHeight, legend: 'none', hAxis: {minValue: minValue, maxValue: maxValue} });
			} else if (plottype == 'BarChart') {
				var chart = new google.visualization.BarChart(document.getElementById('plot-'+field));						
				var chartHeight = 80+(raw_data.length*60);
				chart.draw(data, {colors:['#3366CC','#FF9900'], isStacked: true, chartArea: {top: 10, height: (chartHeight-50)}, width: 600, height: chartHeight, legend: 'none', hAxis: {minValue: minValue, maxValue: maxValue} });
			}
		}
		// Perform the next ajax request if more fields still need to be processed
		if (nextfields.length > 0) {
			renderCharts(nextfields,charttype,results_code_hash);
		}
	});
}

// Change font size of elements on page. Provide tags (e.g., p, .data) and increase factor (e.g., 0.8, 1.5) and class to exclude (e.g., label)
function changeFont(tags, factor, excludeClass) {
	$(tags).each(function(){
		// Get font-size and increase
		$(this).css('font-size', parseFloat($(this).css('font-size'),10)*factor);
		// For certain fields, get height and increase
		var tag_name = this.tagName.toLowerCase();
		if ((tag_name == 'input' && $(this).attr('type') == 'text') || tag_name == 'select') {
			if (tag_name == 'select') {
				$(this).height($(this).height()*factor*(factor>0?1.2:0));
			} else {
				$(this).height($(this).height()*factor);
			}
		}
	});
}

// Graphical page: Show/hide plots and stats tables
function showPlotsStats(option,obj) {
	// Enable all buttons
	$('#showPlotsStatsOptions button').each(function(){
		$(this).attr('disabled',false);
		$(this).removeAttr('disabled');
	});
	// Disable this button
	$(obj).attr('disabled',true);
	// Options
	if (option == 1) {
		// Plots only
		$('.descrip_stats_table').hide();
		$('.gct_plot').show();
	} else if (option == 2) {
		// Stats only
		$('.descrip_stats_table').show();
		$('.gct_plot').hide();
	} else {
		// Plots+Stats
		$('.descrip_stats_table').show();
		$('.gct_plot').show();
	}
}

// Unescape a string that is URL encoded ("escape" in javascript)
function urldecode(str) {
	return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}

// Determine if URL is a proper URL
function isUrl(s) {
	var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;
	return regexp.test(s);
}

// Test if a URL is reachable
function testUrl(url,request_method,evalJsOnFail) {
	if (url == null) return false;
	if (request_method == null) request_method = 'get';
	var errorMsg = "Unfortunately, the REDCap server was not able to reach the web address you provided and thus was not able to verify it as valid.<div style='font-size:13px;padding:20px 0 5px;color:#C00000;'>Not verifiable: &nbsp;<b>"+url+"</b></div>";
	var errorTitle = "<img src='"+app_path_images+"cross.png' style='vertical-align:middle;'> <span style='color:#C00000;vertical-align:middle;'>Failed to verify web address</span>";
	// Start "working..." progress bar
	showProgress(1,300);
	// Do ajax request to test the URL
	var thisAjax = $.post(app_path_webroot+'ProjectGeneral/test_http_request.php',{ url: url, request_method: request_method },function(data){
		showProgress(0,0);
		if (data == '1') {
			simpleDialog("The web address is a valid URL and was able to be reached by the REDCap server.<div style='font-size:13px;padding:20px 0 5px;color:green;'>Valid: &nbsp;<b>"+url+"</b></div>","<img src='"+app_path_images+"tick.png' style='vertical-align:middle;'> <span style='color:green;vertical-align:middle;'>Success!</span>");
		} else {
			simpleDialog(errorMsg, errorTitle);
			// If provided javascript to eval upon failure, the eval it here
			if (evalJsOnFail != null) eval(evalJsOnFail);
		}
	});
	// If does not finish after X seconds, then throw error msg
	var maxAjaxTime = 10; // seconds
	setTimeout(function(){
		if (thisAjax.readyState == 1) {
			thisAjax.abort();
			showProgress(0,0);
			simpleDialog(errorMsg, errorTitle);
			// If provided javascript to eval upon failure, the eval it here
			if (evalJsOnFail != null) eval(evalJsOnFail);
		}
	},maxAjaxTime*1000);
}

// When clicking through the External Links, do logging via ajax before sending to destination
function ExtLinkClickThru(ext_id,openNewWin,url,form) {
	$.post(app_path_webroot+'ExternalLinks/clickthru_logging_ajax.php?pid='+pid, { url: url, ext_id: ext_id }, function(data){		
		if (data != '1') {
			alert(woops);
			return false;
		}
		if (!openNewWin) {
			if (form != '') {
				// Adv Link: Submit the form
				$('#'+form).submit();
			} else {
				// Simple Link: If not opening a new window, then redirect the current page
				window.location.href = url;
			}
		}
	});
}
// Open pop-up for the Help & FAQ page (can specify section using # anchor)
function helpPopup(anchor) {
	window.open(app_path_webroot_full+'index.php?action=help'+(anchor == null ? '' : '#'+anchor),'myWin','width=850, height=600, toolbar=0, menubar=0, location=0, status=0, scrollbars=1, resizable=1');
}

// Dynamics when setting email address in pop-up for inviting participant to finish a follow-up survey
function inviteFollowupSurveyPopupSelectEmail(ob) {
	var isDD = ($(ob).attr('id') == 'followupSurvEmailToDD');
	if (isDD) {
		$('#followupSurvEmailTo').val('');
	} else {
		$('#followupSurvEmailToDD').val('');
	}
}

// Open pop-up for inviting participant to finish a follow-up survey
function inviteFollowupSurveyPopup(survey_id,form,record,event_id) {
	if (!$('#inviteFollowupSurvey').length) $('body').append('<div id="inviteFollowupSurvey" style="display:none;"></div>');
	// Get the dialog content via ajax first
	$.post(app_path_webroot+'Surveys/invite_participant_popup.php?pid='+pid+'&survey_id='+survey_id+'&event_id='+event_id, { action: 'popup', form: form, record: record }, function(data){
		if (data == '0') {
			alert(woops);
			return;
		}
		$('#inviteFollowupSurvey').html(data);
		initWidgets();
		$('#inviteFollowupSurvey').dialog({ bgiframe: true, modal: true, width: 550, open: function(){fitDialog(this)}, 
			title: 'Email Survey Invitation to Participant "'+record+'"',
			buttons: {
			'Cancel': function() {
				$(this).dialog('close');
			},
			'Send Email': function() {
				// Trim email subject/message
				$('#followupSurvEmailSubject').val( trim($('#followupSurvEmailSubject').val()) );
				$('#followupSurvEmailMsg').val( trim($('#followupSurvEmailMsg').val()) );
				// If set exact time in future to send surveys, make sure time doesn't exist in the past
				var now_ymdhm = now.replace(/ /g, '').replace(/-/g, '').replace(/:/g, '');
				now_ymdhm = now_ymdhm.substring(0, now_ymdhm.length-2)*1;
				var eTs = $('#inviteFollowupSurvey #emailSendTimeTS').val();
				if (user_date_format_validation == 'mdy') {
					var emailSendTimeTs_ymdhm = eTs.substr(6,4)+eTs.substr(0,2)+eTs.substr(3,2)+eTs.substr(11,2)+eTs.substr(14,2);
				} else if (user_date_format_validation == 'dmy') {
					var emailSendTimeTs_ymdhm = eTs.substr(6,4)+eTs.substr(3,2)+eTs.substr(0,2)+eTs.substr(11,2)+eTs.substr(14,2);
				} else {
					var emailSendTimeTs_ymdhm = eTs.substr(0,4)+eTs.substr(5,2)+eTs.substr(8,2)+eTs.substr(11,2)+eTs.substr(14,2);
				}				
				if ($('#inviteFollowupSurvey input[name="emailSendTime"]:checked').val() == 'EXACT_TIME') {
					if ($('#inviteFollowupSurvey #emailSendTimeTS').val().length < 1) {
						simpleDialog($('#langFollowupProvideTime').html(),null,null,null,"$('#inviteFollowupSurvey #emailSendTimeTS').focus();");
						return;
					} else if (!redcap_validate(document.getElementById('emailSendTimeTS'),'','','hard','datetime_'+user_date_format_validation,1,1,user_date_format_delimiter)) {
						return;
					} else if (emailSendTimeTs_ymdhm < now_ymdhm) {
						simpleDialog($('#langFollowupTimeInvalid').html(),$('#langFollowupTimeExistsInPast').html());
						return;
					}
				}
				// Make sure we have email address, subject, and message
				// Typed email overrides the drop-down selection email
				var email = trim($('#followupSurvEmailTo').val());
				var static_email = 1;
				if (email == '' && $('#followupSurvEmailToDD').length) {
					email = trim($('#followupSurvEmailToDD').val());
					static_email = 0;
				}
				// Email is a valid email address OR is an integer (i.e. participant_id)
				if (!isEmail(email) && !isNumeric(email)) {
					simpleDialog('Please provide a valid email address');
					return;
				}
				// Set status message
				$(':button:contains("Cancel") span').html('Close');
				$(':button:contains("Send Email")').unbind().html('<span class="ui-button-text"><img src="'+app_path_images+'progress_circle.gif" style="vertical-align:middle;"> <span style="vertical-align:middle;">Sending...</span></span>'); 
				// Send email via ajax
				$.post(app_path_webroot+'Surveys/invite_participant_popup.php?pid='+pid+'&survey_id='+survey_id+'&event_id='+event_id, { email: email, 
					action: 'email', static_email: static_email, form: form, record: record, email_account: $('#followupSurvEmailFrom').val(), subject: $('#followupSurvEmailSubject').val(), msg: $('#followupSurvEmailMsg').val(),
					sendTime: $('#inviteFollowupSurvey input[name="emailSendTime"]:checked').val(), sendTimeTS: $('#inviteFollowupSurvey #emailSendTimeTS').val()}, function(data){
					if (data == '0') {
						alert(woops);
						return;
					}
					// Replace popup content and auto-hide after 4s
					$('#inviteFollowupSurvey').html(data);
					$('#inviteFollowupSurveyBtn').hide();
					$(':button:contains("Sending...")').remove(); //.html('<button id="closeInviteFollowupSurvey" onclick="alert(222);$(\'#inviteFollowupSurvey\').dialog(\'close\');" class="ui-button-text">Close</button>');
					//setTimeout(function(){ $('#inviteFollowupSurvey').dialog('close'); }, 6000);
				});
			} }
		});
	});
}

// Download file and append survey response_hash for File download field type on form/survey
function appendRespHash(name) {
	$('#'+name+'-link').attr('href',$('#'+name+'-link').attr('href')+'&__response_hash__='+$('#form input[name=__response_hash__]').val());
	return true;
}

// Open dialog to randomize a record
function randomizeDialog(record) {
	// Open dialog pop-up populated by ajax call content
	if (!$('#randomizeDialog').length) $('body').append('<div id="randomizeDialog" style="display:none;"></div>');
	// Get the dialog content via ajax first
	$.post(app_path_webroot+'Randomization/randomize_record.php?pid='+pid, { action: 'view', record: record }, function(data){
		if (data == '0') {
			alert(woops);
			return;
		}
		// Load dialog content
		$('#randomizeDialog').html(data);
		// Check if returned without error
		if (!$('#randomizeDialog #randomCriteriaFields').length) {
			// Open dialog
			$('#randomizeDialog').dialog({ bgiframe: true, modal: true, width: 750, open: function(){fitDialog(this)}, 
				title: '<img src="'+app_path_images+'arrow_switch.png" class="imgfix"> Cannot yet randomize '+table_pk_label+' "'+record+'"',
				buttons: {
					Close: function() {
						$(this).dialog('close'); 
					}
				}
			});
			return;
		}
		// Check if we're on a data entry page
		var isDataEntryPage = (page == 'DataEntry/index.php' || page == 'Mobile/data_entry.php');
		// Get arrays of criteria fields/events
		var critFldsCsv = $('#randomizeDialog #randomCriteriaFields').val();
		var critFlds = (critFldsCsv.length > 0) ? critFldsCsv.split(',') : new Array();	
		var critEvtsCsv = $('#randomizeDialog #randomCriteriaEvents').val();
		var critEvts = (critEvtsCsv.length > 0) ? critEvtsCsv.split(',') : new Array();	
		// Check if we're on a form right now AND if our criteria fields are present. 
		// If so, copy in their current values (because they may not have been saved yet).
		if (isDataEntryPage) {
			for (var i=0; i<critFlds.length; i++) {
				var field = critFlds[i];
				var event = critEvts[i];
				// Only do for correct event
				if (event == event_id) {
					if ($('#form select[name="'+field+'"]').length) {
						// Drop-down
						var fldVal = $('#form select[name="'+field+'"]').val();
						$('#random_form select[name="'+field+'"]').val(fldVal);
					} else if ($('#form input[name="'+field+'"]').length) {
						// Radio/YN/TF
						var fldVal = $('#form input[name="'+field+'"]').val();
						// First unselect all, then loop to find the one to select
						if ($('#random_form input[type="radio"][name="'+field+'"]').length) {
							radioResetVal(field,'random_form');	
						}
						$('#random_form input[name="'+field+'"]').val(fldVal);
						if (fldVal != '' && $('#random_form input[type="radio"][name="'+field+'___radio"]').length) {
							$('#random_form input[name="'+field+'___radio"]').each(function(){
								if ($(this).val() == fldVal) {
									$(this).prop('checked',true);
								}
							});
						}
					}
				}
			}
			// If we're grouping by DAG and user is NOT in a DAG, then transfer DAG value from form to pop-up
			if ($('#form select[name="__GROUPID__"]').length && $('#random_form select[name="redcap_data_access_group"]').length) {
				$('#random_form select[name="redcap_data_access_group"]').val( $('#form select[name="__GROUPID__"]').val() );
			}
		}
		// Open dialog
		$('#randomizeDialog').dialog({ bgiframe: true, modal: true, width: 750, open: function(){fitDialog(this);if (isMobileDevice) fitDialog(this);}, 
			title: '<img src="'+app_path_images+'arrow_switch.png" class="imgfix"> Randomizing '+table_pk_label+' "'+record+'"',
			buttons: {
				Cancel: function() { 
					// Lastly, clear out dialog content
					$('#randomizeDialog').html('');
					$(this).dialog('close'); 
				},
				'Randomize': function() {
					// Make sure all fields have a value
					var critFldVals = new Array();
					if ($('#randomizeDialog #random_form table.form_border tr').length) {
						var fldsNoValCnt = 0;
						// Loop through all strata fields
						for (var i=0; i<critFlds.length; i++) {
							var isDropDownField = $('#randomizeDialog #random_form select[name="'+critFlds[i]+'"]').length;
							if (!isDropDownField && $('#randomizeDialog #random_form input[name="'+critFlds[i]+'"]').val().length < 1) {
								// Radio/TF/YN w/o value
								fldsNoValCnt++;
							} else if (isDropDownField && $('#randomizeDialog #random_form select[name="'+critFlds[i]+'"]').val().length < 1) {
								// Dropdown w/o value
								fldsNoValCnt++;
							} else {
								critFldVals[i] = (isDropDownField ? $('#randomizeDialog #random_form select[name="'+critFlds[i]+'"]').val() : $('#randomizeDialog #random_form input[name="'+critFlds[i]+'"]').val());
							}
						}
						// Also check DAG field, if exists
						if ($('#random_form select[name="redcap_data_access_group"]').length && $('#random_form select[name="redcap_data_access_group"]').val().length < 1) {
							fldsNoValCnt++;
						}
						// If any missing fields are missing a value, stop here and prompt user
						if (fldsNoValCnt > 0) {
							simpleDialog(fldsNoValCnt+" strata/criteria field(s) do not yet have a value. "
								+ "You must first provide them with a value before randomization can be performed.","VALUES MISSING FOR STRATA/CRITERIA FIELDS!");
							return;
						}
					}
					// AJAX call to save data and randomize record
					$.post(app_path_webroot+'Randomization/randomize_record.php?pid='+pid, { event_id: event_id, redcap_data_access_group: $('#random_form select[name="redcap_data_access_group"]').val(), existing_record: document.form.hidden_edit_flag.value, action: 'randomize', record: record, fields: critFlds.join(','), field_values: critFldVals.join(',') }, function(data){
						if (data == '0') {
							alert(woops);
							return;
						}
						// Replace dialog content with response data
						$('#randomizeDialog').html(data);
						// Replace dialog buttons with a Close button
						$('#randomizeDialog').dialog("option", "buttons", []);
						fitDialog($('#randomizeDialog'));
						// Initialize widgets
						initWidgets();
						// Replace Randomize button on left-hand menu
						var success = $('#randomizeDialog #alreadyRandomizedTextWidget').length;
						if (success) {
							// Replace Randomize button on form with "Already Randomized" text and redisplay the field
							$('#alreadyRandomizedText').html( $('#randomizeDialog #alreadyRandomizedTextWidget').html() );
							$('#randomizationFieldHtml').show();
							// If on data entry form and criteria fields are on this form, disable them and set their values
							if (isDataEntryPage) {
								// Set hidden_edit_flag to 1 (in case this is a new record)
								$('#form input[name="hidden_edit_flag"]').val('1');
								// Loop through criteria fields
								for (var i=0; i<critFlds.length; i++) {
									var field = critFlds[i];
									var fldVal = critFldVals[i];
									var event = critEvts[i];
									// Only do for correct event
									if (event == event_id) {
										if ($('#form select[name="'+field+'"]').length) {
											// Drop-down
											$('#form select[name="'+field+'"]').val(fldVal);
											// Disable it
											$('#form select[name="'+field+'"]').prop('disabled',true);
										} else if ($('#form input[name="'+field+'"]').length) {
											// Radio/YN/TF
											// First unselect all, then loop to find the one to select
											if ($('#form input[type="radio"][name="'+field+'"]').length) {
												radioResetVal(field,'form');
											}												
											$('#form input[name="'+field+'"]').val(fldVal);
											if (fldVal != '' && $('#form input[type="radio"][name="'+field+'___radio"]').length) {
												$('#form input[name="'+field+'___radio"]').each(function(){
													if ($(this).val() == fldVal) {
														$(this).prop('checked',true);
													}
													// Disable it
													$(this).prop('disabled',true);
												});
											}
											// Now hide the "reset value" link for this field
											$('#form tr#'+field+'-tr a.cclink').hide();
										}
									}
								}
								// Now set value for randomization field, if on this form
								var fldVal = $('#randomizeDialog #randomizationFieldRawVal').val();
								var field = $('#randomizeDialog #randomizationFieldName').val();
								var event = $('#randomizeDialog #randomizationFieldEvent').val();
								// Only do for correct event
								if (event == event_id) {
									if ($('#form select[name="'+field+'"]').length) {
										// Drop-down
										$('#form select[name="'+field+'"]').val(fldVal);
										// Disable it
										$('#form select[name="'+field+'"]').prop('disabled',true);
									} else if ($('#form input[name="'+field+'"]').length) {
										// Radio/YN/TF
										// First unselect all, then loop to find the one to select
										radioResetVal(field,'form');	
										$('#form input[name="'+field+'"]').val(fldVal);
										$('#form input[name="'+field+'___radio"]').each(function(){
											if ($(this).val() == fldVal) {
												$(this).prop('checked',true);
											}
											// Disable it
											$(this).prop('disabled',true);
										});
									}
								}
								// If we're grouping by DAG and user is NOT in a DAG, then transfer DAG value from pop-up back to form 
								// after randomizing AND also disabled the DAG drop-down to prevent someone changing it.
								if ($('#form select[name="__GROUPID__"]').length && $('#randomizeDialog #redcap_data_access_group').length) {
									$('#form select[name="__GROUPID__"]').val( $('#randomizeDialog #redcap_data_access_group').val() );
									$('#form select[name="__GROUPID__"]').prop('disabled',true);
								}
							}
							// Just in case we're using auto-numbering and current ID does not reflect saved ID (due to simultaneous users),
							// change the record value on the page in all places.
							$('#form input[name="'+table_pk+'"], #form input[name="__old_id__"]').val( $('#randomizeDialog #record').val() );
							// Hide the duplicate randomization field label (if Left-Aligned)
							$('.randomizationDuplLabel').hide();
							// Now that record is randomized, run branching and calculations on form in case any logic is built off of fields used in randomization
							calculate();
							doBranching();
						}
					});
				}
			}
		});
	});
}

// Display jQuery UI dialog with Close button (provide id, title, content, width, onClose JavaScript event as string)
function simpleDialog(content,title,id,width,onCloseJs,closeBtnTxt,okBtnJs,okBtnTxt) {
	// If no id is provided, create invisible div on the fly to use as dialog container
	var idDefined = true;
	if (id == null || trim(id) == '') {
		id = "popup"+Math.floor(Math.random()*10000000000000000);
		idDefined = false;
	}
	// If this DOM element doesn't exist yet, then add it and set title/content
	if ($('#'+id).length < 1) {
		$('body').append('<div class="simpleDialog" id="'+id+'"></div>');
		// Set content/title, if not provided
		if (content == null) content = '';
		// Set content
		$('#'+id).html(content);
		var existInDom = false;
	} else {
		if (title == null || title == '') title = $('#'+id).attr('title');
		var existInDom = true;
	}
	// default title
	if (title == null) title = '<span style="color:#555;font-weight:normal;">Alert</span>'; 
	// Set parameters
	if (!isNumeric(width)) width = 500; // default width
	// Set default button text
	if (okBtnTxt == null) {
		// Default "okay" text for secondary button
		okBtnTxt = 'Okay';
		// Default "cancel" text for first button when have 2 buttons
		if (okBtnJs != null && closeBtnTxt == null) closeBtnTxt = 'Cancel';
	}
	if (closeBtnTxt == null) {
		// Default "close" text for single button
		closeBtnTxt = 'Close';
	}
	// Set up button(s)
	if (okBtnJs == null) {
		// Only show a Close button
		var btns =	[{ text: closeBtnTxt, click: function() { 
						// Destroy dialog and remove div from DOM if was created on the fly
						$(this).dialog('close').dialog('destroy');
						if (!idDefined) $('#'+id).remove(); 
					} }];
	} else {
		// Show two buttons
		var btns =	[{ text: closeBtnTxt, click: function() {
						// Destroy dialog and remove div from DOM if was created on the fly
						$(this).dialog('close').dialog('destroy');
						if (!idDefined) $('#'+id).remove();
					}},
					{text: okBtnTxt, click: function() {
						// If okBtnJs was provided, then eval it to execute
						if (okBtnJs != null) {
							if (typeof(okBtnJs) == 'string') {
								eval(okBtnJs);
							} else {
								var okBtnJsFunc = okBtnJs;
								eval("okBtnJsFunc()");
							}
						}
						// Destroy dialog and remove div from DOM if was created on the fly
						$(this).dialog('destroy');
						if (!idDefined) $('#'+id).remove();
					}}];
	}
	// Show dialog
	$('#'+id).dialog({ bgiframe: true, modal: true, width: width, title: title, buttons: btns });
	// If Javascript is provided for onClose event, then set it here
	if (onCloseJs != null) {
		var dialogcloseFunc = (typeof(onCloseJs) == 'string') ? "function(){"+onCloseJs+"}" : onCloseJs;
		eval("$('#"+id+"').bind('dialogclose',"+dialogcloseFunc+");");
	}
	// If div already existed in DOM beforehand (i.e. wasn't created here on the fly), then re-add title to div because it gets lost when converted to dialog
	if (existInDom)	$('#'+id).attr('title', title);
}

// Convert HTML <br /> tags to new lines \n
function br2nl(val) {
	return val.replace(/<br\s*\/?>/mg,"\n");
};

// Convert new lines \n to HTML <br /> tags
function nl2br(val) {
	return val.replace(/\n/g,"<br />");
};

// Navigate to "set up survey" page
function setUpSurvey(ob) {
	if (ob.value != '') {
		window.location.href = app_path_webroot+"Surveys/create_survey.php?pid="+pid+"&view=showform&page="+ob.value;
	}
}

// Test if value is a URL. If not, give error message and return cursor to field
function isUrlError(ob) {	
	ob.style.fontWeight = 'normal';
	ob.style.backgroundColor='#FFFFFF';
	var url = ob.value = trim(ob.value);
	if (url.length < 1) return true;
	if (!isUrl(url)) {
		alert('Sorry, but the web address you entered "'+url+'" does not appear to be a proper URL (e.g., http://google.com). Please fix it and try again.');
		ob.style.fontWeight = 'bold';
		ob.style.backgroundColor = '#FFB7BE';
		setTimeout(function () { ob.focus() }, 1);
		return false;
	}
	return true;
}

// Open dialog to allow user to set up secondary/tertiary email for their REDCap account
function setUpAdditionalEmails() {
	// First, load a dialog via ajax
	$.post(app_path_webroot+'Profile/set_up_emails.php',{ action: 'view' },function(data){
		var json_data = jQuery.parseJSON(data);
		initDialog('setUpAdditionalEmails');
		$('#setUpAdditionalEmails').addClass('simpleDialog').html(json_data.popupContent);
		$('#setUpAdditionalEmails').dialog({ bgiframe: true, modal: true, width: 600, title: json_data.popupTitle, buttons: [
			{ text: 'Cancel',click: function(){
				$(this).dialog('destroy');
			}},
			{ text: json_data.saveBtnTxt, click: function(){
				saveAdditionalEmails();
			}}
		] });
	});
}

// Save secondary/tertiary email for their REDCap account
function saveAdditionalEmails() {
	// Get new email value
	var new_email = $('#add_new_email').val();
	// Make sure it has a value
	if (new_email == '') {
		simpleDialog("Please enter a new email address");
		return false;
	}	
	// Validate that emails match
	if (!validateEmailMatch('add_new_email','add_new_email_dup')) {
		return false;
	}
	// Make sure this email isn't the same as existing ones for this user
	if ($('#existing_user_email').val() == new_email || ($('#existing_user_email2').val() != '' && $('#existing_user_email2').val() == new_email)
		|| ($('#existing_user_email3').val() != '' && $('#existing_user_email3').val() == new_email)) {
		simpleDialog("The new email address that you entered is an email already associated with this account. Please enter another email address if you would still like to add one.");
		return false;
	}	
	// Save data via ajax
	$.post(app_path_webroot+'Profile/set_up_emails.php',{ action: 'save', add_new_email: new_email },function(data){
		var json_data = jQuery.parseJSON(data);
		if (json_data.response != '1') { alert(woops); return false; }
		simpleDialog(json_data.popupContent,json_data.popupTitle,null,600);
		$('#setUpAdditionalEmails').dialog('destroy');
	});
}

// Remove user's secondary or tertiary email from their account
function removeAdditionalEmail(email_account) {
	// Place email address in span/divs in dialog
	var email = $('#user_email'+email_account+'-span').html();
	$('#user-email-dialog').html(email);
	// Open dialog
	$('#removeAdditionalEmail').dialog({ bgiframe: true, modal: true, width: 600, buttons: [
		{ text: 'Cancel',click: function(){
			$(this).dialog('destroy');
		}},
		{ text: 'Remove', click: function(){
			// Remove email from account via ajax
			$.post(app_path_webroot+'Profile/additional_email_remove.php',{ email_account: email_account },function(data){
				if (data=='1') {
					$('#removeAdditionalEmail').dialog('destroy');
					simpleDialog("The email address has now been removed from your REDCap account. The page will now reload to reflect the changes.","Email removed!",null,null,"window.location.reload();");
				} else {
					alert(woops);
				}
			});
		}}
	] });
}

// Validation that 2 email fields match (when forcing user to re-enter email)
function validateEmailMatch(email1id,email2id) {
	$('#'+email1id).val( trim($('#'+email1id).val()) );
	$('#'+email2id).val( trim($('#'+email2id).val()) );
	if ($('#'+email1id).val().length > 0 && $('#'+email1id).val() != $('#'+email2id).val()) {
		// Display error dialog and put focus back on second field
		simpleDialog("The re-entered email address did not match the first. Please re-enter your email address.",null,null,null,"$('#"+email2id+"').focus();");
		return false;
	}
	return true;
}

// Test if string is a valid domain name (i.e. domain from a URL)
function isDomainName(domain) {
	// Set regex to be used to validate the domain
	var dwRegex = /^([a-z0-9-]+)(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
	// Return boolean
	return dwRegex.test(trim(domain));
}

// Check if an email address is acceptable regarding the "domain whitelist for user emails" (if enabled)
function emailInDomainWhitelist(ob,displayErrorMsg) {
	if (email_domain_whitelist.length > 0) {
		var thisEmail = trim($(ob).val());
		if (thisEmail.length < 1) return null;
		if (displayErrorMsg == null) displayErrorMsg = true;
		var thisEmailParts = thisEmail.split('@');
		var thisEmailDomain = thisEmailParts[1].toLowerCase();
		if (!in_array(thisEmailDomain, email_domain_whitelist)) {
			if (displayErrorMsg) {
				var id = $(ob).attr('id');
				var focusJS = (id == null) ? null : "$('#"+id+"').focus();";
				simpleDialog('The domain of the email entered is invalid. (The domain name is the part of the email address after the ampersand.) '
							+'The only acceptable domain names for email addresses are the ones listed below. You may only enter an email that ends '
							+'in one of these domain names. Please try another email address.<br><br>Acceptable domains:<br><b>'
							+email_domain_whitelist.join('<br>')+'</b>','"'+thisEmailDomain+'" is not an acceptable domain name for emails',null,550,focusJS);
			}
			return false;
		} else {
			return true;
		}
	}
	// Return null if domain whitelist not enabled
	return null;
}

// Add/edit/delete a template project
function projectTemplateAction(action,project_id) {
	// Check project_id
	if (project_id == null) project_id = '';
	// Set action button text and action, as well as title/description values
	var hideChooseAnother = 0;
	var cancelBtn  = "Close";
	var cancelAction = "window.location.reload();";
	var actionBtn  = null;
	var actionSave = null;
	var title = '';
	var description = '';
	var enabled = '0';
	if (action == 'prompt_delete' || action == 'prompt_addedit') {
		cancelBtn  = "Cancel";
		cancelAction = null;
		// Set flag to hide the "choose another project" when accessing this from inside a project
		if (action == 'prompt_addedit' && project_id != '' && page == 'index.php') {
			hideChooseAnother = 1;
		}
		if (action == 'prompt_addedit' && project_id == '') {
			// Choosing project to add, so don't show Save button
			actionBtn = actionSave = null;
		} else {
			// Set secondary button text and action
			actionBtn = (action == 'prompt_delete') ? "Remove" : "Save";
			actionSave = (action == 'prompt_delete') ? "projectTemplateAction('delete',"+project_id+")" : "projectTemplateAction('addedit',"+project_id+")";
		}
	} else if (action == 'addedit') {
		title = $('#projTemplateTitle').val();
		description = $('#projTemplateDescription').val();
		enabled = $('input[name="projTemplateEnabled"]:checked').val();
	}
	// Remove dialog if already exists
	$('#projTemplateDialog').remove();
	// Perform action via ajax
	$.post(app_path_webroot+'ControlCenter/project_templates_ajax.php',{ enabled: enabled, action: action, project_id: project_id, title: title, description: description, hideChooseAnother: hideChooseAnother },function(data){
		if (data=='0'){alert(woops);return;}
		var json_data = jQuery.parseJSON(data);
		simpleDialog(json_data.content,json_data.title,'projTemplateDialog',null,cancelAction,cancelBtn,actionSave,actionBtn);
	});
}

// Do quick check if logic errors exist in string (not very extensive) 
// - used for both Data Quality and Automated Survey Invitations
function checkLogicErrors(brStr,display_alert,forceEventNotationForLongitudinal) {
	var brErr = false;
	if (display_alert == null) display_alert = false;
	// If forceEventNotationForLongitudinal=true, then make sure that field_names are preceded with [event_name] for longitudinal projects
	if (forceEventNotationForLongitudinal == null) forceEventNotationForLongitudinal = false;
	var msg = "<b>ERROR! Syntax errors exist in the logic:</b><br>"
	if (brStr.length > 0) {
		// Must have at least one [ or ]
		if (brStr.split("[").length == 1 || brStr.split("]").length == 1) {
			msg += "&bull; Square brackets are missing. You have either not included any variable names in the logic or you have forgotten to put square brackets around the variable names.<br>";
			brErr = true;
		}
		// If longitudinal and forcing event notation for fields, then must be referencing events for variable names
		if (longitudinal && forceEventNotationForLongitudinal && (brStr.split("][").length <= 1 
			|| (brStr.split("][").length-1)*2 != (brStr.split("[").length-1) 
			|| (brStr.split("][").length-1)*2 != (brStr.split("]").length-1))) {
			msg += "&bull; One or more fields are not referenced by event. Since this is a longitudinal project, you must specify the unique event name "
				 + "when referencing a field in the logic. For example, instead of using [age], you must use [enrollment_arm1][age], "
				 + "assuming that enrollment_arm1 is a valid unique event name in your project. You can find a list of all your project's "
				 + "unique event names on the Define My Events page.<br>";
			brErr = true;
		}
		// Check symmetry of "
		if ((brStr.split('"').length - 1)%2 > 0) {
			msg += "&bull; Odd number of double quotes exist<br>";
			brErr = true;
		}
		// Check symmetry of '
		if ((brStr.split("'").length - 1)%2 > 0) {
			msg += "&bull; Odd number of single quotes exist<br>";
			brErr = true;
		}
		// Check symmetry of [ with ]
		if (brStr.split("[").length != brStr.split("]").length) {
			msg += "&bull; Square bracket is missing<br>";
			brErr = true;
		}
		// Check symmetry of ( with )
		if (brStr.split("(").length != brStr.split(")").length) {
			msg += "&bull; Parenthesis is missing<br>";
			brErr = true;
		}
		// Make sure does not contain $ dollar signs
		if (brStr.indexOf('$') > -1) {
			msg += "&bull; Illegal use of dollar sign ($). Please remove.<br>";
			brErr = true;
		}
		// Make sure does not contain ` backtick character
		if (brStr.indexOf('`') > -1) {
			msg += "&bull; Illegal use of backtick character (`). Please remove.<br>";
			brErr = true;
		}
	}
	// If errors exist, stop and show message
	if (brErr && display_alert) {
		simpleDialog(msg+"<br>You must fix all errors listed before you can save this logic.");
		return true;
	}
	return brErr;
}

// Save a new value for a config setting (super users only)
function setConfigVal(settingName,value,reloadPage) {
	$.post(app_path_webroot+'ControlCenter/set_config_val.php',{ settingName: settingName, value: value },function(data){
		if (data == '1') {
			alert("The setting has been successfully saved!");
			if (reloadPage != null && reloadPage) {
				window.location.reload();
			}
		} else {
			alert(woops);
		}
	});
}

// Send single email
function sendSingleEmail(from,to,subject,message,showDialogSuccess,evalJs) {
	if (evalJs == null) evalJs = '';
	if (showDialogSuccess == null) showDialogSuccess = false;
	var this_pid = getParameterByName('pid');
	var url_pid = (isNumeric(this_pid)) ? '?pid='+this_pid : ''; // If within a project, send project_id
	$.post(app_path_webroot+'ProjectGeneral/send_single_email.php'+url_pid,{from:from,to:to,subject:subject,message:message},function(data){
		if (data != '1') {
			alert(woops);
		} else {
			if (showDialogSuccess) simpleDialog("Your email was successfully sent to <a style='text-decoration:underline;' href='mailto:"+to+"'>"+to+"</a>.","EMAIL SENT!");
			if (evalJs != '') eval(evalJs);
		}
	});
}

// Equivalent to PHP's basename function
function basename(path) {
    return path.replace(/\\/g,'/').replace( /.*\//, '' );
}
 
// Equivalent to PHP's dirname function
function dirname(path) {
    return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');;
}

// Display Piping explanation dialog pop-up
function pipingExplanation() {
	// Get content via ajax
	$.get(app_path_webroot+'DataEntry/piping_explanation.php',{},function(data){
		var json_data = jQuery.parseJSON(data);
		simpleDialog(json_data.content,json_data.title,'piping_explain_popup',800);
		fitDialog($('#piping_explain_popup'));
	});
}

// Enable fixed table headers for event grid
function enableFixedTableHdrs(table_id,floatFirstRow,floatFirstCol,forceFixedHdrs) {
	// Set max columns for auto-enable
	var maxColsAutoEnable = 25;
	// Set div class for the clone table div
	var cloneClassRow = 'div.FixedHeader_Header';
	var cloneClassCol = 'div.FixedHeader_Left';
	// Set params
	if (floatFirstRow == null) floatFirstRow = true;
	if (floatFirstCol == null) floatFirstCol = true;
	if (forceFixedHdrs == null) forceFixedHdrs = false;
	// Check height and width of table to see if we should even try to enable floating
	var window_width = $(window).width();
	var table_width  = $('#'+table_id).width();
	floatFirstCol = (floatFirstCol && table_width  > window_width);
	floatFirstRow = (floatFirstRow && $('#'+table_id).height() > $(window).height());
	// Enable if table will scroll AND not IE6 or IE7
	if (!isIE6 && !isIE7 && (floatFirstCol || floatFirstRow)) {
		// If more than X columns, then don't turn on automatically but put an option above table for user to choose to enable the fixed headers
		if (!forceFixedHdrs && $('#'+table_id+' thead tr th').length > maxColsAutoEnable) {
			// If button to force enable exists and is disabled, then stop here
			if ($('#FixedTableHdrsEnable').length && $('#FixedTableHdrsEnable').prop('disabled')) return;
			// Create new span on the page
			$('body').append('<button id="FixedTableHdrsEnable" class="jqbuttonsm" onclick="$(this).button(\'disable\');enableFixedTableHdrs(\''+table_id+'\',\''+floatFirstRow+'\',\''+floatFirstCol+'\',true);">Enable floating table headers</button>');
			// Position the span
			var table_pos = $('#'+table_id).position();
			var span_pos_top  = (table_pos.top-$('#FixedTableHdrsEnable').outerHeight(true)-5);
			var span_pos_left = (window_width-$('#FixedTableHdrsEnable').outerWidth(true)-15);
			// Display the span
			$('#FixedTableHdrsEnable').show().css({'top': span_pos_top+'px', 'left': span_pos_left+'px'}).button();
			return;
		}	
		// Wait a little bit (issues with some browsers when initially loading page)
		setTimeout(function(){
			// If function is re-run, then remove previous floating headers
			$(cloneClassRow).remove();
			$(cloneClassCol).remove();
			// Set fixed headers for table
			new FixedHeader( document.getElementById(table_id), {"left": floatFirstCol, "top": floatFirstRow});
			// If floating the first column, then perform extra adjustments
			if (floatFirstRow) {
				// Loop through each header cell in first row
				var eq = 0;		
				$('#'+table_id+' thead tr th').each(function(){
					var thisHdrCell = $(this);
					var hw = thisHdrCell.css('width');
					var hh = thisHdrCell.css('height');
					// Manually set the original table's cell width first
					thisHdrCell.css({'height': hh, 'width': hw});
					// Now set the same height/width for its clone
					$(cloneClassRow+' table thead tr th').eq(eq).css({'height': hh, 'width': hw});
					eq++;
				});
			}
			// If floating the first column, then perform extra adjustments
			if (floatFirstCol) {
				// Header: Make some height adjustments because FixedHeader doesn't do it quite correctly in all browsers
				var thdr = $('#'+table_id+' tr th:first');
				var hw = thdr.css('width');
				var hh = thdr.css('height');
				thdr.css({'height': hh, 'width': hw});
				$(cloneClassCol+' table tr th:first').css({'height': hh, 'width': hw});
				// First column in all rows: Make some height adjustments because FixedHeader doesn't do it quite correctly in all browsers
				var eq = 0;		
				$('#'+table_id+' tbody tr').each(function(){
					var firstcell = $(this).children('td:first');
					var firstcellclone = $(cloneClassCol+' table tbody tr').eq(eq);
					var tw = firstcell.css('width');
					var th = firstcell.css('height');
					firstcell.css({'height': th, 'width': tw});
					firstcellclone.children('td:first').css({'height': th, 'width': tw});
					firstcellclone.css({'height': $(this).css('height')});
					eq++;
				});
			}
		},50);
	}
}

// Equivalent of htmlspecialchars() in PHP
function htmlspecialchars(text) {
  return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}

// Determine if an element is viewable within the current viewport of the web browser
function elementInViewport(el) {
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;
	while(el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}
	return (
		top >= window.pageYOffset &&
		left >= window.pageXOffset &&
		(top + height) <= (window.pageYOffset + window.innerHeight) &&
		(left + width) <= (window.pageXOffset + window.innerWidth)
	);
}

// My Projects table: Get records/fields/instruments counts via ajax
function getRecordOrFieldCountsMyProjects(thistype, theseVisiblePids) {		
	// Get projects counts via ajax
	$.post(app_path_webroot+'ProjectGeneral/project_stats_ajax.php',{ type: thistype, pids: theseVisiblePids }, function(data){
		if (data != '0') {
			// Parse JSON
			var json = jQuery.parseJSON(data);
			// Loop through each project
			if (thistype == 'records') {
				// RECORDS
				for (var this_pid in json) {
					$('#pid-cntr-'+this_pid).html( json[this_pid]['r'] );
				}
				// Get list of more pid's to process
				var nextVisiblePids = json.next_pids;
				if (nextVisiblePids.length > 0) {
					// DO MORE
					getRecordOrFieldCountsMyProjects('records', nextVisiblePids);
				}
			} else if (thistype == 'fields') {
				// FIELDS/INSTRUMENTS
				for (var this_pid in json) {
					$('#pid-cntf-'+this_pid).html( json[this_pid]['f'] );
					$('#pid-cnti-'+this_pid).html( json[this_pid]['i'] );
				}
			}
		}
	});
}

// Display DDP explanation dialog
function ddpExplainDialog() {
	initDialog('ddpExplainDialog');
	var dialogHtml = $('#ddpExplainDialog').html();
	if (dialogHtml.length > 0) {
		$('#ddpExplainDialog').dialog('open');
	} else {
		$.get(app_path_webroot+'DynamicDataPull/info.php',{ },function(data) {
			var json_data = jQuery.parseJSON(data);
			$('#ddpExplainDialog').html(json_data.content).dialog({ bgiframe: true, modal: true, width: 750, title: json_data.title,
				open: function(){ fitDialog(this); }, 
				buttons: { 
					Close: function() { $(this).dialog('close'); }
				} 
			});
		});
	}
}

// Initialize a "fake" drop-down list (like a button to reveal a "drop-down" list)
function showBtnDropdownList(ob,event,list_div_id) {
	// Prevent $(window).click() from hiding this
	try {
		event.stopPropagation();
	} catch(err) {
		window.event.cancelBubble=true;
	}
	// Set drop-down div object
	var ddDiv = $('#'+list_div_id);
	// If drop-down is already visible, then hide it and stop here
	if (ddDiv.css('display') != 'none') {
		ddDiv.hide();
		return;
	}
	// Set width
	if (ddDiv.css('display') != 'none') {
		var ebtnw = $(ob).width();
		var eddw  = ddDiv.width();
		if (eddw < ebtnw) ddDiv.width( ebtnw );
	}
	// Set position
	var btnPos = $(ob).offset();
	ddDiv.show().offset({ left: btnPos.left, top: (btnPos.top+$(ob).outerHeight()) });
}

// Matrix field ranking validation function
function matrix_rank(crnt_val,crnt_var,grid_vars) {
    // Reset validation flag on page
    $('#field_validation_error_state').val('0');    
    // array of all field_names within matrix group
    // gv[0]=>'w1',gv[1]=>'w2',gv[2]=>'w3',...
    var grid_vars = grid_vars.split(',');
    var id, i, crnt_var_position;
	var rank_remove_label = $('#matrix_rank_remove_label');
	var remove_label_time = 2500;
    // loop through other variables within this matrix group 
    for (i = 0; i < grid_vars.length; i++) {
        if (crnt_var !== grid_vars[i]) {
            id = "mtxopt-"+grid_vars[i]+"_"+crnt_val;
            if ($("#"+id).is(":checked")) {
				// Uncheck the input
				radioResetVal(grid_vars[i],'form');
				// Add temporary "value removed" label
				crnt_var_position = $("#"+id).position();
				rank_remove_label.css({'left': (crnt_var_position.left-30)+'px', 'top': (crnt_var_position.top)+'px'}).show();
				setTimeout(function(){
					rank_remove_label.hide();
				},remove_label_time);
            }
        }
    }
}

// ****************************************************************************************************
// Variables to be set upon page load
// ****************************************************************************************************

// Standard error message
var woops = "Woops! An error occurred. Please try again.";
// Determine if using Internet Explorer
var agt = navigator.userAgent.toLowerCase(); 
var isIE = (agt.indexOf('msie') > -1);
// Determine if using iOS
var isIOS = (agt.indexOf('ipad') > -1 || agt.indexOf('iphone') > -1 || agt.indexOf('ipod') > -1);
var isIOS5andBelow = (isIOS) ? /OS [2-5]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent) : false;
// Returns if browser is IE6
var isIE6 = (vIE() == 6);
// Returns if browser is IE7
var isIE7 = (vIE() == 7);
// Determine if we're on a global page or a project-level page (check for pid or pnid)
var isProjectPage = (getParameterByName('pid') != "" || getParameterByName('pnid') != "");
// Set original value to show the branching logic prompt "Erase Value" on forms when it attempts to hide a field with a value due to branching logic
var showEraseValuePrompt = 1;
// Set flag to detect if data entry form values have been modified
var dataEntryFormValuesChanged = false;
// Set placeholder for randomization criteria field list (if using randomization module)
var randomizationCriteriaFieldList = null;
// Functions to run after page is fully loaded
$(function(){
	// Initialize the project-level page
	if (isProjectPage) initPage();
	// Initialize widgets, buttons, etc. on page
	initWidgets();
	// Rewrite jQuery $.post function to automatically send CSRF token for all Post requests
	$.post = function (url, data, success) {
		if (window.redcap_csrf_token) $.extend(data, { redcap_csrf_token: redcap_csrf_token });
		return $.ajax({type: "POST", url: url, data: data, success: success});
	}
	// If SSL is being utilized according to REDCap base URL but user is on a non-SSL page, then redirect to SSL version of same page.
	try {
		if (app_path_webroot_full.substring(0,6) == 'https:' && document.location.protocol != 'https:') {
			window.location.href = document.URL.replace(/http:/i,'https:');
		}
	} catch(e) { }
});