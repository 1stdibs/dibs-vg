const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-pen'].join(' ')} data-tn={'pen'}viewBox="-30 0 518 518">
  <polygon points="45.5,354.7 0,518 165.4,455.2 408,156.5 285.3,61.6"/>
  <path d="M443.8,55.3c-9.4-8.9-54.8-44.4-61.3-48.2c-31-17.8-49.6,3.1-49.6,3.1l-23.8,27.2l117.8,91.1l25.2-30C452.1,98.6,465.2,75.6,443.8,55.3z"/>
</svg>
        );
    }
}
module.exports = Component;
