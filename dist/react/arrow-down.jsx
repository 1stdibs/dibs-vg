const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-arrow-down'].join(' ')} data-tn={'arrow-down'}viewBox="0 -8.5 32 32">
  <path d="M32,1c0,0.3-0.1,0.6-0.3,0.8l-15,13c-0.4,0.3-0.9,0.3-1.3,0l-15-13c-0.4-0.4-0.5-1-0.1-1.4 c0.4-0.4,1-0.5,1.4-0.1L16,12.6L30.3,0.2c0.4-0.4,1-0.3,1.4,0.1C31.9,0.5,32,0.8,32,1z"/>
</svg>
        );
    }
}
module.exports = Component;
