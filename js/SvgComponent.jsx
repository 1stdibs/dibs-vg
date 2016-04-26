'use strict';

const React = require('react');
const { PropTypes } = React;
const IconComponent = require('react-svg-icon-component');
const staticIconsPath = require('../../configs/assetsConfig').SVG_ICONS_PATH;

const SvgComponent = props => (
    <IconComponent {...props} extRef={ staticIconsPath } />
);

SvgComponent.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string.isRequired
};

module.exports = SvgComponent;
