"use strict";


const SvgWrapper = require('../../js/SvgWrapper.js');
const iconList = require('../../list.json');
const Backbone = require('backbone');
const heading = `<br /><br /><div id='bb-icons'><h1>These icons are all rendered by Backbone :</h1><hr /></div>`;


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
                width : 130,
                height : 130
            }).render();
            const child = svgWrapperEl.$el.html();
            return `<span class='icon-container'>${child}</span>`;
        });
    },

    render() {
        this.$el.html(heading);
        this.$('#bb-icons').append(this.allIcons());
        return this;
    }
});

module.exports = BackboneIcons;
