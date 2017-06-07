const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-reject'].join(' ')} data-tn={'reject'}viewBox="0 0 250 250">
  <path class="st0" d="M155.3,196.1V250h-55v-53.9H155.3z M139.9,175.1H115L101.7,67.2V0h51.8v67.2L139.9,175.1z"/>
</svg>
        );
    }
}
module.exports = Component;
