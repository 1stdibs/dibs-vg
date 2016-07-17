'use strict';

const React = require('react');
const { PropTypes } = React;

const SvgStringToReact = props => {
    const styles = {
        fill: "currentcolor",
        verticalAlign: "middle"
    };
    return (
        <svg
            viewBox="0 0 24 24"
            width={props.width}
            height={props.height || props.width}
            preserveAspectRatio="xMidYMid meet"
            fit
            style={Object.assign({}, styles, props.style)}
            dangerouslySetInnerHTML={{__html: props.svg}} />
    );
};

SvgStringToReact.propTypes = {
    svg: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
};

module.exports = SvgStringToReact;
