const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-checkmark'].join(' ')} data-tn={'checkmark'}viewBox="0 0 250 250">
  <polygon points="86.1,218.4 2.2,140.1 28.8,112 86.1,165.5 222.7,37.9 248.8,65.4 "/>
</svg>
        );
    }
}
module.exports = Component;
