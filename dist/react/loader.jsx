const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-loader'].join(' ')} data-tn={'loader'}viewBox="0 0 1000 1000">
  <path d="M867.5,10v165.9C777.7,74.1,646.4,10,500,10C229.4,10,10,229.4,10,500s219.4,490,490,490s490-219.4,490-490H867.5c0,98.2-38.3,190.4-107.6,259.9S598.2,867.5,500,867.5c-98.2,0-190.4-38.3-259.9-107.6C170.8,690.4,132.5,598.2,132.5,500c0-98.2,38.3-190.4,107.6-259.9c69.5-69.3,161.7-107.6,259.9-107.6c98.2,0,190.4,38.3,259.9,107.6c4.8,4.8,9.6,9.8,14,14.9H622.5v122.5H990V10H867.5z"/>
</svg>
        );
    }
}
module.exports = Component;
