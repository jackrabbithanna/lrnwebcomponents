define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerElement,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleBlog=void 0;function _templateObject_5a0622c0d70511e896ea9b2d90586aa7(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_5a0622c0d70511e896ea9b2d90586aa7=function(){return data};return data}var SimpleBlog=function(_PolymerElement){babelHelpers.inherits(SimpleBlog,_PolymerElement);function SimpleBlog(){babelHelpers.classCallCheck(this,SimpleBlog);return babelHelpers.possibleConstructorReturn(this,(SimpleBlog.__proto__||Object.getPrototypeOf(SimpleBlog)).apply(this,arguments))}babelHelpers.createClass(SimpleBlog,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(SimpleBlog.prototype.__proto__||Object.getPrototypeOf(SimpleBlog.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setHaxProperties(SimpleBlog.haxProperties,SimpleBlog.tag,this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_5a0622c0d70511e896ea9b2d90586aa7())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Simple blog",description:"Automated conversion of simple-blog/",icon:"icons:android",color:"green",groups:["Blog"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}},{key:"properties",get:function get(){return{}}},{key:"tag",get:function get(){return"simple-blog"}}]);return SimpleBlog}(_polymerElement.PolymerElement);_exports.SimpleBlog=SimpleBlog;window.customElements.define(SimpleBlog.tag,SimpleBlog)});