'use strict';

const template = require('lodash.template');
const Backbone = require('backbone');
const tmpString = "<span class='icon <%= className %> <%= className %>-icon <%= size ? 'icon-'+size : '' %>' title='<%= title %>'><%= icon %></span>";

/**
 * A very simple wrapper for an SVG icon required from the static repository.
 * NOTE! In v2 the only way to use icons in back-bone ie. without react is to require using a different loader
 * (for webpack) - you *must also use the leaging "!" in your loader so the default SVG->React loader is not used.
 *      Example :
 *
 * new SvgWrapper({
 *      className : 'icon-100',
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
        this.options = options;
        return this;
    },

    templateVars : function () {
        return Object.assign({
            className : 'icon ' + this.options.className,
            icon : this.options.icon,
            title : this.options.title,
            size : this.options.size
        });
    }
});

module.exports = SvgWrapper;
