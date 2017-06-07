const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-file-excel'].join(' ')} data-tn={'file-excel'}viewBox="0 0 250 250">
  <path d="M150.2,0H32v250h189V73.7L150.2,0z M150,12.8L205,70h-55V12.8z M212,241H41V9h100v70h71V241z"/>
  <polygon points="100.5,104.5 78.2,104.5 113.9,160.3 78.2,216.1 100.5,216.1 125.1,173.7 149.7,216.1 172,216.1 136.3,160.3 172,104.5 149.7,104.5 125.1,146.9"/>
</svg>
        );
    }
}
module.exports = Component;
