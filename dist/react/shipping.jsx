const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-shipping'].join(' ')} data-tn={'shipping'}viewBox="0 0 250 250">
  <path d="M125.5,1.1L2.1,41l10.4,145.6L125,248.1l113.1-60.6l10-145.1L125.5,1.1z M121,236.7L20.2,181.6l-9.3-131L59,74.2V108l26,13.5l-0.1-34.6l36.1,17.7V236.7z M124.7,97.4L87.2,79l85.9-37.4l-27.3-8.9L60.5,65.9L17.1,44.7L125.5,9.5l107.9,36.4L124.7,97.4z M230.5,182.4L129,236.8V104.3L239.4,52L230.5,182.4z"/>
</svg>
        );
    }
}
module.exports = Component;
