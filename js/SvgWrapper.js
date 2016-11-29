'use strict';

const Backbone = require('backbone');
const template = function ({className, icon, title, style}) {
    return `<span class='dibsvg-icon ${className}' title='${title}' style='${style}'>
        ${icon}
    </span>`;
};

/**
 * A very simple wrapper for an SVG icon required from the static repository.
 *
 * @type {void|*|Object}
 */
const SvgWrapper = Backbone.View.extend({

    render() {
        this.$el.html(template(this.templateVars()));
        return this;
    },

    initialize(options = {}) {
        console.assert(options.icon, "Icon is required to use SvgWrapper BB component.");
        this.options = options;
    },

    templateVars() {
        const { className = '', icon = '', title = '', width, height, display = 'inline-block' } = this.options;
        const style = `${width ? 'width:' + width + 'px;' : ''} ${height ? 'height:' + height + 'px;' : ''} display:${display}`;
        return {
            className,
            icon,
            title,
            style
        };
    }
});

module.exports = SvgWrapper;
