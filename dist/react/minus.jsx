const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-minus'].join(' ')} data-tn={'minus'}viewBox="0 -120 250 250">
  <rect width="250" height="15" rx="10"/>
</svg>
        );
    }
}
module.exports = Component;
