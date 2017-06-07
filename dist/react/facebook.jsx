const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-facebook'].join(' ')} data-tn={'facebook'}viewBox="0 0 250 250">
  <path d="M141.7,250V135.8H180l5.7-44.3h-44.2V63.2c0-13,3.6-21.5,21.9-21.5H187v-40C183,1.1,169.1,0,152.8,0c-34,0-57.2,20.8-57.2,58.7v32.8H57.6v44.3h38.3V250H141.7L141.7,250z"/>
</svg>
        );
    }
}
module.exports = Component;
