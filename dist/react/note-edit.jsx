const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-note-edit'].join(' ')} data-tn={'note-edit'}viewBox="0 0 250 250">
  <path d="M248.5,31.2L212.1,1.4l-26.9,32.8H0.3v215.3h218.2V67.9L248.5,31.2z M209.4,240.5H9.3V43.2h168.6L88.7,152.1l-0.8,36.8l37.1-7l84.4-103V240.5z"/>
</svg>
        );
    }
}
module.exports = Component;
