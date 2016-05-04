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
 *              <SvgComponent size={25} className={myClass}>
 *                  <Icon />
 *              </SvgComponent>
 *
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
const SvgComponent = props => {
    const compoundClass = 'dibsvg-icon ' + (props.className ? props.className : '');
    const css = props.size ? {height: props.size, width : props.size} : {};
        return (
        <span className={compoundClass} title={props.title} style={css}>
            {props.children}
        </span>
    );
};

SvgComponent.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    title: PropTypes.string
};

module.exports = SvgComponent;
