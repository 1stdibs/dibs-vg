'use strict';

const template = require('lodash.template');
const Backbone = require('backbone');
const tmpString = "<span class='dibsvg-icon <%= className %> <%= size ? 'dibsvg-icon-'+size : '' %>' title='<%= title %>'><%= icon %></span>";

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
const SvgWrapper = Backbone.BaseView.extend({

    template : template(tmpString),

    render : function () {
        this.$el.html(this.template(this.templateVars()));
        return this;
    },

    initialize : function (options) {
        console.assert(options.icon, "Icon is required to use SvgWrapper BB component.");
        ['className', 'icon', 'title', 'size'].forEach(opt => {
            this[opt] = options[opt];
        });
        return this;
    },

    templateVars : function () {
        return {
            className : 'dibsvg-icon ' + this.options.className,
            icon : this.options.icon,
            title : this.options.title,
            size : this.options.size
        };
    }
});

module.exports = SvgWrapper;
