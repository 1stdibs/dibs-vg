const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-trade-logo'].join(' ')} data-tn={'trade-logo'}viewBox="0 0 250 250">
  <path d="M125.1,250l-2.5-1.5c-1-0.6-24.9-14.8-50.8-47.9c-23.7-30.4-53.6-83.3-60.8-162.4l-0.2-2.5l2.1-1.5C14.8,32.8,60,0.3,125.4,0.3c38.4,0,75.8,11.3,111,33.7l2.1,1.4l0,2.5c0,1.4-0.7,34-14.7,76.4c-12.9,39.2-40.1,94.3-96.3,134.1L125.1,250z M20.3,40c7.4,75.5,35.9,125.9,58.6,155.1c20.1,25.8,39.2,39.7,45.8,44.1c52.6-38.3,78.3-90.5,90.5-127.8c11.4-34.6,13.7-62.9,14.1-71.2c-33.1-20.5-68.1-31-104-31C70.5,9.3,29.7,33.8,20.3,40z"/>
  <path d="M124.9,209l-1.8-1.1c-0.7-0.4-18.4-10.9-37.4-35.3C68.2,150.3,46.3,111.4,41,53.2l-0.2-1.9l1.5-1.1c1.4-1,34.6-24.9,82.8-24.9c28.3,0,55.8,8.3,81.7,24.8l1.6,1l0,1.9c0,1-0.5,25-10.8,56.2c-9.5,28.8-29.5,69.4-70.9,98.7L124.9,209zM47.8,54.5c5.4,55.5,26.4,92.6,43.1,114.1c14.8,19,28.9,29.2,33.7,32.5c38.7-28.2,57.6-66.6,66.6-94c8.4-25.4,10.1-46.2,10.4-52.4c-24.4-15.1-50.1-22.8-76.5-22.8C84.7,31.9,54.7,50,47.8,54.5z"/>
</svg>
        );
    }
}
module.exports = Component;
