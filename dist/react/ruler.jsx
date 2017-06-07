const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-ruler'].join(' ')} data-tn={'ruler'}viewBox="0 0 250 250">
  <path d="M173.4.4L0 173l74.9 75.2L248.3 75.6 173.4.4zM12.8 173L173.4 13.1l62.2 62.5-22.3 22.2-21.6-21.6-8.5 8.5 21.6 21.6L187 124l-39.4-38.8-8.4 8.5 39.3 38.7-19.7 19.6-24.2-23.7-8.4 8.6 24.1 23.6-19 18.9L90 137.5l-8.6 8.4 41.3 42-18.4 18.3-21.9-21.9-8.5 8.5 21.9 21.9-21 20.9-62-62.6z"/>
</svg>
        );
    }
}
module.exports = Component;
