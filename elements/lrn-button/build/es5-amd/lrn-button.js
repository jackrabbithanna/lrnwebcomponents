define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnButton = void 0;
  function _templateObject_7624f290d6f311e8bcc9c916eae96df6() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_7624f290d6f311e8bcc9c916eae96df6 = function() {
      return data;
    };
    return data;
  }
  var LrnButton = (function(_PolymerElement) {
    babelHelpers.inherits(LrnButton, _PolymerElement);
    function LrnButton() {
      babelHelpers.classCallCheck(this, LrnButton);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnButton.__proto__ || Object.getPrototypeOf(LrnButton)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnButton,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnButton.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnButton.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnButton.haxProperties,
              LrnButton.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_7624f290d6f311e8bcc9c916eae96df6()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Lrn button",
                description: "Automated conversion of lrn-button/",
                icon: "icons:android",
                color: "green",
                groups: ["Button"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "lrn-button";
          }
        }
      ]
    );
    return LrnButton;
  })(_polymerElement.PolymerElement);
  _exports.LrnButton = LrnButton;
  window.customElements.define(LrnButton.tag, LrnButton);
});