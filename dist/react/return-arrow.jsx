const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-return-arrow'].join(' ')} data-tn={'return-arrow'}viewBox="0 0 250 250">
  <path d="M230.7,21C218.3,7.3,194.3,7.3,188.8,7H69v10h120l0.4,0c0.2,0,21.6-0.3,33.5,10.5c6.8,6.2,10.2,15.4,10.2,27V158l0,0.1c0,0.1,0.1,7.6-5.1,15.3c-7.2,10.7-21.2,16.8-40.5,17.5H20.1l32.9-41.4l-7.8-6.2L4.1,195l40.6,51.8l7.9-6.2l-31-39.6h166l0.1,0c15.8-0.6,37.1-4.9,48.5-22c6.7-10,6.8-19.9,6.8-21.1V54.5C242.3,37.7,238,29.2,230.7,21z"/>
</svg>
        );
    }
}
module.exports = Component;
