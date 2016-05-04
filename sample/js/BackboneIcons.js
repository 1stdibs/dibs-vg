"use strict";


const SvgWrapper = require('../../js/SvgWrapper.js');
const iconList = require('../../list.json');
const Backbone = require('backbone');
const _template = require('lodash.template');
const template = _template("<div id='bb-icons'><h1>These icons are all rendered by Backbone :</h1><hr /></div>");
const iconTemplate = _template("<span class='icon-container'><%= child %></span>");


/**
 * Renders each of the icons using the svg wrapper backbone view.
 */
const BackboneIcons = Backbone.View.extend({

    allIcons() {
        return iconList.map((icon, idx) => {
            // NOTE* Here we have to use a leading "!" to tell webpack not to use the svg->react loader
            const Icon = require('!html!../../src/' + icon);
            const svgWrapperEl = new SvgWrapper({
                icon : Icon,
                size : 50
            }).render();
            return iconTemplate({child : svgWrapperEl.$el.html()});
        });
    },

    render() {
        this.$el.html(template());
        this.$('#bb-icons').append(this.allIcons());
        return this;
    }
});

module.exports = BackboneIcons;
