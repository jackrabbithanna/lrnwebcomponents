define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/paper-styles/default-theme.js",
  "../node_modules/@polymer/paper-styles/typography.js",
  "./paper-input-addon-behavior.js"
], function(
  _polymerLegacy,
  _defaultTheme,
  _typography,
  _paperInputAddonBehavior
) {
  "use strict";
  function _templateObject_937dca00dbb811e8a0f707d45fd382ad() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: inline-block;\n        visibility: hidden;\n\n        color: var(--paper-input-container-invalid-color, var(--error-color));\n\n        @apply --paper-font-caption;\n        @apply --paper-input-error;\n        position: absolute;\n        left:0;\n        right:0;\n      }\n\n      :host([invalid]) {\n        visibility: visible;\n      };\n    </style>\n\n    <slot></slot>\n"
    ]);
    _templateObject_937dca00dbb811e8a0f707d45fd382ad = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_937dca00dbb811e8a0f707d45fd382ad()
    ),
    is: "paper-input-error",
    behaviors: [_paperInputAddonBehavior.PaperInputAddonBehavior],
    properties: {
      invalid: { readOnly: !0, reflectToAttribute: !0, type: Boolean }
    },
    update: function update(state) {
      this._setInvalid(state.invalid);
    }
  });
});