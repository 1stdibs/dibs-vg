const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-clock'].join(' ')} data-tn={'clock'}viewBox="0 0 250 250">
  <path d="M125,0.7C56.4,0.7,0.7,56.4,0.7,125S56.4,249.3,125,249.3S249.3,193.6,249.3,125S193.6,0.7,125,0.7z M125,239.3C62,239.3,10.7,188,10.7,125C10.7,62,62,10.7,125,10.7c63,0,114.3,51.3,114.3,114.3C239.3,188,188,239.3,125,239.3z"/>
  <polygon points="87.1,48.8 78,53.2 120.9,139 190,139 190,129 127.2,129"/>
</svg>
        );
    }
}
module.exports = Component;
