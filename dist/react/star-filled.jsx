const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-star-filled'].join(' ')} data-tn={'star-filled'}viewBox="0 -8 471 471">
  <path d="M381.12 448l-145.6-104.747-145.493 104.747 54.613-170.773-144.64-106.133 179.307-0.853 56.213-170.24 56.214 170.347 179.307 0.853-144.64 106.027 54.72 170.773z"/>
</svg>
        );
    }
}
module.exports = Component;
