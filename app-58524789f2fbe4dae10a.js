webpackJsonp([0xd2a57dc1d883],{177:function(n,e,t){"use strict";function o(n,e,t){var o=u.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return u.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var u=[{plugin:t(727),options:{plugins:[]}},{plugin:t(730),options:{plugins:[]}},{plugin:t(728),options:{plugins:[]}}]},484:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(684),"component---src-templates-category-template-js":t(693),"component---src-templates-post-template-js":t(697),"component---src-templates-page-template-js":t(695),"component---src-templates-place-template-js":t(696),"component---src-templates-municipality-template-js":t(694),"component---src-pages-404-js":t(686),"component---src-pages-category-js":t(687),"component---src-pages-contact-js":t(688),"component---src-pages-index-js":t(689),"component---src-pages-municipality-js":t(690),"component---src-pages-my-files-js":t(691),"component---src-pages-search-js":t(692)},e.json={"layout-index.json":t(698),"offline-plugin-app-shell-fallback.json":t(719),"category-testimonies.json":t(705),"category-sayings.json":t(704),"like-nonsense.json":t(716),"i-may-not-have-gone.json":t(712),"i-have-not-failed.json":t(711),"good-friends.json":t(708),"there-are-only-two.json":t(723),"imperfection-is-beauty.json":t(713),"i-am-so-clever.json":t(710),"people-will-forget.json":t(720),"you-only-live-once.json":t(725),"be-who-you-are.json":t(702),"two-things-are-infinite.json":t(724),"draft-post.json":t(707),"about.json":t(701),"success.json":t(722),"hytter-hogabu.json":t(709),"kommune-vaksdal.json":t(715),"404.json":t(699),"category.json":t(703),"contact.json":t(706),"index.json":t(714),"municipality.json":t(717),"my-files.json":t(718),"search.json":t(721),"404-html.json":t(700)},e.layouts={"layout---index":t(685)}},485:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},c=t(1),s=o(c),l=t(2),f=o(l),p=t(300),d=o(p),m=t(142),h=o(m),g=t(177),y=t(1083),j=o(y),x=function(n){var e=n.children;return s.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=u(this,n.call(this)),a=t.location;return d.default.getPage(a.pathname)||(a=i({},a,{pathname:"/404.html"})),o.state={location:a,pageResources:d.default.getResourcesForPathname(a.pathname)},o}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(s.default.Component);v.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=v,n.exports=e.default},142:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(890),u=o(r),a=(0,u.default)();n.exports=a},486:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(175),u=t(301),a=o(u),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),u=(0,a.default)(o,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),i[u])return i[u];var c=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return c=n,i[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return c=n,i[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return c=n,i[u]=n,!0}return!1}),c}}},487:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(349),u=o(r),a=t(177),i=(0,a.apiRunner)("replaceHistory"),c=i[0],s=c||(0,u.default)();n.exports=s},700:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(742)})})}},699:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(743)})})}},701:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(744)})})}},702:function(n,e,t){t(3),n.exports=function(n){return t.e(53893002276920,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(745)})})}},704:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf8217a05b0e6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(746)})})}},705:function(n,e,t){t(3),n.exports=function(n){return t.e(20455069509796,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(747)})})}},703:function(n,e,t){t(3),n.exports=function(n){return t.e(0x68a3bb584008,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(748)})})}},706:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(749)})})}},707:function(n,e,t){t(3),n.exports=function(n){return t.e(0xacdbfcf591a5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(750)})})}},708:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe1768fbfa8df,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(751)})})}},709:function(n,e,t){t(3),n.exports=function(n){return t.e(53092264437035,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(752)})})}},710:function(n,e,t){t(3),n.exports=function(n){return t.e(984427837796,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(753)})})}},711:function(n,e,t){t(3),n.exports=function(n){return t.e(0x96b30811d76e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(754)})})}},712:function(n,e,t){t(3),n.exports=function(n){return t.e(60365122327618,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(755)})})}},713:function(n,e,t){t(3),n.exports=function(n){return t.e(0xfe55898c7346,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(756)})})}},714:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(757)})})}},715:function(n,e,t){t(3),n.exports=function(n){return t.e(39410027937385,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(758)})})}},698:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(219)})})}},716:function(n,e,t){t(3),n.exports=function(n){return t.e(77399088395295,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(759)})})}},717:function(n,e,t){t(3),n.exports=function(n){return t.e(56385794288600,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(760)})})}},718:function(n,e,t){t(3),n.exports=function(n){return t.e(0x93f8b10ddf38,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(761)})})}},719:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(762)})})}},720:function(n,e,t){t(3),n.exports=function(n){return t.e(66978775099179,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(763)})})}},721:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe7884ae5879b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(764)})})}},722:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9b544cfa2a85,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(765)})})}},723:function(n,e,t){t(3),n.exports=function(n){return t.e(39336929923688,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(766)})})}},724:function(n,e,t){t(3),n.exports=function(n){return t.e(0x669a677b9ed5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(767)})})}},725:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbc9f123e8a99,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(768)})})}},685:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(488)})})}},300:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),u=(o(r),t(486)),a=o(u),i=t(142),c=o(i),s=t(301),l=o(s),f=void 0,p={},d={},m={},h={},g={},y=[],j=[],x={},v="",b=[],C={},N=function(n){return n&&n.default||n},w=void 0,R=!0,k=[],_={},P={},E=5;w=t(489)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){b=b.filter(function(e){return e!==n}),w.onResourcedFinished(n)})}}),c.default.on("onPreLoadPageResources",function(n){w.onPreLoadPageResources(n)}),c.default.on("onPostLoadPageResources",function(n){w.onPostLoadPageResources(n)});var L=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},O=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var r=N(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},C={},b=[],y=[],v=""},addPagesArray:function(n){y=n,v="",f=(0,a.default)(n,v)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(O);var o=f(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||h[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(L),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return f(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var u=r;u.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=f(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];c.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,i=function(){if(r&&u&&(!o.layoutComponentChunkName||a)){m[e]={component:r,json:u,layout:a,page:o};var n={component:r,json:u,layout:a,page:o};t(n),c.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),u=e,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),a=e,i()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(71))},769:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category-testimonies.json",path:"/category/testimonies/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category-sayings.json",path:"/category/sayings/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"like-nonsense.json",path:"/like-nonsense/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"i-may-not-have-gone.json",path:"/i-may-not-have-gone/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"i-have-not-failed.json",path:"/i-have-not-failed/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"good-friends.json",path:"/good-friends/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"there-are-only-two.json",path:"/there-are-only-two/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"imperfection-is-beauty.json",path:"/imperfection-is-beauty/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"i-am-so-clever.json",path:"/i-am-so-clever/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"people-will-forget.json",path:"/people-will-forget/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"you-only-live-once.json",path:"/you-only-live-once/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"be-who-you-are.json",path:"/be-who-you-are/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"two-things-are-infinite.json",path:"/two-things-are-infinite/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"draft-post.json",path:"/draft-post/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"success.json",path:"/success/"},{componentChunkName:"component---src-templates-place-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"hytter-hogabu.json",path:"/hytter/hogabu/"},{componentChunkName:"component---src-templates-municipality-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"kommune-vaksdal.json",path:"/kommune/vaksdal/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-category-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category.json",path:"/category/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-municipality-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"municipality.json",path:"/municipality/"},{componentChunkName:"component---src-pages-my-files-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"my-files.json",path:"/my-files/"},{componentChunkName:"component---src-pages-search-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"search.json",path:"/search/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},489:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],u=function(){var n=e();n&&(r.push(n),t(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u=t(177),a=t(1),i=o(a),c=t(78),s=o(c),l=t(175),f=t(736),p=t(666),d=o(p),m=t(67),h=t(487),g=o(h),y=t(142),j=o(y),x=t(769),v=o(x),b=t(770),C=o(b),N=t(485),w=o(N),R=t(484),k=o(R),_=t(300),P=o(_);t(563),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),L=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};L(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&c!==!1||(window.___history=n,c=!0,n.listen(function(n,e){L(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&t(490);var o=function(n,e){function t(n){n.page.path===P.default.getPage(r).path&&(j.default.off("onPostLoadPageResources",t),clearTimeout(c),i(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),r=o.pathname,u=E[r];u&&(r=u.toPath);var a=window.location;if(a.pathname!==o.pathname||a.search!==o.search||a.hash!==o.hash){var i=e?window.___history.replace:window.___history.push,c=setTimeout(function(){j.default.off("onPostLoadPageResources",t),j.default.emit("onDelayedLoadPageResources",{pathname:r}),i(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(c),i(o)):j.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,u.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,p=(0,u.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return i.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(w.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,a.createElement)(p?p:h,null,(0,a.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,a.createElement)(w.default,r({page:!0},o)):(0,a.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:t},t)[0],c=(0,u.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return c(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},770:function(n,e){n.exports=[]},490:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(142),u=o(r),a="/";a="/","serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},301:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},666:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return u||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,u=t.s;t.e=function(o,a){var i=!1,c=!0,s=function(n){a&&(a(t,n),a=null)};return!u&&e&&e[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,n(function(){i||(i=!0,u?u[o]=void 0:(e||(e={}),e[o]=!0),s(!0))}))))}}o()},726:function(n,e,t){"use strict";var o=t(34);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var u=document.createElement("a");u.href=t.href;var a=document.createElement("a");if(a.href=window.location.href,u.host!==a.host)return!0;var i=new RegExp("^"+a.host+(0,o.withPrefix)("/"));return!i.test(""+u.host+u.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},727:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(34),u=t(726),a=o(u);e.onClientEntry=function(){(0,a.default)(window,function(n){(0,r.navigateTo)(n)})}},728:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},684:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(729)})})}},730:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},890:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},71:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(f===clearTimeout)return clearTimeout(n);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(n);try{return f(n)}catch(e){try{return f.call(null,n)}catch(e){return f.call(this,n)}}}function a(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&i())}function i(){if(!h){var n=r(a);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,u(n)}}function c(n,e){this.fun=n,this.array=e}function s(){}var l,f,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(n){f=o}}();var d,m=[],h=!1,g=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new c(n,e)),1!==m.length||h||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},1083:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},686:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(535)})})}},687:function(n,e,t){t(3),n.exports=function(n){return t.e(0x6bb91e53a7a7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(536)})})}},688:function(n,e,t){t(3),n.exports=function(n){return t.e(70144966829960,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(537)})})}},689:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(538)})})}},690:function(n,e,t){t(3),n.exports=function(n){return t.e(0xce1efde9df26,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(539)})})}},691:function(n,e,t){t(3),n.exports=function(n){return t.e(0x935d4c634a12,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(540)})})}},692:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81e20e680ce7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(541)})})}},693:function(n,e,t){t(3),n.exports=function(n){return t.e(78839606078735,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){
return t(542)})})}},694:function(n,e,t){t(3),n.exports=function(n){return t.e(27116544309356,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(543)})})}},695:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd5d9d741ef0b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(544)})})}},696:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf13a1bb25731,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(545)})})}},697:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb48ce3051dcc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(546)})})}}});
//# sourceMappingURL=app-58524789f2fbe4dae10a.js.map