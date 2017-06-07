const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-hamburger-menu'].join(' ')} data-tn={'hamburger-menu'}viewBox="-220.7 -160.7 500 500">
  <path d="M260.8,107.7h-463c-10.2,0-18.5-8.2-18.5-18.4s8.3-18.4,18.5-18.4h463 c10.2,0,18.5,8.2,18.5,18.4S271,107.7,260.8,107.7z M260.8-30h-463c-10.2,0-18.5-8.2-18.5-18.4s8.3-18.4,18.5-18.4h463 c10.2,0,18.5,8.2,18.5,18.4S271-30,260.8-30z M-202.2,208.6h463c10.2,0,18.5,8.2,18.5,18.4c0,10.1-8.3,18.4-18.5,18.4h-463 c-10.2,0-18.5-8.2-18.5-18.4C-220.7,216.8-212.4,208.6-202.2,208.6z"/>
</svg>
        );
    }
}
module.exports = Component;
