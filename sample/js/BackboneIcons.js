"use strict";


const SvgWrapper = require('../../js/SvgWrapper.js');
const iconList = require('../../list.json');
const Backbone = require('backbone');
const template = require('lodash.template');

/**
 * Renders each of the icons using the svg wrapper backbone view.
 */
const BackboneIcons = Backbone.View.extend({
    allIcons() {
        return iconList.map((icon, idx) => {
            const Icon = require('html!../../src/' + icon);
            return new SvgWrapper({
                icon : Icon
            }).render().el;
        });
    },

    template : template("<div id='bb-icons'><h1>These icons are all rendered by Backbone :</h1><hr /></div>"),

    render() {
        this.$el.html(this.template());
        //debugger;
        this.$('#bb-icons').html(this.allIcons());
        return this;
    }
});

module.exports = BackboneIcons;
