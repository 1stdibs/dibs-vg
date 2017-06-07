const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-arrow-right'].join(' ')} data-tn={'arrow-right'}viewBox="-8.5 0 32 32">
  <path d="M1,0c0.3,0,0.6,0.1,0.8,0.3l13,15c0.3,0.4,0.3,0.9,0,1.3l-13,15c-0.4,0.4-1,0.5-1.4,0.1 c-0.4-0.4-0.5-1-0.1-1.4L12.6,16L0.2,1.7c-0.4-0.4-0.3-1,0.1-1.4C0.5,0.1,0.8,0,1,0z"/>
</svg>
        );
    }
}
module.exports = Component;
