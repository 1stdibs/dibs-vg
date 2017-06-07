const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-close'].join(' ')} data-tn={'close'}viewBox="0 0 500 500">
  <path d="M274.1,250L495,470.9c6.7,6.7,6.7,17.5,0,24.1s-17.5,6.7-24.1,0L250,274.1L29.1,495 c-6.7,6.7-17.5,6.7-24.1,0s-6.7-17.5,0-24.1L225.9,250L5,29.1C-1.7,22.4-1.7,11.6,5,5s17.5-6.7,24.1,0L250,225.9L470.9,5 c6.7-6.7,17.5-6.7,24.1,0s6.7,17.5,0,24.1L274.1,250z"/>
</svg>
        );
    }
}
module.exports = Component;
