const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-circle-plus'].join(' ')} data-tn={'circle-plus'}viewBox="0 0 250 250">
  <path d="M125.2-1.2C56.2-1.2,0,55,0,124s56.2,125.2,125.2,125.2c69.1,0,125.2-56.1,125.2-125.1S194.2-1.2,125.2-1.2z M125.3,240.1C61.2,240.1,9.1,188,9.1,124S61.2,7.8,125.2,7.8c64.1,0,116.3,52,116.3,116.1S189.4,240.1,125.3,240.1z"/>
  <polygon points="133.1,79.4 115.1,79.4 115.1,115.4 77.6,115.4 77.6,133.4 115.1,133.4 115.1,171.6 133.1,171.6 133.1,133.4169.8,133.4 169.8,115.4 133.1,115.4"/>
</svg>
        );
    }
}
module.exports = Component;
