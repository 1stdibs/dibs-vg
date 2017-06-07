const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-file-doc'].join(' ')} data-tn={'file-doc'}viewBox="0 0 250 250">
  <path d="M148.2,0H30v250h189V73.7L148.2,0z M148,12.8L203,70h-55V12.8z M210,241H39V9h100v70h71V241z"/>
  <polygon points="114.7,117 101.3,173.1 99.6,173.2 87.7,117 71,117 90.4,206 108.1,206 122.1,153.3 123.8,153.3134.8,206 151.9,206 174.9,117 146,117 146,132 154.6,132 145.1,173.5 143.4,173.1 130.9,117"/>
</svg>
        );
    }
}
module.exports = Component;
