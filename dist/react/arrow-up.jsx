const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-arrow-up'].join(' ')} data-tn={'arrow-up'}viewBox="0 -8.5 32 32">
  <path d="M0,14c0-0.3,0.1-0.6,0.3-0.8l15-13c0.4-0.3,0.9-0.3,1.3,0l15,13c0.4,0.4,0.5,1,0.1,1.4 c-0.4,0.4-1,0.5-1.4,0.1L16,2.3L1.7,14.7c-0.4,0.4-1,0.3-1.4-0.1C0.1,14.4,0,14.2,0,14z"/>
</svg>
        );
    }
}
module.exports = Component;
