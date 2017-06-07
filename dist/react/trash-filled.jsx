const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-trash-filled'].join(' ')} data-tn={'trash-filled'}viewBox="-15 0 250 250">
  <path d="M15,15.25 L77,15.25 L77,0 L139.5,0 L139.5,15.25 L202,15.25 L202,32 L15,32 L15,15.25 Z"/>
  <path d="M0,47 L218,47 L218,62 L206,62 L167,250 L50,250 L13.5,62 L0,62 L0,47 Z"/>
</svg>
        );
    }
}
module.exports = Component;
