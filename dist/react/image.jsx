const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-image'].join(' ')} data-tn={'image'}viewBox="0 0 250 250">
  <path d="M239,34.6H10.5C4.8,34.6,0,39.3,0,45.1v160.4c0,5.8,4.7,10.5,10.5,10.5H239c5.8,0,10.5-4.7,10.5-10.5V45.1C249.5,39.3,244.8,34.6,239,34.6z M10.5,43.6H239c0.8,0,1.5,0.7,1.5,1.5v137.7l-47-35.2c-5.5-4-11.1,0-11.1,0l-45.9,33c-5.8,4-9-1-9-1L77,123.2c-6.6-5.7-12.4-0.1-12.4-0.1L9,182.4V45.1C9,44.3,9.7,43.6,10.5,43.6z"/>
  <circle cx="158" cy="93.5" r="16.5"/>
</svg>
        );
    }
}
module.exports = Component;
