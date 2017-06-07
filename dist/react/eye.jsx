const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-eye'].join(' ')} data-tn={'eye'}viewBox="0 0 250 250">
  <path d="M248.1,131.2c-40.4-53.9-83.3-80.4-127.4-78.8c-29,1.1-58.7,14.8-85.9,39.7c-15.4,14.1-25.8,27.8-30.2,34l-2.2,1.5l0.6,0.9c-0.4,0.6-0.7,1-0.7,1.1l-1.8,2.9l2.3,2.5c38.2,43.1,79.2,64.9,121.9,64.9c0.9,0,1.9,0,2.8,0c36.7-0.8,67.5-17.9,87-32.2c21-15.3,33.2-30.3,33.7-30.9l2.2-2.7L248.1,131.2z M127.1,190.9c-40.1,0.9-78.9-19-115.4-59.2C21,118.5,63.4,63.5,121,61.4c40.3-1.5,79.8,22.9,117.7,72.3C228.5,145.1,184.8,189.6,127.1,190.9z"/>
  <circle cx="124.3" cy="126.5" r="42.5"/>
</svg>
        );
    }
}
module.exports = Component;
