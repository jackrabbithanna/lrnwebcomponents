define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/iron-icons/iron-icons.js",
  "../node_modules/@polymer/iron-icon/iron-icon.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_a80fa370dbb911e89c3e4b059f833045() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        --lrndesign-mapmenu-item-height: 16px;\n      }\n      iron-icon {\n        --iron-icon-height: var(--lrndesign-mapmenu-item-height);\n      }\n    </style>\n    <template is="dom-if" if="[[icon]]">\n      <iron-icon icon="[[icon]]"></iron-icon>\n    </template>\n    <span id="title">[[title]]</span>\n'
    ]);
    _templateObject_a80fa370dbb911e89c3e4b059f833045 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_a80fa370dbb911e89c3e4b059f833045()
    ),
    is: "lrndesign-mapmenu-item",
    properties: babelHelpers.defineProperty(
      {
        icon: { type: String, value: "" },
        title: { type: String, value: "" },
        url: { type: String, value: "" }
      },
      "icon",
      { type: String, value: "" }
    )
  });
});