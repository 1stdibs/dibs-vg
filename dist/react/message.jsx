const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-message'].join(' ')} data-tn={'message'}viewBox="0 0 250 250">
  <path d="M189,249.6L119.6,183H0V11h250v172h-61V249.6z M8,175h114.8l58.2,55.8V175h61V19H8V175z"/>
</svg>
        );
    }
}
module.exports = Component;
