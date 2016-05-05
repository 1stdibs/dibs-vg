'use strict';

const React = require('react');
const { PropTypes } = React;

/**
 * SvgComponent provides an example of how you would use an icon with react. SVG files get required outside of this
 * file and passed as children, this file provides a wrapper component.
 * Example :
 *      const Icon = require('dibs-vg/src/clock.svg');
 *      const SvgComponent = require('dibs-vg/js/SvgComponent.svg');
 *      // ... then inside your React component, you can do...
 *              <SvgComponent width={10} height={10} className={myClass} inline={false}>
 *                  <Icon />
 *              </SvgComponent>
 *
 *
 * @param children
 * @param className
 * @param width
 * @param height
 * @param title
 * @param inline
 * @returns {XML}
 * @constructor
 */
const SvgComponent = ({ children, className, width, height, title, inline=true }) => {
    const compoundClass = `dibsvg-icon ${className}`;
    const css = {width, height};
    if (inline) css.display = 'inline-block';
    return (
        <span className={compoundClass} title={title} style={css}>
            {children}
        </span>
    );
};

SvgComponent.propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    inline: PropTypes.bool,
    title: PropTypes.string
};

module.exports = SvgComponent;
