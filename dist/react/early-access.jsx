const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-early-access'].join(' ')} data-tn={'early-access'}viewBox="0 0 250 250">
  <path d="M56,238.7c-30.6,0-55.5-24.9-55.5-55.5s24.9-55.5,55.5-55.5c12.5,0,24.3,4.1,34.1,11.8l0.7,0.6L221,9.1l7.6,7.6l-16.4,16.5L250,71.6l-7.7,7.5l-37.7-38.4l-19.3,19.5L223,98.7l-7.7,7.5l-37.6-38.3l-79.2,79.6l0.6,0.7c8,9.9,12.4,22.3,12.4,34.9C111.5,213.8,86.6,238.7,56,238.7z M56,138.4c-24.7,0-44.7,20.1-44.7,44.7s20.1,44.7,44.7,44.7s44.7-20.1,44.7-44.7S80.6,138.4,56,138.4z"/>
</svg>
        );
    }
}
module.exports = Component;
