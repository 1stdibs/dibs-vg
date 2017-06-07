const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-circle-plus-filled'].join(' ')} data-tn={'circle-plus-filled'}viewBox="0 0 250 250">
  <path d="M250,124.940715 C250,193.916268 193.961988,250 124.994613,250 C56.0487868,250 0,193.916268 0,125.048506 C0,56.1699651 56.0487868,0 124.897643,0 C193.843469,0 250,55.9543828 250,124.940715 Z M134.59359,75 L115.266812,75 L115.266812,113.660113 L75,113.660113 L75,132.984793 L115.266812,132.984793 L115.266812,174 L134.59359,174 L134.59359,132.984793 L174,132.984793 L174,113.660113 L134.59359,113.660113 L134.59359,75 Z"/>
</svg>
        );
    }
}
module.exports = Component;
