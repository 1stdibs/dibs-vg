const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-pdf'].join(' ')} data-tn={'pdf'}viewBox="0 0 250 250">
  <rect x="67.8" y="147.9" width="115.3" height="7"/>
  <rect x="67.8" y="175.4" width="115.3" height="7"/>
  <rect x="67.8" y="202.8" width="115.3" height="7"/>
  <path d="M181.5,38h-113v85.9h113V38z M174.5,116.9h-99V45h99V116.9z"/>
  <path d="M27.4,0.7v248.1H224V0.7H27.4z M215,239.8H36.4V9.7H215V239.8z"/>
</svg>
        );
    }
}
module.exports = Component;
