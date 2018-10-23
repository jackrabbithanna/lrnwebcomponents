define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrnPage = void 0;
  function _templateObject_cec10280d6f411e8afb0ab387c4d69d0() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_cec10280d6f411e8afb0ab387c4d69d0 = function() {
      return data;
    };
    return data;
  }
  var LrnPage = (function(_PolymerElement) {
    babelHelpers.inherits(LrnPage, _PolymerElement);
    function LrnPage() {
      babelHelpers.classCallCheck(this, LrnPage);
      return babelHelpers.possibleConstructorReturn(
        this,
        (LrnPage.__proto__ || Object.getPrototypeOf(LrnPage)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      LrnPage,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrnPage.prototype.__proto__ ||
                  Object.getPrototypeOf(LrnPage.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrnPage.haxProperties,
              LrnPage.tag,
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
              _templateObject_cec10280d6f411e8afb0ab387c4d69d0()
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
                title: "Lrn page",
                description: "Automated conversion of lrn-page/",
                icon: "icons:android",
                color: "green",
                groups: ["Page"],
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
            return "lrn-page";
          }
        }
      ]
    );
    return LrnPage;
  })(_polymerElement.PolymerElement);
  _exports.LrnPage = LrnPage;
  window.customElements.define(LrnPage.tag, LrnPage);
});