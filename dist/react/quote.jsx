const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-quote'].join(' ')} data-tn={'quote'}viewBox="0 0 250 250">
  <path d="M193.2,142h-25.1c3.3-47,40.9-82.6,81.9-106.9l-7.5-12.5c-65.2,32.6-100.3,88.6-100.3,131.2c0,46.8,14.2,75.2,59.3,75.2 c20,0,40.1-21,40.1-42.7C241.6,163.8,227.4,142,193.2,142z"/>
  <path d="M108,35.1l-7.5-12.5C35.3,55.2,0.2,111.2,0.2,153.8c0,46.8,14.2,75.2,59.3,75.2c20.1,0,40.1-21,40.1-42.7 c0-22.6-14.2-44.4-48.5-44.4H26.1C29.4,95,67,59.4,108,35.1z"/>
</svg>
        );
    }
}
module.exports = Component;
