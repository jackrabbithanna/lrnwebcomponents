/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import { dom } from "@polymer/polymer/lib/legacy/polymer.dom.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/iron-list/iron-list.js";
import "@polymer/paper-button/paper-button.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "./lib/site-card.js";
/**
 * `sites-listing`
 * A LRN element
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 * -
 */
let SitesListing = Polymer({
  _template: html`
    <style>
      :host {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
      iron-list {
        flex: 1 1 auto;
      }
      #loading {
        width: 100%;
        z-index: 1000;
        opacity: 0.8;
        padding: 16px;
        text-align: center;
        align-content: center;
        justify-content: center;
        height: 100vh;
        position: absolute;
        background-color: rgba(250, 250, 250, 0.8);
        transition: all linear 0.8s;
        visibility: visible;
      }
      #loading div {
        font-size: 32px;
        font-weight: bold;
        padding: 16px;
      }
      #loading[data-loading] {
        background-color: rgba(0, 0, 0, 0);
        opacity: 0;
        visibility: hidden;
      }
      site-card {
        padding: 16px;
        font-size: 16px;
      }
      paper-button.site-card-wrapper {
        margin: 0;
        padding: 0;
      }
    </style>
    <iron-ajax
      id="loaddata"
      auto=""
      loading="{{__loading}}"
      url="[[dataSource]]"
      handle-as="json"
      debounce-duration="250"
      last-response="{{sitesResponse}}"
    ></iron-ajax>
    <div id="loading" data-loading\$="[[!__loading]]">
      <elmsln-loading size="large"></elmsln-loading>
      <div>Loading..</div>
    </div>
    <iron-list id="list" items="[[sites]]" as="site" grid="">
      <template>
        <paper-button
          on-focusin="_mouseEnter"
          on-focusout="_mouseLeave"
          data-site-id\$="[[site.id]]"
          class="site-card-wrapper"
          on-tap="_siteClicked"
        >
          <site-card
            data-site-id\$="[[site.id]]"
            size="[[size]]"
            image="[[site.metadata.image]]"
            icon="[[site.metadata.icon]]"
            name="[[site.title]]"
            title="[[site.description]]"
            elevation="2"
          ></site-card>
        </paper-button>
      </template>
    </iron-list>
  `,
  is: "sites-listing",
  properties: {
    /**
     * Object, JSON Outline Schema format
     */
    sitesResponse: {
      type: Object,
      notify: true,
      observer: "_sitesResponseChanged"
    },
    /**
     * Array of site objects
     */
    sites: {
      type: Array,
      notify: true
    },
    /**
     * Size of the cards
     */
    size: {
      type: String,
      value: "large"
    },
    /**
     * Data Source to power the loading of sites in JSON Outline Schema format.
     */
    dataSource: {
      type: String
    },
    /**
     * Allow for loading the location in the array rather than firing an event
     */
    loadLocation: {
      type: Boolean,
      value: false
    }
  },
  /**
   * attached life cycle
   */
  attached: function() {
    window.addEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
  },
  /**
   * detached life cycle
   */
  detached: function() {
    window.removeEventListener(
      "sites-listing-refresh-data",
      this.refreshData.bind(this)
    );
  },
  /**
   * force the request to regenerate
   */
  refreshData: function(e) {
    this.$.loaddata.generateRequest();
  },
  /**
   * Parse JSON Outline Schema for the items and bind that to sites
   */
  _sitesResponseChanged: function(newValue, oldValue) {
    if (newValue) {
      if (typeof newValue.items !== typeof undefined) {
        this.set("sites", []);
        this.set("sites", newValue.items);
        this.notifyPath("sites.*");
      }
    }
  },
  /**
   * Handle tap on paper-button above to redirect to the correct data.
   */
  _siteClicked: function(e) {
    var normalizedEvent = dom(e);
    var local = normalizedEvent.localTarget;
    // this will have the id of the current course
    var active = local.getAttribute("data-site-id");
    // find the course by it's unique id and filter just to it
    let findSite = this.sites.filter(site => {
      if (site.id !== active) {
        return false;
      }
      return true;
    });
    // if we found one, make it the top level item
    if (findSite.length > 0) {
      findSite = findSite.pop();
    }
    // double check we have a URI
    if (this.loadLocation && typeof findSite.location !== typeof undefined) {
      window.location.href = findSite.location;
    }
    this.fire("sites-listing-item-selected", findSite);
  },
  /**
   * Increase elevation while hovering.
   */
  _mouseEnter: function(e) {
    let card = dom(e.target).querySelectorAll("site-card")[0];
    card.__oldElevation = card.elevation;
    if (card.elevation + 2 > 5) {
      card.elevation = 5;
    } else {
      card.elevation += 2;
    }
  },

  /**
   * Reset the elevation.
   */
  _mouseLeave: function(e) {
    let card = dom(e.target).querySelectorAll("site-card")[0];
    card.elevation = card.__oldElevation;
  }
});
export { SitesListing };
