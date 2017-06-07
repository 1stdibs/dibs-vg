const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-email'].join(' ')} data-tn={'email'}viewBox="0 0 250 250">
  <path d="M0,224V26h250v198H0z M239,213V37h-8.4L126.3,160.9L19.6,37H11v176H239z M126.1,144.3L216.4,37H34L126.1,144.3z"/>
</svg>
        );
    }
}
module.exports = Component;
