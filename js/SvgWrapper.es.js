'use strict';

const _ = require('underscore');
const Backbone = require('dibs-backbone');
const tmpString = "<div class='icon <%= className %> <%= className %>-icon <%= size ? 'icon-'+size : '' %>' title='<%= title %>'><%= icon %></div>";

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
const SvgIcon = Backbone.BaseView.extend({

    template : _.template(tmpString),

    render : function () {
        this.$el.html(this.template(this.templateVars()));
        this.$el.addClass('icon');
        return this;
    },

    initialize : function (options) {
        console.assert(options.icon, "Icon name is required to use SvgIcon BB component.");
        this.options = options;
        return this;
    },

    templateVars : function () {
        return Object.assign({
            className : 'icon-25'
        }, {
            className : this.options.className,
            icon : this.options.icon,
            title : this.options.title,
            size : this.options.size
        });
    }
});

module.exports = SvgIcon;
