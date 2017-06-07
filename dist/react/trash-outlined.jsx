const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-trash-outlined'].join(' ')} data-tn={'trash-outlined'}viewBox="0 0 250 250">
  <path d="M240,31h-60.3l-3.9-16.2l0-0.2c-0.1-0.4-1.2-3.9-4.2-7.4c-2.9-3.3-8.1-7.2-16.7-7.2H92.1c-0.4,0-3.6,0.1-7.4,1.9c-3.5,1.7-8.1,5.3-10.3,12.6L71.7,31H10v9h18.8l15.7,185.5c0,1.8,0.3,9.8,6.4,16.3c5.2,5.4,12.8,8.2,22.8,8.2h111.5l0.2,0c7.9-0.9,23-7.3,23.6-25.5L223.3,40H240V31z M83.1,16.9C85.4,9.6,91.4,9,92.2,9h62.5c9.4,0,12,7,12.3,8l3.4,14H80.8L83.1,16.9z M200,223.8l0,0.2c-0.4,14.2-13.1,16.6-15.4,16.9h-111c-7.3,0-12.8-1.8-16.2-5.3c-4.2-4.3-4-10.1-4-10.1l0-0.3L37.8,40h176.4L200,223.8z"/>
</svg>
        );
    }
}
module.exports = Component;
