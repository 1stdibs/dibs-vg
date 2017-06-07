const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-grid'].join(' ')} data-tn={'grid'}viewBox="0 0 420 420">
  <path d="M420,179.6H240.1V0H420V179.6z M420,420H240.1V240.1H420V420z M179.9,179.6H0V0h179.9V179.6z M179.9,420H0V240.1h179.9V420z"/>
</svg>
        );
    }
}
module.exports = Component;
