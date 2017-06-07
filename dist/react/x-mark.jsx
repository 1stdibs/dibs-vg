const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg dibsvg-x-mark'].join(' ')} data-tn={'x-mark'}viewBox="0 0 16 16">
  <path d="M9.41421356,8 L15.7781746,1.63603897 L14.363961,0.221825407 L8,6.58578644 L1.63603897,0.221825407 L0.221825407,1.63603897 L6.58578644,8 L0.221825407,14.363961 L1.63603897,15.7781746 L8,9.41421356 L14.363961,15.7781746 L15.7781746,14.363961 L9.41421356,8 Z"/>
</svg>
        );
    }
}
module.exports = Component;
