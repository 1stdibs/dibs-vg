const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-note-blank'].join(' ')} data-tn={'note-blank'}viewBox="0 0 250 250">
  <path d="M154.2,1.5H-0.2v246.3h249.7V96L154.2,1.5z M156.2,83.2l0-0.2V16.2l77.8,77.2h-68.2C156.3,92.3,156.1,85.3,156.2,83.2zM8.8,238.8V10.5h138.4v72.1c-0.1,1.1-0.1,4.9,1.6,8.9c1.9,4.4,6.3,9.8,16.3,10.8l0.2,0h75.1v136.4H8.8z"/>
</svg>
        );
    }
}
module.exports = Component;
