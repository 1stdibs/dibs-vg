const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-share'].join(' ')} data-tn={'share'}viewBox="0 0 250 250">
  <polygon points="153,81 153,92 199,92 199,239 49,239 49,92 99,92 99,81 38,81 38,250 210,250 210,81  "/>
  <polygon points="120,21 120,180 131,180 131,21.7 161.9,55 169.8,47.6 125.8,0 81,45.9 88.6,53.5  "/>
</svg>
        );
    }
}
module.exports = Component;
