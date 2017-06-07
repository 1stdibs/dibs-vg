const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-play-button'].join(' ')} data-tn={'play-button'}viewBox="0 0 100 100">
  <path d="M50,100 C22.3857625,100 0,77.6142375 0,50 C0,22.3857625 22.3857625,0 50,0 C77.6142375,0 100,22.3857625 100,50 C100,77.6142375 77.6142375,100 50,100 Z M50,96 C75.4050985,96 96,75.4050985 96,50 C96,24.5949015 75.4050985,4 50,4 C24.5949015,4 4,24.5949015 4,50 C4,75.4050985 24.5949015,96 50,96 Z M77,50 L35,75 L35,25 L77,50 Z"/>
</svg>
        );
    }
}
module.exports = Component;
