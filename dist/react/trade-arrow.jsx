const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-trade-arrow'].join(' ')} data-tn={'trade-arrow'}viewBox="0 0 250 250">
  <polygon points="154,41.4 147.6,49.1 229.2,117 0,117 0,127 228.4,127 147.5,199.8 154.1,207.2 249.9,121.2 "/>
</svg>
        );
    }
}
module.exports = Component;
