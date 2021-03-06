/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@lrnwebcomponents/random-image/random-image.js";
import "@polymer/paper-button/paper-button.js";
/**
`lrnsys-randomimage`
A LRN element

* @demo demo/index.html
*/
let LrnsysRandomimage = Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }
    </style>
    <div id="list"><random-image images-list$="{{images}}"></random-image></div>
    <paper-button raised on-click="reload">Reload</paper-button>
  `,

  is: "lrnsys-randomimage",

  properties: {
    /**
     * An array of images to pick from at random.
     */
    images: {
      type: Object,
      notify: true,
      value: function() {
        return [];
      }
    }
  },

  /**
   * trigger a reload of the random-image element
   */
  reload: function(e) {
    let root = this;
    this.$.list.innerHTML = this.$.list.innerHTML;
  }
});
export { LrnsysRandomimage };
