define([
  "../node_modules/@polymer/polymer/polymer-legacy.js",
  "../node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js",
  "../node_modules/@polymer/paper-input/paper-textarea.js",
  "../node_modules/@polymer/paper-input/paper-input.js",
  "../node_modules/@polymer/paper-checkbox/paper-checkbox.js",
  "../node_modules/@polymer/paper-slider/paper-slider.js",
  "../node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "./simple-colors-picker.js",
  "./hax-context-item-menu.js",
  "./hax-context-item.js"
], function(
  _polymerLegacy,
  _polymerDom,
  _appToolbar,
  _paperTextarea,
  _paperInput,
  _paperCheckbox,
  _paperSlider,
  _paperTooltip,
  _simpleColorsPicker,
  _haxContextItemMenu,
  _haxContextItem
) {
  "use strict";
  function _templateObject_e6a70360f51a11e8a8e7334679f4d101() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <custom-style>\n      <style is="custom-style">\n        :host {\n          display: block;\n          color: #ffffff;\n        }\n        app-toolbar {\n          background-color: #3e3e3e;\n          color: white;\n          padding: 0 0 0 16px;\n        }\n        hax-context-item {\n          margin: 0;\n          width: 40px;\n          height: 40px;\n        }\n        #elementoptions {\n          height: inherit;\n        }\n        #input {\n          color: #ffffff;\n        }\n        paper-checkbox {\n          --paper-checkbox-label-color: #ffffff;\n        }\n        .input-mixer-label {\n          padding-left: 4px;\n        }\n        paper-textarea,\n        paper-input {\n          --paper-input-container-color: #bbbbff;\n          --paper-input-container-focus-color: #ffffff;\n          --paper-input-container-invalid-color: #ffaaaa;\n          --paper-input-container-input-color: #ffffff;\n          --paper-input-container-shared-input-style: {\n            color: #ffffff;\n            background: transparent;\n            margin: 0;\n            padding: 0;\n            min-width: 320px;\n            line-height: 16px;\n            font-size: 16px;\n            margin-top: -8px;\n            margin-bottom: 8px;\n            outline: none;\n            border: none;\n          }\n        }\n        .input-method {\n          color: #ffffff;\n        }\n      </style>\n    </custom-style>\n    <app-toolbar>\n      <template is="dom-if" if="[[__inputselect]]">\n        <span class="input-mixer-label">[[label]]</span>\n        <hax-context-item-menu selected="{{value}}" icon="[[icon]]" id="input">\n          <slot></slot>\n        </hax-context-item-menu>\n      </template>\n      <span class="input-method">\n        <template is="dom-if" if="[[__inputtextarea]]">\n          <paper-textarea\n            id="input"\n            label="[[label]]"\n            value="{{value}}"\n            auto-validate=""\n            pattern="[[validation]]"\n            required="[[required]]"\n          ></paper-textarea>\n        </template>\n        <template is="dom-if" if="[[__inputtextfield]]">\n          <paper-input\n            id="input"\n            type="[[validationType]]"\n            label="[[label]]"\n            value="{{value}}"\n            auto-validate=""\n            pattern="[[validation]]"\n            required="[[required]]"\n          ></paper-input>\n        </template>\n        <template is="dom-if" if="[[__inputboolean]]">\n          <paper-checkbox id="input" checked="{{value}}"\n            >[[label]]</paper-checkbox\n          >\n        </template>\n        <template is="dom-if" if="[[__inputflipboolean]]">\n          <paper-checkbox id="input" checked="{{value}}"\n            >[[label]]</paper-checkbox\n          >\n        </template>\n        <template is="dom-if" if="[[__inputcolorpicker]]">\n          <span>[[label]]</span>\n          <simple-colors-picker\n            id="input"\n            value="{{value}}"\n          ></simple-colors-picker>\n        </template>\n      </span>\n      <paper-tooltip for="input" position="top" offset="14">\n        [[description]]\n      </paper-tooltip>\n      <hax-context-item\n        id="updatebutton"\n        icon="subdirectory-arrow-right"\n        label$="Update [[label]]"\n        event-name="hax-update-tap"\n      ></hax-context-item>\n    </app-toolbar>\n  '
      ],
      [
        '\n    <custom-style>\n      <style is="custom-style">\n        :host {\n          display: block;\n          color: #ffffff;\n        }\n        app-toolbar {\n          background-color: #3e3e3e;\n          color: white;\n          padding: 0 0 0 16px;\n        }\n        hax-context-item {\n          margin: 0;\n          width: 40px;\n          height: 40px;\n        }\n        #elementoptions {\n          height: inherit;\n        }\n        #input {\n          color: #ffffff;\n        }\n        paper-checkbox {\n          --paper-checkbox-label-color: #ffffff;\n        }\n        .input-mixer-label {\n          padding-left: 4px;\n        }\n        paper-textarea,\n        paper-input {\n          --paper-input-container-color: #bbbbff;\n          --paper-input-container-focus-color: #ffffff;\n          --paper-input-container-invalid-color: #ffaaaa;\n          --paper-input-container-input-color: #ffffff;\n          --paper-input-container-shared-input-style: {\n            color: #ffffff;\n            background: transparent;\n            margin: 0;\n            padding: 0;\n            min-width: 320px;\n            line-height: 16px;\n            font-size: 16px;\n            margin-top: -8px;\n            margin-bottom: 8px;\n            outline: none;\n            border: none;\n          }\n        }\n        .input-method {\n          color: #ffffff;\n        }\n      </style>\n    </custom-style>\n    <app-toolbar>\n      <template is="dom-if" if="[[__inputselect]]">\n        <span class="input-mixer-label">[[label]]</span>\n        <hax-context-item-menu selected="{{value}}" icon="[[icon]]" id="input">\n          <slot></slot>\n        </hax-context-item-menu>\n      </template>\n      <span class="input-method">\n        <template is="dom-if" if="[[__inputtextarea]]">\n          <paper-textarea\n            id="input"\n            label="[[label]]"\n            value="{{value}}"\n            auto-validate=""\n            pattern="[[validation]]"\n            required="[[required]]"\n          ></paper-textarea>\n        </template>\n        <template is="dom-if" if="[[__inputtextfield]]">\n          <paper-input\n            id="input"\n            type="[[validationType]]"\n            label="[[label]]"\n            value="{{value}}"\n            auto-validate=""\n            pattern="[[validation]]"\n            required="[[required]]"\n          ></paper-input>\n        </template>\n        <template is="dom-if" if="[[__inputboolean]]">\n          <paper-checkbox id="input" checked="{{value}}"\n            >[[label]]</paper-checkbox\n          >\n        </template>\n        <template is="dom-if" if="[[__inputflipboolean]]">\n          <paper-checkbox id="input" checked="{{value}}"\n            >[[label]]</paper-checkbox\n          >\n        </template>\n        <template is="dom-if" if="[[__inputcolorpicker]]">\n          <span>[[label]]</span>\n          <simple-colors-picker\n            id="input"\n            value="{{value}}"\n          ></simple-colors-picker>\n        </template>\n      </span>\n      <paper-tooltip for="input" position="top" offset="14">\n        [[description]]\n      </paper-tooltip>\n      <hax-context-item\n        id="updatebutton"\n        icon="subdirectory-arrow-right"\n        label\\$="Update [[label]]"\n        event-name="hax-update-tap"\n      ></hax-context-item>\n    </app-toolbar>\n  '
      ]
    );
    _templateObject_e6a70360f51a11e8a8e7334679f4d101 = function _templateObject_e6a70360f51a11e8a8e7334679f4d101() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e6a70360f51a11e8a8e7334679f4d101()
    ),
    is: "hax-input-mixer",
    listeners: { "hax-context-item-selected": "_haxContextOperation" },
    properties: {
      value: { type: String, value: null },
      label: { type: String, reflectToAttribute: !0 },
      validation: { type: String, reflectToAttribute: !0 },
      validationType: { type: String, reflectToAttribute: !0 },
      required: { type: Boolean, reflectToAttribute: !0 },
      options: { type: Object, value: {}, reflectToAttribute: !0 },
      icon: { type: String, value: "android", reflectToAttribute: !0 },
      description: { type: String, reflectToAttribute: !0 },
      inputMethod: {
        type: String,
        value: null,
        reflectToAttribute: !0,
        observer: "_inputMethodChanged"
      },
      propertyToBind: { type: String, reflectToAttribute: !0 },
      slotToBind: { type: String, reflectToAttribute: !0 }
    },
    ready: function ready() {
      this._resetInputMethods();
    },
    _inputMethodChanged: function _inputMethodChanged(newValue, oldValue) {
      var _this = this;
      if (
        null != newValue &&
        babelHelpers.typeof(oldValue) !==
          ("undefined" === typeof void 0
            ? "undefined"
            : babelHelpers.typeof(void 0))
      ) {
        var method = newValue,
          methods = this.validInputMethods();
        if (methods.includes(method)) {
          this._resetInputMethods();
          this["__input" + method] = !0;
          var slot = (0, _polymerDom.dom)(this);
          while (null !== slot.firstChild) {
            slot.removeChild(slot.firstChild);
          }
          if (
            "select" === method &&
            babelHelpers.typeof(this.options) !==
              ("undefined" === typeof void 0
                ? "undefined"
                : babelHelpers.typeof(void 0))
          ) {
            for (val in this.options) {
              item = document.createElement("paper-item");
              item.attributes.value = val;
              item.innerHTML = this.options[val];
              slot.appendChild(item);
            }
          }
          setTimeout(function() {
            if (
              "function" ===
              typeof _this.shadowRoot.querySelector("#input").hideMenu
            ) {
              _this.shadowRoot.querySelector("#input").hideMenu();
            }
            _this.shadowRoot.querySelector("#input").focus();
          }, 200);
        }
      }
    },
    validInputMethods: function validInputMethods() {
      var methods = [
        "flipboolean",
        "boolean",
        "select",
        "confirm",
        "textfield",
        "textarea",
        "datepicker",
        "colorpicker",
        "number"
      ];
      return methods;
    },
    _resetInputMethods: function _resetInputMethods() {
      for (
        var methods = this.validInputMethods(), i = 0;
        i < methods.length;
        i++
      ) {
        this["__input" + methods[i]] = !1;
      }
    },
    _haxContextOperation: function _haxContextOperation(e) {
      var detail = e.detail;
      switch (detail.eventName) {
        case "hax-update-tap":
          if ("boolean" == this.inputMethod) {
            this.value = this.value;
          } else if ("flipboolean" == this.inputMethod) {
            this.value = !this.value;
          } else if ("select" == this.inputMethod) {
            var count = 0;
            for (val in this.options) {
              if (count == this.value) {
                this.value = val;
                continue;
              }
              count++;
            }
          }
          var mixer = {
            value: this.value,
            propertyToBind: this.propertyToBind,
            slotToBind: this.slotToBind
          };
          this.fire("hax-input-mixer-update", { inputMixer: mixer });
          break;
      }
    }
  });
});