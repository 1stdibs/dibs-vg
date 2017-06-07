const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-cart-open'].join(' ')} data-tn={'cart-open'}viewBox="0 0 250 250">
  <polygon points="239.5,73.2 216.5,163 83.2,163 51.8,37 1,37 1,47 44,47 75.4,173 224.3,173 250.3,73.2"/>
  <circle cx="107.3" cy="201.7" r="11.7"/>
  <circle cx="193.3" cy="201.7" r="11.7"/>
</svg>
        );
    }
}
module.exports = Component;
