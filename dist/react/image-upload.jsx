const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-img-upload'].join(' ')} data-tn={'image-upload'}viewBox="0 0 250 250">
  <polygon points="120,17.2 120,137 129,137 129,16.6 175.6,58.8 181.6,52.1 124.4,0.3 71.2,52.2 77.5,58.7 	"/>
  <path d="M148,94v9h76v115.7l-75.3-58.5L94,205.4l-14.3-12.5L27,232V103h75v-9H18v144.6l-0.1,0.1l0.1,0.2V250h215V94H148z M224,241H29.9l49.4-36.6l14.6,12.7l55-45.5l75.1,58.4V241z"/>
  <path d="M44.2,144.3c0,13,10.5,23.5,23.5,23.5s23.5-10.5,23.5-23.5s-10.5-23.5-23.5-23.5S44.2,131.4,44.2,144.3z M82.2,144.3c0,8-6.5,14.5-14.5,14.5s-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5S82.2,136.3,82.2,144.3z"/>
</svg>
        );
    }
}
module.exports = Component;
