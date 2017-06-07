const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-download'].join(' ')} data-tn={'download'}viewBox="0 0 100 100">
  <polygon points="65 65 65 70 95 70 95 95 5 95 5 70 35 70 35 65 0 65 0 100 100 100 100 65 65 65"/>
  <polygon points="67.68 43.79 52.5 58.97 52.5 0 47.5 0 47.5 58.96 32.32 43.79 28.79 47.32 50 68.53 71.21 47.32 67.68 43.79"/>
</svg>
        );
    }
}
module.exports = Component;
