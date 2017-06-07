const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'undefined'].join(' ')} data-tn={'triangle-down'}viewBox="0 0 250 250">
  <polygon points="125,34 250,34 187.5,142.3 125,250.5 62.5,142.3 0,34 "/>
</svg>
        );
    }
}
module.exports = Component;
