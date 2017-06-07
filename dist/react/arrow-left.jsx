const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-arrow-left'].join(' ')} data-tn={'arrow-left'}viewBox="-8.5 0 32 32">
  <path d="M14,32c-0.3,0-0.6-0.1-0.8-0.3l-13-15c-0.3-0.4-0.3-0.9,0-1.3l13-15c0.4-0.4,1-0.5,1.4-0.1 c0.4,0.4,0.5,1,0.1,1.4L2.3,16l12.4,14.3c0.4,0.4,0.3,1-0.1,1.4C14.4,31.9,14.2,32,14,32z"/>
</svg>
        );
    }
}
module.exports = Component;
