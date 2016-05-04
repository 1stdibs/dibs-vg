'use strict';

const template = require('lodash.template');
const Backbone = require('backbone');
const tmpString = "<span class='dibsvg-icon <%= className %>' title='<%= title %>' style='<%= style %>'><%= icon %></span>";

/**
 * A very simple wrapper for an SVG icon required from the static repository.
 * NOTE! In v2 the only way to use icons in back-bone ie. without react is to require using a different loader
 * (for webpack) - you *must also use the leaging "!" in your loader so the default SVG->React loader is not used.
 *      Example :
 *
 * new SvgWrapper({
 *      className : 'dibsvg-icon-100',
 *      icon : require('!html!dibs-static/1stdibs/fonts/svg-icons/src/logo-no-reg.svg')
 * });
 *
 * @type {void|*|Object}
 */
const SvgWrapper = Backbone.View.extend({

    template : template(tmpString),

    render () {
        this.$el.html(this.template(this.templateVars()));
        return this;
    },

    initialize (options={}) {
        console.assert(options.icon, "Icon is required to use SvgWrapper BB component.");
        this.options = options;
    },

    templateVars () {
        const style = this.options.size ? "height: " + this.options.size : '';
        return {
            className : this.options.className || '',
            icon : this.options.icon,
            title : this.options.title || '',
            style : style
        };
    }
});

module.exports = SvgWrapper;
