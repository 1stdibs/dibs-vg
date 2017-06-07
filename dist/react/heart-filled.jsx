const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-heart-filled'].join(' ')} data-tn={'heart-filled'}viewBox="0 0 250 250">
  <path d="M29.3,129.8c-6.5-8.5-27.7-37.7-28.9-57.4C-0.8,52.3,4.1,36.2,15,24.6C30.1,8.5,51.4,6.8,59.9,6.8c1.3,0,2.2,0,2.8,0.1 c16.2,0.4,39.5,7.6,58.9,39.4l3.4,5.6l3.6-5.5c16.8-25.7,37.1-39,60.3-39.5c3,0,28.9-0.9,48,20.6c7.2,8.1,15.1,22.5,12.5,45.6 c-1.9,16.9-16.2,39.3-24.3,50.4c-11.8,16.1-88.5,108.3-100.2,122L29.3,129.8z"/>
</svg>
        );
    }
}
module.exports = Component;
