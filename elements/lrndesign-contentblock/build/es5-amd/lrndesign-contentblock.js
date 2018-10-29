define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_655ffc40dbab11e88b98e34ef02575a5() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n  <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n      }\n    </style>\n    <h3>[[title]]</h3>\n    <slot></slot>\n"
    ]);
    _templateObject_655ffc40dbab11e88b98e34ef02575a5 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_655ffc40dbab11e88b98e34ef02575a5()
    ),
    is: "lrndesign-contentblock",
    properties: { title: { type: String } }
  });
});
