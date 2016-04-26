'use strict';

const React = require('react');
const { PropTypes } = React;

const SvgComponent = props => {
    let className = 'icon ' + props.className + '-icon ' + props.className; 
    className += props.size ? ' icon-' + props.size : '';
    return (
        <div className={className} title={props.title}>
            {props.children}
        </div>
    );
}

SvgComponent.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    title: PropTypes.string
};

module.exports = SvgComponent;
