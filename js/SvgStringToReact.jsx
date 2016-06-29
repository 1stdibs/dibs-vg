const React = require('react');
const { PropTypes } = React;

const SvgStringToReact = React.createClass({
    propTypes: {
        svg: PropTypes.string,
        styles: PropTypes.object,
        width: PropTypes.number,
        height: PropTypes.number
    },
    render() {
        let styles = {
            fill: "currentcolor",
            verticalAlign: "middle"
        };
        return (
            <svg 
                viewBox="0 0 24 24"
                width={this.props.width}
                height={this.props.height || this.props.width}
                preserveAspectRatio="xMidYMid meet"
                fit
                style= {Object.assign({}, styles, this.props.style)}
                dangerouslySetInnerHTML={{__html: this.props.svg}} />
        );
    }
});

module.exports = SvgStringToReact;
