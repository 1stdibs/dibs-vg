const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-list'].join(' ')} data-tn={'list'}viewBox="0 0 420 420">
  <ellipse cx="36.1" cy="42.2" rx="35.6" ry="36.2"/>
  <ellipse cx="36.1" cy="210.3" rx="35.6" ry="36.2"/>
  <ellipse cx="36.1" cy="377.3" rx="35.6" ry="36.2"/>
  <rect x="140.8" y="0.4" width="278.7" height="85.4"/>
  <rect x="140.8" y="167.2" width="278.7" height="85.4"/>
  <rect x="140.8" y="334" width="278.7" height="85.4"/>
</svg>
        );
    }
}
module.exports = Component;
