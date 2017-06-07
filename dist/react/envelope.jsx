const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-envelope'].join(' ')} data-tn={'envelope'}viewBox="0 0 518 518">
  <path d="M3,444.9V77.8h512v367.1H3z M498,427.9V107.4L259.5,315.5L20,106.3v321.6H498z M259.5,292.9l227-198.1H32.7L259.5,292.9z"/>
</svg>
        );
    }
}
module.exports = Component;
