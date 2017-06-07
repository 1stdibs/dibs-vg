const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-folder'].join(' ')} data-tn={'folder'}viewBox="0 0 250 250">
  <path d="M229.2,63.9c-8.1-4-16-4-16.4-4h-77.4c-9.9,0-18.9-6.5-19.1-6.6L82.4,29.6c-1.4-1-8.1-5.8-10.7-7.1c-8.1-4-14.9-4-15.2-4H38.2c-10.5,0-18.8,3.2-24.8,9.5c-10,10.4-9.8,25.4-9.7,27.1L3.4,200.5c0,23.4,19.9,31.6,30.5,32.6h182.7h0.2c23.3-1.6,29.5-22.4,29.4-33.3v-107C246.2,75.8,237,67.7,229.2,63.9z"/>
</svg>
        );
    }
}
module.exports = Component;
