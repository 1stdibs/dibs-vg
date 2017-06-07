const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-tag'].join(' ')} data-tn={'tag'}viewBox="0 0 16 16">
  <g transform="translate(-969.000000, -211.000000)">
    <path d="M971.9,215.7l3-4.4l4.4,0l2.8,4.4v10.9l-10.2,0V215.7z M977,215.7c0.8,0,1.5-0.6,1.5-1.5 c0-0.8-0.6-1.5-1.5-1.5c-0.8,0-1.5,0.6-1.5,1.5C975.5,215.1,976.3,215.7,977,215.7z"/>
  </g>
</svg>
        );
    }
}
module.exports = Component;
