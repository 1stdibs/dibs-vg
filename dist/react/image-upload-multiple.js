'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { className: [this.props.className, 'dibsvg-svg dibsvg-img-upload-multiple'].join(' '), 'data-tn': 'image-upload-multiple', viewBox: '0 0 250 250' },
                React.createElement('polygon', { points: '131,17.2 131,137 140,137 140,16.6 186.6,58.8 192.6,52.1 135.4,0.3 82.2,52.2 88.5,58.7 \t' }),
                React.createElement('path', { d: 'M155,94v9h65v97.2l-63.9-49.7l-46.9,38.8L97,178.7L52,212V103h64v-9H43v34H22v122h166v-21h41V94H155z M179,241H31V137h12v92h136V241z M220,220H56.3l40.3-29.8l12.5,10.9l47.2-39l63.7,49.5V220z' }),
                React.createElement('path', { d: 'M65.8,138.7c0,11.5,9.3,20.8,20.8,20.8s20.8-9.3,20.8-20.8s-9.3-20.8-20.8-20.8S65.8,127.2,65.8,138.7z M98.4,138.7c0,6.5-5.3,11.8-11.8,11.8s-11.8-5.3-11.8-11.8s5.3-11.8,11.8-11.8C93.1,126.9,98.4,132.2,98.4,138.7z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;