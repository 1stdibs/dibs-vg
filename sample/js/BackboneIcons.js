"use strict";


const SvgWrapper = require('../../js/SvgWrapper.js');
const iconList = require('../../list.json');
const Backbone = require('backbone');
const styles = require('../scss/sample.scss');
const heading = `<div class="${styles.headerWrapper}">
    <h1 class="${styles.header}">These icons are all rendered by Backbone:</h1>
</div>`;

/**
 * Renders each of the icons using the svg wrapper backbone view.
 */
const BackboneIcons = Backbone.View.extend({

    _allIcons() {
        return iconList.map(icon => {
            // NOTE* Here we have to use a leading "!" to tell webpack not to use the svg->react loader
            const Icon = require('!html!../../src/' + icon);
            const svgWrapperEl = new SvgWrapper({
                icon: Icon,
                className: styles.bbSvg
            }).render();
            const child = svgWrapperEl.$el.html();
            return `<div class='${styles.container}'>${child}</div>`;
        });
    },

    render() {
        this.$el.addClass(`${styles.root} ${styles.bb}`);
        this.$el.html(heading);
        this.$el.append(this._allIcons());
        return this;
    }
});

module.exports = BackboneIcons;
