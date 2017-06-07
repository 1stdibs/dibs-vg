const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-circle-check'].join(' ')} data-tn={'circle-check'}viewBox="0 0 250 250">
  <path d="M125.3-0.8C56.3-0.8,0.2,55.3,0.2,124.3s56.2,125.2,125.2,125.2s125.2-56.2,125.2-125.2S194.4-0.8,125.3-0.8z M125.3,240.5c-64.1,0-116.2-52.1-116.2-116.2S61.3,8.2,125.3,8.2s116.2,52.1,116.2,116.2S189.4,240.5,125.3,240.5z"/>
  <polygon points="106.2,145.1 74.6,113.8 62,126.6 105.8,169.9 195.1,88.1 182.9,74.9"/>
</svg>
        );
    }
}
module.exports = Component;
