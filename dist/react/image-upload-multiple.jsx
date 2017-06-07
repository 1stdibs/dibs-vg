const React = require('react');
class Component extends React.Component {
    render() {
        return (
            <svg className={ [this.props.className, 'dibsvg-svg dibsvg-img-upload-multiple'].join(' ')} data-tn={'image-upload-multiple'}viewBox="0 0 250 250">
  <polygon points="131,17.2 131,137 140,137 140,16.6 186.6,58.8 192.6,52.1 135.4,0.3 82.2,52.2 88.5,58.7 	"/>
  <path d="M155,94v9h65v97.2l-63.9-49.7l-46.9,38.8L97,178.7L52,212V103h64v-9H43v34H22v122h166v-21h41V94H155z M179,241H31V137h12v92h136V241z M220,220H56.3l40.3-29.8l12.5,10.9l47.2-39l63.7,49.5V220z"/>
  <path d="M65.8,138.7c0,11.5,9.3,20.8,20.8,20.8s20.8-9.3,20.8-20.8s-9.3-20.8-20.8-20.8S65.8,127.2,65.8,138.7z M98.4,138.7c0,6.5-5.3,11.8-11.8,11.8s-11.8-5.3-11.8-11.8s5.3-11.8,11.8-11.8C93.1,126.9,98.4,132.2,98.4,138.7z"/>
</svg>
        );
    }
}
module.exports = Component;
