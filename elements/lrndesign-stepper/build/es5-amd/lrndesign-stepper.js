define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/lrndesign-stepper-button.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_7c1c7350dbab11e8a6effbd52f40eb0b() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n       :host {\n        display: block;\n      }\n    </style>\n\n    <div class="buttons">\n      <slot id="stepper-children">\n      </slot>\n    </div>\n'
    ]);
    _templateObject_7c1c7350dbab11e8a6effbd52f40eb0b = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_7c1c7350dbab11e8a6effbd52f40eb0b()
    ),
    is: "lrndesign-stepper",
    properties: {},
    ready: function ready() {
      var root = this,
        children = root.getContentChildren("#stepper-children");
      if (1 < children.length) {
        children.forEach(function(child, index) {
          if (0 === index) {
            child.setAttribute("location", "start");
          } else if (index === children.length - 1) {
            child.setAttribute("location", "end");
          } else {
            child.setAttribute("location", "middle");
          }
          console.log(child, index);
        });
      }
    }
  });
});
