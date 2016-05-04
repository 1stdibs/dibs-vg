"use strict";


const SvgWrapper = require('../../js/SvgWrapper.js');
const iconList = require('../../list.json');
const Backbone = require('backbone');
const template = require('lodash.template');

/**
 * Renders each of the icons using the svg wrapper backbone view.
 */
const BackboneIcons = Backbone.View.extend({

    template : template("<div id='bb-icons'><h1>These icons are all rendered by Backbone :</h1><hr /></div>"),
    iconTemplate : template("<span class='icon-container'><%= child %></span>"),

    allIcons() {
        return iconList.map((icon, idx) => {
            // NOTE* Here we have to use a leading "!" to tell webpack not to use the svg->react loader
            const Icon = require('!html!../../src/' + icon);
            const svgWrapperEl = new SvgWrapper({
                icon : Icon,
                size : 50
            }).render();
            return this.iconTemplate({child : svgWrapperEl.$el.html()});
        });
    },

    render() {
        this.$el.html(this.template());
        this.$('#bb-icons').append(this.allIcons());
        return this;
    }
});

module.exports = BackboneIcons;
