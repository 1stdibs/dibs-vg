const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-home'].join(' ')} data-tn={'home'}viewBox="0 0 250 250">
  <path d="M245.1,120.7l-122-114L0.3,120l7.5,8.1l16.3-15V245h70v-73h57v73h70V113.2l16.6,15.5L245.1,120.7z M210,103v131h-48v-73H83 v73H35V102.9l88-81.2L210,103L210,103z"/>
</svg>
        );
    }
}
module.exports = Component;
